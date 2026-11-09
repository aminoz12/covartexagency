import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Check } from 'lucide-react';
import { isLocale, localeHref, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionary';
import { getCategories, getCategory, getService, getServiceSlugs, toneClass } from '@/lib/services';
import { getProjects } from '@/lib/agencyData';
import { getPosts } from '@/lib/blog';
import { industriesForService } from '@/lib/industries';
import { getTerms } from '@/lib/glossary';
import { SITE_URL } from '@/config/site';
import { formatEur, pageMetadata } from '@/lib/seo';
import PageHeader from '@/components/PageHeader';
import Faq from '@/components/Faq';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const service = getService(slug, locale);
  if (!service) return { title: locale === 'fr' ? 'Service introuvable' : 'Service not found' };
  return pageMetadata({
    locale,
    path: `/services/${service.slug}`,
    title: service.name,
    description: service.metaDescription,
  });
}

export default async function ServiceDetailPage({ params }: { params: Params }) {
  const { locale: raw, slug } = await params;
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const t = dict.servicesPage;
  const service = getService(slug, locale);
  if (!service) notFound();

  const category = getCategory(service.category, locale);
  const siblings = category?.services.filter((s) => s.slug !== service.slug) ?? [];
  const otherCategories = getCategories(locale).filter((c) => c.slug !== service.category);
  const relatedProjects = getProjects(locale).filter((p) => p.service === service.slug).slice(0, 2);
  // Guides written for this service: service ↔ article links build the topical cluster.
  const guides = getPosts(locale).filter((p) => p.relatedService === service.slug).slice(0, 3);
  // Industry pages and glossary entries that point here: links back close the loop.
  const sectors = industriesForService(service.slug, locale);
  const glossaryTerms = getTerms(locale).filter((term) => term.service === service.slug);
  const h = (path: string) => localeHref(locale, path);
  const quoteHref = h(`/contact?service=${service.slug}`);
  const url = `${SITE_URL}${h(`/services/${service.slug}`)}`;

  const priceFrom = service.priceFrom ? formatEur(service.priceFrom, locale) : null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: service.name,
    description: service.metaDescription,
    url,
    serviceType: service.name,
    category: category?.title,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed:
      service.area === 'france'
        ? { '@type': 'Country', name: 'France' }
        : { '@type': 'Place', name: 'Worldwide' },
    availableLanguage: ['French', 'English'],
    inLanguage: locale === 'fr' ? 'fr-FR' : 'en',
    ...(service.priceFrom
      ? {
          offers: {
            '@type': 'Offer',
            url: `${SITE_URL}${quoteHref}`,
            priceCurrency: 'EUR',
            priceSpecification: {
              '@type': 'PriceSpecification',
              minPrice: service.priceFrom,
              priceCurrency: 'EUR',
            },
          },
        }
      : {}),
  };

  const arrow = (
    <ArrowUpRight size={17} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  );

  return (
    // The whole page wears its practice-area colour (eyebrows, steps, checks, glow).
    <div className={toneClass(service.tone)}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHeader
        locale={locale}
        eyebrow={category ? `${t.inCategory} — ${category.title}` : undefined}
        title={service.name}
        subtitle={service.promise}
        breadcrumb={[
          { label: dict.common.home, href: '/' },
          { label: dict.common.services, href: '/services' },
          { label: service.name },
        ]}
        actions={
          <>
            <Link href={quoteHref} className="btn btn-primary group">
              {dict.common.quote}
              {arrow}
            </Link>
            <Link href={h('/portfolio')} className="btn btn-secondary">
              {dict.common.seeWork}
            </Link>
          </>
        }
      />

      <section className="section relative overflow-hidden">
        <div className="orb orb-tone -right-40 top-40 h-[30rem] w-[30rem]" aria-hidden />
        <div className="container-x relative">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Main column */}
            <div className="space-y-16 lg:col-span-8">
              <Reveal className="space-y-5">
                {service.overview.map((p, i) => (
                  <p key={i} className={i === 0 ? 'text-display-3 !leading-snug text-white/95' : 'lead'}>
                    {p}
                  </p>
                ))}
              </Reveal>

              {/* Benefits */}
              <div>
                <Reveal>
                  <p className="eyebrow mb-4">{t.benefits}</p>
                </Reveal>
                <div className="grid gap-4 sm:grid-cols-3">
                  {service.benefits.map((b, i) => (
                    <Reveal key={b.title} delay={i * 0.08} className="h-full">
                      <div className="card card-hover h-full p-5 md:p-6">
                        <span className="glow-dot h-8 w-8">
                          <Check size={14} strokeWidth={2.5} aria-hidden="true" />
                        </span>
                        <h3 className="mt-4 text-lg text-white">{b.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/75">{b.description}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <Reveal>
                <div className="glass-panel p-6 md:p-8">
                  <p className="eyebrow mb-3">{t.includes}</p>
                  <h2 className="text-display-3">{service.name}</h2>
                  <ul className="mt-6 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-white/85">
                        <span className="tone-text mt-1 shrink-0 drop-shadow-[0_0_8px_color-mix(in_srgb,var(--tone)_60%,transparent)]">
                          <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Process */}
              <div>
                <Reveal>
                  <p className="eyebrow mb-6">{t.process}</p>
                </Reveal>
                <ol className="timeline space-y-6 pl-12">
                  {service.process.map((step, i) => (
                    <li key={step.title} className="relative">
                      <Reveal delay={i * 0.06}>
                        <span className="glow-dot absolute -left-12 top-0">{i + 1}</span>
                        <h3 className="text-xl text-white">{step.title}</h3>
                        <p className="mt-1.5 leading-relaxed text-white/75">{step.description}</p>
                      </Reveal>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Related projects */}
              {relatedProjects.length > 0 && (
                <div>
                  <Reveal>
                    <p className="eyebrow mb-6">{dict.common.work}</p>
                  </Reveal>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {relatedProjects.map((p, i) => (
                      <Reveal key={p.slug} delay={i * 0.08} className="h-full">
                        <Link href={h(`/portfolio/${p.slug}`)} className="glass-panel group flex h-full flex-col p-5 md:p-6">
                          <p className="eyebrow">{p.categoryLabel}</p>
                          <h3 className="mt-3 flex-1 leading-snug text-white">{p.title}</h3>
                          <dl className="mt-4 grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
                            {p.results.map((r) => (
                              <div key={r.label}>
                                <dd className="font-mono font-medium text-white">{r.value}</dd>
                                <dt className="text-[11px] leading-tight text-white/60">{r.label}</dt>
                              </div>
                            ))}
                          </dl>
                        </Link>
                      </Reveal>
                    ))}
                  </div>
                </div>
              )}

              {/* Guides */}
              {guides.length > 0 && (
                <div>
                  <Reveal>
                    <p className="eyebrow mb-6">{t.guides}</p>
                  </Reveal>
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
                </div>
              )}

              {/* FAQ */}
              <div>
                <Reveal>
                  <p className="eyebrow mb-6">{t.faq}</p>
                </Reveal>
                <Reveal>
                  <Faq items={service.faqs} jsonLd />
                </Reveal>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="space-y-5 lg:sticky lg:top-24">
                <Reveal>
                  <div className="glass-panel tone-edge p-6 md:p-7">
                    <p className="eyebrow">{dict.common.quote}</p>
                    <h2 className="mt-3 text-display-3">{t.ctaTitle}</h2>
                    {priceFrom && (
                      <p className="mt-3 font-mono text-sm text-white/85">
                        {t.priceFrom} <span className="text-lg font-medium text-white">{priceFrom}</span>
                      </p>
                    )}
                    <p className="mt-2 text-sm leading-relaxed text-white/75">{t.ctaText}</p>
                    <Link href={quoteHref} className="btn btn-primary group mt-5 w-full">
                      {dict.common.quoteLong}
                      {arrow}
                    </Link>
                    <ul className="mt-5 space-y-2 text-[11px] font-mono uppercase tracking-[0.14em] text-white/62">
                      {dict.common.reassurance.map((r) => (
                        <li key={r} className="flex items-center gap-2">
                          <Check size={12} strokeWidth={2} aria-hidden="true" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <Reveal delay={0.05}>
                  <div className="card p-6">
                    <h2 className="mb-3 text-[11px] font-mono uppercase tracking-[0.18em] text-white/60">{t.tools}</h2>
                    <div className="flex flex-wrap gap-2">
                      {service.tools.map((tool) => (
                        <span key={tool} className="chip">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>

                {sectors.length > 0 && (
                  <Reveal delay={0.08}>
                    <div className="card p-6">
                      <h2 className="mb-3 text-[11px] font-mono uppercase tracking-[0.18em] text-white/60">{dict.industriesPage.forYourSector}</h2>
                      <ul className="divide-y divide-white/10">
                        {sectors.map((ind) => (
                          <li key={ind.slug}>
                            <Link href={h(`/industries/${ind.slug}`)} className="group flex items-center justify-between gap-3 py-2.5 text-sm text-white/75 transition-colors hover:text-white">
                              <span>{ind.name}</span>
                              <ArrowUpRight size={14} aria-hidden="true" className="shrink-0 text-white/55 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                )}

                {glossaryTerms.length > 0 && (
                  <Reveal delay={0.09}>
                    <div className="card p-6">
                      <h2 className="mb-3 text-[11px] font-mono uppercase tracking-[0.18em] text-white/60">{dict.glossaryPage.eyebrow}</h2>
                      <div className="flex flex-wrap gap-2">
                        {glossaryTerms.map((term) => (
                          <Link key={term.slug} href={h(`/glossary/${term.slug}`)} className="chip">
                            {term.term}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                )}

                {siblings.length > 0 && (
                  <Reveal delay={0.1}>
                    <div className="card p-6">
                      <h2 className="mb-3 text-[11px] font-mono uppercase tracking-[0.18em] text-white/60">{t.related}</h2>
                      <ul className="divide-y divide-white/10">
                        {siblings.map((s) => (
                          <li key={s.slug}>
                            <Link href={h(`/services/${s.slug}`)} className="group flex items-center justify-between gap-3 py-2.5 text-sm text-white/75 transition-colors hover:text-white">
                              <span>{s.name}</span>
                              <ArrowUpRight size={14} aria-hidden="true" className="shrink-0 text-white/55 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                )}
              </div>
            </aside>
          </div>

          {/* Other categories */}
          <div className="mt-24">
            <Reveal>
              <p className="eyebrow mb-6">{t.otherCategories}</p>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-3">
              {otherCategories.map((c, i) => (
                <Reveal key={c.slug} delay={i * 0.08} className="h-full">
                  <Link href={h(`/services#${c.slug}`)} className={`card card-hover tone-edge ${toneClass(c.tone)} group flex h-full flex-col p-6`}>
                    <h3 className="text-xl text-white">{c.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-white/75">{c.description}</p>
                    <p className="mt-4 text-[11px] font-mono leading-relaxed text-white/58">{c.services.map((s) => s.name).join(' · ')}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        locale={locale}
        title={dict.home.ctaTitle}
        text={dict.home.ctaText}
        primaryLabel={dict.common.quoteLong}
        primaryHref={`/contact?service=${service.slug}`}
        reassurance={dict.common.reassurance}
      />
    </div>
  );
}
