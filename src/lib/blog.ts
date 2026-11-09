import type { Locale } from '@/i18n/config';
import llmsTxtGuide from './posts/llms-txt-guide';
import googleAiOverviews from './posts/google-ai-overviews-etre-cite';
import choisirAgenceSeo from './posts/choisir-agence-seo';
import refonteSansPerdreSeo from './posts/refonte-site-web-sans-perdre-seo';
import prixApplicationMobile from './posts/prix-application-mobile-2026';
import externaliserFormalites from './posts/externaliser-formalites-juridiques';

/**
 * Blog data layer — dependency-free (no MDX/CMS) so it builds anywhere.
 * Each post is structured content in both locales. Add a post = add an
 * object here; it appears on /blog and /en/blog, gets its own detail page,
 * BlogPosting JSON-LD, sitemap and llms.txt entries automatically.
 * Newer posts live one-per-file in src/lib/posts/ and are listed below.
 */

export interface PostSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  /** Verbatim sample (file, snippet) rendered as a monospace block after the list. */
  code?: string;
}

export interface PostContent {
  title: string;
  description: string;
  tags: string[];
  /**
   * Answer-first summary shown above the article ("En bref" / "In short").
   * 3–5 self-contained sentences: this is the block Google snippets and AI
   * engines quote, so each line must make sense on its own.
   */
  takeaways?: string[];
  intro: string[];
  sections: PostSection[];
  conclusion: string[];
  /** Optional Q&A at the end of the article; emits FAQPage JSON-LD. */
  faqs?: { q: string; a: string }[];
}

export interface PostDef {
  slug: string;
  date: string;
  updated?: string;
  author: string;
  relatedService?: string;
  readingMinutes: number;
  content: Record<Locale, PostContent>;
}

