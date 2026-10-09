import { useAppViewModel } from './viewmodels/useAppViewModel';
import { SplashScreen } from './components/SplashScreen';
import { HeaderBar } from './components/HeaderBar';
import { BottomNav } from './components/BottomNav';
import { HomeScreen } from './components/HomeScreen';
import { MatchesScreen } from './components/MatchesScreen';
import { CompetitionsScreen } from './components/CompetitionsScreen';
import { TeamsScreen } from './components/TeamsScreen';
import { TravelScreen } from './components/TravelScreen';
import { NewsScreen } from './components/NewsScreen';
import { StadiumsScreen } from './components/StadiumsScreen';
import { HistoryScreen } from './components/HistoryScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { SettingsScreen } from './components/SettingsScreen';
import { ApkDownloadModal } from './components/ApkDownloadModal';
import { TeamDetailModal } from './components/TeamDetailModal';
import { MatchDetailModal } from './components/MatchDetailModal';
import { ArticleDetailModal } from './components/ArticleDetailModal';

export default function App() {
  const vm = useAppViewModel();
  const handleSelectTeamByName = (teamName: string) => {
    const found = vm.teams.find((t) => t.name.toLowerCase() === teamName.toLowerCase());
    if (found) vm.setSelectedTeam(found);
  };

  return (
    <div className={`min-h-screen ${vm.appSettings.darkMode ? 'dark premium-app-shell bg-[#030406]' : 'bg-slate-50'} text-slate-900 dark:text-slate-100 font-sans transition-colors selection:bg-sky-300 selection:text-black`}>
      {vm.showSplash && <SplashScreen onDismiss={() => vm.setShowSplash(false)} />}
      {!vm.showSplash && (
        <div className={`max-w-md mx-auto min-h-screen flex flex-col relative ${vm.appSettings.darkMode ? 'premium-app-shell bg-[#030406] dark' : 'bg-slate-50'} shadow-[0_0_80px_rgba(0,0,0,0.55)]`}>
          <HeaderBar selectedCity={vm.selectedCity} onSelectCity={vm.setSelectedCity} darkMode={vm.appSettings.darkMode} onToggleDarkMode={() => vm.updateSettings({ darkMode: !vm.appSettings.darkMode })} activeTab={vm.activeTab} onSelectTab={vm.setActiveTab} onOpenApkModal={() => vm.setShowApkModal(true)} searchQuery={vm.searchQuery} onSearchChange={vm.setSearchQuery} />
          <main className="flex-1 px-4 pt-4 overflow-y-auto">
            <div role="status" className="mb-3 rounded-xl border border-sky-300/20 bg-sky-300/[0.06] px-3 py-2 text-[11px] font-medium text-amber-800 dark:text-slate-300">
              <p className="font-bold text-sky-300">Sports data connection</p>
              {vm.liveApiConnection === 'checking' && <p className="mt-1">Checking backend availability…</p>}
              {vm.liveApiConnection === 'configured' && <p className="mt-1">Backend is reachable and a provider key is configured. The Matches screen checks the provider feed separately; other fixture cards remain preview data.</p>}
              {vm.liveApiConnection === 'not-configured' && <p className="mt-1">Backend is reachable, but verified live data is not configured. Fixtures and scores remain preview data.</p>}
              {vm.liveApiConnection === 'unreachable' && <p className="mt-1">Sports backend is not reachable from this preview. Fixtures and scores remain preview data.</p>}
            </div>
            {vm.activeTab === 'home' && <HomeScreen userProfile={vm.userProfile} featuredMatch={vm.matches[0]} upcomingMatches={vm.matches.filter((m) => m.status === 'upcoming')} latestNews={vm.news} onSelectTab={vm.setActiveTab} onSelectMatch={vm.setSelectedMatch} onSelectArticle={vm.setSelectedArticle} onSelectTeamByName={handleSelectTeamByName} />}
            {vm.activeTab === 'matches' && <MatchesScreen matches={vm.filteredMatches} liveFootballMatches={vm.liveFootballFeed.matches} liveFootballFeedState={vm.liveFootballFeed.state} liveFootballFeedMessage={vm.liveFootballFeed.message} liveFootballFeedFetchedAt={vm.liveFootballFeed.fetchedAt} teams={vm.teams} userProfile={vm.userProfile} selectedGroup={vm.selectedMatchGroup} onSelectGroup={vm.setSelectedMatchGroup} savedMatches={vm.userProfile.savedMatches} onToggleSaveMatch={vm.toggleSaveMatch} selectedMatch={vm.selectedMatch} onSelectMatch={vm.setSelectedMatch} onSelectTeamByName={handleSelectTeamByName} onCastVote={vm.castMatchVote} />}
            {vm.activeTab === 'competitions' && <CompetitionsScreen onSelectTab={vm.setActiveTab} />}
            {vm.activeTab === 'teams' && <TeamsScreen teams={vm.filteredTeams} selectedTeam={vm.selectedTeam} onSelectTeam={vm.setSelectedTeam} />}
            {vm.activeTab === 'travel' && <TravelScreen travelSpots={vm.filteredTravelSpots} selectedCity={vm.selectedCity} onSelectCity={vm.setSelectedCity} selectedCategory={vm.selectedTravelCategory} onSelectCategory={vm.setSelectedTravelCategory} />}
            {vm.activeTab === 'news' && <NewsScreen news={vm.filteredNews} savedArticles={vm.userProfile.savedArticles} onToggleSaveArticle={vm.toggleSaveArticle} selectedArticle={vm.selectedArticle} onSelectArticle={vm.setSelectedArticle} />}
            {vm.activeTab === 'stadiums' && <StadiumsScreen stadiums={vm.stadiums} onSelectStadium={vm.setSelectedStadium} />}
            {vm.activeTab === 'history' && <HistoryScreen onSelectTab={vm.setActiveTab} />}
            {vm.activeTab === 'profile' && <ProfileScreen userProfile={vm.userProfile} onUpdateProfile={vm.updateProfile} onRegister={vm.handleRegister} onLogin={vm.handleLogin} onLogout={vm.handleLogout} teams={vm.teams} matches={vm.matches} news={vm.news} onSelectMatch={vm.setSelectedMatch} onSelectArticle={vm.setSelectedArticle} onToggleSaveMatch={vm.toggleSaveMatch} onToggleSaveArticle={vm.toggleSaveArticle} onSelectTab={vm.setActiveTab} />}
            {vm.activeTab === 'settings' && <SettingsScreen settings={vm.appSettings} onUpdateSettings={vm.updateSettings} onSelectTab={vm.setActiveTab} />}
          </main>
          <BottomNav activeTab={vm.activeTab} onSelectTab={vm.setActiveTab} />
        </div>
      )}
      {vm.showApkModal && <ApkDownloadModal onClose={() => vm.setShowApkModal(false)} />}
      {vm.selectedTeam && <TeamDetailModal team={vm.selectedTeam} allMatches={vm.matches} onClose={() => vm.setSelectedTeam(null)} onSelectMatch={(m) => { vm.setSelectedTeam(null); vm.setSelectedMatch(m); }} />}
      {vm.selectedMatch && <MatchDetailModal match={vm.selectedMatch} userProfile={vm.userProfile} teams={vm.teams} onClose={() => vm.setSelectedMatch(null)} onCastVote={vm.castMatchVote} onToggleSave={vm.toggleSaveMatch} onSelectTeamByName={handleSelectTeamByName} />}
      {vm.selectedArticle && <ArticleDetailModal article={vm.selectedArticle} onClose={() => vm.setSelectedArticle(null)} isSaved={vm.userProfile.savedArticles?.includes(vm.selectedArticle.id)} onToggleSave={vm.toggleSaveArticle} />}
    </div>
  );
}
