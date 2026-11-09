import type { PostDef } from '@/lib/blog';

const post: PostDef = {
  slug: 'google-ai-overviews-etre-cite',
  date: '2026-10-22',
  author: 'Covartex',
  relatedService: 'referencement-google-seo',
  readingMinutes: 6,
  content: {
    fr: {
      title: 'AI Overviews et AI Mode de Google : comment y être cité',
      description:
        'AI Overviews et AI Mode de Google : comment Google choisit les sources citées et les actions concrètes pour que vos pages y apparaissent, sans recette miracle.',
      tags: ['SEO', 'Google', 'IA'],
      takeaways: [
        'Les AI Overviews (Aperçus IA) sont des résumés rédigés par l’IA de Google en haut de certains résultats, et l’AI Mode est un mode de recherche conversationnel ; les deux affichent des liens vers les pages qui leur servent de sources.',
        'Google choisit les sources des AI Overviews parmi les pages déjà indexées et éligibles à un extrait dans Google Search : il n’existe ni inscription, ni balise spéciale pour y apparaître.',
        'Les pages citées dans les AI Overviews sont celles qui répondent clairement et rapidement à la question, avec des informations précises, à jour et vérifiables.',
        'Les recherches informatives génèrent moins de clics quand un aperçu IA répond directement, mais être cité donne de la visibilité à votre marque au moment précis où la question est posée.',
        'Search Console compte les apparitions dans les AI Overviews et l’AI Mode avec le reste du trafic de recherche Web : il faut donc suivre l’évolution des impressions, des clics et des demandes sur vos pages clés.',
      ],
      intro: [
        'Sur de plus en plus de recherches, Google ne commence plus par dix liens bleus mais par une réponse rédigée par son IA, accompagnée de quelques sources. Pour une entreprise, la question n’est plus seulement « suis-je en première page ? » mais aussi « suis-je l’une des sources de cette réponse ? ». Voici comment fonctionnent les AI Overviews et l’AI Mode, et ce que vous pouvez faire concrètement pour y figurer.',
      ],
      sections: [
        {
          heading: 'Que sont les AI Overviews et l’AI Mode de Google ?',
          paragraphs: [
            'Les AI Overviews, appelés Aperçus IA en français, sont des résumés générés par une version de Gemini, le modèle d’IA de Google. Ils s’affichent au-dessus des résultats classiques sur certaines recherches, répondent en quelques lignes et proposent des liens vers les pages utilisées.',
            'L’AI Mode (Mode IA) va plus loin : c’est un mode de recherche conversationnel, où l’on pose une question complexe puis des questions de suivi. Pour répondre, Google lance plusieurs recherches en parallèle sur les sous-questions, une technique qu’il appelle « query fan-out », puis assemble une réponse avec ses sources.',
          ],
        },
        {
          heading: 'Pourquoi reçoit-on moins de clics sur les recherches informatives ?',
          paragraphs: [
            'Quand la réponse s’affiche en haut de la page, une partie des internautes n’a plus besoin de cliquer. Plusieurs analyses publiées depuis 2024 observent ainsi moins de clics vers les sites sur les questions du type « qu’est-ce que » ou « comment », surtout quand un aperçu IA apparaît.',
            'Les sources citées gagnent en revanche une visibilité nouvelle : leur nom apparaît au moment où la question est posée, et ceux qui cliquent cherchent souvent à aller plus loin. Google affirme que ces clics sont de meilleure qualité, ce qui reste difficile à vérifier de l’extérieur.',
            'Les aperçus IA se déclenchent surtout sur des questions informatives. Quand on cherche un prestataire près de chez soi, les résultats classiques et la carte Google gardent généralement une place plus importante.',
          ],
        },
        {
          heading: 'Comment Google choisit-il les sources citées ?',
          paragraphs: [
            'Google l’explique dans sa documentation pour les propriétaires de sites : pour apparaître comme lien dans un aperçu IA ou dans l’AI Mode, une page doit être indexée et éligible à un extrait dans les résultats classiques. Il n’y a pas de condition supplémentaire, ni de balisage spécial à ajouter.',
            'En pratique, les sources viennent donc de pages que Google connaît déjà et juge pertinentes pour la question, ou pour l’une des sous-questions lancées en parallèle. Bien se classer sur une requête proche aide, mais la page citée n’est pas toujours le premier résultat : c’est souvent celle dont un passage répond le plus nettement.',
          ],
        },
        {
          heading: 'Comment écrire une page qui a des chances d’être citée ?',
          paragraphs: [
            'L’objectif est simple : rendre chaque réponse facile à trouver, à comprendre et à reprendre.',
          ],
          list: [
            'Répondez d’abord : la première ou les deux premières phrases sous un titre donnent la réponse, le détail vient ensuite.',
            'Formulez les titres comme de vraies questions : « Combien coûte… ? », « Quelle différence entre… ? », « Faut-il… ? ».',
            'Définissez les termes : une phrase du type « X est… » est facile à extraire et à citer.',
            'Utilisez des listes et des tableaux pour les étapes, les critères et les comparaisons : prix, délais, avantages et limites de chaque option.',
            'Donnez des faits précis et sourcés : chiffres avec leur origine, fourchettes de prix, délais, conditions. Une affirmation vague n’apporte rien à une réponse.',
            'Couvrez les questions voisines sur la même page ou dans des pages liées, puisque l’AI Mode découpe une question en sous-questions.',
          ],
        },
        {
          heading: 'Quels signaux de confiance comptent pour Google ?',
          paragraphs: [
            'Affichez une date de publication et une date de mise à jour, et mettez réellement le contenu à jour quand les prix, les règles ou les outils changent. Changer la date sans changer le fond n’apporte rien.',
            'Les consignes que Google donne à ses évaluateurs résument la qualité recherchée par l’acronyme E-E-A-T : expérience, expertise, autorité et fiabilité. Concrètement : un auteur nommé avec sa fonction, des exemples tirés de votre pratique, des photos d’origine, des coordonnées complètes et une page « À propos » à jour.',
            'Ce qui fait la différence, c’est la preuve d’une expérience réelle : un artisan qui montre ses chantiers, un cabinet qui explique un cas qu’il traite chaque semaine. Un texte générique, écrit par un humain ou par une IA, a peu de chances de se démarquer.',
          ],
        },
        {
          heading: 'Données structurées et technique : qu’est-ce qui est indispensable ?',
          paragraphs: [
            'Les données structurées (Schema.org) ne sont pas obligatoires pour être cité, mais elles aident Google à comprendre qui vous êtes et de quoi parle la page : Organization ou LocalBusiness, Article avec auteur et dates, Product. Elles doivent correspondre au contenu visible.',
            'Le balisage FAQ n’affiche plus d’extrait enrichi pour la plupart des sites depuis 2023. Une vraie section de questions-réponses reste pourtant utile, car elle offre des réponses courtes et faciles à reprendre.',
            'Côté technique, les bases suffisent mais elles sont non négociables : pages indexables (ni noindex, ni blocage dans le robots.txt), contenu principal lisible par Googlebot, chargement rapide, version mobile complète et liens internes vers les pages importantes.',
          ],
        },
        {
          heading: 'Comment savoir si vous êtes cité dans les AI Overviews ?',
          paragraphs: [
            'Google comptabilise les apparitions dans les AI Overviews et l’AI Mode dans le rapport Performances de Search Console, avec le reste du trafic de recherche Web. Il est donc difficile d’isoler précisément ce qu’ils vous apportent.',
            'La méthode la plus fiable reste simple. Suivez les impressions, les clics et le taux de clic de vos pages clés, repérez les requêtes informatives où les impressions montent pendant que les clics baissent, et vérifiez à la main, chaque mois, une liste de questions importantes pour votre activité. De plus en plus d’outils de suivi de positions détectent aussi les aperçus IA.',
            'Mesurez enfin ce qui compte vraiment : les demandes de devis, les appels et les ventes qui viennent de la recherche, pas seulement les positions.',
          ],
        },
      ],
      conclusion: [
        'Il n’existe pas de recette secrète pour les AI Overviews : Google cite des pages qu’il indexe déjà et qui répondent nettement à la question. Le travail consiste à rendre vos meilleures réponses faciles à trouver, à lire et à vérifier, et à prouver votre expérience réelle.',
        'Si vous voulez savoir où en sont vos pages, nous pouvons auditer leur indexation, leur structure et leurs contenus, puis vous proposer un plan d’action priorisé. Le devis est gratuit.',
      ],
      faqs: [
        {
          q: 'Peut-on payer pour être cité dans les AI Overviews ?',
          a: 'Non, les sources citées ne s’achètent pas. Google peut afficher des annonces dans ou à côté de ces réponses, mais elles sont signalées comme telles et ne font pas partie des sources.',
        },
        {
          q: 'Faut-il une balise ou un fichier spécial pour être cité par l’IA de Google ?',
          a: 'Non. Google indique qu’aucune exigence supplémentaire n’existe : une page indexée et éligible à un extrait peut être citée. Les bonnes pratiques SEO classiques s’appliquent.',
        },
        {
          q: 'Peut-on empêcher Google d’utiliser son contenu dans les AI Overviews ?',
          a: 'Oui, avec les balises nosnippet, data-nosnippet ou max-snippet, qui limitent aussi l’affichage dans les résultats classiques. Bloquer Google-Extended ne suffit pas : ce jeton concerne Gemini et l’entraînement des modèles, pas Google Search.',
        },
        {
          q: 'Les AI Overviews font-ils baisser le trafic de tous les sites ?',
          a: 'Pas de façon uniforme. Les pages qui répondent à des questions générales sont les plus exposées ; les pages de service, les recherches locales et les recherches sur un nom de marque le sont généralement moins.',
        },
        {
          q: 'Combien de temps faut-il pour être cité après avoir amélioré une page ?',
          a: 'Google doit d’abord réexplorer et réindexer la page, ce qui prend de quelques jours à quelques semaines. Ensuite, rien n’est garanti : la sélection des sources varie selon la question et dans le temps.',
        },
      ],
    },
    en: {
      title: 'Google AI Overviews and AI Mode: How to Get Your Site Cited',
      description:
        'How Google picks the sources cited in AI Overviews and AI Mode, and the concrete steps that give your pages a real chance of being cited, without shortcuts.',
      tags: ['SEO', 'Google', 'AI'],
      takeaways: [
        'AI Overviews are AI-written summaries shown at the top of some Google results, and AI Mode is a conversational search mode; both display links to the pages they use as sources.',
        'Google picks AI Overview sources from pages that are already indexed and eligible to show a snippet in Google Search: there is no sign-up and no special tag required.',
        'The pages cited in AI Overviews are the ones that answer the question clearly and quickly, with precise, current and verifiable information.',
        'Informational searches send fewer clicks when an AI Overview answers directly, but being cited puts your brand in front of people at the exact moment they ask the question.',
        'Search Console counts appearances in AI Overviews and AI Mode together with the rest of your web search traffic, so you need to track impressions, clicks and enquiries on your key pages over time.',
      ],
      intro: [
        'On a growing number of searches, Google no longer opens with ten blue links but with an answer written by its AI, alongside a handful of sources. For a business, the question is no longer just “am I on page one?” but also “am I one of the sources behind that answer?”. Here is how AI Overviews and AI Mode work, and what you can actually do to appear in them.',
      ],
      sections: [
        {
          heading: 'What are Google AI Overviews and AI Mode?',
          paragraphs: [
            'AI Overviews are summaries generated by a version of Gemini, Google’s AI model. They appear above the regular results on some searches, answer in a few lines and link to the pages they drew on.',
            'AI Mode goes further: it is a conversational search mode where you ask a complex question, then follow-up questions. To answer, Google runs several searches in parallel on the sub-questions, a technique it calls “query fan-out”, then assembles a response with its sources.',
          ],
        },
        {
          heading: 'Why are informational searches sending fewer clicks?',
          paragraphs: [
            'When the answer appears at the top of the page, some people no longer need to click. Several analyses published since 2024 have observed fewer clicks to websites on “what is” and “how to” questions, especially when an AI Overview is shown.',
            'Cited sources, on the other hand, gain a new kind of visibility: their name appears at the moment the question is asked, and the people who do click often want to go deeper. Google says these clicks are higher quality, which is hard to verify from the outside.',
            'AI Overviews mostly trigger on informational questions. When people look for a provider near them, the classic results and the map pack usually keep a bigger role.',
          ],
        },
        {
          heading: 'How does Google choose which sources to cite?',
          paragraphs: [
            'Google spells it out in its documentation for site owners: to appear as a link in an AI Overview or in AI Mode, a page must be indexed and eligible to show a snippet in the regular results. There are no additional requirements and no special markup to add.',
            'In practice, sources come from pages Google already knows and considers relevant to the question, or to one of the sub-questions it runs in parallel. Ranking well for a related query helps, but the cited page is not always the top result: it is often the one with the passage that answers most clearly.',
          ],
        },
        {
          heading: 'How do you write a page that is likely to be cited?',
          paragraphs: [
            'The goal is simple: make every answer easy to find, understand and quote.',
          ],
          list: [
            'Answer first: the first one or two sentences under a heading give the answer, the detail follows.',
            'Phrase headings as real questions: “How much does… cost?”, “What is the difference between…?”, “Should I…?”.',
            'Define your terms: a sentence like “X is…” is easy to extract and cite.',
            'Use lists and tables for steps, criteria and comparisons: prices, timelines, pros and cons of each option.',
            'Give precise, sourced facts: figures with their origin, price ranges, timelines, conditions. A vague claim adds nothing to an answer.',
            'Cover related questions on the same page or on linked pages, since AI Mode breaks a question into sub-questions.',
          ],
        },
        {
          heading: 'Which trust signals matter to Google?',
          paragraphs: [
            'Show a publication date and an updated date, and genuinely update the content when prices, rules or tools change. Changing the date without changing the substance achieves nothing.',
            'The guidelines Google gives its quality raters sum up what it looks for with the acronym E-E-A-T: experience, expertise, authoritativeness and trustworthiness. In practice: a named author with their role, examples from your own work, original photos, full contact details and an up-to-date About page.',
            'What makes the difference is proof of real experience: a contractor showing their own jobs, a firm explaining a case it handles every week. Generic text, whether written by a person or by AI, is unlikely to stand out.',
          ],
        },
        {
          heading: 'Structured data and technical SEO: what is essential?',
          paragraphs: [
            'Structured data (Schema.org) is not required to be cited, but it helps Google understand who you are and what the page is about: Organization or LocalBusiness, Article with author and dates, Product. It must match the visible content.',
            'FAQ markup no longer produces a rich result for most sites since 2023. A real questions-and-answers section is still worth having, because it offers short answers that are easy to reuse.',
            'On the technical side, the basics are enough but they are non-negotiable: indexable pages (no noindex, no robots.txt block), main content readable by Googlebot, fast loading, a complete mobile version and internal links to your important pages.',
          ],
        },
        {
          heading: 'How can you tell if you are cited in AI Overviews?',
          paragraphs: [
            'Google counts appearances in AI Overviews and AI Mode in the Search Console Performance report, together with the rest of your web search traffic. That makes it hard to isolate exactly what they bring you.',
            'The most reliable method is simple. Track impressions, clicks and click-through rate on your key pages, look for informational queries where impressions rise while clicks fall, and check a list of important questions for your business by hand every month. A growing number of rank-tracking tools also detect AI Overviews.',
            'Finally, measure what really matters: the quote requests, calls and sales that come from search, not just rankings.',
          ],
        },
      ],
      conclusion: [
        'There is no secret recipe for AI Overviews: Google cites pages it already indexes that answer the question clearly. The work is making your best answers easy to find, read and verify, and proving your real-world experience.',
        'If you would like to know where your pages stand, we can audit their indexing, structure and content, then send you a prioritised action plan. The quote is free.',
      ],
      faqs: [
        {
          q: 'Can you pay to be cited in AI Overviews?',
          a: 'No, cited sources cannot be bought. Google may show ads in or next to these answers, but they are labelled as such and are not part of the sources.',
        },
        {
          q: 'Do you need a special tag or file to be cited by Google’s AI?',
          a: 'No. Google states there are no additional requirements: an indexed page that is eligible for a snippet can be cited. Standard SEO best practices apply.',
        },
        {
          q: 'Can you stop Google from using your content in AI Overviews?',
          a: 'Yes, with nosnippet, data-nosnippet or max-snippet, which also limit how you appear in regular results. Blocking Google-Extended is not enough: that token covers Gemini and model training, not Google Search.',
        },
        {
          q: 'Do AI Overviews reduce traffic for every website?',
          a: 'Not evenly. Pages answering general questions are the most exposed; service pages, local searches and searches for a brand name are usually less affected.',
        },
        {
          q: 'How long does it take to be cited after improving a page?',
          a: 'Google first has to recrawl and reindex the page, which takes anywhere from a few days to a few weeks. After that nothing is guaranteed: source selection varies by question and over time.',
        },
      ],
    },
  },
};

export default post;
