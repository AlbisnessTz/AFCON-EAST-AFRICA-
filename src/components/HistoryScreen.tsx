import React, { useState } from 'react';
import { HistoryItem, HistoryCategory } from '../types';
import { HISTORY_ITEMS } from '../data/historyData';
import { 
  Landmark, 
  UserCheck, 
  Globe, 
  Sparkles, 
  Search, 
  MapPin, 
  Calendar, 
  Bookmark, 
  BookmarkCheck, 
  ChevronRight, 
  X, 
  Share2, 
  Check, 
  Award,
  BookOpen,
  Compass,
  ArrowRight,
  HelpCircle,
  Palmtree
} from 'lucide-react';

interface HistoryScreenProps {
  onSelectTab?: (tab: any) => void;
  savedItemIds?: string[];
  onToggleSaveItem?: (id: string) => void;
}

export const HistoryScreen: React.FC<HistoryScreenProps> = ({
  onSelectTab,
  savedItemIds = [],
  onToggleSaveItem
}) => {
  const [selectedCountry, setSelectedCountry] = useState<'All' | 'Tanzania' | 'Kenya' | 'Uganda'>('All');
  const [selectedCategory, setSelectedCategory] = useState<'all' | HistoryCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeItemModal, setActiveItemModal] = useState<HistoryItem | null>(null);
  const [copiedShare, setCopiedShare] = useState(false);

  // Local fallback for saved items state if parent callback isn't supplied
  const [localSavedIds, setLocalSavedIds] = useState<string[]>([]);
  const isSaved = (id: string) => (onToggleSaveItem ? savedItemIds.includes(id) : localSavedIds.includes(id));

  const handleToggleSave = (id: string) => {
    if (onToggleSaveItem) {
      onToggleSaveItem(id);
    } else {
      setLocalSavedIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    }
  };

  const handleShare = (item: HistoryItem) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${item.title} - ${item.summary} (Discovered on KickOff Africa)`);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  // Filter items
  const filteredItems = HISTORY_ITEMS.filter((item) => {
    const matchesCountry = selectedCountry === 'All' || item.country === selectedCountry;
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.summary.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query) ||
      item.famousFor.toLowerCase().includes(query) ||
      item.country.toLowerCase().includes(query);

    return matchesCountry && matchesCategory && matchesSearch;
  });

  const getCategoryBadge = (cat: HistoryCategory) => {
    switch (cat) {
      case 'place':
        return { label: 'Historical Place', icon: Landmark, color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30' };
      case 'person':
        return { label: 'Famous Legend', icon: UserCheck, color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30' };
      case 'heritage':
        return { label: 'UNESCO Heritage', icon: Globe, color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30' };
      case 'culture':
        return { label: 'Culture & Tradition', icon: Sparkles, color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30' };
      case 'attraction':
        return { label: 'Tourist Attraction', icon: Palmtree, color: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/30' };
      default:
        return { label: 'History & Nature', icon: BookOpen, color: 'bg-slate-500/10 text-slate-600 border-slate-500/30' };
    }
  };

  return (
    <div className="space-y-4 pb-20 animate-fadeIn">
      {/* Screen Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-amber-950 p-4 rounded-3xl text-white shadow-xl border border-emerald-800/80 relative overflow-hidden">
        <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
          <Palmtree className="w-48 h-48 text-amber-400" />
        </div>
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-black uppercase tracking-wider border border-amber-400/40">
            <Compass className="w-3.5 h-3.5" /> East Africa Pamoja AFCON 2027
          </div>
          <h1 className="text-xl font-black tracking-tight text-white flex items-center gap-2">
            History & Tourist Attractions
          </h1>
          <p className="text-xs text-emerald-100/90 leading-relaxed max-w-sm">
            Discover historic monuments, ancient kingdoms, founding fathers, natural wonders, game reserves, and top tourist destinations across <strong>Tanzania 🇹🇿</strong>, <strong>Kenya 🇰🇪</strong>, and <strong>Uganda 🇺🇬</strong>.
          </p>
        </div>
      </div>

      {/* Country Selector Cards */}
      <div className="grid grid-cols-4 gap-1.5 text-xs font-bold">
        {[
          { id: 'All', label: 'All Hosts', flag: '🌍' },
          { id: 'Tanzania', label: 'Tanzania', flag: '🇹🇿' },
          { id: 'Kenya', label: 'Kenya', flag: '🇰🇪' },
          { id: 'Uganda', label: 'Uganda', flag: '🇺🇬' },
        ].map((c) => {
          const isSelected = selectedCountry === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setSelectedCountry(c.id as any)}
              className={`py-2 px-1.5 rounded-2xl border transition-all flex flex-col items-center justify-center gap-1 text-center ${
                isSelected
                  ? 'bg-amber-400 text-slate-950 border-amber-500 shadow-md scale-[1.02] font-black'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-emerald-100 border-slate-200 dark:border-emerald-800/80 hover:bg-emerald-50 dark:hover:bg-slate-800'
              }`}
            >
              <span className="text-base leading-none">{c.flag}</span>
              <span className="text-[10px] truncate max-w-full">{c.label}</span>
            </button>
          );
        })}
      </div>

      {/* Search Input Bar */}
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400 dark:text-emerald-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search historical sites, legends, parks, beaches..."
          className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-emerald-400/60 text-xs rounded-2xl pl-9 pr-8 py-2.5 border border-slate-200 dark:border-emerald-800/80 focus:outline-none focus:border-amber-400 shadow-sm"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
        {[
          { id: 'all', label: 'All Discoveries', icon: BookOpen },
          { id: 'attraction', label: 'Tourist Attractions', icon: Palmtree },
          { id: 'place', label: 'Historical Places', icon: Landmark },
          { id: 'person', label: 'Famous Legends', icon: UserCheck },
          { id: 'heritage', label: 'UNESCO Wonders', icon: Globe },
          { id: 'culture', label: 'Culture & Traditions', icon: Sparkles },
        ].map((cat) => {
          const Icon = cat.icon;
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                isSelected
                  ? 'bg-emerald-700 dark:bg-emerald-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-emerald-200 border border-slate-200 dark:border-emerald-800/80 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[11px]">{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Items List */}
      <div className="space-y-3">
        {filteredItems.length === 0 ? (
          <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-emerald-800/80 text-slate-500 dark:text-emerald-400 space-y-2">
            <HelpCircle className="w-8 h-8 mx-auto text-amber-400/60" />
            <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
              No historical records found
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
              Try adjusting your search keywords or switching country filters to explore East African history.
            </p>
          </div>
        ) : (
          filteredItems.map((item) => {
            const badge = getCategoryBadge(item.category);
            const BadgeIcon = badge.icon;
            const itemSaved = isSaved(item.id);

            return (
              <div
                key={item.id}
                onClick={() => setActiveItemModal(item)}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-emerald-800/80 rounded-2xl p-3.5 shadow-sm hover:shadow-md transition-all cursor-pointer group space-y-2.5 relative overflow-hidden"
              >
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base">{item.countryFlag}</span>
                    <span className="text-xs font-black text-slate-800 dark:text-emerald-200">
                      {item.country}
                    </span>
                    <span className="text-slate-300 dark:text-slate-700">•</span>
                    <span
                      className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full border flex items-center gap-1 ${badge.color}`}
                    >
                      <BadgeIcon className="w-3 h-3" />
                      {badge.label}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleSave(item.id);
                    }}
                    className={`p-1.5 rounded-xl transition-all ${
                      itemSaved
                        ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                        : 'text-slate-400 dark:text-slate-500 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                    title={itemSaved ? 'Remove Bookmark' : 'Bookmark Historical Record'}
                  >
                    {itemSaved ? <BookmarkCheck className="w-4 h-4 fill-slate-950" /> : <Bookmark className="w-4 h-4" />}
                  </button>
                </div>

                {/* Main Card Content */}
                <div className="flex items-start gap-3">
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-800 shrink-0 border border-slate-200 dark:border-slate-700 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex-1 space-y-1 min-w-0">
                    <h3 className="text-xs font-black text-slate-900 dark:text-white line-clamp-1 group-hover:text-amber-500 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-emerald-300/80">
                      <span className="flex items-center gap-0.5">
                        <Calendar className="w-3 h-3 text-amber-500" /> {item.periodOrEra}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </div>

                {/* Footer bar */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[10px]">
                  <span className="text-slate-500 dark:text-slate-400 truncate flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-500 shrink-0" /> {item.location}
                  </span>
                  <span className="text-amber-500 font-extrabold flex items-center gap-0.5 shrink-0 group-hover:translate-x-1 transition-transform">
                    Read Story <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Historical Detail Reading Modal */}
      {activeItemModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl p-5 w-full max-w-md border border-slate-200 dark:border-emerald-800/80 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            {/* Modal Top Nav Bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="text-xl">{activeItemModal.countryFlag}</span>
                <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
                  {activeItemModal.country}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleToggleSave(activeItemModal.id)}
                  className={`p-2 rounded-xl transition-all ${
                    isSaved(activeItemModal.id)
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-500'
                  }`}
                  title={isSaved(activeItemModal.id) ? 'Remove Bookmark' : 'Bookmark Story'}
                >
                  {isSaved(activeItemModal.id) ? (
                    <BookmarkCheck className="w-4 h-4 fill-slate-950" />
                  ) : (
                    <Bookmark className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={() => handleShare(activeItemModal)}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-500 transition-all relative"
                  title="Share History Story"
                >
                  {copiedShare ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setActiveItemModal(null)}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {copiedShare && (
              <div className="p-2.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800 rounded-xl text-xs font-bold text-center">
                History story copied to clipboard!
              </div>
            )}

            {/* Title & Category Banner */}
            <div className="space-y-1.5">
              <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400/20 text-amber-600 dark:text-amber-400 border border-amber-400/40">
                {activeItemModal.periodOrEra}
              </div>
              <h2 className="text-lg font-black leading-snug text-slate-900 dark:text-white">
                {activeItemModal.title}
              </h2>
              <p className="text-xs text-slate-500 dark:text-emerald-300 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-500" /> {activeItemModal.location}
              </p>
            </div>

            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden h-48 bg-slate-800 relative">
              <img
                src={activeItemModal.image}
                alt={activeItemModal.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Famous For Banner */}
            <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80 rounded-2xl text-xs space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-500" /> Famous For
              </span>
              <p className="font-bold text-slate-800 dark:text-amber-100">
                {activeItemModal.famousFor}
              </p>
            </div>

            {/* Full Story Description */}
            <div className="space-y-2 text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
              <h4 className="font-extrabold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-amber-500" /> Historical Narrative
              </h4>
              {activeItemModal.description.map((paragraph, idx) => (
                <p key={idx} className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl border border-slate-100 dark:border-slate-800">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Highlights */}
            <div className="space-y-2 pt-1">
              <h4 className="font-extrabold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
                Key Highlights
              </h4>
              <div className="grid grid-cols-1 gap-1.5">
                {activeItemModal.keyHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-xs font-semibold text-emerald-900 dark:text-emerald-200 flex items-center gap-2"
                  >
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                      ✓
                    </span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Historical Significance Callout */}
            <div className="p-3 bg-emerald-950 text-emerald-100 rounded-2xl border border-emerald-800 text-xs space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 flex items-center gap-1">
                <Compass className="w-3.5 h-3.5" /> Heritage Impact
              </span>
              <p className="text-[11px] font-medium leading-normal text-emerald-200">
                {activeItemModal.historicalSignificance}
              </p>
            </div>

            {/* Close Modal Button */}
            <button
              onClick={() => setActiveItemModal(null)}
              className="w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-extrabold text-xs shadow-md transition-all"
            >
              Done Reading
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
