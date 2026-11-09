/**
 * Locale routing configuration.
 *
 * French is the default locale and lives at the root (/services),
 * English is prefixed (/en/services). The middleware rewrites unprefixed
 * requests to /fr/* internally so both locales share the same
 * app/[locale] tree.
 */
export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Build a locale-aware href. FR is unprefixed, EN lives under /en. */
export function localeHref(locale: Locale, path: string = '/'): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return p;
  return p === '/' ? `/${locale}` : `/${locale}${p}`;
}

/**
 * hreflang map for a given logical path (e.g. "/services").
 * x-default points to English: visitors whose language is neither FR nor EN
 * (the rest of the world) are better served by the English pages.
 */
export function languageAlternates(path: string): Record<string, string> {
  return {
    fr: localeHref('fr', path),
    en: localeHref('en', path),
    'x-default': localeHref('en', path),
  };
}

export const ogLocale: Record<Locale, string> = { fr: 'fr_FR', en: 'en_US' };
export const htmlLang: Record<Locale, string> = { fr: 'fr', en: 'en' };
export const dateLocale: Record<Locale, string> = { fr: 'fr-FR', en: 'en-US' };

/** Pick a localized value from a { fr, en } record. */
export function pick<T>(record: Record<Locale, T>, locale: Locale): T {
  return record[locale];
}