const inlinePosts: PostDef[] = [
  {
    slug: 'prix-site-web-2026',
    date: '2026-06-15',
    author: 'Covartex',
    relatedService: 'creation-site-web',
    readingMinutes: 6,
    content: {
      fr: {
        title: 'Combien coûte un site web en 2026 ? Les vrais prix',
        description:
          'Site vitrine, e-commerce, refonte : les fourchettes de prix réelles en 2026, ce qui fait varier le devis et les erreurs qui coûtent cher.',
        tags: ['Site web', 'Budget'],
        takeaways: [
          'Un site vitrine professionnel de 5 à 10 pages coûte en général entre 1 500 et 4 000 € en 2026.',
          'Un site e-commerce se situe entre 4 000 et 15 000 € selon le catalogue et les intégrations.',
          'Comptez 30 à 150 € par mois pour l’hébergement, la sécurité et la maintenance.',
          'Le prix dépend surtout des contenus, des fonctionnalités et des intégrations, pas du nombre de pages.',
          'Deux devis ne se comparent qu’à périmètre égal : demandez ce qui est inclus, ligne par ligne.',
        ],
        intro: [
          'La question arrive dans presque chaque premier appel : « combien ça coûte ? ». Voici les fourchettes que nous constatons en 2026, ce qui les fait bouger, et comment éviter de payer deux fois.',
        ],
        sections: [
          {
            heading: 'Les fourchettes de prix en 2026',
            paragraphs: ['Pour un travail professionnel, sur mesure, livré avec les bases SEO :'],
            list: [
              'Landing page ou site une page : 800 à 2 000 €.',
              'Site vitrine 5 à 10 pages : 1 500 à 4 000 €.',
              'Site riche en contenus, multilingue ou avec espace client : 4 000 à 10 000 €.',
              'Site e-commerce : 4 000 à 15 000 € selon le catalogue et les intégrations.',
              'Hébergement, sécurité et maintenance : 30 à 150 € par mois.',
            ],
          },
          {
            heading: 'Ce qui fait vraiment varier le prix',
            paragraphs: [
              'Ce n’est pas le nombre de pages. Ce sont les contenus (qui écrit les textes ? qui fournit les photos ?), les fonctionnalités (prise de rendez-vous, paiement, espace client), les intégrations (CRM, logiciel métier) et le niveau de design attendu.',
              'Deux devis ne se comparent qu’à périmètre égal : demandez ce qui est inclus, ligne par ligne.',
            ],
          },
          {
            heading: 'Les erreurs qui coûtent cher',
            list: [
              'Choisir le moins cher sans regarder qui possède le site à la fin.',
              'Oublier les contenus : un beau site avec des textes « à venir » ne convertit pas.',
              'Payer pour des fonctionnalités que personne n’utilisera la première année.',
              'Négliger le mobile, alors que la majorité de vos visiteurs y sont.',
            ],
          },
          {
            heading: 'Comment bien cadrer son budget',
            paragraphs: [
              'Listez d’abord ce que le site doit obtenir : des appels, des devis, des ventes. Puis les 5 pages indispensables pour y arriver. Le reste peut venir dans un second temps, une fois que le site rapporte.',
            ],
          },
        ],
        conclusion: [
          'Un site bien cadré à 3 000 € qui apporte des clients vaut plus qu’un site à 800 € que personne ne trouve. Si vous hésitez, décrivez-nous votre activité : le devis est gratuit et détaillé.',
        ],
      },
      en: {
        title: 'How Much Does a Website Cost in 2026? Real Prices',
        description:
          'Business website, online store, redesign: the real price ranges in 2026, what moves the quote and the mistakes that cost you twice.',
        tags: ['Website', 'Budget'],
        takeaways: [
          'A professional 5- to 10-page business website usually costs between €1,500 and €4,000 in 2026.',
          'An online store runs between €4,000 and €15,000 depending on the catalogue and integrations.',
          'Budget €30 to €150 per month for hosting, security and maintenance.',
          'Price is driven by content, features and integrations, not by the number of pages.',
          'Two quotes only compare at equal scope: ask what is included, line by line.',
        ],
        intro: [
          'The question comes up in almost every first call: “how much does it cost?”. Here are the ranges we see in 2026, what moves them, and how to avoid paying twice.',
        ],
        sections: [
          {
            heading: 'Price ranges in 2026',
            paragraphs: ['For professional, custom work delivered with SEO foundations:'],
            list: [
              'Landing page or one-page site: €800 to €2,000.',
              'Business website, 5 to 10 pages: €1,500 to €4,000.',
              'Content-rich, multilingual or client-area site: €4,000 to €10,000.',
              'Online store: €4,000 to €15,000 depending on catalogue and integrations.',
              'Hosting, security and maintenance: €30 to €150 per month.',
            ],
          },
          {
            heading: 'What really moves the price',
            paragraphs: [
              'It is not the number of pages. It is the content (who writes the copy? who supplies the photos?), the features (booking, payment, client area), the integrations (CRM, business software) and the expected level of design.',
              'Two quotes only compare at equal scope: ask what is included, line by line.',
            ],
          },
          {
            heading: 'The mistakes that cost you',
            list: [
              'Picking the cheapest without checking who owns the site at the end.',
              'Forgetting the content: a beautiful site with “coming soon” text does not convert.',
              'Paying for features nobody will use in the first year.',
              'Neglecting mobile, where most of your visitors are.',
            ],
          },
          {
            heading: 'How to scope your budget',
            paragraphs: [
              'First list what the site must achieve: calls, quotes, sales. Then the 5 pages needed to get there. The rest can come later, once the site is paying for itself.',
            ],
          },
        ],
        conclusion: [
          'A well-scoped €3,000 site that brings clients is worth more than an €800 site nobody finds. If you are unsure, tell us about your business: the quote is free and itemised.',
        ],
      },
    },
  },
  {
    slug: 'seo-aeo-geo-etre-cite-par-chatgpt',
    date: '2026-07-20',
    author: 'Covartex',
    relatedService: 'visibilite-ia-aeo-geo',
    readingMinutes: 7,
    content: {
      fr: {
        title: 'SEO, AEO, GEO : comment être recommandé par Google et ChatGPT',
        description:
          'Vos clients demandent désormais à ChatGPT, Perplexity ou Google AI qui choisir. Voici ce qui change, et les 6 actions concrètes pour apparaître dans leurs réponses.',
        tags: ['SEO', 'IA', 'Visibilité'],
        takeaways: [
          'Le SEO vise les résultats classiques de Google, l’AEO les réponses directes et aperçus IA, le GEO les citations dans ChatGPT, Perplexity ou Gemini.',
          'Les IA recommandent les entreprises dont les informations sont cohérentes partout, qui répondent clairement à des questions précises et dont d’autres sources parlent.',
          'Les actions qui comptent : pages de réponses, données structurées, informations harmonisées, avis récents et mentions sur des sites tiers.',
          'Le SEO reste indispensable : les IA s’appuient largement sur les mêmes signaux que Google.',
        ],
        intro: [
          'Pendant vingt ans, être visible signifiait être en première page Google. Aujourd’hui, une part croissante de vos clients pose directement la question à une IA : « quel plombier à Lyon ? », « quel cabinet pour créer ma société ? ». Si l’IA ne vous connaît pas, vous n’existez pas pour eux.',
        ],
        sections: [
          {
            heading: 'Trois mots, trois moteurs',
            list: [
              'SEO (Search Engine Optimization) : apparaître dans les résultats classiques de Google.',
              'AEO (Answer Engine Optimization) : être la réponse directe, dans les extraits enrichis, les assistants vocaux et les aperçus IA de Google.',
              'GEO (Generative Engine Optimization) : être cité comme source par les IA génératives (ChatGPT, Perplexity, Gemini) quand elles rédigent une réponse.',
            ],
          },
          {
            heading: 'Ce que les IA regardent pour vous recommander',
            paragraphs: [
              'Les IA ne classent pas des pages, elles cherchent des réponses fiables. Elles privilégient les entreprises dont les informations sont cohérentes partout (nom, adresse, services), qui répondent clairement à des questions précises, et dont d’autres sources parlent : avis, annuaires, presse, partenaires.',
            ],
          },
          {
            heading: 'Six actions concrètes',
            list: [
              'Écrivez une page « réponses » par question fréquente de vos clients, avec une réponse directe en premier paragraphe.',
              'Ajoutez des données structurées (Schema.org) : organisation, services, FAQ, avis.',
              'Harmonisez vos informations sur Google Business, les annuaires et les réseaux.',
              'Collectez des avis récents et répondez-y.',
              'Obtenez des mentions sur des sites que les IA reprennent : presse locale, associations professionnelles, partenaires.',
              'Mesurez : posez les questions de vos clients à plusieurs IA chaque mois et notez si vous apparaissez.',
            ],
          },
          {
            heading: 'Faut-il abandonner le SEO ?',
            paragraphs: [
              'Non. Les IA s’appuient largement sur les mêmes signaux que Google, et Google reste la première source de trafic. Le bon réflexe est de faire les deux ensemble : le même travail nourrit les deux.',
            ],
          },
        ],
        conclusion: [
          'Peu d’entreprises s’occupent aujourd’hui de leur visibilité dans les IA. Celles qui commencent maintenant prendront la place. Nous pouvons réaliser un diagnostic de votre présence dans les réponses des IA, gratuitement, avec votre devis.',
        ],
      },
      en: {
        title: 'SEO, AEO, GEO: How to Get Recommended by Google and ChatGPT',
        description:
          'Your clients now ask ChatGPT, Perplexity or Google AI who to choose. Here is what changes, and the 6 concrete actions to appear in their answers.',
        tags: ['SEO', 'AI', 'Visibility'],
        takeaways: [
          'SEO targets classic Google results, AEO targets direct answers and AI overviews, GEO targets citations in ChatGPT, Perplexity or Gemini.',
          'AI assistants recommend businesses whose information is consistent everywhere, that answer specific questions clearly, and that other sources talk about.',
          'What matters: answer pages, structured data, consistent business details, recent reviews and mentions on third-party sites.',
          'SEO is still essential: AI assistants rely heavily on the same signals as Google.',
        ],
        intro: [
          'For twenty years, being visible meant being on page one of Google. Today a growing share of your clients ask an AI directly: “which plumber in Lyon?”, “which firm to set up my company?”. If the AI does not know you, you do not exist for them.',
        ],
        sections: [
          {
            heading: 'Three words, three engines',
            list: [
              'SEO (Search Engine Optimization): appearing in classic Google results.',
              'AEO (Answer Engine Optimization): being the direct answer, in rich snippets, voice assistants and Google AI Overviews.',
              'GEO (Generative Engine Optimization): being cited as a source by generative AIs (ChatGPT, Perplexity, Gemini) when they write an answer.',
            ],
          },
          {
            heading: 'What AIs look at before recommending you',
            paragraphs: [
              'AIs do not rank pages, they look for reliable answers. They favour businesses whose information is consistent everywhere (name, address, services), that answer specific questions clearly, and that other sources talk about: reviews, directories, press, partners.',
            ],
          },
          {
            heading: 'Six concrete actions',
            list: [
              'Write one “answer” page per frequent client question, with a direct answer in the first paragraph.',
              'Add structured data (Schema.org): organisation, services, FAQ, reviews.',
              'Align your information across Google Business, directories and social networks.',
              'Collect recent reviews and reply to them.',
              'Earn mentions on sites AIs rely on: local press, professional associations, partners.',
              'Measure: ask several AIs your clients’ questions every month and note whether you appear.',
            ],
          },
          {
            heading: 'Should you drop SEO?',
            paragraphs: [
              'No. AIs largely rely on the same signals as Google, and Google remains the first source of traffic. The right move is to do both together: the same work feeds both.',
            ],
          },
        ],
        conclusion: [
          'Few businesses work on their AI visibility today. Those who start now will take the spot. We can run a diagnosis of your presence in AI answers, free of charge, with your quote.',
        ],
      },
    },
  },
  {
    slug: 'automatisation-ia-pme-par-ou-commencer',
    date: '2026-08-12',
    author: 'Covartex',
    relatedService: 'automatisation-processus',
    readingMinutes: 6,
    content: {
      fr: {
        title: 'IA et automatisation en PME : par où commencer (sans se ruiner)',
        description:
          'Les tâches à automatiser en premier, ce que l’IA fait vraiment bien aujourd’hui, et un plan en 4 étapes pour gagner des heures chaque semaine dès le premier mois.',
        tags: ['IA', 'Automatisation', 'PME'],
        takeaways: [
          'Les premières tâches à automatiser en PME : suivi des nouveaux contacts, devis et relances, rapports hebdomadaires, tri des e-mails et saisie entre outils.',
          'L’IA excelle à résumer, classer, extraire des informations et rédiger un premier jet ; un humain doit valider les décisions à enjeu.',
          'Les premières automatisations coûtent souvent 1 000 à 3 000 € et s’amortissent en quelques semaines.',
          'La bonne méthode : commencer par les deux tâches les plus rentables, mesurer, puis étendre.',
        ],
        intro: [
          'La plupart des PME n’ont pas besoin d’un « projet IA ». Elles ont besoin de récupérer les heures perdues chaque semaine à recopier, relancer, trier et compiler. Voici comment s’y prendre concrètement.',
        ],
        sections: [
          {
            heading: 'Les tâches à automatiser en premier',
            list: [
              'Les nouveaux contacts : formulaire → CRM → accusé de réception → rappel au commercial.',
              'Les devis et factures : génération, envoi, relances automatiques.',
              'Les rapports hebdomadaires : chiffres collectés et envoyés seuls.',
              'Le tri des e-mails entrants : classement et réponses aux questions courantes.',
              'La saisie entre outils : plus jamais de copier-coller entre deux logiciels.',
            ],
          },
          {
            heading: 'Ce que l’IA fait vraiment bien aujourd’hui',
            paragraphs: [
              'Répondre à des questions à partir de vos documents, résumer, classer, extraire des informations (montants, dates, noms) dans des factures ou des contrats, rédiger un premier brouillon. Elle fait moins bien : décider seule sur des cas ambigus. D’où l’importance de garder un humain qui valide quand l’enjeu est réel.',
            ],
          },
          {
            heading: 'Un plan en quatre étapes',
            list: [
              'Semaine 1 : lister les tâches répétitives et le temps qu’elles prennent.',
              'Semaine 2 : automatiser les deux tâches les plus rentables.',
              'Semaine 3-4 : mesurer, corriger, ajouter une automatisation.',
              'Mois 2 : ajouter un assistant IA là où le texte domine (support, tri, rédaction).',
            ],
          },
          {
            heading: 'Combien ça coûte ?',
            paragraphs: [
              'Les premières automatisations coûtent souvent entre 1 000 et 3 000 € et s’amortissent en quelques semaines. Un assistant IA connecté à vos documents démarre autour de 3 000 à 6 000 €. Les outils eux-mêmes coûtent quelques dizaines d’euros par mois.',
            ],
          },
        ],
        conclusion: [
          'Commencez petit, mesurez, puis étendez. Si vous voulez savoir combien d’heures vous pourriez récupérer, envoyez-nous la liste de vos tâches répétitives : nous vous répondons avec une estimation et un devis gratuit.',
        ],
      },
      en: {
        title: 'AI and Automation for Small Businesses: Where to Start (Without Overspending)',
        description:
          'The tasks to automate first, what AI does really well today, and a 4-step plan to save hours every week from the first month.',
        tags: ['AI', 'Automation', 'SMB'],
        takeaways: [
          'The first tasks a small business should automate: new-lead follow-up, quotes and reminders, weekly reports, inbox triage and data entry between tools.',
          'AI is good at summarising, classifying, extracting data and drafting; a human should approve decisions that carry real stakes.',
          'First automations often cost €1,000 to €3,000 and pay for themselves within weeks.',
          'The right method: start with the two most profitable tasks, measure, then expand.',
        ],
        intro: [
          'Most small businesses do not need an “AI project”. They need to get back the hours lost every week re-typing, chasing, sorting and compiling. Here is how to go about it concretely.',
        ],
        sections: [
          {
            heading: 'The tasks to automate first',
            list: [
              'New leads: form → CRM → confirmation → reminder to sales.',
              'Quotes and invoices: generation, sending, automatic follow-ups.',
              'Weekly reports: numbers collected and sent on their own.',
              'Inbound e-mail triage: sorting and answering routine questions.',
              'Data entry between tools: never copy-paste between two applications again.',
            ],
          },
          {
            heading: 'What AI does really well today',
            paragraphs: [
              'Answering questions from your documents, summarising, classifying, extracting information (amounts, dates, names) from invoices or contracts, drafting a first version. It does less well: deciding alone on ambiguous cases. Hence the importance of keeping a human who approves when the stakes are real.',
            ],
          },
          {
            heading: 'A four-step plan',
            list: [
              'Week 1: list repetitive tasks and the time they take.',
              'Week 2: automate the two most profitable tasks.',
              'Weeks 3-4: measure, fix, add one automation.',
              'Month 2: add an AI assistant where text dominates (support, triage, writing).',
            ],
          },
          {
            heading: 'How much does it cost?',
            paragraphs: [
              'The first automations often cost between €1,000 and €3,000 and pay for themselves within weeks. An AI assistant connected to your documents starts around €3,000 to €6,000. The tools themselves cost a few dozen euros a month.',
            ],
          },
        ],
        conclusion: [
          'Start small, measure, then expand. If you want to know how many hours you could get back, send us the list of your repetitive tasks: we reply with an estimate and a free quote.',
        ],
      },
    },
  },
];

export const posts: PostDef[] = [
  ...inlinePosts,
  llmsTxtGuide,
  googleAiOverviews,
  choisirAgenceSeo,
  refonteSansPerdreSeo,
  prixApplicationMobile,
  externaliserFormalites,
];

export interface LocalizedPost extends PostContent {
  slug: string;
  date: string;
  updated?: string;
  author: string;
  relatedService?: string;
  readingMinutes: number;
}

export function getPosts(locale: Locale): LocalizedPost[] {
  return posts
    .map((p) => ({
      slug: p.slug,
      date: p.date,
      updated: p.updated,
      author: p.author,
      relatedService: p.relatedService,
      readingMinutes: p.readingMinutes,
      ...p.content[locale],
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string, locale: Locale): LocalizedPost | undefined {
  return getPosts(locale).find((p) => p.slug === slug);
}

export function getPostSlugs(): string[] {
  return posts.map((p) => p.slug);
}
