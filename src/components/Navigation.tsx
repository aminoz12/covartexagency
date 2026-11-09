'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { localeHref, locales, type Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionary';

interface NavigationProps {
  locale: Locale;
  nav: Dictionary['nav'];
}

/**
 * Strip any locale prefix to get the logical path. On the server, after the
 * middleware rewrite, usePathname() reports "/fr/..."; in the browser it
 * reports the clean URL. Stripping both keeps SSR and client in sync.
 */
function logicalPath(pathname: string): string {
  for (const l of locales) {
    if (pathname === `/${l}`) return '/';
    if (pathname.startsWith(`/${l}/`)) return pathname.slice(l.length + 1);
  }
  return pathname;
}

export default function Navigation({ locale, nav }: NavigationProps) {
  const pathname = usePathname() || '/';
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);
  const path = logicalPath(pathname);
  const onHero = path === '/' && heroVisible;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (path !== '/') return;
    const hero = document.getElementById('home-hero');
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { rootMargin: '-72px 0px 0px 0px' },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [path]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const otherLocale: Locale = locale === 'fr' ? 'en' : 'fr';
  const switchHref = localeHref(otherLocale, path);

  const items = [
    { label: nav.services, href: '/services' },
    { label: nav.industries, href: '/industries' },
    { label: nav.work, href: '/portfolio' },
    { label: nav.about, href: '/about' },
    { label: nav.blog, href: '/blog' },
  ];

  const isActive = (href: string) => path === href || path.startsWith(`${href}/`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-200 font-sans text-white ${
        onHero && !scrolled && !open
          ? 'bg-transparent border-b border-transparent'
          : 'bg-[#141414]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
      }`}
    >
      <div className="container-x">
        <div className="flex h-16 md:h-[4.5rem] items-center justify-between gap-6">
          <Link href={localeHref(locale, '/')} className="flex items-center shrink-0" aria-label="Covartex">
            <Image
              src="/logo.png"
              alt="Covartex"
              width={320}
              height={100}
              className="h-auto w-28 sm:w-32 md:w-36 object-contain"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {items.map((item) => (
              <Link
                key={item.href}
                href={localeHref(locale, item.href)}
                className={`relative px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] transition-colors after:absolute after:inset-x-4 after:-bottom-0.5 after:h-px after:bg-[linear-gradient(90deg,#ff4f9a,#ff9a3c)] after:transition-opacity ${
                  isActive(item.href) ? 'text-white after:opacity-100' : 'text-white/70 after:opacity-0 hover:text-white'
                }`}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <Link
              href={switchHref}
              hrefLang={otherLocale}
              lang={otherLocale}
              aria-label={nav.switchAria}
              className="hidden sm:inline-flex items-center rounded-full border border-white/15 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-white/75 transition-colors hover:border-white/40 hover:text-white"
            >
              {nav.switchTo}
            </Link>

            <Link
              href={localeHref(locale, '/contact')}
              className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-white px-4 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#141414] shadow-[0_4px_24px_-4px_rgba(255,255,255,0.3)] transition-shadow hover:shadow-[0_6px_28px_-4px_rgba(255,122,89,0.6)] sm:px-5 sm:py-2.5 sm:text-xs"
            >
              {nav.quote}
              <ArrowUpRight size={14} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/5 transition-colors"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? nav.close : nav.menu}
            >
              <span className="relative block w-5 h-4" aria-hidden>
                <span
                  className={`absolute left-0 h-0.5 w-5 bg-current transition-transform duration-200 ${
                    open ? 'top-[7px] rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity duration-200 ${
                    open ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-5 bg-current transition-transform duration-200 ${
                    open ? 'top-[7px] -rotate-45' : 'top-[14px]'
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="lg:hidden border-t border-white/10 bg-[#141414]/95 backdrop-blur-xl">
          <nav className="container-x py-3 flex flex-col" aria-label="Mobile">
            {items.map((item) => (
              <Link
                key={item.href}
                href={localeHref(locale, item.href)}
                className={`py-3 text-base font-medium border-b border-white/10 transition-colors ${
                  isActive(item.href) ? 'text-white' : 'text-white/75 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={localeHref(locale, '/contact')}
              className="py-3 text-base font-medium border-b border-white/10 text-white/75 hover:text-white"
            >
              {nav.contact}
            </Link>
            <Link
              href={switchHref}
              hrefLang={otherLocale}
              lang={otherLocale}
              className="py-3 text-sm font-mono tracking-wider text-white/60 hover:text-white"
            >
              {nav.switchTo}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
