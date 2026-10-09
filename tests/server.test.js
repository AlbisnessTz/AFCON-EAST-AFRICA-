import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeLiveFixtures } from '../server.js';

const fixturePayload = {
  response: [{
    fixture: {
      id: 98765,
      date: '2026-10-09T12:00:00+00:00',
      status: { short: '2H', elapsed: 63 },
      venue: { name: 'National Stadium', city: 'Dar es Salaam' },
    },
    league: { id: 88, name: 'Premier League', country: 'Tanzania', season: 2026 },
    teams: {
      home: { id: 1, name: 'Home FC', country: 'Tanzania' },
      away: { id: 2, name: 'Away FC', country: 'Tanzania' },
    },
    goals: { home: 2, away: 1 },
  }],
};

test('normalizes a valid live fixture with provider attribution', () => {
  const fetchedAt = '2026-10-09T12:01:00.000Z';
  const [match] = normalizeLiveFixtures(fixturePayload, fetchedAt);

  assert.equal(match.id, '98765');
  assert.equal(match.sport, 'football');
  assert.equal(match.state, 'live');
  assert.equal(match.homeScore, 2);
  assert.equal(match.awayScore, 1);
  assert.equal(match.source.provider, 'API-Football');
  assert.equal(match.source.fetchedAt, fetchedAt);
  assert.equal(match.competition.id, '88');
});

test('maps finished fixtures to finished status', () => {
  const finished = structuredClone(fixturePayload);
  finished.response[0].fixture.status.short = 'FT';
  const [match] = normalizeLiveFixtures(finished);
  assert.equal(match.state, 'finished');
});

test('drops incomplete fixtures rather than inventing identifiers', () => {
  const incomplete = { response: [{ fixture: { date: '2026-10-09T12:00:00Z' } }] };
  assert.deepEqual(normalizeLiveFixtures(incomplete), []);
});

test('rejects an unexpected provider response shape', () => {
  assert.throws(() => normalizeLiveFixtures({ errors: ['invalid key'] }), /unexpected response shape/);
});
