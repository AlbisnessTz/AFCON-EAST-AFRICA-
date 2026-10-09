import React from 'react';
import { 
  Trophy, 
  Calendar, 
  ChevronRight, 
  MapPin, 
  Newspaper, 
  Shield, 
  Compass, 
  Building2, 
  User, 
  Sparkles,
  Flame,
  ArrowUpRight,
  Landmark
} from 'lucide-react';
import { Match, NewsArticle, TabType, UserProfile } from '../types';

interface HomeScreenProps {
  userProfile: UserProfile;
  featuredMatch: Match;
  upcomingMatches: Match[];
  latestNews: NewsArticle[];
  onSelectTab: (tab: TabType) => void;
  onSelectMatch: (match: Match) => void;
  onSelectArticle: (article: NewsArticle) => void;
  onSelectTeamByName?: (teamName: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  userProfile,
  featuredMatch,
  upcomingMatches,
  latestNews,
  onSelectTab,
  onSelectMatch,
  onSelectArticle,
  onSelectTeamByName
}) => {
  const quickButtons = [
    { label: 'News', tab: 'news' as TabType, icon: Newspaper, bg: 'from-blue-600 to-indigo-700' },
    { label: 'Teams', tab: 'teams' as TabType, icon: Shield, bg: 'from-amber-600 to-amber-700' },
    { label: 'Travel', tab: 'travel' as TabType, icon: Compass, bg: 'from-teal-600 to-emerald-700' },
    { label: 'History', tab: 'history' as TabType, icon: Landmark, bg: 'from-amber-700 to-orange-800' },
    { label: 'Stadiums', tab: 'stadiums' as TabType, icon: Building2, bg: 'from-purple-600 to-indigo-800' },
    { label: 'Profile', tab: 'profile' as TabType, icon: User, bg: 'from-rose-600 to-pink-700' },
  ];

  return (
    <div className="space-y-6 pb-24 animate-fadeIn">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.15),transparent_48%),linear-gradient(135deg,#141923_0%,#080a0f_52%,#030406_100%)] p-5 text-white shadow-[0_24px_60px_rgba(0,0,0,0.38)] border border-white/10">
        <div className="absolute top-0 right-0 w-48 h-48 bg-sky-400/[0.09] rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex items-start justify-between gap-3 relative z-10">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-sky-300 font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5" /> Welcome to SportsLab Africa
            </div>
            <h2 className="text-xl font-black text-white tracking-tight">
              Jambo, {userProfile.name}! 👋
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Your global home for sports scores, fixtures, teams, and sports culture.
            </p>
          </div>

          <div className="w-12 h-12 rounded-2xl bg-amber-400 p-0.5 shadow-lg shrink-0">
            <img
              src={userProfile.photoUrl}
              alt="Avatar"
              className="w-full h-full object-cover rounded-[14px]"
            />
          </div>
        </div>

        {/* Data integration status: do not imply a verified tournament countdown. */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-3">
          <div className="text-[11px] font-bold text-sky-300 uppercase tracking-wider flex items-center gap-1">
            <Trophy className="w-3.5 h-3.5" /> Global sports coverage
          </div>
          <span className="text-[10px] font-semibold text-slate-400 text-right">
            Preview mode · live data integration in progress
          </span>
        </div>
      </div>

      {/* Featured Match Card */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500" /> Featured Match
          </h3>
          <button
            onClick={() => onSelectTab('matches')}
            className="text-xs font-semibold text-sky-300 hover:underline flex items-center gap-0.5"
          >
            All Matches <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {featuredMatch && (
          <div
            onClick={() => onSelectMatch(featuredMatch)}
            className="bg-gradient-to-br from-[#151922] via-[#0b0e14] to-[#06070a] border border-white/10 rounded-2xl p-4 shadow-[0_16px_42px_rgba(0,0,0,0.3)] hover:border-sky-300/25 hover:shadow-[0_18px_45px_rgba(0,0,0,0.45)] transition-all cursor-pointer space-y-3 relative overflow-hidden group"
          >
            <div className="flex items-center justify-between text-xs font-bold text-slate-400">
              <span className="px-2 py-0.5 rounded-md bg-white/[0.05] text-slate-300 border border-white/10">
                {featuredMatch.group}
              </span>
              <span className={`flex items-center gap-1 font-extrabold ${featuredMatch.status === 'live' ? 'text-red-600 animate-pulse' : 'text-slate-500 dark:text-emerald-300'}`}>
                {featuredMatch.status === 'live' && <span className="w-2 h-2 rounded-full bg-red-600 inline-block" />}
                {featuredMatch.status === 'live' ? 'LIVE' : featuredMatch.status === 'finished' ? 'FULL TIME' : 'SCHEDULED PREVIEW'}
              </span>
            </div>

            <div className="flex items-center justify-between py-2 px-2">
              {/* Home Team */}
              <div 
                onClick={(e) => {
                  if (onSelectTeamByName) {
                    e.stopPropagation();
                    onSelectTeamByName(featuredMatch.homeTeam);
                  }
                }}
                className="flex flex-col items-center gap-1 w-2/5 text-center cursor-pointer hover:text-amber-500 transition-colors"
                title="Click to view team details"
              >
                <span className="text-3xl hover:scale-110 transition-transform">{featuredMatch.homeFlag}</span>
                <span className="font-extrabold text-sm text-slate-900 dark:text-white">
                  {featuredMatch.homeTeam}
                </span>
              </div>

              {/* Live Score */}
              <div className="flex flex-col items-center justify-center w-1/5">
                <div className="text-2xl font-black text-sky-300 bg-sky-400/[0.08] px-3 py-1 rounded-xl border border-sky-300/20">
                  {featuredMatch.homeScore} - {featuredMatch.awayScore}
                </div>
                <span className="text-[10px] text-slate-500 font-medium mt-1">
                  67&apos; 2nd Half
                </span>
              </div>

              {/* Away Team */}
              <div 
                onClick={(e) => {
                  if (onSelectTeamByName) {
                    e.stopPropagation();
                    onSelectTeamByName(featuredMatch.awayTeam);
                  }
                }}
                className="flex flex-col items-center gap-1 w-2/5 text-center cursor-pointer hover:text-amber-500 transition-colors"
                title="Click to view team details"
              >
                <span className="text-3xl hover:scale-110 transition-transform">{featuredMatch.awayFlag}</span>
                <span className="font-extrabold text-sm text-slate-900 dark:text-white">
                  {featuredMatch.awayTeam}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
              <span className="flex items-center gap-1 truncate max-w-[200px]">
                <MapPin className="w-3.5 h-3.5 text-sky-300 shrink-0" /> {featuredMatch.stadium ? `${featuredMatch.stadium}, ${featuredMatch.city}` : featuredMatch.city}
              </span>
              <span className="text-sky-300 font-bold flex items-center gap-0.5">
                View Match Center <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Quick Action Grid Buttons */}
      <div className="space-y-2">
        <h3 className="text-sm font-bold text-slate-800 dark:text-emerald-100 px-1">
          Quick Access
        </h3>
        <div className="grid grid-cols-3 gap-2.5">
          {quickButtons.map((btn) => {
            const Icon = btn.icon;
            return (
              <button
                key={btn.label}
                onClick={() => onSelectTab(btn.tab)}
                className={`flex flex-col items-center justify-center p-3 rounded-2xl bg-gradient-to-br ${btn.bg} text-white shadow-md hover:scale-105 transition-transform relative group`}
              >
                <Icon className="w-5 h-5 mb-1" />
                <span className="text-xs font-bold">{btn.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Upcoming Matches Preview Carousel */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-sm font-bold text-slate-800 dark:text-emerald-100 flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Upcoming Fixtures
          </h3>
          <button
            onClick={() => onSelectTab('matches')}
            className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline"
          >
            See Schedule
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
          {upcomingMatches.map((m) => (
            <div
              key={m.id}
              onClick={() => onSelectMatch(m)}
              className="min-w-[200px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-emerald-800/80 rounded-2xl p-3 shadow-sm hover:shadow-md cursor-pointer transition-all shrink-0 space-y-2"
            >
              <div className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 flex justify-between">
                <span>{m.group}</span>
                <span>{m.time}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
                <span className="flex items-center gap-1.5">{m.homeFlag} {m.homeTeam}</span>
                <span className="text-slate-400">VS</span>
                <span className="flex items-center gap-1.5">{m.awayTeam} {m.awayFlag}</span>
              </div>
              <div className="text-[10px] text-slate-500 dark:text-emerald-300/70 truncate pt-1 border-t border-slate-100 dark:border-slate-800">
                📍 {m.stadium ? m.stadium : m.city}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Latest News Feed Cards */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-sm font-bold text-slate-800 dark:text-emerald-100 flex items-center gap-1.5">
            <Newspaper className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Latest AFCON News
          </h3>
          <button
            onClick={() => onSelectTab('news')}
            className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline"
          >
            All News
          </button>
        </div>

        <div className="space-y-3">
          {latestNews.slice(0, 3).map((article) => (
            <div
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-emerald-800/80 rounded-2xl p-3 shadow-sm hover:shadow-md cursor-pointer transition-all flex gap-3 items-center"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-20 h-20 rounded-xl object-cover shrink-0"
              />
              <div className="space-y-1 overflow-hidden">
                <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide">
                  {article.category}
                </span>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-2 leading-tight">
                  {article.title}
                </h4>
                <div className="text-[10px] text-slate-400 dark:text-emerald-400/80 flex items-center gap-2">
                  <span>{article.date}</span> • <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
