import type { PostDef } from '@/lib/blog';

const post: PostDef = {
  slug: 'llms-txt-guide',
  date: '2026-10-08',
  author: 'Covartex',
  relatedService: 'visibilite-ia-aeo-geo',
  readingMinutes: 6,
  content: {
    fr: {
      title: 'llms.txt : à quoi sert ce fichier et faut-il en créer un ?',
      description:
        'llms.txt : ce que contient ce fichier proposé pour guider les IA, ce qu’il fait vraiment, et ce qui compte davantage pour être cité par ChatGPT et Perplexity.',
      tags: ['IA', 'GEO', 'Technique'],
      takeaways: [
        'Le fichier llms.txt est un fichier texte au format Markdown, placé à la racine d’un site (exemple.fr/llms.txt), qui présente aux modèles de langage un résumé du site et une sélection de ses pages les plus utiles.',
        'Le llms.txt a été proposé en septembre 2024 par Jeremy Howard, cofondateur d’Answer.AI : c’est une proposition ouverte, pas un standard officiel.',
        'À notre connaissance, aucun grand fournisseur d’IA n’a confirmé utiliser le llms.txt pour choisir les sources qu’il cite, et Google a indiqué ne pas s’en servir pour son moteur de recherche.',
        'Créer un llms.txt demande peu de temps et ne présente aucun risque : c’est une assurance bon marché, pas un levier de visibilité en soi.',
        'Pour être cité par les IA, l’accès des robots dans le robots.txt, un HTML lisible sans JavaScript, des informations claires sur l’entreprise et des contenus qui répondent directement aux questions comptent bien davantage que le llms.txt.',
      ],
      intro: [
        'La question circule beaucoup depuis 2025 : « faut-il un fichier llms.txt pour apparaître dans ChatGPT ? ». La réponse courte : ça ne fait pas de mal, mais ce n’est pas ce qui vous fera citer. Voici ce qu’est ce fichier, comment le rédiger, et où mettre votre énergie en priorité.',
      ],
      sections: [
        {
          heading: 'Qu’est-ce que le fichier llms.txt ?',
          paragraphs: [
            'Le llms.txt est un simple fichier texte, écrit en Markdown, que l’on place à la racine de son site, au même endroit que le robots.txt. Son but : donner aux modèles de langage (LLM) une carte courte et choisie du site, au lieu de les laisser deviner l’essentiel à partir de pages chargées de menus, de bandeaux et de scripts.',
            'L’idée a été proposée en septembre 2024 par Jeremy Howard, cofondateur d’Answer.AI, et sa spécification est publiée sur llmstxt.org. Elle vise surtout le moment où une IA consulte un site pour répondre à une question précise, avec une mémoire de travail limitée.',
          ],
        },
        {
          heading: 'Que contient un fichier llms.txt ?',
          paragraphs: [
            'La proposition fixe un ordre précis. Seul le titre est obligatoire ; le reste est recommandé :',
          ],
          list: [
            'Un titre de niveau 1 (une ligne commençant par #) avec le nom du site ou de l’entreprise.',
            'Une citation (une ligne commençant par >) qui résume en une ou deux phrases ce que fait le site et pour qui.',
            'Si besoin, quelques paragraphes ou puces de contexte : zone couverte, points importants à connaître.',
            'Des sections de niveau 2 (##), chacune avec une liste de liens au format [Nom de la page](URL), suivis d’une description d’une ligne.',
            'Une section « Optional » pour les liens secondaires, que l’IA peut ignorer si elle manque de place.',
          ],
        },
        {
          heading: 'À quoi ressemble un llms.txt ? Un exemple',
          paragraphs: [
            'Voici le squelette d’un llms.txt pour une entreprise fictive de plomberie. Le fichier tient en quelques lignes de Markdown.',
          ],
          code: [
            '# Exemple Plomberie',
            '> Plombier chauffagiste à Lyon et dans un rayon de 30 km : dépannage, installation et entretien de chaudières, pour les particuliers et les syndics.',
            '## Services',
            '- [Dépannage plomberie](https://exemple.fr/depannage): interventions urgentes, zones couvertes, tarifs indicatifs.',
            '- [Entretien de chaudière](https://exemple.fr/chaudiere): contrat annuel, marques prises en charge.',
            '## Informations pratiques',
            '- [Tarifs](https://exemple.fr/tarifs): grille de prix et frais de déplacement.',
            '- [Contact](https://exemple.fr/contact): téléphone, horaires, adresse.',
            '## Optional',
            '- [Blog](https://exemple.fr/blog): conseils d’entretien et guides pratiques.',
          ].join('\n'),
        },
        {
          heading: 'Comment créer et publier son llms.txt ?',
          paragraphs: [
            'Il s’écrit à la main en quelques dizaines de lignes. Listez les pages qui répondent vraiment aux questions de vos clients (services, tarifs, zone d’intervention, contact, pages de réponses), avec une description factuelle pour chacune. Inutile d’y mettre tout le site : l’intérêt du fichier est justement la sélection.',
            'Publiez-le à l’adresse exemple.fr/llms.txt, en texte brut, et mettez-le à jour quand vous ajoutez ou retirez une page importante. Certains outils et extensions de CMS le génèrent automatiquement ; relisez toujours le résultat, car une liste produite sans tri perd tout son intérêt.',
            'Le fichier llms-full.txt, que l’on voit souvent à côté, rassemble le texte complet des pages principales dans un seul document. Il s’est surtout répandu sur les sites de documentation technique ; pour un site d’entreprise classique, il est rarement nécessaire.',
          ],
        },
        {
          heading: 'ChatGPT, Claude ou Google lisent-ils le llms.txt ?',
          paragraphs: [
            'C’est le point à connaître avant d’y consacrer du temps : le llms.txt reste une proposition, pas un standard adopté. À notre connaissance, aucun grand fournisseur d’IA (OpenAI, Anthropic, Google, Perplexity) n’a confirmé s’en servir pour choisir les sources qu’il cite ou pour classer des sites.',
            'Google a indiqué publiquement ne pas l’utiliser pour son moteur de recherche. Ses AI Overviews s’appuient sur l’index classique de Google Search, pas sur ce fichier.',
            'Pourquoi en créer un quand même ? Parce qu’il coûte peu, qu’il ne présente aucun risque, et qu’il peut servir le jour où un outil ou un agent IA décide de le lire, ou quand un utilisateur le donne lui-même à un assistant. Voyez-le comme une assurance bon marché, pas comme un interrupteur magique.',
          ],
        },
        {
          heading: 'Quels robots d’IA autoriser dans votre robots.txt ?',
          paragraphs: [
            'Avant tout fichier facultatif, vérifiez que les IA ont le droit de lire votre site. Un robots.txt trop strict, ou un pare-feu qui bloque par défaut les robots d’IA, suffit à vous rendre invisible.',
            'Les réglages sont indépendants : vous pouvez refuser l’entraînement des modèles tout en restant visible dans les réponses. Les principaux noms à connaître :',
          ],
          list: [
            'GPTBot (OpenAI) : collecte des contenus pour entraîner les modèles. Le bloquer ne vous retire pas de la recherche de ChatGPT.',
            'OAI-SearchBot (OpenAI) : alimente les résultats de recherche de ChatGPT. C’est lui qu’il faut autoriser pour y être cité.',
            'ChatGPT-User (OpenAI) : consulte une page quand un utilisateur demande à ChatGPT de la lire.',
            'ClaudeBot (Anthropic) : collecte des contenus pour l’entraînement des modèles Claude.',
            'Claude-SearchBot (Anthropic) : parcourt le web pour améliorer les résultats de recherche de Claude.',
            'PerplexityBot (Perplexity) : indexe les pages que Perplexity affiche comme sources.',
            'Bingbot (Microsoft) : alimente l’index de Bing, sur lequel s’appuie Microsoft Copilot.',
            'Google-Extended et Applebot-Extended : ce ne sont pas des robots mais des jetons de contrôle. Ils indiquent si Google et Apple peuvent utiliser vos contenus pour leurs modèles d’IA (Gemini, Apple Intelligence). Bloquer Google-Extended ne vous retire pas des AI Overviews, qui dépendent de Googlebot.',
          ],
        },
        {
          heading: 'Qu’est-ce qui compte plus que le llms.txt pour être cité par une IA ?',
          paragraphs: [
            'Une fois l’accès ouvert, ce sont des fondamentaux qui font la différence, que l’IA utilise son propre index ou celui d’un moteur de recherche :',
          ],
          list: [
            'Un HTML rendu côté serveur : beaucoup de robots d’IA lisent le code reçu sans exécuter le JavaScript. Si votre texte n’apparaît qu’après le chargement des scripts, il risque de ne pas être lu.',
            'Des informations claires sur l’entreprise : nom, activité, zone, coordonnées et prix indicatifs identiques sur le site et ailleurs, avec des données structurées Organization ou LocalBusiness.',
            'Des contenus qui répondent d’abord : la réponse dans la première phrase, le détail ensuite. Un paragraphe qui se suffit à lui-même est plus facile à reprendre.',
            'Des mentions et des avis sur d’autres sites : presse, annuaires professionnels, partenaires, plateformes d’avis. Les IA croisent les sources avant de recommander une entreprise.',
            'Un site bien indexé par Google et Bing : de nombreux assistants passent par un moteur de recherche pour trouver leurs sources.',
          ],
        },
      ],
      conclusion: [
        'Le llms.txt est une petite tâche utile à cocher, pas une stratégie. Ouvrez d’abord la porte aux bons robots, rendez votre contenu lisible sans JavaScript, puis travaillez des réponses claires et votre présence sur d’autres sites : c’est là que se joue la citation.',
        'Si vous voulez savoir où en est votre site, nous pouvons vérifier votre robots.txt, votre rendu HTML et votre présence dans les réponses des IA, puis vous proposer un plan d’action avec un devis gratuit.',
      ],
      faqs: [
        {
          q: 'Le fichier llms.txt est-il obligatoire ?',
          a: 'Non. C’est une proposition facultative, sans valeur officielle. Un site peut être cité par les IA sans en avoir.',
        },
        {
          q: 'Le llms.txt remplace-t-il le robots.txt ?',
          a: 'Non. Le robots.txt indique aux robots ce qu’ils ont le droit d’explorer ; le llms.txt propose une sélection de pages à lire. Seul le robots.txt est un standard reconnu, respecté par les principaux robots.',
        },
        {
          q: 'Le llms.txt améliore-t-il le référencement Google ?',
          a: 'Non. Google a indiqué ne pas l’utiliser. Pour Google, ce sont l’indexation, la qualité des contenus et la notoriété du site qui comptent.',
        },
        {
          q: 'Faut-il bloquer GPTBot pour protéger ses contenus ?',
          a: 'C’est un choix. Bloquer GPTBot refuse l’entraînement des modèles d’OpenAI sans vous retirer de la recherche de ChatGPT, tant qu’OAI-SearchBot reste autorisé. Pour une entreprise qui cherche des clients, bloquer les robots de recherche est rarement une bonne idée.',
        },
        {
          q: 'Combien de temps faut-il pour créer un llms.txt ?',
          a: 'Pour un site d’entreprise de quelques dizaines de pages, une à deux heures suffisent. Le plus long est de choisir les pages et d’écrire une description utile pour chacune.',
        },
      ],
    },
    en: {
      title: 'What Is llms.txt and Does Your Website Need One?',
      description:
        'What llms.txt is, what goes in the file, whether ChatGPT or Google actually use it, and what matters more for getting your website cited by AI assistants.',
      tags: ['AI', 'GEO', 'Technical SEO'],
      takeaways: [
        'llms.txt is a plain-text Markdown file placed at the root of a website (example.com/llms.txt) that gives language models a short summary of the site and a curated list of its most useful pages.',
        'The llms.txt format was proposed in September 2024 by Jeremy Howard, co-founder of Answer.AI: it is an open proposal, not an official standard.',
        'As far as we know, no major AI provider has confirmed using llms.txt to choose which sources it cites, and Google has said it does not use the file for Search.',
        'Creating an llms.txt file takes little time and carries no risk: treat it as cheap insurance, not as a visibility lever on its own.',
        'To get cited by AI assistants, crawler access in robots.txt, HTML that is readable without JavaScript, clear business information and answer-first content matter far more than llms.txt.',
      ],
      intro: [
        'Since 2025 the same question keeps coming up: “do I need an llms.txt file to show up in ChatGPT?”. The short answer: it does no harm, but it is not what gets you cited. Here is what the file is, how to write one, and where your effort should go first.',
      ],
      sections: [
        {
          heading: 'What is an llms.txt file?',
          paragraphs: [
            'llms.txt is a simple text file, written in Markdown, that sits at the root of your site, next to robots.txt. Its purpose is to give large language models (LLMs) a short, hand-picked map of the site, instead of leaving them to work out what matters from pages full of menus, banners and scripts.',
            'The idea was proposed in September 2024 by Jeremy Howard, co-founder of Answer.AI, and the specification lives at llmstxt.org. It is mainly aimed at the moment an AI tool reads a site to answer a specific question, with a limited amount of context it can hold.',
          ],
        },
        {
          heading: 'What goes in an llms.txt file?',
          paragraphs: [
            'The proposal sets out a fixed order. Only the title is required; the rest is recommended:',
          ],
          list: [
            'A level-one heading (a line starting with #) with the name of the site or business.',
            'A blockquote (a line starting with >) summarising in one or two sentences what the site does and who it is for.',
            'Optionally, a few paragraphs or bullet points of context: area served, key facts worth knowing.',
            'Level-two sections (##), each holding a list of links in the form [Page name](URL), followed by a one-line description.',
            'An “Optional” section for secondary links that an AI tool can skip when it is short on space.',
          ],
        },
        {
          heading: 'What does an llms.txt file look like? An example',
          paragraphs: [
            'Here is the skeleton of an llms.txt file for a fictional plumbing company. The whole file is a few lines of Markdown.',
          ],
          code: [
            '# Example Plumbing',
            '> Plumbing and heating company serving the city and a 20-mile radius: emergency repairs, boiler installation and servicing, for homeowners and property managers.',
            '## Services',
            '- [Emergency plumbing](https://example.com/emergency): call-outs, areas covered, indicative prices.',
            '- [Boiler servicing](https://example.com/boiler): annual plans, brands supported.',
            '## Practical information',
            '- [Pricing](https://example.com/pricing): price list and call-out fees.',
            '- [Contact](https://example.com/contact): phone, opening hours, address.',
            '## Optional',
            '- [Blog](https://example.com/blog): maintenance tips and how-to guides.',
          ].join('\n'),
        },
        {
          heading: 'How do you create and publish an llms.txt file?',
          paragraphs: [
            'You write it by hand, in a few dozen lines. List the pages that genuinely answer your clients’ questions (services, pricing, service area, contact, answer pages) with a factual description for each. There is no need to include the whole site: the value of the file is the selection.',
            'Publish it at example.com/llms.txt as plain text, and update it when you add or remove an important page. Some tools and CMS plugins generate it automatically; always review the output, because an unfiltered list defeats the purpose.',
            'You will often see an llms-full.txt file alongside it, which bundles the full text of the main pages into a single document. It has spread mostly on technical documentation sites; for a typical business website it is rarely needed.',
          ],
        },
        {
          heading: 'Do ChatGPT, Claude or Google read llms.txt?',
          paragraphs: [
            'This is the part to know before you spend time on it: llms.txt is still a proposal, not an adopted standard. As far as we know, no major AI provider (OpenAI, Anthropic, Google, Perplexity) has confirmed using it to choose the sources it cites or to rank websites.',
            'Google has said publicly that it does not use llms.txt for Search. Its AI Overviews draw on the regular Google Search index, not on this file.',
            'So why create one at all? Because it is cheap, it carries no risk, and it may help the day a tool or AI agent decides to read it, or when a user hands it to an assistant themselves. See it as low-cost insurance, not a magic switch.',
          ],
        },
        {
          heading: 'Which AI crawlers should you allow in robots.txt?',
          paragraphs: [
            'Before any optional file, check that AI systems are actually allowed to read your site. An overly strict robots.txt, or a firewall that blocks AI crawlers by default, is enough to make you invisible.',
            'The settings are independent: you can refuse model training and still appear in AI answers. The main names to know:',
          ],
          list: [
            'GPTBot (OpenAI): collects content to train models. Blocking it does not remove you from ChatGPT search.',
            'OAI-SearchBot (OpenAI): powers ChatGPT search results. This is the one to allow if you want to be cited there.',
            'ChatGPT-User (OpenAI): visits a page when a user asks ChatGPT to read it.',
            'ClaudeBot (Anthropic): collects content for training Claude models.',
            'Claude-SearchBot (Anthropic): crawls the web to improve Claude’s search results.',
            'PerplexityBot (Perplexity): indexes the pages Perplexity shows as sources.',
            'Bingbot (Microsoft): feeds the Bing index, which Microsoft Copilot relies on.',
            'Google-Extended and Applebot-Extended: these are not crawlers but control tokens. They tell Google and Apple whether your content may be used for their AI models (Gemini, Apple Intelligence). Blocking Google-Extended does not remove you from AI Overviews, which depend on Googlebot.',
          ],
        },
        {
          heading: 'What matters more than llms.txt for getting cited by AI?',
          paragraphs: [
            'Once access is open, the fundamentals make the difference, whether the AI uses its own index or a search engine’s:',
          ],
          list: [
            'Server-rendered HTML: many AI crawlers read the code they receive without running JavaScript. If your text only appears once scripts load, it may never be read.',
            'Clear business information: name, activity, area, contact details and indicative prices that match on your site and elsewhere, backed by Organization or LocalBusiness structured data.',
            'Answer-first content: the answer in the first sentence, the detail after. A paragraph that stands on its own is easier to quote.',
            'Mentions and reviews on other sites: press, professional directories, partners, review platforms. AI assistants cross-check sources before recommending a business.',
            'A site that is well indexed by Google and Bing: many assistants go through a search engine to find their sources.',
          ],
        },
      ],
      conclusion: [
        'llms.txt is a small, useful box to tick, not a strategy. First open the door to the right crawlers, make your content readable without JavaScript, then work on clear answers and your presence on other sites: that is where citations are won.',
        'If you want to know where your site stands, we can check your robots.txt, your HTML rendering and your presence in AI answers, then send you an action plan with a free quote.',
      ],
      faqs: [
        {
          q: 'Is an llms.txt file required?',
          a: 'No. It is an optional proposal with no official status. A site can be cited by AI assistants without one.',
        },
        {
          q: 'Does llms.txt replace robots.txt?',
          a: 'No. robots.txt tells crawlers what they may access; llms.txt suggests a selection of pages to read. Only robots.txt is a recognised standard that the main crawlers respect.',
        },
        {
          q: 'Does llms.txt help Google rankings?',
          a: 'No. Google has said it does not use it. For Google, indexing, content quality and the site’s reputation are what count.',
        },
        {
          q: 'Should I block GPTBot to protect my content?',
          a: 'That is your call. Blocking GPTBot opts you out of OpenAI model training without removing you from ChatGPT search, as long as OAI-SearchBot stays allowed. For a business looking for clients, blocking search crawlers is rarely a good idea.',
        },
        {
          q: 'How long does it take to create an llms.txt file?',
          a: 'For a business site of a few dozen pages, one to two hours is enough. The slow part is choosing the pages and writing a useful description for each.',
        },
      ],
    },
  },
};

export default post;
