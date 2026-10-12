import React from 'react';
import { Stadium } from '../types';
import { Building2, MapPin, Users, Calendar, Sparkles } from 'lucide-react';

interface StadiumsScreenProps {
  stadiums: Stadium[];
  onSelectStadium: (stadium: Stadium | null) => void;
}

export const StadiumsScreen: React.FC<StadiumsScreenProps> = ({ stadiums, onSelectStadium }) => {
  return (
    <div className="space-y-4 pb-24 animate-fadeIn">
      <div>
        <h2 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
          <Building2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /> Stadiums & Arenas
        </h2>
        <p className="text-xs text-slate-500 dark:text-emerald-300/80">
          Explore sports venues, host cities and arena history. Current listings are an early regional preview.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {stadiums.map((stadium) => (
          <div
            key={stadium.id}
            onClick={() => onSelectStadium(stadium)}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-emerald-800/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all space-y-3 cursor-pointer group"
          >
            <div className="relative h-44 bg-slate-800">
              <img
                src={stadium.image}
                alt={stadium.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3">
                <div className="text-white">
                  <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Host City: {stadium.city}
                  </span>
                  <h3 className="text-base font-black leading-tight">{stadium.name}</h3>
                </div>
              </div>
            </div>

            <div className="p-4 space-y-3">
              <p className="text-xs text-slate-600 dark:text-emerald-200/90 leading-relaxed">
                {stadium.description}
              </p>

              <div className="grid grid-cols-3 gap-2 text-center text-xs bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-700">
                <div>
                  <span className="text-[10px] text-slate-400 flex items-center justify-center gap-0.5">
                    <Users className="w-3 h-3 text-emerald-500" /> Capacity
                  </span>
                  <span className="font-extrabold text-slate-800 dark:text-white">
                    {stadium.capacity.toLocaleString()}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 flex items-center justify-center gap-0.5">
                    <Calendar className="w-3 h-3 text-amber-500" /> Opened
                  </span>
                  <span className="font-extrabold text-slate-800 dark:text-white">
                    {stadium.openedYear}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 flex items-center justify-center gap-0.5">
                    ⚽ Matches
                  </span>
                  <span className="font-extrabold text-amber-600 dark:text-amber-400">
                    {stadium.scheduledMatches} Games
                  </span>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 dark:text-emerald-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" /> {stadium.locationAddress}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
