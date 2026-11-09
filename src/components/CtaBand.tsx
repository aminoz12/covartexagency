import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { localeHref, type Locale } from '@/i18n/config';
import Reveal from '@/components/Reveal';

interface CtaBandProps {
  locale: Locale;
  title: string;
  text?: string;
  primaryLabel: string;
  /** Logical path for the primary button (default: /contact). */
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  reassurance?: readonly string[];
  /** Kept for call-site compatibility; the band is always cinematic now. */
  tone?: 'dark' | 'light';
}

/**
 * The conversion block on every page (v4): a dark panel lit pink and
 * orange from its corners, silver headline, white "Devis gratuit" pill.
 */
export default function CtaBand({
  locale,
  title,
  text,
  primaryLabel,
  primaryHref = '/contact',
  secondaryLabel,
  secondaryHref,
  reassurance,
}: CtaBandProps) {
  return (
    <section className="section pt-0">
      <div className="container-x">
        <Reveal>
          <div className="cta-panel px-6 py-16 text-center md:px-12 md:py-24">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-display-1">
                <span className="text-silver">{title}</span>
              </h2>
              {text && <p className="lead mx-auto mt-5 max-w-xl">{text}</p>}

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href={localeHref(locale, primaryHref)} className="btn btn-primary group w-full sm:w-auto">
                  {primaryLabel}
                  <ArrowUpRight
                    size={17}
                    aria-hidden="true"
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
                {secondaryLabel && secondaryHref && (
                  <Link href={localeHref(locale, secondaryHref)} className="btn btn-secondary w-full sm:w-auto">
                    {secondaryLabel}
                  </Link>
                )}
              </div>

              {reassurance && reassurance.length > 0 && (
                <ul className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.14em] text-white/62">
                  {reassurance.map((r) => (
                    <li key={r} className="inline-flex items-center gap-1.5">
                      <Check size={12} strokeWidth={2} aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
