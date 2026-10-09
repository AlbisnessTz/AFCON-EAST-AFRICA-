import 'dotenv/config';
import express from 'express';

const app = express();
const API_FOOTBALL_BASE_URL = (process.env.API_FOOTBALL_BASE_URL || 'https://v3.football.api-sports.io').replace(/\/$/, '');
const LIVE_CACHE_TTL_MS = Math.max(60_000, Number(process.env.LIVE_CACHE_TTL_MS || 1_200_000));

app.disable('x-powered-by');
app.use(express.json({ limit: '32kb' }));

let liveCache = { expiresAt: 0, payload: null };

function mapFixtureStatus(shortCode) {
  if (['1H', '2H', 'ET', 'P', 'LIVE', 'BT'].includes(shortCode)) return 'live';
  if (['HT'].includes(shortCode)) return 'halftime';
  if (['FT', 'AET', 'PEN'].includes(shortCode)) return 'finished';
  if (['PST', 'SUSP', 'INT'].includes(shortCode)) return 'postponed';
  if (['CANC', 'ABD', 'AWD', 'WO'].includes(shortCode)) return 'cancelled';
  return 'scheduled';
}

/** Convert API-Football's response into a provider-neutral, timestamped shape. */
export function normalizeLiveFixtures(payload, now = new Date().toISOString()) {
  if (!payload || !Array.isArray(payload.response)) {
    throw new Error('The sports provider returned an unexpected response shape.');
  }

  return payload.response.map((item) => {
    const fixture = item?.fixture;
    const league = item?.league;
    const home = item?.teams?.home;
    const away = item?.teams?.away;
    const goals = item?.goals;

    if (!fixture?.id || !league?.id || !home?.id || !away?.id || !fixture?.date) {
      return null;
    }

    const sourceUpdatedAt = fixture.status?.elapsed != null
      ? (fixture.status.elapsedUpdated || null)
      : null;

    return {
      id: String(fixture.id),
      sport: 'football',
      competition: {
        id: String(league.id),
        name: String(league.name || 'Unknown competition'),
        country: league.country ? String(league.country) : undefined,
        logoUrl: league.logo ? String(league.logo) : undefined,
        season: league.season != null ? String(league.season) : undefined,
      },
      home: {
        id: String(home.id),
        name: String(home.name || 'Unknown team'),
        shortName: home.name ? String(home.name) : undefined,
        country: home.country ? String(home.country) : undefined,
        logoUrl: home.logo ? String(home.logo) : undefined,
      },
      away: {
        id: String(away.id),
        name: String(away.name || 'Unknown team'),
        shortName: away.name ? String(away.name) : undefined,
        country: away.country ? String(away.country) : undefined,
        logoUrl: away.logo ? String(away.logo) : undefined,
      },
      state: mapFixtureStatus(fixture.status?.short),
      startTime: new Date(fixture.date).toISOString(),
      lastUpdated: now,
      homeScore: Number.isInteger(goals?.home) ? goals.home : undefined,
      awayScore: Number.isInteger(goals?.away) ? goals.away : undefined,
      venue: fixture.venue?.name ? String(fixture.venue.name) : undefined,
      city: fixture.venue?.city ? String(fixture.venue.city) : undefined,
      country: league.country ? String(league.country) : undefined,
      events: [],
      source: {
        provider: 'API-Football',
        fetchedAt: now,
        sourceUpdatedAt,
      },
    };
  }).filter(Boolean);
}

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'sportslab-africa-api',
    liveDataConfigured: Boolean(process.env.API_FOOTBALL_KEY),
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/sports/football/live', async (_req, res) => {
  const apiKey = process.env.API_FOOTBALL_KEY;
  if (!apiKey) {
    return res.status(503).json({
      error: {
        code: 'LIVE_DATA_NOT_CONFIGURED',
        message: 'Verified live football data is not configured on the server yet.',
      },
      dataStatus: 'unavailable',
    });
  }

  const nowMs = Date.now();
  if (liveCache.payload && liveCache.expiresAt > nowMs) {
    res.set('Cache-Control', 'no-store');
    return res.json({ ...liveCache.payload, cache: { hit: true } });
  }

  try {
    const response = await fetch(`${API_FOOTBALL_BASE_URL}/fixtures?live=all`, {
      headers: { 'x-apisports-key': apiKey, accept: 'application/json' },
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      return res.status(502).json({
        error: {
          code: 'SPORTS_PROVIDER_ERROR',
          message: 'The live football provider is temporarily unavailable.',
        },
        dataStatus: 'unavailable',
      });
    }

    const providerPayload = await response.json();
    if (providerPayload?.errors && Object.keys(providerPayload.errors).length > 0) {
      return res.status(502).json({
        error: {
          code: 'SPORTS_PROVIDER_ERROR',
          message: 'The live football provider rejected the request.',
        },
        dataStatus: 'unavailable',
      });
    }

    const fetchedAt = new Date().toISOString();
    const matches = normalizeLiveFixtures(providerPayload, fetchedAt);
    const payload = {
      data: matches,
      dataStatus: 'fresh',
      source: 'API-Football',
      fetchedAt,
      count: matches.length,
    };

    liveCache = { payload, expiresAt: Date.now() + LIVE_CACHE_TTL_MS };
    res.set('Cache-Control', 'no-store');
    return res.json({ ...payload, cache: { hit: false } });
  } catch {
    return res.status(502).json({
      error: {
        code: 'SPORTS_PROVIDER_UNAVAILABLE',
        message: 'Could not retrieve live football data. Please retry later.',
      },
      dataStatus: 'unavailable',
    });
  }
});

export default app;
