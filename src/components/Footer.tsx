import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { localeHref, type Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionary';
import { getCategories, toneClass } from '@/lib/services';
import { getIndustries } from '@/lib/industries';
import { siteConfig } from '@/config/site';

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

/**
 * Site footer as a floating liquid-glass panel — the same material as the
 * hero's footer card — over the ambient ground.
 */
export default function Footer({ locale, dict }: FooterProps) {
  const year = new Date().getFullYear();
  const categories = getCategories(locale);
  const h = (path: string) => localeHref(locale, path);

  const company = [
    { label: dict.nav.about, href: '/about' },
    { label: dict.nav.work, href: '/portfolio' },
    { label: dict.nav.blog, href: '/blog' },
    { label: dict.footer.glossary, href: '/glossary' },
    { label: dict.nav.contact, href: '/contact' },
  ];
  const industries = getIndustries(locale);

  const socials = [
    { label: 'LinkedIn', icon: Linkedin, href: siteConfig.social.linkedin },
    { label: 'Instagram', icon: Instagram, href: siteConfig.social.instagram },
    { label: 'Facebook', icon: Facebook, href: siteConfig.social.facebook },
  ];

  return (
    // pb-28 below lg: room for the sticky MobileCta so it never covers the footer.
    <footer className="relative overflow-hidden pb-28 pt-4 lg:pb-10">
      <div className="orb orb-pink -bottom-40 -right-24 h-[28rem] w-[28rem]" aria-hidden />
      <div className="orb orb-amber -left-32 bottom-10 h-96 w-96" aria-hidden />

      <div className="container-x relative">
        {/* No CTA row: pages close with CtaBand right above, and the nav and mobile bar carry the quote button everywhere else. */}
        <div className="glass-panel p-7 md:p-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 lg:gap-8">
            {/* Brand */}
            <div className="md:col-span-4">
              <Image src="/logo.png" alt="Covartex" width={320} height={100} className="h-9 w-auto object-contain" />
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/72">{dict.footer.tagline}</p>
              <div className="mt-6 space-y-2.5 text-sm">
                <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 text-white/85 transition-colors hover:text-white">
                  <Mail size={14} strokeWidth={1.5} aria-hidden="true" />
                  {siteConfig.email}
                </a>
                <br />
                <a href={siteConfig.phoneHref} className="inline-flex items-center gap-2 text-white/85 transition-colors hover:text-white">
                  <Phone size={14} strokeWidth={1.5} aria-hidden="true" />
                  {siteConfig.phone}
                </a>
              </div>
            </div>

            {/* Services by category */}
            <div className="grid gap-8 sm:grid-cols-2 md:col-span-5">
              {categories.map((cat) => (
                <div key={cat.slug}>
                  <h3 className="mb-4 text-[11px] font-mono uppercase tracking-[0.18em] text-white/60">
                    <Link href={h(`/services#${cat.slug}`)} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                      <span aria-hidden className={`tone-dot ${toneClass(cat.tone)}`} />
                      {cat.title}
                    </Link>
                  </h3>
                  <ul className="space-y-2.5">
                    {cat.services.map((s) => (
                      <li key={s.slug}>
                        <Link href={h(`/services/${s.slug}`)} className="text-sm text-white/72 transition-colors hover:text-white">
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Company, industries, legal */}
            <div className="grid grid-cols-2 gap-8 md:col-span-3 md:grid-cols-1">
              <div>
                <h3 className="mb-4 text-[11px] font-mono uppercase tracking-[0.18em] text-white/60">{dict.footer.company}</h3>
                <ul className="space-y-2.5">
                  {company.map((l) => (
                    <li key={l.href}>
                      <Link href={h(l.href)} className="text-sm text-white/72 transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-[11px] font-mono uppercase tracking-[0.18em] text-white/60">
                  <Link href={h('/industries')} className="transition-colors hover:text-white">
                    {dict.footer.industries}
                  </Link>
                </h3>
                <ul className="space-y-2.5">
                  {industries.map((ind) => (
                    <li key={ind.slug}>
                      <Link href={h(`/industries/${ind.slug}`)} className="text-sm text-white/72 transition-colors hover:text-white">
                        {ind.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-[11px] font-mono uppercase tracking-[0.18em] text-white/60">{dict.footer.legal}</h3>
                <ul className="space-y-2.5">
                  <li>
                    <Link href={h('/privacy')} className="text-sm text-white/72 transition-colors hover:text-white">
                      {dict.footer.privacy}
                    </Link>
                  </li>
                  <li>
                    <Link href={h('/terms')} className="text-sm text-white/72 transition-colors hover:text-white">
                      {dict.footer.terms}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] font-mono uppercase tracking-[0.14em] text-white/58">
              © {year} {siteConfig.name} · {dict.footer.rights}
            </p>
            <div className="flex items-center gap-1">
              {socials.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
