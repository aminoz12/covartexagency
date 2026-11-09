import type { Locale } from '@/i18n/config';

/**
 * Services catalogue — 4 practice areas ("pôles"), 10 services, FR + EN.
 * Powers the homepage services grid, /services, /services/[slug],
 * the contact form select, the footer and the sitemap.
 *
 * Slugs are shared across locales so the language switcher works on
 * detail pages (/services/x ↔ /en/services/x).
 */

export interface ServiceContent {
  name: string;
  /** Short, plain-language promise used on cards. */
  promise: string;
  metaDescription: string;
  overview: string[];
  deliverables: string[];
  benefits: { title: string; description: string }[];
  process: { title: string; description: string }[];
  faqs: { q: string; a: string }[];
}

export interface ServiceDef {
  slug: string;
  category: string;
  tools: string[];
  /**
   * Typical starting price in EUR, only where the service copy already
   * publishes one (keep both in sync). Feeds Offer JSON-LD and llms.txt.
   */
  priceFrom?: number;
  content: Record<Locale, ServiceContent>;
}

/** Legal services follow French law; everything else is delivered remotely worldwide. */
const FRANCE_ONLY_CATEGORIES = ['services-juridiques'];

export type ServiceArea = 'worldwide' | 'france';

export interface CategoryContent {
  title: string;
  description: string;
}

/**
 * Each practice area has its own muted colour, used in small doses (icons,
 * eyebrow dots, card edges, ambient glows) so visitors recognise "their"
 * area at a glance. Colours live in globals.css as .tone-* classes.
 */
export type Tone = 'web' | 'apps' | 'ai' | 'legal';

export interface CategoryDef {
  slug: string;
  tone: Tone;
  content: Record<Locale, CategoryContent>;
}

export const categories: CategoryDef[] = [
  {
    slug: 'site-web-visibilite',
    tone: 'web',
    content: {
      fr: {
        title: 'Site web & Visibilité',
        description: 'Un site qui convertit, une place sur Google et dans les réponses des IA.',
      },
      en: {
        title: 'Website & Visibility',
        description: 'A website that converts, a spot on Google and inside AI answers.',
      },
    },
  },
  {
    slug: 'applications-sur-mesure',
    tone: 'apps',
    content: {
      fr: {
        title: 'Applications sur mesure',
        description: 'Applications mobiles et plateformes SaaS conçues pour votre métier.',
      },
      en: {
        title: 'Custom Apps & Software',
        description: 'Mobile apps and SaaS platforms built around how you work.',
      },
    },
  },
  {
    slug: 'ia-automatisation',
    tone: 'ai',
    content: {
      fr: {
        title: 'IA & Automatisation',
        description: 'Assistants IA et automatisations qui libèrent des heures chaque semaine.',
      },
      en: {
        title: 'AI & Automation',
        description: 'AI assistants and automations that free up hours every week.',
      },
    },
  },
  {
    slug: 'services-juridiques',
    tone: 'legal',
    content: {
      fr: {
        title: 'Services juridiques externalisés',
        description: 'Formalités, équipes juridiques dédiées et supervision, sans recruter.',
      },
      en: {
        title: 'Outsourced Legal Services',
        description: 'Formalities, dedicated legal teams and supervision, without hiring.',
      },
    },
  },
];

