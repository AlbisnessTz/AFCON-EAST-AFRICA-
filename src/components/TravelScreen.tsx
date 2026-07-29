import React, { useState } from 'react';
import { TravelSpot, TravelCategory } from '../types';
import { 
  Compass, 
  Hotel, 
  Utensils, 
  Palmtree, 
  Hospital, 
  ShieldAlert, 
  CreditCard, 
  Star, 
  MapPin, 
  Phone, 
  Navigation, 
  X,
  CheckCircle2
} from 'lucide-react';

interface TravelScreenProps {
  travelSpots: TravelSpot[];
  selectedCity: string;
  onSelectCity: (city: string) => void;
  selectedCategory: TravelCategory;
  onSelectCategory: (category: TravelCategory) => void;
}

const CATEGORIES: { id: TravelCategory; label: string; icon: React.ElementType }[] = [
  { id: 'hotel', label: 'Hotels', icon: Hotel },
  { id: 'restaurant', label: 'Dining', icon: Utensils },
  { id: 'attraction', label: 'Attractions', icon: Palmtree },
  { id: 'hospital', label: 'Hospitals', icon: Hospital },
  { id: 'police', label: 'Police Desk', icon: ShieldAlert },
  { id: 'atm', label: 'ATMs & Cash', icon: CreditCard },
];

const CITIES = ['Dar es Salaam', 'Nairobi', 'Kampala', 'Zanzibar', 'Eldoret'];

export const TravelScreen: React.FC<TravelScreenProps> = ({
  travelSpots,
  selectedCity,
  onSelectCity,
  selectedCategory,
  onSelectCategory
}) => {
  const [activeMapSpot, setActiveMapSpot] = useState<TravelSpot | null>(null);

  return (
    <div className="space-y-4 pb-24 animate-fadeIn">
      <div>
        <h2 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
          <Compass className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /> AFCON Visitor & Travel Guide
        </h2>
        <p className="text-xs text-slate-500 dark:text-emerald-300/80">
          Find verified accommodations, dining, sightseeing & emergency services
        </p>
      </div>

      {/* City Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {CITIES.map((city) => (
          <button
            key={city}
            onClick={() => onSelectCity(city)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              selectedCity === city
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-emerald-800 text-slate-700 dark:text-emerald-200 hover:border-amber-400'
            }`}
          >
            📍 {city}
          </button>
        ))}
      </div>

      {/* Category Pills Grid */}
      <div className="grid grid-cols-3 gap-2">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 p-2.5 rounded-2xl text-xs font-bold transition-all ${
                isActive
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-emerald-800/80 text-slate-700 dark:text-emerald-200 hover:bg-slate-50'
              }`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-amber-300' : 'text-emerald-600 dark:text-emerald-400'}`} />
              <span className="truncate">{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Travel Spots Cards List */}
      <div className="space-y-3">
        {travelSpots.length === 0 ? (
          <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-emerald-800 text-slate-500 dark:text-emerald-400">
            No listings found in {selectedCity} for this category. Please try selecting another category or host city.
          </div>
        ) : (
          travelSpots.map((spot) => (
            <div
              key={spot.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-emerald-800/80 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all space-y-3"
            >
              <div className="flex gap-3">
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="w-24 h-24 rounded-xl object-cover shrink-0"
                />
                <div className="space-y-1 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide">
                      {spot.category} • {spot.city}
                    </span>
                    {spot.isOpen24h && (
                      <span className="text-[9px] font-extrabold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 px-1.5 py-0.5 rounded">
                        24/7 OPEN
                      </span>
                    )}
                  </div>
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white truncate">
                    {spot.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-emerald-300/80">
                    <span className="flex items-center gap-0.5 font-bold text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-500" /> {spot.rating} ({spot.reviewsCount})
                    </span>
                    • <span>{spot.distanceKm} km to Stadium</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-emerald-400/80 line-clamp-2">
                    {spot.description}
                  </p>
                </div>
              </div>

              {/* Features Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {spot.features.map((feat) => (
                  <span
                    key={feat}
                    className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-emerald-200 text-[10px] font-medium"
                  >
                    ✓ {feat}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                <a
                  href={`tel:${spot.phone}`}
                  className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1 hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" /> Call: {spot.phone}
                </a>

                <button
                  onClick={() => setActiveMapSpot(spot)}
                  className="px-3 py-1.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1 hover:bg-amber-300"
                >
                  <Navigation className="w-3.5 h-3.5" /> Directions Map
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Map Directions Modal */}
      {activeMapSpot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl p-5 w-full max-w-sm border border-slate-200 dark:border-emerald-800 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-500 flex items-center gap-1">
                <MapPin className="w-4 h-4" /> Location & Map Directions
              </span>
              <button
                onClick={() => setActiveMapSpot(null)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-emerald-950 rounded-2xl p-4 text-white text-center space-y-3 relative overflow-hidden">
              <div className="w-full h-32 bg-emerald-900 rounded-xl flex flex-col items-center justify-center space-y-1 p-2 border border-emerald-800">
                <MapPin className="w-8 h-8 text-amber-400 animate-bounce" />
                <span className="font-bold text-xs text-emerald-100">{activeMapSpot.name}</span>
                <span className="text-[10px] text-emerald-300">{activeMapSpot.address}</span>
              </div>
              <p className="text-xs text-emerald-200/90">
                GPS coordinates locked. Estimated travel time from city center: <span className="font-bold text-amber-300">12 mins</span>.
              </p>
            </div>

            <div className="space-y-2">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(activeMapSpot.name + ' ' + activeMapSpot.address)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold text-xs flex items-center justify-center gap-2"
              >
                Open in Google Maps <CheckCircle2 className="w-4 h-4" />
              </a>
              <button
                onClick={() => setActiveMapSpot(null)}
                className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs"
              >
                Close Map Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
