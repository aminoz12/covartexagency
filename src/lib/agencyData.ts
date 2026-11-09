import type { Locale } from '@/i18n/config';
import { serviceTone, type Tone } from '@/lib/services';

/**
 * Agency content: case studies, stats, testimonials, homepage FAQ — FR + EN.
 *
 * ⚠️ The case studies and testimonials below are illustrative placeholders.
 * Replace them with real client projects and quotes (with permission)
 * before going live — real names and numbers convert far better.
 */

export type ProjectCategory = 'web' | 'mobile' | 'saas' | 'ai' | 'legal';

export interface ProjectContent {
  title: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  results: { label: string; value: string }[];
}

export interface ProjectDef {
  id: number;
  slug: string;
  category: ProjectCategory;
  /** Related service slug, for cross-linking. */
  service: string;
  technologies: string[];
  featured?: boolean;
  content: Record<Locale, ProjectContent>;
}

export const projectCategoryLabel: Record<Locale, Record<ProjectCategory, string>> = {
  fr: { web: 'Site web & SEO', mobile: 'Application mobile', saas: 'SaaS', ai: 'IA & Automatisation', legal: 'Juridique' },
  en: { web: 'Website & SEO', mobile: 'Mobile app', saas: 'SaaS', ai: 'AI & Automation', legal: 'Legal' },
};

