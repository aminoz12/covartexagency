import type { IndustryDef } from '@/lib/industries';

const industry: IndustryDef = {
  slug: 'artisans-btp',
  tone: 'apps',
  services: ['creation-site-web', 'referencement-google-seo', 'applications-mobiles', 'automatisation-processus'],
  projects: ['artisans-application-mobile-terrain'],
  content: {
    fr: {
      name: 'Artisans et entreprises du BTP',
      title: 'Agence web et applications pour artisans et entreprises du bâtiment',
      metaTitle: 'Site web, SEO et application terrain pour artisans',
      metaDescription:
        'Covartex aide les artisans et PME du BTP : site qui apporte des demandes de devis, SEO local, application de chantier, devis et factures automatisés.',
      promise: 'Plus de demandes de devis dans votre secteur et moins de paperasse après le chantier.',
      cardText: 'Demandes de devis locales, application de chantier et facturation automatisée.',
      summary: [
        'Covartex aide les artisans et les entreprises du bâtiment à recevoir plus de demandes de devis locales et à passer moins de temps sur l’administratif.',
        'Pour les artisans du BTP, Covartex crée un site web et travaille le référencement local, dont la fiche Google Business Profile, pour apparaître quand un particulier cherche un professionnel près de chez lui.',
        'Covartex développe des applications mobiles de terrain pour les entreprises du bâtiment : rapports d’intervention, photos, signature du client et facturation depuis le chantier.',
        'Covartex automatise les devis, les factures et les relances des artisans, en tenant compte de l’obligation de facturation électronique entre entreprises qui se met en place en France.',
      ],
      challenges: [
        {
          title: 'Des demandes de devis qui partent chez les concurrents',
          description:
            'Un particulier qui cherche « plombier à Rennes » appelle l’un des premiers résultats de Google Maps. Sans fiche complète, sans avis récents ni site clair, ces appels vont ailleurs.',
        },
        {
          title: 'La paperasse après la journée de chantier',
          description:
            'Devis, rapports, factures et relances se font souvent le soir ou le week-end, à partir de notes papier et de photos éparpillées dans les téléphones.',
        },
        {
          title: 'Des informations perdues entre le chantier et le bureau',
          description:
            'Un bon d’intervention incomplet, une signature oubliée ou une photo manquante, et c’est une facture contestée ou un litige plus difficile à défendre.',
        },
        {
          title: 'Des obligations qui se multiplient',
          description:
            'Mentions d’assurance sur les devis et factures, facturation électronique entre entreprises : les règles évoluent, et les outils bricolés ne suivent pas toujours.',
        },
      ],
      solutions: [
        {
          service: 'creation-site-web',
          title: 'Un site qui transforme les visites en demandes de devis',
          text: 'Covartex crée un site qui présente vos métiers, votre zone d’intervention, vos réalisations en photos et vos qualifications, avec un formulaire de demande de devis simple et un numéro cliquable sur mobile. Création de site web à partir de 1 500 €, et le site vous appartient.',
        },
        {
          service: 'referencement-google-seo',
          title: 'Être trouvé dans votre zone d’intervention',
          text: 'Covartex optimise votre fiche Google Business Profile, crée des pages utiles par métier et par secteur desservi, et met en place une demande d’avis après chaque chantier. Vous apparaissez dans Google Maps et dans les résultats quand un client cherche un artisan près de chez lui.',
        },
        {
          service: 'applications-mobiles',
          title: 'Une application de chantier pour vos équipes',
          text: 'Covartex développe une application iOS et Android pour vos techniciens : planning, rapport d’intervention, photos, signature du client sur l’écran et envoi de la facture, avec un mode hors connexion pour les chantiers mal couverts. Applications mobiles à partir de 8 000 €.',
        },
        {
          service: 'automatisation-processus',
          title: 'Devis, factures et relances automatisés',
          text: 'Covartex relie vos outils pour qu’un devis accepté devienne une facture sans ressaisie, avec les mentions obligatoires, et que les relances d’impayés partent toutes seules. Les flux sont préparés pour la facturation électronique via une plateforme agréée.',
        },
      ],
      rules: {
        title: 'Devis, factures et facturation électronique : ce qui s’impose aux artisans',
        paragraphs: [
          'Les artisans et entreprises du bâtiment soumis à une assurance professionnelle obligatoire, comme la garantie décennale, doivent la mentionner sur leurs devis et leurs factures, avec les coordonnées de l’assureur et la couverture géographique du contrat. Un modèle de devis ou une application de facturation doit donc intégrer ces mentions.',
          'La facturation électronique entre entreprises se met en place en France. Selon le calendrier en vigueur, toutes les entreprises doivent pouvoir recevoir des factures électroniques depuis le 1er septembre 2026, et les PME et microentreprises devront en émettre à partir du 1er septembre 2027.',
          'Covartex conçoit les outils de devis et de facturation en tenant compte de ces règles. Les points fiscaux et d’assurance se valident avec votre expert-comptable et votre assureur. En résumé :',
        ],
        list: [
          'L’assurance professionnelle obligatoire, notamment la garantie décennale, mentionnée sur chaque devis et chaque facture.',
          'La réception des factures électroniques de vos fournisseurs via une plateforme agréée.',
          'L’émission de factures électroniques entre entreprises, obligatoire pour les PME et microentreprises à partir de septembre 2027 selon le calendrier en vigueur.',
          'La transmission des données des ventes aux particuliers (e-reporting), selon le même calendrier.',
        ],
      },
      faqs: [
        {
          q: 'Combien coûte un site internet pour un artisan ?',
          a: 'Chez Covartex, la création d’un site web pour un artisan ou une entreprise du bâtiment démarre à partir de 1 500 €. Le prix dépend du nombre de métiers, de pages et de fonctions comme le formulaire de devis ou la galerie de chantiers. Covartex envoie un devis détaillé et gratuit sous 48 h, sans engagement.',
        },
        {
          q: 'Comment un artisan peut-il avoir plus de demandes de devis grâce à internet ?',
          a: 'Un artisan reçoit plus de demandes de devis en ligne avec une fiche Google Business Profile complète, des avis clients réguliers et un site qui présente clairement ses métiers et sa zone d’intervention. Covartex met en place ces trois éléments pour les artisans du BTP et suit les demandes reçues.',
        },
        {
          q: 'Combien coûte une application mobile pour une entreprise du bâtiment ?',
          a: 'Chez Covartex, une application mobile iOS et Android sur mesure démarre à partir de 8 000 €. Le prix dépend des fonctions : rapports d’intervention, photos, signature, planning, facturation, connexion au logiciel comptable. Covartex détaille le périmètre et le prix dans un devis gratuit sous 48 h.',
        },
        {
          q: 'La facturation électronique est-elle obligatoire pour les artisans ?',
          a: 'Oui, pour les factures entre entreprises. Selon le calendrier en vigueur, toutes les entreprises, artisans compris, doivent pouvoir recevoir des factures électroniques depuis septembre 2026, et les PME et microentreprises devront en émettre à partir de septembre 2027. Covartex aide les artisans à adapter leurs outils de devis et de facturation à cette obligation.',
        },
        {
          q: 'Quelles mentions d’assurance faut-il sur un devis d’artisan du bâtiment ?',
          a: 'Un devis d’artisan du bâtiment doit mentionner l’assurance professionnelle obligatoire, comme la garantie décennale, avec les coordonnées de l’assureur et la couverture géographique du contrat. Covartex intègre ces mentions dans les modèles de devis et de factures automatisés. Votre expert-comptable et votre assureur restent la référence pour les vérifier.',
        },
        {
          q: 'Une application de chantier fonctionne-t-elle sans réseau ?',
          a: 'Oui, si elle est conçue pour. Covartex peut développer l’application de chantier avec un mode hors connexion : le technicien remplit son rapport, prend ses photos et fait signer le client, puis les données se synchronisent au retour du réseau. Ce choix se fait lors du cadrage du projet.',
        },
      ],
    },
    en: {
      name: 'Trades & Construction',
      title: 'Web and App Agency for Tradespeople and Construction Firms',
      metaTitle: 'Websites, Local SEO and Field Apps for Tradespeople',
      metaDescription:
        'Covartex helps tradespeople and construction SMEs in France: a website that brings quote requests, local SEO, a field app, automated quotes and invoices.',
      promise: 'More quote requests in your area and less paperwork after the job.',
      cardText: 'Local quote requests, a field app and automated invoicing.',
      summary: [
        'Covartex helps tradespeople and construction firms get more local quote requests and spend less time on admin.',
        'For tradespeople, Covartex builds a website and handles local SEO, including the Google Business Profile, so the business shows up when a homeowner looks for a professional nearby.',
        'Covartex develops field apps for construction firms: job reports, photos, client signature and invoicing from the job site.',
        'Covartex automates quotes, invoices and payment reminders for tradespeople, taking into account the B2B e-invoicing obligation now being rolled out in France.',
      ],
      challenges: [
        {
          title: 'Quote requests going to competitors',
          description:
            'A homeowner searching for “plumber in Rennes” calls one of the first results in Google Maps. Without a complete listing, recent reviews and a clear website, those calls go elsewhere.',
        },
        {
          title: 'Paperwork after a day on site',
          description:
            'Quotes, reports, invoices and reminders often get done in the evening or at the weekend, from paper notes and photos scattered across phones.',
        },
        {
          title: 'Information lost between the site and the office',
          description:
            'An incomplete job sheet, a missing signature or a forgotten photo, and you end up with a disputed invoice or a claim that is harder to defend.',
        },
        {
          title: 'More and more obligations',
          description:
            'Insurance details on quotes and invoices, B2B e-invoicing: the rules keep changing, and makeshift tools do not always keep up.',
        },
      ],
      solutions: [
        {
          service: 'creation-site-web',
          title: 'A website that turns visits into quote requests',
          text: 'Covartex builds a site that shows your trades, service area, photos of past jobs and qualifications, with a simple quote request form and a tap-to-call number on mobile. Website design from €1,500, and the site belongs to you.',
        },
        {
          service: 'referencement-google-seo',
          title: 'Found across your service area',
          text: 'Covartex optimises your Google Business Profile, creates useful pages for each trade and area you cover, and sets up a review request after every job. You show up in Google Maps and in search results when a client looks for a tradesperson nearby.',
        },
        {
          service: 'applications-mobiles',
          title: 'A field app for your crews',
          text: 'Covartex develops an iOS and Android app for your technicians: scheduling, job reports, photos, on-screen client signature and invoice sending, with an offline mode for sites with poor coverage. Mobile apps from €8,000.',
        },
        {
          service: 'automatisation-processus',
          title: 'Automated quotes, invoices and reminders',
          text: 'Covartex connects your tools so an accepted quote becomes an invoice without re-typing, with the required mentions, and overdue payment reminders go out on their own. The workflows are ready for e-invoicing through a certified platform.',
        },
      ],
      rules: {
        title: 'Quotes, invoices and e-invoicing: what French trades must do',
        paragraphs: [
          'In France, tradespeople and construction firms that must carry compulsory professional insurance, such as the ten-year builder’s liability cover (garantie décennale), have to state it on their quotes and invoices, with the insurer’s contact details and the policy’s geographical coverage. Any quote template or invoicing app must include these details.',
          'France is phasing in mandatory e-invoicing between businesses. Under the current schedule, every company must be able to receive electronic invoices since 1 September 2026, and SMEs and micro-companies will have to issue them from 1 September 2027.',
          'Covartex designs quoting and invoicing tools with these rules in mind. Tax and insurance points should be confirmed with your accountant and your insurer. In short:',
        ],
        list: [
          'Compulsory professional insurance, including the garantie décennale, stated on every quote and invoice.',
          'Receiving supplier e-invoices through a certified platform (plateforme agréée).',
          'Issuing B2B e-invoices, mandatory for SMEs and micro-companies from September 2027 under the current schedule.',
          'Reporting data on sales to private individuals (e-reporting), on the same schedule.',
        ],
      },
      faqs: [
        {
          q: 'How much does a website for a tradesperson cost?',
          a: 'At Covartex, a website for a tradesperson or construction firm starts from €1,500. The price depends on the number of trades, pages and features such as a quote form or a gallery of past jobs. Covartex sends a free, detailed quote within 48 hours, with no commitment.',
        },
        {
          q: 'How can a tradesperson get more quote requests online?',
          a: 'A tradesperson gets more quote requests online with a complete Google Business Profile, regular client reviews and a website that clearly shows their trades and service area. Covartex sets up all three for tradespeople and construction firms and tracks the requests that come in.',
        },
        {
          q: 'How much does a mobile app for a construction firm cost?',
          a: 'At Covartex, a custom iOS and Android app starts from €8,000. The price depends on the features: job reports, photos, signatures, scheduling, invoicing, connection to accounting software. Covartex sets out the scope and price in a free quote within 48 hours.',
        },
        {
          q: 'Is e-invoicing mandatory for tradespeople in France?',
          a: 'Yes, for invoices between businesses. Under the current schedule, every French company, tradespeople included, must be able to receive e-invoices since September 2026, and SMEs and micro-companies will have to issue them from September 2027. Covartex helps tradespeople adapt their quoting and invoicing tools to this obligation.',
        },
        {
          q: 'What insurance details must appear on a French builder’s quote?',
          a: 'A French construction quote must state the compulsory professional insurance, such as the garantie décennale (ten-year builder’s liability), with the insurer’s contact details and the policy’s geographical coverage. Covartex builds these details into automated quote and invoice templates. Your accountant and insurer remain the reference for checking them.',
        },
        {
          q: 'Can a field app work without mobile coverage?',
          a: 'Yes, if it is built for it. Covartex can develop the field app with an offline mode: the technician fills in the report, takes photos and gets the client’s signature, and the data syncs once the connection is back. This choice is made when the project is scoped.',
        },
      ],
    },
  },
};

export default industry;
