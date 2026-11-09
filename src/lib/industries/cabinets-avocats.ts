import type { IndustryDef } from '@/lib/industries';

const industry: IndustryDef = {
  slug: 'cabinets-avocats',
  tone: 'legal',
  services: [
    'formalites-juridiques',
    'equipes-juridiques',
    'management-supervision-juridique',
    'creation-site-web',
    'referencement-google-seo',
    'automatisation-processus',
  ],
  projects: ['cabinet-avocats-formalites-externalisees'],
  content: {
    fr: {
      name: 'Cabinets d’avocats',
      title: 'Agence web et juridique pour cabinets d’avocats',
      metaTitle: 'Formalités juridiques et site web pour avocats',
      metaDescription:
        'Covartex aide les cabinets d’avocats : formalités juridiques sous-traitées, équipes dédiées, site web et SEO local conformes aux règles de la profession.',
      promise:
        'Moins de secrétariat juridique pour vos collaborateurs et plus de clients qui vous trouvent, dans le respect des règles de votre profession.',
      cardText: 'Formalités sous-traitées, site et SEO local conformes à la déontologie.',
      summary: [
        'Covartex aide les cabinets d’avocats sur deux fronts : la sous-traitance des formalités juridiques et la visibilité en ligne du cabinet.',
        'Pour les cabinets d’avocats, Covartex prépare et suit les formalités de droit des sociétés (approbations des comptes, modifications statutaires, transferts de siège, tenue des registres), tandis que l’avocat reste responsable du conseil.',
        'Covartex crée des sites web pour les cabinets d’avocats qui respectent les règles de communication de la profession, fixées par le Règlement intérieur national (RIN) et le décret n° 2014-1251.',
        'Covartex travaille à distance avec les cabinets d’avocats, en français et en anglais, avec un chef de projet dédié et un devis détaillé gratuit sous 48 h.',
      ],
      challenges: [
        {
          title: 'Des collaborateurs absorbés par le secrétariat juridique',
          description:
            'Procès-verbaux, dépôts au greffe, mises à jour des registres : ces tâches répétitives prennent des heures que vos collaborateurs pourraient consacrer au conseil et aux dossiers facturables.',
        },
        {
          title: 'Des pics d’activité difficiles à absorber',
          description:
            'La saison des approbations des comptes, une restructuration ou l’arrivée d’un client important saturent l’équipe. Recruter pour quelques mois n’est ni simple ni rentable.',
        },
        {
          title: 'Un site qui ne fait pas venir de clients',
          description:
            'Beaucoup de clients cherchent un avocat sur Google ou posent la question à un assistant IA. Un site ancien, sans page claire par domaine d’intervention, ne ressort ni dans l’un ni dans l’autre.',
        },
        {
          title: 'Des règles de communication à respecter',
          description:
            'Un prestataire web qui ignore la déontologie peut proposer un nom de domaine générique ou des formules laudatives. Le risque disciplinaire, lui, reste pour l’avocat.',
        },
      ],
      solutions: [
        {
          service: 'formalites-juridiques',
          title: 'Vos formalités de droit des sociétés, sous-traitées',
          text: 'Covartex prépare et suit les formalités courantes de vos clients sociétés : approbations des comptes, modifications statutaires, transferts de siège, nominations de dirigeants et tenue des registres. Nous travaillons dans vos modèles et vos outils, et vous validez chaque acte. Vous gardez la relation client et la responsabilité du conseil.',
        },
        {
          service: 'equipes-juridiques',
          title: 'Une équipe de formalistes dédiée au cabinet',
          text: 'Quand le volume est régulier, Covartex constitue pour votre cabinet une équipe dédiée de juristes, paralegals ou formalistes, formée à vos procédures. Elle peut démarrer avec un ou deux profils à temps partiel et évoluer avec votre activité, sans recrutement de votre côté.',
        },
        {
          service: 'management-supervision-juridique',
          title: 'Un pôle formalités organisé et suivi',
          text: 'Covartex structure le traitement des formalités au sein du cabinet : procédures écrites, circuits de validation, suivi des échéances et tableaux de bord. Les associés savent où en est chaque dossier sans avoir à relancer l’équipe.',
        },
        {
          service: 'creation-site-web',
          title: 'Un site de cabinet clair et conforme',
          text: 'Covartex conçoit un site qui présente vos avocats, vos domaines d’intervention, votre barreau, vos coordonnées et la façon dont vous fixez vos honoraires. Il est rapide, lisible sur mobile, et le nom de domaine, les contenus et les comptes vous appartiennent. Création de site web à partir de 1 500 €.',
        },
        {
          service: 'referencement-google-seo',
          title: 'Être trouvé par les clients de votre ville',
          text: 'Covartex travaille le référencement local du cabinet : fiche Google Business Profile complète, une page par domaine d’intervention et des contenus qui répondent aux questions réelles des justiciables. Les textes restent informatifs et factuels, sans mention laudative ni comparative.',
        },
        {
          service: 'automatisation-processus',
          title: 'Moins de ressaisie autour des dossiers',
          text: 'Covartex automatise les tâches répétitives du cabinet : génération de documents à partir de vos modèles, rappels des échéances d’approbation des comptes, collecte des pièces auprès des clients. Les données restent dans des outils que vous maîtrisez.',
        },
      ],
      rules: {
        title: 'Les règles de communication des avocats',
        paragraphs: [
          'La communication des avocats est encadrée par l’article 10 du Règlement intérieur national (RIN) et par le décret n° 2014-1251 du 28 octobre 2014, qui a ouvert la sollicitation personnalisée. Un site de cabinet, une fiche Google ou un courrier de présentation doivent les respecter.',
          'Covartex rédige les contenus en tenant compte de ces règles. La validation finale reste celle de l’avocat et, en cas de doute, de son ordre. En pratique, un site de cabinet doit respecter les points suivants :',
        ],
        list: [
          'Une information sincère, loyale et digne, sans promesse de résultat ni affirmation trompeuse.',
          'Aucune mention laudative, et aucune comparaison avec d’autres avocats ou cabinets.',
          'Une sollicitation personnalisée permise sous conditions : un message écrit et personnalisé, des informations exactes sur la prestation et sur le mode de calcul des honoraires, aucune démarche insistante.',
          'Un nom de domaine et un site qui identifient l’avocat ou le cabinet et son barreau ; un nom de domaine purement générique, limité au titre d’avocat ou à un domaine du droit, n’est pas admis.',
          'Le titre de spécialiste réservé aux avocats titulaires d’un certificat de spécialisation.',
          'L’ordre informé de la création du site et des noms de domaine utilisés.',
        ],
      },
      faqs: [
        {
          q: 'Combien coûte un site internet pour un cabinet d’avocats ?',
          a: 'Chez Covartex, la création d’un site web pour un cabinet d’avocats démarre à partir de 1 500 €. Le prix final dépend du nombre de pages, des langues et des fonctions comme la prise de rendez-vous en ligne. Covartex envoie un devis détaillé et gratuit sous 48 h, sans engagement.',
        },
        {
          q: 'Un avocat a-t-il le droit de faire de la publicité sur internet ?',
          a: 'Oui. Un avocat peut communiquer sur internet dans les conditions fixées par sa déontologie, et le décret n° 2014-1251 lui permet en plus la sollicitation personnalisée. L’information doit rester sincère et digne, sans mention laudative ni comparative. Covartex rédige les sites de cabinets d’avocats dans ce cadre.',
        },
        {
          q: 'Peut-on sous-traiter les formalités juridiques d’un cabinet d’avocats ?',
          a: 'Oui. Covartex prend en charge pour les cabinets d’avocats la préparation et le suivi des formalités de droit des sociétés : approbations des comptes, modifications statutaires, transferts de siège, tenue des registres. Le cabinet garde la relation avec son client, valide les actes et reste responsable du conseil.',
        },
        {
          q: 'Le secret professionnel est-il protégé quand un cabinet externalise ses formalités ?',
          a: 'Covartex intervient pour les cabinets d’avocats sous accord de confidentialité, avec des accès nominatifs et un traitement des données conforme au RGPD. Covartex travaille dans les outils du cabinet, qui décide de ce qui est partagé. L’avocat reste seul conseil de son client.',
        },
        {
          q: 'Comment un cabinet d’avocats peut-il apparaître en première page de Google ?',
          a: 'Un cabinet d’avocats progresse sur Google avec une fiche Google Business Profile complète, une page claire par domaine d’intervention et un site rapide et bien structuré. Covartex travaille ces trois leviers en respectant les règles de communication de la profession. Personne ne peut garantir une position, et des résultats solides demandent plusieurs mois.',
        },
        {
          q: 'Covartex travaille-t-il avec des cabinets internationaux implantés en France ?',
          a: 'Oui. Covartex travaille à distance, en français et en anglais, avec des cabinets d’avocats français comme avec des cabinets internationaux qui ont un bureau en France. Les services juridiques de Covartex portent uniquement sur le droit français.',
        },
      ],
    },
    en: {
      name: 'Law Firms',
      title: 'Web and Legal Support Agency for Law Firms in France',
      metaTitle: 'Legal Formalities & Websites for French Law Firms',
      metaDescription:
        'Covartex helps French law firms: outsourced corporate formalities, dedicated legal teams, plus a website and local SEO that follow the French bar’s rules.',
      promise:
        'Less corporate secretarial work for your associates and more clients who find you, within the rules of the French bar.',
      cardText: 'Outsourced formalities, plus a website and local SEO that follow bar rules.',
      summary: [
        'Covartex supports law firms in France in two ways: outsourcing corporate-law formalities and building the firm’s online presence.',
        'For law firms, Covartex prepares and tracks routine French corporate formalities, such as annual accounts approvals, amendments to the articles of association, registered office transfers and statutory registers, while the lawyer stays responsible for the advice.',
        'Covartex builds law firm websites that follow the French bar’s communication rules, set out in the profession’s national rules (RIN) and Decree No. 2014-1251.',
        'Covartex works remotely with law firms, in French and English, with one dedicated project lead and a free, detailed quote within 48 hours.',
      ],
      challenges: [
        {
          title: 'Associates buried in corporate secretarial work',
          description:
            'Minutes, registry filings, register updates: these repetitive tasks take hours your associates could spend on advice and billable matters.',
        },
        {
          title: 'Peaks that are hard to absorb',
          description:
            'Annual accounts season, a restructuring or a major new client can overload the team. Hiring for a few months is neither simple nor cost-effective.',
        },
        {
          title: 'A website that brings in no clients',
          description:
            'Many clients now look for a lawyer on Google or ask an AI assistant. An old site without a clear page for each practice area shows up in neither.',
        },
        {
          title: 'Strict communication rules',
          description:
            'A web provider unfamiliar with French professional conduct rules may suggest a generic domain name or self-praising copy. The disciplinary risk stays with the lawyer.',
        },
      ],
      solutions: [
        {
          service: 'formalites-juridiques',
          title: 'Corporate formalities, outsourced',
          text: 'Covartex prepares and tracks routine formalities for your corporate clients: annual accounts approvals, amendments to the articles, registered office transfers, director appointments and statutory registers. We work in your templates and tools, and you approve every document. You keep the client relationship and responsibility for the advice.',
        },
        {
          service: 'equipes-juridiques',
          title: 'A dedicated formalities team for the firm',
          text: 'When volumes are steady, Covartex builds a dedicated team of legal professionals, paralegals or formalities specialists for your firm, trained on your procedures. It can start with one or two part-time profiles and grow with your workload, with no hiring on your side.',
        },
        {
          service: 'management-supervision-juridique',
          title: 'An organised, supervised formalities desk',
          text: 'Covartex structures how formalities are handled inside the firm: written procedures, approval flows, deadline tracking and dashboards. Partners can see where each file stands without chasing the team.',
        },
        {
          service: 'creation-site-web',
          title: 'A clear, compliant firm website',
          text: 'Covartex designs a site that presents your lawyers, practice areas, bar membership, contact details and how you set your fees. It is fast and easy to read on mobile, and you own the domain, the content and the accounts. Website design from €1,500.',
        },
        {
          service: 'referencement-google-seo',
          title: 'Found by clients in your city',
          text: 'Covartex handles the firm’s local SEO: a complete Google Business Profile, one page per practice area and content that answers the questions clients actually ask. The copy stays factual and informative, with no self-praise and no comparisons.',
        },
        {
          service: 'automatisation-processus',
          title: 'Less re-typing around each matter',
          text: 'Covartex automates the firm’s repetitive tasks: generating documents from your templates, reminders for annual approval deadlines, collecting documents from clients. Your data stays in tools you control.',
        },
      ],
      rules: {
        title: 'The French bar’s communication rules',
        paragraphs: [
          'Lawyers in France must follow the communication rules in Article 10 of the profession’s national rules (Règlement intérieur national, or RIN) and in Decree No. 2014-1251 of 28 October 2014, which allowed personalised solicitation. A firm’s website, its Google listing and any introductory letter must comply.',
          'Covartex writes content with these rules in mind. Final sign-off stays with the lawyer and, when in doubt, with their bar. In practice, a law firm website should respect the following points:',
        ],
        list: [
          'Truthful, fair and dignified information, with no promised outcome and no misleading claim.',
          'No self-praising statements, and no comparison with other lawyers or firms.',
          'Personalised solicitation is allowed under conditions: a written, personalised message, accurate information on the service and on how fees are calculated, and no pushy approach.',
          'The domain name and the site must identify the lawyer or the firm and its bar; a purely generic domain name, made only of the word “lawyer” or an area of law, is not allowed.',
          'The title of specialist is reserved for lawyers who hold a specialisation certificate.',
          'The bar must be informed when the site goes live, along with the domain names used.',
        ],
      },
      faqs: [
        {
          q: 'How much does a website for a law firm cost?',
          a: 'At Covartex, a website for a law firm starts from €1,500. The final price depends on the number of pages, the languages and features such as online appointment booking. Covartex sends a free, detailed quote within 48 hours, with no commitment.',
        },
        {
          q: 'Are lawyers in France allowed to advertise online?',
          a: 'Yes. French lawyers may communicate online within the limits of their professional conduct rules, and Decree No. 2014-1251 also allows personalised solicitation. The information must remain truthful and dignified, with no self-praise and no comparisons. Covartex writes law firm websites within that framework.',
        },
        {
          q: 'Can a French law firm outsource its corporate formalities?',
          a: 'Yes. Covartex prepares and tracks French corporate formalities for law firms: annual accounts approvals, amendments to the articles, registered office transfers, statutory registers. The firm keeps the client relationship, approves the documents and stays responsible for the advice.',
        },
        {
          q: 'Is professional secrecy protected when a firm outsources formalities?',
          a: 'Covartex works for law firms under a non-disclosure agreement, with named access and GDPR-compliant data handling. Covartex works inside the firm’s own tools, and the firm decides what is shared. The lawyer remains the client’s sole adviser.',
        },
        {
          q: 'How can a law firm reach page one of Google?',
          a: 'A law firm climbs on Google with a complete Google Business Profile, a clear page for each practice area and a fast, well-structured website. Covartex works on all three while respecting the French bar’s communication rules. Nobody can guarantee a ranking, and solid results take several months.',
        },
        {
          q: 'Does Covartex work with international firms that have an office in France?',
          a: 'Yes. Covartex works remotely, in French and English, with French law firms and with international firms that have an office in France. Covartex’s legal services cover French law only.',
        },
      ],
    },
  },
};

export default industry;