export const projects: ProjectDef[] = [
  {
    id: 1,
    slug: 'cabinet-dentaire-site-seo-local',
    category: 'web',
    service: 'creation-site-web',
    technologies: ['Next.js', 'Google Business', 'Schema.org', 'GA4'],
    featured: true,
    content: {
      fr: {
        title: 'Cabinet dentaire : nouveau site et première page Google en 4 mois',
        description: 'Refonte complète d’un site vieillissant et SEO local pour un cabinet à trois praticiens.',
        challenge:
          'Le site datait de 2016, ne s’affichait pas correctement sur mobile et n’apparaissait qu’en page 3 pour « dentiste + ville ». Les nouveaux patients venaient presque uniquement du bouche-à-oreille.',
        solution:
          'Nouveau site en 3 semaines, prise de rendez-vous en ligne, pages par soin, fiche Google Business optimisée, collecte d’avis et données structurées. Suivi SEO mensuel.',
        impact:
          'Le cabinet est passé en première page sur ses requêtes locales prioritaires et reçoit désormais la majorité de ses nouveaux patients via le site.',
        results: [
          { label: 'Position Google', value: 'Top 3' },
          { label: 'Demandes de RDV', value: '+180 %' },
          { label: 'Mise en ligne', value: '3 sem.' },
        ],
      },
      en: {
        title: 'Dental practice: new website and page one of Google in 4 months',
        description: 'Full redesign of an ageing website plus local SEO for a three-dentist practice.',
        challenge:
          'The site dated from 2016, did not display properly on mobile and only appeared on page 3 for “dentist + city”. New patients came almost exclusively from word of mouth.',
        solution:
          'New website in 3 weeks, online booking, one page per treatment, optimised Google Business Profile, review collection and structured data. Monthly SEO follow-up.',
        impact:
          'The practice moved to page one for its priority local queries and now gets most of its new patients through the website.',
        results: [
          { label: 'Google ranking', value: 'Top 3' },
          { label: 'Booking requests', value: '+180%' },
          { label: 'Time to launch', value: '3 wks' },
        ],
      },
    },
  },
  {
    id: 2,
    slug: 'artisans-application-mobile-terrain',
    category: 'mobile',
    service: 'applications-mobiles',
    technologies: ['React Native', 'Expo', 'Supabase', 'Stripe'],
    featured: true,
    content: {
      fr: {
        title: 'Réseau d’artisans : application mobile de suivi de chantier',
        description: 'Une application iOS et Android pour 60 techniciens : interventions, photos, signatures et facturation.',
        challenge:
          'Les rapports d’intervention étaient remplis sur papier puis ressaisis au bureau, avec des erreurs et des factures envoyées avec plusieurs jours de retard.',
        solution:
          'Application mobile hors-ligne avec planning, checklist d’intervention, photos, signature client et génération automatique de la facture, connectée au logiciel comptable.',
        impact:
          'Les factures partent le jour même, la ressaisie a disparu et le temps administratif par intervention a été divisé par trois.',
        results: [
          { label: 'Temps admin', value: '-66 %' },
          { label: 'Délai de facturation', value: 'J+0' },
          { label: 'Utilisateurs', value: '60' },
        ],
      },
      en: {
        title: 'Trades network: mobile app for on-site job tracking',
        description: 'An iOS and Android app for 60 technicians: jobs, photos, signatures and invoicing.',
        challenge:
          'Job reports were filled in on paper and re-typed at the office, with errors and invoices sent several days late.',
        solution:
          'Offline-first mobile app with scheduling, job checklists, photos, client signature and automatic invoice generation, connected to the accounting software.',
        impact:
          'Invoices go out the same day, re-typing is gone and admin time per job has been cut by two thirds.',
        results: [
          { label: 'Admin time', value: '-66%' },
          { label: 'Invoicing delay', value: 'Same day' },
          { label: 'Users', value: '60' },
        ],
      },
    },
  },
  {
    id: 3,
    slug: 'organisme-formation-saas-gestion',
    category: 'saas',
    service: 'saas-sur-mesure',
    technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'AWS'],
    featured: true,
    content: {
      fr: {
        title: 'Organisme de formation : plateforme SaaS de gestion des sessions',
        description: 'Inscriptions, convocations, émargement, facturation et documents réglementaires dans un seul outil.',
        challenge:
          'Cinq tableurs, deux logiciels et beaucoup de copier-coller pour gérer 400 sessions par an. Les documents obligatoires étaient produits à la main, avec des oublis.',
        solution:
          'Plateforme sur mesure : catalogue, inscriptions en ligne, génération automatique des convocations et attestations, émargement électronique, facturation et exports.',
        impact:
          'Une seule source de vérité, des documents conformes générés en un clic et une équipe administrative qui a pu absorber 30 % de sessions en plus sans recruter.',
        results: [
          { label: 'Sessions / an', value: '+30 %' },
          { label: 'Documents manuels', value: '0' },
          { label: 'MVP livré', value: '9 sem.' },
        ],
      },
      en: {
        title: 'Training provider: SaaS platform for session management',
        description: 'Enrolments, notices, attendance, invoicing and compliance documents in a single tool.',
        challenge:
          'Five spreadsheets, two applications and a lot of copy-paste to run 400 sessions a year. Mandatory documents were produced by hand, with omissions.',
        solution:
          'Custom platform: catalogue, online enrolment, automatic generation of notices and certificates, electronic attendance, invoicing and exports.',
        impact:
          'A single source of truth, compliant documents generated in one click and an admin team able to absorb 30% more sessions without hiring.',
        results: [
          { label: 'Sessions / year', value: '+30%' },
          { label: 'Manual documents', value: '0' },
          { label: 'MVP delivered', value: '9 wks' },
        ],
      },
    },
  },
  {
    id: 4,
    slug: 'assurance-assistant-ia-support',
    category: 'ai',
    service: 'solutions-ia',
    technologies: ['Claude', 'RAG', 'n8n', 'HubSpot'],
    featured: true,
    content: {
      fr: {
        title: 'Courtier en assurance : assistant IA et automatisation du support',
        description: 'Un assistant qui répond aux questions clients à partir des contrats et trie les demandes entrantes.',
        challenge:
          'Plus de 300 e-mails par jour, dont la moitié de questions répétitives sur les garanties et les démarches. Délai de réponse moyen : deux jours.',
        solution:
          'Assistant IA connecté aux conditions générales et aux procédures internes, réponses proposées aux conseillers pour validation, tri automatique des demandes dans le CRM.',
        impact:
          'Les questions courantes obtiennent une réponse en moins d’une heure, les conseillers se concentrent sur les dossiers complexes et la satisfaction client a progressé.',
        results: [
          { label: 'Délai de réponse', value: '< 1 h' },
          { label: 'E-mails automatisés', value: '55 %' },
          { label: 'Heures gagnées / sem.', value: '40' },
        ],
      },
      en: {
        title: 'Insurance broker: AI assistant and support automation',
        description: 'An assistant that answers client questions from policy documents and triages incoming requests.',
        challenge:
          'Over 300 e-mails a day, half of them repetitive questions about coverage and procedures. Average response time: two days.',
        solution:
          'AI assistant connected to policy terms and internal procedures, suggested replies for advisers to approve, automatic triage of requests into the CRM.',
        impact:
          'Routine questions are answered in under an hour, advisers focus on complex cases and client satisfaction has improved.',
        results: [
          { label: 'Response time', value: '< 1 h' },
          { label: 'E-mails automated', value: '55%' },
          { label: 'Hours saved / week', value: '40' },
        ],
      },
    },
  },
  {
    id: 5,
    slug: 'cabinet-avocats-formalites-externalisees',
    category: 'legal',
    service: 'formalites-juridiques',
    technologies: ['Équipe dédiée', 'Procédures', 'Reporting'],
    featured: true,
    content: {
      fr: {
        title: 'Cabinet d’avocats d’affaires : externalisation des formalités',
        description: 'Une équipe dédiée de trois formalistes pour absorber les créations, modifications et approbations de comptes.',
        challenge:
          'Les collaborateurs passaient jusqu’à 30 % de leur temps sur des formalités, les délais de dépôt étaient parfois dépassés et le recrutement n’aboutissait pas.',
        solution:
          'Mise en place d’une équipe dédiée en 5 semaines, formée aux modèles du cabinet, avec double contrôle, suivi des délais et reporting hebdomadaire aux associés.',
        impact:
          'Zéro délai dépassé depuis la mise en place, des collaborateurs recentrés sur le conseil et une capacité qui suit les pics de fin d’exercice.',
        results: [
          { label: 'Délais dépassés', value: '0' },
          { label: 'Temps collaborateurs libéré', value: '30 %' },
          { label: 'Équipe en place', value: '5 sem.' },
        ],
      },
      en: {
        title: 'Business law firm: outsourced legal formalities',
        description: 'A dedicated team of three formalities specialists to absorb incorporations, amendments and annual approvals.',
        challenge:
          'Associates spent up to 30% of their time on formalities, filing deadlines were sometimes missed and recruitment was not succeeding.',
        solution:
          'A dedicated team set up in 5 weeks, trained on the firm’s templates, with second review, deadline tracking and weekly reporting to partners.',
        impact:
          'No missed deadlines since the set-up, associates refocused on advice and capacity that follows year-end peaks.',
        results: [
          { label: 'Missed deadlines', value: '0' },
          { label: 'Associate time freed', value: '30%' },
          { label: 'Team in place', value: '5 wks' },
        ],
      },
    },
  },
];

