import React, { useState, useRef } from 'react';
import { UserProfile, Team } from '../types';
import { 
  User, 
  LogIn, 
  UserPlus, 
  Mail, 
  Lock, 
  Globe, 
  Languages, 
  Heart, 
  Upload, 
  Image as ImageIcon, 
  Camera, 
  AlertCircle,
  Trophy,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Smartphone,
  Loader2
} from 'lucide-react';

interface AuthGateModalProps {
  userProfile: UserProfile;
  teams: Team[];
  onRegister: (newUser: UserProfile) => UserProfile;
  onLogin: (email: string, pass: string) => UserProfile;
  onUpdateProfile: (updated: Partial<UserProfile>) => void;
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

export const AuthGateModal: React.FC<AuthGateModalProps> = ({
  userProfile,
  teams,
  onRegister,
  onLogin,
  onUpdateProfile
}) => {
  const [mode, setMode] = useState<'login' | 'register'>('login');

  // Login Form
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Registration Form
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regCountry, setRegCountry] = useState('Tanzania');
  const [regLanguage, setRegLanguage] = useState('English');
  const [regFavoriteTeam, setRegFavoriteTeam] = useState(teams[0]?.id || 'tan');

  // Photo
  const [photoTab, setPhotoTab] = useState<'preset' | 'upload'>('preset');
  const [selectedPhoto, setSelectedPhoto] = useState(PRESET_AVATARS[0]);

