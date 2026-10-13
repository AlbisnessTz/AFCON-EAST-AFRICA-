# Authentication status — SportsLab Africa

## Current behavior

- Email registration asks users to enter their own display name and stores that name in the local browser profile.
- Email sign-in loads the saved profile name.
- Earlier Google, Apple and phone buttons created fabricated sample identities. Those buttons have been changed so they no longer authenticate a user or create a fake profile.
- Existing fabricated sample identities are removed from the active local profile during migration, while saved match/article bookmarks are retained.

## Important limitation

The current email account flow is a front-end prototype using browser local storage; it is **not production-grade authentication**. Passwords are not protected by a trusted identity backend. Google OAuth, Apple sign-in and phone OTP are not connected yet.

Before public production launch, connect a real authentication provider and verify identities server-side. Use the verified provider profile's display name first, then the email address as a fallback; never infer a real identity from a provider label. Do not store provider access tokens or plain-text passwords in browser storage.

## PWA

The project now includes a SportsLab Africa web manifest, SVG app icon, and service worker for the app shell. This is a Progressive Web App, not a published or digitally signed Android APK. Verify installability on the actual deployed HTTPS origin; preview environments can behave differently.
