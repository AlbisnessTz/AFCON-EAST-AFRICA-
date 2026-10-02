# KickOff Africa — Project Blueprint

## Product Vision
KickOff Africa is a production-oriented African football platform combining live football information, AFCON and African competitions, news, teams, travel information and fan community features.

The product is designed as a real business application. Development-only mock data must remain clearly separated from production data sources and must never be presented as live information.

## Core Areas
1. Home — featured matches, live/upcoming matches, latest news and tournament highlights.
2. Matches — fixtures, live scores, results, match details, H2H, form and statistics.
3. Tournaments — AFCON, qualifiers and selected African competitions with groups and knockout stages.
4. Teams — national/club teams, squads, profiles, statistics and form.
5. News — football news organized by competition, team and topic.
6. Fan Zone — predictions, polls, favourites and future community discussions.
7. Travel — host cities, stadiums and practical match-day information.
8. Profile — favourites, saved content and notifications.
9. Settings — language, appearance, notification and data preferences.

## Technical Direction
- Frontend: React + TypeScript + Vite.
- UI: existing Tailwind-based styling and Lucide icons.
- Data: development mock data is temporary and isolated under `src/data`.
- API boundary: remote football data must enter through typed service interfaces rather than direct provider imports inside screens.
- Authentication: the current local prototype is temporary; production authentication will be introduced behind the application boundary.
- Backend: persistent backend services will provide matches, teams, tournaments, news, users, predictions and notifications.
- Admin: a protected administration area will manage operational content and business settings.
- PWA: prepare the application for installation on mobile and desktop.
- Monetization: prepare controlled placements for advertising, sponsorships and future premium features.

## Development Milestones
### M1 — Foundation
- Document architecture and product scope.
- Establish reusable football data contracts.
- Establish a service boundary for remote data.
- Preserve existing screens while preparing them for real data.

### M2 — Football Core
- Tournament/group/standings model.
- Fixtures and results model.
- Team and player model improvements.
- Match events and statistics contracts.

### M3 — Real Data
- Connect API/backend.
- Replace development-only mock access progressively.
- Add loading, error and empty states.
- Validate timestamps, time zones and data freshness.

### M4 — User & Fan Features
- Real authentication.
- Favourites and saved content.
- Predictions, polls and community features.
- Notifications.

### M5 — Admin, Travel & Monetization
- Host-city/stadium information.
- Protected admin management tools.
- Sponsored content and advertisement placements.
- Business analytics and operational controls.

### M6 — Production
- PWA/install experience.
- Security, performance and accessibility pass.
- Production deployment and monitoring.
- Backup and recovery procedures.
- Privacy policy, terms and other required business/legal pages before public launch.

## Engineering Rules
- Do not duplicate business logic inside screens.
- Prefer typed data contracts over `any`.
- Keep provider/API-specific code inside `src/services`.
- Keep mock/development data inside `src/data`.
- UI components should consume application data, not know where it came from.
- Never describe mock data as live or official data.
- Never claim affiliation with CAF, FIFA or a host federation unless an actual authorization exists.
- Store secrets only in server-side environment configuration; never commit API keys.
- Make incremental commits so each milestone can be reviewed or reverted safely.
