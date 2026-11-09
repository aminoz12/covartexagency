import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { isLocale, localeHref, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionary';
import { getProject, getProjectSlugs, getProjects } from '@/lib/agencyData';
import { getService, toneClass } from '@/lib/services';
import { SITE_URL } from '@/config/site';
import { pageMetadata } from '@/lib/seo';
import PageHeader from '@/components/PageHeader';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const project = getProject(slug, locale);
  if (!project) return { title: locale === 'fr' ? 'Réalisation introuvable' : 'Case study not found' };
  return pageMetadata({
    locale,
    path: `/portfolio/${project.slug}`,
    title: project.title,
    description: project.description,
    type: 'article',
  });
}

export default async function CaseStudyPage({ params }: { params: Params }) {
  const { locale: raw, slug } = await params;
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const t = dict.workPage;
  const project = getProject(slug, locale);
  if (!project) notFound();

  const h = (path: string) => localeHref(locale, path);
  const service = getService(project.service, locale);
  const related = getProjects(locale).filter((p) => p.slug !== project.slug).slice(0, 3);
  const url = `${SITE_URL}${h(`/portfolio/${project.slug}`)}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: project.title,
    description: project.description,
    url,
    inLanguage: locale === 'fr' ? 'fr-FR' : 'en-US',
    author: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    about: project.categoryLabel,
  };

  const sections = [
    { label: t.challenge, text: project.challenge },
    { label: t.solution, text: project.solution },
    { label: t.impact, text: project.impact },
  ];

  return (
    // The case study wears the colour of its practice area.
    <div className={toneClass(project.tone)}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHeader
        locale={locale}
        eyebrow={`${t.eyebrow} — ${project.categoryLabel}`}
        title={project.title}
        subtitle={project.description}
        breadcrumb={[
          { label: dict.common.home, href: '/' },
          { label: dict.common.work, href: '/portfolio' },
          { label: project.title },
        ]}
        aside={
          <dl className="liquid-glass grid grid-cols-3 divide-x divide-white/10 rounded-3xl">
            {project.results.map((r) => (
              <div key={r.label} className="px-4 py-5 md:px-5 md:py-6">
                <dd className="font-mono text-2xl font-medium text-white md:text-3xl">{r.value}</dd>
                <dt className="mt-1 text-[10px] font-mono uppercase leading-tight tracking-[0.12em] text-white/60">{r.label}</dt>
              </div>
            ))}
          </dl>
        }
      />

      <section className="section relative overflow-hidden">
        <div className="orb orb-tone -right-40 top-20 h-[28rem] w-[28rem]" aria-hidden />
        <div className="container-x relative">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <ol className="timeline space-y-12 pl-12">
                {sections.map((s, i) => (
                  <li key={s.label} className="relative">
                    <Reveal delay={i * 0.06}>
                      <span className="glow-dot absolute -left-12 top-1">{i + 1}</span>
                      <p className="eyebrow mb-3">{s.label}</p>
                      <p className={i === 2 ? 'text-display-3 !leading-snug' : 'lead'}>{s.text}</p>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>

            <aside className="space-y-5 lg:col-span-4">
              {service && (
                <Reveal>
                  <div className="glass-panel p-6 md:p-7">
                    <p className="eyebrow">{dict.common.services}</p>
                    <h2 className="mt-3 text-display-3">{service.name}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-white/75">{service.promise}</p>
                    <Link href={h(`/contact?service=${service.slug}`)} className="btn btn-primary group mt-5 w-full">
                      {dict.common.quoteLong}
                      <ArrowUpRight size={17} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                    <Link href={h(`/services/${service.slug}`)} className="link-arrow mt-4 text-sm">
                      {dict.common.learnMore}
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </Link>
                  </div>
                </Reveal>
              )}
              <Reveal delay={0.05}>
                <div className="card p-6">
                  <h2 className="mb-3 text-[11px] font-mono uppercase tracking-[0.18em] text-white/60">{t.tech}</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>

          <div className="mt-24">
            <Reveal>
              <p className="eyebrow mb-6">{t.more}</p>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.08} className="h-full">
                  <Link href={h(`/portfolio/${p.slug}`)} className={`card card-hover tone-edge ${toneClass(p.tone)} flex h-full flex-col p-6`}>
                    <p className="eyebrow">{p.categoryLabel}</p>
                    <h3 className="mt-3 leading-snug text-white">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/72 line-clamp-2">{p.description}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        locale={locale}
        title={t.ctaTitle}
        text={t.ctaText}
        primaryLabel={dict.common.quoteLong}
        reassurance={dict.common.reassurance}
      />
    </div>
  );
}
