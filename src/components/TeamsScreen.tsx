import React, { useState } from 'react';
import { Team } from '../types';
import { Shield, Trophy, UserCheck, Users } from 'lucide-react';

interface TeamsScreenProps {
  teams: Team[];
  selectedTeam: Team | null;
  onSelectTeam: (team: Team | null) => void;
}

const GROUPS = ['All', 'Group A', 'Group B', 'Group C', 'Group D'];

export const TeamsScreen: React.FC<TeamsScreenProps> = ({
  teams,
  selectedTeam,
  onSelectTeam
}) => {
  const [selectedGroup, setSelectedGroup] = useState('All');

  const filteredTeams = teams.filter(
    (t) => selectedGroup === 'All' || t.group === selectedGroup
  );

  return (
    <div className="space-y-4 pb-24 animate-fadeIn">
      <div>
        <h2 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
          <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /> AFCON Participating Nations
        </h2>
        <p className="text-xs text-slate-500 dark:text-emerald-300/80">
          Click any nation for full squad list, tactics, group stats & fixtures
        </p>
      </div>

      {/* Group Pills */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {GROUPS.map((grp) => (
          <button
            key={grp}
            onClick={() => setSelectedGroup(grp)}
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

      {/* Teams Grid */}
      <div className="grid grid-cols-2 gap-3">
        {filteredTeams.map((team) => (
          <div
            key={team.id}
            onClick={() => onSelectTeam(team)}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-emerald-800/80 rounded-2xl p-3 shadow-sm hover:shadow-md cursor-pointer transition-all space-y-2 flex flex-col justify-between group hover:border-amber-400"
          >
            <div className="flex items-center justify-between">
              <span className="text-3xl group-hover:scale-110 transition-transform">{team.flag}</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                {team.group}
              </span>
            </div>

            <div>
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                {team.name}
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-emerald-300/80 flex items-center gap-1 mt-0.5 truncate">
                <UserCheck className="w-3 h-3 text-amber-500 shrink-0" /> {team.coach}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px] text-slate-400 dark:text-emerald-400">
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3 text-emerald-500" /> {team.squad?.length || 23} Squad
              </span>
              <span className="text-amber-500 font-bold flex items-center gap-0.5">
                <Trophy className="w-3 h-3" /> {team.trophiesCount}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
