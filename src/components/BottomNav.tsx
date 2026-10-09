import React from 'react';
import { Home, Calendar, Trophy, Shield, Compass, Newspaper, User, Settings, Building2, Landmark } from 'lucide-react';
import { TabType } from '../types';

interface BottomNavProps { activeTab: TabType; onSelectTab: (tab: TabType) => void; }

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onSelectTab }) => {
  const mainNavItems = [
    { id: 'home' as TabType, label: 'Home', icon: Home },
    { id: 'matches' as TabType, label: 'Matches', icon: Calendar },
    { id: 'competitions' as TabType, label: 'Competitions', icon: Trophy },
    { id: 'teams' as TabType, label: 'Teams', icon: Shield },
    { id: 'news' as TabType, label: 'News', icon: Newspaper },
  ];
  const secondaryNavItems = [
    { id: 'travel' as TabType, label: 'Travel', icon: Compass },
    { id: 'stadiums' as TabType, label: 'Stadiums', icon: Building2 },
    { id: 'history' as TabType, label: 'History', icon: Landmark },
    { id: 'profile' as TabType, label: 'Profile', icon: User },
    { id: 'settings' as TabType, label: 'Settings', icon: Settings },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#050609]/95 backdrop-blur-2xl border-t border-white/10 text-white select-none shadow-[0_-12px_36px_rgba(0,0,0,0.45)]">
      <div className="max-w-md mx-auto px-2 py-1.5 flex items-center justify-between">
        {mainNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return <button key={item.id} onClick={() => onSelectTab(item.id)} className={`flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all ${isActive ? 'text-sky-300 font-bold bg-sky-400/[0.09] scale-105 shadow-inner' : 'text-slate-500 hover:text-slate-100 hover:bg-white/[0.04]'}`}><Icon className={`w-5 h-5 ${isActive ? 'text-sky-300' : ''}`} /><span className="text-[10px] tracking-tight mt-0.5">{item.label}</span></button>;
        })}
      </div>
      <div className="max-w-md mx-auto px-4 py-1 bg-black/40 border-t border-white/[0.06] flex items-center justify-around text-[10px] text-slate-500">
        {secondaryNavItems.map((item) => { const Icon = item.icon; const isActive = activeTab === item.id; return <button key={item.id} onClick={() => onSelectTab(item.id)} className={`flex items-center gap-1 px-2 py-0.5 rounded-lg transition-colors ${isActive ? 'text-sky-300 font-bold bg-sky-400/[0.08]' : 'hover:text-white'}`}><Icon className="w-3 h-3" /><span>{item.label}</span></button>; })}
      </div>
    </nav>
  );
};
