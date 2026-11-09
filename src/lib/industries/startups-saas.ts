import type { IndustryDef } from '@/lib/industries';

const industry: IndustryDef = {
  slug: 'startups-saas',
  tone: 'ai',
  services: ['saas-sur-mesure', 'applications-mobiles', 'solutions-ia', 'creation-site-web', 'visibilite-ia-aeo-geo'],
  projects: [],
  area: 'worldwide',
  content: {
    fr: {
      name: 'Startups et SaaS',
      title: 'Agence de développement pour startups : SaaS, apps et IA',
      metaTitle: 'Agence MVP pour startups : SaaS, app mobile et IA',
      metaDescription:
        'Covartex développe votre MVP : SaaS, app mobile ou produit IA livré en sprints de deux semaines, code à votre nom, puis site, SEO et visibilité dans les IA.',
      promise:
        'Un MVP centré sur la valeur de votre produit, livré en quelques semaines, dont le code et les comptes vous appartiennent dès le premier jour.',
      cardText: 'MVP livré en sprints, code à votre nom, IA maîtrisée, produit visible.',
      summary: [
        'Covartex conçoit et développe le MVP des startups et des fondateurs, techniques ou non, partout dans le monde, en français ou en anglais : SaaS, application mobile ou produit IA.',
        'Covartex limite le MVP d’une startup à ce qui porte la valeur du produit et le livre en quelques semaines, par sprints de deux semaines avec une démo à chaque fin de sprint.',
        'Chez Covartex, le code, les comptes et les accès d’une startup sont à son nom dès le premier jour, ce qui simplifie une levée de fonds et sa due diligence.',
        'Covartex intègre l’IA aux produits des startups en maîtrisant coûts et confidentialité, puis crée le site, le SEO et la visibilité IA qui font trouver et recommander le produit.',
      ],
      challenges: [
        {
          title: 'Un périmètre qui gonfle',
          description:
            'Chaque idée semble indispensable avant le lancement. Le MVP s’alourdit, la date recule et le budget part dans des fonctionnalités que personne n’a demandées.',
        },
        {
          title: 'Un fondateur sans équipe technique',
          description:
            'Sans CTO, difficile d’évaluer un devis, de choisir une stack ou de savoir si le travail avance. Le risque : dépendre d’un prestataire qu’on ne peut ni contrôler ni quitter.',
        },
        {
          title: 'Une IA coûteuse ou imprévisible',
          description:
            'Une démo IA impressionne vite. En production, les coûts d’API, les réponses inventées et les données envoyées à des tiers deviennent de vrais sujets.',
        },
        {
          title: 'Un bon produit que personne ne trouve',
          description:
            'Sans site clair ni présence dans les réponses des IA, le produit dépend de la publicité payante ou du réseau du fondateur.',
        },
      ],
      solutions: [
        {
          service: 'saas-sur-mesure',
          title: 'Un SaaS centré sur la valeur, livré par sprints',
          text: 'Covartex part du problème que votre produit résout et ne garde pour le MVP que le parcours qui le prouve : inscription, fonctionnalité principale, paiement si besoin. Le développement avance par sprints de deux semaines, avec une démo à chaque fin de sprint pour décider de la suite sur pièce.',
        },
        {
          service: 'applications-mobiles',
          title: 'Une app iOS et Android pour tester le marché',
          text: 'Quand votre produit vit sur le téléphone, Covartex développe l’application iOS et Android et la publie depuis des comptes App Store et Google Play à votre nom. Selon le produit, une base de code commune aux deux plateformes réduit le coût du lancement.',
        },
        {
          service: 'solutions-ia',
          title: 'Des fonctionnalités IA qui tiennent en production',
          text: 'Assistant intégré, recherche dans vos documents (RAG) ou automatisation : Covartex choisit le modèle selon la tâche et plafonne le coût par utilisateur dès le départ. Les données de vos clients ne partent que vers les fournisseurs nécessaires et sont exclues de l’entraînement des modèles lorsque le fournisseur le permet.',
        },
        {
          service: 'creation-site-web',
          title: 'Un site qui explique et convertit',
          text: 'Le site dit en une phrase ce que fait le produit, pour qui et à quel prix, puis mène vers l’essai, la démo ou la liste d’attente. Il est rapide, mesuré dès le lancement et construit pour le référencement Google dès le départ.',
        },
        {
          service: 'visibilite-ia-aeo-geo',
          title: 'Être recommandé par ChatGPT et les moteurs IA',
          text: 'Quand un prospect demande à ChatGPT ou à Perplexity quel outil choisir, la réponse cite des produits clairement décrits sur le web. Covartex structure vos pages produit, comparatifs et FAQ pour que les moteurs de réponse comprennent votre produit et sa cible.',
        },
      ],
      rules: {
        title: 'Ce qu’il faut verrouiller dès le départ',
        paragraphs: [
          'Certains sujets coûtent peu à régler au lancement et cher à rattraper lors d’une levée de fonds ou d’un rachat, quand le produit passe en due diligence.',
          'La propriété du code d’abord. En France comme dans de nombreux pays, le code écrit par un prestataire n’appartient pas automatiquement à son client : le contrat doit prévoir une cession écrite des droits. Chez Covartex, le code, les contenus et les comptes livrés appartiennent au client.',
          'Les données personnelles ensuite. Dès que vous proposez votre produit à des personnes situées dans l’Union européenne, le RGPD s’applique, même si votre société est établie ailleurs. Il n’impose pas d’héberger en Europe, mais tout transfert de données hors de l’UE doit être encadré ; un hébergement européen simplifie souvent la conformité.',
          'Avant le premier client, vérifiez au minimum ces points :',
        ],
        list: [
          'Les comptes clés à votre nom : nom de domaine, hébergement, dépôt de code, stores, paiement, fournisseurs d’IA.',
          'Les documents RGPD de base : politique de confidentialité, registre des traitements, contrats de sous-traitance (DPA), y compris avec les fournisseurs d’IA.',
          'Les bases de la sécurité : authentification solide, accès limités, secrets hors du code, sauvegardes testées, dépendances à jour.',
          'Une documentation qui permet à une autre équipe de reprendre le produit : installation, architecture, déploiement.',
        ],
      },
      faqs: [
        {
          q: 'Combien coûte un MVP ?',
          a: 'Chez Covartex, le MVP d’un SaaS ou d’une application mobile démarre à partir de 8 000 €, et une solution IA à partir de 3 000 €. Le prix final dépend du périmètre : parcours, intégrations, plateformes. Covartex envoie un devis détaillé et gratuit sous 48 h, sans engagement.',
        },
        {
          q: 'Faut-il un CTO pour lancer un SaaS ?',
          a: 'Non, un fondateur non technique peut lancer un SaaS sans CTO, à condition de travailler avec une équipe qui explique ses choix et lui laisse la propriété du code. Covartex assigne un chef de projet dédié, fait une démo à chaque sprint et documente le code pour qu’un futur CTO puisse le reprendre.',
        },
        {
          q: 'Combien de temps faut-il pour développer un MVP ?',
          a: 'Un MVP bien cadré se développe en quelques semaines, pas en plusieurs mois. Covartex travaille par sprints de deux semaines avec une démo à chaque fin de sprint, et le délai précis de votre MVP figure dans le devis.',
        },
        {
          q: 'À qui appartient le code de mon application ?',
          a: 'Avec Covartex, le code, les contenus et les comptes livrés appartiennent à la startup cliente : dépôt de code, hébergement, nom de domaine et comptes des stores sont à votre nom. Quel que soit votre prestataire, vérifiez que le contrat prévoit une cession écrite des droits.',
        },
        {
          q: 'Comment ajouter de l’IA à un SaaS sans faire exploser les coûts ?',
          a: 'Pour ajouter de l’IA à un SaaS sans dérive de coûts, il faut choisir le modèle adapté à chaque tâche, plafonner la consommation par utilisateur et réutiliser les réponses déjà calculées. Covartex mesure le coût par requête dès le prototype et intègre ces limites au produit.',
        },
        {
          q: 'Comment faire recommander ma startup par ChatGPT ?',
          a: 'Une startup est recommandée par ChatGPT et les moteurs IA quand son produit est décrit clairement et de façon cohérente sur le web. Covartex structure les pages produit, comparatifs et FAQ des startups pour que les IA comprennent ce que fait le produit. Personne ne peut garantir une citation, mais ces bases augmentent les chances d’être mentionné.',
        },
      ],
    },
    en: {
      name: 'Startups & SaaS',
      title: 'Product Development for Startups: SaaS, Apps and AI',
      metaTitle: 'MVP Development for Startups: SaaS, Mobile Apps & AI',
      metaDescription:
        'Covartex builds your startup’s MVP: a SaaS, mobile app or AI product shipped in two-week sprints, with code you own, plus the website, SEO and AI visibility.',
      promise:
        'An MVP focused on your product’s core value, shipped in weeks, with code and accounts in your name from day one.',
      cardText: 'MVP shipped in sprints, code you own, AI under control, a product people find.',
      summary: [
        'Covartex designs and builds MVPs for startups and founders, technical or not, anywhere in the world and in English or French: a SaaS, a mobile app or an AI product.',
        'Covartex scopes a startup’s MVP to what carries the product’s value and ships it in weeks, in two-week sprints with a demo at the end of each one.',
        'At Covartex, a startup’s code, accounts and access are in its own name from day one, which simplifies fundraising and due diligence.',
        'Covartex adds AI to startup products with cost control and data privacy built in, then creates the website, SEO and AI visibility that get the product found and recommended.',
      ],
      challenges: [
        {
          title: 'Scope that keeps growing',
          description:
            'Every idea feels essential before launch. The MVP gets heavier, the date slips and the budget goes into features nobody has asked for.',
        },
        {
          title: 'A founder without a tech team',
          description:
            'Without a CTO, it is hard to judge a quote, pick a stack or tell whether work is moving. The risk: depending on a vendor you can neither check nor leave.',
        },
        {
          title: 'AI that is costly or unpredictable',
          description:
            'An AI demo impresses quickly. In production, API costs, made-up answers and data sent to third parties become real issues.',
        },
        {
          title: 'A good product nobody finds',
          description:
            'Without a clear website or a presence in AI answers, the product depends on paid ads or the founder’s network.',
        },
      ],
      solutions: [
        {
          service: 'saas-sur-mesure',
          title: 'A SaaS built around its core value, in sprints',
          text: 'Covartex starts from the problem your product solves and keeps only the path that proves it in the MVP: sign-up, core feature, payment if needed. Development runs in two-week sprints, with a demo at the end of each one so you decide what comes next based on working software.',
        },
        {
          service: 'applications-mobiles',
          title: 'An iOS and Android app to test the market',
          text: 'When your product lives on the phone, Covartex builds the iOS and Android app and publishes it from App Store and Google Play accounts in your name. Depending on the product, a single codebase for both platforms lowers the cost of launch.',
        },
        {
          service: 'solutions-ia',
          title: 'AI features that hold up in production',
          text: 'An in-product assistant, search across your documents (RAG) or automation: Covartex picks the model for each task and sets per-user cost limits from the start. Your customers’ data goes only to the providers that need it, with settings that exclude it from model training where the provider allows.',
        },
        {
          service: 'creation-site-web',
          title: 'A website that explains and converts',
          text: 'The site says in one sentence what the product does, who it is for and what it costs, then leads to a trial, a demo or a waitlist. It is fast, tracked from launch and built for Google search from day one.',
        },
        {
          service: 'visibilite-ia-aeo-geo',
          title: 'Get recommended by ChatGPT and AI search',
          text: 'When a prospect asks ChatGPT or Perplexity which tool to use, the answer cites products that are clearly described across the web. Covartex structures your product pages, comparisons and FAQs so answer engines understand what your product does and who it serves.',
        },
      ],
      rules: {
        title: 'What to lock down from day one',
        paragraphs: [
          'Some issues are cheap to settle at launch and expensive to fix later, when investors or an acquirer examine the product during due diligence.',
          'Code ownership comes first. In France and many other countries, code written by an outside contractor does not automatically belong to the client: the contract needs a written assignment of rights. At Covartex, the code, content and accounts delivered belong to the client.',
          'Personal data comes next. If you offer your product to people in the European Union, the GDPR applies, even if your company is based elsewhere. It does not require EU hosting, but transfers of data outside the EU need appropriate safeguards; hosting in the EU often makes compliance simpler.',
          'Before your first customer, check at least the following:',
        ],
        list: [
          'Key accounts in your name: domain, hosting, code repository, app stores, payments, AI providers.',
          'Basic GDPR paperwork: privacy policy, record of processing, data processing agreements (DPA) with vendors, AI providers included.',
          'Security basics: strong authentication, least-privilege access, secrets kept out of the code, tested backups, up-to-date dependencies.',
          'Documentation that lets another team take over the product: setup, architecture, deployment.',
        ],
      },
      faqs: [
        {
          q: 'How much does an MVP cost?',
          a: 'At Covartex, a SaaS or mobile app MVP starts from €8,000, and an AI solution from €3,000. The final price depends on scope: user flows, integrations and platforms. Covartex sends a free, detailed quote within 48 hours, with no commitment.',
        },
        {
          q: 'Do I need a CTO to launch a SaaS?',
          a: 'No. A non-technical founder can launch a SaaS without a CTO, provided they work with a team that explains its choices and leaves them owning the code. Covartex assigns one dedicated project lead, demos the product at every sprint and documents the code so a future CTO can take it over.',
        },
        {
          q: 'How long does it take to build an MVP?',
          a: 'A well-scoped MVP takes weeks to build, not months. Covartex works in two-week sprints with a demo at the end of each one, and the exact timeline for your MVP is set out in the quote.',
        },
        {
          q: 'Who owns the code of my app?',
          a: 'With Covartex, the code, content and accounts delivered belong to the client startup: code repository, hosting, domain and app store accounts are in your name. Whoever you hire, check that the contract includes a written assignment of rights.',
        },
        {
          q: 'How do you add AI to a SaaS without runaway costs?',
          a: 'To add AI to a SaaS without runaway costs, match the model to each task, cap usage per user and reuse answers that have already been computed. Covartex measures the cost per request from the prototype stage and builds those limits into the product.',
        },
        {
          q: 'How do I get ChatGPT to recommend my startup?',
          a: 'ChatGPT and other AI engines recommend a startup when its product is described clearly and consistently on its own site and across the web. Covartex structures startups’ product pages, comparisons and FAQs so AI systems understand what the product does and who it is for. Nobody can guarantee a citation, but these foundations improve the odds of being mentioned.',
        },
      ],
    },
  },
};

export default industry;
