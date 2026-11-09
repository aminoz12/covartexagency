import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { localeHref, type Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionary';
import type { Stat } from '@/lib/agencyData';
import HeroArt from '@/components/HeroArt';

interface HeroProps {
  locale: Locale;
  home: Dictionary['home'];
  common: Dictionary['common'];
  /** Two figures shown in glass cards beside the artwork. */
  stats: Stat[];
}

/**
 * Homepage hero (v4): two-line headline (silver + gradient), the faceted
 * orb in the centre, stat cards on the left, pitch and the one CTA on the
 * right. Server component — no client JS; entrance and float are CSS.
 * On phones the order is headline → art → pitch/CTA → stats, so the CTA
 * stays near the first screen.
 */
export default function Hero({ locale, home, common, stats }: HeroProps) {
  return (
    <section id="home-hero" aria-labelledby="hero-title" className="relative overflow-hidden pb-16 pt-28 md:pb-20 md:pt-36">
      <div className="orb orb-pink -left-40 top-24 h-[30rem] w-[30rem]" aria-hidden />
      <div className="orb orb-amber -right-40 -top-10 h-[30rem] w-[30rem]" aria-hidden />

      <div className="container-x relative">
        <div className="rise rise-1 mb-6 text-center">
          <p className="eyebrow">{home.eyebrow}</p>
        </div>
        <h1 id="hero-title" className="hero-title rise rise-1 text-center">
          <span className="text-silver block">{home.heroLine1}</span>
          <span className="text-gradient inline-block">{home.heroLine2}</span>
        </h1>

        <div className="mt-2 grid items-center gap-8 lg:mt-0 lg:grid-cols-12 lg:gap-6">
          {/* Artwork */}
          <div className="rise rise-2 flex justify-center lg:order-2 lg:col-span-6">
            <HeroArt className="h-auto w-full max-w-[19rem] sm:max-w-[24rem] lg:max-w-[32rem]" />
          </div>

          {/* Pitch + CTA */}
          <div className="rise rise-3 text-center lg:order-3 lg:col-span-3 lg:text-left">
            <p className="mx-auto max-w-md text-[0.95rem] font-light leading-relaxed text-white/75 lg:mx-0">{home.subtitle}</p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:flex-col lg:items-start">
              <Link href={localeHref(locale, '/contact')} className="btn btn-primary group">
                {common.quote}
                <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link href={localeHref(locale, '/portfolio')} className="btn btn-secondary btn-sm">
                {common.seeWork}
              </Link>
            </div>
            <ul className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-[11px] uppercase tracking-[0.12em] text-white/62 lg:justify-start">
              {common.reassurance.map((r) => (
                <li key={r} className="inline-flex items-center gap-1.5">
                  <Check size={12} strokeWidth={2} aria-hidden="true" className="text-[var(--spark)]" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Stat cards */}
          <dl className="rise rise-4 grid grid-cols-2 gap-4 lg:order-1 lg:col-span-3 lg:max-w-[13rem] lg:grid-cols-1 lg:gap-6">
            {stats.map((s) => (
              <div key={s.label} className="stat-card flex flex-col-reverse">
                <dt className="mt-1.5 text-[11px] uppercase leading-snug tracking-[0.12em] text-white/62">{s.label}</dt>
                <dd className="text-3xl font-medium tracking-tight text-white tabular-nums">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
