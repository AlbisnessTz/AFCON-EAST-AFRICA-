# Supabase authentication foundation

SportsLab Africa has a Supabase Auth service layer prepared, but authentication is **not yet connected to the Profile screen or verified end-to-end**. Do not describe login as production-ready until the integration, provider configuration, and tests are complete.

## Configuration

1. Create or open the SportsLab Africa project at https://supabase.com/dashboard.
2. In Project Settings / API, copy the Project URL and the public anon/publishable key.
3. Set these as frontend build environment variables in the local development environment and hosting provider:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. In Supabase Authentication settings, configure the app's local and production redirect URLs.
5. Enable Email provider. Configure email confirmation and password recovery settings.
6. For Google sign-in, enable the Google provider in Supabase and add the Google OAuth client ID/secret in the Supabase dashboard. Set the exact Supabase callback URL in Google Cloud and the app redirect URLs in Supabase.
7. Never use or expose a Supabase `service_role`/secret key in frontend code, `VITE_` variables, or GitHub.

## Current status and limitations

- `src/services/supabaseAuthService.ts` provides a browser client guarded by environment configuration, email registration/login, Google OAuth initiation, sign-out, current-user retrieval, auth-state subscription, and user metadata mapping.
- This is an integration foundation only. Existing ProfileScreen and view-model still use local browser storage and have not yet been migrated to this service.
- Account profile fields such as favorites/bookmarks require a deliberate persistence strategy and access-controlled database tables before they sync across devices.
- Google OAuth will not work until provider credentials and redirect URLs are configured.
- Do not migrate or remove the existing prototype login until the real sign-in flows and migration behavior are tested.
- The public anon/publishable key is not a secret, but it is not an authorization mechanism; configure Row Level Security for any user data stored in Supabase.
