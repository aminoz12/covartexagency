import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/config/site';
import { languageAlternates, localeHref, locales } from '@/i18n/config';
import { getServiceSlugs } from '@/lib/services';
import { getProjectSlugs } from '@/lib/agencyData';
import { posts } from '@/lib/blog';
import { getIndustrySlugs } from '@/lib/industries';
import { getTermSlugs } from '@/lib/glossary';

/**
 * Last real content change for pages without their own date. Bump it when
 * services, industries, glossary or case studies change: a lastmod that moves
 * on every build (new Date()) teaches Google to ignore it.
 */
const CONTENT_UPDATED = new Date('2026-11-08T00:00:00Z');

type Freq = MetadataRoute.Sitemap[number]['changeFrequency'];

interface Entry {
  path: string;
  changeFrequency: Freq;
  priority: number;
  lastModified?: Date;
}

/**
 * One entry per locale per page, each carrying hreflang alternates.
 * Legal pages are noindex and intentionally omitted.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: Entry[] = [
    { path: '/', changeFrequency: 'weekly', priority: 1 },
    { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/contact', changeFrequency: 'yearly', priority: 0.9 },
    { path: '/portfolio', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.7 },
    { path: '/about', changeFrequency: 'yearly', priority: 0.5 },
    { path: '/industries', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/glossary', changeFrequency: 'monthly', priority: 0.6 },
    ...getIndustrySlugs().map((slug) => ({
      path: `/industries/${slug}`,
      changeFrequency: 'monthly' as Freq,
      priority: 0.8,
    })),
    ...getTermSlugs().map((slug) => ({
      path: `/glossary/${slug}`,
      changeFrequency: 'yearly' as Freq,
      priority: 0.5,
    })),
    ...getServiceSlugs().map((slug) => ({
      path: `/services/${slug}`,
      changeFrequency: 'monthly' as Freq,
      priority: 0.8,
    })),
    ...getProjectSlugs().map((slug) => ({
      path: `/portfolio/${slug}`,
      changeFrequency: 'yearly' as Freq,
      priority: 0.6,
    })),
    ...posts.map((p) => ({
      path: `/blog/${p.slug}`,
      changeFrequency: 'monthly' as Freq,
      priority: 0.6,
      lastModified: new Date(`${p.updated ?? p.date}T00:00:00Z`),
    })),
  ];

  return entries.flatMap((e) => {
    const alternates = Object.fromEntries(
      Object.entries(languageAlternates(e.path)).map(([lang, href]) => [lang, `${SITE_URL}${href === '/' ? '' : href}`]),
    );
    return locales.map((locale) => {
      const href = localeHref(locale, e.path);
      return {
        url: `${SITE_URL}${href === '/' ? '' : href}`,
        lastModified: e.lastModified ?? CONTENT_UPDATED,
        changeFrequency: e.changeFrequency,
        priority: locale === 'fr' ? e.priority : Math.max(0.1, e.priority - 0.1),
        alternates: { languages: alternates },
      };
    });
  });
}
