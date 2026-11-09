import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Check } from 'lucide-react';
import { isLocale, localeHref, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionary';
import { getIndustries, getIndustry, getIndustrySlugs } from '@/lib/industries';
import { getService, toneClass } from '@/lib/services';
import { getProjects } from '@/lib/agencyData';
import { getPosts } from '@/lib/blog';
import { SITE_URL } from '@/config/site';
import { pageMetadata } from '@/lib/seo';
import PageHeader from '@/components/PageHeader';
import ProjectCard from '@/components/ProjectCard';
import Faq from '@/components/Faq';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';
import { industryIcon } from '@/components/industry-icons';

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return getIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const industry = getIndustry(slug, locale);
  if (!industry) return { title: locale === 'fr' ? 'Secteur introuvable' : 'Industry not found' };
  return pageMetadata({
    locale,
    path: `/industries/${industry.slug}`,
    title: industry.metaTitle,
    description: industry.metaDescription,
  });
}

/**
 * Industry landing page: the sector's problems, the Covartex services that
 * answer them (each linking to its service page), the profession's rules,
 * a related case study, guides and FAQ. Wears the tone of its main area.
 */
export default async function IndustryPage({ params }: { params: Params }) {
  const { locale: raw, slug } = await params;
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const t = dict.industriesPage;
  const industry = getIndustry(slug, locale);
  if (!industry) notFound();

  const h = (path: string) => localeHref(locale, path);
  const url = `${SITE_URL}${h(`/industries/${industry.slug}`)}`;
  const quoteHref = h(`/contact?service=${industry.services[0] ?? ''}`);
  const Icon = industryIcon(industry.slug);

  const solutions = industry.solutions
    .map((s) => ({ ...s, def: getService(s.service, locale) }))
    .filter((s) => s.def);
  const projects = getProjects(locale).filter((p) => industry.projects.includes(p.slug));
  const guides = getPosts(locale)
    .filter((p) => p.relatedService && industry.services.includes(p.relatedService))
    .slice(0, 3);
  const others = getIndustries(locale).filter((i) => i.slug !== industry.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: industry.title,
    description: industry.metaDescription,
    url,
    provider: { '@id': `${SITE_URL}/#organization` },
    audience: { '@type': 'BusinessAudience', audienceType: industry.name },
    serviceType: solutions.map((s) => s.def!.name),
    areaServed:
      industry.area === 'france' ? { '@type': 'Country', name: 'France' } : { '@type': 'Place', name: 'Worldwide' },
    availableLanguage: ['French', 'English'],
    inLanguage: locale === 'fr' ? 'fr-FR' : 'en',
    abstract: industry.summary.join(' '),
    isRelatedTo: solutions.map((s) => ({ '@id': `${SITE_URL}${h(`/services/${s.service}`)}#service` })),
  };

  const arrow = (
    <ArrowUpRight size={17} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  );

  return (
    <div className={toneClass(industry.tone)}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHeader
        locale={locale}
        eyebrow={`${t.eyebrow} — ${industry.name}`}
        title={industry.title}
        subtitle={industry.promise}
        breadcrumb={[
          { label: dict.common.home, href: '/' },
          { label: t.navLabel, href: '/industries' },
          { label: industry.name },
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
              {/* Answer-first summary: the block snippets and AI engines quote. */}
              <Reveal>
                <aside className="glass-panel p-6 md:p-8" aria-label={t.inShort}>
                  <p className="eyebrow mb-4">{t.inShort}</p>
                  <ul className="space-y-3">
                    {industry.summary.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-lg leading-relaxed text-white/90">
                        <span aria-hidden className="tone-dot mt-2.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </aside>
              </Reveal>

              {/* Challenges */}
              <div>
                <Reveal>
                  <h2 className="eyebrow mb-6">{t.challenges}</h2>
                </Reveal>
                <div className="grid gap-4 sm:grid-cols-2">
                  {industry.challenges.map((c, i) => (
                    <Reveal key={c.title} delay={(i % 2) * 0.08} className="h-full">
                      <div className="card h-full p-5 md:p-6">
                        <span className="glow-dot">{i + 1}</span>
                        <h3 className="mt-4 text-lg text-white">{c.title}</h3>
                        <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/75">{c.description}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Solutions: one per service, each linking to its page */}
              <div>
                <Reveal>
                  <h2 className="eyebrow mb-6">{t.solutions}</h2>
                </Reveal>
                <div className="space-y-4">
                  {solutions.map((s, i) => (
                    <Reveal key={s.service} delay={i * 0.05}>
                      <Link
                        href={h(`/services/${s.service}`)}
                        className={`card card-hover ${toneClass(s.def!.tone)} group flex flex-col gap-4 p-6 sm:flex-row sm:items-start md:p-7`}
                      >
                        <span className="check-dot mt-0.5">
                          <Check size={13} strokeWidth={2.5} aria-hidden="true" />
                        </span>
                        <span className="flex-1">
                          <span className="block text-[11px] font-mono uppercase tracking-[0.16em] text-white/60">{s.def!.name}</span>
                          <span className="mt-2 block text-xl leading-snug text-white">{s.title}</span>
                          <span className="mt-2 block leading-relaxed text-white/75">{s.text}</span>
                          <span className="link-arrow mt-4 text-sm">
                            {t.seeService}
                            <ArrowUpRight size={15} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </span>
                        </span>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Sector rules */}
              {industry.rules && (
                <Reveal>
                  <div className="glass-panel tone-edge p-6 md:p-8">
                    <p className="eyebrow mb-3">{t.rules}</p>
                    <h2 className="text-display-3">{industry.rules.title}</h2>
                    <div className="mt-5 space-y-4">
                      {industry.rules.paragraphs.map((p, i) => (
                        <p key={i} className="leading-relaxed text-white/80">
                          {p}
                        </p>
                      ))}
                    </div>
                    {industry.rules.list && industry.rules.list.length > 0 && (
                      <ul className="mt-6 space-y-3">
                        {industry.rules.list.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-white/85">
                            <span className="tone-text mt-1 shrink-0">
                              <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              )}

              {/* Related case study */}
              {projects.length > 0 && (
                <div>
                  <Reveal>
                    <h2 className="eyebrow mb-6">{t.work}</h2>
                  </Reveal>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {projects.map((p) => (
                      <Reveal key={p.slug} className="h-full">
                        <ProjectCard project={p} href={h(`/portfolio/${p.slug}`)} readCase={dict.common.readCase} />
                      </Reveal>
                    ))}
                  </div>
                </div>
              )}

              {/* Guides */}
              {guides.length > 0 && (
                <div>
                  <Reveal>
                    <h2 className="eyebrow mb-6">{t.guides}</h2>
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
                  <h2 className="eyebrow mb-6">{t.faq}</h2>
                </Reveal>
                <Reveal>
                  <Faq items={industry.faqs} jsonLd />
                </Reveal>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="space-y-5 lg:sticky lg:top-24">
                <Reveal>
                  <div className="glass-panel tone-edge p-6 md:p-7">
                    <span className="tone-icon h-12 w-12">
                      <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <p className="eyebrow mt-5">{dict.common.quote}</p>
                    <h2 className="mt-3 text-display-3">{industry.name}</h2>
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
                  <nav className="card p-6" aria-label={t.solutions}>
                    <h2 className="mb-3 text-[11px] font-mono uppercase tracking-[0.18em] text-white/60">{dict.common.services}</h2>
                    <ul className="divide-y divide-white/10">
                      {solutions.map((s) => (
                        <li key={s.service}>
                          <Link
                            href={h(`/services/${s.service}`)}
                            className="group flex items-center justify-between gap-3 py-2.5 text-sm text-white/75 transition-colors hover:text-white"
                          >
                            <span>{s.def!.name}</span>
                            <ArrowUpRight size={14} aria-hidden="true" className="shrink-0 text-white/55 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </Reveal>
              </div>
            </aside>
          </div>

          {/* Other industries */}
          <div className="mt-24">
            <Reveal>
              <h2 className="eyebrow mb-6">{t.others}</h2>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {others.map((o, i) => {
                const OtherIcon = industryIcon(o.slug);
                return (
                  <Reveal key={o.slug} delay={i * 0.06} className="h-full">
                    <Link href={h(`/industries/${o.slug}`)} className={`card card-hover tone-edge ${toneClass(o.tone)} group flex h-full flex-col p-6`}>
                      <span className="tone-icon h-10 w-10">
                        <OtherIcon size={18} strokeWidth={1.5} aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 text-lg text-white">{o.name}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/72">{o.cardText}</p>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        locale={locale}
        title={t.ctaTitle}
        text={t.ctaText}
        primaryLabel={dict.common.quoteLong}
        primaryHref={`/contact?service=${industry.services[0] ?? ''}`}
        reassurance={dict.common.reassurance}
      />
    </div>
  );
}
