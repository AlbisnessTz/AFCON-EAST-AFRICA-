import React, { useState, useRef } from 'react';
import { UserProfile, Team, Match, NewsArticle, TabType } from '../types';
import { MATCHES_DATA, NEWS_DATA } from '../data/mockData';
import { 
  User, 
  Globe, 
  Languages, 
  Heart, 
  Save, 
  CheckCircle2, 
  Trophy, 
  Bookmark, 
  LogOut, 
  LogIn, 
  UserPlus, 
  Upload, 
  Image as ImageIcon, 
  Lock, 
  Mail, 
  Sparkles,
  Camera,
  AlertCircle,
  ExternalLink,
  Trash2,
  Newspaper,
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Flame
} from 'lucide-react';

interface ProfileScreenProps {
  userProfile: UserProfile;
  onUpdateProfile: (updated: Partial<UserProfile>) => void;
  onRegister?: (newUser: UserProfile) => UserProfile;
  onLogin?: (email: string, pass: string) => UserProfile;
  onLogout?: () => void;
  teams: Team[];
  matches?: Match[];
  news?: NewsArticle[];
  onSelectMatch?: (match: Match) => void;
  onSelectArticle?: (article: NewsArticle) => void;
  onToggleSaveMatch?: (matchId: string) => void;
  onToggleSaveArticle?: (articleId: string) => void;
  onSelectTab?: (tab: TabType) => void;
}

const COUNTRIES = [
  'Tanzania', 'Kenya', 'Uganda', 'Nigeria', 'Ivory Coast', 
  'Morocco', 'Senegal', 'Egypt', 'Ghana', 'Cameroon', 'South Africa'
];

const LANGUAGES = ['English', 'Kiswahili', 'Français', 'العربية', 'Português'];

