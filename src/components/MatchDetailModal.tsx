import React, { useState } from 'react';
import { 
  X, 
  Vote, 
  Trophy, 
  Calendar, 
  MapPin, 
  Clock, 
  Shield, 
  Bookmark, 
  BookmarkCheck, 
  Sparkles, 
  Users, 
  History, 
  TrendingUp, 
  Navigation 
} from 'lucide-react';
import { Match, Team, UserProfile } from '../types';

interface MatchDetailModalProps {
  match: Match;
  userProfile: UserProfile;
  teams: Team[];
  onClose: () => void;
  onCastVote: (matchId: string, choice: 'home' | 'draw' | 'away') => void;
  onToggleSaveMatch: (matchId: string) => void;
  onSelectTeamByName: (teamName: string) => void;
}

export const MatchDetailModal: React.FC<MatchDetailModalProps> = ({
  match,
  userProfile,
  teams,
  onClose,
  onCastVote,
  onToggleSaveMatch,
  onSelectTeamByName
}) => {
  const [activeTab, setActiveTab] = useState<'poll' | 'h2h' | 'form' | 'venue'>('poll');

  const isSaved = userProfile.savedMatches.includes(match.id);
  const userChoice = userProfile.userVotes?.[match.id];

  // Poll Vote Calculations
  const poll = match.poll || { homeVotes: 12000, drawVotes: 4000, awayVotes: 9000 };
  const totalVotes = poll.homeVotes + poll.drawVotes + poll.awayVotes;
  const homePercent = totalVotes > 0 ? Math.round((poll.homeVotes / totalVotes) * 100) : 33;
  const drawPercent = totalVotes > 0 ? Math.round((poll.drawVotes / totalVotes) * 100) : 33;
  const awayPercent = totalVotes > 0 ? 100 - (homePercent + drawPercent) : 34;

  const homeTeamObj = teams.find((t) => t.name.toLowerCase() === match.homeTeam.toLowerCase());
  const awayTeamObj = teams.find((t) => t.name.toLowerCase() === match.awayTeam.toLowerCase());

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg max-h-[92vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-slate-200 dark:border-emerald-800/80"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Match Hero Banner */}
        <div className="relative bg-gradient-to-br from-emerald-950 via-green-900 to-slate-950 p-5 text-white shrink-0 border-b border-emerald-800/60">
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Top Actions Bar */}
          <div className="flex items-center justify-between text-xs font-bold text-emerald-200 mb-3">
            <span className="px-2.5 py-1 rounded-lg bg-emerald-900/90 border border-emerald-700/60 text-amber-300">
              {match.group} • {match.city}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggleSaveMatch(match.id)}
                className={`p-2 rounded-full transition-all ${
                  isSaved
                    ? 'bg-amber-400 text-slate-950 shadow-md'
                    : 'bg-emerald-900/80 text-emerald-200 hover:bg-emerald-800'
                }`}
                title={isSaved ? 'Remove Bookmark' : 'Save Match'}
              >
                {isSaved ? <BookmarkCheck className="w-4 h-4 fill-slate-950" /> : <Bookmark className="w-4 h-4" />}
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-all"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Teams Scoreboard & Clickable Teams */}
          <div className="flex items-center justify-between py-2">
            {/* Home Team */}
            <div 
              onClick={() => onSelectTeamByName(match.homeTeam)}
              className="flex flex-col items-center gap-1.5 w-2/5 text-center cursor-pointer group hover:opacity-90 transition-all"
            >
              <div className="text-4xl group-hover:scale-110 transition-transform">
                {match.homeFlag}
              </div>
              <div className="font-black text-sm text-white group-hover:text-amber-400 flex items-center gap-1">
                {match.homeTeam}
              </div>
              <span className="text-[10px] text-emerald-300/80 font-medium bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                View Team Info
              </span>
            </div>

            {/* Match Status / Score */}
            <div className="flex flex-col items-center justify-center w-1/5">
              {match.status === 'live' ? (
                <div className="text-center">
                  <div className="text-2xl font-black text-amber-400 bg-amber-950/80 px-3 py-1 rounded-2xl border border-amber-500/50 shadow-lg">
                    {match.homeScore} - {match.awayScore}
                  </div>
                  <span className="text-[10px] font-bold text-red-400 animate-pulse mt-1 inline-block">
                    ● LIVE 2ND HALF
                  </span>
                </div>
              ) : match.status === 'finished' ? (
                <div className="text-center">
                  <div className="text-xl font-black text-slate-200 bg-slate-800 px-3 py-1 rounded-2xl border border-slate-700">
                    {match.homeScore} - {match.awayScore}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 mt-1 inline-block uppercase">
                    Full Time
                  </span>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-xs font-black text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded-xl border border-amber-500/40">
                    {match.time}
                  </div>
                  <span className="text-[10px] font-medium text-emerald-300 mt-1 block">
                    {match.date}
                  </span>
                </div>
              )}
            </div>

            {/* Away Team */}
            <div 
              onClick={() => onSelectTeamByName(match.awayTeam)}
              className="flex flex-col items-center gap-1.5 w-2/5 text-center cursor-pointer group hover:opacity-90 transition-all"
            >
              <div className="text-4xl group-hover:scale-110 transition-transform">
                {match.awayFlag}
              </div>
              <div className="font-black text-sm text-white group-hover:text-amber-400 flex items-center gap-1">
                {match.awayTeam}
              </div>
              <span className="text-[10px] text-emerald-300/80 font-medium bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                View Team Info
              </span>
            </div>
          </div>

          <div className="mt-2 pt-2 border-t border-emerald-800/50 text-center text-[11px] text-emerald-300/90 font-medium flex items-center justify-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            {match.stadium || 'Host Stadium'} • {match.city}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center justify-around bg-slate-100 dark:bg-slate-950 px-2 py-2 border-b border-slate-200 dark:border-slate-800 text-xs font-bold shrink-0">
          <button
            onClick={() => setActiveTab('poll')}
            className={`flex-1 py-1.5 px-2 rounded-xl text-center transition-all flex items-center justify-center gap-1 ${
              activeTab === 'poll'
                ? 'bg-amber-500 text-slate-950 shadow'
                : 'text-slate-600 dark:text-emerald-300/80 hover:bg-slate-200 dark:hover:bg-slate-900'
            }`}
          >
            <Vote className="w-3.5 h-3.5" /> Fan Poll ({totalVotes.toLocaleString()})
          </button>
          <button
            onClick={() => setActiveTab('h2h')}
            className={`flex-1 py-1.5 px-2 rounded-xl text-center transition-all flex items-center justify-center gap-1 ${
              activeTab === 'h2h'
                ? 'bg-amber-500 text-slate-950 shadow'
                : 'text-slate-600 dark:text-emerald-300/80 hover:bg-slate-200 dark:hover:bg-slate-900'
            }`}
          >
            <History className="w-3.5 h-3.5" /> 5 H2H Meetings
          </button>
          <button
            onClick={() => setActiveTab('form')}
            className={`flex-1 py-1.5 px-2 rounded-xl text-center transition-all flex items-center justify-center gap-1 ${
              activeTab === 'form'
                ? 'bg-amber-500 text-slate-950 shadow'
                : 'text-slate-600 dark:text-emerald-300/80 hover:bg-slate-200 dark:hover:bg-slate-900'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" /> 5 Games Form
          </button>
        </div>

        {/* Scrollable Details Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-slate-800 dark:text-slate-100">

          {/* TAB 1: FAN PREDICTION POLL & OPEN VOTING */}
          {activeTab === 'poll' && (
            <div className="space-y-4">
              <div className="p-4 bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
                  <div className="font-extrabold text-xs text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-500" /> Official Fan Prediction Poll
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">
                    {totalVotes.toLocaleString()} Votes Cast
                  </span>
                </div>

                {/* Percentage Stack Bar */}
                <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden flex border border-slate-300 dark:border-slate-700">
                  <div
                    style={{ width: `${homePercent}%` }}
                    className="bg-emerald-600 text-[9px] font-black text-white flex items-center justify-center transition-all duration-500"
                    title={`${match.homeTeam}: ${homePercent}%`}
                  >
                    {homePercent > 12 && `${homePercent}%`}
                  </div>
                  <div
                    style={{ width: `${drawPercent}%` }}
                    className="bg-amber-500 text-[9px] font-black text-slate-950 flex items-center justify-center transition-all duration-500"
                    title={`Draw: ${drawPercent}%`}
                  >
                    {drawPercent > 10 && `${drawPercent}%`}
                  </div>
                  <div
                    style={{ width: `${awayPercent}%` }}
                    className="bg-indigo-600 text-[9px] font-black text-white flex items-center justify-center transition-all duration-500"
                    title={`${match.awayTeam}: ${awayPercent}%`}
                  >
                    {awayPercent > 12 && `${awayPercent}%`}
                  </div>
                </div>

                {/* Percentage Breakdown Stats */}
                <div className="flex items-center justify-between text-xs font-bold pt-1">
                  <div className="text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                    <span>{match.homeFlag} {match.homeTeam}:</span>
                    <span className="font-black text-sm">{homePercent}%</span>
                  </div>
                  <div className="text-amber-700 dark:text-amber-400 flex items-center gap-1">
                    <span>Draw:</span>
                    <span className="font-black text-sm">{drawPercent}%</span>
                  </div>
                  <div className="text-indigo-700 dark:text-indigo-400 flex items-center gap-1">
                    <span>{match.awayTeam} {match.awayFlag}:</span>
                    <span className="font-black text-sm">{awayPercent}%</span>
                  </div>
                </div>

                {/* Voting Choice Buttons */}
                <div className="pt-2 border-t border-amber-200/60 dark:border-amber-800/40 space-y-2">
                  <div className="text-[11px] font-bold text-slate-700 dark:text-amber-200 text-center">
                    {userChoice ? `You voted for: ${userChoice === 'home' ? match.homeTeam : userChoice === 'draw' ? 'Draw' : match.awayTeam}` : 'Cast your prediction vote now:'}
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => onCastVote(match.id, 'home')}
                      className={`p-2.5 rounded-xl font-extrabold text-xs flex flex-col items-center gap-1 border transition-all ${
                        userChoice === 'home'
                          ? 'bg-emerald-600 text-white border-emerald-500 ring-2 ring-emerald-400 shadow-md'
                          : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border-slate-200 dark:border-slate-700 hover:border-emerald-500'
                      }`}
                    >
                      <span className="text-base">{match.homeFlag}</span>
                      <span className="truncate w-full text-center">{match.homeTeam} Win</span>
                    </button>

                    <button
                      onClick={() => onCastVote(match.id, 'draw')}
                      className={`p-2.5 rounded-xl font-extrabold text-xs flex flex-col items-center gap-1 border transition-all ${
                        userChoice === 'draw'
                          ? 'bg-amber-500 text-slate-950 border-amber-400 ring-2 ring-amber-300 shadow-md'
                          : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border-slate-200 dark:border-slate-700 hover:border-amber-400'
                      }`}
                    >
                      <span className="text-base">🤝</span>
                      <span>Draw</span>
                    </button>

                    <button
                      onClick={() => onCastVote(match.id, 'away')}
                      className={`p-2.5 rounded-xl font-extrabold text-xs flex flex-col items-center gap-1 border transition-all ${
                        userChoice === 'away'
                          ? 'bg-indigo-600 text-white border-indigo-500 ring-2 ring-indigo-400 shadow-md'
                          : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border-slate-200 dark:border-slate-700 hover:border-indigo-500'
                      }`}
                    >
                      <span className="text-base">{match.awayFlag}</span>
                      <span className="truncate w-full text-center">{match.awayTeam} Win</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Key Match Insights & Player Watch */}
              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
                <div className="font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-emerald-600" /> Key Player Spotlight
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="p-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div className="font-bold text-emerald-700 dark:text-emerald-400">{match.homeFlag} {match.homeTeam} Star</div>
                    <div className="font-black text-slate-900 dark:text-white">{homeTeamObj?.keyPlayers[0] || 'Captain'}</div>
                  </div>
                  <div className="p-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div className="font-bold text-indigo-700 dark:text-indigo-400">{match.awayFlag} {match.awayTeam} Star</div>
                    <div className="font-black text-slate-900 dark:text-white">{awayTeamObj?.keyPlayers[0] || 'Captain'}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: 5 PREVIOUS HEAD-TO-HEAD MEETINGS */}
          {activeTab === 'h2h' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-extrabold text-slate-700 dark:text-emerald-300">
                <span>Head-to-Head History</span>
                <span className="text-[10px] text-amber-600 dark:text-amber-400">Last 5 Official Meetings</span>
              </div>

              <div className="space-y-2">
                {match.h2hMeetings?.map((h) => (
                  <div key={h.id} className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-400">
                      <span>{h.date} • {h.competition}</span>
                      <span className="capitalize font-black text-emerald-600 dark:text-emerald-400">
                        {h.result === 'draw' ? 'Draw' : `${h.result === 'home' ? h.homeTeam : h.awayTeam} Win`}
                      </span>
                    </div>

                    <div className="flex items-center justify-between font-extrabold text-slate-900 dark:text-white">
                      <div className="flex items-center gap-1.5">
                        <span>{h.homeFlag}</span>
                        <span>{h.homeTeam}</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-lg bg-amber-400 text-slate-950 font-black">
                        {h.score}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span>{h.awayTeam}</span>
                        <span>{h.awayFlag}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: 5 PREVIOUS GAMES RECENT FORM */}
          {activeTab === 'form' && (
            <div className="space-y-4">
              {/* Home Team Form */}
              <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="flex items-center justify-between text-xs font-extrabold text-slate-900 dark:text-white">
                  <span className="flex items-center gap-1.5">
                    <span>{match.homeFlag}</span> {match.homeTeam} (Last 5 Games)
                  </span>
                  <button 
                    onClick={() => onSelectTeamByName(match.homeTeam)}
                    className="text-[10px] text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    View Full Team
                  </button>
                </div>

                <div className="space-y-1.5">
                  {match.recentFormHome?.map((rf) => (
                    <div key={rf.id} className="flex items-center justify-between text-xs p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <span className="text-[10px] text-slate-400">{rf.date}</span>
                      <div className="flex items-center gap-1.5 font-extrabold">
                        <span>vs {rf.opponentFlag} {rf.opponent}</span>
                        <span className="text-slate-500 font-normal">({rf.score})</span>
                      </div>
                      <span
                        className={`w-6 h-6 rounded-lg font-black text-[10px] flex items-center justify-center ${
                          rf.result === 'W'
                            ? 'bg-emerald-500 text-white'
                            : rf.result === 'D'
                            ? 'bg-amber-500 text-slate-950'
                            : 'bg-rose-600 text-white'
                        }`}
                      >
                        {rf.result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Away Team Form */}
              <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="flex items-center justify-between text-xs font-extrabold text-slate-900 dark:text-white">
                  <span className="flex items-center gap-1.5">
                    <span>{match.awayFlag}</span> {match.awayTeam} (Last 5 Games)
                  </span>
                  <button 
                    onClick={() => onSelectTeamByName(match.awayTeam)}
                    className="text-[10px] text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    View Full Team
                  </button>
                </div>

                <div className="space-y-1.5">
                  {match.recentFormAway?.map((rf) => (
                    <div key={rf.id} className="flex items-center justify-between text-xs p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <span className="text-[10px] text-slate-400">{rf.date}</span>
                      <div className="flex items-center gap-1.5 font-extrabold">
                        <span>vs {rf.opponentFlag} {rf.opponent}</span>
                        <span className="text-slate-500 font-normal">({rf.score})</span>
                      </div>
                      <span
                        className={`w-6 h-6 rounded-lg font-black text-[10px] flex items-center justify-center ${
                          rf.result === 'W'
                            ? 'bg-emerald-500 text-white'
                            : rf.result === 'D'
                            ? 'bg-amber-500 text-slate-950'
                            : 'bg-rose-600 text-white'
                        }`}
                      >
                        {rf.result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
