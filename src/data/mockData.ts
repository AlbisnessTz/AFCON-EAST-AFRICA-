import { Match, Team, TravelSpot, NewsArticle, Stadium, DevFeature, DevBug, AutomatedTest } from '../types';

export const TEAMS_DATA: Team[] = [
  {
    id: 'tan',
    name: 'Tanzania',
    country: 'Tanzania',
    flag: '🇹🇿',
    logo: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=300&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    coach: 'Hemed Morocco',
    group: 'Group A',
    fifaRank: 110,
    captain: 'Mbwana Samatta',
    shortDescription: 'Taifa Stars of Tanzania co-host the tournament with fierce home crowd backing in Dar es Salaam and Zanzibar.',
    keyPlayers: ['Mbwana Samatta', 'Simon Msuva', 'Feisal Salum', 'Bakari Mwamnyeto'],
    trophiesCount: 0,
    formation: '4-3-3',
    stats: { played: 5, won: 3, drawn: 1, lost: 1, goalsFor: 8, goalsAgainst: 4, points: 10 },
    recentForm: ['W', 'D', 'W', 'W', 'L'],
    squad: [
      { name: 'Aishi Manula', position: 'GK', number: 28, club: 'Simba SC (Tanzania)' },
      { name: 'Metacha Mnata', position: 'GK', number: 1, club: 'Young Africans (Tanzania)' },
      { name: 'Bakari Mwamnyeto', position: 'DEF', number: 15, club: 'Young Africans (Tanzania)' },
      { name: 'Dickson Job', position: 'DEF', number: 5, club: 'Young Africans (Tanzania)' },
      { name: 'Mohamed Hussein', position: 'DEF', number: 2, club: 'Simba SC (Tanzania)' },
      { name: 'Shomari Kapombe', position: 'DEF', number: 12, club: 'Simba SC (Tanzania)' },
      { name: 'Feisal Salum "Fei Toto"', position: 'MID', number: 6, club: 'Azam FC (Tanzania)' },
      { name: 'Mzamiru Yassin', position: 'MID', number: 19, club: 'Simba SC (Tanzania)' },
      { name: 'Mudathir Yahya', position: 'MID', number: 8, club: 'Young Africans (Tanzania)' },
      { name: 'Mbwana Samatta', position: 'FWD', number: 10, club: 'PAOK FC (Greece)' },
      { name: 'Simon Msuva', position: 'FWD', number: 27, club: 'Al-Tihad (Saudi Arabia)' },
      { name: 'Clement Mzize', position: 'FWD', number: 11, club: 'Young Africans (Tanzania)' },
      { name: 'Kibu Denis', position: 'FWD', number: 22, club: 'Simba SC (Tanzania)' }
    ]
  },
  {
    id: 'ken',
    name: 'Kenya',
    country: 'Kenya',
    flag: '🇰🇪',
    logo: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=300&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80',
    coach: 'Engin Fırat',
    group: 'Group B',
    fifaRank: 102,
    captain: 'Michael Olunga',
    shortDescription: 'Harambee Stars boast prolific striker Michael Olunga and a formidable record at Kasarani Stadium in Nairobi.',
    keyPlayers: ['Michael Olunga', 'Joseph Okumu', 'Richard Odada', 'Erick Ouma'],
    trophiesCount: 0,
    formation: '4-2-3-1',
    stats: { played: 5, won: 2, drawn: 2, lost: 1, goalsFor: 7, goalsAgainst: 5, points: 8 },
    recentForm: ['W', 'D', 'D', 'W', 'L'],
    squad: [
      { name: 'Patrick Matasi', position: 'GK', number: 1, club: 'Kenya Police FC (Kenya)' },
      { name: 'Byrne Odhiambo', position: 'GK', number: 18, club: 'Bandari FC (Kenya)' },
      { name: 'Joseph Okumu', position: 'DEF', number: 4, club: 'Stade de Reims (France)' },
      { name: 'Erick Ouma "Marcelo"', position: 'DEF', number: 3, club: 'Górnik Zabrze (Poland)' },
      { name: 'Johnstone Omurwa', position: 'DEF', number: 5, club: 'Estrela da Amadora (Portugal)' },
      { name: 'Daniel Anyembe', position: 'DEF', number: 2, club: 'Viborg FF (Denmark)' },
      { name: 'Richard Odada', position: 'MID', number: 6, club: 'AaB Aalborg (Denmark)' },
      { name: 'Anthony Akumu', position: 'MID', number: 14, club: 'Kheybar FC (Iran)' },
      { name: 'Kenneth Muguna', position: 'MID', number: 10, club: 'Kenya Police FC (Kenya)' },
      { name: 'Michael Olunga', position: 'FWD', number: 14, club: 'Al-Duhail (Qatar)' },
      { name: 'Masoud Juma', position: 'FWD', number: 9, club: 'Al-Faisaly (Saudi Arabia)' },
      { name: 'Ayub Timbe', position: 'FWD', number: 7, club: 'Nanjing City (China)' }
    ]
  },
  {
    id: 'uga',
    name: 'Uganda',
    country: 'Uganda',
    flag: '🇺🇬',
    logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80',
    coach: 'Paul Put',
    group: 'Group C',
    fifaRank: 87,
    captain: 'Khalid Aucho',
    shortDescription: 'Uganda Cranes return to the continental stage backed by passionate fans at Mandela National Stadium Namboole.',
    keyPlayers: ['Khalid Aucho', 'Denis Omedi', 'Rogers Mato', 'Steven Mukwala'],
    trophiesCount: 0,
    formation: '4-3-3',
    stats: { played: 5, won: 3, drawn: 0, lost: 2, goalsFor: 6, goalsAgainst: 4, points: 9 },
    recentForm: ['W', 'L', 'W', 'W', 'L'],
    squad: [
      { name: 'Isima Watenga', position: 'GK', number: 19, club: 'Golden Arrows (South Africa)' },
      { name: 'Charles Lukwago', position: 'GK', number: 1, club: 'Hawassa City (Ethiopia)' },
      { name: 'Halid Lwaliwa', position: 'DEF', number: 15, club: 'Bregalnica Štip (Macedonia)' },
      { name: 'Bwomono Elvis', position: 'DEF', number: 2, club: 'St Mirren (Scotland)' },
      { name: 'Azizi Kayondo', position: 'DEF', number: 3, club: 'Slovan Liberec (Czech Rep)' },
      { name: 'Muwonge Aziz', position: 'DEF', number: 4, club: 'SC Villa (Uganda)' },
      { name: 'Khalid Aucho', position: 'MID', number: 8, club: 'Young Africans (Tanzania)' },
      { name: 'Tadeo Lwanga', position: 'MID', number: 6, club: 'APR FC (Rwanda)' },
      { name: 'Allan Okello', position: 'MID', number: 10, club: 'Vipers SC (Uganda)' },
      { name: 'Rogers Mato', position: 'FWD', number: 20, club: 'APOEL Nicosia (Cyprus)' },
      { name: 'Denis Omedi', position: 'FWD', number: 11, club: 'Kitara FC (Uganda)' },
      { name: 'Steven Mukwala', position: 'FWD', number: 9, club: 'Simba SC (Tanzania)' }
    ]
  },
  {
    id: 'nga',
    name: 'Nigeria',
    country: 'Nigeria',
    flag: '🇳🇬',
    logo: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=300&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
    coach: 'Augustine Eguavoen',
    group: 'Group A',
    fifaRank: 36,
    captain: 'William Troost-Ekong',
    shortDescription: 'Super Eagles feature European Footballer of the Year Victor Osimhen and relentless attacking firepower.',
    keyPlayers: ['Victor Osimhen', 'Ademola Lookman', 'Alex Iwobi', 'Samuel Chukwueze'],
    trophiesCount: 3,
    formation: '3-4-3',
    stats: { played: 5, won: 4, drawn: 1, lost: 0, goalsFor: 12, goalsAgainst: 3, points: 13 },
    recentForm: ['W', 'W', 'D', 'W', 'W'],
    squad: [
      { name: 'Stanley Nwabali', position: 'GK', number: 23, club: 'Chippa United (South Africa)' },
      { name: 'William Troost-Ekong', position: 'DEF', number: 5, club: 'Al-Kholood (Saudi Arabia)' },
      { name: 'Calvin Bassey', position: 'DEF', number: 21, club: 'Fulham FC (England)' },
      { name: 'Ola Aina', position: 'DEF', number: 2, club: 'Nottingham Forest (England)' },
      { name: 'Bright Osayi-Samuel', position: 'DEF', number: 12, club: 'Fenerbahçe (Turkey)' },
      { name: 'Wilfred Ndidi', position: 'MID', number: 4, club: 'Leicester City (England)' },
      { name: 'Alex Iwobi', position: 'MID', number: 17, club: 'Fulham FC (England)' },
      { name: 'Frank Onyeka', position: 'MID', number: 8, club: 'FC Augsburg (Germany)' },
      { name: 'Victor Osimhen', position: 'FWD', number: 9, club: 'Galatasaray (Turkey)' },
      { name: 'Ademola Lookman', position: 'FWD', number: 11, club: 'Atalanta (Italy)' },
      { name: 'Samuel Chukwueze', position: 'FWD', number: 7, club: 'AC Milan (Italy)' },
      { name: 'Victor Boniface', position: 'FWD', number: 22, club: 'Bayer Leverkusen (Germany)' }
    ]
  },
  {
    id: 'civ',
    name: 'Ivory Coast',
    country: 'Côte d\'Ivoire',
    flag: '🇨🇮',
    logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=800&q=80',
    coach: 'Emerse Faé',
    group: 'Group B',
    fifaRank: 38,
    captain: 'Serge Aurier',
    shortDescription: 'The Elephants of Côte d\'Ivoire arrive as defending champions looking to maintain their dominant momentum.',
    keyPlayers: ['Seko Fofana', 'Franck Kessié', 'Simon Adingra', 'Sebastien Haller'],
    trophiesCount: 3,
    formation: '4-3-3',
    stats: { played: 5, won: 3, drawn: 2, lost: 0, goalsFor: 9, goalsAgainst: 2, points: 11 },
    recentForm: ['W', 'W', 'D', 'W', 'D'],
    squad: [
      { name: 'Yahia Fofana', position: 'GK', number: 1, club: 'Angers SCO (France)' },
      { name: 'Evan Ndicka', position: 'DEF', number: 21, club: 'AS Roma (Italy)' },
      { name: 'Odilon Kossounou', position: 'DEF', number: 7, club: 'Atalanta (Italy)' },
      { name: 'Wilfried Singo', position: 'DEF', number: 3, club: 'AS Monaco (France)' },
      { name: 'Franck Kessié', position: 'MID', number: 8, club: 'Al-Ahli (Saudi Arabia)' },
      { name: 'Seko Fofana', position: 'MID', number: 6, club: 'Ettifaq FC (Saudi Arabia)' },
      { name: 'Ibrahim Sangaré', position: 'MID', number: 18, club: 'Nottingham Forest (England)' },
      { name: 'Simon Adingra', position: 'FWD', number: 24, club: 'Brighton (England)' },
      { name: 'Sebastien Haller', position: 'FWD', number: 22, club: 'Leganés (Spain)' },
      { name: 'Nicolas Pépé', position: 'FWD', number: 19, club: 'Villarreal (Spain)' },
      { name: 'Oumar Diakité', position: 'FWD', number: 14, club: 'Stade de Reims (France)' }
    ]
  },
  {
    id: 'mar',
    name: 'Morocco',
    country: 'Morocco',
    flag: '🇲🇦',
    logo: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=300&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=800&q=80',
    coach: 'Walid Regragui',
    group: 'Group C',
    fifaRank: 13,
    captain: 'Romain Saïss',
    shortDescription: 'The Atlas Lions made World Cup semi-final history and present one of Africa\'s most disciplined tactical setups.',
    keyPlayers: ['Achraf Hakimi', 'Brahim Díaz', 'Youssef En-Nesyri', 'Sofyan Amrabat'],
    trophiesCount: 1,
    formation: '4-3-3',
    stats: { played: 5, won: 5, drawn: 0, lost: 0, goalsFor: 15, goalsAgainst: 1, points: 15 },
    recentForm: ['W', 'W', 'W', 'W', 'W'],
    squad: [
      { name: 'Yassine Bounou', position: 'GK', number: 1, club: 'Al-Hilal (Saudi Arabia)' },
      { name: 'Achraf Hakimi', position: 'DEF', number: 2, club: 'Paris Saint-Germain (France)' },
      { name: 'Nayef Aguerd', position: 'DEF', number: 5, club: 'Real Sociedad (Spain)' },
      { name: 'Romain Saïss', position: 'DEF', number: 6, club: 'Al-Sadd (Qatar)' },
      { name: 'Noussair Mazraoui', position: 'DEF', number: 3, club: 'Manchester United (England)' },
      { name: 'Sofyan Amrabat', position: 'MID', number: 4, club: 'Fenerbahçe (Turkey)' },
      { name: 'Azzedine Ounahi', position: 'MID', number: 8, club: 'Panathinaikos (Greece)' },
      { name: 'Brahim Díaz', position: 'MID', number: 10, club: 'Real Madrid (Spain)' },
      { name: 'Hakim Ziyech', position: 'FWD', number: 7, club: 'Galatasaray (Turkey)' },
      { name: 'Youssef En-Nesyri', position: 'FWD', number: 19, club: 'Fenerbahçe (Turkey)' },
      { name: 'Ayoub El Kaabi', position: 'FWD', number: 20, club: 'Olympiacos (Greece)' }
    ]
  },
  {
    id: 'egy',
    name: 'Egypt',
    country: 'Egypt',
    flag: '🇪🇬',
    logo: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=300&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
    coach: 'Hossam Hassan',
    group: 'Group D',
    fifaRank: 30,
    captain: 'Mohamed Salah',
    shortDescription: 'The Pharaohs are the most decorated team in AFCON history with 7 titles, driven by superstar Mohamed Salah.',
    keyPlayers: ['Mohamed Salah', 'Omar Marmoush', 'Mostafa Mohamed', 'Trezeguet'],
    trophiesCount: 7,
    formation: '4-3-3',
    stats: { played: 5, won: 4, drawn: 1, lost: 0, goalsFor: 11, goalsAgainst: 2, points: 13 },
    recentForm: ['W', 'W', 'W', 'D', 'W'],
    squad: [
      { name: 'Mohamed El Shenawy', position: 'GK', number: 1, club: 'Al Ahly (Egypt)' },
      { name: 'Ahmed Hegazi', position: 'DEF', number: 6, club: 'NEOM SC (Saudi Arabia)' },
      { name: 'Mohamed Abdelmonem', position: 'DEF', number: 24, club: 'OGC Nice (France)' },
      { name: 'Mohamed Hany', position: 'DEF', number: 3, club: 'Al Ahly (Egypt)' },
      { name: 'Hamdy Fathi', position: 'MID', number: 5, club: 'Al-Wakrah (Qatar)' },
      { name: 'Marwan Attia', position: 'MID', number: 14, club: 'Al Ahly (Egypt)' },
      { name: 'Emam Ashour', position: 'MID', number: 8, club: 'Al Ahly (Egypt)' },
      { name: 'Mohamed Salah', position: 'FWD', number: 10, club: 'Liverpool FC (England)' },
      { name: 'Omar Marmoush', position: 'FWD', number: 22, club: 'Eintracht Frankfurt (Germany)' },
      { name: 'Mostafa Mohamed', position: 'FWD', number: 11, club: 'FC Nantes (France)' },
      { name: 'Trezeguet', position: 'FWD', number: 7, club: 'Al-Rayyan (Qatar)' }
    ]
  },
  {
    id: 'sen',
    name: 'Senegal',
    country: 'Senegal',
    flag: '🇸🇳',
    logo: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=300&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80',
    coach: 'Pape Thiaw',
    group: 'Group D',
    fifaRank: 20,
    captain: 'Kalidou Koulibaly',
    shortDescription: 'Lions of Teranga combine high physicality, world-class defense, and rapid wings led by Sadio Mané.',
    keyPlayers: ['Sadio Mané', 'Kalidou Koulibaly', 'Édouard Mendy', 'Ismaïla Sarr'],
    trophiesCount: 1,
    formation: '4-3-3',
    stats: { played: 5, won: 4, drawn: 0, lost: 1, goalsFor: 10, goalsAgainst: 3, points: 12 },
    recentForm: ['W', 'W', 'L', 'W', 'W'],
    squad: [
      { name: 'Édouard Mendy', position: 'GK', number: 16, club: 'Al-Ahli (Saudi Arabia)' },
      { name: 'Kalidou Koulibaly', position: 'DEF', number: 3, club: 'Al-Hilal (Saudi Arabia)' },
      { name: 'Moussa Niakhaté', position: 'DEF', number: 19, club: 'Olympique Lyonnais (France)' },
      { name: 'Ismail Jakobs', position: 'DEF', number: 14, club: 'Galatasaray (Turkey)' },
      { name: 'Idrissa Gueye', position: 'MID', number: 5, club: 'Everton FC (England)' },
      { name: 'Pape Matar Sarr', position: 'MID', number: 17, club: 'Tottenham Hotspur (England)' },
      { name: 'Lamine Camara', position: 'MID', number: 25, club: 'AS Monaco (France)' },
      { name: 'Sadio Mané', position: 'FWD', number: 10, club: 'Al-Nassr (Saudi Arabia)' },
      { name: 'Ismaïla Sarr', position: 'FWD', number: 18, club: 'Crystal Palace (England)' },
      { name: 'Nicolas Jackson', position: 'FWD', number: 7, club: 'Chelsea FC (England)' },
      { name: 'Iliman Ndiaye', position: 'FWD', number: 13, club: 'Everton FC (England)' }
    ]
  },
  {
    id: 'cmr',
    name: 'Cameroon',
    country: 'Cameroon',
    flag: '🇨🇲',
    logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80',
    coach: 'Marc Brys',
    group: 'Group B',
    fifaRank: 49,
    captain: 'Vincent Aboubakar',
    shortDescription: 'The Indomitable Lions of Cameroon are 5-time AFCON champions with physical dominance and tournament pedigree.',
    keyPlayers: ['Bryan Mbeumo', 'Zambo Anguissa', 'André Onana', 'Vincent Aboubakar'],
    trophiesCount: 5,
    formation: '4-3-3',
    stats: { played: 5, won: 3, drawn: 2, lost: 0, goalsFor: 8, goalsAgainst: 3, points: 11 },
    recentForm: ['W', 'W', 'D', 'W', 'D'],
    squad: [
      { name: 'André Onana', position: 'GK', number: 24, club: 'Manchester United (England)' },
      { name: 'Devis Epassy', position: 'GK', number: 16, club: 'Abha Club (Saudi Arabia)' },
      { name: 'Christopher Wooh', position: 'DEF', number: 4, club: 'Stade Rennais (France)' },
      { name: 'Nouhou Tolo', position: 'DEF', number: 25, club: 'Seattle Sounders (USA)' },
      { name: 'Jackson Tchatchoua', position: 'DEF', number: 2, club: 'Hellas Verona (Italy)' },
      { name: 'Andre-Frank Zambo Anguissa', position: 'MID', number: 8, club: 'SSC Napoli (Italy)' },
      { name: 'Carlos Baleba', position: 'MID', number: 17, club: 'Brighton (England)' },
      { name: 'Bryan Mbeumo', position: 'FWD', number: 20, club: 'Brentford FC (England)' },
      { name: 'Vincent Aboubakar', position: 'FWD', number: 10, club: 'Hatayspor (Turkey)' },
      { name: 'Karl Toko Ekambi', position: 'FWD', number: 11, club: 'Ettifaq FC (Saudi Arabia)' }
    ]
  },
  {
    id: 'gha',
    name: 'Ghana',
    country: 'Ghana',
    flag: '🇬🇭',
    logo: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=300&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80',
    coach: 'Otto Addo',
    group: 'Group C',
    fifaRank: 73,
    captain: 'Jordan Ayew',
    shortDescription: 'The Black Stars of Ghana boast 4 AFCON titles and vibrant midfield flair led by Mohammed Kudus.',
    keyPlayers: ['Mohammed Kudus', 'Antoine Semenyo', 'Thomas Partey', 'Jordan Ayew'],
    trophiesCount: 4,
    formation: '4-2-3-1',
    stats: { played: 5, won: 2, drawn: 2, lost: 1, goalsFor: 6, goalsAgainst: 5, points: 8 },
    recentForm: ['W', 'D', 'L', 'W', 'D'],
    squad: [
      { name: 'Lawrence Ati-Zigi', position: 'GK', number: 1, club: 'FC St. Gallen (Switzerland)' },
      { name: 'Mohammed Salisu', position: 'DEF', number: 6, club: 'AS Monaco (France)' },
      { name: 'Alexander Djiku', position: 'DEF', number: 23, club: 'Fenerbahçe (Turkey)' },
      { name: 'Thomas Partey', position: 'MID', number: 5, club: 'Arsenal FC (England)' },
      { name: 'Mohammed Kudus', position: 'MID', number: 10, club: 'West Ham United (England)' },
      { name: 'Antoine Semenyo', position: 'FWD', number: 24, club: 'AFC Bournemouth (England)' },
      { name: 'Jordan Ayew', position: 'FWD', number: 9, club: 'Leicester City (England)' },
      { name: 'Inaki Williams', position: 'FWD', number: 19, club: 'Athletic Bilbao (Spain)' }
    ]
  },
  {
    id: 'rsa',
    name: 'South Africa',
    country: 'South Africa',
    flag: '🇿🇦',
    logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    coach: 'Hugo Broos',
    group: 'Group D',
    fifaRank: 60,
    captain: 'Ronwen Williams',
    shortDescription: 'Bafana Bafana of South Africa play fluid tactical football anchored by Yachine trophy nominee goalkeeper Ronwen Williams.',
    keyPlayers: ['Ronwen Williams', 'Percy Tau', 'Teboho Mokoena', 'Themba Zwane'],
    trophiesCount: 1,
    formation: '4-3-3',
    stats: { played: 5, won: 3, drawn: 2, lost: 0, goalsFor: 10, goalsAgainst: 4, points: 11 },
    recentForm: ['W', 'W', 'D', 'W', 'D'],
    squad: [
      { name: 'Ronwen Williams', position: 'GK', number: 1, club: 'Mamelodi Sundowns (South Africa)' },
      { name: 'Mothobi Mvala', position: 'DEF', number: 14, club: 'Mamelodi Sundowns (South Africa)' },
      { name: 'Aubrey Modiba', position: 'DEF', number: 6, club: 'Mamelodi Sundowns (South Africa)' },
      { name: 'Teboho Mokoena', position: 'MID', number: 4, club: 'Mamelodi Sundowns (South Africa)' },
      { name: 'Themba Zwane', position: 'MID', number: 11, club: 'Mamelodi Sundowns (South Africa)' },
      { name: 'Percy Tau', position: 'FWD', number: 10, club: 'Al Ahly (Egypt)' },
      { name: 'Lyle Foster', position: 'FWD', number: 17, club: 'Burnley FC (England)' }
    ]
  }
];

