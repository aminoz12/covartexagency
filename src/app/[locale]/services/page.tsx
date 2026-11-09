import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { isLocale, localeHref, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionary';
import { getCategories, toneClass } from '@/lib/services';
import { pageMetadata } from '@/lib/seo';
import PageHeader from '@/components/PageHeader';
import ServiceCategories from '@/components/ServiceCategories';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale).servicesPage;
  return pageMetadata({
    locale,
    path: '/services',
    title: locale === 'fr' ? 'Nos services — Site web, SEO, IA, applications & juridique' : 'Our services — Websites, SEO, AI, apps & legal',
    description: t.subtitle,
  });
}

export default async function ServicesPage({ params }: { params: Params }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const t = dict.servicesPage;
  const categories = getCategories(locale);

  return (
    <>
      <PageHeader
        locale={locale}
        size="tall"
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
        breadcrumb={[{ label: dict.common.home, href: '/' }, { label: dict.common.services }]}
        actions={
          <>
            <Link href={localeHref(locale, '/contact')} className="btn btn-primary group">
              {dict.common.quote}
              <ArrowUpRight size={17} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-[11px] font-mono uppercase tracking-[0.14em] text-white/60">
              {dict.common.reassurance.map((r) => (
                <li key={r} className="inline-flex items-center gap-1.5">
                  <Check size={12} strokeWidth={2} aria-hidden="true" />
                  {r}
                </li>
              ))}
            </ul>
          </>
        }
        aside={
          <nav aria-label={t.eyebrow} className="liquid-glass rounded-3xl p-5 md:p-6">
            <p className="mb-4 text-[11px] font-mono uppercase tracking-[0.18em] text-white/60">{t.eyebrow}</p>
            <ol className="space-y-1">
              {categories.map((cat, i) => (
                <li key={cat.slug}>
                  <a
                    href={`#${cat.slug}`}
                    className="group flex items-center justify-between gap-4 rounded-xl px-3 py-2.5 text-sm text-white/80 transition-colors hover:bg-white/[0.08] hover:text-white"
                  >
                    <span className="flex items-center gap-3">
                      <span aria-hidden className={`tone-dot ${toneClass(cat.tone)}`} />
                      <span className="font-mono text-[11px] text-white/62">{String(i + 1).padStart(2, '0')}</span>
                      {cat.title}
                    </span>
                    <ArrowUpRight size={14} aria-hidden="true" className="text-white/55 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        }
      />

      <section className="section relative overflow-hidden">
        <div className="orb orb-pink -right-32 top-24 h-[28rem] w-[28rem]" aria-hidden />
        <div className="orb orb-amber -left-40 bottom-24 h-[26rem] w-[26rem]" aria-hidden />
        <div className="container-x relative">
          <ServiceCategories
            locale={locale}
            categories={categories}
            learnMore={dict.common.learnMore}
            quote={dict.common.quote}
            anchors
          />

          <Reveal className="mt-14">
            <div className="glass-panel flex flex-col gap-6 p-7 md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <p className="eyebrow mb-3">{dict.common.quote}</p>
                <h2 className="text-display-3">{t.ctaTitle}</h2>
                <p className="mt-2 max-w-xl text-white/75">{t.ctaText}</p>
              </div>
              <Link href={localeHref(locale, '/contact')} className="btn btn-primary group shrink-0">
                {dict.common.quoteLong}
                <ArrowUpRight size={17} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        locale={locale}
        title={dict.home.ctaTitle}
        text={dict.home.ctaText}
        primaryLabel={dict.common.quoteLong}
        reassurance={dict.common.reassurance}
      />
    </>
  );
}
