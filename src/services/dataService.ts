import type { Match, NewsArticle, Stadium, Team, TravelSpot } from '../types';

/**
 * Application-facing football data service.
 *
 * Screens should depend on this boundary instead of importing a specific
 * API provider. The first implementation uses local development data; a
 * remote implementation can replace it later without rewriting the UI.
 */
export interface FootballDataService {
  getMatches(): Promise<Match[]>;
  getTeams(): Promise<Team[]>;
  getNews(): Promise<NewsArticle[]>;
  getStadiums(): Promise<Stadium[]>;
  getTravelSpots(): Promise<TravelSpot[]>;
}

export interface DataServiceOptions {
  useMockData?: boolean;
}