const PRESET_AVATARS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80'
];

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
  userProfile,
  onUpdateProfile,
  onRegister,
  onLogin,
  onLogout,
  teams,
  matches,
  news,
  onSelectMatch,
  onSelectArticle,
  onToggleSaveMatch,
  onToggleSaveArticle,
  onSelectTab
}) => {
  // Auth view mode: 'login' | 'register'
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  // Active saved collection tab
  const [activeSavedTab, setActiveSavedTab] = useState<'matches' | 'articles'>('matches');
  
  // Registration Form States
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regCountry, setRegCountry] = useState('Tanzania');
  const [regLanguage, setRegLanguage] = useState('English');
  const [regFavoriteTeam, setRegFavoriteTeam] = useState(teams[0]?.id || 'tan');

  // Login Form States
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Edit Profile States
  const [editName, setEditName] = useState(userProfile.name);
  const [editCountry, setEditCountry] = useState(userProfile.country);
  const [editLanguage, setEditLanguage] = useState(userProfile.language);
  const [editFavoriteTeam, setEditFavoriteTeam] = useState(userProfile.favoriteTeamId);

  // Photo mode: 'preset' | 'upload'
  const [photoTab, setPhotoTab] = useState<'preset' | 'upload'>(userProfile.avatarType || 'preset');
  const [selectedPhoto, setSelectedPhoto] = useState(userProfile.photoUrl);
  const [customPhotoUrlInput, setCustomPhotoUrlInput] = useState('');

  // Status feedback
  const [authError, setAuthError] = useState<string | null>(null);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Hidden File Input Ref
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Data sources
  const allMatches = matches && matches.length > 0 ? matches : MATCHES_DATA;
  const allNews = news && news.length > 0 ? news : NEWS_DATA;

  // Filtered Bookmarked Matches & Articles
  const bookmarkedMatchesList = allMatches.filter((m) => userProfile.savedMatches?.includes(m.id));
  const savedArticlesList = allNews.filter((a) => userProfile.savedArticles?.includes(a.id));

  // Synchronize form state when userProfile updates
  React.useEffect(() => {
    setEditName(userProfile.name);
    setEditCountry(userProfile.country);
    setEditLanguage(userProfile.language);
    setEditFavoriteTeam(userProfile.favoriteTeamId);
    setSelectedPhoto(userProfile.photoUrl);
    setPhotoTab(userProfile.avatarType || 'preset');
  }, [userProfile]);

  // Handle Photo File Upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setAuthError('Image size exceeds 5MB. Please select a smaller photo.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setSelectedPhoto(reader.result);
          setAuthError(null);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Registration Submit
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    if (!regName.trim() || !regEmail.trim() || !regPassword) {
      setAuthError('Please complete all required fields.');
      return;
    }

    const newUser: UserProfile = {
      name: regName.trim(),
      email: regEmail.trim().toLowerCase(),
      password: regPassword,
      country: regCountry,
      language: regLanguage,
      favoriteTeamId: regFavoriteTeam,
      photoUrl: selectedPhoto,
      avatarType: photoTab,
      isAuthenticated: true,
      savedMatches: [],
      savedArticles: []
    };

    try {
      if (onRegister) {
        onRegister(newUser);
      } else {
        onUpdateProfile({ ...newUser, isAuthenticated: true });
      }
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 3000);
    } catch (err: any) {
      setAuthError(err.message || 'Failed to register account.');
    }
  };

  // Handle Login Submit
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    try {
      if (onLogin) {
        onLogin(loginEmail, loginPassword);
      } else {
        onUpdateProfile({ isAuthenticated: true });
      }
    } catch (err: any) {
      setAuthError(err.message || 'Invalid credentials.');
    }
  };

  // Handle Instant Guest Activation
  const handleInstantSignIn = () => {
    setAuthError(null);
    onUpdateProfile({
      name: 'AFCON Supporter',
      email: 'fan@afcon2027.com',
      country: 'Tanzania',
      language: 'English',
      favoriteTeamId: 'tan',
      photoUrl: PRESET_AVATARS[0],
      isAuthenticated: true
    });
  };

  // Handle Profile Save Changes
  const handleSaveProfileChanges = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile({
      name: editName,
      country: editCountry,
      language: editLanguage,
      favoriteTeamId: editFavoriteTeam,
      photoUrl: selectedPhoto,
      avatarType: photoTab
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const favoriteTeam = teams.find((t) => t.id === (userProfile.favoriteTeamId || editFavoriteTeam));

  // IF NOT AUTHENTICATED -> SHOW SIGN IN / REGISTER SCREEN
  if (!userProfile.isAuthenticated) {
    return (
      <div className="space-y-4 pb-24 animate-fadeIn">
        <div>
          <h2 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
            <User className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /> AFCON Supporter Passport
          </h2>
          <p className="text-xs text-slate-500 dark:text-emerald-300/80">
            Sign in or register to customize your tournament experience
          </p>
        </div>

        {/* Auth Mode Selector Tabs */}
        <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-200 dark:bg-slate-800 rounded-2xl">
          <button
            onClick={() => { setAuthMode('login'); setAuthError(null); }}
            className={`py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              authMode === 'login'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-amber-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <LogIn className="w-3.5 h-3.5" /> Sign In
          </button>
          <button
            onClick={() => { setAuthMode('register'); setAuthError(null); }}
            className={`py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              authMode === 'register'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-amber-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <UserPlus className="w-3.5 h-3.5" /> Register / Sign Up
          </button>
        </div>

        {/* Error Feedback Banner */}
        {authError && (
          <div className="p-3 bg-red-100 text-red-900 dark:bg-red-950/80 dark:text-red-200 border border-red-300 dark:border-red-800 rounded-xl text-xs font-bold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
            <span>{authError}</span>
          </div>
        )}

        {/* LOGIN FORM */}
        {authMode === 'login' && (
          <form onSubmit={handleLoginSubmit} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-emerald-800/80 rounded-2xl p-4 shadow-sm space-y-4">
            <div className="text-center space-y-1">
              <h3 className="text-sm font-black text-slate-900 dark:text-white">Welcome Back, Football Fan! ⚽</h3>
              <p className="text-[11px] text-slate-500 dark:text-emerald-300/80">Access your saved matches, tickets & travel bookmarks</p>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700 dark:text-emerald-200 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-emerald-600" /> Email Address
              </label>
              <input
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs rounded-xl p-3 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-amber-400"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700 dark:text-emerald-200 flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-emerald-600" /> Password
              </label>
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs rounded-xl p-3 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-amber-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 hover:bg-amber-300 shadow-md active:scale-[0.98] transition-all"
            >
              <LogIn className="w-4 h-4" /> Sign In to Passport
            </button>

            {/* Quick Sign In Button */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={handleInstantSignIn}
                className="w-full py-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-200 font-bold text-xs border border-emerald-300 dark:border-emerald-800 flex items-center justify-center gap-2 hover:bg-emerald-200 dark:hover:bg-emerald-900 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Instant Sign In as Albert Luwavi
              </button>
            </div>
          </form>
        )}

        {/* REGISTER FORM */}
        {authMode === 'register' && (
          <form onSubmit={handleRegisterSubmit} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-emerald-800/80 rounded-2xl p-4 shadow-sm space-y-4">
            <div className="text-center space-y-1">
              <h3 className="text-sm font-black text-slate-900 dark:text-white">Create Your Supporter Account 🎟️</h3>
              <p className="text-[11px] text-slate-500 dark:text-emerald-300/80">Join East Africa Pamoja AFCON Fan Community</p>
            </div>

            {/* Photo Selection Component (Preset vs Upload) */}
            <div className="space-y-2 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-200 dark:border-slate-700">
              <label className="text-xs font-bold text-slate-800 dark:text-emerald-200 flex items-center justify-between">
                <span>Profile Photo Options</span>
                <span className="text-[10px] text-amber-500 font-semibold">Avatar vs Custom Photo</span>
              </label>

              {/* Photo Mode Switcher */}
              <div className="grid grid-cols-2 gap-1 bg-slate-200 dark:bg-slate-700/80 p-0.5 rounded-xl text-center text-[11px] font-bold">
                <button
                  type="button"
                  onClick={() => setPhotoTab('preset')}
                  className={`py-1.5 rounded-lg transition-all flex items-center justify-center gap-1 ${
                    photoTab === 'preset'
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-amber-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  <ImageIcon className="w-3 h-3" /> Fan Avatars
                </button>
                <button
                  type="button"
                  onClick={() => setPhotoTab('upload')}
                  className={`py-1.5 rounded-lg transition-all flex items-center justify-center gap-1 ${
                    photoTab === 'upload'
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-amber-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  <Upload className="w-3 h-3" /> Upload Custom Photo
                </button>
              </div>

              {/* Preset Avatars Gallery */}
              {photoTab === 'preset' && (
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Select a pre-designed supporter avatar:</span>
                  <div className="grid grid-cols-6 gap-2">
                    {PRESET_AVATARS.map((url, idx) => (
                      <img
                        key={idx}
                        src={url}
                        alt={`Avatar ${idx}`}
                        onClick={() => setSelectedPhoto(url)}
                        className={`w-10 h-10 rounded-xl object-cover cursor-pointer border-2 transition-all ${
                          selectedPhoto === url ? 'border-amber-400 scale-110 shadow-md ring-2 ring-amber-400/50' : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Custom Photo Upload */}
              {photoTab === 'upload' && (
                <div className="space-y-2 pt-1">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  <div className="flex items-center gap-3">
                    <img
                      src={selectedPhoto}
                      alt="Selected Preview"
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-amber-400 shadow-sm shrink-0"
                    />
                    <div className="flex-1 space-y-1.5">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all"
                      >
                        <Camera className="w-3.5 h-3.5" /> Choose Image File from Device
                      </button>
                      <div className="text-[10px] text-slate-400 dark:text-slate-400 text-center">
                        Supports PNG, JPG or WEBP (Max 5MB)
                      </div>
                    </div>
                  </div>

                  {/* Fallback Direct URL Input */}
                  <div className="pt-1 border-t border-slate-200 dark:border-slate-700">
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block mb-1">Or paste photo URL:</span>
                    <div className="flex gap-2">
                      <input
                        type="url"
                        placeholder="https://example.com/photo.jpg"
                        value={customPhotoUrlInput}
                        onChange={(e) => setCustomPhotoUrlInput(e.target.value)}
                        className="flex-1 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-[11px] rounded-lg p-2 border border-slate-200 dark:border-slate-700"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          if (customPhotoUrlInput.trim()) {
                            setSelectedPhoto(customPhotoUrlInput.trim());
                            setCustomPhotoUrlInput('');
                          }
                        }}
                        className="px-3 bg-amber-400 text-black font-bold text-[11px] rounded-lg hover:bg-amber-300"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Name */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700 dark:text-emerald-200">Full Name *</label>
              <input
                type="text"
                value={regName}
                onChange={(e) => setRegName(e.target.value)}
                placeholder="e.g. Juma Hamisi"
                className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs rounded-xl p-3 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-amber-400"
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700 dark:text-emerald-200">Email Address *</label>
              <input
                type="email"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                placeholder="juma.hamisi@gmail.com"
                className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs rounded-xl p-3 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-amber-400"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700 dark:text-emerald-200">Password *</label>
              <input
                type="password"
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
                placeholder="Create a password"
                className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs rounded-xl p-3 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-amber-400"
                required
              />
            </div>

            {/* Country & Language Grid */}
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-emerald-200">Country</label>
                <select
                  value={regCountry}
                  onChange={(e) => setRegCountry(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs rounded-xl p-2.5 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-amber-400"
                >
                  {COUNTRIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-emerald-200">Language</label>
                <select
                  value={regLanguage}
                  onChange={(e) => setRegLanguage(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs rounded-xl p-2.5 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-amber-400"
                >
                  {LANGUAGES.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Favorite Team */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700 dark:text-emerald-200">Favorite AFCON Team</label>
              <select
                value={regFavoriteTeam}
                onChange={(e) => setRegFavoriteTeam(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs rounded-xl p-3 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-amber-400"
              >
                {teams.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.flag} {t.name} ({t.group})
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 hover:bg-amber-300 shadow-md active:scale-[0.98] transition-all"
            >
              <UserPlus className="w-4 h-4" /> Register & Activate Passport
            </button>
          </form>
        )}
      </div>
    );
  }

  // AUTHENTICATED USER PROFILE DASHBOARD
  return (
    <div className="space-y-4 pb-24 animate-fadeIn">
      <div>
        <h2 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
          <User className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /> Fan Profile & Identity
        </h2>
        <p className="text-xs text-slate-500 dark:text-emerald-300/80">
          Personalize your supporter passport & preferred tournament team
        </p>
      </div>

      {/* Fan Passport Header Card */}
      <div className="bg-gradient-to-r from-emerald-900 to-green-950 p-5 rounded-3xl text-white shadow-xl border border-emerald-800 space-y-4 relative">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={selectedPhoto || userProfile.photoUrl}
                alt="Avatar"
                className="w-16 h-16 rounded-2xl object-cover border-2 border-amber-400 shadow-md"
              />
              <span className="absolute -bottom-1 -right-1 bg-amber-400 text-black text-[10px] font-extrabold px-1.5 py-0.2 rounded-full border border-black">
                FAN
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-extrabold">{userProfile.name}</h3>
              <p className="text-[11px] text-emerald-300/90 font-mono">{userProfile.email}</p>
              <div className="flex items-center gap-2 text-xs text-emerald-200/90">
                <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5" /> {userProfile.country}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Languages className="w-3.5 h-3.5" /> {userProfile.language}</span>
              </div>
              {favoriteTeam && (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-md border border-amber-500/40">
                  <Heart className="w-3 h-3 fill-amber-300" /> {favoriteTeam.flag} {favoriteTeam.name}
                </span>
              )}
            </div>
          </div>

          {/* Sign Out Button */}
          {onLogout && (
            <button
              onClick={onLogout}
              className="px-2.5 py-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/40 rounded-xl text-[11px] font-bold flex items-center gap-1 shadow-sm transition-all shrink-0"
              title="Sign Out"
            >
              <LogOut className="w-3.5 h-3.5" /> Sign Out
            </button>
          )}
        </div>

        {/* Saved Stats */}
        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-emerald-800 text-center text-xs">
          <button
            type="button"
            onClick={() => setActiveSavedTab('matches')}
            className={`p-2 rounded-xl border transition-all text-left flex flex-col items-center justify-center ${
              activeSavedTab === 'matches'
                ? 'bg-amber-400/20 border-amber-400 ring-2 ring-amber-400/40'
                : 'bg-emerald-950/60 border-emerald-800/60 hover:bg-emerald-900/60'
            }`}
          >
            <span className="text-slate-300 text-[10px] flex items-center justify-center gap-1">
              <Trophy className="w-3 h-3 text-amber-400" /> Matches Bookmarked
            </span>
            <span className="text-base font-black text-amber-400">
              {bookmarkedMatchesList.length}
            </span>
          </button>
          <button
            type="button"
            onClick={() => setActiveSavedTab('articles')}
            className={`p-2 rounded-xl border transition-all text-left flex flex-col items-center justify-center ${
              activeSavedTab === 'articles'
                ? 'bg-emerald-500/20 border-emerald-400 ring-2 ring-emerald-400/40'
                : 'bg-emerald-950/60 border-emerald-800/60 hover:bg-emerald-900/60'
            }`}
          >
            <span className="text-slate-300 text-[10px] flex items-center justify-center gap-1">
              <Bookmark className="w-3 h-3 text-emerald-400" /> Articles Saved
            </span>
            <span className="text-base font-black text-emerald-400">
              {savedArticlesList.length}
            </span>
          </button>
        </div>
      </div>

      {/* Saved Collections Section */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-emerald-800/80 rounded-2xl p-4 shadow-sm space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-emerald-400 flex items-center gap-1.5">
            <Bookmark className="w-4 h-4 text-amber-500" /> My Saved Collection
          </h3>
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            <button
              type="button"
              onClick={() => setActiveSavedTab('matches')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeSavedTab === 'matches'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              Matches ({bookmarkedMatchesList.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveSavedTab('articles')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeSavedTab === 'articles'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Newspaper className="w-3.5 h-3.5" />
              Articles ({savedArticlesList.length})
            </button>
          </div>
        </div>

        {/* Tab 1: Bookmarked Matches List */}
        {activeSavedTab === 'matches' && (
          <div className="space-y-3">
            {bookmarkedMatchesList.length === 0 ? (
              <div className="p-6 text-center bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 space-y-2">
                <Trophy className="w-8 h-8 text-amber-400/50 mx-auto" />
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  No bookmarked matches yet
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
                  Explore tournament fixtures in the Matches tab and tap the bookmark icon on any match to save it here for quick access.
                </p>
                {onSelectTab && (
                  <button
                    type="button"
                    onClick={() => onSelectTab('matches')}
                    className="mt-2 px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold rounded-xl transition-all inline-flex items-center gap-1.5 shadow-sm"
                  >
                    Explore AFCON Fixtures <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-2.5">
                {bookmarkedMatchesList.map((match) => (
                  <div
                    key={match.id}
                    onClick={() => onSelectMatch && onSelectMatch(match)}
                    className="p-3.5 bg-slate-50 dark:bg-slate-800/80 hover:bg-emerald-50 dark:hover:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 rounded-2xl transition-all cursor-pointer group shadow-sm flex flex-col space-y-2.5"
                  >
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 dark:text-emerald-300/90">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-amber-500" /> {match.date} • {match.time}
                      </span>
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-amber-400/15 text-amber-600 dark:text-amber-400 border border-amber-400/30">
                        {match.group}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-1">
                      {/* Home Team */}
                      <div className="flex items-center gap-2 w-5/12">
                        <span className="text-2xl group-hover:scale-110 transition-transform">{match.homeFlag}</span>
                        <span className="font-extrabold text-xs text-slate-900 dark:text-white truncate">
                          {match.homeTeam}
                        </span>
                      </div>

                      {/* Score / VS */}
                      <div className="text-center font-black text-xs px-2.5 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl">
                        {match.status === 'finished' || match.status === 'live' ? (
                          <span className="text-amber-500">{match.homeScore} - {match.awayScore}</span>
                        ) : (
                          <span className="text-slate-400 dark:text-slate-500">VS</span>
                        )}
                      </div>

                      {/* Away Team */}
                      <div className="flex items-center justify-end gap-2 w-5/12 text-right">
                        <span className="font-extrabold text-xs text-slate-900 dark:text-white truncate">
                          {match.awayTeam}
                        </span>
                        <span className="text-2xl group-hover:scale-110 transition-transform">{match.awayFlag}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-slate-200/60 dark:border-slate-700/60 text-[11px]">
                      <span className="text-slate-500 dark:text-slate-400 truncate flex items-center gap-1 text-[10px]">
                        <MapPin className="w-3 h-3 text-amber-500 shrink-0" /> {match.stadium}, {match.city}
                      </span>
                      <div className="flex items-center gap-2 shrink-0">
                        {onToggleSaveMatch && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleSaveMatch(match.id);
                            }}
                            className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                            title="Remove Bookmark"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                        <span className="text-amber-500 font-extrabold text-[10px] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                          Details <ExternalLink className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Saved Articles List */}
        {activeSavedTab === 'articles' && (
          <div className="space-y-3">
            {savedArticlesList.length === 0 ? (
              <div className="p-6 text-center bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 space-y-2">
                <Newspaper className="w-8 h-8 text-emerald-400/50 mx-auto" />
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  No saved articles yet
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
                  Browse tournament news, team features, and match analysis in the News tab to save articles here.
                </p>
                {onSelectTab && (
                  <button
                    type="button"
                    onClick={() => onSelectTab('news')}
                    className="mt-2 px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold rounded-xl transition-all inline-flex items-center gap-1.5 shadow-sm"
                  >
                    Browse AFCON News <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-2.5">
                {savedArticlesList.map((article) => (
                  <div
                    key={article.id}
                    onClick={() => onSelectArticle && onSelectArticle(article)}
                    className="p-3 bg-slate-50 dark:bg-slate-800/80 hover:bg-emerald-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl transition-all cursor-pointer group shadow-sm flex items-center gap-3"
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-20 h-20 rounded-xl object-cover shrink-0 border border-slate-200 dark:border-slate-700 group-hover:scale-105 transition-transform"
                    />
                    <div className="flex-1 space-y-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                          {article.category}
                        </span>
                        <span className="text-[10px] text-slate-400 dark:text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {article.date}
                        </span>
                      </div>
                      <h4 className="text-xs font-extrabold text-slate-900 dark:text-white line-clamp-2 leading-snug group-hover:text-amber-500 transition-colors">
                        {article.title}
                      </h4>
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[10px] text-slate-500 dark:text-emerald-300/80 truncate">
                          By {article.author}
                        </span>
                        <div className="flex items-center gap-2 shrink-0">
                          {onToggleSaveArticle && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                onToggleSaveArticle(article.id);
                              }}
                              className="p-1 text-slate-400 hover:text-red-500 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                              title="Remove Article"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                          <span className="text-amber-500 font-extrabold text-[10px] flex items-center gap-0.5">
                            Read <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Profile Editing Form */}
      <form onSubmit={handleSaveProfileChanges} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-emerald-800/80 rounded-2xl p-4 shadow-sm space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-emerald-400">
          Edit Profile Information
        </h3>

        {/* Photo Switcher Section (Avatar vs Upload Custom) */}
        <div className="space-y-2 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-200 dark:border-slate-700">
          <label className="text-xs font-bold text-slate-800 dark:text-emerald-200 flex items-center justify-between">
            <span>Profile Photo Options</span>
            <span className="text-[10px] text-amber-500 font-semibold">Avatar vs Custom Upload</span>
          </label>

          <div className="grid grid-cols-2 gap-1 bg-slate-200 dark:bg-slate-700/80 p-0.5 rounded-xl text-center text-[11px] font-bold">
            <button
              type="button"
              onClick={() => setPhotoTab('preset')}
              className={`py-1.5 rounded-lg transition-all flex items-center justify-center gap-1 ${
                photoTab === 'preset'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-amber-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              <ImageIcon className="w-3 h-3" /> Preset Avatars
            </button>
            <button
              type="button"
              onClick={() => setPhotoTab('upload')}
              className={`py-1.5 rounded-lg transition-all flex items-center justify-center gap-1 ${
                photoTab === 'upload'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-amber-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              <Upload className="w-3 h-3" /> Custom Photo Upload
            </button>
          </div>

          {photoTab === 'preset' && (
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Choose avatar preset:</span>
              <div className="grid grid-cols-6 gap-2">
                {PRESET_AVATARS.map((url, idx) => (
                  <img
                    key={idx}
                    src={url}
                    alt={`Avatar ${idx}`}
                    onClick={() => setSelectedPhoto(url)}
                    className={`w-10 h-10 rounded-xl object-cover cursor-pointer border-2 transition-all ${
                      selectedPhoto === url ? 'border-amber-400 scale-110 shadow-md ring-2 ring-amber-400/50' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {photoTab === 'upload' && (
            <div className="space-y-2 pt-1">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept="image/*"
                className="hidden"
              />
              <div className="flex items-center gap-3">
                <img
                  src={selectedPhoto}
                  alt="Selected Preview"
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-amber-400 shadow-sm shrink-0"
                />
                <div className="flex-1 space-y-1.5">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all"
                  >
                    <Camera className="w-3.5 h-3.5" /> Upload Photo from Gallery
                  </button>
                  <div className="text-[10px] text-slate-400 dark:text-slate-400 text-center">
                    JPG, PNG or WEBP (Max 5MB)
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Name */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-700 dark:text-emerald-200">
            Full Name
          </label>
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs rounded-xl p-3 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-amber-400"
            required
          />
        </div>

        {/* Country */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-700 dark:text-emerald-200">
            Home Country
          </label>
          <select
            value={editCountry}
            onChange={(e) => setEditCountry(e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs rounded-xl p-3 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-amber-400"
          >
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Language */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-700 dark:text-emerald-200">
            Preferred App Language
          </label>
          <select
            value={editLanguage}
            onChange={(e) => setEditLanguage(e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs rounded-xl p-3 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-amber-400"
          >
            {LANGUAGES.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </div>

        {/* Favorite AFCON Team */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-700 dark:text-emerald-200">
            Favorite AFCON Team
          </label>
          <select
            value={editFavoriteTeam}
            onChange={(e) => setEditFavoriteTeam(e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs rounded-xl p-3 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-amber-400"
          >
            {teams.map((t) => (
              <option key={t.id} value={t.id}>
                {t.flag} {t.name} ({t.group})
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 hover:bg-amber-300 shadow-md active:scale-[0.98] transition-all"
        >
          <Save className="w-4 h-4" /> Save Profile Changes
        </button>

        {savedSuccess && (
          <div className="p-3 bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800 rounded-xl text-xs font-bold flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Profile successfully updated!
          </div>
        )}
      </form>
    </div>
  );
};
