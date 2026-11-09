import type { Metadata } from 'next';
import { isLocale, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionary';
import { siteConfig } from '@/config/site';
import { pageMetadata } from '@/lib/seo';
import PageHeader from '@/components/PageHeader';

type Params = Promise<{ locale: string }>;

/**
 * ⚠️ Template text — have it reviewed by a legal professional before launch
 * and complete the data-controller identity and hosting provider.
 */
const content: Record<Locale, { title: string; updated: string; sections: { h: string; p: string[] }[] }> = {
  fr: {
    title: 'Politique de confidentialité',
    updated: 'Dernière mise à jour : septembre 2026',
    sections: [
      {
        h: 'Responsable du traitement',
        p: [
          `Les données collectées sur ce site sont traitées par ${siteConfig.name}, joignable à l’adresse ${siteConfig.email}.`,
        ],
      },
      {
        h: 'Données collectées',
        p: [
          'Lorsque vous remplissez le formulaire de demande de devis, nous collectons votre nom, votre adresse e-mail, votre téléphone et votre entreprise (facultatifs), le service souhaité, votre budget indicatif et votre message.',
          'Nous ne déposons aucun cookie publicitaire. Des mesures d’audience anonymisées peuvent être collectées pour améliorer le site.',
        ],
      },
      {
        h: 'Finalité et base légale',
        p: [
          'Ces données servent uniquement à répondre à votre demande, établir un devis et, le cas échéant, exécuter le contrat qui en découle (intérêt légitime et mesures précontractuelles).',
        ],
      },
      {
        h: 'Durée de conservation',
        p: ['Les demandes de contact sont conservées 3 ans à compter du dernier échange, puis supprimées.'],
      },
      {
        h: 'Destinataires',
        p: [
          'Vos données sont accessibles à l’équipe commerciale de Covartex et à nos prestataires techniques (hébergement, messagerie) situés dans l’Union européenne ou offrant des garanties équivalentes.',
        ],
      },
      {
        h: 'Vos droits',
        p: [
          `Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation et d’opposition. Écrivez à ${siteConfig.email}. Vous pouvez également introduire une réclamation auprès de la CNIL.`,
        ],
      },
    ],
  },
  en: {
    title: 'Privacy policy',
    updated: 'Last updated: September 2026',
    sections: [
      {
        h: 'Data controller',
        p: [`Data collected on this website is processed by ${siteConfig.name}, reachable at ${siteConfig.email}.`],
      },
      {
        h: 'Data we collect',
        p: [
          'When you fill in the quote request form, we collect your name, e-mail address, phone and company (optional), the service you need, your approximate budget and your message.',
          'We set no advertising cookies. Anonymised audience measurement may be collected to improve the site.',
        ],
      },
      {
        h: 'Purpose and legal basis',
        p: [
          'This data is used solely to answer your request, prepare a quote and, where applicable, perform the resulting contract (legitimate interest and pre-contractual measures).',
        ],
      },
      {
        h: 'Retention',
        p: ['Contact requests are kept for 3 years from the last exchange, then deleted.'],
      },
      {
        h: 'Recipients',
        p: [
          'Your data is accessible to the Covartex sales team and to our technical providers (hosting, e-mail) located in the European Union or offering equivalent safeguards.',
        ],
      },
      {
        h: 'Your rights',
        p: [
          `You have the right to access, rectify, erase, restrict and object. Write to ${siteConfig.email}. You may also lodge a complaint with your data protection authority.`,
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
    path: '/privacy',
    title: content[locale].title,
    description: content[locale].sections[1].p[0],
    noindex: true,
  });
}

export default async function PrivacyPage({ params }: { params: Params }) {
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
