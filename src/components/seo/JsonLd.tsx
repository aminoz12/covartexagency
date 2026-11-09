import { SITE_URL, siteConfig } from '@/config/site';
import { localeHref, type Locale } from '@/i18n/config';
import { getCategories } from '@/lib/services';

/**
 * Site-wide structured data (Schema.org JSON-LD).
 * Rendered once in the locale layout. Server component — no client JS.
 *
 * This graph is the brand's "entity card" for Google and AI assistants:
 * who Covartex is, what it sells, where and in which languages. Services,
 * the offer catalogue and knowsAbout are derived from src/lib/services.ts
 * so they never drift from the pages.
 *
 * ⚠️ Accuracy matters for rich results: keep this in sync with real
 * NAP + social URLs in src/config/site.ts.
 */
export default function JsonLd({ locale }: { locale: Locale }) {
  const sameAs = [...Object.values(siteConfig.social), ...siteConfig.profiles];
  const categories = getCategories(locale);
  const url = (path: string) => `${SITE_URL}${localeHref(locale, path)}`;

  const description =
    locale === 'fr'
      ? 'Agence web et IA : création de site web, SEO, visibilité IA (AEO/GEO), applications mobiles, SaaS sur mesure, automatisation et services juridiques externalisés. Projets menés à distance, en France et à l’international.'
      : 'Web and AI agency: website design, SEO, AI visibility (AEO/GEO), mobile apps, custom SaaS, automation and outsourced legal services. Remote delivery, worldwide.';

  const slogan =
    locale === 'fr'
      ? 'Un site qui vend, une visibilité qui dure, des outils qui font gagner du temps.'
      : 'A website that sells, visibility that lasts, tools that save time.';

  const knowsAbout = [
    ...categories.flatMap((c) => c.services.map((s) => s.name)),
    'Search Engine Optimization',
    'Answer Engine Optimization',
    'Generative Engine Optimization',
    'Web design',
    'Workflow automation',
    'Artificial intelligence',
  ];

  const areaServed = [
    { '@type': 'Place', name: 'Worldwide' },
    { '@type': 'Country', name: 'France' },
  ];

  // Offer catalogue: one sub-catalogue per practice area, one Service per entry.
  const hasOfferCatalog = {
    '@type': 'OfferCatalog',
    name: locale === 'fr' ? 'Services Covartex' : 'Covartex services',
    itemListElement: categories.map((c) => ({
      '@type': 'OfferCatalog',
      name: c.title,
      itemListElement: c.services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': `${url(`/services/${s.slug}`)}#service`,
          name: s.name,
          url: url(`/services/${s.slug}`),
        },
        ...(s.priceFrom
          ? {
              priceSpecification: {
                '@type': 'PriceSpecification',
                minPrice: s.priceFrom,
                priceCurrency: 'EUR',
              },
            }
          : {}),
      })),
    })),
  };

  const organization = {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: siteConfig.name,
    url: SITE_URL,
    description,
    slogan,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    image: `${SITE_URL}/logo.png`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs,
    knowsAbout,
    knowsLanguage: ['fr', 'en'],
    areaServed,
    hasOfferCatalog,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: siteConfig.email,
      telephone: siteConfig.phone,
      url: url('/contact'),
      availableLanguage: siteConfig.languages,
      areaServed: 'Worldwide',
    },
  };

  const website = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: siteConfig.name,
    description,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: ['fr-FR', 'en'],
  };

  const localBusiness = {
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#localbusiness`,
    name: siteConfig.name,
    url: SITE_URL,
    image: `${SITE_URL}/logo.png`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    areaServed,
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
  };

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [organization, website, localBusiness],
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD is trusted, static, server-generated content.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
