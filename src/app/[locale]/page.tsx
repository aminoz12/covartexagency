import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, BarChart3, Receipt, Rocket, UserRound, type LucideIcon } from 'lucide-react';
import { isLocale, localeHref, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionary';
import { getCategories } from '@/lib/services';
import { getProjects, homeFaq, stats, testimonials } from '@/lib/agencyData';
import { siteMeta } from '@/config/site';
import { pageMetadata } from '@/lib/seo';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import Faq from '@/components/Faq';
import CtaBand from '@/components/CtaBand';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import ServiceShowcase from '@/components/ServiceShowcase';
import ProjectCard from '@/components/ProjectCard';

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const meta = siteMeta[locale];
  return {
    ...pageMetadata({ locale, path: '/', title: meta.title, description: meta.description }),
    // Homepage: keep the full brand title, no template suffix.
    title: { absolute: meta.title },
  };
}

const whyIcons: LucideIcon[] = [UserRound, Receipt, BarChart3, Rocket];

/** "Dr Sophie M." → "SM" for the testimonial avatar. */
function initials(name: string): string {
  return name
    .replace(/^(Dr|Maître|Me)\s+/i, '')
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default async function HomePage({ params }: { params: Params }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const t = dict.home;
  const categories = getCategories(locale);
  const featured = getProjects(locale).filter((p) => p.featured).slice(0, 3);
  const h = (path: string) => localeHref(locale, path);

  return (
    <>
      {/* ───────── Hero ───────── */}
      <Hero locale={locale} home={t} common={dict.common} stats={stats[locale].slice(0, 2)} />

      {/* ───────── Ribbon ───────── */}
      <Marquee items={t.marquee} label={t.servicesEyebrow} />

      {/* ───────── Services ───────── */}
      <section id="services" className="section relative scroll-mt-20 overflow-hidden pt-10 md:pt-14">
        <div className="orb orb-pink -left-48 top-1/3 h-[28rem] w-[28rem]" aria-hidden />
        <div className="orb orb-amber -right-48 top-2/3 h-[28rem] w-[28rem]" aria-hidden />
        <div className="container-x relative">
          <Reveal className="mx-auto mb-16 max-w-3xl text-center md:mb-24">
            <h2 className="text-display-1">{t.servicesEyebrow}</h2>
            <p className="lead mx-auto mt-5 max-w-2xl">
              {t.servicesTitle} {t.servicesSubtitle}
            </p>
          </Reveal>
          <ServiceShowcase
            locale={locale}
            categories={categories}
            learnMore={dict.common.learnMore}
            quote={dict.common.quote}
          />
        </div>
      </section>

      {/* ───────── Why ───────── */}
      {/* The hero already shows the first two figures; the other two sit here
          so no number appears twice on the page. */}
      <section className="section relative overflow-hidden pt-0">
        <div className="orb orb-pink -right-32 top-10 h-96 w-96" aria-hidden />
        <div className="container-x relative">
          <hr className="hairline mb-16 md:mb-20" />
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow mb-5">{t.whyEyebrow}</p>
                <h2 className="text-display-2">{t.whyTitle}</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <dl className="mt-8 grid max-w-md grid-cols-2 gap-4 md:mt-10">
                  {stats[locale].slice(2).map((s) => (
                    <div key={s.label} className="stat-card flex flex-col-reverse">
                      <dt className="mt-1.5 text-[11px] uppercase leading-snug tracking-[0.12em] text-white/62">{s.label}</dt>
                      <dd className="text-3xl font-medium tracking-tight text-white tabular-nums">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {t.why.map((w, i) => {
                const Icon = whyIcons[i % whyIcons.length];
                return (
                  <Reveal key={w.title} delay={i * 0.08}>
                    <div className="card card-hover h-full p-6 md:p-7">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] text-white">
                        <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                      </span>
                      <h3 className="mt-5 text-xl text-white">{w.title}</h3>
                      <p className="mt-2 leading-relaxed text-white/75">{w.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Work ───────── */}
      <section className="section relative overflow-hidden border-y border-white/10 bg-white/[0.012]">
        <div className="orb orb-amber -left-40 bottom-0 h-[26rem] w-[26rem]" aria-hidden />
        <div className="container-x relative">
          <SectionHeading
            eyebrow={t.workEyebrow}
            title={t.workTitle}
            action={
              <Link href={h('/portfolio')} className="link-arrow">
                {dict.common.seeAll}
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            }
          />
          <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08} className="h-full">
                <ProjectCard project={p} href={h(`/portfolio/${p.slug}`)} readCase={dict.common.readCase} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Process ───────── */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow={t.processEyebrow} title={t.processTitle} />
          <ol className="timeline timeline-h grid gap-5 md:grid-cols-4 lg:gap-6">
            {t.process.map((step, i) => (
              <li key={step.title} className="relative pl-12 md:pl-0">
                <Reveal delay={i * 0.1} className="h-full">
                  <span className="glow-dot absolute -left-12 top-0 md:static md:mb-5">{i + 1}</span>
                  <div className="card h-full p-6 md:p-7">
                    <h3 className="text-xl text-white">{step.title}</h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/75">{step.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
          <Reveal className="mt-12">
            <Link href={h('/contact')} className="btn btn-primary group">
              {dict.common.quoteLong}
              <ArrowUpRight size={17} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ───────── Testimonials ───────── */}
      <section className="section relative overflow-hidden">
        <div className="orb orb-pink right-1/4 top-1/3 h-80 w-80" aria-hidden />
        <div className="container-x relative">
          <Reveal className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
            <p className="eyebrow mb-5">{t.testimonialsEyebrow}</p>
            <h2 className="text-display-1">{t.testimonialsTitle}</h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
            {testimonials[locale].map((tm, i) => (
              <Reveal key={tm.name} delay={i * 0.08} className="h-full">
                <figure className="card flex h-full flex-col p-6 md:p-8">
                  <figcaption className="flex items-center gap-3">
                    <span className="avatar" aria-hidden="true">
                      {initials(tm.name)}
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-white">{tm.name}</span>
                      <span className="block text-xs text-white/62">{tm.role}</span>
                    </span>
                  </figcaption>
                  <blockquote className="mt-6 flex-1 font-light leading-relaxed text-white/85 md:text-[1.0625rem]">
                    “{tm.quote}”
                  </blockquote>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="section pt-0">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow mb-5">{t.faqEyebrow}</p>
                <h2 className="text-display-2">{t.faqTitle}</h2>
              </Reveal>
            </div>
            <Reveal className="lg:col-span-8">
              <Faq items={homeFaq[locale]} jsonLd />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        locale={locale}
        title={t.ctaTitle}
        text={t.ctaText}
        primaryLabel={dict.common.quoteLong}
        secondaryLabel={t.ctaSecondary}
        secondaryHref="/services"
        reassurance={dict.common.reassurance}
      />
    </>
  );
}
