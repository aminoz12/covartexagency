import type { TermDef } from '@/lib/glossary';

const terms: TermDef[] = [
  {
    slug: 'saas',
    group: 'build',
    service: 'saas-sur-mesure',
    related: ['mvp', 'api', 'pwa', 'no-code'],
    content: {
      fr: {
        term: 'SaaS',
        expansion: 'Software as a Service (logiciel en tant que service)',
        definition:
          'Le SaaS (Software as a Service) est un logiciel hébergé par son éditeur et utilisé en ligne, généralement par abonnement, sans installation ni serveur à gérer chez le client.',
        body: [
          'Dans un SaaS, une seule application tourne sur l’infrastructure de l’éditeur et sert tous les clients, chacun dans un espace séparé avec ses propres données : c’est l’architecture dite multi-locataire (multi-tenant). Les utilisateurs se connectent avec un compte, et les mises à jour sont déployées une fois pour tout le monde.',
          'Pour l’éditeur, le modèle produit des revenus récurrents et permet d’améliorer le produit en continu à partir de l’usage réel. Il impose en contrepartie des exigences fortes : disponibilité, sécurité, sauvegardes, conformité au RGPD et gestion de la facturation.',
          'Pour une entreprise, créer son propre SaaS a du sens quand un savoir-faire métier peut être vendu à d’autres sous forme d’outil, ou quand les logiciels du marché ne couvrent pas un processus central de son activité.',
        ],
        keyPoints: [
          'Accès en ligne, sans installation, depuis n’importe quel poste.',
          'Abonnement mensuel ou annuel, souvent par utilisateur ou selon l’usage.',
          'Une seule base de code pour tous les clients, avec des données isolées.',
          'Sécurité, disponibilité et RGPD relèvent de la responsabilité de l’éditeur.',
          'Un MVP permet de tester la demande avant de construire le produit complet.',
        ],
        example:
          'Un cabinet de conseil en ressources humaines transforme sa méthode d’entretien annuel en outil en ligne : chaque entreprise cliente crée son espace, invite ses managers et paie un abonnement selon le nombre de salariés.',
      },
      en: {
        term: 'SaaS',
        expansion: 'Software as a Service',
        definition:
          'SaaS (Software as a Service) is software hosted by its provider and used online, usually on a subscription basis, with no installation or servers to manage on the customer’s side.',
        body: [
          'In a SaaS product, one application runs on the provider’s infrastructure and serves every customer, each in a separate space with its own data: this is called a multi-tenant architecture. Users sign in with an account, and updates are deployed once for everyone.',
          'For the provider, the model brings recurring revenue and lets the product improve continuously based on real usage. In return it comes with strict requirements: uptime, security, backups, data protection rules such as the GDPR in Europe, and billing.',
          'For a business, building its own SaaS makes sense when industry know-how can be sold to others as a tool, or when off-the-shelf software does not cover a process that is central to its activity.',
        ],
        keyPoints: [
          'Online access, nothing to install, from any device.',
          'Monthly or annual subscription, often per user or based on usage.',
          'One codebase for all customers, with isolated data.',
          'Security, uptime and data protection are the provider’s responsibility.',
          'An MVP lets you test demand before building the full product.',
        ],
        example:
          'An HR consultancy turns its annual review method into an online tool: each client company creates its own workspace, invites its managers and pays a subscription based on headcount.',
      },
    },
  },
  {
    slug: 'mvp',
    group: 'build',
    service: 'saas-sur-mesure',
    related: ['saas', 'no-code', 'pwa'],
    content: {
      fr: {
        term: 'MVP',
        expansion: 'Minimum Viable Product (produit minimum viable)',
        definition:
          'Le MVP (Minimum Viable Product, ou produit minimum viable) est la version la plus simple d’un produit qui résout le problème principal de ses utilisateurs et permet de tester la demande avant d’investir davantage.',
        body: [
          'Un MVP n’est ni une maquette ni un prototype jetable : c’est un produit utilisable, mis entre les mains de vrais utilisateurs, mais limité aux fonctions indispensables. Tout le reste (tableaux de bord avancés, intégrations, options de personnalisation) attend que la valeur soit démontrée.',
          'La démarche part d’une hypothèse précise, par exemple « des agences immobilières paieront pour automatiser leurs comptes rendus de visite », et d’un critère de réussite mesurable : nombre d’inscrits, usage régulier, premiers paiements. Les retours orientent la suite : continuer, ajuster ou arrêter.',
          'Pour une entreprise, l’intérêt est de limiter le risque : on dépense une fraction du budget total pour apprendre ce que veulent vraiment les clients, au lieu de construire pendant des mois un produit que personne n’utilisera.',
        ],
        keyPoints: [
          'Une cible, un problème, un parcours principal.',
          'Un critère de réussite défini avant le lancement.',
          'Une base technique saine, pour faire évoluer le produit sans tout réécrire.',
          'Le no-code peut suffire pour valider une idée ; le code sur mesure s’impose quand le produit grandit.',
        ],
        example:
          'Une entreprise de formation veut lancer une plateforme de quiz pour ses clients. Le MVP se limite à la création de quiz, à leur envoi par lien et aux résultats par participant ; la facturation en ligne et les statistiques avancées viendront si les premiers clients l’utilisent chaque semaine.',
      },
      en: {
        term: 'MVP',
        expansion: 'Minimum Viable Product',
        definition:
          'An MVP (Minimum Viable Product) is the simplest version of a product that genuinely solves its users’ main problem, released to test demand before investing further.',
        body: [
          'An MVP is neither a mock-up nor a throwaway prototype: it is a usable product in the hands of real users, limited to the features that are essential. Everything else (advanced dashboards, integrations, customisation options) waits until the value is proven.',
          'The approach starts from a precise hypothesis, for example “estate agencies will pay to automate their viewing reports”, and a measurable success criterion: sign-ups, regular use, first payments. The feedback decides what comes next: continue, adjust or stop.',
          'For a business, the point is to limit risk: you spend a fraction of the full budget to learn what customers actually want, instead of spending months building a product nobody uses.',
        ],
        keyPoints: [
          'One audience, one problem, one main user journey.',
          'A success criterion defined before launch.',
          'A sound technical base, so the product can evolve without a full rewrite.',
          'No-code can be enough to validate an idea; custom code takes over as the product grows.',
        ],
        example:
          'A training company wants to launch a quiz platform for its clients. The MVP covers creating quizzes, sending them by link and showing results per participant; online billing and advanced statistics come later if the first clients use it every week.',
      },
    },
  },
  {
    slug: 'pwa',
    group: 'build',
    service: 'applications-mobiles',
    related: ['saas', 'mvp', 'core-web-vitals'],
    content: {
      fr: {
        term: 'PWA',
        expansion: 'Progressive Web App (application web progressive)',
        definition:
          'Une PWA (Progressive Web App) est un site web conçu pour se comporter comme une application : installable sur l’écran d’accueil, rapide, utilisable en partie hors connexion et capable, selon l’appareil, d’envoyer des notifications.',
        body: [
          'Une PWA repose sur des technologies web standard. Un fichier manifeste décrit l’application (nom, icône, couleurs) et un service worker, un script qui tourne en arrière-plan, met en cache les ressources pour accélérer le chargement et assurer un fonctionnement hors ligne partiel. Le site doit être servi en HTTPS.',
          'L’intérêt pour une entreprise : une seule base de code pour le web, Android et iOS, pas de passage obligatoire par les stores, des mises à jour instantanées et des pages qui restent indexables par Google. Le coût est en général inférieur à celui de deux applications natives.',
          'Les limites sont réelles : l’accès à certaines fonctions de l’appareil reste restreint, surtout sur iOS, et la visibilité dans les stores est moindre. Pour un usage intensif du matériel (Bluetooth, capteurs, traitements en arrière-plan), une application native ou hybride reste souvent préférable.',
        ],
        keyPoints: [
          'Installable depuis le navigateur, sans passer par un store.',
          'Fonctionne en partie hors connexion grâce au service worker.',
          'Une seule base de code pour tous les appareils.',
          'Notifications push possibles, avec des restrictions selon le système et le navigateur.',
        ],
        example:
          'Un réseau de salles de sport propose une PWA pour réserver les cours : les adhérents l’ajoutent à leur écran d’accueil depuis le site, consultent le planning même avec une connexion faible et reçoivent un rappel avant chaque séance.',
      },
      en: {
        term: 'PWA',
        expansion: 'Progressive Web App',
        definition:
          'A PWA (Progressive Web App) is a website built to behave like an app: installable on the home screen, fast, partly usable offline and, depending on the device, able to send notifications.',
        body: [
          'A PWA relies on standard web technologies. A manifest file describes the app (name, icon, colours) and a service worker, a script running in the background, caches resources to speed up loading and keep part of the app working offline. The site must be served over HTTPS.',
          'For a business, the appeal is one codebase for the web, Android and iOS, no mandatory app store review, instant updates and pages that remain indexable by Google. The cost is generally lower than building two native apps.',
          'The limits are real: access to some device features remains restricted, especially on iOS, and visibility in app stores is lower. For heavy use of hardware (Bluetooth, sensors, background processing), a native or hybrid app is often the better choice.',
        ],
        keyPoints: [
          'Installable from the browser, without going through an app store.',
          'Partly works offline thanks to the service worker.',
          'One codebase for every device.',
          'Push notifications are possible, with restrictions depending on the system and browser.',
        ],
        example:
          'A chain of gyms offers a PWA for booking classes: members add it to their home screen from the website, check the schedule even on a weak connection and get a reminder before each session.',
      },
    },
  },
  {
    slug: 'api',
    group: 'build',
    service: 'automatisation-processus',
    related: ['no-code', 'agent-ia', 'saas'],
    content: {
      fr: {
        term: 'API',
        expansion: 'Application Programming Interface (interface de programmation)',
        definition:
          'Une API (Application Programming Interface) est une interface qui permet à deux logiciels d’échanger des données ou de déclencher des actions selon des règles définies, sans intervention humaine.',
        body: [
          'Concrètement, un logiciel envoie une requête à l’API d’un autre (« crée ce client », « donne-moi les commandes du jour ») et reçoit une réponse structurée, le plus souvent au format JSON. La plupart des API web suivent le style REST et passent par le protocole HTTP ; l’accès est protégé par une clé ou un jeton d’authentification.',
          'Les API sont la base de l’automatisation : elles relient un CRM, un logiciel de facturation, une boutique en ligne ou un outil de support pour que les informations circulent sans ressaisie. Les webhooks complètent le dispositif : au lieu d’interroger un service en boucle, on est prévenu dès qu’un événement se produit.',
          'Pour une entreprise, la qualité des API de ses outils détermine ce qu’elle pourra automatiser. Avant de choisir un logiciel, il vaut la peine de vérifier qu’il propose une API documentée et ce qu’elle permet réellement.',
        ],
        keyPoints: [
          'Un contrat clair : quelles données, quel format, quelles actions.',
          'Un accès sécurisé par clé, jeton ou OAuth, avec des droits limités.',
          'Des limites d’usage (nombre de requêtes) fixées par chaque éditeur.',
          'La condition pour connecter ses outils et les faire piloter par un agent IA.',
        ],
        example:
          'Quand une commande est payée sur une boutique en ligne, un webhook déclenche un scénario d’automatisation : il crée la facture via l’API du logiciel de comptabilité, puis l’étiquette d’expédition via l’API du transporteur, sans aucune saisie manuelle.',
      },
      en: {
        term: 'API',
        expansion: 'Application Programming Interface',
        definition:
          'An API (Application Programming Interface) is an interface that lets two pieces of software exchange data or trigger actions according to defined rules, without human intervention.',
        body: [
          'In practice, one application sends a request to another’s API (“create this customer”, “list today’s orders”) and receives a structured response, usually in JSON. Most web APIs follow the REST style over HTTP, and access is protected by a key or an authentication token.',
          'APIs are the foundation of automation: they connect a CRM, invoicing software, an online shop or a support tool so information flows without re-keying. Webhooks complete the picture: instead of polling a service repeatedly, your system is notified as soon as an event happens.',
          'For a business, the quality of its tools’ APIs determines what it can automate. Before choosing software, it is worth checking that it offers a documented API and what that API actually allows.',
        ],
        keyPoints: [
          'A clear contract: which data, which format, which actions.',
          'Secured access by key, token or OAuth, with limited permissions.',
          'Usage limits (number of requests) set by each provider.',
          'The prerequisite for connecting your tools and letting an AI agent operate them.',
        ],
        example:
          'When an order is paid in an online shop, a webhook triggers an automation: it creates the invoice through the accounting software’s API, then the shipping label through the carrier’s API, with no manual data entry.',
      },
    },
  },
  {
    slug: 'llm',
    group: 'build',
    service: 'solutions-ia',
    related: ['rag', 'agent-ia', 'geo', 'ai-overviews'],
    content: {
      fr: {
        term: 'LLM',
        expansion: 'Large Language Model (grand modèle de langage)',
        definition:
          'Un LLM (Large Language Model, ou grand modèle de langage) est un modèle d’intelligence artificielle entraîné sur de très grands volumes de texte pour comprendre et générer du langage : répondre, résumer, traduire, rédiger ou classer.',
        body: [
          'Un LLM apprend, à partir d’immenses corpus de textes, à prédire la suite la plus probable d’un passage. Cette capacité, affinée par un entraînement complémentaire, lui permet de suivre des instructions et de tenir une conversation. Les modèles derrière ChatGPT, Claude ou Gemini sont des LLM ; il existe aussi des modèles ouverts qu’une entreprise peut héberger elle-même.',
          'Un LLM ne connaît pas votre entreprise : ses connaissances s’arrêtent à sa date d’entraînement et il peut produire des réponses fausses mais plausibles, appelées hallucinations. On le fiabilise en lui fournissant les bons documents au moment de la question (RAG), en encadrant ses consignes et en vérifiant ses sorties.',
          'Pour une entreprise, un LLM sert à traiter du texte à grande échelle : tri des e-mails, réponses au support, extraction de données dans des documents, rédaction de brouillons. Le choix du modèle dépend de la qualité attendue, du coût d’usage et des exigences de confidentialité des données.',
        ],
        keyPoints: [
          'Génère du texte en prédisant la suite la plus probable.',
          'Ne connaît ni vos données ni l’actualité récente sans qu’on les lui fournisse.',
          'Peut se tromper avec assurance : une vérification humaine reste nécessaire.',
          'Facturé en général à l’usage, selon le volume de texte traité.',
          'Les mêmes modèles alimentent les assistants qui recommandent des marques, d’où l’enjeu du GEO.',
        ],
        example:
          'Une entreprise de services reçoit chaque jour de nombreuses demandes par e-mail. Un LLM lit chaque message, identifie le type de demande et son urgence, extrait les coordonnées et prépare un brouillon de réponse qu’un collaborateur relit avant envoi.',
      },
      en: {
        term: 'LLM',
        expansion: 'Large Language Model',
        definition:
          'An LLM (Large Language Model) is an artificial intelligence model trained on very large amounts of text to understand and generate language: answering, summarising, translating, drafting or classifying.',
        body: [
          'An LLM learns from huge collections of text to predict the most likely continuation of a passage. That ability, refined by further training, lets it follow instructions and hold a conversation. The models behind ChatGPT, Claude and Gemini are LLMs; there are also open models that a company can host itself.',
          'An LLM does not know your business: its knowledge stops at its training date, and it can produce answers that sound right but are wrong, known as hallucinations. It becomes more reliable when it is given the right documents at question time (RAG), clear instructions and checks on its output.',
          'For a business, an LLM processes text at scale: sorting emails, answering support requests, extracting data from documents, drafting content. The choice of model depends on the quality needed, the cost of use and data confidentiality requirements.',
        ],
        keyPoints: [
          'Generates text by predicting the most likely continuation.',
          'Does not know your data or recent events unless they are provided.',
          'Can be confidently wrong: human review is still needed.',
          'Usually billed by usage, based on the volume of text processed.',
          'The same models power the assistants that recommend brands, hence the stakes of GEO.',
        ],
        example:
          'A service company receives many enquiries by email every day. An LLM reads each message, identifies the type of request and its urgency, extracts the contact details and prepares a draft reply that a team member reviews before sending.',
      },
    },
  },
  {
    slug: 'rag',
    group: 'build',
    service: 'solutions-ia',
    related: ['llm', 'agent-ia', 'api'],
    content: {
      fr: {
        term: 'RAG',
        expansion: 'Retrieval-Augmented Generation (génération augmentée par la recherche)',
        definition:
          'Le RAG (Retrieval-Augmented Generation) est une technique qui fait répondre un modèle d’IA à partir de vos propres documents, retrouvés au moment de la question, plutôt que de sa seule mémoire.',
        body: [
          'Le fonctionnement se fait en trois temps. D’abord, vos documents (procédures, fiches produits, contrats, FAQ) sont découpés en passages et indexés, souvent dans une base vectorielle qui permet une recherche par le sens. Ensuite, à chaque question, le système retrouve les passages les plus pertinents. Enfin, le LLM rédige sa réponse à partir de ces passages et peut indiquer d’où vient chaque information.',
          'L’intérêt est double : le modèle s’appuie sur des informations à jour et propres à votre entreprise, ce qui limite les réponses inventées, et chaque réponse peut citer sa source, donc être vérifiée. Mettre à jour un document suffit à mettre à jour les réponses, sans réentraîner le modèle.',
          'La qualité d’un RAG dépend surtout de celle des documents et de la recherche : des sources contradictoires ou obsolètes donnent de mauvaises réponses. Les droits d’accès doivent aussi être respectés, pour que chaque utilisateur n’obtienne que les informations qu’il a le droit de voir.',
        ],
        keyPoints: [
          'Le modèle répond à partir de vos documents, pas de sa seule mémoire.',
          'Des réponses sourcées, que l’on peut vérifier.',
          'Une mise à jour des documents suffit, sans réentraînement.',
          'La qualité dépend de la qualité et de l’organisation des contenus.',
        ],
        example:
          'Un fabricant met à disposition de son service client un assistant interne branché sur ses notices techniques et ses conditions de garantie. Quand un conseiller demande si une pièce est couverte, l’assistant répond en citant l’article précis des conditions de garantie.',
      },
      en: {
        term: 'RAG',
        expansion: 'Retrieval-Augmented Generation',
        definition:
          'RAG (Retrieval-Augmented Generation) is a technique that makes an AI model answer from your own documents, retrieved at the moment the question is asked, rather than from its memory alone.',
        body: [
          'It works in three steps. First, your documents (procedures, product sheets, contracts, FAQs) are split into passages and indexed, often in a vector database that allows search by meaning. Then, for each question, the system retrieves the most relevant passages. Finally, the LLM writes its answer from those passages and can show where each piece of information comes from.',
          'The benefit is twofold: the model relies on up-to-date information specific to your business, which limits invented answers, and each answer can cite its source, so it can be checked. Updating a document is enough to update the answers, without retraining the model.',
          'The quality of a RAG system depends above all on the documents and the search: contradictory or outdated sources produce poor answers. Access rights must also be respected, so that each user only gets information they are allowed to see.',
        ],
        keyPoints: [
          'The model answers from your documents, not from its memory alone.',
          'Sourced answers that can be checked.',
          'Updating the documents is enough, no retraining needed.',
          'Quality depends on how good and how well organised the content is.',
        ],
        example:
          'A manufacturer gives its customer service team an internal assistant connected to its technical manuals and warranty terms. When an agent asks whether a part is covered, the assistant answers and cites the exact clause of the warranty terms.',
      },
    },
  },
  {
    slug: 'agent-ia',
    group: 'build',
    service: 'solutions-ia',
    related: ['llm', 'rag', 'api', 'no-code'],
    content: {
      fr: {
        term: 'Agent IA',
        definition:
          'Un agent IA est un système qui, à partir d’un objectif, décide lui-même des étapes à suivre et les exécute en utilisant des outils (recherche, logiciels, API), en s’appuyant sur un modèle de langage.',
        body: [
          'Là où un chatbot se contente de répondre, un agent agit. Il fonctionne en boucle : le modèle de langage analyse la situation, choisit une action (consulter une base, appeler une API, rédiger un message), observe le résultat, puis décide de l’étape suivante, jusqu’à atteindre l’objectif ou passer la main à un humain.',
          'Pour une entreprise, un agent IA prend en charge des tâches répétitives qui demandent un peu de jugement : qualifier des demandes entrantes, préparer des devis, rapprocher des documents, mettre à jour un CRM. Il complète les automatisations classiques, qui suivent des règles fixes, sur les cas qui varient.',
          'Un agent doit être encadré : droits d’accès limités au strict nécessaire, validation humaine pour les actions sensibles (paiement, envoi à un client, suppression), journal de toutes les actions et tests sur des cas réels avant la mise en production.',
        ],
        keyPoints: [
          'Un objectif, des outils, une boucle de décision.',
          'Agit dans vos logiciels via leurs API, pas seulement dans une fenêtre de discussion.',
          'Adapté aux tâches répétitives qui varient d’un cas à l’autre.',
          'Garde-fous indispensables : droits limités, validation humaine, traçabilité.',
        ],
        example:
          'À chaque nouvelle demande de devis reçue sur le site, un agent IA vérifie si le contact existe dans le CRM, complète la fiche, estime le besoin à partir du message, propose un créneau de rendez-vous et prépare un e-mail qu’un commercial valide avant envoi.',
      },
      en: {
        term: 'AI agent',
        definition:
          'An AI agent is a system that, given a goal, decides which steps to take and carries them out using tools such as search, business software and APIs, driven by a language model.',
        body: [
          'Where a chatbot only answers, an agent acts. It works in a loop: the language model assesses the situation, chooses an action (query a database, call an API, draft a message), observes the result, then decides on the next step, until the goal is reached or a human needs to step in.',
          'For a business, an AI agent handles repetitive tasks that require some judgement: qualifying incoming requests, preparing quotes, matching documents, updating a CRM. It complements classic automation, which follows fixed rules, on cases that vary.',
          'An agent needs guardrails: access limited to what is strictly necessary, human approval for sensitive actions (payments, messages to customers, deletions), a log of every action and testing on real cases before going live.',
        ],
        keyPoints: [
          'A goal, tools and a decision loop.',
          'Acts inside your software through its APIs, not just in a chat window.',
          'Suited to repetitive tasks that vary from case to case.',
          'Guardrails are essential: limited access, human approval, traceability.',
        ],
        example:
          'For each new quote request received on the website, an AI agent checks whether the contact exists in the CRM, completes the record, estimates the need from the message, suggests a meeting slot and prepares an email that a salesperson approves before it is sent.',
      },
    },
  },
  {
    slug: 'no-code',
    group: 'build',
    service: 'automatisation-processus',
    related: ['api', 'mvp', 'agent-ia'],
    content: {
      fr: {
        term: 'No-code et low-code',
        definition:
          'Le no-code et le low-code désignent des plateformes qui permettent de créer des applications, des sites ou des automatisations par une interface visuelle, sans écrire de code ou avec très peu.',
        body: [
          'Le no-code propose des briques prêtes à l’emploi que l’on assemble par glisser-déposer : pages, bases de données, formulaires, règles du type « quand ceci arrive, fais cela ». Le low-code ajoute la possibilité d’écrire du code pour les cas que l’interface ne couvre pas. Des outils comme Bubble ou Webflow servent à créer des applications et des sites ; Zapier, Make ou n8n, à automatiser des tâches entre logiciels.',
          'L’intérêt pour une entreprise est la vitesse : un outil interne, un prototype ou une automatisation peut être en place en quelques jours, souvent sans développeur. C’est une bonne façon de tester une idée ou de supprimer une ressaisie.',
          'Les limites apparaissent avec la croissance : dépendance à une plateforme, coûts qui augmentent avec le volume, logique complexe difficile à maintenir, contrôle partiel sur les données et les performances. Quand un outil devient central pour l’activité, un passage au développement sur mesure se justifie souvent.',
        ],
        keyPoints: [
          'No-code : aucune ligne de code ; low-code : un peu de code pour aller plus loin.',
          'Idéal pour les prototypes, les outils internes et les automatisations simples.',
          'Attention à la dépendance à l’éditeur et aux coûts à grande échelle.',
          'Vérifier où sont hébergées les données et comment les exporter.',
        ],
        example:
          'Un cabinet d’architectes connecte son formulaire de contact, son agenda et son tableur avec un outil d’automatisation : chaque demande ajoute une ligne au tableau de suivi, envoie un accusé de réception au client et alerte l’architecte concerné, sans développement.',
      },
      en: {
        term: 'No-code and low-code',
        definition:
          'No-code and low-code are platforms that let you build applications, websites or automations through a visual interface, without writing code or with very little of it.',
        body: [
          'No-code offers ready-made building blocks assembled by drag and drop: pages, databases, forms, rules such as “when this happens, do that”. Low-code adds the option of writing code for cases the interface does not cover. Tools such as Bubble or Webflow are used to build applications and websites; Zapier, Make or n8n to automate tasks between software.',
          'For a business, the main benefit is speed: an internal tool, a prototype or an automation can be up and running in days, often without a developer. It is a good way to test an idea or eliminate manual re-keying.',
          'The limits show up as you grow: dependence on a platform, costs that rise with volume, complex logic that is hard to maintain, and partial control over data and performance. When a tool becomes central to the business, moving to custom development is often justified.',
        ],
        keyPoints: [
          'No-code: no code at all; low-code: some code to go further.',
          'Ideal for prototypes, internal tools and simple automations.',
          'Watch out for vendor lock-in and costs at scale.',
          'Check where data is hosted and how it can be exported.',
        ],
        example:
          'An architecture firm connects its contact form, calendar and spreadsheet with an automation tool: each enquiry adds a row to the tracking sheet, sends an acknowledgement to the client and alerts the right architect, with no development.',
      },
    },
  },
];

export default terms;
