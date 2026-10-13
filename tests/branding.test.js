import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL(path, import.meta.url), 'utf8');

test('PWA manifest and document metadata consistently use SportsLab Africa', async () => {
  const manifest = JSON.parse(await read('../public/manifest.webmanifest'));
  const html = await read('../index.html');
  const icon = await read('../public/icons/sportslab-africa.svg');
  assert.equal(manifest.name, 'SportsLab Africa');
  assert.equal(manifest.short_name, 'SportsLab');
  assert.equal(manifest.theme_color, '#030406');
  assert.match(html, /rel="manifest" href="\/manifest\.webmanifest"/);
  assert.match(html, /<title>SportsLab Africa<\/title>/);
  assert.match(icon, /SPORTSLAB/);
});

test('production app registers its PWA service worker', async () => {
  const entry = await read('../src/main.tsx');
  const worker = await read('../public/sw.js');
  assert.match(entry, /navigator\.serviceWorker\.register\('\/sw\.js'\)/);
  assert.match(worker, /sportslab-africa-shell-v1/);
  assert.match(worker, /url\.pathname\.startsWith\('\/api\/'\)/);
});

test('social sign-in never creates hard-coded provider identities', async () => {
  const auth = await read('../src/components/AuthGateModal.tsx');
  assert.match(auth, /No account was created/);
  assert.doesNotMatch(auth, /name: 'Google Supporter'/);
  assert.doesNotMatch(auth, /name: 'Apple Supporter'/);
  assert.doesNotMatch(auth, /name: 'Mobile Supporter'/);
});

test('old fabricated social profiles are removed during local migration', async () => {
  const storage = await read('../src/services/storageService.ts');
  assert.match(storage, /isLegacyFakeProfile/);
  assert.match(storage, /Previous builds simulated social sign-in/);
});
