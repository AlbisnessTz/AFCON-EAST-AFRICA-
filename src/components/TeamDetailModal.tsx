import React, { useState } from 'react';
import { X, Trophy, Users, Shield, Award, Calendar, CheckCircle, ArrowRight, Activity, MapPin } from 'lucide-react';
import { Team, Match } from '../types';

interface TeamDetailModalProps {
  team: Team;
  allMatches: Match[];
  onClose: () => void;
  onSelectMatch: (match: Match) => void;
}

export const TeamDetailModal: React.FC<TeamDetailModalProps> = ({
  team,
  allMatches,
  onClose,
  onSelectMatch
}) => {
  const [activeTab, setActiveTab] = useState<'squad' | 'formation' | 'stats' | 'matches'>('squad');

  // Filter matches involving this team
  const teamMatches = allMatches.filter(
    (m) => m.homeTeam.toLowerCase() === team.name.toLowerCase() || m.awayTeam.toLowerCase() === team.name.toLowerCase()
  );

  // Group squad by position
  const gks = team.squad?.filter((p) => p.position === 'GK') || [];
  const defs = team.squad?.filter((p) => p.position === 'DEF') || [];
  const mids = team.squad?.filter((p) => p.position === 'MID') || [];
  const fwds = team.squad?.filter((p) => p.position === 'FWD') || [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg max-h-[92vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-slate-200 dark:border-emerald-800/80"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner Header */}
        <div className="relative h-40 bg-gradient-to-r from-emerald-900 via-green-800 to-emerald-950 overflow-hidden shrink-0">
          <img
            src={team.bannerImage}
            alt={team.name}
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-all z-20"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Team Info Header */}
          <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
            <div className="flex items-center gap-3">
              <span className="text-4xl shadow-sm">{team.flag}</span>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded-md bg-amber-400 text-slate-950 font-extrabold text-[10px] uppercase">
                    {team.group}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-300">
                    FIFA Rank: #{team.fifaRank}
                  </span>
                </div>
                <h2 className="text-2xl font-black text-white tracking-tight leading-none mt-1">
                  {team.name}
                </h2>
                <p className="text-xs text-slate-300 mt-0.5 font-medium">
                  Head Coach: <span className="font-bold text-white">{team.coach}</span>
                </p>
              </div>
            </div>

            <div className="text-right shrink-0">
              <div className="flex items-center justify-end gap-1 text-amber-400 font-extrabold text-xs">
                <Trophy className="w-3.5 h-3.5" /> {team.trophiesCount} AFCON Titles
              </div>
              <div className="text-[10px] text-emerald-300 font-medium">
                Captain: {team.captain}
              </div>
            </div>
          </div>
        </div>

        {/* Sub-navigation Tabs */}
        <div className="flex items-center justify-around bg-slate-100 dark:bg-slate-950/80 px-2 py-2 border-b border-slate-200 dark:border-slate-800 text-xs font-bold shrink-0">
          <button
            onClick={() => setActiveTab('squad')}
            className={`flex-1 py-1.5 px-2 rounded-xl text-center transition-all ${
              activeTab === 'squad'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-600 dark:text-emerald-300/80 hover:bg-slate-200 dark:hover:bg-slate-900'
            }`}
          >
            Squad ({team.squad?.length || 0})
          </button>
          <button
            onClick={() => setActiveTab('formation')}
            className={`flex-1 py-1.5 px-2 rounded-xl text-center transition-all ${
              activeTab === 'formation'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-600 dark:text-emerald-300/80 hover:bg-slate-200 dark:hover:bg-slate-900'
            }`}
          >
            Tactics ({team.formation})
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`flex-1 py-1.5 px-2 rounded-xl text-center transition-all ${
              activeTab === 'stats'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-600 dark:text-emerald-300/80 hover:bg-slate-200 dark:hover:bg-slate-900'
            }`}
          >
            Stats & Form
          </button>
          <button
            onClick={() => setActiveTab('matches')}
            className={`flex-1 py-1.5 px-2 rounded-xl text-center transition-all ${
              activeTab === 'matches'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-600 dark:text-emerald-300/80 hover:bg-slate-200 dark:hover:bg-slate-900'
            }`}
          >
            Fixtures ({teamMatches.length})
          </button>
        </div>

        {/* Modal Scrollable Content Viewport */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-slate-800 dark:text-slate-100">

          {/* TAB 1: SQUAD LIST */}
          {activeTab === 'squad' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500 dark:text-emerald-300/80">
                {team.shortDescription}
              </p>

              {/* Goalkeepers */}
              <div className="space-y-2">
                <h3 className="text-xs font-black uppercase text-amber-600 dark:text-amber-400 tracking-wider flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" /> Goalkeepers ({gks.length})
                </h3>
                <div className="grid grid-cols-1 gap-1.5">
                  {gks.map((p) => (
                    <div key={p.number} className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-amber-400 text-slate-950 font-black text-center flex items-center justify-center text-[11px]">
                          {p.number}
                        </span>
                        <div>
                          <div className="font-extrabold">{p.name}</div>
                          <div className="text-[10px] text-slate-400">{p.club}</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                        GK
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Defenders */}
              <div className="space-y-2">
                <h3 className="text-xs font-black uppercase text-blue-600 dark:text-blue-400 tracking-wider flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" /> Defenders ({defs.length})
                </h3>
                <div className="grid grid-cols-1 gap-1.5">
                  {defs.map((p) => (
                    <div key={p.number} className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-blue-600 text-white font-black text-center flex items-center justify-center text-[11px]">
                          {p.number}
                        </span>
                        <div>
                          <div className="font-extrabold">{p.name}</div>
                          <div className="text-[10px] text-slate-400">{p.club}</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300">
                        DEF
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Midfielders */}
              <div className="space-y-2">
                <h3 className="text-xs font-black uppercase text-emerald-600 dark:text-emerald-400 tracking-wider flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" /> Midfielders ({mids.length})
                </h3>
                <div className="grid grid-cols-1 gap-1.5">
                  {mids.map((p) => (
                    <div key={p.number} className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white font-black text-center flex items-center justify-center text-[11px]">
                          {p.number}
                        </span>
                        <div>
                          <div className="font-extrabold">{p.name}</div>
                          <div className="text-[10px] text-slate-400">{p.club}</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                        MID
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Forwards */}
              <div className="space-y-2">
                <h3 className="text-xs font-black uppercase text-rose-600 dark:text-rose-400 tracking-wider flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" /> Forwards ({fwds.length})
                </h3>
                <div className="grid grid-cols-1 gap-1.5">
                  {fwds.map((p) => (
                    <div key={p.number} className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-rose-600 text-white font-black text-center flex items-center justify-center text-[11px]">
                          {p.number}
                        </span>
                        <div>
                          <div className="font-extrabold">{p.name}</div>
                          <div className="text-[10px] text-slate-400">{p.club}</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300">
                        FWD
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TACTICAL FORMATION PITCH */}
          {activeTab === 'formation' && (
            <div className="space-y-3">
              <div className="text-center">
                <div className="text-xs font-bold text-slate-500 dark:text-emerald-300/80">Preferred Tactical Structure</div>
                <div className="text-lg font-black text-emerald-700 dark:text-amber-400">{team.formation} System</div>
              </div>

              {/* Visual Soccer Pitch Representation */}
              <div className="relative w-full aspect-[4/3] bg-emerald-800 rounded-2xl border-2 border-emerald-600 p-3 overflow-hidden flex flex-col justify-between shadow-inner">
                {/* Field Markings */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-white/30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-white/30" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-12 border-b border-x border-white/30 rounded-b-xl" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-12 border-t border-x border-white/30 rounded-t-xl" />

                {/* Forwards Row */}
                <div className="flex justify-around items-center z-10 pt-2">
                  {fwds.slice(0, 3).map((f) => (
                    <div key={f.number} className="flex flex-col items-center">
                      <div className="w-7 h-7 rounded-full bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center border-2 border-white shadow-md">
                        {f.number}
                      </div>
                      <span className="text-[9px] font-extrabold text-white bg-slate-900/80 px-1 rounded mt-0.5 truncate max-w-[70px]">
                        {f.name.split(' ')[0]}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Midfielders Row */}
                <div className="flex justify-around items-center z-10">
                  {mids.slice(0, 3).map((m) => (
                    <div key={m.number} className="flex flex-col items-center">
                      <div className="w-7 h-7 rounded-full bg-emerald-400 text-slate-950 font-black text-xs flex items-center justify-center border-2 border-white shadow-md">
                        {m.number}
                      </div>
                      <span className="text-[9px] font-extrabold text-white bg-slate-900/80 px-1 rounded mt-0.5 truncate max-w-[70px]">
                        {m.name.split(' ')[0]}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Defenders Row */}
                <div className="flex justify-around items-center z-10">
                  {defs.slice(0, 4).map((d) => (
                    <div key={d.number} className="flex flex-col items-center">
                      <div className="w-7 h-7 rounded-full bg-blue-400 text-slate-950 font-black text-xs flex items-center justify-center border-2 border-white shadow-md">
                        {d.number}
                      </div>
                      <span className="text-[9px] font-extrabold text-white bg-slate-900/80 px-1 rounded mt-0.5 truncate max-w-[70px]">
                        {d.name.split(' ')[0]}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Goalkeeper */}
                <div className="flex justify-center items-center z-10 pb-1">
                  {gks.slice(0, 1).map((gk) => (
                    <div key={gk.number} className="flex flex-col items-center">
                      <div className="w-7 h-7 rounded-full bg-rose-500 text-white font-black text-xs flex items-center justify-center border-2 border-white shadow-md">
                        {gk.number}
                      </div>
                      <span className="text-[9px] font-extrabold text-white bg-slate-900/80 px-1 rounded mt-0.5">
                        {gk.name.split(' ')[0]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Tactical Strengths */}
              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                <div className="font-extrabold text-emerald-700 dark:text-emerald-300">
                  Tactical Focus & Key Playmakers:
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-300">
                  Focuses on quick transition play through key playmakers: <span className="font-bold text-slate-900 dark:text-white">{team.keyPlayers.join(', ')}</span>. High pressure pressing in mid-block with explosive wing overlap.
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: STATS & FORM */}
          {activeTab === 'stats' && (
            <div className="space-y-4">
              {/* Recent Form Badge Row */}
              <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="text-xs font-bold text-slate-600 dark:text-emerald-300">
                  Last 5 Tournament Results:
                </div>
                <div className="flex items-center gap-2">
                  {team.recentForm?.map((res, i) => (
                    <span
                      key={i}
                      className={`w-8 h-8 rounded-xl font-black text-xs flex items-center justify-center shadow ${
                        res === 'W'
                          ? 'bg-emerald-500 text-white'
                          : res === 'D'
                          ? 'bg-amber-500 text-slate-950'
                          : 'bg-rose-600 text-white'
                      }`}
                    >
                      {res}
                    </span>
                  ))}
                </div>
              </div>

              {/* Group Standings Summary Card */}
              <div className="p-4 bg-emerald-950 text-white rounded-2xl space-y-3 border border-emerald-800">
                <div className="flex items-center justify-between border-b border-emerald-800 pb-2">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    {team.group} Record
                  </span>
                  <span className="text-xs font-black text-emerald-300">
                    {team.stats?.points || 0} Points
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center text-xs">
                  <div className="bg-emerald-900/80 p-2 rounded-xl">
                    <div className="text-[10px] text-emerald-300 font-bold">Played</div>
                    <div className="text-base font-black">{team.stats?.played || 0}</div>
                  </div>
                  <div className="bg-emerald-900/80 p-2 rounded-xl">
                    <div className="text-[10px] text-emerald-300 font-bold">Won</div>
                    <div className="text-base font-black text-amber-400">{team.stats?.won || 0}</div>
                  </div>
                  <div className="bg-emerald-900/80 p-2 rounded-xl">
                    <div className="text-[10px] text-emerald-300 font-bold">Drawn</div>
                    <div className="text-base font-black">{team.stats?.drawn || 0}</div>
                  </div>
                  <div className="bg-emerald-900/80 p-2 rounded-xl">
                    <div className="text-[10px] text-emerald-300 font-bold">Lost</div>
                    <div className="text-base font-black text-rose-400">{team.stats?.lost || 0}</div>
                  </div>
                </div>

                <div className="flex justify-between text-xs pt-1 text-emerald-200">
                  <span>Goals For: <strong>{team.stats?.goalsFor || 0}</strong></span>
                  <span>Goals Against: <strong>{team.stats?.goalsAgainst || 0}</strong></span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SCHEDULED FIXTURES */}
          {activeTab === 'matches' && (
            <div className="space-y-2">
              {teamMatches.length === 0 ? (
                <p className="text-xs text-slate-500 text-center py-6">No matches scheduled currently.</p>
              ) : (
                teamMatches.map((m) => (
                  <div
                    key={m.id}
                    onClick={() => {
                      onClose();
                      onSelectMatch(m);
                    }}
                    className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-amber-400 cursor-pointer transition-all space-y-2 group"
                  >
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 dark:text-emerald-300">
                      <span>{m.group} • {m.city}</span>
                      <span className="text-amber-600 dark:text-amber-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        Details <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{m.homeFlag}</span>
                        <span className={`text-xs font-extrabold ${m.homeTeam === team.name ? 'text-amber-600 dark:text-amber-400' : ''}`}>
                          {m.homeTeam}
                        </span>
                      </div>

                      {m.status === 'live' || m.status === 'finished' ? (
                        <span className="text-sm font-black text-amber-500 bg-amber-50 dark:bg-amber-950 px-2 py-0.5 rounded-lg border border-amber-200 dark:border-amber-800">
                          {m.homeScore} - {m.awayScore}
                        </span>
                      ) : (
                        <span className="text-[11px] font-bold text-slate-400">VS</span>
                      )}

                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-extrabold ${m.awayTeam === team.name ? 'text-amber-600 dark:text-amber-400' : ''}`}>
                          {m.awayTeam}
                        </span>
                        <span className="text-xl">{m.awayFlag}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