export const services: ServiceDef[] = [
  // ───────────────────────── Site web & Visibilité ─────────────────────────
  {
    slug: 'creation-site-web',
    category: 'site-web-visibilite',
    tools: ['Next.js', 'WordPress', 'Webflow', 'Figma', 'Vercel'],
    priceFrom: 1500,
    content: {
      fr: {
        name: 'Création de site web',
        promise: 'Un site professionnel, rapide et pensé pour transformer les visiteurs en demandes de devis.',
        metaDescription:
          'Création de site web professionnel : site vitrine, site e-commerce ou refonte. Design sur mesure, rapide, optimisé pour Google et la conversion. Devis gratuit sous 48 h.',
        overview: [
          'Votre site est souvent le premier contact avec vos clients. Nous le concevons pour qu’il inspire confiance en trois secondes, se charge instantanément sur mobile et amène naturellement vers une demande de contact.',
          'Site vitrine, site e-commerce, refonte ou landing page : nous partons de vos objectifs commerciaux, pas d’un modèle. Vous validez la maquette avant le développement, et vous restez propriétaire de tout.',
        ],
        deliverables: [
          'Atelier de cadrage : cibles, offres, parcours de conversion',
          'Maquette sur mesure validée avant développement',
          'Site responsive, rapide, accessible, conforme RGPD',
          'Rédaction ou optimisation des textes clés',
          'Bases SEO : structure, balises, données structurées, sitemap',
          'Formation à l’administration et documentation',
        ],
        benefits: [
          { title: 'Plus de demandes', description: 'Chaque page est construite autour d’un appel à l’action clair.' },
          { title: 'Rapide et bien classé', description: 'Un site performant est mieux référencé et convertit mieux sur mobile.' },
          { title: 'Autonome', description: 'Vous modifiez vos contenus vous-même, sans dépendre de nous.' },
        ],
        process: [
          { title: 'Cadrage', description: 'Un appel de 30 minutes puis un devis détaillé sous 48 h.' },
          { title: 'Maquette', description: 'Design de la page d’accueil et des pages clés, ajustements inclus.' },
          { title: 'Développement', description: 'Intégration, contenus, tests sur tous les écrans.' },
          { title: 'Mise en ligne', description: 'Déploiement, suivi des performances, formation de votre équipe.' },
        ],
        faqs: [
          { q: 'Combien coûte un site web ?', a: 'Un site vitrine sur mesure démarre généralement autour de 1 500 à 4 000 €, un site e-commerce ou un site riche en contenus entre 4 000 et 15 000 €. Le devis est gratuit et détaillé.' },
          { q: 'Quels sont les délais ?', a: 'Un site vitrine est livré en 2 à 4 semaines après validation de la maquette. Un e-commerce demande 4 à 8 semaines selon le catalogue.' },
          { q: 'Puis-je modifier le site moi-même ?', a: 'Oui. Nous vous formons à l’administration et fournissons une documentation. Vous êtes propriétaire du site, du nom de domaine et des contenus.' },
          { q: 'Vous occupez-vous de l’hébergement ?', a: 'Oui, nous pouvons héberger, sécuriser et maintenir votre site avec un forfait mensuel, ou le déployer chez l’hébergeur de votre choix.' },
        ],
      },
      en: {
        name: 'Website Design & Development',
        promise: 'A professional, fast website designed to turn visitors into quote requests.',
        metaDescription:
          'Professional website design and development: business websites, e-commerce or redesigns. Custom design, fast, optimised for Google and conversion. Free quote within 48 hours.',
        overview: [
          'Your website is often the first contact with your clients. We design it to build trust within three seconds, load instantly on mobile and lead naturally to a contact request.',
          'Business website, online store, redesign or landing page: we start from your commercial goals, not a template. You approve the design before development, and you own everything.',
        ],
        deliverables: [
          'Scoping workshop: audiences, offers, conversion paths',
          'Custom design approved before development',
          'Responsive, fast, accessible, GDPR-compliant website',
          'Writing or optimisation of key copy',
          'SEO foundations: structure, tags, structured data, sitemap',
          'Admin training and documentation',
        ],
        benefits: [
          { title: 'More enquiries', description: 'Every page is built around a clear call to action.' },
          { title: 'Fast and well ranked', description: 'A performant site ranks better and converts better on mobile.' },
          { title: 'Independent', description: 'You edit your content yourself, without depending on us.' },
        ],
        process: [
          { title: 'Scoping', description: 'A 30-minute call, then a detailed quote within 48 hours.' },
          { title: 'Design', description: 'Homepage and key page designs, adjustments included.' },
          { title: 'Development', description: 'Build, content, testing on every screen size.' },
          { title: 'Launch', description: 'Deployment, performance monitoring, team training.' },
        ],
        faqs: [
          { q: 'How much does a website cost?', a: 'A custom business website usually starts around €1,500 to €4,000; an online store or content-rich site runs €4,000 to €15,000. The quote is free and itemised.' },
          { q: 'How long does it take?', a: 'A business website ships 2 to 4 weeks after design approval. An online store takes 4 to 8 weeks depending on the catalogue.' },
          { q: 'Can I edit the site myself?', a: 'Yes. We train you on the admin and provide documentation. You own the site, the domain and the content.' },
          { q: 'Do you handle hosting?', a: 'Yes, we can host, secure and maintain your site on a monthly plan, or deploy it with the host of your choice.' },
        ],
      },
    },
  },
  {
    slug: 'referencement-google-seo',
    category: 'site-web-visibilite',
    tools: ['Google Search Console', 'Semrush', 'Ahrefs', 'Screaming Frog', 'GA4'],
    content: {
      fr: {
        name: 'Être en première page Google (SEO)',
        promise: 'Apparaître quand vos clients cherchent votre service, et rester devant vos concurrents.',
        metaDescription:
          'Référencement naturel (SEO) : audit, optimisation technique, contenus et netlinking pour placer votre entreprise en première page Google. Reporting mensuel clair. Devis gratuit.',
        overview: [
          'Être en première page Google, c’est recevoir des demandes de clients qui vous cherchent déjà, sans payer chaque clic. Nous travaillons les trois leviers qui comptent : la technique de votre site, les contenus qui répondent aux recherches, et la notoriété (liens, fiche Google Business).',
          'Pas de promesse de « première position garantie » : un plan clair, des objectifs réalistes par mot-clé, et un reporting mensuel que vous comprenez.',
        ],
        deliverables: [
          'Audit SEO complet et plan d’action priorisé',
          'Recherche de mots-clés par intention (locale, nationale)',
          'Optimisation technique : vitesse, structure, balises, données structurées',
          'Rédaction et optimisation de pages et d’articles',
          'Fiche Google Business et SEO local',
          'Reporting mensuel : positions, trafic, demandes',
        ],
        benefits: [
          { title: 'Des clients qui vous cherchent', description: 'Le trafic de recherche convertit mieux que toute publicité.' },
          { title: 'Un actif durable', description: 'Contrairement aux annonces, les positions acquises continuent de rapporter.' },
          { title: 'Lisible', description: 'Un rapport mensuel avec les chiffres qui comptent pour vous.' },
        ],
        process: [
          { title: 'Audit', description: 'État des lieux technique, contenus, concurrence, mots-clés.' },
          { title: 'Corrections', description: 'On règle d’abord ce qui bloque le classement.' },
          { title: 'Contenus & liens', description: 'Pages et articles ciblés, netlinking propre, fiche Google.' },
          { title: 'Suivi', description: 'Reporting mensuel et ajustements continus.' },
        ],
        faqs: [
          { q: 'Au bout de combien de temps voit-on des résultats ?', a: 'Les premiers mouvements arrivent en 4 à 8 semaines ; des résultats solides demandent 3 à 6 mois selon la concurrence. Le SEO local est souvent plus rapide.' },
          { q: 'Garantissez-vous la première position ?', a: 'Personne ne peut le garantir honnêtement. Nous garantissons une méthode, des objectifs réalistes et une transparence totale sur les résultats.' },
          { q: 'Faut-il un engagement long ?', a: 'Nous recommandons 6 mois pour juger, mais nos accompagnements sont mensuels et résiliables.' },
        ],
      },
      en: {
        name: 'Rank on Page One of Google (SEO)',
        promise: 'Show up when your clients search for your service, and stay ahead of competitors.',
        metaDescription:
          'Search engine optimisation (SEO): audit, technical fixes, content and link building to get your business on page one of Google. Clear monthly reporting. Free quote.',
        overview: [
          'Being on page one of Google means receiving enquiries from people who are already looking for you, without paying per click. We work the three levers that matter: your site’s technical health, content that answers real searches, and authority (links, Google Business Profile).',
          'No “guaranteed #1” promises: a clear plan, realistic goals per keyword, and a monthly report you actually understand.',
        ],
        deliverables: [
          'Full SEO audit and prioritised action plan',
          'Keyword research by intent (local, national)',
          'Technical optimisation: speed, structure, tags, structured data',
          'Writing and optimisation of pages and articles',
          'Google Business Profile and local SEO',
          'Monthly reporting: rankings, traffic, enquiries',
        ],
        benefits: [
          { title: 'Clients who look for you', description: 'Search traffic converts better than any advertising.' },
          { title: 'A lasting asset', description: 'Unlike ads, the rankings you earn keep paying off.' },
          { title: 'Readable', description: 'A monthly report with the numbers that matter to you.' },
        ],
        process: [
          { title: 'Audit', description: 'Technical, content, competition and keyword review.' },
          { title: 'Fixes', description: 'We first solve what is blocking your rankings.' },
          { title: 'Content & links', description: 'Targeted pages and articles, clean link building, Google profile.' },
          { title: 'Follow-up', description: 'Monthly reporting and continuous adjustments.' },
        ],
        faqs: [
          { q: 'How long before we see results?', a: 'First movements appear in 4 to 8 weeks; solid results take 3 to 6 months depending on competition. Local SEO is often faster.' },
          { q: 'Do you guarantee the #1 position?', a: 'Nobody can honestly guarantee that. We guarantee a method, realistic goals and full transparency on results.' },
          { q: 'Is a long commitment required?', a: 'We recommend 6 months to judge, but our plans are monthly and cancellable.' },
        ],
      },
    },
  },
  {
    slug: 'visibilite-ia-aeo-geo',
    category: 'site-web-visibilite',
    tools: ['ChatGPT', 'Perplexity', 'Google AI Overviews', 'Schema.org', 'Bing Copilot'],
    content: {
      fr: {
        name: 'Être cité par ChatGPT & les IA (AEO / GEO)',
        promise: 'Quand un client demande à ChatGPT, Perplexity ou Google AI « qui recommandez-vous ? », c’est vous qui apparaissez.',
        metaDescription:
          'AEO & GEO (Answer Engine / Generative Engine Optimization) : faites recommander votre entreprise par ChatGPT, Perplexity et les aperçus IA de Google. Audit et plan d’action. Devis gratuit.',
        overview: [
          'De plus en plus de clients ne tapent plus dans Google : ils demandent à une IA. L’AEO (Answer Engine Optimization) et le GEO (Generative Engine Optimization) consistent à rendre votre entreprise compréhensible, fiable et citable par ces moteurs de réponse.',
          'Concrètement : des contenus qui répondent à des questions précises, des données structurées, une cohérence de vos informations sur le web et des sources qui parlent de vous. Nous mesurons ensuite votre présence dans les réponses des IA, requête par requête.',
        ],
        deliverables: [
          'Audit de visibilité IA : où vous apparaissez (ou pas) et pourquoi',
          'Liste des questions que posent vos clients aux IA',
          'Pages « réponses » et FAQ optimisées pour la citation',
          'Données structurées (Schema.org) et cohérence des informations',
          'Présence sur les sources reprises par les IA (annuaires, presse, avis)',
          'Suivi mensuel de vos citations dans ChatGPT, Perplexity et Google AI',
        ],
        benefits: [
          { title: 'Une longueur d’avance', description: 'Peu d’entreprises s’en occupent aujourd’hui ; celles qui commencent prennent la place.' },
          { title: 'Complémentaire au SEO', description: 'Le même travail renforce votre référencement Google classique.' },
          { title: 'Mesurable', description: 'Vous voyez chaque mois dans quelles réponses vous êtes cité.' },
        ],
        process: [
          { title: 'Diagnostic', description: 'On interroge les IA avec les questions de vos clients et on note où vous êtes.' },
          { title: 'Fondations', description: 'Données structurées, informations cohérentes, pages de réponse.' },
          { title: 'Autorité', description: 'Sources externes, avis, mentions qui rendent votre marque crédible pour les IA.' },
          { title: 'Mesure', description: 'Suivi mensuel des citations et ajustements.' },
        ],
        faqs: [
          { q: 'Quelle différence entre SEO, AEO et GEO ?', a: 'Le SEO vise les résultats classiques de Google. L’AEO vise les moteurs de réponse (réponses directes, assistants vocaux). Le GEO vise les IA génératives comme ChatGPT ou Perplexity, qui rédigent une réponse en citant des sources. Les trois se renforcent.' },
          { q: 'Est-ce utile pour une petite entreprise locale ?', a: 'Oui : les IA recommandent volontiers des acteurs locaux bien documentés. Une fiche cohérente, des avis et quelques pages de réponse suffisent souvent à apparaître.' },
          { q: 'Comment mesurez-vous les résultats ?', a: 'Nous suivons un panel de questions clients dans plusieurs IA et notons votre présence, votre position et le contexte de citation, chaque mois.' },
        ],
      },
      en: {
        name: 'Get Cited by ChatGPT & AI Search (AEO / GEO)',
        promise: 'When a client asks ChatGPT, Perplexity or Google AI “who do you recommend?”, you are the answer.',
        metaDescription:
          'AEO & GEO (Answer Engine / Generative Engine Optimization): get your business recommended by ChatGPT, Perplexity and Google AI Overviews. Audit and action plan. Free quote.',
        overview: [
          'More and more clients no longer type into Google: they ask an AI. AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) make your business understandable, trustworthy and quotable by these answer engines.',
          'In practice: content that answers specific questions, structured data, consistent business information across the web and sources that talk about you. We then measure your presence in AI answers, query by query.',
        ],
        deliverables: [
          'AI visibility audit: where you appear (or not) and why',
          'List of the questions your clients ask AI assistants',
          '“Answer” pages and FAQs optimised for citation',
          'Structured data (Schema.org) and information consistency',
          'Presence on the sources AI engines rely on (directories, press, reviews)',
          'Monthly tracking of your citations in ChatGPT, Perplexity and Google AI',
        ],
        benefits: [
          { title: 'A head start', description: 'Few businesses work on this today; those who start now take the spot.' },
          { title: 'Complements SEO', description: 'The same work strengthens your classic Google rankings.' },
          { title: 'Measurable', description: 'You see every month which answers cite you.' },
        ],
        process: [
          { title: 'Diagnosis', description: 'We ask the AIs your clients’ questions and record where you stand.' },
          { title: 'Foundations', description: 'Structured data, consistent information, answer pages.' },
          { title: 'Authority', description: 'External sources, reviews and mentions that make your brand credible to AI.' },
          { title: 'Measurement', description: 'Monthly citation tracking and adjustments.' },
        ],
        faqs: [
          { q: 'What is the difference between SEO, AEO and GEO?', a: 'SEO targets classic Google results. AEO targets answer engines (direct answers, voice assistants). GEO targets generative AIs like ChatGPT or Perplexity, which write an answer and cite sources. The three reinforce each other.' },
          { q: 'Is it useful for a small local business?', a: 'Yes: AI assistants readily recommend well-documented local providers. A consistent profile, reviews and a few answer pages are often enough to appear.' },
          { q: 'How do you measure results?', a: 'We track a panel of client questions across several AIs and record your presence, position and citation context every month.' },
        ],
      },
    },
  },

  // ───────────────────────── Applications sur mesure ─────────────────────────
  {
    slug: 'applications-mobiles',
    category: 'applications-sur-mesure',
    tools: ['React Native', 'Expo', 'Swift', 'Kotlin', 'Firebase', 'Supabase'],
    priceFrom: 8000,
    content: {
      fr: {
        name: 'Applications mobiles iOS & Android',
        promise: 'Une application fluide, publiée sur l’App Store et Google Play, que vos utilisateurs gardent.',
        metaDescription:
          'Développement d’applications mobiles iOS et Android : conception UX, développement natif ou cross-platform, publication sur les stores et maintenance. Devis gratuit sous 48 h.',
        overview: [
          'Nous concevons et développons des applications mobiles pour vos clients ou vos équipes : prise de rendez-vous, commande, suivi terrain, fidélité, portail client. Un code unique pour iOS et Android quand c’est pertinent, du natif quand la performance l’exige.',
          'Du prototype cliquable à la publication sur les stores, nous gérons tout le cycle : design, développement, tests, mise en ligne, puis évolutions.',
        ],
        deliverables: [
          'Atelier de cadrage et prototype cliquable',
          'Design UX/UI adapté aux usages mobiles',
          'Application iOS et Android (cross-platform ou native)',
          'Back-office et API sécurisés',
          'Publication App Store et Google Play',
          'Suivi des plantages, analytics, maintenance',
        ],
        benefits: [
          { title: 'Un seul code, deux plateformes', description: 'Moins cher et plus rapide à faire évoluer.' },
          { title: 'Validée avant de coder', description: 'Le prototype évite les mauvaises surprises et les allers-retours coûteux.' },
          { title: 'Publiée et suivie', description: 'On gère les stores, les mises à jour et le suivi des incidents.' },
        ],
        process: [
          { title: 'Cadrage', description: 'Les 3 à 5 fonctions que l’application doit réussir parfaitement.' },
          { title: 'Prototype', description: 'Maquette cliquable testée avec de vrais utilisateurs.' },
          { title: 'Développement', description: 'Sprints de deux semaines avec versions de test installables.' },
          { title: 'Publication', description: 'Soumission aux stores, déploiement progressif, suivi.' },
        ],
        faqs: [
          { q: 'Native ou cross-platform ?', a: 'La plupart des projets sont mieux servis par le cross-platform (React Native). Nous recommandons le natif quand la performance ou des API spécifiques l’exigent.' },
          { q: 'Combien coûte une application mobile ?', a: 'Une application simple démarre autour de 8 000 à 15 000 € ; une application métier avec back-office entre 15 000 et 50 000 €. Devis gratuit et détaillé.' },
          { q: 'Pouvez-vous reprendre une application existante ?', a: 'Oui. Nous auditons le code existant, le stabilisons et le faisons évoluer.' },
        ],
      },
      en: {
        name: 'Mobile Apps (iOS & Android)',
        promise: 'A smooth app, published on the App Store and Google Play, that your users keep.',
        metaDescription:
          'iOS and Android mobile app development: UX design, native or cross-platform build, store publication and maintenance. Free quote within 48 hours.',
        overview: [
          'We design and build mobile apps for your clients or your teams: booking, ordering, field tracking, loyalty, client portals. One codebase for iOS and Android when it makes sense, native when performance demands it.',
          'From clickable prototype to store publication, we handle the whole cycle: design, development, testing, launch, then iterations.',
        ],
        deliverables: [
          'Scoping workshop and clickable prototype',
          'UX/UI design tailored to mobile patterns',
          'iOS and Android app (cross-platform or native)',
          'Secure back-office and APIs',
          'App Store and Google Play publication',
          'Crash reporting, analytics, maintenance',
        ],
        benefits: [
          { title: 'One codebase, two platforms', description: 'Cheaper and faster to evolve.' },
          { title: 'Validated before coding', description: 'The prototype avoids surprises and costly back-and-forth.' },
          { title: 'Published and monitored', description: 'We handle the stores, updates and incident follow-up.' },
        ],
        process: [
          { title: 'Scoping', description: 'The 3 to 5 things the app must do perfectly.' },
          { title: 'Prototype', description: 'Clickable mock-up tested with real users.' },
          { title: 'Development', description: 'Two-week sprints with installable test builds.' },
          { title: 'Publication', description: 'Store submission, staged rollout, monitoring.' },
        ],
        faqs: [
          { q: 'Native or cross-platform?', a: 'Most projects are best served by cross-platform (React Native). We recommend native when performance or specific APIs demand it.' },
          { q: 'How much does a mobile app cost?', a: 'A simple app starts around €8,000 to €15,000; a business app with a back-office runs €15,000 to €50,000. Free, itemised quote.' },
          { q: 'Can you take over an existing app?', a: 'Yes. We audit the existing code, stabilise it and evolve it.' },
        ],
      },
    },
  },
  {
    slug: 'saas-sur-mesure',
    category: 'applications-sur-mesure',
    tools: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    priceFrom: 8000,
    content: {
      fr: {
        name: 'SaaS sur mesure',
        promise: 'Votre logiciel métier en ligne, conçu pour votre façon de travailler, prêt à être vendu ou utilisé en interne.',
        metaDescription:
          'Développement de SaaS et logiciels métier sur mesure : portail client, plateforme d’abonnement, outil interne. Architecture évolutive, sécurité, paiements. Devis gratuit.',
        overview: [
          'Quand aucun logiciel du marché ne colle à votre métier, ou quand vous avez une idée de produit à lancer, nous construisons votre SaaS : espace client, abonnements, facturation, rôles et permissions, tableaux de bord.',
          'Nous livrons un produit utilisable rapidement (MVP en 6 à 10 semaines), puis nous l’enrichissons par étapes, avec du code propre que votre équipe peut reprendre.',
        ],
        deliverables: [
          'Cadrage produit et spécification fonctionnelle',
          'Architecture évolutive et sécurisée',
          'Interface web responsive et accessible',
          'Comptes, rôles, abonnements et paiements (Stripe)',
          'Tableaux de bord, exports, intégrations (API, CRM, compta)',
          'Tests automatisés, déploiement continu, monitoring',
        ],
        benefits: [
          { title: 'Fait pour votre métier', description: 'Plus de contournements ni de fichiers Excel parallèles.' },
          { title: 'Un vrai produit', description: 'Prêt à être vendu par abonnement si c’est votre objectif.' },
          { title: 'Vous en êtes propriétaire', description: 'Code, données, infrastructure : tout vous appartient.' },
        ],
        process: [
          { title: 'Cadrage', description: 'Utilisateurs, parcours clés, priorités. Spécification écrite.' },
          { title: 'Design', description: 'Maquettes des écrans principaux, validées avec vous.' },
          { title: 'Développement', description: 'Sprints de deux semaines, démo à chaque étape.' },
          { title: 'Lancement', description: 'Mise en production, suivi, évolutions selon l’usage réel.' },
        ],
        faqs: [
          { q: 'Combien de temps pour un premier MVP ?', a: 'Généralement 6 à 10 semaines pour une première version utilisable, puis des livraisons régulières.' },
          { q: 'Assurez-vous la maintenance ?', a: 'Oui, avec des forfaits mensuels couvrant la surveillance, les correctifs et les évolutions.' },
          { q: 'Pouvons-nous reprendre le code en interne ?', a: 'Oui. Code typé, testé et documenté ; nous accompagnons la passation si vous recrutez.' },
        ],
      },
      en: {
        name: 'Custom SaaS Platforms',
        promise: 'Your business software online, built around how you work, ready to sell or use internally.',
        metaDescription:
          'Custom SaaS and business software development: client portals, subscription platforms, internal tools. Scalable architecture, security, payments. Free quote.',
        overview: [
          'When no off-the-shelf software fits your business, or when you have a product idea to launch, we build your SaaS: client area, subscriptions, billing, roles and permissions, dashboards.',
          'We deliver a usable product quickly (MVP in 6 to 10 weeks), then grow it in stages, with clean code your team can take over.',
        ],
        deliverables: [
          'Product scoping and functional specification',
          'Scalable, secure architecture',
          'Responsive, accessible web interface',
          'Accounts, roles, subscriptions and payments (Stripe)',
          'Dashboards, exports, integrations (API, CRM, accounting)',
          'Automated tests, continuous deployment, monitoring',
        ],
        benefits: [
          { title: 'Built for your business', description: 'No more workarounds or parallel spreadsheets.' },
          { title: 'A real product', description: 'Ready to sell by subscription if that is your goal.' },
          { title: 'You own it', description: 'Code, data, infrastructure: everything belongs to you.' },
        ],
        process: [
          { title: 'Scoping', description: 'Users, key journeys, priorities. Written specification.' },
          { title: 'Design', description: 'Main screen designs, approved with you.' },
          { title: 'Development', description: 'Two-week sprints, a demo at every step.' },
          { title: 'Launch', description: 'Production release, monitoring, iterations based on real usage.' },
        ],
        faqs: [
          { q: 'How long for a first MVP?', a: 'Usually 6 to 10 weeks for a first usable version, then regular releases.' },
          { q: 'Do you provide maintenance?', a: 'Yes, with monthly plans covering monitoring, fixes and new features.' },
          { q: 'Can we take the code in-house?', a: 'Yes. Typed, tested, documented code; we support the handover if you hire.' },
        ],
      },
    },
  },

  // ───────────────────────── IA & Automatisation ─────────────────────────
  {
    slug: 'solutions-ia',
    category: 'ia-automatisation',
    tools: ['Claude', 'OpenAI', 'LangChain', 'Vector DB', 'Python', 'Azure / AWS'],
    priceFrom: 3000,
    content: {
      fr: {
        name: 'Solutions IA sur mesure',
        promise: 'Un assistant IA qui connaît votre entreprise : support client, tri des demandes, rédaction, analyse de documents.',
        metaDescription:
          'Solutions IA sur mesure pour entreprises : assistants et agents IA, chatbot connecté à vos documents, analyse et extraction de données, intégration à vos outils. Devis gratuit.',
        overview: [
          'L’IA générique ne connaît pas vos produits, vos procédures ni vos clients. Nous construisons des assistants qui, eux, les connaissent : réponse aux questions clients à partir de vos documents, qualification des demandes entrantes, rédaction de devis et de courriers, extraction d’informations dans des factures ou des contrats.',
          'Nous choisissons le bon modèle pour chaque usage, hébergé en Europe si nécessaire, avec des garde-fous et un suivi de la qualité des réponses.',
        ],
        deliverables: [
          'Atelier d’identification des cas d’usage rentables',
          'Prototype fonctionnel en 2 à 3 semaines',
          'Assistant connecté à vos documents et outils (CRM, e-mail, ERP)',
          'Garde-fous, journalisation et contrôle qualité des réponses',
          'Hébergement conforme RGPD, données en Europe si requis',
          'Formation des équipes et suivi mensuel',
        ],
        benefits: [
          { title: 'Des heures gagnées', description: 'Les tâches répétitives à base de texte sont traitées en secondes.' },
          { title: 'Réponses plus rapides', description: 'Vos clients obtiennent une réponse fiable, à toute heure.' },
          { title: 'Sous contrôle', description: 'Vous voyez ce que l’IA répond et vous gardez la main.' },
        ],
        process: [
          { title: 'Identifier', description: 'Les 2 ou 3 usages où l’IA fait vraiment gagner du temps ou de l’argent.' },
          { title: 'Prototyper', description: 'Une version test sur vos vraies données, en quelques semaines.' },
          { title: 'Intégrer', description: 'Connexion à vos outils, garde-fous, formation.' },
          { title: 'Suivre', description: 'Mesure de la qualité et des gains, améliorations continues.' },
        ],
        faqs: [
          { q: 'Nos données restent-elles confidentielles ?', a: 'Oui. Nous privilégions des hébergements européens et des modèles qui ne s’entraînent pas sur vos données, avec des contrats clairs sur ce point.' },
          { q: 'Faut-il beaucoup de données ?', a: 'Non. Les modèles actuels fonctionnent très bien avec vos documents existants (FAQ, procédures, contrats, historiques d’e-mails).' },
          { q: 'Combien ça coûte ?', a: 'Un prototype démarre autour de 3 000 à 6 000 €. Une solution intégrée à vos outils se situe généralement entre 8 000 et 30 000 €, plus les coûts d’usage des modèles.' },
        ],
      },
      en: {
        name: 'Custom AI Solutions',
        promise: 'An AI assistant that knows your business: customer support, request triage, writing, document analysis.',
        metaDescription:
          'Custom AI solutions for businesses: AI assistants and agents, chatbots connected to your documents, data extraction and analysis, integration with your tools. Free quote.',
        overview: [
          'Generic AI does not know your products, procedures or clients. We build assistants that do: answering client questions from your documents, qualifying incoming requests, drafting quotes and letters, extracting information from invoices or contracts.',
          'We pick the right model for each use, hosted in Europe if required, with guardrails and ongoing monitoring of answer quality.',
        ],
        deliverables: [
          'Workshop to identify profitable use cases',
          'Working prototype in 2 to 3 weeks',
          'Assistant connected to your documents and tools (CRM, e-mail, ERP)',
          'Guardrails, logging and answer quality control',
          'GDPR-compliant hosting, data in Europe if required',
          'Team training and monthly follow-up',
        ],
        benefits: [
          { title: 'Hours saved', description: 'Repetitive text-based tasks are handled in seconds.' },
          { title: 'Faster answers', description: 'Your clients get a reliable answer at any hour.' },
          { title: 'Under control', description: 'You see what the AI answers and you stay in charge.' },
        ],
        process: [
          { title: 'Identify', description: 'The 2 or 3 uses where AI really saves time or money.' },
          { title: 'Prototype', description: 'A test version on your real data, within weeks.' },
          { title: 'Integrate', description: 'Connection to your tools, guardrails, training.' },
          { title: 'Monitor', description: 'Quality and gains measured, continuous improvement.' },
        ],
        faqs: [
          { q: 'Does our data stay confidential?', a: 'Yes. We favour European hosting and models that do not train on your data, with clear contracts on that point.' },
          { q: 'Do we need a lot of data?', a: 'No. Current models work very well with your existing documents (FAQs, procedures, contracts, e-mail history).' },
          { q: 'How much does it cost?', a: 'A prototype starts around €3,000 to €6,000. A solution integrated with your tools usually runs €8,000 to €30,000, plus model usage costs.' },
        ],
      },
    },
  },
  {
    slug: 'automatisation-processus',
    category: 'ia-automatisation',
    tools: ['n8n', 'Make', 'Zapier', 'API', 'Google Workspace', 'HubSpot'],
    content: {
      fr: {
        name: 'Automatisation des tâches',
        promise: 'Les saisies, relances, rapports et transferts de données se font seuls, sans erreur, pendant que vous travaillez.',
        metaDescription:
          'Automatisation des processus métier : connexion de vos outils (CRM, facturation, e-mail, tableurs), relances automatiques, reporting, workflows n8n / Make / Zapier. Devis gratuit.',
        overview: [
          'Chaque semaine, vos équipes recopient des informations d’un outil à l’autre, relancent des clients à la main et compilent des rapports. Nous connectons vos outils pour que ces tâches s’exécutent seules, de façon fiable et traçable.',
          'Nous partons d’un inventaire de vos tâches répétitives, chiffrons le temps perdu, puis automatisons par ordre de rentabilité. Vous voyez les gains dès les premières semaines.',
        ],
        deliverables: [
          'Cartographie des tâches répétitives et du temps perdu',
          'Automatisations prioritaires (leads, devis, facturation, relances)',
          'Connexion de vos outils : CRM, compta, e-mail, tableurs, ERP',
          'Alertes et journal d’exécution pour tout contrôler',
          'Documentation de chaque workflow',
          'Maintenance et évolutions mensuelles',
        ],
        benefits: [
          { title: 'Du temps récupéré', description: 'Souvent 5 à 15 heures par semaine et par équipe.' },
          { title: 'Zéro oubli', description: 'Relances, mises à jour et rapports partent toujours à l’heure.' },
          { title: 'Rentable vite', description: 'Les premières automatisations sont amorties en quelques semaines.' },
        ],
        process: [
          { title: 'Inventaire', description: 'On liste les tâches, leur fréquence et le temps qu’elles coûtent.' },
          { title: 'Priorisation', description: 'On commence par ce qui rapporte le plus, vite.' },
          { title: 'Mise en place', description: 'Workflows construits, testés, documentés.' },
          { title: 'Suivi', description: 'Surveillance, ajustements et nouvelles automatisations.' },
        ],
        faqs: [
          { q: 'Quels outils pouvez-vous connecter ?', a: 'Pratiquement tous les outils courants (HubSpot, Pipedrive, Google Workspace, Microsoft 365, Pennylane, Qonto, Notion, Slack…) et tout logiciel disposant d’une API.' },
          { q: 'Et si une automatisation tombe en panne ?', a: 'Chaque workflow a des alertes et un journal. Nous sommes prévenus et intervenons dans le cadre de la maintenance.' },
          { q: 'Est-ce adapté à une petite structure ?', a: 'Oui, c’est même là que le gain est le plus visible : quelques automatisations bien choisies remplacent des heures de travail manuel.' },
        ],
      },
      en: {
        name: 'Workflow Automation',
        promise: 'Data entry, follow-ups, reports and transfers run on their own, error-free, while you work.',
        metaDescription:
          'Business process automation: connect your tools (CRM, invoicing, e-mail, spreadsheets), automatic follow-ups, reporting, n8n / Make / Zapier workflows. Free quote.',
        overview: [
          'Every week your teams copy information from one tool to another, chase clients by hand and compile reports. We connect your tools so these tasks run on their own, reliably and with a full audit trail.',
          'We start with an inventory of your repetitive tasks, put a number on the time lost, then automate in order of return. You see the gains within the first weeks.',
        ],
        deliverables: [
          'Map of repetitive tasks and time lost',
          'Priority automations (leads, quotes, invoicing, follow-ups)',
          'Connection of your tools: CRM, accounting, e-mail, spreadsheets, ERP',
          'Alerts and execution log so you stay in control',
          'Documentation for every workflow',
          'Monthly maintenance and improvements',
        ],
        benefits: [
          { title: 'Time back', description: 'Often 5 to 15 hours per week per team.' },
          { title: 'Nothing forgotten', description: 'Follow-ups, updates and reports always go out on time.' },
          { title: 'Fast payback', description: 'The first automations pay for themselves within weeks.' },
        ],
        process: [
          { title: 'Inventory', description: 'We list tasks, their frequency and what they cost in time.' },
          { title: 'Prioritisation', description: 'We start with what pays off most, fastest.' },
          { title: 'Implementation', description: 'Workflows built, tested, documented.' },
          { title: 'Follow-up', description: 'Monitoring, adjustments and new automations.' },
        ],
        faqs: [
          { q: 'Which tools can you connect?', a: 'Practically every common tool (HubSpot, Pipedrive, Google Workspace, Microsoft 365, Xero, QuickBooks, Notion, Slack…) and any software with an API.' },
          { q: 'What if an automation breaks?', a: 'Every workflow has alerts and a log. We are notified and fix it as part of maintenance.' },
          { q: 'Is it suited to a small business?', a: 'Yes, that is where the gain is most visible: a few well-chosen automations replace hours of manual work.' },
        ],
      },
    },
  },

  // ───────────────────────── Services juridiques externalisés ─────────────────────────
  {
    slug: 'formalites-juridiques',
    category: 'services-juridiques',
    tools: ['Guichet unique', 'Greffe', 'Registres', 'Signature électronique', 'Suivi en ligne'],
    content: {
      fr: {
        name: 'Sous-traitance des formalités juridiques',
        promise: 'Créations, modifications, dépôts et approbations traités dans les délais, sans mobiliser votre équipe.',
        metaDescription:
          'Sous-traitance des formalités juridiques : création de sociétés, modifications statutaires, dépôts au greffe, approbation des comptes, tenue des registres. Équipe dédiée, délais tenus. Devis gratuit.',
        overview: [
          'Cabinets d’avocats, experts-comptables, directions juridiques : les formalités prennent du temps à des profils qui en ont peu. Nous prenons en charge la préparation, le dépôt et le suivi des formalités courantes, avec un contrôle qualité systématique.',
          'Vous gardez la relation client et la responsabilité du conseil ; nous exécutons, dans vos modèles et vos outils, avec un reporting régulier sur chaque dossier.',
        ],
        deliverables: [
          'Création de sociétés et immatriculations',
          'Modifications statutaires (siège, dirigeants, capital, objet)',
          'Approbation des comptes et dépôts annuels',
          'Tenue des registres et secrétariat juridique',
          'Suivi des délais et relances des parties',
          'Reporting par dossier et par client',
        ],
        benefits: [
          { title: 'Capacité immédiate', description: 'Absorbez les pics d’activité sans recruter.' },
          { title: 'Délais tenus', description: 'Chaque formalité est suivie jusqu’à la pièce finale.' },
          { title: 'Coût maîtrisé', description: 'Tarification à l’acte ou au forfait mensuel, connue d’avance.' },
        ],
        process: [
          { title: 'Cadrage', description: 'Types de formalités, volumes, modèles et outils utilisés.' },
          { title: 'Mise en place', description: 'Procédures, accès, points de contrôle, période test.' },
          { title: 'Exécution', description: 'Traitement des dossiers avec double contrôle.' },
          { title: 'Reporting', description: 'Suivi partagé, indicateurs de délais et de qualité.' },
        ],
        faqs: [
          { q: 'Travaillez-vous dans nos outils ?', a: 'Oui. Nous utilisons vos modèles, votre logiciel de gestion et vos circuits de validation pour que rien ne change pour vos clients.' },
          { q: 'Comment est garantie la confidentialité ?', a: 'Accords de confidentialité, accès nominatifs, journalisation et traitement des données conforme au RGPD.' },
          { q: 'Quels volumes prenez-vous en charge ?', a: 'De quelques dossiers par mois à plusieurs centaines. L’équipe est dimensionnée selon vos besoins et peut évoluer.' },
        ],
      },
      en: {
        name: 'Legal Formalities Outsourcing',
        promise: 'Incorporations, amendments, filings and approvals handled on time, without tying up your team.',
        metaDescription:
          'Outsourced legal formalities: company incorporations, statutory amendments, registry filings, annual approvals, register keeping. Dedicated team, deadlines met. Free quote.',
        overview: [
          'Law firms, accountants, in-house legal departments: formalities take time from people who have little of it. We handle the preparation, filing and follow-up of routine formalities, with systematic quality control.',
          'You keep the client relationship and responsibility for advice; we execute, in your templates and tools, with regular reporting on every file.',
        ],
        deliverables: [
          'Company incorporations and registrations',
          'Statutory amendments (registered office, directors, capital, purpose)',
          'Annual account approvals and filings',
          'Register keeping and corporate secretarial work',
          'Deadline tracking and follow-up with parties',
          'Reporting per file and per client',
        ],
        benefits: [
          { title: 'Immediate capacity', description: 'Absorb peaks of activity without hiring.' },
          { title: 'Deadlines met', description: 'Every formality is tracked through to the final document.' },
          { title: 'Controlled cost', description: 'Per-act or monthly flat pricing, known in advance.' },
        ],
        process: [
          { title: 'Scoping', description: 'Types of formalities, volumes, templates and tools used.' },
          { title: 'Set-up', description: 'Procedures, access, checkpoints, trial period.' },
          { title: 'Execution', description: 'Files processed with a second review.' },
          { title: 'Reporting', description: 'Shared tracking, deadline and quality indicators.' },
        ],
        faqs: [
          { q: 'Do you work in our tools?', a: 'Yes. We use your templates, practice management software and approval flows so nothing changes for your clients.' },
          { q: 'How is confidentiality guaranteed?', a: 'Non-disclosure agreements, named access, logging and GDPR-compliant data handling.' },
          { q: 'What volumes can you handle?', a: 'From a few files a month to several hundred. The team is sized to your needs and can scale.' },
        ],
      },
    },
  },
  {
    slug: 'equipes-juridiques',
    category: 'services-juridiques',
    tools: ['Juristes', 'Paralegals', 'Formalistes', 'Équipe dédiée', 'Nearshore'],
    content: {
      fr: {
        name: 'Mise en place d’équipes juridiques',
        promise: 'Une équipe de juristes et paralegals dédiée à votre structure, opérationnelle en quelques semaines.',
        metaDescription:
          'Mise en place d’équipes juridiques externalisées : juristes, paralegals et formalistes dédiés, recrutés, formés et encadrés pour votre cabinet ou votre entreprise. Devis gratuit.',
        overview: [
          'Recruter un juriste prend des mois et coûte cher. Nous constituons pour vous une équipe dédiée, à temps partiel ou complet, formée à vos procédures et encadrée par un responsable expérimenté.',
          'Vous gagnez une capacité stable et évolutive, sans les contraintes du recrutement, avec un seul interlocuteur responsable de la qualité.',
        ],
        deliverables: [
          'Définition des profils et des missions',
          'Sélection et recrutement des juristes, paralegals, formalistes',
          'Formation à vos procédures, modèles et outils',
          'Responsable d’équipe dédié et points hebdomadaires',
          'Suivi du temps, de la charge et de la qualité',
          'Montée en charge ou réduction selon l’activité',
        ],
        benefits: [
          { title: 'Opérationnelle vite', description: 'Une équipe en place en 3 à 6 semaines.' },
          { title: 'Souple', description: 'Ajustez les effectifs à votre activité, sans procédure lourde.' },
          { title: 'Encadrée', description: 'Un responsable garantit la qualité et la continuité.' },
        ],
        process: [
          { title: 'Besoins', description: 'Missions, volumes, compétences, niveau d’autonomie attendu.' },
          { title: 'Constitution', description: 'Sélection des profils, validation avec vous.' },
          { title: 'Intégration', description: 'Formation, accès, période d’essai encadrée.' },
          { title: 'Pilotage', description: 'Points hebdomadaires, indicateurs, ajustements.' },
        ],
        faqs: [
          { q: 'Où est basée l’équipe ?', a: 'Selon vos exigences : en France, ou nearshore francophone pour optimiser les coûts, toujours avec un encadrement expérimenté.' },
          { q: 'Que se passe-t-il si un membre part ?', a: 'Nous assurons la continuité : remplacement, transfert de connaissances et documentation des procédures dès le départ.' },
          { q: 'Peut-on commencer petit ?', a: 'Oui, souvent avec un ou deux profils à temps partiel, puis élargir quand la valeur est démontrée.' },
        ],
      },
      en: {
        name: 'Building Legal Teams',
        promise: 'A team of legal professionals and paralegals dedicated to your organisation, operational within weeks.',
        metaDescription:
          'Outsourced legal team set-up: dedicated legal professionals, paralegals and formalities specialists, recruited, trained and supervised for your firm or company. Free quote.',
        overview: [
          'Hiring a legal professional takes months and costs a lot. We build a dedicated team for you, part-time or full-time, trained on your procedures and supervised by an experienced lead.',
          'You gain stable, scalable capacity without the constraints of recruitment, with a single person accountable for quality.',
        ],
        deliverables: [
          'Definition of profiles and assignments',
          'Selection and recruitment of legal professionals, paralegals, formalities specialists',
          'Training on your procedures, templates and tools',
          'Dedicated team lead and weekly check-ins',
          'Time, workload and quality tracking',
          'Scale-up or scale-down with your activity',
        ],
        benefits: [
          { title: 'Operational fast', description: 'A team in place within 3 to 6 weeks.' },
          { title: 'Flexible', description: 'Adjust headcount to your activity, without heavy procedures.' },
          { title: 'Supervised', description: 'A lead guarantees quality and continuity.' },
        ],
        process: [
          { title: 'Needs', description: 'Assignments, volumes, skills, expected autonomy.' },
          { title: 'Team building', description: 'Profile selection, validated with you.' },
          { title: 'Onboarding', description: 'Training, access, supervised trial period.' },
          { title: 'Steering', description: 'Weekly check-ins, indicators, adjustments.' },
        ],
        faqs: [
          { q: 'Where is the team based?', a: 'Depending on your requirements: in France, or French-speaking nearshore to optimise costs, always with experienced supervision.' },
          { q: 'What happens if a team member leaves?', a: 'We ensure continuity: replacement, knowledge transfer and procedure documentation from day one.' },
          { q: 'Can we start small?', a: 'Yes, often with one or two part-time profiles, then expand once the value is proven.' },
        ],
      },
    },
  },
  {
    slug: 'management-supervision-juridique',
    category: 'services-juridiques',
    tools: ['Procédures', 'Contrôle qualité', 'Indicateurs', 'Reporting', 'Outils de suivi'],
    content: {
      fr: {
        name: 'Management et supervision juridique',
        promise: 'Un pilotage professionnel de votre activité juridique : procédures, contrôle qualité, délais et reporting.',
        metaDescription:
          'Management et supervision d’équipes et de flux juridiques : mise en place de procédures, contrôle qualité, suivi des délais, indicateurs et reporting pour cabinets et entreprises. Devis gratuit.',
        overview: [
          'Une activité juridique qui grandit a besoin d’organisation : qui fait quoi, dans quel délai, avec quel contrôle. Nous mettons en place ou reprenons le management de vos équipes et flux juridiques, en interne comme en externe.',
          'Procédures écrites, points de contrôle, indicateurs de délais et de qualité, reporting à la direction : vous savez en permanence où en sont les dossiers et où sont les risques.',
        ],
        deliverables: [
          'Audit de l’organisation et des flux existants',
          'Procédures et modèles standardisés',
          'Plan de contrôle qualité et revue des dossiers',
          'Tableaux de bord : délais, volumes, charge, incidents',
          'Encadrement des équipes internes ou externalisées',
          'Reporting mensuel à la direction',
        ],
        benefits: [
          { title: 'Visibilité', description: 'Un état clair de l’activité et des risques, à tout moment.' },
          { title: 'Moins d’erreurs', description: 'Des contrôles systématiques là où ils comptent.' },
          { title: 'Direction libérée', description: 'Les associés et dirigeants se concentrent sur le conseil et les clients.' },
        ],
        process: [
          { title: 'Audit', description: 'Organisation, flux, points de friction, risques.' },
          { title: 'Structuration', description: 'Procédures, rôles, contrôles, outils de suivi.' },
          { title: 'Pilotage', description: 'Supervision quotidienne ou hebdomadaire des équipes.' },
          { title: 'Amélioration', description: 'Indicateurs suivis, ajustements, reporting.' },
        ],
        faqs: [
          { q: 'Intervenez-vous sur des équipes internes ?', a: 'Oui. Nous pouvons superviser vos équipes existantes, une équipe externalisée, ou les deux ensemble.' },
          { q: 'Quel format d’intervention ?', a: 'Mission de structuration ponctuelle (quelques semaines) ou supervision continue avec un nombre de jours mensuel défini.' },
          { q: 'Est-ce compatible avec les règles déontologiques ?', a: 'Notre rôle est organisationnel et opérationnel ; la responsabilité du conseil et de la relation client reste à vos professionnels habilités.' },
        ],
      },
      en: {
        name: 'Legal Management & Supervision',
        promise: 'Professional steering of your legal operations: procedures, quality control, deadlines and reporting.',
        metaDescription:
          'Management and supervision of legal teams and workflows: procedure design, quality control, deadline tracking, indicators and reporting for firms and companies. Free quote.',
        overview: [
          'A growing legal operation needs organisation: who does what, by when, with which controls. We set up or take over the management of your legal teams and workflows, in-house or outsourced.',
          'Written procedures, checkpoints, deadline and quality indicators, reporting to management: you always know where files stand and where the risks are.',
        ],
        deliverables: [
          'Audit of the existing organisation and workflows',
          'Standardised procedures and templates',
          'Quality control plan and file reviews',
          'Dashboards: deadlines, volumes, workload, incidents',
          'Supervision of in-house or outsourced teams',
          'Monthly reporting to management',
        ],
        benefits: [
          { title: 'Visibility', description: 'A clear view of activity and risks, at any time.' },
          { title: 'Fewer errors', description: 'Systematic checks where they matter.' },
          { title: 'Leadership freed up', description: 'Partners and executives focus on advice and clients.' },
        ],
        process: [
          { title: 'Audit', description: 'Organisation, workflows, friction points, risks.' },
          { title: 'Structuring', description: 'Procedures, roles, controls, tracking tools.' },
          { title: 'Steering', description: 'Daily or weekly supervision of the teams.' },
          { title: 'Improvement', description: 'Tracked indicators, adjustments, reporting.' },
        ],
        faqs: [
          { q: 'Do you work with in-house teams?', a: 'Yes. We can supervise your existing teams, an outsourced team, or both together.' },
          { q: 'What engagement format?', a: 'A one-off structuring assignment (a few weeks) or ongoing supervision with a set number of days per month.' },
          { q: 'Is this compatible with professional conduct rules?', a: 'Our role is organisational and operational; responsibility for advice and the client relationship stays with your qualified professionals.' },
        ],
      },
    },
  },
];

