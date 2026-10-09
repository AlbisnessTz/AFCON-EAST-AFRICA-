# SportsLab Africa — Enterprise Readiness Plan

**Status:** Working engineering baseline; not a certification or production-readiness claim.  
**Product:** Global, multi-sport scores and sports discovery platform built from Africa.  
**Primary experience:** Public guest browsing; accounts add synchronization and personalization.

## Non-negotiable product rules

1. Never label sample, cached-but-stale, estimated, or unavailable data as live.
2. Every live-data record must retain provider/source identity and provider update time where available; the UI must expose freshness and degrade honestly when data is delayed.
3. Do not invent scores, fixtures, events, statistics, lineups, venues, rankings, biographies, historical facts, or travel details.
4. Keep provider credentials on the server. The client must not call paid/private provider APIs with secret keys.
5. Use a provider adapter and normalized internal contracts so providers can be changed without rewriting screens.
6. Guest users can browse public scores, fixtures, results, competitions, teams, news, and discovery content without registering.
7. Account-only features must be clearly identified and enforced by a trusted backend, not merely hidden in the UI.
8. Maps, stadiums, host-country context, historical sites, heritage, and travel discovery remain first-class features alongside global sports.
9. Do not imply affiliation with CAF, FIFA, leagues, clubs, or data providers without written authorization.
10. A feature is not complete until tests and deployment evidence support the claim.

## Required architecture

- **Client:** responsive React application; accessible keyboard and screen-reader interactions; localized layouts and time display.
- **Sports API:** server-side provider adapters, normalized responses, validation, rate limits, request tracing, and explicit error/freshness metadata.
- **Persistence/cache:** durable database for owned product data and a cache policy designed around each provider's terms, freshness, and rate limits.
- **Identity:** trusted authentication provider or secure server-side identity implementation; hashed passwords only if we operate password storage; secure sessions and account recovery.
- **Operations:** structured logs without secrets, health checks, error monitoring, backups, restore tests, dependency scanning, and documented incident response.
- **Content and discovery:** source-attributed editorial content; verified coordinates and sources for stadiums, host countries, historical sites, and travel listings.

## Data contract requirements

Each provider-sourced item should carry, where applicable:
- stable SportsLab ID and provider ID
- sport, competition, season, participants, and event status
- event start time as an ISO-8601 timestamp with timezone/UTC semantics
- source/provider and source update timestamp
- SportsLab ingestion timestamp
- freshness state such as `fresh`, `stale`, or `unavailable`
- explicit nullable fields rather than invented defaults

Sport-specific models must not assume football-only concepts (for example, innings, sets, periods, quarters, laps, rounds, and match status differ by sport).

## Security, privacy, and accessibility gates

- Use OWASP ASVS as a web/API security verification checklist and OWASP MASVS when native mobile clients are introduced.
- Validate input and authorize operations on the server; apply rate limits to authentication, search, voting, and costly provider-backed endpoints.
- Never store raw passwords, provider secrets, or sensitive tokens in browser local storage.
- Document data collected, purpose, retention, deletion/export procedures, and third-party processors before launch.
- Target WCAG 2.2 AA for the web experience; test keyboard navigation, focus visibility, contrast, reduced motion, text scaling, and screen-reader labels.
- Support small screens, tablets, desktop, slow networks, retryable errors, and clear empty/loading/error states.
- Localize language, number/date formats, time zones, and right-to-left presentation where a supported language requires it.

## Testing and release gates

A release must not be called production-ready until all relevant checks pass:
- TypeScript/lint and optimized production build
- unit tests for normalization, status mapping, freshness and time-zone logic
- integration tests for provider failures, rate limits, malformed responses, retries and cache expiry
- end-to-end tests for guest browsing, sign-in/out, saved items, search, navigation and responsive layouts
- security review of authentication, authorization, secrets, dependency vulnerabilities and API abuse controls
- accessibility review against WCAG 2.2 AA
- backup/restore and operational monitoring checks for the deployed backend
- real-device/browser testing and documented known limitations
- provider licensing/attribution and commercial-use terms reviewed before launch

## Current known limitations (must remain visible to the team)

- The existing app imports data from `src/data/mockData.ts`; this is prototype content, not a verified global live feed.
- The current profile/storage layer is client-side and must not be treated as production authentication or cross-device account storage.
- Social sign-in must use a real OAuth/OIDC provider flow; simulated profile creation is not authentication.
- The current app has not been demonstrated by this document to pass build, test, accessibility, security, or deployment checks.
- Global coverage and update frequency depend on the chosen provider's licensed coverage, plan, rate limits, and documented latency. Do not promise universal coverage or a fixed latency before validating a provider.

## Next engineering sequence

1. Audit current routes, UI state, prototype data, auth/storage, and existing tests.
2. Add automated tests and CI for lint/type-check and production build.
3. Define provider-neutral sport, competition, event, participant, venue, and freshness contracts.
4. Implement a server-only provider adapter using a selected provider after coverage, licensing, latency, and budget review.
5. Build stale/unavailable states and observability before exposing provider-backed scores.
6. Replace client-only authentication with secure server-backed identity and persistence.
7. Validate responsive/accessibility requirements and preserve the maps/history/travel discovery areas.
8. Complete security, licensing, reliability, and operational release gates before public launch.

## Reference standards

- OWASP Application Security Verification Standard (ASVS): https://owasp.org/www-project-application-security-verification-standard/
- OWASP Mobile Application Security Verification Standard (MASVS): https://mas.owasp.org/MASVS/
- W3C WCAG 2.2: https://www.w3.org/TR/WCAG22/

These are engineering references, not claims of certification or compliance.
