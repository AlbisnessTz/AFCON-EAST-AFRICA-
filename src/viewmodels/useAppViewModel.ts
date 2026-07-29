import { useState, useEffect, useCallback } from 'react';
import { 
  TabType, 
  TravelCategory, 
  Team, 
  Match, 
  NewsArticle, 
  Stadium, 
  UserProfile, 
  AppSettings 
} from '../types';
import { 
  TEAMS_DATA, 
  MATCHES_DATA, 
  TRAVEL_SPOTS_DATA, 
  NEWS_DATA, 
  STADIUMS_DATA 
} from '../data/mockData';
import { StorageService } from '../services/storageService';

export function useAppViewModel() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [showApkModal, setShowApkModal] = useState<boolean>(false);

  // User Profile & Settings state
  const [userProfile, setUserProfile] = useState<UserProfile>(() => StorageService.getProfile());
  const [appSettings, setAppSettings] = useState<AppSettings>(() => StorageService.getSettings());

  // Matches State (dynamic votes)
  const [matches, setMatches] = useState<Match[]>(MATCHES_DATA);

  // Filter States
  const [selectedCity, setSelectedCity] = useState<string>('Dar es Salaam');
  const [selectedTravelCategory, setSelectedTravelCategory] = useState<TravelCategory>('hotel');
  const [selectedMatchGroup, setSelectedMatchGroup] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals / Details state
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [selectedStadium, setSelectedStadium] = useState<Stadium | null>(null);

  // Auto hide splash screen after 2.4 seconds initially
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  // Sync dark mode class to documentElement
  useEffect(() => {
    if (appSettings.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [appSettings.darkMode]);

  // Auth Handlers
  const handleRegister = useCallback((newUser: UserProfile) => {
    const registered = StorageService.registerUser(newUser);
    setUserProfile(registered);
    return registered;
  }, []);

  const handleLogin = useCallback((email: string, pass: string) => {
    const loggedIn = StorageService.loginUser(email, pass);
    setUserProfile(loggedIn);
    return loggedIn;
  }, []);

  const handleLogout = useCallback(() => {
    const loggedOut = StorageService.logoutUser();
    setUserProfile(loggedOut);
  }, []);

  // Persist Profile Updates
  const updateProfile = useCallback((updated: Partial<UserProfile>) => {
    setUserProfile((prev) => {
      const next = { ...prev, ...updated };
      StorageService.saveProfile(next);
      return next;
    });
  }, []);

  // Persist Settings Updates
  const updateSettings = useCallback((updated: Partial<AppSettings>) => {
    setAppSettings((prev) => {
      const next = { ...prev, ...updated };
      StorageService.saveSettings(next);
      return next;
    });
  }, []);

  // Bookmark / Save match
  const toggleSaveMatch = useCallback((matchId: string) => {
    setUserProfile((prev) => {
      const isSaved = prev.savedMatches.includes(matchId);
      const nextSaved = isSaved
        ? prev.savedMatches.filter((id) => id !== matchId)
        : [...prev.savedMatches, matchId];
      const next = { ...prev, savedMatches: nextSaved };
      StorageService.saveProfile(next);
      return next;
    });
  }, []);

  // Cast Fan Prediction Vote
  const castMatchVote = useCallback((matchId: string, choice: 'home' | 'draw' | 'away') => {
    setUserProfile((prevProfile) => {
      const existingVotes = prevProfile.userVotes || {};
      const previousChoice = existingVotes[matchId];

      if (previousChoice === choice) return prevProfile; // already voted this

      const nextVotes = { ...existingVotes, [matchId]: choice };
      const nextProfile = { ...prevProfile, userVotes: nextVotes };
      StorageService.saveProfile(nextProfile);

      // Update match vote counts
      setMatches((prevMatches) =>
        prevMatches.map((m) => {
          if (m.id !== matchId) return m;
          const currentPoll = m.poll || { homeVotes: 100, drawVotes: 50, awayVotes: 80 };
          const updatedPoll = { ...currentPoll };

          // Subtract previous vote if re-voting
          if (previousChoice === 'home') updatedPoll.homeVotes = Math.max(0, updatedPoll.homeVotes - 1);
          if (previousChoice === 'draw') updatedPoll.drawVotes = Math.max(0, updatedPoll.drawVotes - 1);
          if (previousChoice === 'away') updatedPoll.awayVotes = Math.max(0, updatedPoll.awayVotes - 1);

          // Add new vote
          if (choice === 'home') updatedPoll.homeVotes += 1;
          if (choice === 'draw') updatedPoll.drawVotes += 1;
          if (choice === 'away') updatedPoll.awayVotes += 1;

          const updatedMatch = { ...m, poll: updatedPoll };
          // If currently viewing this match in detail modal, sync it
          setSelectedMatch((curr) => (curr && curr.id === matchId ? updatedMatch : curr));

          return updatedMatch;
        })
      );

      return nextProfile;
    });
  }, []);

  // Bookmark / Save news article
  const toggleSaveArticle = useCallback((articleId: string) => {
    setUserProfile((prev) => {
      const isSaved = prev.savedArticles.includes(articleId);
      const nextSaved = isSaved
        ? prev.savedArticles.filter((id) => id !== articleId)
        : [...prev.savedArticles, articleId];
      const next = { ...prev, savedArticles: nextSaved };
      StorageService.saveProfile(next);
      return next;
    });
  }, []);

  // Derived filtered data
  const filteredMatches = matches.filter((m) => {
    const matchGroup = selectedMatchGroup === 'All' || m.group === selectedMatchGroup;
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !query ||
      m.homeTeam.toLowerCase().includes(query) ||
      m.awayTeam.toLowerCase().includes(query) ||
      (m.stadium && m.stadium.toLowerCase().includes(query)) ||
      m.city.toLowerCase().includes(query);
    return matchGroup && matchesQuery;
  });

  const filteredTeams = TEAMS_DATA.filter((t) => {
    const query = searchQuery.toLowerCase().trim();
    return (
      !query ||
      t.name.toLowerCase().includes(query) ||
      t.coach.toLowerCase().includes(query) ||
      t.group.toLowerCase().includes(query) ||
      t.keyPlayers.some((p) => p.toLowerCase().includes(query))
    );
  });

  const filteredTravelSpots = TRAVEL_SPOTS_DATA.filter((ts) => {
    const categoryMatch = ts.category === selectedTravelCategory;
    const cityMatch = !selectedCity || selectedCity === 'All Cities' || ts.city.toLowerCase() === selectedCity.toLowerCase();
    const query = searchQuery.toLowerCase().trim();
    const queryMatch =
      !query ||
      ts.name.toLowerCase().includes(query) ||
      ts.address.toLowerCase().includes(query) ||
      ts.description.toLowerCase().includes(query);
    return categoryMatch && cityMatch && queryMatch;
  });

  const filteredNews = NEWS_DATA.filter((n) => {
    const query = searchQuery.toLowerCase().trim();
    return (
      !query ||
      n.title.toLowerCase().includes(query) ||
      n.category.toLowerCase().includes(query) ||
      n.summary.toLowerCase().includes(query) ||
      n.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  return {
    // Navigation & View
    activeTab,
    setActiveTab,
    showSplash,
    setShowSplash,
    showApkModal,
    setShowApkModal,

    // User & Preferences
    userProfile,
    updateProfile,
    handleRegister,
    handleLogin,
    handleLogout,
    appSettings,
    updateSettings,
    toggleSaveMatch,
    castMatchVote,
    toggleSaveArticle,

    // Filter controls
    selectedCity,
    setSelectedCity,
    selectedTravelCategory,
    setSelectedTravelCategory,
    selectedMatchGroup,
    setSelectedMatchGroup,
    searchQuery,
    setSearchQuery,

    // Detail Modals
    selectedTeam,
    setSelectedTeam,
    selectedMatch,
    setSelectedMatch,
    selectedArticle,
    setSelectedArticle,
    selectedStadium,
    setSelectedStadium,

    // Data collections
    teams: TEAMS_DATA,
    filteredTeams,
    matches: MATCHES_DATA,
    filteredMatches,
    travelSpots: TRAVEL_SPOTS_DATA,
    filteredTravelSpots,
    news: NEWS_DATA,
    filteredNews,
    stadiums: STADIUMS_DATA
  };
}
