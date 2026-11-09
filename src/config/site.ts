/**
 * Central site configuration — single source of truth for SEO, structured data,
 * sitemap, robots and social metadata.
 *
 * ⚠️ REPLACE the placeholder values below with Covartex's real details before
 * going to production (domain, address, phone, email, social profile URLs).
 */
import type { Locale } from '@/i18n/config';

export { locales, defaultLocale } from '@/i18n/config';
export type { Locale } from '@/i18n/config';

// Production origin. Override per-environment with NEXT_PUBLIC_SITE_URL.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.covartex.com'
).replace(/\/$/, '');

export const siteConfig = {
  name: 'Covartex',
  shortName: 'Covartex',
  url: SITE_URL,
  ogImage: `${SITE_URL}/opengraph-image`,
  // ⚠️ Placeholder contact details — replace with real NAP for local SEO.
  email: 'contact@covartex.com',
  phone: '+33 1 23 45 67 89',
  phoneHref: 'tel:+33123456789',
  address: {
    street: '10 rue de l’Exemple',
    city: 'Paris',
    region: 'Île-de-France',
    postalCode: '75001',
    country: 'FR',
  },
  // ⚠️ Placeholder social URLs — replace with real profile links (used in sameAs).
  social: {
    linkedin: 'https://www.linkedin.com/company/covartex',
    instagram: 'https://www.instagram.com/covartex',
    facebook: 'https://www.facebook.com/covartex',
  },
  /**
   * Third-party profiles that prove the entity exists (Google Business
   * Profile, Clutch, Sortlist, Malt, Trustpilot, Crunchbase, Wikidata…).
   * Search engines and AI assistants cross-check these to trust and
   * recommend a brand. Add each real URL as soon as the profile is live;
   * they are merged into sameAs.
   */
  profiles: [] as string[],
  /** Remote delivery worldwide; legal services cover French law only. */
  languages: ['French', 'English'],
} as const;

// Localized SEO copy for the homepage and brand.
export const siteMeta: Record<
  Locale,
  { title: string; description: string; keywords: string[] }
> = {
  fr: {
    title: 'Covartex — Création de site web, SEO, IA & services juridiques externalisés',
    description:
      'Agence web et IA : création de site web, référencement Google (SEO), visibilité dans ChatGPT (AEO/GEO), applications mobiles, SaaS sur mesure, automatisation et services juridiques externalisés. Devis gratuit sous 48 h.',
    keywords: [
      'création site web',
      'agence web',
      'référencement Google',
      'SEO',
      'AEO',
      'GEO',
      'application mobile',
      'SaaS sur mesure',
      'automatisation',
      'solutions IA',
      'services juridiques externalisés',
      'formalités juridiques',
      'devis gratuit',
    ],
  },
  en: {
    title: 'Covartex — Website Design, SEO, AI & Outsourced Legal Services',
    description:
      'Web and AI agency working worldwide: website design, SEO, AI search visibility (AEO/GEO), mobile apps, custom SaaS, automation and outsourced legal services. Free quote in 48 h.',
    keywords: [
      'website design',
      'web agency',
      'SEO',
      'AEO',
      'GEO',
      'mobile app development',
      'custom SaaS',
      'automation',
      'AI solutions',
      'outsourced legal services',
      'legal formalities',
      'free quote',
    ],
  },
};
