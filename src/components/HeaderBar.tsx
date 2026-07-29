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
    <header className="sticky top-0 z-40 bg-emerald-900/95 dark:bg-emerald-950/95 backdrop-blur-md border-b border-emerald-800/60 dark:border-emerald-900 text-white transition-colors">
      <div className="max-w-md mx-auto px-4 py-2.5 flex items-center justify-between gap-2">
        {/* Logo & Title */}
        <div 
          onClick={() => onSelectTab('home')}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-emerald-500 p-0.5 shadow-md group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-emerald-950 rounded-[10px] flex items-center justify-center">
              <Trophy className="w-5 h-5 text-amber-400" />
            </div>
          </div>
          <div>
            <span className="font-extrabold text-base tracking-tight bg-gradient-to-r from-white via-emerald-100 to-amber-200 bg-clip-text text-transparent block leading-none">
              KickOff Africa
            </span>
            <span className="text-[10px] text-emerald-300/80 font-medium tracking-wide">
              AFCON Companion
            </span>
          </div>
        </div>

        {/* City Picker Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowCityMenu(!showCityMenu)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-800/80 dark:bg-emerald-900/90 hover:bg-emerald-700/80 border border-emerald-700/60 text-xs font-semibold text-emerald-100 transition-all"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span className="truncate max-w-[80px]">{selectedCity}</span>
            <ChevronDown className="w-3 h-3 text-emerald-300" />
          </button>

          {showCityMenu && (
            <div className="absolute right-0 mt-1 w-40 bg-emerald-950 border border-emerald-800 rounded-xl shadow-xl py-1 z-50">
              <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                Select Host City
              </div>
              {CITIES.map((city) => (
                <button
                  key={city}
                  onClick={() => {
                    onSelectCity(city);
                    setShowCityMenu(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 text-xs font-medium flex items-center justify-between hover:bg-emerald-800/60 transition-colors ${
                    selectedCity === city ? 'text-amber-300 font-bold bg-emerald-900/80' : 'text-emerald-100'
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
            className="p-1.5 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-800/60 transition-colors"
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
            className="p-1.5 rounded-lg text-amber-300 hover:bg-amber-400/20 transition-colors relative"
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
              className="w-full bg-emerald-950/90 text-emerald-100 placeholder-emerald-400/60 text-xs rounded-xl pl-9 pr-8 py-2 border border-emerald-700/60 focus:outline-none focus:border-amber-400"
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