  // Error Feedback
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Hidden File Input Ref
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrorMsg('Image file size exceeds 5MB. Please choose a smaller photo.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setSelectedPhoto(reader.result);
          setErrorMsg(null);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    try {
      onLogin(loginEmail.trim(), loginPassword);
    } catch (err: any) {
      setErrorMsg(err.message || 'Invalid login details.');
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    if (!regName.trim() || !regEmail.trim() || !regPassword) {
      setErrorMsg('Please fill in all required fields.');
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
      onRegister(newUser);
    } catch (err: any) {
      setErrorMsg(err.message || 'Registration failed.');
    }
  };

  // Loading state for social authentication
  const [connectingProvider, setConnectingProvider] = useState<string | null>(null);

  const handleSocialSignIn = (provider: 'google' | 'apple' | 'phone') => {
    setErrorMsg(null);
    setConnectingProvider(
      provider === 'google' ? 'Google' : provider === 'apple' ? 'Apple ID' : 'Mobile SMS'
    );

    setTimeout(() => {
      let socialProfile: UserProfile;
      if (provider === 'google') {
        socialProfile = {
          name: 'Google Supporter',
          email: 'google.fan@afcon2027.com',
          password: 'google_oauth_token',
          country: 'Tanzania',
          language: 'English',
          favoriteTeamId: 'tan',
          photoUrl: PRESET_AVATARS[0],
          avatarType: 'preset',
          isAuthenticated: true,
          savedMatches: [],
          savedArticles: []
        };
      } else if (provider === 'apple') {
        socialProfile = {
          name: 'Apple Supporter',
          email: 'apple.fan@icloud.com',
          password: 'apple_oauth_token',
          country: 'Kenya',
          language: 'English',
          favoriteTeamId: 'ken',
          photoUrl: PRESET_AVATARS[1],
          avatarType: 'preset',
          isAuthenticated: true,
          savedMatches: [],
          savedArticles: []
        };
      } else {
        socialProfile = {
          name: 'Mobile Supporter',
          email: 'mobile.fan@kickoff.africa',
          password: 'phone_otp_verified',
          country: 'Uganda',
          language: 'Kiswahili',
          favoriteTeamId: 'uga',
          photoUrl: PRESET_AVATARS[2],
          avatarType: 'preset',
          isAuthenticated: true,
          savedMatches: [],
          savedArticles: []
        };
      }

      setConnectingProvider(null);
      onUpdateProfile(socialProfile);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-emerald-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-emerald-900 via-green-900 to-slate-950 p-5 text-white relative">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-xl shadow-lg border border-amber-300">
              ⚽
            </div>
            <div>
              <h2 className="text-base font-black tracking-tight text-white flex items-center gap-1.5">
                AFCON PAMOJA 2027 <Trophy className="w-4 h-4 text-amber-400" />
              </h2>
              <p className="text-[11px] text-emerald-200/90 font-medium">
                Official East Africa Supporter Passport
              </p>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2 text-[10px] bg-emerald-950/60 p-2 rounded-xl border border-emerald-800/80 text-emerald-300">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Sign in or create an account to activate your official Fan Passport</span>
          </div>
        </div>

        {/* Tab Switcher: Sign In vs Register */}
        <div className="p-3 bg-slate-100 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 flex gap-2">
          <button
            onClick={() => { setMode('login'); setErrorMsg(null); }}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              mode === 'login'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <LogIn className="w-3.5 h-3.5" /> Sign In
          </button>
          <button
            onClick={() => { setMode('register'); setErrorMsg(null); }}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              mode === 'register'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <UserPlus className="w-3.5 h-3.5" /> Register / Sign Up
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 overflow-y-auto space-y-4 flex-1">

          {/* Social Auth Options: Google, Apple, Mobile SMS */}
          <div className="space-y-2">
            <button
              type="button"
              disabled={!!connectingProvider}
              onClick={() => handleSocialSignIn('google')}
              className="w-full py-2.5 px-4 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-800 dark:text-white font-bold text-xs rounded-2xl flex items-center justify-center gap-2.5 shadow-sm transition-all disabled:opacity-50"
            >
              {connectingProvider === 'Google' ? (
                <Loader2 className="w-4 h-4 text-emerald-500 animate-spin" />
              ) : (
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3h3.88c2.27-2.09 3.665-5.17 3.665-9.12z" />
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z" />
                  <path fill="#FBBC05" d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.99-3.09z" />
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.99 3.09c.95-2.85 3.6-4.96 6.72-4.96z" />
                </svg>
              )}
              <span>{connectingProvider === 'Google' ? 'Connecting to Google...' : 'Continue with Google Account'}</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                disabled={!!connectingProvider}
                onClick={() => handleSocialSignIn('apple')}
                className="py-2.5 px-3 bg-slate-900 text-white dark:bg-slate-800 border border-slate-800 dark:border-slate-700 hover:bg-black font-bold text-[11px] rounded-2xl flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-50"
              >
                {connectingProvider === 'Apple ID' ? (
                  <Loader2 className="w-3.5 h-3.5 text-amber-400 animate-spin" />
                ) : (
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 170 170">
                    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-5.03.25-9.87-1.85-14.53-6.35-3.19-3.03-7.07-7.82-11.63-14.37-6.22-8.96-11.16-18.78-14.82-29.47-3.66-10.69-5.49-21.2-5.49-31.53 0-14.36 3.66-26.17 10.98-35.43 7.32-9.26 16.48-13.98 27.48-14.16 4.92 0 10.15 1.15 15.69 3.45 5.54 2.3 9.4 3.45 11.58 3.45 1.9 0 5.86-1.21 11.87-3.63 6.01-2.42 11.16-3.51 15.45-3.27 12.07.96 21.43 5.48 28.09 13.56-10.82 6.53-16.1 15.54-15.85 27.03.25 9.07 3.66 16.63 10.23 22.68 6.57 6.05 14.42 9.53 23.55 10.44-2.45 7.15-5.78 14.18-9.98 21.09zm-26.6-110.19c0 6.64-2.41 12.87-7.23 17.69-4.82 4.82-10.74 7.62-17.76 8.4-1.01-7.25 1.4-13.88 6.22-19.89 4.82-6.01 10.9-9.52 18.24-10.53.13 1.45.25 2.89.53 4.33z" />
                  </svg>
                )}
                <span>Apple ID</span>
              </button>

              <button
                type="button"
                disabled={!!connectingProvider}
                onClick={() => handleSocialSignIn('phone')}
                className="py-2.5 px-3 bg-emerald-700 dark:bg-emerald-800 text-white hover:bg-emerald-600 font-bold text-[11px] rounded-2xl flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-50"
              >
                {connectingProvider === 'Mobile SMS' ? (
                  <Loader2 className="w-3.5 h-3.5 text-white animate-spin" />
                ) : (
                  <Smartphone className="w-3.5 h-3.5 text-amber-300" />
                )}
                <span>Phone / OTP</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-slate-400 dark:text-slate-600 my-1">
            <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1" />
            <span className="text-[10px] uppercase font-bold text-slate-400">or use email</span>
            <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1" />
          </div>

          {/* Error Feedback */}
          {errorMsg && (
            <div className="p-3 bg-red-100 dark:bg-red-950/80 text-red-900 dark:text-red-200 border border-red-300 dark:border-red-800 rounded-xl text-xs font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* LOGIN FORM */}
          {mode === 'login' && (
            <form onSubmit={handleLoginSubmit} className="space-y-3">
              {/* Credentials Helper Box */}
              <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-xl text-[11px] text-emerald-900 dark:text-emerald-200 space-y-1">
                <div className="font-extrabold flex items-center gap-1 text-emerald-700 dark:text-emerald-400">
                  <Sparkles className="w-3.5 h-3.5" /> Sign In To Your Fan Account
                </div>
                <div className="text-[10px] text-emerald-800/80 dark:text-emerald-300/80 pt-0.5">
                  Enter your email and password, or click "Register / Sign Up" to create your personal profile.
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-700 dark:text-emerald-200 flex items-center gap-1">
                  <Mail className="w-3 h-3 text-emerald-600" /> Email Address
                </label>
                <input
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs rounded-xl p-2.5 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-amber-400"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-700 dark:text-emerald-200 flex items-center gap-1">
                  <Lock className="w-3 h-3 text-emerald-600" /> Password
                </label>
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs rounded-xl p-2.5 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-amber-400"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 hover:bg-amber-300 shadow-md active:scale-[0.98] transition-all"
              >
                <LogIn className="w-4 h-4" /> Sign In & Access App
              </button>
            </form>
          )}

          {/* REGISTER FORM */}
          {mode === 'register' && (
            <form onSubmit={handleRegisterSubmit} className="space-y-3">
              
              {/* Photo Choice: Preset Avatar vs Custom Upload */}
              <div className="p-2.5 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-800 dark:text-emerald-200">
                  <span>Profile Photo</span>
                  <span className="text-[10px] text-amber-500">Avatar vs Photo Upload</span>
                </div>

                <div className="grid grid-cols-2 gap-1 bg-slate-200 dark:bg-slate-700 p-0.5 rounded-xl text-center text-[10px] font-bold">
                  <button
                    type="button"
                    onClick={() => setPhotoTab('preset')}
                    className={`py-1 rounded-lg ${photoTab === 'preset' ? 'bg-white dark:bg-slate-900 text-amber-500 shadow-sm' : 'text-slate-600 dark:text-slate-300'}`}
                  >
                    <ImageIcon className="w-3 h-3 inline mr-1" /> Preset Avatars
                  </button>
                  <button
                    type="button"
                    onClick={() => setPhotoTab('upload')}
                    className={`py-1 rounded-lg ${photoTab === 'upload' ? 'bg-white dark:bg-slate-900 text-amber-500 shadow-sm' : 'text-slate-600 dark:text-slate-300'}`}
                  >
                    <Upload className="w-3 h-3 inline mr-1" /> Upload Photo
                  </button>
                </div>

                {photoTab === 'preset' && (
                  <div className="grid grid-cols-6 gap-1.5 pt-1">
                    {PRESET_AVATARS.map((url, idx) => (
                      <img
                        key={idx}
                        src={url}
                        alt="Preset"
                        onClick={() => setSelectedPhoto(url)}
                        className={`w-9 h-9 rounded-xl object-cover cursor-pointer border-2 ${selectedPhoto === url ? 'border-amber-400 scale-105 ring-2 ring-amber-400/50' : 'border-transparent opacity-70'}`}
                      />
                    ))}
                  </div>
                )}

                {photoTab === 'upload' && (
                  <div className="flex items-center gap-3 pt-1">
                    <img
                      src={selectedPhoto}
                      alt="Upload Preview"
                      className="w-12 h-12 rounded-xl object-cover border-2 border-amber-400 shrink-0"
                    />
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex-1 py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] rounded-xl flex items-center justify-center gap-1.5"
                    >
                      <Camera className="w-3.5 h-3.5" /> Select Photo File
                    </button>
                  </div>
                )}
              </div>

              {/* Name */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-700 dark:text-emerald-200">Full Name *</label>
                <input
                  type="text"
                  value={regName}
                  onChange={(e) => setRegName(e.target.value)}
                  placeholder="e.g. Juma Hamisi"
                  className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs rounded-xl p-2.5 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-amber-400"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-700 dark:text-emerald-200">Email Address *</label>
                <input
                  type="email"
                  value={regEmail}
                  onChange={(e) => setRegEmail(e.target.value)}
                  placeholder="juma.hamisi@gmail.com"
                  className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs rounded-xl p-2.5 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-amber-400"
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-700 dark:text-emerald-200">Password *</label>
                <input
                  type="password"
                  value={regPassword}
                  onChange={(e) => setRegPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs rounded-xl p-2.5 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-amber-400"
                  required
                />
              </div>

              {/* Country & Language */}
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700 dark:text-emerald-200">Country</label>
                  <select
                    value={regCountry}
                    onChange={(e) => setRegCountry(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs rounded-xl p-2 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-amber-400"
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700 dark:text-emerald-200">Language</label>
                  <select
                    value={regLanguage}
                    onChange={(e) => setRegLanguage(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs rounded-xl p-2 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-amber-400"
                  >
                    {LANGUAGES.map((l) => (
                      <option key={l} value={l}>{l}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Favorite Team */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-700 dark:text-emerald-200">Favorite Team</label>
                <select
                  value={regFavoriteTeam}
                  onChange={(e) => setRegFavoriteTeam(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs rounded-xl p-2.5 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-amber-400"
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
                <UserPlus className="w-4 h-4" /> Register & Activate
              </button>
            </form>
          )}

          {/* Security Guarantee Note */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-center">
            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">
              🔒 Encrypted Supporter Authentication • East Africa AFCON Pamoja 2027
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
