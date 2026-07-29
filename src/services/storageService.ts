import { UserProfile, AppSettings } from '../types';

const PROFILE_KEY = 'kickoff_africa_user_profile_v1';
const SETTINGS_KEY = 'kickoff_africa_app_settings_v1';
const USERS_KEY = 'kickoff_africa_registered_users_v1';

export const DEFAULT_PROFILE: UserProfile = {
  name: 'AFCON Supporter',
  email: '',
  password: '',
  country: 'Tanzania',
  language: 'English',
  favoriteTeamId: 'tan',
  photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  avatarType: 'preset',
  isAuthenticated: false,
  savedMatches: [],
  savedArticles: []
};

export const DEFAULT_SETTINGS: AppSettings = {
  language: 'en',
  darkMode: false,
  pushMatchReminders: true,
  pushGoalAlerts: true,
  pushBreakingNews: true,
  dataSaver: false
};

export const StorageService = {
  getProfile(): UserProfile {
    try {
      const stored = localStorage.getItem(PROFILE_KEY);
      return stored ? JSON.parse(stored) : DEFAULT_PROFILE;
    } catch {
      return DEFAULT_PROFILE;
    }
  },

  saveProfile(profile: UserProfile): void {
    try {
      localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
      // If user is authenticated, also sync to registered users list
      if (profile.email) {
        const users = this.getRegisteredUsers();
        const existingIdx = users.findIndex(u => u.email.toLowerCase() === profile.email.toLowerCase());
        if (existingIdx >= 0) {
          users[existingIdx] = profile;
        } else {
          users.push(profile);
        }
        localStorage.setItem(USERS_KEY, JSON.stringify(users));
      }
    } catch (e) {
      console.error('Failed to save profile to localStorage', e);
    }
  },

  getRegisteredUsers(): UserProfile[] {
    try {
      const stored = localStorage.getItem(USERS_KEY);
      if (stored) return JSON.parse(stored);
      // Seed default user if none stored
      const initial = [DEFAULT_PROFILE];
      localStorage.setItem(USERS_KEY, JSON.stringify(initial));
      return initial;
    } catch {
      return [DEFAULT_PROFILE];
    }
  },

  registerUser(newUser: UserProfile): UserProfile {
    const users = this.getRegisteredUsers();
    const existing = users.find(u => u.email.toLowerCase() === newUser.email.toLowerCase());
    if (existing) {
      throw new Error('An account with this email address already exists. Please sign in instead.');
    }
    const profileWithAuth: UserProfile = {
      ...newUser,
      isAuthenticated: true
    };
    users.push(profileWithAuth);
    try {
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
      localStorage.setItem(PROFILE_KEY, JSON.stringify(profileWithAuth));
    } catch (e) {
      console.error('Failed to save registered user', e);
    }
    return profileWithAuth;
  },

  loginUser(email: string, pass: string): UserProfile {
    const users = this.getRegisteredUsers();
    const found = users.find(
      u => u.email.toLowerCase() === email.toLowerCase() && (u.password === pass || !u.password)
    );
    if (!found) {
      throw new Error('Invalid email or password. Please check your credentials or register a new account.');
    }
    const authenticatedProfile: UserProfile = {
      ...found,
      isAuthenticated: true
    };
    this.saveProfile(authenticatedProfile);
    return authenticatedProfile;
  },

  logoutUser(): UserProfile {
    const current = this.getProfile();
    const unauthenticated: UserProfile = {
      ...current,
      isAuthenticated: false
    };
    try {
      localStorage.setItem(PROFILE_KEY, JSON.stringify(unauthenticated));
    } catch (e) {
      console.error('Failed to logout user', e);
    }
    return unauthenticated;
  },

  getSettings(): AppSettings {
    try {
      const stored = localStorage.getItem(SETTINGS_KEY);
      return stored ? JSON.parse(stored) : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  },

  saveSettings(settings: AppSettings): void {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch (e) {
      console.error('Failed to save settings to localStorage', e);
    }
  }
};

