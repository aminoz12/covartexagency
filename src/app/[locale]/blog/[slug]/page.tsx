import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { isLocale, localeHref, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionary';
import { getPost, getPostSlugs, getPosts } from '@/lib/blog';
import { getService, toneClass } from '@/lib/services';
import { SITE_URL, siteConfig } from '@/config/site';
import { anchorIds, formatDate, pageMetadata } from '@/lib/seo';
import PageHeader from '@/components/PageHeader';
import CtaBand from '@/components/CtaBand';
import Faq from '@/components/Faq';
import Reveal from '@/components/Reveal';

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const post = getPost(slug, locale);
  if (!post) return { title: locale === 'fr' ? 'Article introuvable' : 'Post not found' };
  return pageMetadata({
    locale,
    path: `/blog/${post.slug}`,
    title: post.title,
    description: post.description,
    type: 'article',
    publishedTime: post.date,
    modifiedTime: post.updated,
    tags: post.tags,
  });
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { locale: raw, slug } = await params;
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const t = dict.blogPage;
  const post = getPost(slug, locale);
  if (!post) notFound();

  const h = (path: string) => localeHref(locale, path);
  const url = `${SITE_URL}${h(`/blog/${post.slug}`)}`;
  const relatedService = post.relatedService ? getService(post.relatedService, locale) : undefined;
  // Prefer posts that point to the same service (topical cluster), then the newest.
  const morePosts = getPosts(locale)
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => Number(b.relatedService === post.relatedService) - Number(a.relatedService === post.relatedService))
    .slice(0, 2);
  const anchors = anchorIds(post.sections.map((s) => s.heading));
  const showToc = post.sections.length >= 4;

  const wordCount = [
    ...post.intro,
    ...post.sections.flatMap((s) => [s.heading, ...(s.paragraphs ?? []), ...(s.list ?? [])]),
    ...post.conclusion,
  ]
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.description,
    abstract: post.takeaways?.join(' '),
    url,
    image: siteConfig.ogImage,
    inLanguage: locale === 'fr' ? 'fr-FR' : 'en',
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    wordCount,
    articleSection: post.tags[0],
    keywords: post.tags.join(', '),
    author: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: siteConfig.name, url: SITE_URL },
    publisher: { '@id': `${SITE_URL}/#organization` },
    isPartOf: { '@id': `${SITE_URL}/#website` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    ...(relatedService
      ? { about: { '@id': `${SITE_URL}${h(`/services/${relatedService.slug}`)}#service`, name: relatedService.name } }
      : {}),
  };

  const meta = [
    formatDate(post.date, locale),
    post.updated && post.updated !== post.date ? `${t.updated} ${formatDate(post.updated, locale)}` : null,
    `${post.readingMinutes} ${dict.common.minRead}`,
    `${t.by} ${post.author}`,
  ]
    .filter(Boolean)
    .join(' · ');

  return (
    // The article wears the colour of the service it supports.
    <div className={toneClass(relatedService?.tone)}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHeader
        locale={locale}
        eyebrow={post.tags.join(' · ')}
        title={post.title}
        subtitle={meta}
        breadcrumb={[
          { label: dict.common.home, href: '/' },
          { label: dict.common.blog, href: '/blog' },
          { label: post.title },
        ]}
      />

      <section className="section relative overflow-hidden">
        <div className="orb orb-amber -left-40 top-1/3 h-[26rem] w-[26rem]" aria-hidden />
        <div className="container-x relative max-w-3xl">
          <article>
            {/* Answer-first summary: the block snippets and AI engines quote. */}
            {post.takeaways && post.takeaways.length > 0 && (
              <Reveal className="mb-12">
                <aside className="glass-panel p-6 md:p-8" aria-label={t.takeaways}>
                  <p className="eyebrow mb-4">{t.takeaways}</p>
                  <ul className="space-y-3">
                    {post.takeaways.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-lg leading-relaxed text-white/90">
                        <span aria-hidden className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </aside>
              </Reveal>
            )}

            <Reveal className="mb-12 space-y-4">
              {post.intro.map((p, i) => (
                <p key={i} className="text-display-3 !leading-snug text-white/95">
                  {p}
                </p>
              ))}
            </Reveal>

            {showToc && (
              <Reveal className="mb-12">
                <nav aria-label={t.toc} className="card p-6">
                  <p className="mb-3 text-[11px] font-mono uppercase tracking-[0.18em] text-white/60">{t.toc}</p>
                  <ol className="space-y-2">
                    {post.sections.map((section, i) => (
                      <li key={anchors[i]} className="flex gap-3 text-[0.9375rem]">
                        <span className="font-mono text-[11px] leading-6 text-white/55">{String(i + 1).padStart(2, '0')}</span>
                        <a href={`#${anchors[i]}`} className="text-white/75 transition-colors hover:text-white">
                          {section.heading}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </Reveal>
            )}

            <div className="space-y-12">
              {post.sections.map((section, i) => (
                <Reveal key={section.heading} delay={0.03 * i}>
                  <h2 id={anchors[i]} className="mb-4 scroll-mt-28 text-display-3">{section.heading}</h2>
                  {section.paragraphs?.map((p, j) => (
                    <p key={j} className="mb-4 text-lg leading-relaxed text-white/75">
                      {p}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="glass-panel mt-2 space-y-3 p-6 md:p-7">
                      {section.list.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-lg leading-relaxed text-white/82">
                          <span aria-hidden className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.code && (
                    <pre className="glass-panel mt-4 overflow-x-auto p-5 text-[0.8125rem] leading-relaxed text-white/85 md:p-6">
                      <code>{section.code}</code>
                    </pre>
                  )}
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-12 space-y-4 border-t border-white/10 pt-8">
              {post.conclusion.map((p, i) => (
                <p key={i} className="lead">
                  {p}
                </p>
              ))}
            </Reveal>

            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-14">
                <Reveal>
                  <h2 className="mb-6 text-display-3">{t.faq}</h2>
                </Reveal>
                <Reveal>
                  <Faq items={post.faqs} jsonLd />
                </Reveal>
              </div>
            )}
          </article>

          {relatedService && (
            <Reveal className="mt-14">
              <div className="glass-panel p-6 md:p-8">
                <p className="eyebrow">{t.relatedTitle}</p>
                <h2 className="mt-3 text-display-3">{relatedService.name}</h2>
                <p className="mt-2 leading-relaxed text-white/75">{relatedService.promise}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href={h(`/contact?service=${relatedService.slug}`)} className="btn btn-primary group">
                    {dict.common.quote}
                    <ArrowUpRight size={17} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                  <Link href={h(`/services/${relatedService.slug}`)} className="btn btn-secondary">
                    {t.relatedCta}
                  </Link>
                </div>
              </div>
            </Reveal>
          )}

          {morePosts.length > 0 && (
            <div className="mt-16">
              <Reveal>
                <p className="eyebrow mb-6">{t.more}</p>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {morePosts.map((p, i) => (
                  <Reveal key={p.slug} delay={i * 0.08} className="h-full">
                    <Link href={h(`/blog/${p.slug}`)} className="card card-hover flex h-full flex-col p-6">
                      <time dateTime={p.date} className="text-[11px] font-mono uppercase tracking-[0.14em] text-white/60">
                        {formatDate(p.date, locale)}
                      </time>
                      <h3 className="mt-3 leading-snug text-white">{p.title}</h3>
                    </Link>
                  </Reveal>
                ))}
              </div>
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
    </div>
  );
}
