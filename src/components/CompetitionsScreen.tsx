import React from 'react';
import { Trophy, Globe2, CalendarDays, Users, ChevronRight } from 'lucide-react';
import { COMPETITIONS, CompetitionSummary } from '../data/competitions';

interface CompetitionsScreenProps {
  onSelectTab: (tab: any) => void;
}

const statusLabel: Record<CompetitionSummary['status'], string> = {
  active: 'Active',
  upcoming: 'Upcoming',
  completed: 'Completed'
};

export const CompetitionsScreen: React.FC<CompetitionsScreenProps> = ({ onSelectTab }) => {
  return (
    <div className="space-y-5 pb-28">
      <section className="rounded-3xl bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.13),transparent_45%),linear-gradient(135deg,#141923,#07090d_70%,#030406)] p-5 text-white shadow-xl border border-white/10">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2.5 rounded-2xl bg-amber-400 text-slate-950">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-amber-300 font-bold">SportsLab Africa</p>
            <h1 className="text-2xl font-black">Competitions</h1>
          </div>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed">
          Explore competitions across world sports. Verified scores, standings, fixtures and detailed match data depend on the production data connection.
        </p>
      </section>

      <div className="grid grid-cols-2 gap-3">
        <button onClick={() => onSelectTab('matches')} className="rounded-2xl bg-[#0b0e14] border border-white/10 p-4 text-left shadow-sm">
          <CalendarDays className="w-5 h-5 text-amber-500 mb-2" />
          <p className="font-bold">Fixtures</p>
          <p className="text-xs text-slate-400 mt-1">Upcoming & results</p>
        </button>
        <button onClick={() => onSelectTab('teams')} className="rounded-2xl bg-[#0b0e14] border border-white/10 p-4 text-left shadow-sm">
          <Users className="w-5 h-5 text-emerald-500 mb-2" />
          <p className="font-bold">Teams</p>
          <p className="text-xs text-slate-500 mt-1">National & club teams</p>
        </button>
      </div>

      <div className="space-y-3">
        {COMPETITIONS.map((competition) => (
          <article key={competition.id} className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div className="flex gap-3 min-w-0">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center">
                  <Globe2 className="w-5 h-5 text-emerald-700 dark:text-emerald-300" />
                </div>
                <div className="min-w-0">
                  <h2 className="font-bold truncate">{competition.name}</h2>
                  <p className="text-xs text-slate-500 mt-0.5">{competition.region} • {competition.season}</p>
                </div>
              </div>
              <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full ${competition.status === 'active' ? 'bg-emerald-100 text-emerald-700' : competition.status === 'upcoming' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-600'}`}>
                {statusLabel[competition.status]}
              </span>
            </div>
            <p className="text-sm text-slate-400 mt-3 leading-relaxed">{competition.description}</p>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
              <span className="text-slate-500">{competition.format}</span>
              <span className="flex items-center gap-1 font-semibold text-emerald-700 dark:text-emerald-300">{competition.teamsCount} teams <ChevronRight className="w-3.5 h-3.5" /></span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
