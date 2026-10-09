import React, { useState } from 'react';
import { 
  Trophy, 
  MapPin, 
  Moon, 
  Sun, 
  Download, 
  Search, 
  X,
  ChevronDown
} from 'lucide-react';
import { TabType } from '../types';

interface HeaderBarProps {
  selectedCity: string;
  onSelectCity: (city: string) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
  onOpenApkModal: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const CITIES = ['All Cities', 'Dar es Salaam', 'Nairobi', 'Kampala', 'Zanzibar', 'Eldoret'];

export const HeaderBar: React.FC<HeaderBarProps> = ({
  selectedCity,
  onSelectCity,
  darkMode,
  onToggleDarkMode,
  activeTab,
  onSelectTab,
  onOpenApkModal,
  searchQuery,
  onSearchChange
}) => {
  const [showCityMenu, setShowCityMenu] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#050609]/90 backdrop-blur-2xl border-b border-white/10 text-white shadow-[0_8px_32px_rgba(0,0,0,0.38)] transition-colors">
      <div className="max-w-md mx-auto px-4 py-2.5 flex items-center justify-between gap-2">
        {/* Logo & Title */}
        <div 
          onClick={() => onSelectTab('home')}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-300 via-cyan-500 to-emerald-400 p-[1.5px] shadow-[0_0_22px_rgba(56,189,248,0.22)] group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#050609] rounded-[10px] flex items-center justify-center">
              <Trophy className="w-5 h-5 text-amber-400" />
            </div>
          </div>
          <div>
            <span className="font-extrabold text-base tracking-tight bg-gradient-to-r from-white via-sky-100 to-cyan-300 bg-clip-text text-transparent block leading-none">
              SportsLab Africa
            </span>
            <span className="text-[10px] text-slate-400 font-medium tracking-[0.12em] uppercase">
              Global Sports Platform
            </span>
          </div>
        </div>

        {/* City Picker Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowCityMenu(!showCityMenu)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/[0.045] hover:bg-white/[0.09] border border-white/10 text-xs font-semibold text-slate-200 transition-all"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span className="truncate max-w-[80px]">{selectedCity}</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>

          {showCityMenu && (
            <div className="absolute right-0 mt-1 w-40 bg-[#090c12] border border-white/10 rounded-xl shadow-xl py-1 z-50">
              <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-sky-300">
                Select Host City
              </div>
              {CITIES.map((city) => (
                <button
                  key={city}
                  onClick={() => {
                    onSelectCity(city);
                    setShowCityMenu(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 text-xs font-medium flex items-center justify-between hover:bg-white/[0.06] transition-colors ${
                    selectedCity === city ? 'text-sky-300 font-bold bg-sky-400/10' : 'text-slate-200'
                  }`}
                >
                  {city}
                  {selectedCity === city && <span className="text-amber-400">✓</span>}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1">
          {/* Search Toggle */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.07] transition-colors"
            title="Search"
          >
            {isSearchOpen ? <X className="w-4 h-4" /> : <Search className="w-4 h-4" />}
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleDarkMode}
            className="p-1.5 rounded-lg text-emerald-200 hover:text-amber-300 hover:bg-emerald-800/60 transition-colors"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* APK Build Download Info */}
          <button
            onClick={onOpenApkModal}
            className="p-1.5 rounded-lg text-sky-300 hover:bg-sky-400/10 transition-colors relative"
            title="Download APK / Install Info"
          >
            <Download className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full animate-ping" />
          </button>
        </div>
      </div>

      {/* Expandable Search Input Bar */}
      {isSearchOpen && (
        <div className="px-4 pb-2.5 max-w-md mx-auto">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-emerald-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search teams, fixtures, hotels, news..."
              className="w-full bg-[#080b11] text-slate-100 placeholder-slate-500 text-xs rounded-xl pl-9 pr-8 py-2.5 border border-white/10 focus:outline-none focus:border-sky-400/70"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-2 text-emerald-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