// ───────────────────────── Accessors ─────────────────────────

export interface LocalizedService extends ServiceContent {
  slug: string;
  category: string;
  tools: string[];
  priceFrom?: number;
  area: ServiceArea;
  tone: Tone;
}

export interface LocalizedCategory extends CategoryContent {
  slug: string;
  tone: Tone;
  services: LocalizedService[];
}

function localize(def: ServiceDef, locale: Locale): LocalizedService {
  return {
    slug: def.slug,
    category: def.category,
    tools: def.tools,
    priceFrom: def.priceFrom,
    area: FRANCE_ONLY_CATEGORIES.includes(def.category) ? 'france' : 'worldwide',
    tone: categoryTone(def.category),
    ...def.content[locale],
  };
}

export function getServices(locale: Locale): LocalizedService[] {
  return services.map((s) => localize(s, locale));
}

export function getService(slug: string, locale: Locale): LocalizedService | undefined {
  const def = services.find((s) => s.slug === slug);
  return def ? localize(def, locale) : undefined;
}

export function getCategories(locale: Locale): LocalizedCategory[] {
  const all = getServices(locale);
  return categories.map((c) => ({
    slug: c.slug,
    tone: c.tone,
    ...c.content[locale],
    services: all.filter((s) => s.category === c.slug),
  }));
}

export function getCategory(slug: string, locale: Locale): LocalizedCategory | undefined {
  return getCategories(locale).find((c) => c.slug === slug);
}

export function getServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

/** Colour of a practice area; falls back to the website tone. */
export function categoryTone(categorySlug: string): Tone {
  return categories.find((c) => c.slug === categorySlug)?.tone ?? 'web';
}

/** Colour of the area a service belongs to (undefined for unknown slugs). */
export function serviceTone(serviceSlug: string | undefined): Tone | undefined {
  const def = services.find((s) => s.slug === serviceSlug);
  return def ? categoryTone(def.category) : undefined;
}

/** CSS class that sets --tone for everything inside (see globals.css). */
export function toneClass(tone: Tone | undefined): string {
  return tone ? `tone-${tone}` : '';
}
