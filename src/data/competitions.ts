export type CompetitionStatus = 'active' | 'upcoming' | 'completed';

export interface CompetitionSummary {
  id: string;
  name: string;
  region: string;
  season: string;
  status: CompetitionStatus;
  format: string;
  teamsCount: number;
  description: string;
}

export const COMPETITIONS: CompetitionSummary[] = [
  {
    id: 'afcon-2027',
    name: 'Africa Cup of Nations',
    region: 'Africa',
    season: '2027',
    status: 'upcoming',
    format: 'Group stage + knockout',
    teamsCount: 24,
    description: 'Continental national-team championship. Fixtures and standings will be supplied by the production football data provider.'
  },
  {
    id: 'caf-champions-league',
    name: 'CAF Champions League',
    region: 'Africa',
    season: '2026/27',
    status: 'active',
    format: 'Qualifiers + group/knockout stages',
    teamsCount: 24,
    description: 'Africa\'s leading club competition, with club fixtures and results planned for the live data layer.'
  },
  {
    id: 'caf-confederation-cup',
    name: 'CAF Confederation Cup',
    region: 'Africa',
    season: '2026/27',
    status: 'active',
    format: 'Qualifiers + group/knockout stages',
    teamsCount: 24,
    description: 'Continental club competition that will be available alongside other African football competitions.'
  },
  {
    id: 'cecafa',
    name: 'CECAFA Competitions',
    region: 'East Africa',
    season: '2026/27',
    status: 'active',
    format: 'Varies by competition',
    teamsCount: 12,
    description: 'A dedicated home for East African football competitions and participating national or club teams.'
  }
];
