export type SportCode =
  | 'football'
  | 'basketball'
  | 'tennis'
  | 'cricket'
  | 'rugby'
  | 'motorsport'
  | 'volleyball'
  | 'handball'
  | 'baseball'
  | 'boxing'
  | 'athletics';

export type MatchState =
  | 'scheduled'
  | 'live'
  | 'halftime'
  | 'finished'
  | 'postponed'
  | 'cancelled';

export interface SportsCompetition {
  id: string;
  sport: SportCode;
  name: string;
  country?: string;
  region?: string;
  season?: string;
  logoUrl?: string;
}

export interface SportsTeam {
  id: string;
  name: string;
  shortName?: string;
  country?: string;
  logoUrl?: string;
}

export interface LiveEvent {
  id: string;
  type: string;
  minute?: number;
  period?: string;
  teamId?: string;
  playerName?: string;
  description?: string;
  timestamp: string;
}

export interface LiveMatch {
  id: string;
  sport: SportCode;
  competition: SportsCompetition;
  home: SportsTeam;
  away: SportsTeam;
  state: MatchState;
  startTime: string;
  lastUpdated: string;
  homeScore?: number;
  awayScore?: number;
  venue?: string;
  city?: string;
  country?: string;
  events: LiveEvent[];
  /** Provider attribution and freshness must be populated by real adapters. */
  source?: {
    provider: string;
    fetchedAt: string;
    sourceUpdatedAt?: string;
  };
}

export interface SportsDataProvider {
  readonly name: string;
  getLiveMatches(sport?: SportCode): Promise<LiveMatch[]>;
  getMatches(params?: { sport?: SportCode; competitionId?: string; date?: string }): Promise<LiveMatch[]>;
  getCompetition(id: string): Promise<SportsCompetition | null>;
}

export interface ProviderHealth {
  provider: string;
  status: 'available' | 'degraded';
  lastCheckedAt: string | null;
  lastError: string | null;
}

/**
 * Normalizes provider access behind one boundary. Provider failures are
 * isolated so one unavailable vendor does not take down all available data.
 *
 * Important: this class does not turn local/sample data into live data.
 * Production adapters must validate payloads and attach source/freshness data.
 */
export class SportsDataEngine {
  private readonly health = new Map<string, ProviderHealth>();

  constructor(private readonly providers: SportsDataProvider[] = []) {
    for (const provider of providers) {
      this.health.set(provider.name, {
        provider: provider.name,
        status: 'available',
        lastCheckedAt: null,
        lastError: null,
      });
    }
  }

  getProviderHealth(): ProviderHealth[] {
    return Array.from(this.health.values()).map((item) => ({ ...item }));
  }

  async getLiveMatches(sport?: SportCode): Promise<LiveMatch[]> {
    const results = await Promise.all(
      this.providers.map(async (provider) => {
        try {
          const matches = await provider.getLiveMatches(sport);
          this.markHealthy(provider.name);
          return matches;
        } catch (error) {
          this.markDegraded(provider.name, error);
          return [];
        }
      })
    );

    return this.normalizeAndDeduplicate(results.flat());
  }

  async getMatches(params?: {
    sport?: SportCode;
    competitionId?: string;
    date?: string;
  }): Promise<LiveMatch[]> {
    const results = await Promise.all(
      this.providers.map(async (provider) => {
        try {
          const matches = await provider.getMatches(params);
          this.markHealthy(provider.name);
          return matches;
        } catch (error) {
          this.markDegraded(provider.name, error);
          return [];
        }
      })
    );

    return this.normalizeAndDeduplicate(results.flat());
  }

  async getCompetition(id: string): Promise<SportsCompetition | null> {
    for (const provider of this.providers) {
      try {
        const competition = await provider.getCompetition(id);
        this.markHealthy(provider.name);
        if (competition) return competition;
      } catch (error) {
        this.markDegraded(provider.name, error);
      }
    }

    return null;
  }

  private normalizeAndDeduplicate(matches: LiveMatch[]): LiveMatch[] {
    const unique = new Map<string, LiveMatch>();

    for (const match of matches) {
      if (!this.isUsableMatch(match)) continue;

      // Different providers may reuse event IDs. A fixture fingerprint avoids
      // accidentally replacing an unrelated match with a colliding provider ID.
      const key = [
        match.sport,
        match.competition.id,
        match.home.id,
        match.away.id,
        match.startTime,
      ].join(':');
      const existing = unique.get(key);

      if (!existing || this.updatedAt(match) > this.updatedAt(existing)) {
        unique.set(key, match);
      }
    }

    return Array.from(unique.values()).sort(
      (a, b) => Date.parse(a.startTime) - Date.parse(b.startTime)
    );
  }

  private isUsableMatch(match: LiveMatch): boolean {
    return Boolean(
      match &&
      match.id &&
      match.competition?.id &&
      match.home?.id &&
      match.away?.id &&
      match.home.id !== match.away.id &&
      Number.isFinite(Date.parse(match.startTime)) &&
      Number.isFinite(Date.parse(match.lastUpdated)) &&
      Array.isArray(match.events) &&
      (match.homeScore === undefined ||
        (Number.isInteger(match.homeScore) && match.homeScore >= 0)) &&
      (match.awayScore === undefined ||
        (Number.isInteger(match.awayScore) && match.awayScore >= 0))
    );
  }

  private updatedAt(match: LiveMatch): number {
    return Date.parse(match.lastUpdated);
  }

  private markHealthy(provider: string): void {
    this.health.set(provider, {
      provider,
      status: 'available',
      lastCheckedAt: new Date().toISOString(),
      lastError: null,
    });
  }

  private markDegraded(provider: string, error: unknown): void {
    // Keep a short, non-sensitive message for diagnostics; never log provider
    // response bodies or credentials here.
    const message = error instanceof Error ? error.message : 'Provider request failed';
    this.health.set(provider, {
      provider,
      status: 'degraded',
      lastCheckedAt: new Date().toISOString(),
      lastError: message.slice(0, 240),
    });
  }
}
