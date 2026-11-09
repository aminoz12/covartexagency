import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import { isLocale, localeHref, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionary';
import { getTerm, getTermSlugs, getTerms, termTitle, type LocalizedTerm } from '@/lib/glossary';
import { getService } from '@/lib/services';
import { getPosts } from '@/lib/blog';
import { SITE_URL } from '@/config/site';
import { pageMetadata } from '@/lib/seo';
import PageHeader from '@/components/PageHeader';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';
import { termToneClass } from '@/components/term-tone';

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return getTermSlugs().map((slug) => ({ slug }));
}

/** "GEO (Generative Engine Optimization) : définition" — the query people type. */
function headline(term: LocalizedTerm, locale: Locale): string {
  const name = termTitle(term);
  return locale === 'fr' ? `${name} : définition` : `${name}: definition`;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const term = getTerm(slug, locale);
  if (!term) return { title: locale === 'fr' ? 'Terme introuvable' : 'Term not found' };
  return pageMetadata({
    locale,
    path: `/glossary/${term.slug}`,
    title: headline(term, locale),
    description: term.definition,
  });
}

/**
 * Glossary entry: the one-sentence definition first (the quotable line),
 * then explanation, key points, an example, related terms, and the service
 * and guides that go further. Emits DefinedTerm JSON-LD.
 */
export default async function TermPage({ params }: { params: Params }) {
  const { locale: raw, slug } = await params;
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const t = dict.glossaryPage;
  const term = getTerm(slug, locale);
  if (!term) notFound();

  const h = (path: string) => localeHref(locale, path);
  const url = `${SITE_URL}${h(`/glossary/${term.slug}`)}`;
  const all = getTerms(locale);
  const related = term.related
    .map((s) => all.find((x) => x.slug === s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));
  const service = term.service ? getService(term.service, locale) : undefined;
  const guides = term.service ? getPosts(locale).filter((p) => p.relatedService === term.service).slice(0, 3) : [];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    '@id': `${url}#term`,
    name: term.term,
    ...(term.expansion ? { alternateName: term.expansion } : {}),
    description: term.definition,
    url,
    inLanguage: locale === 'fr' ? 'fr-FR' : 'en',
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      '@id': `${SITE_URL}${h('/glossary')}#set`,
      name: locale === 'fr' ? 'Glossaire Covartex' : 'Covartex glossary',
      url: `${SITE_URL}${h('/glossary')}`,
    },
  };

  return (
    <div className={termToneClass(term)}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHeader
        locale={locale}
        eyebrow={`${t.eyebrow} — ${t.groups[term.group]}`}
        title={headline(term, locale)}
        breadcrumb={[
          { label: dict.common.home, href: '/' },
          { label: t.navLabel, href: '/glossary' },
          { label: term.term },
        ]}
      />

      <section className="section relative overflow-hidden">
        <div className="orb orb-tone -right-40 top-20 h-[28rem] w-[28rem]" aria-hidden />
        <div className="container-x relative">
          <div className="grid gap-12 lg:grid-cols-12">
            <article className="space-y-12 lg:col-span-8">
              {/* The definition: one sentence that stands alone when quoted. */}
              <Reveal>
                <div className="glass-panel tone-edge p-6 md:p-8">
                  <p className="eyebrow mb-4">{t.definition}</p>
                  <p className="text-display-3 !leading-snug text-white">{term.definition}</p>
                </div>
              </Reveal>

              <Reveal className="space-y-5">
                {term.body.map((p, i) => (
                  <p key={i} className="text-lg leading-relaxed text-white/80">
                    {p}
                  </p>
                ))}
              </Reveal>

              {term.keyPoints && term.keyPoints.length > 0 && (
                <Reveal>
                  <h2 className="eyebrow mb-5">{t.keyPoints}</h2>
                  <ul className="card space-y-3 p-6 md:p-7">
                    {term.keyPoints.map((k) => (
                      <li key={k} className="flex items-start gap-3 leading-relaxed text-white/85">
                        <span className="tone-text mt-1 shrink-0">
                          <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                        </span>
                        {k}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}

              {term.example && (
                <Reveal>
                  <h2 className="eyebrow mb-5">{t.example}</h2>
                  <p className="border-l-2 border-[var(--tone)] pl-5 text-lg font-light leading-relaxed text-white/85">{term.example}</p>
                </Reveal>
              )}

              {related.length > 0 && (
                <Reveal>
                  <h2 className="eyebrow mb-5">{t.related}</h2>
                  <ul className="flex flex-wrap gap-2">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link href={h(`/glossary/${r.slug}`)} className="chip">
                          {r.term}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}

              {guides.length > 0 && (
                <Reveal>
                  <h2 className="eyebrow mb-5">{t.guides}</h2>
                  <ul className="card divide-y divide-white/10">
                    {guides.map((g) => (
                      <li key={g.slug}>
                        <Link href={h(`/blog/${g.slug}`)} className="group flex items-start justify-between gap-4 px-6 py-5">
                          <span>
                            <span className="block leading-snug text-white">{g.title}</span>
                            <span className="mt-1 block text-sm leading-relaxed text-white/60">{g.description}</span>
                          </span>
                          <ArrowUpRight size={16} aria-hidden="true" className="mt-1 shrink-0 text-white/55 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}

              <Reveal>
                <Link href={h('/glossary')} className="link-arrow text-sm">
                  <ArrowLeft size={15} aria-hidden="true" />
                  {t.back}
                </Link>
              </Reveal>
            </article>

            {service && (
              <aside className="lg:col-span-4">
                <div className="lg:sticky lg:top-24">
                  <Reveal>
                    <div className="glass-panel tone-edge p-6 md:p-7">
                      <p className="eyebrow">{t.serviceTitle}</p>
                      <h2 className="mt-3 text-display-3">{service.name}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-white/75">{service.promise}</p>
                      <Link href={h(`/services/${service.slug}`)} className="btn btn-secondary group mt-5 w-full">
                        {t.serviceCta}
                        <ArrowUpRight size={15} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                      <Link href={h(`/contact?service=${service.slug}`)} className="btn btn-primary mt-3 w-full">
                        {dict.common.quote}
                      </Link>
                    </div>
                  </Reveal>
                </div>
              </aside>
            )}
          </div>
        </div>
      </section>

      <CtaBand
        locale={locale}
        title={dict.home.ctaTitle}
        text={dict.home.ctaText}
        primaryLabel={dict.common.quoteLong}
        primaryHref={service ? `/contact?service=${service.slug}` : '/contact'}
        reassurance={dict.common.reassurance}
      />
    </div>
  );
}
