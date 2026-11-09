# Covartex — Site architecture, SEO & launch notes

## Structure (September 2026 redesign)

Bilingual, conversion-focused site. French is the default and lives at the root, English under `/en`.

| Logical path | FR URL | EN URL |
|---|---|---|
| Home | `/` | `/en` |
| Services (4 practice areas) | `/services` | `/en/services` |
| Service detail (10) | `/services/<slug>` | `/en/services/<slug>` |
| Work | `/portfolio`, `/portfolio/<slug>` | `/en/portfolio/...` |
| Blog | `/blog`, `/blog/<slug>` | `/en/blog/...` |
| About | `/about` | `/en/about` |
| Free quote (contact) | `/contact` (`?service=<slug>` preselects) | `/en/contact` |
| Legal (noindex) | `/privacy`, `/terms` | `/en/privacy`, `/en/terms` |

Slugs are identical in both languages so the language switcher works on every page.

### How routing works
- `src/middleware.ts` rewrites unprefixed requests to `/fr/*` internally and redirects explicit `/fr/*` to the clean URL. `/en/*` passes through.
- All pages live under `src/app/[locale]/`; `[locale]/layout.tsx` is the root layout (fonts, JSON-LD, nav, footer) and pre-renders both locales.
- `src/i18n/config.ts` — locales, `localeHref()`, hreflang helper.
- `src/i18n/dictionary.ts` — UI strings (FR/EN).
- Content with its own FR/EN records: `src/lib/services.ts` (4 categories, 10 services), `src/lib/agencyData.ts` (case studies, stats, testimonials, home FAQ), `src/lib/blog.ts` (posts).
- `src/lib/seo.ts` — `pageMetadata()` builds canonical + hreflang + Open Graph per page.

### Service catalogue
1. **Site web & Visibilité** — Création de site web · Être en première page Google (SEO) · Être cité par ChatGPT & les IA (AEO/GEO)
2. **Applications sur mesure** — Applications mobiles · SaaS sur mesure
3. **IA & Automatisation** — Solutions IA sur mesure · Automatisation des tâches
4. **Services juridiques externalisés** — Sous-traitance des formalités · Mise en place d’équipes juridiques · Management et supervision

To add a service: append to `services` in `src/lib/services.ts` with both locales. It appears on the homepage, `/services`, the footer, the contact select and the sitemap automatically.

### Conversion
- Every page has the same primary CTA: **Devis gratuit / Free quote** → `/contact`. Service pages and category cards pass `?service=` so the form is preselected.
- The reassurance line (Réponse sous 24 h · Devis sous 48 h · Sans engagement) is in `dictionary.common.reassurance` — keep it true.
- Contact form posts to `POST /api/contact`. Set **`CONTACT_WEBHOOK_URL`** (n8n / Make / Zapier / Formspree / CRM webhook) in the environment; without it leads are only logged server-side.

## ⚠️ Replace before production
- `src/config/site.ts`: `SITE_URL` (or `NEXT_PUBLIC_SITE_URL`), email, phone, address, social URLs.
- `src/lib/agencyData.ts`: case studies, stats and testimonials are **illustrative placeholders** — replace with real clients (with permission).
- `src/app/[locale]/privacy` and `terms`: legal templates — complete entity details and get them reviewed.
- Set `CONTACT_WEBHOOK_URL`.
- After deploy: Search Console + Bing Webmaster Tools (both locales), `npm run indexnow`, Rich Results Test (Organization, Service, FAQPage, BreadcrumbList, BlogPosting), open `/llms.txt` and `/robots.txt` to check them.

