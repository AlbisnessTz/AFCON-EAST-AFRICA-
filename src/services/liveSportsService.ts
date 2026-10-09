export type LiveApiConnectionState =
  | 'checking'
  | 'configured'
  | 'not-configured'
  | 'unreachable';

interface ApiHealthResponse {
  status: 'ok';
  service: 'sportslab-africa-api';
  liveDataConfigured: boolean;
  timestamp: string;
}

/**
 * Checks only the same-origin backend health endpoint.
 * It never reads or sends the provider API key from the browser.
 */
export async function checkLiveApiHealth(): Promise<LiveApiConnectionState> {
  try {
    const response = await fetch('/api/health', {
      headers: { Accept: 'application/json' },
      signal: AbortSignal.timeout(4_000),
      cache: 'no-store',
    });

    if (!response.ok) return 'unreachable';

    const payload = (await response.json()) as Partial<ApiHealthResponse>;
    if (
      payload.status !== 'ok' ||
      payload.service !== 'sportslab-africa-api' ||
      typeof payload.liveDataConfigured !== 'boolean'
    ) {
      return 'unreachable';
    }

    return payload.liveDataConfigured ? 'configured' : 'not-configured';
  } catch {
    return 'unreachable';
  }
}
