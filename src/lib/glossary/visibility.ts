import type { TermDef } from '@/lib/glossary';

/**
 * Glossary group "visibility": search engines, local search and AI answers.
 * Each definition is a single self-contained sentence meant to be quoted.
 */
const terms: TermDef[] = [
  {
    slug: 'seo',
    group: 'visibility',
    service: 'referencement-google-seo',
    related: ['seo-local', 'donnees-structurees', 'core-web-vitals', 'geo'],
    content: {
      fr: {
        term: 'SEO',
        expansion: 'Search Engine Optimization',
        definition:
          'Le SEO (Search Engine Optimization), ou référencement naturel, est l’ensemble des actions qui améliorent la visibilité d’un site dans les résultats non payants des moteurs de recherche comme Google ou Bing.',
        body: [
          'Un moteur de recherche travaille en trois temps : il explore les pages, les enregistre dans son index, puis les classe pour chaque recherche selon leur pertinence et leur qualité. Le SEO agit sur ces trois étapes à travers trois leviers : la technique (un site rapide, accessible et lisible par les robots), le contenu (des pages qui répondent précisément aux questions des clients) et la notoriété (les liens et les mentions venant d’autres sites).',
          'Pour une entreprise, le SEO attire des personnes qui cherchent déjà ce qu’elle propose, sans payer chaque clic. Les effets sont progressifs : il faut en général plusieurs mois pour obtenir des résultats solides, mais ils durent plus longtemps qu’une campagne publicitaire. Aucun prestataire sérieux ne garantit une position, car le classement dépend de Google et de la concurrence.',
          'Le SEO reste aussi la base de la visibilité dans les réponses générées par IA, qui s’appuient souvent sur des pages déjà bien indexées par les moteurs de recherche.',
        ],
        keyPoints: [
          'Trois leviers : technique, contenu, notoriété.',
          'Le SEO concerne les résultats non payants ; les annonces payantes relèvent du SEA.',
          'Le bon indicateur final : les demandes de clients, pas seulement les positions.',
          'Personne ne peut garantir une première position sur Google.',
        ],
        example:
          'Un cabinet d’architecture crée une page détaillée pour chacun de ses services, corrige la lenteur de son site et obtient des liens depuis des annuaires professionnels. Au fil des mois, ses pages gagnent en visibilité sur des recherches comme « architecte rénovation maison » et commencent à générer des demandes de rendez-vous.',
      },
      en: {
        term: 'SEO',
        expansion: 'Search Engine Optimization',
        definition:
          'SEO (Search Engine Optimization) is the practice of improving a website’s visibility in the unpaid, or organic, results of search engines such as Google and Bing.',
        body: [
          'Search engines work in three steps: they crawl pages, store them in an index, then rank them for each query based on relevance and quality. SEO acts on all three through three levers: technical health (a fast, accessible site that crawlers can read), content (pages that answer customers’ questions precisely) and authority (links and mentions from other sites).',
          'For a business, SEO brings in people who are already looking for what it sells, without paying for each click. Results build up gradually, usually over several months, but they tend to last longer than an ad campaign. No serious provider guarantees a ranking: positions depend on Google and on the competition.',
          'SEO also underpins visibility in AI-generated answers, which often draw on pages that search engines have already indexed well.',
        ],
        keyPoints: [
          'Three levers: technical, content, authority.',
          'SEO covers organic results; paid search ads are a separate channel (SEA or PPC).',
          'The metric that matters in the end is customer enquiries, not rankings alone.',
          'Nobody can guarantee a number one position on Google.',
        ],
        example:
          'An architecture firm writes a detailed page for each of its services, fixes its slow page loads and earns links from professional directories. Over the following months, its pages become more visible for searches such as “home renovation architect” and start bringing in consultation requests.',
      },
    },
  },
  {
    slug: 'seo-local',
    group: 'visibility',
    service: 'referencement-google-seo',
    related: ['google-business-profile', 'seo', 'donnees-structurees'],
    content: {
      fr: {
        term: 'SEO local',
        definition:
          'Le SEO local est la partie du référencement qui aide une entreprise à apparaître dans les recherches liées à un lieu, notamment dans Google Maps et les résultats locaux de Google.',
        body: [
          'Quand quelqu’un cherche « plombier Lyon » ou « boulangerie près de moi », Google affiche souvent une carte avec quelques établissements, avant les résultats classiques. Selon Google, ce classement local repose surtout sur trois critères : la pertinence (l’établissement correspond-il à la recherche ?), la distance par rapport à la personne ou au lieu recherché, et la notoriété de l’établissement (avis, liens, présence en ligne).',
          'La distance ne se travaille pas ; le reste, si. Le SEO local combine une fiche Google Business Profile complète, des informations identiques partout (nom, adresse, téléphone), des avis clients réguliers et des pages du site dédiées à chaque ville ou zone desservie. Pour un commerce, un artisan ou un cabinet, c’est souvent le canal qui apporte les appels et les visites les plus directs.',
        ],
        keyPoints: [
          'Trois critères cités par Google : pertinence, distance, notoriété.',
          'La fiche Google Business Profile est le point de départ.',
          'Nom, adresse et téléphone doivent être identiques sur le site, la fiche et les annuaires.',
          'Les avis clients et les réponses de l’entreprise comptent.',
          'Une page par ville ou zone desservie, avec un contenu réellement propre à chacune.',
        ],
        example:
          'Un serrurier qui intervient dans trois villes complète sa fiche Google Business Profile, crée une page de son site pour chaque ville avec ses horaires et ses délais d’intervention, et propose à chaque client de laisser un avis après l’intervention. Il se donne ainsi de meilleures chances d’apparaître sur les recherches « serrurier + ville » dans sa zone.',
      },
      en: {
        term: 'Local SEO',
        definition:
          'Local SEO is the part of search engine optimization that helps a business appear in location-based searches, especially in Google Maps and the local results shown in Google Search.',
        body: [
          'When someone searches for “plumber Manchester” or “bakery near me”, Google often shows a map with a few businesses above the regular results. Google says local rankings depend mainly on three factors: relevance (does the business match the search?), distance from the searcher or the place named, and prominence (how well known the business is, based on reviews, links and its wider online presence).',
          'Distance is out of your control; the rest is not. Local SEO combines a complete Google Business Profile, consistent details everywhere (name, address, phone number), a steady flow of customer reviews and website pages for each town or area served. For shops, trades and practices, it is often the channel that brings in the most direct calls and visits.',
        ],
        keyPoints: [
          'Google’s three local factors: relevance, distance, prominence.',
          'A Google Business Profile is the starting point.',
          'Name, address and phone number should match across the website, the profile and directories.',
          'Customer reviews, and the business’s replies to them, matter.',
          'One page per town or area served, with content genuinely specific to each.',
        ],
        example:
          'A locksmith working in three towns completes its Google Business Profile, adds a page to its website for each town with opening hours and typical response times, and invites every customer to leave a review after each job. This gives it a better chance of appearing for “locksmith + town” searches in its area.',
      },
    },
  },
  {
    slug: 'aeo',
    group: 'visibility',
    service: 'visibilite-ia-aeo-geo',
    related: ['geo', 'ai-overviews', 'donnees-structurees', 'seo'],
    content: {
      fr: {
        term: 'AEO',
        expansion: 'Answer Engine Optimization',
        definition:
          'L’AEO (Answer Engine Optimization) est l’optimisation d’un contenu pour qu’il soit repris comme réponse directe par un moteur ou un assistant : extrait optimisé de Google, recherche vocale, assistant IA.',
        body: [
          'Une partie des recherches se termine sans clic, parce que la réponse s’affiche directement dans la page de résultats ou dans l’assistant. L’AEO cherche à ce que cette réponse vienne de votre page. Concrètement, on formule les intertitres comme de vraies questions, on y répond dès la première phrase de façon courte et autonome, puis on développe. Les FAQ, les listes, les tableaux et les données structurées facilitent l’extraction.',
          'L’AEO et le GEO se recoupent largement, et les deux termes sont souvent employés l’un pour l’autre. Une distinction utile : l’AEO vise à être la réponse directe (extrait, réponse vocale, réponse courte d’un assistant), tandis que le GEO vise à être cité ou recommandé dans une réponse rédigée par une IA générative. Dans les deux cas, la base reste un SEO solide : une page mal indexée a peu de chances d’être reprise.',
        ],
        keyPoints: [
          'Une question par intertitre, une réponse claire dès la première phrase.',
          'Des formats faciles à extraire : définitions, listes, étapes, tableaux, FAQ.',
          'Des données structurées pour aider les moteurs à comprendre la page.',
          'Un terme proche du GEO, dont les frontières varient selon les auteurs.',
        ],
        example:
          'Une agence immobilière ajoute à sa page sur les frais de notaire l’intertitre « Combien coûtent les frais de notaire dans l’ancien ? », suivi d’une réponse de deux phrases, puis du détail du calcul. Ce bloc court et autonome a plus de chances d’être repris dans un extrait de Google ou lu par un assistant vocal.',
      },
      en: {
        term: 'AEO',
        expansion: 'Answer Engine Optimization',
        definition:
          'AEO (Answer Engine Optimization) is the practice of structuring content so that search engines and assistants use it as the direct answer, in featured snippets, voice search or AI assistant replies.',
        body: [
          'Some searches end without a click, because the answer appears directly on the results page or in the assistant. AEO aims to make that answer come from your page. In practice, you phrase subheadings as real questions, answer each one in the first sentence in a short, self-contained way, then add detail. FAQs, lists, tables and structured data make the answer easier to extract.',
          'AEO and GEO overlap heavily, and many people use the two terms interchangeably. A useful distinction: AEO is about being the direct answer (a snippet, a spoken answer, a short assistant reply), while GEO is about being cited or recommended inside an answer written by a generative AI. Either way, solid SEO comes first: a poorly indexed page is unlikely to be picked up.',
        ],
        keyPoints: [
          'One question per subheading, one clear answer in the first sentence.',
          'Easy-to-extract formats: definitions, lists, steps, tables, FAQs.',
          'Structured data to help engines understand the page.',
          'Close to GEO; where one ends and the other begins varies from author to author.',
        ],
        example:
          'A real estate agency adds the subheading “How much are closing costs when buying a home?” to its buyer’s guide, followed by a two-sentence answer and then the detailed breakdown. That short, self-contained block is more likely to be quoted in a Google snippet or read out by a voice assistant.',
      },
    },
  },
  {
    slug: 'geo',
    group: 'visibility',
    service: 'visibilite-ia-aeo-geo',
    related: ['aeo', 'ai-overviews', 'llms-txt', 'llm'],
    content: {
      fr: {
        term: 'GEO',
        expansion: 'Generative Engine Optimization',
        definition:
          'Le GEO (Generative Engine Optimization) regroupe les actions qui augmentent les chances qu’une marque soit citée ou recommandée dans les réponses générées par des IA comme ChatGPT, Perplexity ou Google AI Overviews.',
        body: [
          'Les moteurs génératifs rédigent une réponse à partir de pages trouvées sur le web et de leurs données d’entraînement, et citent parfois leurs sources. Le GEO, terme issu d’un article de recherche publié en 2023, cherche à faire partie de ces sources. Il s’appuie sur des contenus clairs et factuels, une présentation cohérente de l’entreprise sur le web (site, annuaires, réseaux, avis), des mentions sur des sites tiers reconnus et une bonne indexation par les moteurs classiques, dont dépendent souvent les assistants pour leurs recherches.',
          'Pour une entreprise, l’enjeu est d’être nommée quand un prospect demande à une IA quel prestataire ou quel outil choisir. Les résultats se mesurent mal, car les réponses varient d’une session à l’autre : on suit donc un ensemble de questions types dans le temps.',
          'Le GEO et l’AEO se recoupent et servent souvent de synonymes : l’AEO vise plutôt la réponse directe, le GEO la citation ou la recommandation dans une réponse générée.',
        ],
        keyPoints: [
          'Objectif : être cité comme source ou recommandé par son nom.',
          'Leviers : contenus factuels, cohérence de la marque, mentions par des tiers, SEO solide.',
          'Les réponses changent d’une fois à l’autre : on mesure des tendances, pas des positions.',
          'Aucun prestataire ne peut garantir une recommandation par une IA.',
        ],
        example:
          'Un éditeur de logiciel pour restaurants publie des comparatifs honnêtes, une FAQ détaillée et des fiches à jour dans les annuaires du secteur. Quand un utilisateur demande à un assistant IA quels outils permettent de gérer les stocks d’un restaurant, la marque a davantage de chances d’être citée.',
      },
      en: {
        term: 'GEO',
        expansion: 'Generative Engine Optimization',
        definition:
          'GEO (Generative Engine Optimization) is the work of increasing the chances that a brand is cited or recommended in answers generated by AI tools such as ChatGPT, Perplexity or Google AI Overviews.',
        body: [
          'Generative engines write an answer based on web pages they retrieve and on their training data, and they sometimes cite their sources. GEO, a term that comes from a 2023 research paper, aims to make your pages part of those sources. It relies on clear, factual content, a consistent description of the business across the web (website, directories, social profiles, reviews), mentions on reputable third-party sites and good indexing by traditional search engines, which assistants often rely on when they search the web.',
          'For a business, the goal is to be named when a prospect asks an AI which provider or tool to choose. Results are hard to measure because answers vary from one session to the next, so progress is tracked over time on a set of typical questions.',
          'GEO and AEO overlap and are often used as synonyms: AEO leans toward the direct answer, GEO toward citations and recommendations inside a generated answer.',
        ],
        keyPoints: [
          'Goal: be cited as a source or recommended by name.',
          'Levers: factual content, brand consistency, third-party mentions, solid SEO.',
          'Answers change from one run to the next, so you measure trends, not rankings.',
          'No provider can guarantee that an AI will recommend you.',
        ],
        example:
          'A company selling restaurant management software publishes honest comparison pages, a detailed FAQ and up-to-date listings on industry directories. When someone asks an AI assistant which tools can track restaurant inventory, the brand stands a better chance of being mentioned.',
      },
    },
  },
  {
    slug: 'llms-txt',
    group: 'visibility',
    service: 'visibilite-ia-aeo-geo',
    related: ['geo', 'llm', 'aeo'],
    content: {
      fr: {
        term: 'llms.txt',
        definition:
          'Le fichier llms.txt est une convention proposée en 2024 : un fichier texte placé à la racine d’un site, qui résume le site et liste ses pages clés à l’intention des modèles de langage.',
        body: [
          'Le fichier se place à l’adresse votresite.com/llms.txt. Il est écrit en Markdown, un format simple lisible par un humain comme par une machine : un titre avec le nom du site, un court résumé, puis des sections qui listent les pages importantes avec une phrase de description pour chacune. Certains sites publient aussi une version longue, souvent nommée llms-full.txt, qui regroupe le texte complet de leurs pages.',
          'L’objectif est d’offrir aux modèles de langage et aux agents IA une porte d’entrée propre, sans menus, publicités ni scripts. Ce n’est pas un fichier d’autorisation : contrairement au robots.txt, il n’autorise et ne bloque rien.',
          'La proposition, publiée en 2024 par Jeremy Howard (Answer.AI) sur llmstxt.org, n’est pas un standard officiel. Sa prise en compte varie selon les moteurs et les outils IA, et sa présence ne garantit aucune citation. C’est un ajout peu coûteux, à faire après les fondamentaux : contenus clairs, données structurées, bonne indexation.',
        ],
        keyPoints: [
          'Emplacement : /llms.txt, à la racine du site.',
          'Format : Markdown, avec un titre, un résumé et des listes de liens commentés.',
          'Proposition de convention (llmstxt.org, 2024), pas encore un standard.',
          'Ne remplace ni le robots.txt, ni le sitemap, ni le travail de SEO.',
        ],
        example:
          'Une agence de traduction publie un fichier llms.txt qui présente en deux phrases ses langues et ses spécialités, puis liste ses pages de services, de tarifs et sa FAQ. Un assistant IA qui lit ce fichier trouve directement les bonnes pages, sans avoir à parcourir tout le site.',
      },
      en: {
        term: 'llms.txt',
        definition:
          'llms.txt is a convention proposed in 2024: a plain text file placed at the root of a website that summarizes the site and lists its key pages for large language models.',
        body: [
          'The file lives at yoursite.com/llms.txt. It is written in Markdown, a simple format that both people and machines can read: a heading with the site’s name, a short summary, then sections listing the important pages, each with a one-line description. Some sites also publish a longer version, often called llms-full.txt, that contains the full text of their pages.',
          'The idea is to give language models and AI agents a clean entry point, free of menus, ads and scripts. It is not a permissions file: unlike robots.txt, it neither allows nor blocks anything.',
          'The proposal, published in 2024 by Jeremy Howard of Answer.AI on llmstxt.org, is not an official standard. Support varies between AI engines and tools, and having the file does not guarantee any citation. It is a low-cost addition, best made after the fundamentals: clear content, structured data and good indexing.',
        ],
        keyPoints: [
          'Location: the root of the site, at /llms.txt.',
          'Format: Markdown, with a title, a summary and annotated lists of links.',
          'A proposed convention (llmstxt.org, 2024), not yet a standard.',
          'It does not replace robots.txt, the XML sitemap or SEO work.',
        ],
        example:
          'A translation agency publishes an llms.txt file that describes its languages and specialties in two sentences, then lists its service pages, pricing page and FAQ, each with a short description. An AI assistant that reads the file can go straight to the right pages instead of crawling the whole site.',
      },
    },
  },
  {
    slug: 'ai-overviews',
    group: 'visibility',
    service: 'visibilite-ia-aeo-geo',
    related: ['aeo', 'geo', 'seo', 'llm'],
    content: {
      fr: {
        term: 'AI Overviews',
        definition:
          'Les AI Overviews (Aperçus IA) sont des résumés générés par l’IA que Google affiche, généralement en haut des résultats, pour certaines recherches, avec des liens vers les pages utilisées comme sources.',
        body: [
          'Pour certaines requêtes, surtout les questions, Google rédige une réponse de synthèse à l’aide d’une version de son modèle Gemini, à partir de pages de son index, et affiche des liens vers plusieurs de ces pages. Lancée aux États-Unis en mai 2024, la fonction a ensuite été étendue à de nombreux pays et langues. Google propose aussi un Mode IA (AI Mode), plus conversationnel, qui repose sur le même principe.',
          'Pour une entreprise, l’effet est double. L’internaute obtient parfois sa réponse sans cliquer, ce qui peut réduire le trafic sur les recherches purement informatives. Mais être cité comme source apporte de la visibilité et de la crédibilité au moment où la personne se renseigne.',
          'Google indique qu’aucune balise ni optimisation spéciale n’est nécessaire : pour être cité, une page doit être indexée et pouvoir s’afficher avec un extrait dans les résultats classiques. Les bonnes pratiques SEO restent donc la base.',
        ],
        keyPoints: [
          'Un résumé généré avec Gemini, affiché pour certaines recherches seulement.',
          'Les sources citées sont des pages indexées, éligibles à un extrait dans les résultats classiques.',
          'Pas de balise dédiée : les bonnes pratiques SEO s’appliquent.',
          'Les directives nosnippet et max-snippet limitent la reprise d’une page, au prix de sa visibilité.',
        ],
        example:
          'Une internaute cherche « comment purger un radiateur ». Google affiche un aperçu IA en quelques étapes, avec des liens vers plusieurs pages. Le site d’un chauffagiste qui décrit clairement ces étapes, avec une liste numérotée, peut figurer parmi les sources citées et se faire connaître, même sans clic immédiat.',
      },
      en: {
        term: 'AI Overviews',
        definition:
          'AI Overviews are AI-generated summaries that Google shows for some searches, usually at the top of the results page, with links to the web pages used as sources.',
        body: [
          'For some queries, especially questions, Google writes a summary answer using a customized version of its Gemini model, based on pages in its index, and shows links to several of those pages. Launched in the United States in May 2024, the feature has since been extended to many countries and languages. Google also offers AI Mode, a more conversational experience built on the same principle.',
          'For a business, the effect cuts both ways. Searchers sometimes get their answer without clicking, which can reduce traffic on purely informational searches. But being cited as a source brings visibility and credibility at the moment people are researching a topic.',
          'Google states that no special markup or optimization is required: to be shown as a supporting link, a page must be indexed and eligible to appear with a snippet in regular search results. Sound SEO practice remains the foundation.',
        ],
        keyPoints: [
          'A summary generated with Gemini, shown for some searches only.',
          'Cited sources are indexed pages that are eligible for a snippet in regular results.',
          'No dedicated tag: standard SEO best practices apply.',
          'The nosnippet and max-snippet directives can limit how a page is used, at the cost of visibility.',
        ],
        example:
          'Someone searches “how to bleed a radiator”. Google shows an AI Overview with a few steps and links to several pages. A heating engineer’s website that explains those steps clearly, with subheadings and a numbered list, can appear among the cited sources and gain recognition, even without an immediate click.',
      },
    },
  },
  {
    slug: 'donnees-structurees',
    group: 'visibility',
    service: 'referencement-google-seo',
    related: ['seo', 'aeo', 'seo-local'],
    content: {
      fr: {
        term: 'Données structurées',
        definition:
          'Les données structurées sont des informations ajoutées au code d’une page, selon le vocabulaire Schema.org et généralement au format JSON-LD, qui décrivent son contenu aux moteurs de recherche de façon explicite.',
        body: [
          'Un humain comprend d’un coup d’œil qu’une page présente un restaurant, son adresse et ses horaires. Un robot doit le deviner. Les données structurées lèvent l’ambiguïté en indiquant, dans un format standard : « ceci est une entreprise locale, voici son adresse, son téléphone et ses horaires ». Le vocabulaire commun s’appelle Schema.org, lancé en 2011 par les principaux moteurs de recherche. Google recommande le format JSON-LD, un petit bloc de code invisible pour le visiteur.',
          'Pour une entreprise, l’intérêt est double. Certains types de données structurées rendent une page éligible aux résultats enrichis : étoiles d’avis, prix, fil d’Ariane, informations d’événement. Elles aident aussi les moteurs à relier les informations à la bonne entité (une entreprise, un produit, une personne), ce qui peut servir à la recherche classique comme aux fonctions d’IA. Elles ne garantissent toutefois ni un meilleur classement ni l’affichage d’un résultat enrichi.',
        ],
        keyPoints: [
          'Vocabulaire : Schema.org. Format recommandé par Google : JSON-LD.',
          'Types courants : Organization, LocalBusiness, Product, Article, BreadcrumbList.',
          'Une page devient éligible aux résultats enrichis, sans garantie d’affichage.',
          'Le balisage doit correspondre au contenu visible ; il se vérifie avec le test des résultats enrichis de Google.',
        ],
        example:
          'Une boutique de thé en ligne ajoute à chaque fiche produit un bloc JSON-LD de type Product avec le nom, le prix, la disponibilité et la note moyenne des avis. Google peut alors afficher le prix et les étoiles directement dans les résultats, ce qui rend la fiche plus visible avant même le clic.',
      },
      en: {
        term: 'Structured data',
        definition:
          'Structured data is information added to a page’s code, using the Schema.org vocabulary and usually the JSON-LD format, that describes the page’s content explicitly to search engines.',
        body: [
          'A person can tell at a glance that a page is about a restaurant, with its address and opening hours. A crawler has to infer it. Structured data removes the guesswork by stating, in a standard format: “this is a local business, and here are its address, phone number and opening hours.” The shared vocabulary is Schema.org, launched in 2011 by the major search engines. Google recommends JSON-LD, a small block of code that visitors never see.',
          'For a business, the benefit is twofold. Some types of structured data make a page eligible for rich results, such as review stars, prices, breadcrumbs or event details. Structured data also helps engines connect information to the right entity (a company, a product, a person), which can help both classic search and AI features. It does not, however, guarantee better rankings or rich results.',
        ],
        keyPoints: [
          'Vocabulary: Schema.org. Format recommended by Google: JSON-LD.',
          'Common types: Organization, LocalBusiness, Product, Article, BreadcrumbList.',
          'Makes a page eligible for rich results, with no guarantee that they will show.',
          'The markup must match the visible content; check it with Google’s Rich Results Test.',
        ],
        example:
          'An online tea shop adds a Product JSON-LD block to each product page with the name, price, availability and average review rating. Google can then show the price and stars directly in search results, which makes the listing stand out before anyone clicks.',
      },
    },
  },
  {
    slug: 'core-web-vitals',
    group: 'visibility',
    service: 'creation-site-web',
    related: ['seo', 'pwa', 'donnees-structurees'],
    content: {
      fr: {
        term: 'Core Web Vitals',
        definition:
          'Les Core Web Vitals sont trois indicateurs définis par Google pour mesurer l’expérience des visiteurs sur une page : vitesse d’affichage (LCP), réactivité (INP) et stabilité visuelle (CLS).',
        body: [
          'Le LCP (Largest Contentful Paint) mesure le temps d’affichage du plus grand élément visible, souvent une image ou un titre : il est jugé bon jusqu’à 2,5 secondes. L’INP (Interaction to Next Paint) mesure le délai entre une action (clic, toucher, saisie) et la réaction visible de la page : bon jusqu’à 200 millisecondes. Il a remplacé le FID (First Input Delay) en mars 2024. Le CLS (Cumulative Layout Shift) mesure les décalages inattendus de la mise en page : bon jusqu’à 0,1.',
          'Google évalue ces seuils sur des données de vrais visiteurs de Chrome (rapport CrUX), au 75e percentile, sur mobile et sur ordinateur. On les consulte dans PageSpeed Insights ou dans la Search Console, sous le nom « Signaux Web essentiels ».',
          'Ils font partie des signaux d’expérience de page utilisés par Google, mais la pertinence du contenu pèse bien davantage. Leur intérêt est surtout commercial : une page lente, ou qui bouge au moment du clic, fait perdre des visiteurs et des demandes.',
        ],
        keyPoints: [
          'LCP ≤ 2,5 s : affichage du contenu principal.',
          'INP ≤ 200 ms : réactivité aux interactions (remplace le FID depuis mars 2024).',
          'CLS ≤ 0,1 : stabilité de la mise en page.',
          'Un signal de classement secondaire, mais un effet direct sur les conversions.',
        ],
        example:
          'Sur la page d’accueil d’un hôtel, une grande photo non compressée retarde l’affichage et un bandeau inséré en haut de page décale le bouton de réservation. En compressant l’image, en réservant la place du bandeau et en allégeant les scripts, l’équipe ramène le LCP et le CLS sous les seuils recommandés.',
      },
      en: {
        term: 'Core Web Vitals',
        definition:
          'Core Web Vitals are three metrics defined by Google to measure the experience visitors have on a page: loading speed (LCP), responsiveness (INP) and visual stability (CLS).',
        body: [
          'LCP (Largest Contentful Paint) measures how long the largest visible element, often an image or a heading, takes to appear: 2.5 seconds or less is rated good. INP (Interaction to Next Paint) measures the delay between an action (a click, a tap, a key press) and the page’s visible response: 200 milliseconds or less is good. INP replaced FID (First Input Delay) in March 2024. CLS (Cumulative Layout Shift) measures unexpected layout movement: 0.1 or less is good.',
          'Google assesses these thresholds on data from real Chrome users (the CrUX report), at the 75th percentile, separately for mobile and desktop. You can check them in Search Console or in PageSpeed Insights.',
          'Core Web Vitals are part of the page experience signals Google takes into account, but content relevance carries far more weight. Their real value is commercial: a page that loads slowly, or shifts just as someone taps a button, loses visitors and enquiries.',
        ],
        keyPoints: [
          'LCP ≤ 2.5 s: loading of the main content.',
          'INP ≤ 200 ms: responsiveness to interactions (replaced FID in March 2024).',
          'CLS ≤ 0.1: layout stability.',
          'A secondary ranking signal, but a direct effect on conversions.',
        ],
        example:
          'On a hotel’s home page, a large uncompressed photo delays loading, and a banner inserted at the top pushes the booking button down while the page loads. By compressing the image, reserving space for the banner and trimming scripts, the team brings LCP and CLS back under the recommended thresholds.',
      },
    },
  },
  {
    slug: 'google-business-profile',
    group: 'visibility',
    service: 'referencement-google-seo',
    related: ['seo-local', 'seo', 'donnees-structurees'],
    content: {
      fr: {
        term: 'Fiche Google Business Profile',
        definition:
          'La fiche Google Business Profile, anciennement Google My Business, est un profil d’entreprise gratuit affiché dans Google Maps et la recherche Google, avec adresse, horaires, téléphone, photos et avis clients.',
        body: [
          'La fiche se crée et se gère gratuitement depuis un compte Google, après une vérification qui prouve que l’entreprise existe bien à l’adresse ou dans la zone indiquée (vidéo, téléphone, e-mail ou courrier, selon les cas). Elle s’adresse aux entreprises qui reçoivent leurs clients sur place comme à celles qui se déplacent chez eux, en indiquant alors une zone desservie plutôt qu’une adresse publique. Les activités exclusivement en ligne n’y sont en principe pas éligibles.',
          'C’est souvent le premier contact entre un client local et l’entreprise : beaucoup de personnes appellent, demandent un itinéraire ou lisent les avis directement depuis la fiche, sans passer par le site. Une fiche complète, avec la bonne catégorie principale, des photos réelles, des horaires à jour et des réponses aux avis, est la base du SEO local.',
        ],
        keyPoints: [
          'Gratuite, mais soumise à une vérification de l’entreprise.',
          'Anciennement Google My Business, renommée en 2021.',
          'Le choix de la catégorie principale et l’exactitude des informations sont essentiels.',
          'Répondre aux avis, positifs comme négatifs, montre une entreprise active.',
          'Réservée aux entreprises en contact direct avec leurs clients, sur place ou à domicile.',
        ],
        example:
          'Un fleuriste qui ouvre une boutique crée sa fiche, choisit la catégorie « Fleuriste », ajoute ses horaires, des photos du magasin et un lien vers sa boutique en ligne, puis invite ses clients à laisser un avis. Les personnes qui cherchent un fleuriste dans le quartier peuvent alors le trouver, l’appeler ou obtenir l’itinéraire depuis Google Maps.',
      },
      en: {
        term: 'Google Business Profile',
        definition:
          'Google Business Profile, formerly Google My Business, is a free business listing shown in Google Maps and Google Search, with the company’s address, opening hours, phone number, photos and customer reviews.',
        body: [
          'The profile is created and managed for free from a Google account, after a verification step that proves the business really operates at the address or in the area stated (by video, phone, email or mail, depending on the case). It suits businesses that welcome customers on site as well as those that travel to their customers, which list a service area instead of a public address. Online-only businesses are generally not eligible.',
          'It is often the first point of contact between a local customer and the business: many people call, ask for directions or read reviews straight from the profile, without visiting the website. A complete profile, with the right primary category, real photos, up-to-date hours and replies to reviews, is the foundation of local SEO.',
        ],
        keyPoints: [
          'Free, but subject to business verification.',
          'Formerly Google My Business, renamed in 2021.',
          'Choosing the right primary category and keeping details accurate are essential.',
          'Replying to reviews, positive and negative, shows an active business.',
          'Reserved for businesses with in-person contact with customers, on site or at the customer’s location.',
        ],
        example:
          'A florist opening a new shop creates a profile, picks the “Florist” category, adds opening hours, photos of the shop and a link to its online store, then invites customers to leave a review. People searching for a florist in the neighborhood can now find the shop, call it or get directions from Google Maps.',
      },
    },
  },
  {
    slug: 'e-e-a-t',
    group: 'visibility',
    service: 'referencement-google-seo',
    related: ['seo', 'geo', 'ai-overviews'],
    content: {
      fr: {
        term: 'E-E-A-T',
        expansion: 'Experience, Expertise, Authoritativeness, Trustworthiness',
        definition:
          'L’E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) est la grille utilisée par les évaluateurs de Google pour juger si un contenu provient d’une source expérimentée, compétente, reconnue et digne de confiance.',
        body: [
          'Le concept vient des Search Quality Rater Guidelines, les consignes que Google rédige pour les évaluateurs humains chargés de noter la qualité de ses résultats. À l’origine E-A-T, il a reçu un « E » supplémentaire pour Experience en décembre 2022 : avoir réellement utilisé un produit ou vécu une situation compte aussi. Selon Google, la confiance (Trust) est l’élément le plus important des quatre.',
          'L’E-E-A-T n’est pas un facteur de classement direct, et il n’existe pas de score E-E-A-T. Les notes des évaluateurs servent à tester et à améliorer les algorithmes de Google, qui cherchent à valoriser les contenus présentant ces qualités. L’exigence est plus forte pour les sujets dits YMYL (Your Money or Your Life) : santé, finances, droit, sécurité.',
          'Pour une entreprise, cela se traduit par des signaux concrets : auteurs identifiés et qualifiés, page « À propos » claire, coordonnées et mentions légales complètes, avis clients, réalisations vérifiables, sources citées.',
        ],
        keyPoints: [
          'Issu des consignes des évaluateurs de qualité de Google.',
          'Le « E » d’Experience a été ajouté en décembre 2022.',
          'Pas un facteur de classement direct, mais un résumé de ce que Google cherche à valoriser.',
          'La confiance est l’élément le plus important.',
          'Une exigence renforcée sur la santé, l’argent, le droit et la sécurité (YMYL).',
        ],
        example:
          'Un cabinet comptable publie des articles sur la fiscalité signés par un expert-comptable nommé, avec sa fonction, un lien vers sa page de présentation, la date de mise à jour et les textes de loi cités. Le lecteur, comme Google, voit qui parle et sur quelle base.',
      },
      en: {
        term: 'E-E-A-T',
        expansion: 'Experience, Expertise, Authoritativeness, Trustworthiness',
        definition:
          'E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) is the framework Google’s quality raters use to judge whether content comes from a source that is experienced, knowledgeable, recognized and trustworthy.',
        body: [
          'The concept comes from the Search Quality Rater Guidelines, the document Google writes for the human evaluators who assess the quality of its results. Originally E-A-T, it gained an extra “E” for Experience in December 2022: having actually used a product or lived through a situation counts too. Google describes trust as the most important of the four.',
          'E-E-A-T is not a direct ranking factor, and there is no E-E-A-T score. Raters’ assessments are used to test and improve Google’s algorithms, which aim to reward content that shows these qualities. The bar is higher for so-called YMYL topics (Your Money or Your Life), such as health, finance, law and safety.',
          'For a business, this translates into concrete signals: named authors with relevant credentials, a clear About page, full contact and legal details, customer reviews, verifiable past work and cited sources.',
        ],
        keyPoints: [
          'Comes from Google’s Search Quality Rater Guidelines.',
          'The “E” for Experience was added in December 2022.',
          'Not a direct ranking factor, but a good summary of what Google’s systems try to reward.',
          'Trust is the most important element.',
          'Higher standards for health, money, legal and safety topics (YMYL).',
        ],
        example:
          'An accounting firm publishes tax articles signed by a named, qualified accountant, with their role, a link to their profile page, the date of the last update and references to the relevant legislation. Readers, and Google, can see who is speaking and on what basis.',
      },
    },
  },
];

export default terms;
