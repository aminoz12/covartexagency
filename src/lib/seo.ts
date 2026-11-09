import type { Metadata } from 'next';
import { languageAlternates, localeHref, ogLocale, type Locale } from '@/i18n/config';
import { siteConfig } from '@/config/site';

interface PageMetadataOptions {
  locale: Locale;
  /** Logical path without locale prefix, e.g. "/services/creation-site-web". */
  path: string;
  title: string;
  description: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
  /** Skip indexing (legal templates, etc.). */
  noindex?: boolean;
}

/**
 * Builds consistent per-page metadata: canonical, hreflang alternates,
 * Open Graph and Twitter cards. The root layout supplies the title
 * template ("%s | Covartex") and metadataBase.
 */
export function pageMetadata({
  locale,
  path,
  title,
  description,
  type = 'website',
  publishedTime,
  modifiedTime,
  tags,
  noindex,
}: PageMetadataOptions): Metadata {
  const url = localeHref(locale, path);
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: ogLocale[locale],
      type,
      ...(type === 'article'
        ? { publishedTime, modifiedTime: modifiedTime ?? publishedTime, tags }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteConfig.name}`,
      description,
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

/** Whole-euro price in the reader's convention: "1 500 €" / "€1,500". */
export function formatEur(amount: number, locale: Locale): string {
  return new Intl.NumberFormat(locale === 'fr' ? 'fr-FR' : 'en-IE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(amount);
}

/** URL-safe anchor from a heading: "Où en êtes-vous ?" → "ou-en-etes-vous". */
export function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Unique anchors for a list of headings (suffixes repeats with -2, -3…). */
export function anchorIds(headings: string[]): string[] {
  const seen = new Map<string, number>();
  return headings.map((heading) => {
    const base = slugify(heading) || 'section';
    const n = (seen.get(base) ?? 0) + 1;
    seen.set(base, n);
    return n > 1 ? `${base}-${n}` : base;
  });
}

export function formatDate(iso: string, locale: Locale): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
