import type { Locale } from '@/i18n/config';
import visibilityTerms from './glossary/visibility';
import buildTerms from './glossary/build';
import legalTerms from './glossary/legal';

/**
 * Glossary (/glossary/[slug]): one short, answer-first definition per term.
 * Definitions are what search snippets and AI assistants quote most, so the
 * first sentence of each entry must stand alone. Each term links to the
 * service it relates to and to neighbouring terms.
 */

export type TermGroup = 'visibility' | 'build' | 'legal';

export interface TermContent {
  /** Display name: "GEO", "Kbis", "MVP". */
  term: string;
  /** What the acronym stands for, when it is one: "Generative Engine Optimization". */
  expansion?: string;
  /**
   * One self-contained sentence (≤ 35 words) that starts with the term and
   * defines it: the line meant to be quoted.
   */
  definition: string;
  /** 2–3 short paragraphs: how it works, why it matters. */
  body: string[];
  /** 3–5 bullet points. */
  keyPoints?: string[];
  /** One concrete, generic example (no real client). */
  example?: string;
}

export interface TermDef {
  slug: string;
  group: TermGroup;
  /** Related service slug. */
  service?: string;
  /** Related term slugs. */
  related?: string[];
  content: Record<Locale, TermContent>;
}

export const terms: TermDef[] = [...visibilityTerms, ...buildTerms, ...legalTerms];

export interface LocalizedTerm extends TermContent {
  slug: string;
  group: TermGroup;
  service?: string;
  related: string[];
}

export function getTerms(locale: Locale): LocalizedTerm[] {
  return terms
    .map((t) => ({ slug: t.slug, group: t.group, service: t.service, related: t.related ?? [], ...t.content[locale] }))
    .sort((a, b) => a.term.localeCompare(b.term, locale));
}

export function getTerm(slug: string, locale: Locale): LocalizedTerm | undefined {
  return getTerms(locale).find((t) => t.slug === slug);
}

export function getTermSlugs(): string[] {
  return terms.map((t) => t.slug);
}

export const termGroups: TermGroup[] = ['visibility', 'build', 'legal'];

/**
 * "GEO (Generative Engine Optimization)" for acronyms; the term alone
 * otherwise. A translation in the expansion ("… (produit minimum viable)")
 * is dropped so the title never nests parentheses.
 */
export function termTitle({ term, expansion }: Pick<TermContent, 'term' | 'expansion'>): string {
  if (!expansion || /[\s(]/.test(term)) return term;
  return `${term} (${expansion.replace(/\s*\(.*\)\s*$/, '')})`;
}
