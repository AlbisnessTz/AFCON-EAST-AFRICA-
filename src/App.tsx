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
import { AuthGateModal } from './components/AuthGateModal';
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
    <div className={`min-h-screen ${vm.appSettings.darkMode ? 'dark' : ''} bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors selection:bg-amber-400 selection:text-black`}>
      {vm.showSplash && <SplashScreen onDismiss={() => vm.setShowSplash(false)} />}
      {!vm.showSplash && !vm.userProfile.isAuthenticated ? (
        <AuthGateModal userProfile={vm.userProfile} teams={vm.teams} onRegister={vm.handleRegister} onLogin={vm.handleLogin} onUpdateProfile={vm.updateProfile} />
      ) : (
        <div className={`max-w-md mx-auto min-h-screen flex flex-col relative bg-slate-50 dark:bg-slate-950 shadow-2xl ${vm.appSettings.darkMode ? 'dark' : ''}`}>
          <HeaderBar selectedCity={vm.selectedCity} onSelectCity={vm.setSelectedCity} darkMode={vm.appSettings.darkMode} onToggleDarkMode={() => vm.updateSettings({ darkMode: !vm.appSettings.darkMode })} activeTab={vm.activeTab} onSelectTab={vm.setActiveTab} onOpenApkModal={() => vm.setShowApkModal(true)} searchQuery={vm.searchQuery} onSearchChange={vm.setSearchQuery} />
          <main className="flex-1 px-4 pt-4 overflow-y-auto">
            {vm.activeTab === 'home' && <HomeScreen userProfile={vm.userProfile} featuredMatch={vm.matches[0]} upcomingMatches={vm.matches.filter((m) => m.status === 'upcoming')} latestNews={vm.news} onSelectTab={vm.setActiveTab} onSelectMatch={vm.setSelectedMatch} onSelectArticle={vm.setSelectedArticle} onSelectTeamByName={handleSelectTeamByName} />}
            {vm.activeTab === 'matches' && <MatchesScreen matches={vm.filteredMatches} teams={vm.teams} userProfile={vm.userProfile} selectedGroup={vm.selectedMatchGroup} onSelectGroup={vm.setSelectedMatchGroup} savedMatches={vm.userProfile.savedMatches} onToggleSaveMatch={vm.toggleSaveMatch} selectedMatch={vm.selectedMatch} onSelectMatch={vm.setSelectedMatch} onSelectTeamByName={handleSelectTeamByName} onCastVote={vm.castMatchVote} />}
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
      {vm.selectedMatch && <MatchDetailModal match={vm.selectedMatch} userProfile={vm.userProfile} teams={vm.teams} onClose={() => vm.setSelectedMatch(null)} onCastVote={vm.castMatchVote} onToggleSaveMatch={vm.toggleSaveMatch} onSelectTeamByName={handleSelectTeamByName} />}
      {vm.selectedArticle && <ArticleDetailModal article={vm.selectedArticle} onClose={() => vm.setSelectedArticle(null)} isSaved={vm.userProfile.savedArticles?.includes(vm.selectedArticle.id)} onToggleSave={vm.toggleSaveArticle} />}
    </div>
  );
}
