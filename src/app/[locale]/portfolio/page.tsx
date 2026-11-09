import type { Metadata } from 'next';
import { isLocale, localeHref, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionary';
import { getProjects } from '@/lib/agencyData';
import { pageMetadata } from '@/lib/seo';
import PageHeader from '@/components/PageHeader';
import ProjectCard from '@/components/ProjectCard';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale).workPage;
  return pageMetadata({
    locale,
    path: '/portfolio',
    title: locale === 'fr' ? 'Réalisations — Études de cas & résultats' : 'Work — Case studies & results',
    description: t.subtitle,
  });
}

export default async function PortfolioPage({ params }: { params: Params }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const t = dict.workPage;
  const projects = getProjects(locale);

  return (
    <>
      <PageHeader
        locale={locale}
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
        breadcrumb={[{ label: dict.common.home, href: '/' }, { label: dict.common.work }]}
      />

      <section className="section relative overflow-hidden">
        <div className="orb orb-amber -left-40 top-40 h-[28rem] w-[28rem]" aria-hidden />
        <div className="orb orb-pink -right-32 bottom-20 h-[26rem] w-[26rem]" aria-hidden />
        <div className="container-x relative">
          <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 0.08} className="h-full">
                <ProjectCard
                  project={p}
                  href={localeHref(locale, `/portfolio/${p.slug}`)}
                  readCase={dict.common.readCase}
                  as="h2"
                  size="large"
                />
              </Reveal>
            ))}
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
    </>
  );
}
