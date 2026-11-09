'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Phone } from 'lucide-react';
import { localeHref, type Locale } from '@/i18n/config';

interface MobileCtaProps {
  locale: Locale;
  quoteLabel: string;
  callLabel: string;
  phoneHref: string;
}

/**
 * Sticky "Devis gratuit" bar on phones and tablets. Most visitors are on
 * mobile and the header CTA scrolls out of reach; this keeps the one
 * action one tap away. Appears after the first screen, never on /contact.
 */
export default function MobileCta({ locale, quoteLabel, callLabel, phoneHref }: MobileCtaProps) {
  const pathname = usePathname() || '/';
  const [visible, setVisible] = useState(false);
  const onContact = /(^|\/)contact(\/|$)/.test(pathname);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (onContact) return null;

  return (
    <div
      inert={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#141414]/85 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-4px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-[transform,opacity] duration-300 lg:hidden ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0'
      }`}
    >
      <div className="mx-auto flex max-w-xl items-center gap-3">
        <a href={phoneHref} aria-label={callLabel} className="btn btn-secondary shrink-0 !px-4">
          <Phone size={17} strokeWidth={1.5} aria-hidden="true" />
        </a>
        <Link href={localeHref(locale, '/contact')} className="btn btn-primary flex-1">
          {quoteLabel}
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
