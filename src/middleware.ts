import { NextResponse, type NextRequest } from 'next/server';
import { defaultLocale, locales } from '@/i18n/config';

/**
 * Locale routing:
 *  - /en/*  → served as-is (English)
 *  - /fr/*  → 308 redirect to /* (French is canonical without prefix)
 *  - /*     → rewritten internally to /fr/* (French, default)
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Already-prefixed non-default locale: pass through.
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
      return NextResponse.next();
    }
  }

  // Explicit default-locale prefix: redirect to the clean URL.
  if (pathname === `/${defaultLocale}` || pathname.startsWith(`/${defaultLocale}/`)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(`/${defaultLocale}`.length) || '/';
    return NextResponse.redirect(url, 308);
  }

  // Unprefixed: rewrite to the default locale segment.
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip API routes, Next internals, metadata routes and any file with an extension.
  matcher: ['/((?!api|_next|opengraph-image|.*\\..*).*)'],
};
