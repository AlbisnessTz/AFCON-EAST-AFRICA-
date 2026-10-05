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

export type MatchState = 'scheduled' | 'live' | 'halftime' | 'finished' | 'postponed' | 'cancelled';

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
}

export interface SportsDataProvider {
  readonly name: string;
  getLiveMatches(sport?: SportCode): Promise<LiveMatch[]>;
  getMatches(params?: { sport?: SportCode; competitionId?: string; date?: string }): Promise<LiveMatch[]>;
  getCompetition(id: string): Promise<SportsCompetition | null>;
}

/**
 * Production rule: the UI must consume normalized SportsLab data, never a
 * third-party provider response directly. Provider adapters belong behind
 * this boundary so we can change vendors without rewriting the app.
 */
export class SportsDataEngine {
  constructor(private readonly providers: SportsDataProvider[] = []) {}

  async getLiveMatches(sport?: SportCode): Promise<LiveMatch[]> {
    const results = await Promise.all(
      this.providers.map((provider) => provider.getLiveMatches(sport))
    );

    const unique = new Map<string, LiveMatch>();
    for (const matches of results) {
      for (const match of matches) unique.set(match.id, match);
    }

    return Array.from(unique.values()).sort(
      (a, b) => Date.parse(a.startTime) - Date.parse(b.startTime)
    );
  }
}
