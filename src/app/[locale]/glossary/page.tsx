import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { isLocale, localeHref, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionary';
import { getTerms, termGroups } from '@/lib/glossary';
import { SITE_URL } from '@/config/site';
import { pageMetadata } from '@/lib/seo';
import PageHeader from '@/components/PageHeader';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';
import { termToneClass } from '@/components/term-tone';

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale).glossaryPage;
  return pageMetadata({
    locale,
    path: '/glossary',
    title: locale === 'fr' ? 'Glossaire — SEO, IA, SaaS & juridique expliqués' : 'Glossary — SEO, AI, SaaS & legal terms explained',
    description: t.subtitle,
  });
}

export default async function GlossaryPage({ params }: { params: Params }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const t = dict.glossaryPage;
  const terms = getTerms(locale);
  const h = (path: string) => localeHref(locale, path);
  const setUrl = `${SITE_URL}${h('/glossary')}`;

  // The whole glossary as one DefinedTermSet; each term page points back to it.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': `${setUrl}#set`,
    name: locale === 'fr' ? 'Glossaire Covartex' : 'Covartex glossary',
    description: t.subtitle,
    url: setUrl,
    inLanguage: locale === 'fr' ? 'fr-FR' : 'en',
    publisher: { '@id': `${SITE_URL}/#organization` },
    hasDefinedTerm: terms.map((term) => ({
      '@type': 'DefinedTerm',
      '@id': `${SITE_URL}${h(`/glossary/${term.slug}`)}#term`,
      name: term.term,
      ...(term.expansion ? { alternateName: term.expansion } : {}),
      description: term.definition,
      url: `${SITE_URL}${h(`/glossary/${term.slug}`)}`,
    })),
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
        actions={
          <div className="flex flex-wrap gap-2">
            {termGroups.map((g) => (
              <a key={g} href={`#${g}`} className="chip">
                {t.groups[g]}
              </a>
            ))}
          </div>
        }
      />

      <section className="section relative overflow-hidden">
        <div className="orb orb-pink -left-40 top-40 h-[28rem] w-[28rem]" aria-hidden />
        <div className="container-x relative space-y-20">
          {termGroups.map((g) => {
            const group = terms.filter((term) => term.group === g);
            if (group.length === 0) return null;
            return (
              <div key={g} id={g} className="scroll-mt-28">
                <Reveal className="mb-8 flex items-baseline justify-between gap-4">
                  <h2 className="text-display-2">{t.groups[g]}</h2>
                  <p className="shrink-0 text-[11px] font-mono uppercase tracking-[0.16em] text-white/60">
                    {group.length} {t.terms}
                  </p>
                </Reveal>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.map((term, i) => (
                    <Reveal key={term.slug} delay={(i % 3) * 0.06} className="h-full">
                      <Link
                        href={h(`/glossary/${term.slug}`)}
                        className={`card card-hover ${termToneClass(term)} group flex h-full flex-col p-6`}
                      >
                        <span className="flex items-center gap-2.5">
                          <span aria-hidden className="tone-dot" />
                          <span className="text-xl text-white">{term.term}</span>
                        </span>
                        {term.expansion && <span className="mt-1 text-xs text-white/60">{term.expansion}</span>}
                        <span className="mt-3 flex-1 text-sm leading-relaxed text-white/72 line-clamp-3">{term.definition}</span>
                        <ArrowUpRight size={15} aria-hidden="true" className="mt-4 text-white/55 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBand
        locale={locale}
        title={dict.home.ctaTitle}
        text={dict.home.ctaText}
        primaryLabel={dict.common.quoteLong}
        secondaryLabel={dict.home.ctaSecondary}
        secondaryHref="/services"
        reassurance={dict.common.reassurance}
      />
    </>
  );
}
