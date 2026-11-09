import type { Metadata } from 'next';
import { isLocale, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionary';
import { siteConfig } from '@/config/site';
import { pageMetadata } from '@/lib/seo';
import PageHeader from '@/components/PageHeader';

type Params = Promise<{ locale: string }>;

/**
 * ⚠️ Template text — complete the legal entity details (company form,
 * capital, registration number, VAT, publication director, host) and have
 * the terms reviewed by a legal professional before launch.
 */
const content: Record<Locale, { title: string; updated: string; sections: { h: string; p: string[] }[] }> = {
  fr: {
    title: 'Mentions légales & conditions générales',
    updated: 'Dernière mise à jour : septembre 2026',
    sections: [
      {
        h: 'Éditeur du site',
        p: [
          `${siteConfig.name} — ${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}. Contact : ${siteConfig.email}, ${siteConfig.phone}. [Forme juridique, capital, RCS et numéro de TVA à compléter.]`,
        ],
      },
      {
        h: 'Hébergement',
        p: ['[Nom et adresse de l’hébergeur à compléter.]'],
      },
      {
        h: 'Devis et commandes',
        p: [
          'Tout devis est gratuit, sans engagement et valable 30 jours. La commande est ferme à la signature du devis et au versement de l’acompte indiqué. Le périmètre écrit dans le devis fait foi ; toute demande hors périmètre fait l’objet d’un devis complémentaire.',
        ],
      },
      {
        h: 'Prix et paiement',
        p: [
          'Les prix sont exprimés hors taxes. Sauf mention contraire : 40 % à la commande, 60 % à la livraison ; les prestations mensuelles sont facturées d’avance. Tout retard de paiement entraîne des pénalités au taux légal en vigueur et une indemnité forfaitaire de recouvrement.',
        ],
      },
      {
        h: 'Livraison et propriété',
        p: [
          'Les délais indiqués sont donnés à titre indicatif et courent à réception des éléments nécessaires. Après paiement intégral, le client devient propriétaire des livrables (site, code, contenus créés), à l’exception des composants tiers soumis à leurs propres licences.',
        ],
      },
      {
        h: 'Services juridiques externalisés',
        p: [
          'Les prestations juridiques externalisées consistent en un support opérationnel et organisationnel. Elles ne constituent pas une consultation juridique et ne se substituent pas à l’intervention des professionnels habilités responsables du conseil et de la relation client.',
        ],
      },
      {
        h: 'Responsabilité',
        p: [
          'Covartex est tenue à une obligation de moyens. Sa responsabilité est limitée au montant des sommes effectivement versées au titre de la prestation concernée. Le droit applicable est le droit français ; les tribunaux compétents sont ceux du siège de Covartex.',
        ],
      },
    ],
  },
  en: {
    title: 'Legal notice & terms of service',
    updated: 'Last updated: September 2026',
    sections: [
      {
        h: 'Publisher',
        p: [
          `${siteConfig.name} — ${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}, France. Contact: ${siteConfig.email}, ${siteConfig.phone}. [Legal form, share capital, registration and VAT numbers to be completed.]`,
        ],
      },
      {
        h: 'Hosting',
        p: ['[Host name and address to be completed.]'],
      },
      {
        h: 'Quotes and orders',
        p: [
          'Every quote is free, without commitment and valid for 30 days. An order is firm upon signature of the quote and payment of the stated deposit. The written scope in the quote prevails; any request outside that scope is the subject of an additional quote.',
        ],
      },
      {
        h: 'Prices and payment',
        p: [
          'Prices are quoted excluding taxes. Unless stated otherwise: 40% on order, 60% on delivery; monthly services are invoiced in advance. Late payment incurs interest at the applicable statutory rate and a fixed recovery fee.',
        ],
      },
      {
        h: 'Delivery and ownership',
        p: [
          'Timelines are indicative and run from receipt of the required materials. Upon full payment, the client owns the deliverables (website, code, created content), except third-party components subject to their own licences.',
        ],
      },
      {
        h: 'Outsourced legal services',
        p: [
          'Outsourced legal services consist of operational and organisational support. They do not constitute legal advice and do not replace the involvement of the qualified professionals responsible for advice and the client relationship.',
        ],
      },
      {
        h: 'Liability',
        p: [
          'Covartex is bound by a best-efforts obligation. Its liability is limited to the amounts actually paid for the service concerned. French law applies; the competent courts are those of Covartex’s registered office.',
        ],
      },
    ],
  },
};

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata({
    locale,
    path: '/terms',
    title: content[locale].title,
    description: content[locale].sections[2].p[0],
    noindex: true,
  });
}

export default async function TermsPage({ params }: { params: Params }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const c = content[locale];

  return (
    <>
      <PageHeader
        locale={locale}
        eyebrow={dict.footer.legal}
        title={c.title}
        subtitle={c.updated}
        breadcrumb={[{ label: dict.common.home, href: '/' }, { label: c.title }]}
      />
      <section className="section">
        <div className="container-x max-w-3xl space-y-10">
          {c.sections.map((s) => (
            <div key={s.h} className="border-t border-white/10 pt-6 first:border-0 first:pt-0">
              <h2 className="text-display-3 mb-3 text-white">{s.h}</h2>
              {s.p.map((p) => (
                <p key={p} className="text-white/75 leading-relaxed mb-3">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