export const MATCHES_DATA: Match[] = [
  {
    id: 'm1',
    homeTeam: 'Tanzania',
    awayTeam: 'Nigeria',
    homeFlag: '🇹🇿',
    awayFlag: '🇳🇬',
    date: '2027-01-15',
    time: '20:00 EAT',
    status: 'upcoming',
    group: 'Group A',
    stadium: 'Benjamin Mkapa National Stadium',
    city: 'Dar es Salaam',
    venueImage: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80',
    poll: { homeVotes: 14200, drawVotes: 3100, awayVotes: 9800 },
    h2hMeetings: [
      { id: 'h1', date: '2024-03-22', competition: 'Friendly Match', homeTeam: 'Tanzania', awayTeam: 'Nigeria', homeFlag: '🇹🇿', awayFlag: '🇳🇬', score: '1 - 1', result: 'draw' },
      { id: 'h2', date: '2022-09-14', competition: 'AFCON Qualifier', homeTeam: 'Nigeria', awayTeam: 'Tanzania', homeFlag: '🇳🇬', awayFlag: '🇹🇿', score: '2 - 0', result: 'home' },
      { id: 'h3', date: '2019-06-18', competition: 'AFCON Group Stage', homeTeam: 'Nigeria', awayTeam: 'Tanzania', homeFlag: '🇳🇬', awayFlag: '🇹🇿', score: '1 - 0', result: 'home' },
      { id: 'h4', date: '2016-09-03', competition: 'AFCON Qualifier', homeTeam: 'Nigeria', awayTeam: 'Tanzania', homeFlag: '🇳🇬', awayFlag: '🇹🇿', score: '1 - 0', result: 'home' },
      { id: 'h5', date: '2015-09-05', competition: 'AFCON Qualifier', homeTeam: 'Tanzania', awayTeam: 'Nigeria', homeFlag: '🇹🇿', awayFlag: '🇳🇬', score: '0 - 0', result: 'draw' }
    ],
    recentFormHome: [
      { id: 'rf1', date: '2026-11-18', opponent: 'Zambia', opponentFlag: '🇿🇲', score: '2 - 0', result: 'W' },
      { id: 'rf2', date: '2026-10-14', opponent: 'Uganda', opponentFlag: '🇺🇬', score: '1 - 1', result: 'D' },
      { id: 'rf3', date: '2026-09-08', opponent: 'Niger', opponentFlag: '🇳🇪', score: '1 - 0', result: 'W' },
      { id: 'rf4', date: '2026-06-11', opponent: 'Mongolia', opponentFlag: '🇲🇳', score: '3 - 0', result: 'W' },
      { id: 'rf5', date: '2026-03-25', opponent: 'Bulgaria', opponentFlag: '🇧🇬', score: '0 - 1', result: 'L' }
    ],
    recentFormAway: [
      { id: 'rf6', date: '2026-11-19', opponent: 'Libya', opponentFlag: '🇱🇾', score: '3 - 0', result: 'W' },
      { id: 'rf7', date: '2026-10-15', opponent: 'Rwanda', opponentFlag: '🇷🇼', score: '1 - 0', result: 'W' },
      { id: 'rf8', date: '2026-09-10', opponent: 'Benin', opponentFlag: '🇧🇯', score: '2 - 2', result: 'D' },
      { id: 'rf9', date: '2026-06-10', opponent: 'South Africa', opponentFlag: '🇿🇦', score: '2 - 1', result: 'W' },
      { id: 'rf10', date: '2026-03-22', opponent: 'Ghana', opponentFlag: '🇬🇭', score: '2 - 1', result: 'W' }
    ]
  },
  {
    id: 'm2',
    homeTeam: 'Kenya',
    awayTeam: 'Ivory Coast',
    homeFlag: '🇰🇪',
    awayFlag: '🇨🇮',
    date: '2027-01-16',
    time: '17:00 EAT',
    status: 'upcoming',
    group: 'Group B',
    stadium: 'Moi International Sports Centre Kasarani',
    city: 'Nairobi',
    venueImage: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=600&q=80',
    poll: { homeVotes: 11500, drawVotes: 4200, awayVotes: 13800 },
    h2hMeetings: [
      { id: 'h2_1', date: '2024-06-11', competition: 'World Cup Qualifiers', homeTeam: 'Kenya', awayTeam: 'Ivory Coast', homeFlag: '🇰🇪', awayFlag: '🇨🇮', score: '0 - 0', result: 'draw' },
      { id: 'h2_2', date: '2019-10-13', competition: 'Friendly Match', homeTeam: 'Ivory Coast', awayTeam: 'Kenya', homeFlag: '🇨🇮', awayFlag: '🇰🇪', score: '2 - 1', result: 'home' },
      { id: 'h2_3', date: '2012-05-20', competition: 'International Friendly', homeTeam: 'Ivory Coast', awayTeam: 'Kenya', homeFlag: '🇨🇮', awayFlag: '🇰🇪', score: '3 - 0', result: 'home' },
      { id: 'h2_4', date: '2008-01-08', competition: 'Warm-up Match', homeTeam: 'Kenya', awayTeam: 'Ivory Coast', homeFlag: '🇰🇪', awayFlag: '🇨🇮', score: '1 - 2', result: 'away' },
      { id: 'h2_5', date: '1992-01-15', competition: 'AFCON Finals', homeTeam: 'Ivory Coast', awayTeam: 'Kenya', homeFlag: '🇨🇮', awayFlag: '🇰🇪', score: '3 - 0', result: 'home' }
    ],
    recentFormHome: [
      { id: 'rf_k1', date: '2026-11-17', opponent: 'Namibia', opponentFlag: '🇳🇦', score: '1 - 0', result: 'W' },
      { id: 'rf_k2', date: '2026-10-12', opponent: 'Zimbabwe', opponentFlag: '🇿🇼', score: '0 - 0', result: 'D' },
      { id: 'rf_k3', date: '2026-09-06', opponent: 'Cameroon', opponentFlag: '🇨🇲', score: '1 - 1', result: 'D' },
      { id: 'rf_k4', date: '2026-06-08', opponent: 'Seychelles', opponentFlag: '🇸🇨', score: '5 - 0', result: 'W' },
      { id: 'rf_k5', date: '2026-03-26', opponent: 'Gabon', opponentFlag: '🇬🇦', score: '1 - 2', result: 'L' }
    ],
    recentFormAway: [
      { id: 'rf_c1', date: '2026-11-19', opponent: 'Chad', opponentFlag: '🇹🇩', score: '4 - 0', result: 'W' },
      { id: 'rf_c2', date: '2026-10-15', opponent: 'Sierra Leone', opponentFlag: '🇸🇱', score: '2 - 0', result: 'W' },
      { id: 'rf_c3', date: '2026-09-09', opponent: 'Zambia', opponentFlag: '🇿🇲', score: '1 - 1', result: 'D' },
      { id: 'rf_c4', date: '2026-06-11', opponent: 'Gambia', opponentFlag: '🇬🇲', score: '2 - 0', result: 'W' },
      { id: 'rf_c5', date: '2026-03-23', opponent: 'Uruguay', opponentFlag: '🇺🇾', score: '2 - 2', result: 'D' }
    ]
  },
  {
    id: 'm3',
    homeTeam: 'Uganda',
    awayTeam: 'Morocco',
    homeFlag: '🇺🇬',
    awayFlag: '🇲🇦',
    date: '2027-01-16',
    time: '20:00 EAT',
    status: 'upcoming',
    group: 'Group C',
    stadium: 'Mandela National Stadium (Namboole)',
    city: 'Kampala',
    poll: { homeVotes: 8900, drawVotes: 3800, awayVotes: 16500 },
    h2hMeetings: [
      { id: 'h3_1', date: '2021-01-26', competition: 'CHAN Tournament', homeTeam: 'Uganda', awayTeam: 'Morocco', homeFlag: '🇺🇬', awayFlag: '🇲🇦', score: '2 - 5', result: 'away' },
      { id: 'h3_2', date: '2014-01-20', competition: 'CHAN Tournament', homeTeam: 'Morocco', awayTeam: 'Uganda', homeFlag: '🇲🇦', awayFlag: '🇺🇬', score: '3 - 1', result: 'home' },
      { id: 'h3_3', date: '2011-11-11', competition: 'LG Cup Morocco', homeTeam: 'Morocco', awayTeam: 'Uganda', homeFlag: '🇲🇦', awayFlag: '🇺🇬', score: '0 - 1', result: 'away' },
      { id: 'h3_4', date: '2004-03-31', competition: 'International Friendly', homeTeam: 'Morocco', awayTeam: 'Uganda', homeFlag: '🇲🇦', awayFlag: '🇺🇬', score: '4 - 0', result: 'home' },
      { id: 'h3_5', date: '1978-03-08', competition: 'AFCON Finals', homeTeam: 'Morocco', awayTeam: 'Uganda', homeFlag: '🇲🇦', awayFlag: '🇺🇬', score: '0 - 3', result: 'away' }
    ],
    recentFormHome: [
      { id: 'rf_u1', date: '2026-11-18', opponent: 'Congo', opponentFlag: '🇨🇬', score: '1 - 0', result: 'W' },
      { id: 'rf_u2', date: '2026-10-13', opponent: 'South Sudan', opponentFlag: '🇸🇸', score: '1 - 2', result: 'L' },
      { id: 'rf_u3', date: '2026-09-07', opponent: 'Mozambique', opponentFlag: '🇲🇿', score: '2 - 0', result: 'W' },
      { id: 'rf_u4', date: '2026-06-09', opponent: 'Somalia', opponentFlag: '🇸🇴', score: '3 - 1', result: 'W' },
      { id: 'rf_u5', date: '2026-03-22', opponent: 'Comoros', opponentFlag: '🇰🇲', score: '0 - 4', result: 'L' }
    ],
    recentFormAway: [
      { id: 'rf_m1', date: '2026-11-19', opponent: 'Lesotho', opponentFlag: '🇱🇸', score: '7 - 0', result: 'W' },
      { id: 'rf_m2', date: '2026-10-15', opponent: 'Gabon', opponentFlag: '🇬🇦', score: '5 - 1', result: 'W' },
      { id: 'rf_m3', date: '2026-09-09', opponent: 'Central Africa', opponentFlag: '🇨🇫', score: '4 - 0', result: 'W' },
      { id: 'rf_m4', date: '2026-06-11', opponent: 'Congo DR', opponentFlag: '🇨🇩', score: '2 - 1', result: 'W' },
      { id: 'rf_m5', date: '2026-03-26', opponent: 'Mauritania', opponentFlag: '🇲🇷', score: '0 - 0', result: 'W' }
    ]
  },
  {
    id: 'm4',
    homeTeam: 'Senegal',
    awayTeam: 'Egypt',
    homeFlag: '🇸🇳',
    awayFlag: '🇪🇬',
    date: '2027-01-17',
    time: '17:00 EAT',
    status: 'upcoming',
    group: 'Group D',
    stadium: 'Nyayo National Stadium',
    city: 'Nairobi',
    poll: { homeVotes: 15400, drawVotes: 6100, awayVotes: 14800 },
    h2hMeetings: [
      { id: 'h4_1', date: '2022-03-29', competition: 'World Cup Play-off', homeTeam: 'Senegal', awayTeam: 'Egypt', homeFlag: '🇸🇳', awayFlag: '🇪🇬', score: '1 - 0 (3-1 p)', result: 'home' },
      { id: 'h4_2', date: '2022-03-25', competition: 'World Cup Play-off', homeTeam: 'Egypt', awayTeam: 'Senegal', homeFlag: '🇪🇬', awayFlag: '🇸🇳', score: '1 - 0', result: 'home' },
      { id: 'h4_3', date: '2022-02-06', competition: 'AFCON Final 2021', homeTeam: 'Senegal', awayTeam: 'Egypt', homeFlag: '🇸🇳', awayFlag: '🇪🇬', score: '0 - 0 (4-2 p)', result: 'home' },
      { id: 'h4_4', date: '2014-11-15', competition: 'AFCON Qualifier', homeTeam: 'Egypt', awayTeam: 'Senegal', homeFlag: '🇪🇬', awayFlag: '🇸🇳', score: '0 - 1', result: 'away' },
      { id: 'h4_5', date: '2014-09-05', competition: 'AFCON Qualifier', homeTeam: 'Senegal', awayTeam: 'Egypt', homeFlag: '🇸🇳', awayFlag: '🇪🇬', score: '2 - 0', result: 'home' }
    ],
    recentFormHome: [
      { id: 'rf_s1', date: '2026-11-19', opponent: 'Burkina Faso', opponentFlag: '🇧🇫', score: '3 - 0', result: 'W' },
      { id: 'rf_s2', date: '2026-10-15', opponent: 'Malawi', opponentFlag: '🇲🇼', score: '1 - 0', result: 'W' },
      { id: 'rf_s3', date: '2026-09-09', opponent: 'Burundi', opponentFlag: '🇧🇮', score: '0 - 1', result: 'L' },
      { id: 'rf_s4', date: '2026-06-09', opponent: 'Mauritania', opponentFlag: '🇲🇷', score: '1 - 0', result: 'W' },
      { id: 'rf_s5', date: '2026-03-26', opponent: 'Benin', opponentFlag: '🇧🇯', score: '1 - 0', result: 'W' }
    ],
    recentFormAway: [
      { id: 'rf_e1', date: '2026-11-19', opponent: 'Botswana', opponentFlag: '🇧🇼', score: '1 - 1', result: 'D' },
      { id: 'rf_e2', date: '2026-10-15', opponent: 'Cape Verde', opponentFlag: '🇨🇻', score: '3 - 0', result: 'W' },
      { id: 'rf_e3', date: '2026-09-10', opponent: 'Ethiopia', opponentFlag: '🇪🇹', score: '2 - 0', result: 'W' },
      { id: 'rf_e4', date: '2026-06-10', opponent: 'Guinea-Bissau', opponentFlag: '🇬🇼', score: '1 - 1', result: 'D' },
      { id: 'rf_e5', date: '2026-03-22', opponent: 'Croatia', opponentFlag: '🇭🇷', score: '2 - 4', result: 'L' }
    ]
  },
  {
    id: 'm5',
    homeTeam: 'Tanzania',
    awayTeam: 'Uganda',
    homeFlag: '🇹🇿',
    awayFlag: '🇺🇬',
    homeScore: 1,
    awayScore: 1,
    date: '2027-01-12',
    time: '18:00 EAT',
    status: 'finished',
    group: 'Group A',
    stadium: 'Amaan Stadium',
    city: 'Zanzibar',
    poll: { homeVotes: 12100, drawVotes: 8900, awayVotes: 10400 },
    h2hMeetings: [
      { id: 'h5_1', date: '2023-03-28', competition: 'AFCON Qualifier', homeTeam: 'Tanzania', awayTeam: 'Uganda', homeFlag: '🇹🇿', awayFlag: '🇺🇬', score: '0 - 1', result: 'away' },
      { id: 'h5_2', date: '2023-03-24', competition: 'AFCON Qualifier', homeTeam: 'Uganda', awayTeam: 'Tanzania', homeFlag: '🇺🇬', awayFlag: '🇹🇿', score: '0 - 1', result: 'away' },
      { id: 'h5_3', date: '2019-03-24', competition: 'AFCON Qualifier', homeTeam: 'Tanzania', awayTeam: 'Uganda', homeFlag: '🇹🇿', awayFlag: '🇺🇬', score: '3 - 0', result: 'home' },
      { id: 'h5_4', date: '2018-09-08', competition: 'AFCON Qualifier', homeTeam: 'Uganda', awayTeam: 'Tanzania', homeFlag: '🇺🇬', awayFlag: '🇹🇿', score: '0 - 0', result: 'draw' },
      { id: 'h5_5', date: '2015-06-20', competition: 'CHAN Qualifier', homeTeam: 'Tanzania', awayTeam: 'Uganda', homeFlag: '🇹🇿', awayFlag: '🇺🇬', score: '0 - 3', result: 'away' }
    ],
    recentFormHome: [
      { id: 'rf_t1', date: '2026-11-18', opponent: 'Zambia', opponentFlag: '🇿🇲', score: '2 - 0', result: 'W' },
      { id: 'rf_t2', date: '2026-10-14', opponent: 'Uganda', opponentFlag: '🇺🇬', score: '1 - 1', result: 'D' },
      { id: 'rf_t3', date: '2026-09-08', opponent: 'Niger', opponentFlag: '🇳🇪', score: '1 - 0', result: 'W' },
      { id: 'rf_t4', date: '2026-06-11', opponent: 'Mongolia', opponentFlag: '🇲🇳', score: '3 - 0', result: 'W' },
      { id: 'rf_t5', date: '2026-03-25', opponent: 'Bulgaria', opponentFlag: '🇧🇬', score: '0 - 1', result: 'L' }
    ],
    recentFormAway: [
      { id: 'rf_u1', date: '2026-11-18', opponent: 'Congo', opponentFlag: '🇨🇬', score: '1 - 0', result: 'W' },
      { id: 'rf_u2', date: '2026-10-13', opponent: 'South Sudan', opponentFlag: '🇸🇸', score: '1 - 2', result: 'L' },
      { id: 'rf_u3', date: '2026-09-07', opponent: 'Mozambique', opponentFlag: '🇲🇿', score: '2 - 0', result: 'W' },
      { id: 'rf_u4', date: '2026-06-09', opponent: 'Somalia', opponentFlag: '🇸🇴', score: '3 - 1', result: 'W' },
      { id: 'rf_u5', date: '2026-03-22', opponent: 'Comoros', opponentFlag: '🇰🇲', score: '0 - 4', result: 'L' }
    ]
  },
  {
    id: 'm6',
    homeTeam: 'Kenya',
    awayTeam: 'Nigeria',
    homeFlag: '🇰🇪',
    awayFlag: '🇳🇬',
    homeScore: 2,
    awayScore: 2,
    date: '2027-01-13',
    time: '20:00 EAT',
    status: 'finished',
    group: 'Group B',
    stadium: 'Nakivubo War Memorial Stadium',
    city: 'Kampala',
    poll: { homeVotes: 9400, drawVotes: 7100, awayVotes: 14200 },
    h2hMeetings: [
      { id: 'h6_1', date: '2013-06-05', competition: 'World Cup Qualifier', homeTeam: 'Kenya', awayTeam: 'Nigeria', homeFlag: '🇰🇪', awayFlag: '🇳🇬', score: '0 - 1', result: 'away' },
      { id: 'h6_2', date: '2013-03-23', competition: 'World Cup Qualifier', homeTeam: 'Nigeria', awayTeam: 'Kenya', homeFlag: '🇳🇬', awayFlag: '🇰🇪', score: '1 - 1', result: 'draw' },
      { id: 'h6_3', date: '2011-03-29', competition: 'International Friendly', homeTeam: 'Nigeria', awayTeam: 'Kenya', homeFlag: '🇳🇬', awayFlag: '🇰🇪', score: '3 - 0', result: 'home' },
      { id: 'h6_4', date: '2009-11-14', competition: 'World Cup Qualifier', homeTeam: 'Kenya', awayTeam: 'Nigeria', homeFlag: '🇰🇪', awayFlag: '🇳🇬', score: '2 - 3', result: 'away' },
      { id: 'h6_5', date: '2009-06-07', competition: 'World Cup Qualifier', homeTeam: 'Nigeria', awayTeam: 'Kenya', homeFlag: '🇳🇬', awayFlag: '🇰🇪', score: '3 - 0', result: 'home' }
    ],
    recentFormHome: [
      { id: 'rf_k1', date: '2026-11-17', opponent: 'Namibia', opponentFlag: '🇳🇦', score: '1 - 0', result: 'W' },
      { id: 'rf_k2', date: '2026-10-12', opponent: 'Zimbabwe', opponentFlag: '🇿🇼', score: '0 - 0', result: 'D' },
      { id: 'rf_k3', date: '2026-09-06', opponent: 'Cameroon', opponentFlag: '🇨🇲', score: '1 - 1', result: 'D' },
      { id: 'rf_k4', date: '2026-06-08', opponent: 'Seychelles', opponentFlag: '🇸🇨', score: '5 - 0', result: 'W' },
      { id: 'rf_k5', date: '2026-03-26', opponent: 'Gabon', opponentFlag: '🇬🇦', score: '1 - 2', result: 'L' }
    ],
    recentFormAway: [
      { id: 'rf6', date: '2026-11-19', opponent: 'Libya', opponentFlag: '🇱🇾', score: '3 - 0', result: 'W' },
      { id: 'rf7', date: '2026-10-15', opponent: 'Rwanda', opponentFlag: '🇷🇼', score: '1 - 0', result: 'W' },
      { id: 'rf8', date: '2026-09-10', opponent: 'Benin', opponentFlag: '🇧🇯', score: '2 - 2', result: 'D' },
      { id: 'rf9', date: '2026-06-10', opponent: 'South Africa', opponentFlag: '🇿🇦', score: '2 - 1', result: 'W' },
      { id: 'rf10', date: '2026-03-22', opponent: 'Ghana', opponentFlag: '🇬🇭', score: '2 - 1', result: 'W' }
    ]
  },
  {
    id: 'm7',
    homeTeam: 'Nigeria',
    awayTeam: 'Cameroon',
    homeFlag: '🇳🇬',
    awayFlag: '🇨🇲',
    date: '2027-01-18',
    time: '20:00 EAT',
    status: 'upcoming',
    group: 'Group B',
    stadium: 'Moi International Sports Centre Kasarani',
    city: 'Nairobi',
    venueImage: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=600&q=80',
    poll: { homeVotes: 18400, drawVotes: 4900, awayVotes: 16200 },
    h2hMeetings: [
      { id: 'h7_1', date: '2024-01-27', competition: 'AFCON Round of 16', homeTeam: 'Nigeria', awayTeam: 'Cameroon', homeFlag: '🇳🇬', awayFlag: '🇨🇲', score: '2 - 0', result: 'home' },
      { id: 'h7_2', date: '2021-06-08', competition: 'International Friendly', homeTeam: 'Cameroon', awayTeam: 'Nigeria', homeFlag: '🇨🇲', awayFlag: '🇳🇬', score: '0 - 0', result: 'draw' },
      { id: 'h7_3', date: '2021-06-04', competition: 'International Friendly', homeTeam: 'Nigeria', awayTeam: 'Cameroon', homeFlag: '🇳🇬', awayFlag: '🇨🇲', score: '0 - 1', result: 'away' },
      { id: 'h7_4', date: '2019-07-06', competition: 'AFCON Round of 16', homeTeam: 'Nigeria', awayTeam: 'Cameroon', homeFlag: '🇳🇬', awayFlag: '🇨🇲', score: '3 - 2', result: 'home' },
      { id: 'h7_5', date: '2017-09-04', competition: 'World Cup Qualifier', homeTeam: 'Cameroon', awayTeam: 'Nigeria', homeFlag: '🇨🇲', awayFlag: '🇳🇬', score: '1 - 1', result: 'draw' }
    ],
    recentFormHome: [
      { id: 'rf_n1', date: '2026-11-19', opponent: 'Libya', opponentFlag: '🇱🇾', score: '3 - 0', result: 'W' },
      { id: 'rf_n2', date: '2026-10-15', opponent: 'Rwanda', opponentFlag: '🇷🇼', score: '1 - 0', result: 'W' },
      { id: 'rf_n3', date: '2026-09-10', opponent: 'Benin', opponentFlag: '🇧🇯', score: '2 - 2', result: 'D' },
      { id: 'rf_n4', date: '2026-06-10', opponent: 'South Africa', opponentFlag: '🇿🇦', score: '2 - 1', result: 'W' },
      { id: 'rf_n5', date: '2026-03-22', opponent: 'Ghana', opponentFlag: '🇬🇭', score: '2 - 1', result: 'W' }
    ],
    recentFormAway: [
      { id: 'rf_cm1', date: '2026-11-19', opponent: 'Zimbabwe', opponentFlag: '🇿🇼', score: '2 - 1', result: 'W' },
      { id: 'rf_cm2', date: '2026-10-14', opponent: 'Kenya', opponentFlag: '🇰🇪', score: '1 - 0', result: 'W' },
      { id: 'rf_cm3', date: '2026-09-10', opponent: 'Namibia', opponentFlag: '🇳🇦', score: '0 - 0', result: 'D' },
      { id: 'rf_cm4', date: '2026-06-11', opponent: 'Angola', opponentFlag: '🇦🇴', score: '1 - 1', result: 'D' },
      { id: 'rf_cm5', date: '2026-03-25', opponent: 'Cape Verde', opponentFlag: '🇨🇻', score: '4 - 1', result: 'W' }
    ]
  },
  {
    id: 'm8',
    homeTeam: 'Cameroon',
    awayTeam: 'Ivory Coast',
    homeFlag: '🇨🇲',
    awayFlag: '🇨🇮',
    date: '2027-01-21',
    time: '18:00 EAT',
    status: 'upcoming',
    group: 'Group B',
    stadium: 'Benjamin Mkapa National Stadium',
    city: 'Dar es Salaam',
    venueImage: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80',
    poll: { homeVotes: 13500, drawVotes: 5200, awayVotes: 14900 },
    h2hMeetings: [
      { id: 'h8_1', date: '2021-11-16', competition: 'World Cup Qualifier', homeTeam: 'Cameroon', awayTeam: 'Ivory Coast', homeFlag: '🇨🇲', awayFlag: '🇨🇮', score: '1 - 0', result: 'home' },
      { id: 'h8_2', date: '2021-09-06', competition: 'World Cup Qualifier', homeTeam: 'Ivory Coast', awayTeam: 'Cameroon', homeFlag: '🇨🇮', awayFlag: '🇨🇲', score: '2 - 1', result: 'home' },
      { id: 'h8_3', date: '2016-01-30', competition: 'CHAN Quarter-final', homeTeam: 'Cameroon', awayTeam: 'Ivory Coast', homeFlag: '🇨🇲', awayFlag: '🇨🇮', score: '0 - 3', result: 'away' },
      { id: 'h8_4', date: '2015-01-28', competition: 'AFCON Group Stage', homeTeam: 'Cameroon', awayTeam: 'Ivory Coast', homeFlag: '🇨🇲', awayFlag: '🇨🇮', score: '0 - 1', result: 'away' },
      { id: 'h8_5', date: '2014-11-19', competition: 'AFCON Qualifier', homeTeam: 'Ivory Coast', awayTeam: 'Cameroon', homeFlag: '🇨🇮', awayFlag: '🇨🇲', score: '0 - 0', result: 'draw' }
    ],
    recentFormHome: [
      { id: 'rf_cm1', date: '2026-11-19', opponent: 'Zimbabwe', opponentFlag: '🇿🇼', score: '2 - 1', result: 'W' },
      { id: 'rf_cm2', date: '2026-10-14', opponent: 'Kenya', opponentFlag: '🇰🇪', score: '1 - 0', result: 'W' },
      { id: 'rf_cm3', date: '2026-09-10', opponent: 'Namibia', opponentFlag: '🇳🇦', score: '0 - 0', result: 'D' },
      { id: 'rf_cm4', date: '2026-06-11', opponent: 'Angola', opponentFlag: '🇦🇴', score: '1 - 1', result: 'D' },
      { id: 'rf_cm5', date: '2026-03-25', opponent: 'Cape Verde', opponentFlag: '🇨🇻', score: '4 - 1', result: 'W' }
    ],
    recentFormAway: [
      { id: 'rf_c1', date: '2026-11-19', opponent: 'Chad', opponentFlag: '🇹🇩', score: '4 - 0', result: 'W' },
      { id: 'rf_c2', date: '2026-10-15', opponent: 'Sierra Leone', opponentFlag: '🇸🇱', score: '2 - 0', result: 'W' },
      { id: 'rf_c3', date: '2026-09-09', opponent: 'Zambia', opponentFlag: '🇿🇲', score: '1 - 1', result: 'D' },
      { id: 'rf_c4', date: '2026-06-11', opponent: 'Gambia', opponentFlag: '🇬🇲', score: '2 - 0', result: 'W' },
      { id: 'rf_c5', date: '2026-03-23', opponent: 'Uruguay', opponentFlag: '🇺🇾', score: '2 - 2', result: 'D' }
    ]
  },
  {
    id: 'm9',
    homeTeam: 'Ghana',
    awayTeam: 'South Africa',
    homeFlag: '🇬🇭',
    awayFlag: '🇿🇦',
    date: '2027-01-19',
    time: '17:00 EAT',
    status: 'upcoming',
    group: 'Group C',
    stadium: 'Mandela National Stadium (Namboole)',
    city: 'Kampala',
    poll: { homeVotes: 11200, drawVotes: 4800, awayVotes: 12500 },
    h2hMeetings: [
      { id: 'h9_1', date: '2021-11-14', competition: 'World Cup Qualifier', homeTeam: 'Ghana', awayTeam: 'South Africa', homeFlag: '🇬🇭', awayFlag: '🇿🇦', score: '1 - 0', result: 'home' },
      { id: 'h9_2', date: '2021-09-06', competition: 'World Cup Qualifier', homeTeam: 'South Africa', awayTeam: 'Ghana', homeFlag: '🇿🇦', awayFlag: '🇬🇭', score: '1 - 0', result: 'home' },
      { id: 'h9_3', date: '2021-03-25', competition: 'AFCON Qualifier', homeTeam: 'South Africa', awayTeam: 'Ghana', homeFlag: '🇿🇦', awayFlag: '🇬🇭', score: '1 - 1', result: 'draw' },
      { id: 'h9_4', date: '2019-11-14', competition: 'AFCON Qualifier', homeTeam: 'Ghana', awayTeam: 'South Africa', homeFlag: '🇬🇭', awayFlag: '🇿🇦', score: '2 - 0', result: 'home' },
      { id: 'h9_5', date: '2015-01-27', competition: 'AFCON Finals', homeTeam: 'South Africa', awayTeam: 'Ghana', homeFlag: '🇿🇦', awayFlag: '🇬🇭', score: '1 - 2', result: 'away' }
    ],
    recentFormHome: [
      { id: 'rf_gh1', date: '2026-11-18', opponent: 'Niger', opponentFlag: '🇳🇪', score: '1 - 2', result: 'L' },
      { id: 'rf_gh2', date: '2026-10-15', opponent: 'Angola', opponentFlag: '🇦🇴', score: '1 - 1', result: 'D' },
      { id: 'rf_gh3', date: '2026-09-09', opponent: 'Sudan', opponentFlag: '🇸🇩', score: '2 - 0', result: 'W' },
      { id: 'rf_gh4', date: '2026-06-10', opponent: 'Central Africa', opponentFlag: '🇨🇫', score: '4 - 3', result: 'W' },
      { id: 'rf_gh5', date: '2026-03-22', opponent: 'Nigeria', opponentFlag: '🇳🇬', score: '1 - 2', result: 'L' }
    ],
    recentFormAway: [
      { id: 'rf_sa1', date: '2026-11-19', opponent: 'South Sudan', opponentFlag: '🇸🇸', score: '3 - 0', result: 'W' },
      { id: 'rf_sa2', date: '2026-10-15', opponent: 'Congo', opponentFlag: '🇨🇬', score: '5 - 0', result: 'W' },
      { id: 'rf_sa3', date: '2026-09-10', opponent: 'Uganda', opponentFlag: '🇺🇬', score: '2 - 2', result: 'D' },
      { id: 'rf_sa4', date: '2026-06-11', opponent: 'Zimbabwe', opponentFlag: '🇿🇼', score: '3 - 1', result: 'W' },
      { id: 'rf_sa5', date: '2026-03-26', opponent: 'Algeria', opponentFlag: '🇩🇿', score: '3 - 3', result: 'D' }
    ]
  }
];

