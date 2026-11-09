import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { localeHref, type Locale } from '@/i18n/config';
import { toneClass, type LocalizedCategory } from '@/lib/services';
import Reveal from '@/components/Reveal';
import ServiceVisual from '@/components/ServiceVisual';

interface ServiceShowcaseProps {
  locale: Locale;
  categories: LocalizedCategory[];
  learnMore: string;
  quote: string;
}

/**
 * Homepage "Our services": one row per practice area, text and checklist
 * on one side, illustration on the other, alternating sides. Each service
 * in the checklist links to its page (internal links for SEO); each row
 * has the quote CTA pre-filled with the area's first service.
 */
export default function ServiceShowcase({ locale, categories, learnMore, quote }: ServiceShowcaseProps) {
  const h = (path: string) => localeHref(locale, path);

  return (
    <div className="space-y-20 md:space-y-28">
      {categories.map((cat, i) => {
        const flip = i % 2 === 1;
        return (
          <div key={cat.slug} id={cat.slug} className={`${toneClass(cat.tone)} grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16`}>
            <Reveal className={flip ? 'lg:order-2' : ''}>
              <p className="eyebrow mb-4">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="text-display-2">{cat.title}</h3>
              <p className="mt-4 max-w-xl font-light leading-relaxed text-white/75">{cat.description}</p>

              <ul className="mt-7 space-y-3.5">
                {cat.services.map((s) => (
                  <li key={s.slug}>
                    <Link href={h(`/services/${s.slug}`)} className="group inline-flex items-start gap-3 text-white/85 transition-colors hover:text-white">
                      <span className="check-dot mt-0.5">
                        <Check size={13} strokeWidth={2.5} aria-hidden="true" />
                      </span>
                      <span className="underline-offset-4 group-hover:underline">{s.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link href={h(`/services#${cat.slug}`)} className="btn btn-secondary group">
                  {learnMore}
                  <ArrowUpRight size={15} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link href={h(`/contact?service=${cat.services[0]?.slug ?? ''}`)} className="btn btn-primary">
                  {quote}
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1} className={flip ? 'lg:order-1' : ''}>
              <ServiceVisual tone={cat.tone} className="mx-auto h-auto w-full max-w-[34rem]" />
            </Reveal>
          </div>
        );
      })}
    </div>
  );
}
