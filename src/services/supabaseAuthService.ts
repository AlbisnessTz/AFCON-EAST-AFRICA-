import { createClient, type SupabaseClient, type User } from '@supabase/supabase-js';
import type { UserProfile } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim();
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim();

export const isSupabaseAuthConfigured = Boolean(supabaseUrl && supabaseAnonKey);

/**
 * A browser-safe Supabase client. It intentionally accepts only the public anon/publishable
 * key; never use a service-role key in this client or in any VITE_ variable.
 */
export const supabase: SupabaseClient | null = isSupabaseAuthConfigured
  ? createClient(supabaseUrl!, supabaseAnonKey!, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })
  : null;

export function mapSupabaseUserToProfile(user: User): Partial<UserProfile> {
  const metadata = user.user_metadata ?? {};
  const nameValue = metadata.full_name ?? metadata.name ?? metadata.display_name;
  const name = typeof nameValue === 'string' && nameValue.trim()
    ? nameValue.trim()
    : (user.email?.split('@')[0] || 'Sports Supporter');

  return {
    name,
    email: user.email ?? '',
    isAuthenticated: true,
    // Preserve app preferences/bookmarks elsewhere; these are account defaults only.
  };
}

function requireSupabase(): SupabaseClient {
  if (!supabase) {
    throw new Error('Account sign-in is not configured yet. Please try again later.');
  }
  return supabase;
}

export async function registerWithEmail(email: string, password: string, fullName: string) {
  const client = requireSupabase();
  return client.auth.signUp({
    email: email.trim().toLowerCase(),
    password,
    options: { data: { full_name: fullName.trim() } },
  });
}

export async function signInWithEmail(email: string, password: string) {
  return requireSupabase().auth.signInWithPassword({
    email: email.trim().toLowerCase(),
    password,
  });
}

export async function signInWithGoogle(redirectTo = window.location.origin) {
  return requireSupabase().auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo },
  });
}

export async function signOutSupabase() {
  return requireSupabase().auth.signOut();
}

export async function getCurrentSupabaseUser() {
  return requireSupabase().auth.getUser();
}

export function onSupabaseAuthStateChange(
  callback: (user: User | null) => void,
) {
  const client = requireSupabase();
  return client.auth.onAuthStateChange((_event, session) => {
    callback(session?.user ?? null);
  });
}
