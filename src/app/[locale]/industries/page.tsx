import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { isLocale, localeHref, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionary';
import { getIndustries } from '@/lib/industries';
import { toneClass } from '@/lib/services';
import { SITE_URL } from '@/config/site';
import { pageMetadata } from '@/lib/seo';
import PageHeader from '@/components/PageHeader';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';
import { industryIcon } from '@/components/industry-icons';

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale).industriesPage;
  return pageMetadata({
    locale,
    path: '/industries',
    title: locale === 'fr' ? 'Secteurs — Agence web, IA & juridique par métier' : 'Industries — Web, AI & legal agency by sector',
    description: t.subtitle,
  });
}

export default async function IndustriesPage({ params }: { params: Params }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const t = dict.industriesPage;
  const industries = getIndustries(locale);
  const h = (path: string) => localeHref(locale, path);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}${h('/industries')}#page`,
    name: t.title,
    description: t.subtitle,
    url: `${SITE_URL}${h('/industries')}`,
    inLanguage: locale === 'fr' ? 'fr-FR' : 'en',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: industries.map((ind, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: ind.title,
        url: `${SITE_URL}${h(`/industries/${ind.slug}`)}`,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHeader
        locale={locale}
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
        breadcrumb={[{ label: dict.common.home, href: '/' }, { label: t.navLabel }]}
      />

      <section className="section relative overflow-hidden">
        <div className="orb orb-pink -left-40 top-40 h-[28rem] w-[28rem]" aria-hidden />
        <div className="orb orb-amber -right-32 bottom-20 h-[26rem] w-[26rem]" aria-hidden />
        <div className="container-x relative">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {industries.map((ind, i) => {
              const Icon = industryIcon(ind.slug);
              return (
                <Reveal key={ind.slug} delay={(i % 3) * 0.08} className="h-full">
                  <Link
                    href={h(`/industries/${ind.slug}`)}
                    className={`card card-hover tone-edge ${toneClass(ind.tone)} group flex h-full flex-col p-6 md:p-7`}
                  >
                    <span className="tone-icon h-12 w-12">
                      <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <h2 className="mt-5 text-display-3">{ind.name}</h2>
                    <p className="mt-3 flex-1 leading-relaxed text-white/72">{ind.cardText}</p>
                    <span className="link-arrow mt-6 text-sm">
                      {dict.common.learnMore}
                      <ArrowUpRight size={15} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        locale={locale}
        title={t.ctaTitle}
        text={t.ctaText}
        primaryLabel={dict.common.quoteLong}
        secondaryLabel={dict.home.ctaSecondary}
        secondaryHref="/services"
        reassurance={dict.common.reassurance}
      />
    </>
  );
}