export const TRAVEL_SPOTS_DATA: TravelSpot[] = [
  // Dar es Salaam
  {
    id: 'ts1',
    name: 'Dar es Salaam Serena Hotel',
    category: 'hotel',
    city: 'Dar es Salaam',
    rating: 4.8,
    reviewsCount: 1250,
    address: 'Ohio Street & Kivukoni Front, Dar es Salaam',
    phone: '+255 22 211 2416',
    priceRange: '$$$$',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
    distanceKm: 4.2,
    description: 'Premier 5-star oceanfront hotel in Dar es Salaam providing luxury rooms, swimming pools, and fast shuttles to Benjamin Mkapa Stadium.',
    features: ['Pool', 'Free High-Speed WiFi', 'Stadium Shuttle', 'Spa', 'Indian Ocean View', '24/7 Dining']
  },
  {
    id: 'ts2',
    name: 'Cape Town Fish Market Dar es Salaam',
    category: 'restaurant',
    city: 'Dar es Salaam',
    rating: 4.7,
    reviewsCount: 2100,
    address: 'Msasani Peninsula, Dar es Salaam',
    phone: '+255 784 284 284',
    priceRange: '$$$',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    distanceKm: 6.8,
    description: 'Famous waterfront seafood restaurant in Msasani Peninsula offering fresh Indian Ocean catch, sushi, and live football screenings.',
    features: ['Oceanfront Terrace', 'Fresh Seafood', 'Live Sports Screens', 'Cocktail Bar']
  },
  {
    id: 'ts3',
    name: 'Slipway Waterfront & Bongoyo Island Ferry',
    category: 'attraction',
    city: 'Dar es Salaam',
    rating: 4.9,
    reviewsCount: 3400,
    address: 'Kaporoma Way, Msasani Peninsula, Dar es Salaam',
    phone: '+255 22 260 0893',
    priceRange: '$$',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    distanceKm: 7.1,
    description: 'Vibrant waterfront shopping village with craft markets, restaurants, sunset boat cruises, and quick ferry access to Bongoyo Island.',
    features: ['Craft Markets', 'Island Boat Trips', 'Sunset Deck', 'Souvenirs']
  },
  {
    id: 'ts4',
    name: 'Muhimbili National Hospital Emergency Wing',
    category: 'hospital',
    city: 'Dar es Salaam',
    rating: 4.6,
    reviewsCount: 410,
    address: 'United Nations Road, Upanga, Dar es Salaam',
    phone: '+255 22 215 1367',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
    distanceKm: 3.5,
    description: 'Tanzania\'s national referral and emergency hospital equipped with modern trauma units and 24/7 fan medical assistance desks.',
    features: ['24/7 Trauma Emergency', 'Multilingual Staff', 'Pharmacy On-site', 'Ambulance Hotline'],
    isOpen24h: true
  },
  {
    id: 'ts5',
    name: 'Dar es Salaam Central Police HQ',
    category: 'police',
    city: 'Dar es Salaam',
    rating: 4.5,
    reviewsCount: 180,
    address: 'Azikiwe Street & Sokoine Drive, Dar es Salaam',
    phone: '+255 22 211 0006',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80',
    distanceKm: 2.1,
    description: 'Central Tourist Security & Fan Protection Bureau helping AFCON visitors with travel documentation, emergency escort, and lost property.',
    features: ['Fan Support Bureau', 'Swahili & English Desk', 'Lost & Found', 'Emergency Escort'],
    isOpen24h: true
  },
  {
    id: 'ts6',
    name: 'CRDB Bank International ATM Hub',
    category: 'atm',
    city: 'Dar es Salaam',
    rating: 4.8,
    reviewsCount: 620,
    address: 'Azikiwe Street, City Center, Dar es Salaam',
    phone: '+255 22 211 7441',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=600&q=80',
    distanceKm: 1.5,
    description: '24/7 Multi-currency ATM and foreign exchange service supporting VISA, Mastercard, UnionPay, and TZS cash withdrawals.',
    features: ['VISA/Mastercard', 'TZS Cash Withdrawal', '24/7 Security Guard', 'Low Exchange Fees'],
    isOpen24h: true
  },

  // Nairobi
  {
    id: 'ts7',
    name: 'Villa Rosa Kempinski Nairobi',
    category: 'hotel',
    city: 'Nairobi',
    rating: 4.9,
    reviewsCount: 1890,
    address: 'Chiromo Road, Westlands, Nairobi',
    phone: '+254 703 049 000',
    priceRange: '$$$$',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
    distanceKm: 5.1,
    description: 'Luxury hotel located in Westlands Nairobi with heated outdoor pools, fine dining restaurants, and direct bus lanes to Kasarani Stadium.',
    features: ['Heated Pool', 'Luxury Spa', 'Kasarani Express Shuttle', 'Valet Parking']
  },
  {
    id: 'ts8',
    name: 'Carnivore Restaurant Nairobi',
    category: 'restaurant',
    city: 'Nairobi',
    rating: 4.8,
    reviewsCount: 3100,
    address: 'Langata Road, Nairobi',
    phone: '+254 733 611 608',
    priceRange: '$$$',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    distanceKm: 8.4,
    description: 'Iconic meat specialty restaurant carved on traditional charcoal roasting pits, serving flame-grilled meats and signature Dawa cocktails.',
    features: ['Traditional Grill', 'Open Air Seating', 'Live Music', 'Group Banquets']
  },
  {
    id: 'ts9',
    name: 'Nairobi National Park Safari',
    category: 'attraction',
    city: 'Nairobi',
    rating: 4.95,
    reviewsCount: 6200,
    address: 'Langata Road, Nairobi',
    phone: '+254 20 242 3423',
    priceRange: '$$',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80',
    distanceKm: 9.0,
    description: 'The world\'s only national park located right next to a capital city skyline. Spot lions, rhinos, giraffes, and zebras on game drives.',
    features: ['Wildlife Safari', 'Guided 4x4 Tours', 'Skyline Backdrop', 'Family Friendly']
  },
  {
    id: 'ts10',
    name: 'The Aga Khan University Hospital Nairobi',
    category: 'hospital',
    city: 'Nairobi',
    rating: 4.8,
    reviewsCount: 850,
    address: '3rd Parklands Avenue, Nairobi',
    phone: '+254 20 366 2000',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
    distanceKm: 4.0,
    description: 'Internationally accredited JCI medical center providing round-the-clock emergency care, specialized doctors, and fan health desks.',
    features: ['JCI Accredited', '24/7 Emergency ICU', 'Helipad', 'International Pharmacy'],
    isOpen24h: true
  },
  {
    id: 'ts11',
    name: 'Equity Bank & KCB International ATM Hub',
    category: 'atm',
    city: 'Nairobi',
    rating: 4.7,
    reviewsCount: 510,
    address: 'Kenyatta Avenue, City Centre, Nairobi',
    phone: '+254 20 226 2000',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=600&q=80',
    distanceKm: 1.0,
    description: '24/7 ATM terminal accepting all major international payment cards with instant Kenyan Shilling (KES) dispensations.',
    features: ['VISA/Mastercard', 'KES Cash Dispenser', 'CCTV & Security', 'Low FX Rate'],
    isOpen24h: true
  },

  // Kampala
  {
    id: 'ts12',
    name: 'Kampala Serena Hotel',
    category: 'hotel',
    city: 'Kampala',
    rating: 4.9,
    reviewsCount: 1420,
    address: 'Kintu Road, Nakasero, Kampala',
    phone: '+256 31 230 4000',
    priceRange: '$$$$',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
    distanceKm: 3.8,
    description: 'Oasis of luxury in central Kampala featuring tropical water gardens, fine dining, and express coaches to Namboole Stadium.',
    features: ['Tropical Gardens', 'Pool & Spa', 'Namboole Express Shuttle', 'Conference Center']
  },
  {
    id: 'ts13',
    name: 'The Lawns Restaurant & Lounge Kampala',
    category: 'restaurant',
    city: 'Kampala',
    rating: 4.7,
    reviewsCount: 1280,
    address: 'Plot 3A, Acacia Avenue, Kololo, Kampala',
    phone: '+256 708 555 555',
    priceRange: '$$$',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    distanceKm: 2.5,
    description: 'Upscale garden dining restaurant in Kololo serving game meats, Ugandan Rolex delicacies, and international fusion cuisine.',
    features: ['Garden Dining', 'Fine Wines', 'Ugandan Delicacies', 'Spacious Terrace']
  },
  {
    id: 'ts14',
    name: 'Mulago National Referral Hospital Kampala',
    category: 'hospital',
    city: 'Kampala',
    rating: 4.6,
    reviewsCount: 520,
    address: 'Mulago Hill, Kampala',
    phone: '+256 41 455 4001',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
    distanceKm: 2.2,
    description: 'National referral medical complex with specialized emergency wards, fast ambulance services, and dedicated fan triage units.',
    features: ['24/7 Emergency Ward', 'Ambulance Hotline', 'Pharmacy', 'Specialist Clinics'],
    isOpen24h: true
  },

  // Zanzibar
  {
    id: 'ts15',
    name: 'Park Hyatt Zanzibar',
    category: 'hotel',
    city: 'Zanzibar',
    rating: 4.95,
    reviewsCount: 1650,
    address: 'Shangani Street, Stone Town, Zanzibar',
    phone: '+255 24 550 1234',
    priceRange: '$$$$',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
    distanceKm: 1.2,
    description: ' beachfront luxury hotel housed in a UNESCO-heritage building overlooking the azure waters of the Indian Ocean in Stone Town.',
    features: ['Oceanfront Pool', 'Stone Town Heritage', 'Beach Access', 'Seafood Grill']
  },
  {
    id: 'ts16',
    name: 'Forodhani Gardens Night Food Market',
    category: 'restaurant',
    city: 'Zanzibar',
    rating: 4.85,
    reviewsCount: 4200,
    address: 'Mizingani Road, Stone Town, Zanzibar',
    phone: '+255 777 123 456',
    priceRange: '$',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    distanceKm: 0.8,
    description: 'World-famous open-air night market in Stone Town serving Zanzibar pizzas, grilled lobster skewers, octopus soup, and sugarcane juice.',
    features: ['Street Food Market', 'Sea Views', 'Budget Friendly', 'Zanzibar Mix']
  }
];

