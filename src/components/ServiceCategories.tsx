import Link from 'next/link';
import { ArrowUpRight, Globe, Scale, Smartphone, Sparkles, type LucideIcon } from 'lucide-react';
import { localeHref, type Locale } from '@/i18n/config';
import { toneClass, type LocalizedCategory } from '@/lib/services';
import Reveal from '@/components/Reveal';

interface ServiceCategoriesProps {
  locale: Locale;
  categories: LocalizedCategory[];
  learnMore: string;
  quote: string;
  /** Anchor ids on each category block (used by /services). */
  anchors?: boolean;
}

const icons: Record<string, LucideIcon> = {
  'site-web-visibilite': Globe,
  'applications-sur-mesure': Smartphone,
  'ia-automatisation': Sparkles,
  'services-juridiques': Scale,
};

/**
 * The 4 practice areas as panels, each listing its services and carrying
 * its area colour (icon, eyebrow dot, top edge, hover). One "Devis gratuit" per panel.
 */
export default function ServiceCategories({ locale, categories, learnMore, quote, anchors = false }: ServiceCategoriesProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
      {categories.map((cat, i) => {
        const Icon = icons[cat.slug] ?? Sparkles;
        return (
          <Reveal key={cat.slug} delay={i * 0.08}>
            <div id={anchors ? cat.slug : undefined} className={`glass-panel tone-edge ${toneClass(cat.tone)} flex h-full flex-col p-6 md:p-8 scroll-mt-28`}>
              <span className="index-mark pointer-events-none absolute right-6 top-4" aria-hidden>
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="relative flex items-center gap-4">
                <span className="tone-icon h-12 w-12">
                  <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <p className="eyebrow">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="mt-1 text-display-3">{cat.title}</h3>
                </div>
              </div>
              <p className="relative mt-4 text-white/75 leading-relaxed">{cat.description}</p>

              <ul className="relative mt-6 divide-y divide-white/10 border-y border-white/10">
                {cat.services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={localeHref(locale, `/services/${s.slug}`)}
                      className="group -mx-3 flex items-start justify-between gap-4 rounded-xl px-3 py-4 transition-colors hover:bg-white/[0.06]"
                    >
                      <span>
                        <span className="block font-medium text-white">{s.name}</span>
                        <span className="mt-1 block text-sm leading-snug text-white/62 line-clamp-2">{s.promise}</span>
                      </span>
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.5}
                        aria-hidden="true"
                        className="mt-1 shrink-0 text-white/55 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--tone)]"
                      />
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="relative mt-7 flex flex-wrap items-center gap-4">
                <Link
                  href={localeHref(locale, `/contact?service=${cat.services[0]?.slug ?? ''}`)}
                  className="btn btn-primary btn-sm"
                >
                  {quote}
                </Link>
                <Link href={localeHref(locale, `/services#${cat.slug}`)} className="link-arrow text-sm">
                  {learnMore}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
