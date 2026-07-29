export type TabType = 
  | 'home'
  | 'matches'
  | 'teams'
  | 'travel'
  | 'news'
  | 'stadiums'
  | 'history'
  | 'profile'
  | 'settings';

export type HistoryCategory = 'place' | 'person' | 'heritage' | 'culture' | 'attraction';

export interface HistoryItem {
  id: string;
  title: string;
  country: 'Tanzania' | 'Kenya' | 'Uganda';
  countryFlag: string;
  category: HistoryCategory;
  periodOrEra: string;
  location: string;
  image: string;
  summary: string;
  description: string[];
  keyHighlights: string[];
  famousFor: string;
  historicalSignificance: string;
}

export type TravelCategory = 'hotel' | 'restaurant' | 'attraction' | 'hospital' | 'police' | 'atm';

export interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeFlag: string;
  awayFlag: string;
  homeScore?: number;
  awayScore?: number;
  date: string;
  time: string;
  status: 'upcoming' | 'live' | 'finished';
  group: string;
  stadium?: string;
  city: string;
  venueImage?: string;
  poll: {
    homeVotes: number;
    drawVotes: number;
    awayVotes: number;
  };
  h2hMeetings: {
    id: string;
    date: string;
    competition: string;
    homeTeam: string;
    awayTeam: string;
    homeFlag: string;
    awayFlag: string;
    score: string;
    result: 'home' | 'away' | 'draw';
  }[];
  recentFormHome: {
    id: string;
    date: string;
    opponent: string;
    opponentFlag: string;
    score: string;
    result: 'W' | 'D' | 'L';
  }[];
  recentFormAway: {
    id: string;
    date: string;
    opponent: string;
    opponentFlag: string;
    score: string;
    result: 'W' | 'D' | 'L';
  }[];
  predictedLineupHome?: { name: string; position: string; number: number }[];
  predictedLineupAway?: { name: string; position: string; number: number }[];
}

export interface Player {
  name: string;
  position: 'GK' | 'DEF' | 'MID' | 'FWD';
  number: number;
  club: string;
}

export interface Team {
  id: string;
  name: string;
  country: string;
  flag: string;
  logo: string;
  coach: string;
  group: string;
  fifaRank: number;
  captain: string;
  shortDescription: string;
  keyPlayers: string[];
  trophiesCount: number;
  bannerImage: string;
  formation: string;
  squad: Player[];
  stats: {
    played: number;
    won: number;
    drawn: number;
    lost: number;
    goalsFor: number;
    goalsAgainst: number;
    points: number;
  };
  recentForm: ('W' | 'D' | 'L')[];
}

export interface TravelSpot {
  id: string;
  name: string;
  category: TravelCategory;
  city: string;
  rating: number;
  reviewsCount: number;
  address: string;
  phone: string;
  priceRange?: string;
  image: string;
  distanceKm: number;
  description: string;
  features: string[];
  isOpen24h?: boolean;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  summary: string;
  content: string[];
  tags: string[];
  isTrending?: boolean;
}

export interface Stadium {
  id: string;
  name: string;
  city: string;
  capacity: number;
  openedYear: number;
  image: string;
  description: string;
  scheduledMatches: number;
  locationAddress: string;
}

export interface UserProfile {
  name: string;
  email: string;
  password?: string;
  country: string;
  language: string;
  favoriteTeamId: string;
  photoUrl: string;
  avatarType?: 'preset' | 'custom';
  isAuthenticated?: boolean;
  savedMatches: string[];
  savedArticles: string[];
  userVotes?: Record<string, 'home' | 'draw' | 'away'>;
}

export interface AppSettings {
  language: 'en' | 'fr' | 'ar' | 'sw' | 'pt';
  darkMode: boolean;
  pushMatchReminders: boolean;
  pushGoalAlerts: boolean;
  pushBreakingNews: boolean;
  dataSaver: boolean;
}

export interface DevFeature {
  id: string;
  name: string;
  category: string;
  status: 'completed' | 'in_progress' | 'planned';
  milestone: string;
  description: string;
}

export interface DevBug {
  id: string;
  title: string;
  severity: 'low' | 'medium' | 'high';
  status: 'resolved' | 'investigating' | 'open';
  reporter: string;
}

export interface AutomatedTest {
  id: string;
  name: string;
  category: 'UI/UX' | 'ViewModel' | 'Data Layer' | 'Pipeline' | 'Storage';
  status: 'passed' | 'failed' | 'pending' | 'running';
  durationMs: number;
  log: string;
}
