import type { Metadata } from 'next';
import { Check, Clock, Mail, Phone } from 'lucide-react';
import { isLocale, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionary';
import { getServices } from '@/lib/services';
import { siteConfig } from '@/config/site';
import { pageMetadata } from '@/lib/seo';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/Reveal';

type Params = Promise<{ locale: string }>;
type SearchParams = Promise<{ service?: string | string[] }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale).contactPage;
  return pageMetadata({
    locale,
    path: '/contact',
    title: locale === 'fr' ? 'Devis gratuit — Contactez Covartex' : 'Free quote — Contact Covartex',
    description: t.subtitle,
  });
}

export default async function ContactPage({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const sp = await searchParams;
  const initialService = Array.isArray(sp.service) ? sp.service[0] : sp.service;
  const dict = getDictionary(locale);
  const t = dict.contactPage;
  const services = getServices(locale).map((s) => ({ slug: s.slug, name: s.name }));

  return (
    <>
      <PageHeader
        locale={locale}
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
        breadcrumb={[{ label: dict.common.home, href: '/' }, { label: dict.common.contact }]}
      />

      <section className="section relative overflow-hidden">
        <div className="orb orb-pink -right-32 top-10 h-[28rem] w-[28rem]" aria-hidden />
        <div className="orb orb-amber -left-40 bottom-10 h-[26rem] w-[26rem]" aria-hidden />
        <div className="container-x relative">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-7">
              <ContactForm locale={locale} t={t} services={services} initialService={initialService} />
            </Reveal>

            <aside className="space-y-5 lg:col-span-5">
              <Reveal delay={0.08}>
                <div className="glass-panel p-6 md:p-8">
                  <p className="eyebrow mb-3">{t.eyebrow}</p>
                  <h2 className="text-display-3">{t.sideTitle}</h2>
                  <ol className="timeline mt-7 space-y-6 pl-12">
                    {t.steps.map((step, i) => (
                      <li key={step} className="relative">
                        <span className="glow-dot absolute -left-12 top-0">{i + 1}</span>
                        <p className="pt-1 leading-relaxed text-white/80">{step}</p>
                      </li>
                    ))}
                  </ol>
                  <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-[11px] font-mono uppercase tracking-[0.14em] text-white/62">
                    {dict.common.reassurance.map((r) => (
                      <li key={r} className="inline-flex items-center gap-1.5">
                        <Check size={12} strokeWidth={2} aria-hidden="true" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="card p-6 md:p-7">
                  <h2 className="text-display-3">{t.directTitle}</h2>
                  <dl className="mt-5 divide-y divide-white/10">
                    <div className="flex items-center gap-4 py-3.5">
                      <dt className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] text-white">
                        <Mail size={16} strokeWidth={1.5} aria-hidden="true" />
                        <span className="sr-only">E-mail</span>
                      </dt>
                      <dd>
                        <a href={`mailto:${siteConfig.email}`} className="text-white transition-colors hover:underline">
                          {siteConfig.email}
                        </a>
                      </dd>
                    </div>
                    <div className="flex items-center gap-4 py-3.5">
                      <dt className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] text-white">
                        <Phone size={16} strokeWidth={1.5} aria-hidden="true" />
                        <span className="sr-only">{t.phone}</span>
                      </dt>
                      <dd>
                        <a href={siteConfig.phoneHref} className="text-white transition-colors hover:underline">
                          {siteConfig.phone}
                        </a>
                      </dd>
                    </div>
                    <div className="flex items-center gap-4 py-3.5">
                      <dt className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] text-white">
                        <Clock size={16} strokeWidth={1.5} aria-hidden="true" />
                        <span className="sr-only">—</span>
                      </dt>
                      <dd className="text-white/72">{t.hours}</dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
