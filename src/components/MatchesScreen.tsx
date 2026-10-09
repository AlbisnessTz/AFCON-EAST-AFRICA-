import React, { useState } from 'react';
import { Match, Team, UserProfile } from '../types';
import { Calendar, MapPin, Bookmark, BookmarkCheck, Vote, ChevronRight, Radio, AlertCircle, Clock3 } from 'lucide-react';
import type { LiveMatch } from '../services/sportsDataEngine';

interface MatchesScreenProps {
  matches: Match[];
  liveFootballMatches: LiveMatch[];
  liveFootballFeedState: 'loading' | 'available' | 'empty' | 'unavailable';
  liveFootballFeedMessage: string;
  liveFootballFeedFetchedAt?: string;
  teams: Team[];
  userProfile: UserProfile;
  selectedGroup: string;
  onSelectGroup: (group: string) => void;
  savedMatches: string[];
  onToggleSaveMatch: (matchId: string) => void;
  selectedMatch: Match | null;
  onSelectMatch: (match: Match | null) => void;
  onSelectTeamByName: (teamName: string) => void;
  onCastVote: (matchId: string, choice: 'home' | 'draw' | 'away') => void;
}

const GROUPS = ['All', 'Group A', 'Group B', 'Group C', 'Group D', 'Group E'];

