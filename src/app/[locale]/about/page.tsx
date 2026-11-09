import type { Metadata } from 'next';
import { MessageSquare, ShieldCheck, Target, Users, type LucideIcon } from 'lucide-react';
import { isLocale, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionary';
import { stats } from '@/lib/agencyData';
import { pageMetadata } from '@/lib/seo';
import PageHeader from '@/components/PageHeader';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale).aboutPage;
  return pageMetadata({
    locale,
    path: '/about',
    title: locale === 'fr' ? 'À propos de Covartex' : 'About Covartex',
    description: t.subtitle,
  });
}

const valueIcons: LucideIcon[] = [Target, Users, ShieldCheck, MessageSquare];

export default async function AboutPage({ params }: { params: Params }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const t = dict.aboutPage;

  return (
    <>
      <PageHeader
        locale={locale}
        size="tall"
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
        breadcrumb={[{ label: dict.common.home, href: '/' }, { label: dict.common.about }]}
      />

      <section className="section relative overflow-hidden">
        <div className="orb orb-pink -right-32 top-20 h-[28rem] w-[28rem]" aria-hidden />
        <div className="orb orb-amber -left-40 bottom-20 h-[26rem] w-[26rem]" aria-hidden />
        <div className="container-x relative">
          {/* Mission */}
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow mb-5">{t.missionTitle}</p>
                <h2 className="text-display-2">{t.missionTitle}</h2>
              </Reveal>
            </div>
            <Reveal className="space-y-5 lg:col-span-8">
              {t.mission.map((p, i) => (
                <p key={p} className={i === 0 ? 'text-display-3 !leading-snug text-white/95' : 'lead'}>
                  {p}
                </p>
              ))}
            </Reveal>
          </div>

          {/* Stats */}
          <Reveal className="my-16 md:my-20">
            <dl className="glass-panel grid grid-cols-2 divide-white/10 md:grid-cols-4 md:divide-x">
              {stats[locale].map((s) => (
                <div key={s.label} className="px-6 py-7 md:px-8 md:py-9">
                  <dd className="font-mono text-3xl font-medium tracking-tight text-white md:text-4xl">{s.value}</dd>
                  <dt className="mt-2 text-[11px] font-mono uppercase tracking-[0.16em] text-white/60">{s.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Values */}
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow mb-5">{t.eyebrow}</p>
                <h2 className="text-display-2">{t.valuesTitle}</h2>
              </Reveal>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
              {t.values.map((v, i) => {
                const Icon = valueIcons[i % valueIcons.length];
                return (
                  <Reveal key={v.title} delay={i * 0.08} className="h-full">
                    <div className="card card-hover h-full p-6 md:p-7">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] text-white">
                        <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                      </span>
                      <h3 className="mt-5 text-xl text-white">{v.title}</h3>
                      <p className="mt-2 leading-relaxed text-white/75">{v.text}</p>
                    </div>
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
        reassurance={dict.common.reassurance}
      />
    </>
  );
}