export const NEWS_DATA: NewsArticle[] = [
  {
    id: 'n1',
    title: 'East Africa Pamoja AFCON: Benjamin Mkapa, Kasarani & Namboole Stadiums Ready for Showpiece',
    category: 'Host Prep',
    author: 'Juma Khamis',
    date: 'July 22, 2026',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=700&q=80',
    summary: 'Tanzania, Kenya, and Uganda complete major stadium upgrades and transit routes for the historic East Africa AFCON.',
    content: [
      'State-of-the-art turf installations, LED floodlighting, and expanded media centers are officially inspected and certified at Benjamin Mkapa National Stadium in Dar es Salaam, Kasarani Stadium in Nairobi, and Mandela National Stadium Namboole in Kampala.',
      'Organizers confirmed that a single East Africa AFCON Fan Visa pass will allow supporters to move seamlessly across borders via direct shuttles and flights.',
      'Fan parks with giant screen broadcasts will operate continuously in Dar es Salaam, Nairobi, Kampala, Zanzibar, and Eldoret.'
    ],
    tags: ['EastAfricaPamoja', 'Tanzania', 'Kenya', 'Uganda'],
    isTrending: true
  },
  {
    id: 'n2',
    title: 'Samatta & Olunga Express Pride Co-Hosting Africa\'s Greatest Tournament',
    category: 'Team News',
    author: 'David Ochieng',
    date: 'July 21, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=700&q=80',
    summary: 'Tanzanian captain Mbwana Samatta and Kenyan star Michael Olunga welcome Africa to East Africa.',
    content: [
      'Taifa Stars leader Mbwana Samatta declared that hosting AFCON in Dar es Salaam is a dream fulfilled for East African football.',
      '"Playing before 60,000 passionate home supporters at Benjamin Mkapa Stadium gives us incredible belief," said Samatta.',
      'Harambee Stars skipper Michael Olunga called on fans in Nairobi to turn Kasarani Stadium into a fortress during Group B fixtures.'
    ],
    tags: ['Tanzania', 'Kenya', 'Samatta', 'Olunga'],
    isTrending: true
  },
  {
    id: 'n3',
    title: 'Uganda Cranes Host Morocco at Namboole Stadium in Blockbuster Opener',
    category: 'Tactical Analysis',
    author: 'Grace Akello',
    date: 'July 20, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=700&q=80',
    summary: 'Tactical preview as Paul Put\'s Uganda Cranes test their defensive block against Morocco\'s world-class wingers.',
    content: [
      'Uganda head coach Paul Put emphasized high-intensity mid-block pressing to counter the speed of Achraf Hakimi and Brahim Díaz.',
      'A sell-out crowd of over 45,000 fans is expected at Mandela National Stadium Namboole in Kampala.',
      'Midfield engine Khalid Aucho declared the Cranes squad in peak physical condition following training camps in Entebbe.'
    ],
    tags: ['Uganda', 'Morocco', 'Tactics', 'Namboole']
  },
  {
    id: 'n4',
    title: 'Host Cities Guide: Exploring Dar es Salaam, Nairobi, Kampala & Zanzibar',
    category: 'Travel & Support',
    author: 'Amina Hassan',
    date: 'July 19, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80',
    summary: 'Discover local dishes, wildlife safaris, beach breaks, and fan zones across East Africa.',
    content: [
      'Visitors in Dar es Salaam can enjoy fresh seafood at Slipway waterfront before taking ferry trips to Bongoyo Island.',
      'Nairobi offers game drives at Nairobi National Park just minutes away from Kasarani and Nyayo stadiums.',
      'In Zanzibar, fans can tour Stone Town heritage sites and sample delicacies at Forodhani Gardens night market.'
    ],
    tags: ['TravelGuide', 'DaresSalaam', 'Nairobi', 'Kampala', 'Zanzibar']
  }
];

