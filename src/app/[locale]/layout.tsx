import type { Metadata, Viewport } from 'next';
import { Lexend } from 'next/font/google';
import { notFound } from 'next/navigation';
import '../globals.css';
import { SITE_URL, siteConfig, siteMeta } from '@/config/site';
import { isLocale, languageAlternates, localeHref, locales, ogLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionary';
import JsonLd from '@/components/seo/JsonLd';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MobileCta from '@/components/MobileCta';

// One variable font for the whole site, self-hosted by next/font (no
// third-party request). Geometric and wide, like the design reference.
const lexend = Lexend({ variable: '--font-lexend', subsets: ['latin'], display: 'swap' });

// Pre-render both locales; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const meta = siteMeta[locale];

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: meta.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: {
      canonical: localeHref(locale, '/'),
      languages: languageAlternates('/'),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
      url: localeHref(locale, '/'),
      siteName: siteConfig.name,
      locale: ogLocale[locale],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#141414',
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Params }>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    // Font variable on <html> so :root tokens (--font-display) can reference it.
    <html lang={locale} className={lexend.variable}>
      <body className="antialiased">
        <JsonLd locale={locale} />
        <Navigation locale={locale} nav={dict.nav} />
        <main className="min-h-screen">{children}</main>
        <Footer locale={locale} dict={dict} />
        <MobileCta
          locale={locale}
          quoteLabel={dict.common.quote}
          callLabel={dict.common.call}
          phoneHref={siteConfig.phoneHref}
        />
      </body>
    </html>
  );
}
