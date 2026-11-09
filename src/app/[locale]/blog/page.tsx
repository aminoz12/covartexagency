import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { isLocale, localeHref, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionary';
import { getPosts } from '@/lib/blog';
import { serviceTone, toneClass } from '@/lib/services';
import { formatDate, pageMetadata } from '@/lib/seo';
import PageHeader from '@/components/PageHeader';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale).blogPage;
  return pageMetadata({
    locale,
    path: '/blog',
    title: locale === 'fr' ? 'Blog — Conseils site web, SEO, IA & juridique' : 'Blog — Website, SEO, AI & legal advice',
    description: t.subtitle,
  });
}

export default async function BlogPage({ params }: { params: Params }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const t = dict.blogPage;
  const [featured, ...rest] = getPosts(locale);
  const h = (path: string) => localeHref(locale, path);

  const meta = (post: typeof featured) => (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-mono uppercase tracking-[0.14em] text-white/60">
      <span aria-hidden className="tone-dot" />
      <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
      <span aria-hidden>·</span>
      <span>
        {post.readingMinutes} {dict.common.minRead}
      </span>
      <span aria-hidden>·</span>
      <span>{post.tags.join(' · ')}</span>
    </div>
  );

  return (
    <>
      <PageHeader
        locale={locale}
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
        breadcrumb={[{ label: dict.common.home, href: '/' }, { label: dict.common.blog }]}
      />

      <section className="section relative overflow-hidden">
        <div className="orb orb-pink -right-32 top-10 h-[26rem] w-[26rem]" aria-hidden />
        <div className="container-x relative">
          {featured && (
            <Reveal>
              <Link href={h(`/blog/${featured.slug}`)} className={`glass-panel tone-edge ${toneClass(serviceTone(featured.relatedService))} group grid gap-8 p-7 md:grid-cols-12 md:p-12`}>
                <div className="md:col-span-8">
                  {meta(featured)}
                  <h2 className="mt-5 text-display-2">{featured.title}</h2>
                  <p className="lead mt-5 max-w-2xl">{featured.description}</p>
                </div>
                <div className="flex items-end md:col-span-4 md:justify-end">
                  <span className="btn btn-secondary">
                    {dict.common.readMore}
                    <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          {rest.length > 0 && (
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:gap-6">
              {rest.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 2) * 0.08} className="h-full">
                  <Link href={h(`/blog/${post.slug}`)} className={`card card-hover tone-edge ${toneClass(serviceTone(post.relatedService))} group flex h-full flex-col p-6 md:p-8`}>
                    {meta(post)}
                    <h2 className="mt-4 text-display-3">{post.title}</h2>
                    <p className="mt-3 flex-1 leading-relaxed text-white/75">{post.description}</p>
                    <span className="link-arrow mt-6 text-sm">
                      {dict.common.readMore}
                      <ArrowUpRight size={15} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBand
        locale={locale}
        title={dict.home.ctaTitle}
        text={dict.home.ctaText}
        primaryLabel={dict.common.quoteLong}
        reassurance={dict.common.reassurance}
      />
    </>
  );
}