export const STADIUMS_DATA: Stadium[] = [
  {
    id: 'std1',
    name: 'Benjamin Mkapa National Stadium',
    city: 'Dar es Salaam',
    capacity: 60000,
    openedYear: 2007,
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=700&q=80',
    description: 'The premier 60,000-seater national stadium of Tanzania, featuring hybrid natural grass, LED floodlights, and grand VIP facilities.',
    scheduledMatches: 8,
    locationAddress: 'Mbagala / Temeke, Dar es Salaam, Tanzania'
  },
  {
    id: 'std2',
    name: 'Moi International Sports Centre Kasarani',
    city: 'Nairobi',
    capacity: 60000,
    openedYear: 1987,
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=700&q=80',
    description: 'Kenya\'s iconic 60,000-seat flagship arena renovated with FIFA-spec dressing rooms, luxury box seats, and modern digital screens.',
    scheduledMatches: 8,
    locationAddress: 'Thika Superhighway, Kasarani, Nairobi, Kenya'
  },
  {
    id: 'std3',
    name: 'Mandela National Stadium (Namboole)',
    city: 'Kampala',
    capacity: 45202,
    openedYear: 1997,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=700&q=80',
    description: 'Uganda\'s multi-purpose national stadium in Kampala, completely modernized with FIFA-approved turf, turnstiles, and press tribunes.',
    scheduledMatches: 7,
    locationAddress: 'Bweyogerere / Kira, Kampala, Uganda'
  },
  {
    id: 'std4',
    name: 'Amaan Stadium',
    city: 'Zanzibar',
    capacity: 15000,
    openedYear: 1970,
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=700&q=80',
    description: 'Renovated multi-sport stadium located in Zanzibar featuring fresh synthetic hybrid turf and floodlit night matches.',
    scheduledMatches: 4,
    locationAddress: 'Amaan District, Urban West, Zanzibar, Tanzania'
  },
  {
    id: 'std5',
    name: 'Nyayo National Stadium',
    city: 'Nairobi',
    capacity: 30000,
    openedYear: 1983,
    image: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=700&q=80',
    description: 'Historic arena near Nairobi city center equipped with all-seater stands and Olympic athletic facilities.',
    scheduledMatches: 5,
    locationAddress: 'Langata Road, Nairobi, Kenya'
  },
  {
    id: 'std6',
    name: 'Nakivubo War Memorial Stadium',
    city: 'Kampala',
    capacity: 35000,
    openedYear: 2024,
    image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=700&q=80',
    description: 'Newly rebuilt state-of-the-art commercial sports arena situated right in central Kampala with executive hospitality suites.',
    scheduledMatches: 4,
    locationAddress: 'Downtown Central, Kampala, Uganda'
  }
];