## Design system (v4 — "ember", November 2026)
Built from a design reference the owner chose: a dark "creative agency" look with a pink → orange gradient. The previous v3.1 "cinematic" version (video hero, teal-navy) is backed up at `Desktop\Covartex-backup-v3.1-2026-11-06`.
- Ground `#141414` lit by fixed magenta / amber / ember glows; bands (`.band`) on `#1b1b1b`. Text is white with alpha steps; every step used for text passes WCAG AA (lowest `/55`).
- Signature: `--grad` (`#ff4f9a` → `#ff7a59` → `#ff9a3c`). `.text-gradient` for the key word of a headline ("Web & IA." / "Agency."), `.text-silver` (white → grey) for headline lines and every inner-page H1, `.spark` (orange four-point star) as separator and eyebrow marker.
- Homepage order: `Hero` (two-line H1, faceted orb `HeroArt`, stat cards, pitch + CTA) → `Marquee` (tilted scrolling ribbon) → "Nos services" with `ServiceShowcase` (alternating text + `ServiceVisual` illustration per area) → why (heading + the two figures the hero doesn't show, so no number appears twice) → work → process → testimonials (initials avatars) → FAQ → `CtaBand`. The footer has no CTA row of its own, because `CtaBand` sits right above it.
- Case studies use `ProjectCard` everywhere (homepage, portfolio): the first entry of `results` is the headline figure, shown big on a `.project-cover` lit with the area tone. Put the strongest result first.
- `HeroArt` is generated geometry (`hero-art-data.ts`: icosphere, jittered, lit, culled — regenerate rather than hand-edit). `ServiceVisual` draws the four area illustrations in SVG. Both are inline SVG: no image requests, no client JS.
- Surfaces: `.glass-panel` / `.liquid-glass` (translucent, 1px gradient edge), `.card`, `.stat-card`, `.cta-panel` (lit from its corners). No `backdrop-filter` except the sticky nav and the mobile CTA bar.
- **Practice-area tones** (warm family, `services.ts` → `categories[].tone`): web pink `#FF5FA2`, apps violet `#B07CFF`, AI orange `#FF9A3C`, legal gold `#F5C26B`. `toneClass(tone)` sets `--tone` for eyebrow sparks, `.glow-dot`, `.check-dot`, `.tone-icon`, `.tone-edge`, `.tone-dot`, `.orb-tone`, card hover glow. Outside an area `--tone` is the signature orange.
- Buttons: `.btn` is uppercase; `.btn-primary` = white pill (the one CTA, "Devis gratuit"), `.btn-secondary` = outline pill ("En savoir plus ↗").
- Type: Lexend (variable, self-hosted by next/font) for everything, headings weight 500; the `font-mono` utility maps to Lexend too (uppercase labels). Code samples use the system monospace. No hot-linked fonts. Form fields are 16px so iOS doesn't zoom on focus.
- Motion: `Reveal` (fade-rise on scroll), CSS `rise` entrances, orb float and bead bob, ribbon scroll — all stop under `prefers-reduced-motion`.
- Tailwind v4 note: utilities live in a cascade layer, so the unlayered classes in `globals.css` win over a conflicting utility on the same element (e.g. `.eyebrow`'s `display`). Wrap the element instead of overriding.

## SEO already in place
- Per-page `<title>`, description, canonical and `hreflang` (fr / en / x-default → **en**, so the rest of the world lands on English).
- Sitemap with one entry per locale and alternates; robots.txt; web manifest; OG image.
- JSON-LD: Organization (with `knowsAbout`, `areaServed` worldwide, `knowsLanguage`, a full `hasOfferCatalog` built from `services.ts`) + WebSite + ProfessionalService (layout), Service with `areaServed` and Offer/`minPrice` (service pages), FAQPage (home, service pages, posts with `faqs`), BlogPosting linked to its service via `about` (blog), Article (case studies), BreadcrumbList (all inner pages).
- Pages are server components; client JS is limited to the nav, the form, the sticky mobile CTA and the small `Reveal` wrapper (motion/react). The homepage hero is server-rendered SVG + CSS (no video, no client JS), which helps LCP.
- `next.config.ts`: AVIF/WebP images, security headers, no `X-Powered-By`.

## AI visibility (GEO / AEO) layer — November 2026
Goal: be crawlable, understandable and quotable by ChatGPT, Claude, Perplexity, Gemini / AI Overviews and Copilot.
- **robots.txt** (`src/app/robots.ts`) explicitly allows AI search, user-triggered and training crawlers (OAI-SearchBot, ChatGPT-User, GPTBot, Claude-SearchBot, Claude-User, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, Bingbot, CCBot…).
- **/llms.txt** and **/llms-full.txt** (`src/lib/llms.ts`) — Markdown brief and full text of every service, industry page, guide and glossary entry, EN + FR, generated from the same data as the pages. Placeholder case studies/stats/testimonials are excluded on purpose; add them once real.
- **Answer-first articles**: posts take optional `takeaways` (rendered as “En bref / In short” at the top — the block snippets and AI quote) and `faqs`; long posts get a table of contents with anchors.
- **Entity FAQ** on the homepage: “What is Covartex?” and “Do you work outside France?” — the sentences an assistant reuses to describe the brand.
- **Prices**: `priceFrom` on a service (only where its copy already states a price) shows “À partir de / From” on the page and feeds Offer schema + llms.txt. Keep it in sync with the service FAQ.
- **IndexNow**: key file `public/c910f6b51b3c490697b92406594ab5a8.txt`; run `npm run indexnow` after each production deploy. Bing’s index feeds ChatGPT search and Copilot.
- **Industry pages** (`/industries`, `/industries/<slug>`; data in `src/lib/industries/<slug>.ts`, one file per sector, both locales): law firms, healthcare practices, trades & construction, training organisations, startups. They answer “which agency for <sector>?”, the way people ask assistants for a recommendation. Each has an answer-first “En bref / In short” block, the sector’s problems, one solution per service (linking to the service page), the profession’s rules, FAQ (FAQPage), and `Service` JSON-LD with a `BusinessAudience`. They are linked from the nav, the footer and every matching service page (“Pour votre secteur”). Statements about a sector stay general and verifiable. No invented clients or figures.
- **Glossary** (`/glossary`, `/glossary/<slug>`; data in `src/lib/glossary/{visibility,build,legal}.ts`): one self-contained definition sentence per term (the quotable line), then explanation, key points, an example, related terms, and links to the service and its guides. Emits `DefinedTerm` / `DefinedTermSet` JSON-LD. All definitions are also listed in llms.txt. Service pages link to their terms.
- **Sitemap lastmod** uses `CONTENT_UPDATED` in `src/app/sitemap.ts` (posts use their own dates). Bump it when services, industries, glossary or case studies change. Never use `new Date()`: a lastmod that moves on every build is ignored by Google.

### Adding an industry or a glossary term
- Industry: create `src/lib/industries/<slug>.ts` exporting a default `IndustryDef` (`solutions` in the same order as `services`; `area: 'worldwide'` if the offer isn’t tied to French rules), add it to the array in `src/lib/industries.ts` and an icon in `src/components/industry-icons.ts`.
- Term: append a `TermDef` to the right file in `src/lib/glossary/`. The first sentence (`definition`) must start with the term and stand alone. Use only existing slugs in `related`.

### Adding a blog post
Create `src/lib/posts/<slug>.ts` exporting a default `PostDef` (both locales, `takeaways` + `faqs` strongly recommended) and add it to the `posts` array in `src/lib/blog.ts`. It is picked up by /blog, the sitemap, llms.txt and llms-full.txt automatically.

## What actually makes AI assistants recommend an agency (off-site — do these)
On-site work makes Covartex *understandable*; assistants *recommend* brands that independent sources vouch for. In order of impact:
1. **Real proof on the site**: replace the placeholder case studies, stats and testimonials with real ones (named, with permission). Fake reviews are illegal in France/EU (Code de la consommation, Omnibus directive) and assistants cross-check claims.
2. **Review & directory profiles** with consistent name/description/URL: Google Business Profile, Clutch, Sortlist, GoodFirms, DesignRush, Malt, Trustpilot, LinkedIn company page, Crunchbase. Add every live URL to `siteConfig.profiles` (merged into `sameAs`).
3. **Get listed in “best agencies” lists** — assistants lean heavily on these listicles when asked “which agency for X?”. Target lists per service and per market (FR + EN).
4. **Bing Webmaster Tools + Google Search Console** for both `/` and `/en`, sitemaps submitted, `npm run indexnow` after deploys.
5. **Wikidata item** for Covartex once there is independent coverage (press, directories) to cite.
6. **Monthly AI-visibility check**: ask ChatGPT, Perplexity, Gemini and Copilot the 10–20 questions clients ask (“best AI SEO agency”, “agence création site web Paris”, …) and track whether Covartex is cited and which sources are.

## 🛑 Build environment note
This dev machine has ~3.4 GB RAM with <500 MB free; `next build` may run out of memory here. Build on another machine or with `NODE_OPTIONS=--max-old-space-size=4096 next build`.