export interface LocalizedProject extends ProjectContent {
  id: number;
  slug: string;
  category: ProjectCategory;
  categoryLabel: string;
  service: string;
  technologies: string[];
  featured?: boolean;
  /** Colour of the practice area of the related service. */
  tone: Tone;
}

export function getProjects(locale: Locale): LocalizedProject[] {
  return projects.map((p) => ({
    id: p.id,
    slug: p.slug,
    category: p.category,
    categoryLabel: projectCategoryLabel[locale][p.category],
    service: p.service,
    technologies: p.technologies,
    featured: p.featured,
    tone: serviceTone(p.service) ?? 'web',
    ...p.content[locale],
  }));
}

export function getProject(slug: string, locale: Locale): LocalizedProject | undefined {
  return getProjects(locale).find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

// ───────────────────────── Stats ─────────────────────────

export interface Stat {
  value: string;
  label: string;
}

export const stats: Record<Locale, Stat[]> = {
  fr: [
    { value: '150+', label: 'projets livrés' },
    { value: '12 ans', label: 'd’expérience' },
    { value: '48 h', label: 'pour recevoir un devis' },
    { value: '98 %', label: 'de clients qui reviennent' },
  ],
  en: [
    { value: '150+', label: 'projects delivered' },
    { value: '12 yrs', label: 'of experience' },
    { value: '48 h', label: 'to receive a quote' },
    { value: '98%', label: 'of clients come back' },
  ],
};

// ───────────────────────── Testimonials ─────────────────────────

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Record<Locale, Testimonial[]> = {
  fr: [
    {
      quote:
        'Site livré en trois semaines, exactement comme annoncé. Trois mois plus tard, nous recevons plus de demandes par le site que par le bouche-à-oreille.',
      name: 'Dr Sophie M.',
      role: 'Chirurgien-dentiste, cabinet de trois praticiens',
    },
    {
      quote:
        'Un seul interlocuteur, un devis clair, et une équipe qui dit non quand une idée n’a pas de sens pour notre budget. C’est rare.',
      name: 'Karim B.',
      role: 'Gérant, réseau d’artisans',
    },
    {
      quote:
        'L’externalisation des formalités nous a rendu l’équivalent d’un collaborateur à temps plein. Aucun délai dépassé depuis un an.',
      name: 'Maître Claire D.',
      role: 'Associée, cabinet d’avocats d’affaires',
    },
  ],
  en: [
    {
      quote:
        'Website delivered in three weeks, exactly as promised. Three months later we get more enquiries through the site than through word of mouth.',
      name: 'Dr Sophie M.',
      role: 'Dentist, three-practitioner practice',
    },
    {
      quote:
        'One point of contact, a clear quote, and a team that says no when an idea does not make sense for our budget. That is rare.',
      name: 'Karim B.',
      role: 'Managing director, trades network',
    },
    {
      quote:
        'Outsourcing our formalities gave us back the equivalent of a full-time associate. Not a single missed deadline in a year.',
      name: 'Claire D.',
      role: 'Partner, business law firm',
    },
  ],
};

// ───────────────────────── Homepage FAQ ─────────────────────────

export interface FaqItem {
  q: string;
  a: string;
}

export const homeFaq: Record<Locale, FaqItem[]> = {
  fr: [
    {
      q: 'Qu’est-ce que Covartex ?',
      a: 'Covartex est une agence web et IA : création de sites web, référencement Google (SEO), visibilité dans les réponses des IA comme ChatGPT (AEO/GEO), applications mobiles, SaaS sur mesure, solutions IA et automatisation, ainsi que des services juridiques externalisés pour les entreprises et les cabinets.',
    },
    {
      q: 'Le devis est-il vraiment gratuit et sans engagement ?',
      a: 'Oui. Vous décrivez votre besoin, nous vous rappelons sous 24 h ouvrées et vous recevez un devis détaillé sous 48 h. Vous décidez ensuite, sans aucune obligation.',
    },
    {
      q: 'Combien coûte un site web ou une application ?',
      a: 'Un site vitrine sur mesure démarre autour de 1 500 à 4 000 €, un e-commerce ou un site riche entre 4 000 et 15 000 €, une application mobile ou un SaaS à partir de 8 000 €. Chaque devis détaille le périmètre exact.',
    },
    {
      q: 'Quels sont vos délais ?',
      a: 'Site vitrine : 2 à 4 semaines. Application ou SaaS : premier MVP en 6 à 10 semaines. SEO : premiers résultats en 4 à 8 semaines. Équipe juridique : opérationnelle en 3 à 6 semaines.',
    },
    {
      q: 'Travaillez-vous avec des petites entreprises ?',
      a: 'Oui, la majorité de nos clients sont des TPE, PME, cabinets et indépendants. Nous adaptons le périmètre à votre budget et commençons souvent petit.',
    },
    {
      q: 'Travaillez-vous avec des clients hors de France ?',
      a: 'Oui. Sites, SEO, applications, IA et automatisation sont menés entièrement à distance, en français ou en anglais, pour des clients en France et à l’international. Les services juridiques portent sur le droit français : ils s’adressent aux entreprises françaises et aux groupes étrangers qui ont une entité en France.',
    },
    {
      q: 'Que veulent dire SEO, AEO et GEO ?',
      a: 'SEO : être bien placé dans Google. AEO : être la réponse directe des moteurs de réponse. GEO : être cité par les IA comme ChatGPT ou Perplexity quand un client leur demande une recommandation. Nous travaillons les trois ensemble.',
    },
    {
      q: 'Sommes-nous propriétaires de ce que vous livrez ?',
      a: 'Oui. Site, code, contenus, nom de domaine, données : tout vous appartient, avec la documentation pour qu’une autre équipe puisse reprendre si besoin.',
    },
  ],
  en: [
    {
      q: 'What is Covartex?',
      a: 'Covartex is a web and AI agency: website design, Google SEO, visibility in AI answers such as ChatGPT (AEO/GEO), mobile apps, custom SaaS, AI solutions and workflow automation, plus outsourced legal services for companies and law firms.',
    },
    {
      q: 'Is the quote really free and without commitment?',
      a: 'Yes. You describe your need, we call you back within one business day and you receive a detailed quote within 48 hours. You then decide, with no obligation.',
    },
    {
      q: 'How much does a website or an app cost?',
      a: 'A custom business website starts around €1,500 to €4,000, an online store or content-rich site €4,000 to €15,000, a mobile app or SaaS from €8,000. Every quote itemises the exact scope.',
    },
    {
      q: 'What are your timelines?',
      a: 'Business website: 2 to 4 weeks. App or SaaS: first MVP in 6 to 10 weeks. SEO: first results in 4 to 8 weeks. Legal team: operational in 3 to 6 weeks.',
    },
    {
      q: 'Do you work with small businesses?',
      a: 'Yes, most of our clients are small and mid-sized businesses, firms and independents. We adapt the scope to your budget and often start small.',
    },
    {
      q: 'Do you work with clients outside France?',
      a: 'Yes. Websites, SEO, apps, AI and automation projects are run fully remotely, in English or French, for clients in France and worldwide. Our legal services cover French law: they are for French companies and for foreign groups with an entity in France.',
    },
    {
      q: 'What do SEO, AEO and GEO mean?',
      a: 'SEO: ranking well on Google. AEO: being the direct answer of answer engines. GEO: being cited by AIs like ChatGPT or Perplexity when a client asks them for a recommendation. We work on all three together.',
    },
    {
      q: 'Do we own what you deliver?',
      a: 'Yes. Website, code, content, domain name, data: everything belongs to you, with documentation so another team can take over if needed.',
    },
  ],
};