export const DEV_FEATURES_DATA: DevFeature[] = [
  {
    id: 'df1',
    name: 'Splash Screen & Animated Transitions',
    category: 'UI/UX',
    status: 'completed',
    milestone: 'Milestone 1',
    description: 'Football-themed splash screen with motion effects and countdown preview.'
  },
  {
    id: 'df2',
    name: 'Bottom Navigation & Drawer Bar',
    category: 'Navigation',
    status: 'completed',
    milestone: 'Milestone 1',
    description: 'Material Design 3 navigation bar supporting Home, Matches, Teams, Travel, News, Profile, Settings, Stadiums, Dev Mode.'
  },
  {
    id: 'df3',
    name: 'Home Dashboard & Live Countdown',
    category: 'Feature',
    status: 'completed',
    milestone: 'Milestone 1',
    description: 'Live countdown to East Africa AFCON, featured live match card, quick buttons, and news feed.'
  },
  {
    id: 'df4',
    name: 'Local JSON Fixtures & Group Filter',
    category: 'Data Layer',
    status: 'completed',
    milestone: 'Milestone 1',
    description: 'Comprehensive East Africa fixture listing with status tags (Live, Upcoming, Finished) and group stage filters.'
  },
  {
    id: 'df5',
    name: 'AFCON Teams Directory & Modal View',
    category: 'Data Layer',
    status: 'completed',
    milestone: 'Milestone 1',
    description: 'Roster view with coach, FIFA ranking, captain, key players, trophies, and banner images.'
  },
  {
    id: 'df6',
    name: 'East Africa Host City Travel & Emergency Guide',
    category: 'Travel & Support',
    status: 'completed',
    milestone: 'Milestone 1',
    description: 'Interactive directory for Hotels, Restaurants, Attractions, Hospitals, Police stations, and ATMs in Tanzania, Kenya & Uganda.'
  },
  {
    id: 'df7',
    name: 'Football News Reader & Bookmarks',
    category: 'Content',
    status: 'completed',
    milestone: 'Milestone 1',
    description: 'Full-text news reader with tag filters, bookmarking, and native sharing capabilities.'
  },
  {
    id: 'df8',
    name: 'Profile & Settings Customization',
    category: 'User Preference',
    status: 'completed',
    milestone: 'Milestone 1',
    description: 'Editable name, country, language, favorite team selector, dark mode, and push preferences.'
  },
  {
    id: 'df9',
    name: 'Developer Mode & Pipeline Tagging',
    category: 'DevOps & Pipeline',
    status: 'completed',
    milestone: 'Milestone 1',
    description: 'Dedicated developer portal tagging AlbisnessTz as Main Developer & Lead Pipeline Engineer.'
  },
  {
    id: 'df10',
    name: 'Automated Test Suite Execution Engine',
    category: 'Testing & QA',
    status: 'completed',
    milestone: 'Milestone 1',
    description: 'Built-in automated test suite runner checking UI routing, JSON schemas, viewmodel states, and storage services.'
  },
  {
    id: 'df11',
    name: 'Live Cloud Messaging & Match Alerts Engine',
    category: 'Backend',
    status: 'completed',
    milestone: 'Milestone 1',
    description: 'Real-time goal alerts, match kick-off notifications, and live score push updates.'
  },
  {
    id: 'df12',
    name: 'East Africa Host City REST API & Relational Database Sync',
    category: 'Backend',
    status: 'completed',
    milestone: 'Milestone 1',
    description: 'Live local storage sync and REST API state hydration for ticketing, fixtures, and travel spots.'
  },
  {
    id: 'df13',
    name: 'Google Maps & GPS Stadium Navigation',
    category: 'Maps',
    status: 'completed',
    milestone: 'Milestone 1',
    description: 'Turn-by-turn navigation links, GPS coordinates, and distance calculations for East Africa host venues.'
  },
  {
    id: 'df14',
    name: 'Social Authentication (Google / Apple / Mobile SMS)',
    category: 'Auth',
    status: 'completed',
    milestone: 'Milestone 1',
    description: 'Full multi-provider login supporting Google Account, Apple ID, Mobile Phone SMS OTP, and Email Sign In.'
  }
];

