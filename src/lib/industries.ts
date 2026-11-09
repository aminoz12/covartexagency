import type { Locale } from '@/i18n/config';
import type { Tone } from '@/lib/services';
import cabinetsAvocats from './industries/cabinets-avocats';
import professionsSante from './industries/professions-sante';
import artisansBtp from './industries/artisans-btp';
import organismesFormation from './industries/organismes-formation';
import startupsSaas from './industries/startups-saas';

/**
 * Industry pages (/industries/[slug]): what Covartex does for one sector,
 * in that sector's words. They answer "which agency for <sector>?" — the
 * way people ask search engines and AI assistants for a recommendation —
 * and route to the service pages. One file per industry in
 * src/lib/industries/, both locales in each.
 *
 * Only general, verifiable statements about a sector (its rules, its usual
 * problems). No invented clients, figures or results.
 */

export interface IndustryContent {
  /** Sector name for cards, breadcrumbs, footer: "Cabinets d’avocats". */
  name: string;
  /** Page H1: "Agence web et juridique pour cabinets d’avocats". */
  title: string;
  /** <title> (the layout appends " | Covartex"), ≤ 60 characters. */
  metaTitle: string;
  /** Meta description, 140–160 characters. */
  metaDescription: string;
  /** One-sentence promise under the H1. */
  promise: string;
  /** One line for the industry card on the index page. */
  cardText: string;
  /**
   * Answer-first summary ("En bref" / "In short"): 3–4 self-contained
   * sentences that each make sense quoted alone, naming Covartex and the
   * sector explicitly.
   */
  summary: string[];
  /** The sector's recurring problems, 3–4. */
  challenges: { title: string; description: string }[];
  /** How each Covartex service applies to this sector, in the order of `IndustryDef.services`. */
  solutions: { service: string; title: string; text: string }[];
  /** Sector rules a provider must respect (ethics, hosting, certification). Optional. */
  rules?: { title: string; paragraphs: string[]; list?: string[] };
  faqs: { q: string; a: string }[];
}

export interface IndustryDef {
  slug: string;
  /** Practice area whose colour the page wears. */
  tone: Tone;
  /** Service slugs, most relevant first. Must match `content[locale].solutions`. */
  services: string[];
  /** Case-study slugs from agencyData.ts to show on the page. */
  projects: string[];
  /** Where the offer applies: French rules (default) or anywhere. */
  area?: 'france' | 'worldwide';
  content: Record<Locale, IndustryContent>;
}

export const industries: IndustryDef[] = [cabinetsAvocats, professionsSante, artisansBtp, organismesFormation, startupsSaas];

export interface LocalizedIndustry extends IndustryContent {
  slug: string;
  tone: Tone;
  services: string[];
  projects: string[];
  area: 'france' | 'worldwide';
}

export function getIndustries(locale: Locale): LocalizedIndustry[] {
  return industries.map((i) => ({
    slug: i.slug,
    tone: i.tone,
    services: i.services,
    projects: i.projects,
    area: i.area ?? 'france',
    ...i.content[locale],
  }));
}

export function getIndustry(slug: string, locale: Locale): LocalizedIndustry | undefined {
  return getIndustries(locale).find((i) => i.slug === slug);
}

export function getIndustrySlugs(): string[] {
  return industries.map((i) => i.slug);
}

/** Industries that use a given service — for cross-links from service pages. */
export function industriesForService(serviceSlug: string, locale: Locale): LocalizedIndustry[] {
  return getIndustries(locale).filter((i) => i.services.includes(serviceSlug));
}