export const MatchesScreen: React.FC<MatchesScreenProps> = ({
  matches,
  liveFootballMatches,
  liveFootballFeedState,
  liveFootballFeedMessage,
  liveFootballFeedFetchedAt,
  teams,
  userProfile,
  selectedGroup,
  onSelectGroup,
  savedMatches,
  onToggleSaveMatch,
  selectedMatch,
  onSelectMatch,
  onSelectTeamByName,
  onCastVote
}) => {
  const [activeTabStatus, setActiveTabStatus] = useState<'all' | 'live' | 'upcoming' | 'finished'>('all');

  const filteredByStatus = matches.filter((m) => {
    if (activeTabStatus === 'live') return m.status === 'live';
    if (activeTabStatus === 'upcoming') return m.status === 'upcoming';
    if (activeTabStatus === 'finished') return m.status === 'finished';
    return true;
  });

  return (
    <div className="space-y-4 pb-24 animate-fadeIn">
      {/* Title */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Calendar className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /> Sports Matches & Results
          </h2>
          <p className="text-xs text-slate-500 dark:text-emerald-300/80">
            Verified provider feed is shown separately from preview fixtures below.
          </p>
        </div>
      </div>

      {/* Verified provider feed is kept separate from sample fixtures and polls. */}
      <section className="rounded-2xl border border-emerald-500/30 bg-slate-900 p-3 text-white space-y-3" aria-live="polite">
        <div className="flex items-center justify-between gap-2">
          <h3 className="flex items-center gap-2 text-sm font-black">
            <Radio className="h-4 w-4 text-emerald-400" />
            Verified live football feed
          </h3>
          <span className={`rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-wide ${
            liveFootballFeedState === 'available' ? 'bg-emerald-500/20 text-emerald-300' :
            liveFootballFeedState === 'empty' ? 'bg-slate-700 text-slate-300' :
            'bg-amber-500/15 text-amber-200'
          }`}>
            {liveFootballFeedState === 'available' ? 'Provider data' :
             liveFootballFeedState === 'loading' ? 'Checking' :
             liveFootballFeedState === 'empty' ? 'No live fixtures' : 'Unavailable'}
          </span>
        </div>
        <p className="text-xs leading-relaxed text-slate-300">{liveFootballFeedMessage}</p>
        {liveFootballFeedState === 'available' && (
          <div className="space-y-2">
            {liveFootballMatches.map((match) => (
              <div key={match.id} className="rounded-xl border border-slate-700 bg-slate-800/80 p-3">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="truncate text-[11px] font-semibold text-slate-300">{match.competition.name}{match.competition.country ? ` · ${match.competition.country}` : ''}</p>
                    <p className="mt-0.5 text-[10px] text-slate-400">{match.state === 'live' ? 'LIVE' : match.state === 'halftime' ? 'HALF-TIME' : match.state.toUpperCase()}</p>
                  </div>
                  {match.state === 'live' && <span className="flex shrink-0 items-center gap-1 text-[10px] font-black text-red-300"><span className="h-1.5 w-1.5 rounded-full bg-red-400" /> LIVE</span>}
                </div>
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                  <span className="truncate text-xs font-bold">{match.home.name}</span>
                  <span className="rounded-lg bg-slate-950 px-3 py-1 text-base font-black tabular-nums">
                    {match.homeScore ?? '–'} : {match.awayScore ?? '–'}
                  </span>
                  <span className="truncate text-right text-xs font-bold">{match.away.name}</span>
                </div>
                <p className="mt-2 flex items-center gap-1 text-[10px] text-slate-400">
                  <Clock3 className="h-3 w-3" />
                  {new Date(match.startTime).toLocaleString()}
                  {match.source?.provider ? ` · ${match.source.provider}` : ''}
                </p>
              </div>
            ))}
          </div>
        )}
        {liveFootballFeedFetchedAt && (
          <p className="text-[10px] text-slate-400">Retrieved: {new Date(liveFootballFeedFetchedAt).toLocaleString()}</p>
        )}
        {liveFootballFeedState === 'unavailable' && (
          <p className="flex items-start gap-1.5 text-[10px] text-amber-200/90"><AlertCircle className="mt-0.5 h-3 w-3 shrink-0" /> Sample fixtures below are not live provider data.</p>
        )}
      </section>

      {/* Match Status Tabs */}
      <div className="grid grid-cols-4 gap-1.5 p-1 bg-slate-100 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-emerald-800/60">
        {(['all', 'live', 'upcoming', 'finished'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTabStatus(tab)}
            className={`py-1.5 text-xs font-bold rounded-xl capitalize transition-all ${
              activeTabStatus === tab
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'text-slate-600 dark:text-emerald-300/80 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {tab === 'live' ? '🔴 Live' : tab}
          </button>
        ))}
      </div>

      {/* Group Pills Horizontal Slider */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {GROUPS.map((grp) => (
          <button
            key={grp}
            onClick={() => onSelectGroup(grp)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              selectedGroup === grp
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-emerald-800 text-slate-700 dark:text-emerald-200 hover:border-amber-400'
            }`}
          >
            {grp}
          </button>
        ))}
      </div>

      {/* Fixtures List */}
      <div className="space-y-3">
        {filteredByStatus.length === 0 ? (
          <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-emerald-800 text-slate-500 dark:text-emerald-400">
            No matches found for the selected filter.
          </div>
        ) : (
          filteredByStatus.map((m) => {
            const isSaved = savedMatches.includes(m.id);
            const poll = m.poll || { homeVotes: 100, drawVotes: 40, awayVotes: 70 };
            const total = poll.homeVotes + poll.drawVotes + poll.awayVotes;
            const homePct = total > 0 ? Math.round((poll.homeVotes / total) * 100) : 33;
            const drawPct = total > 0 ? Math.round((poll.drawVotes / total) * 100) : 33;
            const awayPct = total > 0 ? 100 - (homePct + drawPct) : 34;

            return (
              <div
                key={m.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-emerald-800/80 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all space-y-3 relative"
              >
                {/* Header info */}
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    {m.group}
                  </span>
                  <div className="flex items-center gap-2">
                    {m.status === 'live' && (
                      <span className="text-red-600 font-extrabold text-[11px] animate-pulse flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-red-600" /> LIVE
                      </span>
                    )}
                    {m.status === 'upcoming' && (
                      <span className="text-slate-500 dark:text-emerald-400 text-[11px]">
                        {m.date} • {m.time}
                      </span>
                    )}
                    {m.status === 'finished' && (
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[11px]">
                        FT
                      </span>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSaveMatch(m.id);
                      }}
                      className="p-1 text-slate-400 hover:text-amber-500 transition-colors"
                      title={isSaved ? 'Remove Bookmark' : 'Bookmark Match'}
                    >
                      {isSaved ? (
                        <BookmarkCheck className="w-4 h-4 text-amber-500" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Match Teams & Score */}
                <div 
                  onClick={() => onSelectMatch(m)}
                  className="flex items-center justify-between py-1 cursor-pointer hover:opacity-95 group"
                >
                  <div 
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectTeamByName(m.homeTeam);
                    }}
                    className="flex items-center gap-2 w-5/12 hover:text-amber-500 transition-colors"
                    title="Click to view team details"
                  >
                    <span className="text-2xl group-hover:scale-105 transition-transform">{m.homeFlag}</span>
                    <span className="font-extrabold text-sm text-slate-900 dark:text-white truncate">
                      {m.homeTeam}
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center w-2/12">
                    {m.status === 'upcoming' ? (
                      <span className="text-xs font-bold text-slate-400 px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
                        VS
                      </span>
                    ) : (
                      <span className="text-lg font-black text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-0.5 rounded-lg border border-amber-200 dark:border-amber-800">
                        {m.homeScore} - {m.awayScore}
                      </span>
                    )}
                  </div>

                  <div 
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectTeamByName(m.awayTeam);
                    }}
                    className="flex items-center gap-2 w-5/12 justify-end text-right hover:text-amber-500 transition-colors"
                    title="Click to view team details"
                  >
                    <span className="font-extrabold text-sm text-slate-900 dark:text-white truncate">
                      {m.awayTeam}
                    </span>
                    <span className="text-2xl group-hover:scale-105 transition-transform">{m.awayFlag}</span>
                  </div>
                </div>

                {/* Fan Prediction Poll Bar replacing odds */}
                <div 
                  onClick={() => onSelectMatch(m)}
                  className="p-2.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700/80 cursor-pointer space-y-1.5 hover:border-amber-400 transition-all"
                >
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 dark:text-emerald-300">
                    <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                      <Vote className="w-3 h-3" /> Fan Prediction Poll
                    </span>
                    <span>{homePct}% | {drawPct}% | {awayPct}%</span>
                  </div>

                  <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden flex">
                    <div style={{ width: `${homePct}%` }} className="bg-emerald-600 h-full" />
                    <div style={{ width: `${drawPct}%` }} className="bg-amber-500 h-full" />
                    <div style={{ width: `${awayPct}%` }} className="bg-indigo-600 h-full" />
                  </div>
                </div>

                {/* Stadium location and H2H link */}
                <div 
                  onClick={() => onSelectMatch(m)}
                  className="flex items-center justify-between text-[11px] text-slate-500 dark:text-emerald-300/80 pt-1 cursor-pointer"
                >
                  <span className="flex items-center gap-1 truncate max-w-[220px]">
                    <MapPin className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    {m.stadium ? `${m.stadium}, ${m.city}` : m.city}
                  </span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold flex items-center gap-0.5">
                    Match Details & H2H <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
