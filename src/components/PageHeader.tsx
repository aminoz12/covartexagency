import Link from 'next/link';
import { SITE_URL } from '@/config/site';
import { localeHref, type Locale } from '@/i18n/config';

export interface Crumb {
  label: string;
  /** Logical path (without locale prefix). */
  href?: string;
}

interface PageHeaderProps {
  locale: Locale;
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  breadcrumb?: Crumb[];
  /** Optional primary/secondary actions rendered under the subtitle. */
  actions?: React.ReactNode;
  /** Optional right-column content on large screens. */
  aside?: React.ReactNode;
  /** Taller header for landing-style pages. */
  size?: 'default' | 'tall';
}

/**
 * Header for every inner page (v4): warm magenta / amber glows (plus the
 * area tone when the page has one), mono-caps breadcrumb, silver-gradient
 * title. Emits BreadcrumbList JSON-LD when a breadcrumb is provided.
 */
export default function PageHeader({
  locale,
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  actions,
  aside,
  size = 'default',
}: PageHeaderProps) {
  const breadcrumbJsonLd =
    breadcrumb && breadcrumb.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumb.map((c, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: c.label,
            ...(c.href ? { item: `${SITE_URL}${localeHref(locale, c.href)}` } : {}),
          })),
        }
      : null;

  return (
    <section
      className={`page-hero flex flex-col justify-end pt-32 pb-14 md:pb-20 ${
        size === 'tall' ? 'min-h-[62vh] md:pt-44' : 'min-h-[46vh] md:pt-40'
      }`}
    >
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      )}

      <div className="container-x relative w-full">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-7 rise rise-1">
            <ol className="flex flex-wrap items-center gap-2 text-[11px] font-mono uppercase tracking-[0.14em] text-white/62">
              {breadcrumb.map((c, i) => (
                <li key={`${c.label}-${i}`} className="flex items-center gap-2">
                  {c.href ? (
                    <Link href={localeHref(locale, c.href)} className="hover:text-white transition-colors">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-white/85 line-clamp-2 normal-case tracking-normal">{c.label}</span>
                  )}
                  {i < breadcrumb.length - 1 && <span aria-hidden className="text-white/30">/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className={aside ? 'grid lg:grid-cols-12 gap-10 lg:items-end' : ''}>
          <div className={aside ? 'lg:col-span-8' : ''}>
            {eyebrow && <p className="eyebrow mb-6 rise rise-1">{eyebrow}</p>}
            <h1 className="text-display-1 max-w-5xl rise rise-2">
              <span className="text-silver">{title}</span>
            </h1>
            {subtitle && (
              <p className="lead mt-6 max-w-2xl rise rise-3">{subtitle}</p>
            )}
            {actions && <div className="mt-9 flex flex-wrap items-center gap-4 rise rise-4">{actions}</div>}
          </div>
          {aside && <div className="lg:col-span-4 rise rise-4">{aside}</div>}
        </div>
      </div>
    </section>
  );
}