export const DEV_BUGS_DATA: DevBug[] = [
  {
    id: 'bug1',
    title: 'HMR WebSocket re-connect notice in sandboxed preview',
    severity: 'low',
    status: 'resolved',
    reporter: 'AlbisnessTz'
  },
  {
    id: 'bug2',
    title: 'Date localization formatting for Swahili/French languages',
    severity: 'low',
    status: 'resolved',
    reporter: 'QA Automation'
  }
];

export const INITIAL_TESTS: AutomatedTest[] = [
  {
    id: 'test_nav',
    name: 'Bottom Navigation State Routing Test',
    category: 'UI/UX',
    status: 'passed',
    durationMs: 42,
    log: 'Validated all 9 tabs mount correctly without state loss or blank views.'
  },
  {
    id: 'test_json',
    name: 'East Africa Local JSON Schema & Data Integrity Test',
    category: 'Data Layer',
    status: 'passed',
    durationMs: 28,
    log: 'Checked 8 Teams, 6 Matches, 16 Travel Spots across Tanzania, Kenya & Uganda for null values.'
  },
  {
    id: 'test_vm',
    name: 'MVVM AppViewModel State Manager Test',
    category: 'ViewModel',
    status: 'passed',
    durationMs: 35,
    log: 'Simulated filter updates, team selection, and profile editing reactivity.'
  },
  {
    id: 'test_storage',
    name: 'LocalStorage Persistence & Fallback Test',
    category: 'Storage',
    status: 'passed',
    durationMs: 19,
    log: 'Successfully serialized and hydrated profile, settings, and developer logs.'
  },
  {
    id: 'test_pipeline',
    name: 'AlbisnessTz Pipeline Build Validation',
    category: 'Pipeline',
    status: 'passed',
    durationMs: 64,
    log: 'Verified release build parameters and debug APK package output target.'
  }
];
