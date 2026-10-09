import type { LiveMatch } from './sportsDataEngine';

export type LiveFootballFeedState = 'loading' | 'available' | 'empty' | 'unavailable';

export interface LiveFootballFeedResult {
  state: Exclude<LiveFootballFeedState, 'loading'>;
  matches: LiveMatch[];
  message: string;
  fetchedAt?: string;
}

interface LiveFootballApiResponse {
  data?: unknown;
  dataStatus?: string;
  fetchedAt?: string;
  error?: { message?: string };
}

function isLiveMatch(value: unknown): value is LiveMatch {
  if (!value || typeof value !== 'object') return false;
  const match = value as Partial<LiveMatch>;
  return Boolean(
    typeof match.id === 'string' &&
    match.sport === 'football' &&
    match.competition && typeof match.competition.id === 'string' &&
    match.home && typeof match.home.id === 'string' &&
    match.away && typeof match.away.id === 'string' &&
    typeof match.startTime === 'string' && Number.isFinite(Date.parse(match.startTime)) &&
    typeof match.lastUpdated === 'string' && Number.isFinite(Date.parse(match.lastUpdated)) &&
    Array.isArray(match.events) &&
    ['scheduled', 'live', 'halftime', 'finished', 'postponed', 'cancelled'].includes(String(match.state))
  );
}

/**
 * Retrieves verified football data from the same-origin server API.
 * Provider credentials are never requested from or sent by the browser.
 * This service never substitutes local sample fixtures for provider results.
 */
export async function fetchLiveFootballMatches(): Promise<LiveFootballFeedResult> {
  try {
    const response = await fetch('/api/sports/football/live', {
      headers: { Accept: 'application/json' },
      signal: AbortSignal.timeout(10_000),
      cache: 'no-store',
    });

    const payload = (await response.json()) as LiveFootballApiResponse;
    if (!response.ok || payload.dataStatus !== 'fresh' || !Array.isArray(payload.data)) {
      return {
        state: 'unavailable',
        matches: [],
        message: payload.error?.message || 'Verified live football data is currently unavailable.',
      };
    }

    const matches = payload.data.filter(isLiveMatch);
    if (matches.length === 0) {
      return {
        state: 'empty',
        matches: [],
        message: 'The provider returned no current live football fixtures.',
        fetchedAt: payload.fetchedAt,
      };
    }

    return {
      state: 'available',
      matches,
      message: 'Live football data received from the configured provider.',
      fetchedAt: payload.fetchedAt,
    };
  } catch {
    return {
      state: 'unavailable',
      matches: [],
      message: 'The live football service could not be reached from this app.',
    };
  }
}
