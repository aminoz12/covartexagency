/**
 * Push every sitemap URL to IndexNow (Bing, Yandex, Seznam, Naver…).
 * Bing's index feeds ChatGPT search and Microsoft Copilot, so this gets
 * new and updated pages in front of AI answers within hours, not weeks.
 *
 * Run after each production deploy:  npm run indexnow
 * The key file is public/<KEY>.txt and must stay deployed.
 */
const KEY = 'c910f6b51b3c490697b92406594ab5a8';
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.covartex.com').replace(/\/$/, '');

const res = await fetch(`${SITE_URL}/sitemap.xml`);
if (!res.ok) throw new Error(`sitemap.xml responded ${res.status}`);
const xml = await res.text();
const urlList = [...new Set([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim()))];
if (urlList.length === 0) throw new Error('no <loc> entries found in sitemap.xml');

const submit = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: new URL(SITE_URL).host,
    key: KEY,
    keyLocation: `${SITE_URL}/${KEY}.txt`,
    urlList,
  }),
});

console.log(`IndexNow: ${submit.status} ${submit.statusText} — ${urlList.length} URLs submitted`);
if (submit.status >= 400) process.exit(1);
