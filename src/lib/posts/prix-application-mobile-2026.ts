import type { PostDef } from '@/lib/blog';

const post: PostDef = {
  slug: 'prix-application-mobile-2026',
  date: '2026-10-14',
  author: 'Covartex',
  relatedService: 'applications-mobiles',
  readingMinutes: 6,
  content: {
    fr: {
      title: 'Combien coûte une application mobile en 2026 ? Les vrais prix',
      description:
        'Combien coûte une application mobile en 2026 ? Les fourchettes de prix réelles, ce qui fait varier le devis, les coûts cachés et comment réduire le budget.',
      tags: ['Application mobile', 'Budget'],
      takeaways: [
        'En 2026, comptez environ 8 000 à 15 000 € pour une application mobile simple développée sur mesure, et 15 000 à 50 000 € pour une application métier avec back-office.',
        'Le prix d’une application dépend surtout du nombre d’écrans et de fonctionnalités, du back-office, des intégrations avec vos outils, du paiement, du mode hors ligne et du choix entre natif et cross-platform.',
        'Aux coûts de développement s’ajoutent des coûts récurrents : 99 USD par an pour publier sur l’App Store, 25 USD une seule fois pour Google Play, l’hébergement du back-office et une maintenance souvent estimée à 15 à 20 % du coût de développement par an.',
        'Pour réduire le budget d’une application, lancez d’abord une version limitée aux fonctions essentielles (MVP), choisissez le cross-platform (React Native ou Flutter) et envisagez une PWA quand l’usage est simple.',
        'Une première version utilisable d’une application mobile demande en général 6 à 10 semaines de développement, hors validation par les stores.',
      ],
      intro: [
        '« Combien coûte une application ? » La réponse honnête est : ça dépend. Mais ça dépend de critères précis, que l’on peut lister et chiffrer avant d’écrire une ligne de code.',
        'Voici les fourchettes réalistes en 2026, ce qui les fait bouger, les coûts que l’on oublie souvent, et comment lancer une application sans engager tout le budget d’un coup.',
      ],
      sections: [
        {
          heading: 'Quel est le prix d’une application mobile en 2026 ?',
          paragraphs: [
            'Voici les fourchettes pour une application professionnelle sur mesure, publiée sur iOS et Android. Elles comprennent la conception, le design, le développement, les tests et la publication sur les stores :',
          ],
          list: [
            'Application simple (quelques écrans, connexion, contenus, formulaires, notifications) : environ 8 000 à 15 000 €.',
            'Application métier avec back-office (comptes utilisateurs, gestion des données, rôles, tableaux de bord, intégrations) : 15 000 à 50 000 €.',
            'Au-delà (marketplace, temps réel, gros volumes, fortes contraintes de sécurité) : le budget peut dépasser 50 000 € et se chiffre après un cadrage détaillé.',
          ],
        },
        {
          heading: 'Qu’est-ce qui fait varier le prix d’une application ?',
          paragraphs: [
            'Le coût d’une application, c’est d’abord du temps de conception et de développement. Tout ce qui ajoute des écrans, des règles ou des connexions ajoute du temps, donc du budget.',
          ],
          list: [
            'Le nombre d’écrans et de fonctionnalités : chaque parcours (inscription, commande, réservation, messagerie) se conçoit, se développe et se teste.',
            'Le back-office : l’interface où votre équipe gère utilisateurs, contenus et commandes. C’est souvent une part importante du budget.',
            'Les intégrations : CRM, ERP, logiciel de caisse ou de facturation. Un outil avec une API bien documentée se connecte vite ; un logiciel ancien sans API coûte plus cher.',
            'Le mode hors ligne : travailler sans réseau, puis synchroniser sans perdre ni écraser de données, demande une vraie logique technique.',
            'Le paiement : paiement par carte, abonnement ou achat intégré, avec les règles propres à chaque store.',
            'Le design : une interface soignée à partir de composants standards coûte moins qu’une identité et des animations entièrement sur mesure.',
            'Le choix technique : deux applications natives coûtent plus cher qu’un code commun aux deux plateformes.',
          ],
        },
        {
          heading: 'Native ou cross-platform : quelle différence de prix ?',
          paragraphs: [
            'Une application native est développée deux fois : en Swift pour iOS, en Kotlin pour Android. Une application cross-platform, avec React Native ou Flutter, partage l’essentiel de son code entre les deux. Pour la plupart des projets, c’est moins cher à construire et à faire évoluer, car chaque correction et chaque nouvelle fonction se font une seule fois.',
            'Le natif reste pertinent quand l’application exige des performances très élevées (jeu, traitement vidéo, réalité augmentée) ou un accès poussé à des fonctions spécifiques du téléphone. Le bon choix se fait à partir de vos fonctionnalités, pas d’une préférence technique.',
          ],
        },
        {
          heading: 'Quels sont les coûts cachés d’une application mobile ?',
          paragraphs: [
            'Le développement n’est que le début. Prévoyez dès le départ les coûts qui reviennent chaque année :',
          ],
          list: [
            'Le programme Apple Developer : 99 USD par an, ou l’équivalent en monnaie locale, pour publier sur l’App Store.',
            'Le compte développeur Google Play : 25 USD, payés une seule fois.',
            'L’hébergement du back-office, de la base de données et des notifications : souvent quelques dizaines d’euros par mois au départ, davantage quand l’usage grandit.',
            'Les services tiers facturés à l’usage : SMS, e-mails, cartographie, paiement.',
            'Les commissions des stores sur les achats numériques réalisés dans l’application (abonnements, contenus), dont le taux dépend de la plateforme et de votre situation.',
            'La maintenance : corrections, sécurité, compatibilité avec les nouvelles versions d’iOS et d’Android. Une règle courante consiste à prévoir 15 à 20 % du coût de développement par an.',
          ],
        },
        {
          heading: 'Pourquoi la maintenance d’une application est-elle indispensable ?',
          paragraphs: [
            'Apple et Google publient chaque année une nouvelle version majeure de leur système, et les stores exigent régulièrement des outils de développement récents pour accepter les mises à jour. Une application que personne ne maintient finit par mal fonctionner sur les nouveaux téléphones, et les stores peuvent limiter sa disponibilité.',
            'La maintenance couvre aussi le suivi des plantages, les correctifs de sécurité et les petites évolutions demandées par les utilisateurs. Mieux vaut la budgéter dès le devis initial que la découvrir au premier incident.',
          ],
        },
        {
          heading: 'Comment réduire le coût d’une application mobile ?',
          list: [
            'Commencez par un MVP : une première version limitée aux 3 à 5 fonctions qui comptent vraiment. Le reste attend les retours de vrais utilisateurs.',
            'Choisissez le cross-platform, sauf besoin réel de natif.',
            'Validez un prototype cliquable avant de développer : modifier une maquette coûte beaucoup moins cher que modifier du code.',
            'Appuyez-vous sur des briques existantes pour la connexion, la base de données ou les notifications (Firebase, Supabase) plutôt que de tout développer.',
            'Envisagez une PWA quand l’usage est simple.',
            'Fournissez tôt vos contenus et vos règles métier : les allers-retours tardifs coûtent cher.',
          ],
        },
        {
          heading: 'Faut-il commencer par une PWA plutôt qu’une application ?',
          paragraphs: [
            'Une PWA (application web progressive) est un site web qui s’installe sur l’écran d’accueil comme une application, sans passer par les stores. Elle coûte généralement moins cher, se met à jour instantanément et fonctionne sur tout appareil équipé d’un navigateur récent.',
            'Elle convient bien à un catalogue, un espace client, un outil interne ou une prise de rendez-vous. Elle a en revanche un accès plus limité aux fonctions du téléphone, surtout sur iPhone, et n’apparaît pas dans l’App Store. Si votre public vous cherche dans les stores, ou si vous avez besoin du Bluetooth ou de la géolocalisation en arrière-plan, une vraie application reste préférable.',
          ],
        },
        {
          heading: 'Combien de temps faut-il pour développer une application ?',
          paragraphs: [
            'Comptez en général 6 à 10 semaines pour une première version utilisable (MVP), après le cadrage et la validation du prototype. Une application métier complète se construit ensuite par étapes, avec des versions de test installables à chaque sprint.',
            'Prévoyez aussi la validation par Apple et Google avant la publication, qui prend souvent de quelques heures à quelques jours, davantage si l’application est refusée et doit être corrigée. Sur Google Play, les comptes personnels récents doivent d’abord passer par une phase de test fermé : publiez plutôt sous un compte au nom de votre entreprise, qui vous appartient.',
          ],
        },
      ],
      conclusion: [
        'Le bon budget n’est pas le plus bas : c’est celui qui finance les fonctions utiles, puis la maintenance qui garde l’application en état de marche. Une première version bien cadrée, testée par de vrais utilisateurs, coûte moins cher qu’une application complète que personne n’ouvre.',
        'Si vous avez un projet, décrivez-nous en quelques lignes ce que l’application doit permettre et pour qui. Nous vous répondons avec un devis gratuit et détaillé, poste par poste.',
      ],
      faqs: [
        {
          q: 'Quel est le prix d’une application mobile simple ?',
          a: 'Environ 8 000 à 15 000 € pour une application simple sur mesure, publiée sur iOS et Android. Une application métier avec back-office se situe plutôt entre 15 000 et 50 000 €.',
        },
        {
          q: 'Combien coûte la maintenance d’une application ?',
          a: 'Une règle courante consiste à prévoir 15 à 20 % du coût de développement par an, pour les corrections, la sécurité et la compatibilité avec les nouvelles versions d’iOS et d’Android. L’hébergement et les services tiers s’y ajoutent.',
        },
        {
          q: 'Combien coûte la publication sur l’App Store et Google Play ?',
          a: 'Apple facture 99 USD par an pour le programme Apple Developer, Google 25 USD une seule fois pour un compte développeur Google Play. Des commissions peuvent s’appliquer sur les achats numériques réalisés dans l’application.',
        },
        {
          q: 'Une application cross-platform est-elle moins chère ?',
          a: 'En général oui, car un seul code sert à iOS et à Android, pour le développement comme pour les évolutions. Le natif se justifie surtout pour des besoins de performance élevés ou des fonctions très spécifiques du téléphone.',
        },
        {
          q: 'À qui appartient le code de l’application ?',
          a: 'Cela dépend du contrat : vérifiez avant de signer que le code source, les comptes des stores et les données vous reviennent. Sans cela, changer de prestataire devient difficile et coûteux.',
        },
      ],
    },
    en: {
      title: 'How Much Does a Mobile App Cost in 2026? Real Prices',
      description:
        'How much does a mobile app cost in 2026? Real price ranges, what drives the quote, the hidden and recurring costs, and practical ways to cut the budget.',
      tags: ['Mobile app', 'Budget'],
      takeaways: [
        'In 2026, expect to pay around €8,000 to €15,000 for a simple custom mobile app, and €15,000 to €50,000 for a business app with a back-office.',
        'The cost of a mobile app depends mainly on the number of screens and features, the back-office, integrations with your tools, payments, offline mode and the choice between native and cross-platform.',
        'On top of the build come recurring costs: 99 USD a year to publish on the App Store, a one-time 25 USD for Google Play, back-office hosting, and maintenance often budgeted at 15 to 20% of the build cost per year.',
        'To cut the cost of an app, launch a first version limited to the essential features (an MVP), build cross-platform with React Native or Flutter, and consider a PWA when the use case is simple.',
        'A first usable version of a mobile app generally takes 6 to 10 weeks of development, not counting app store review.',
      ],
      intro: [
        '“How much does an app cost?” The honest answer is: it depends. But it depends on specific factors that can be listed and priced before a single line of code is written.',
        'Here are realistic ranges for 2026, what moves them, the costs people tend to forget, and how to launch an app without committing the whole budget at once.',
      ],
      sections: [
        {
          heading: 'How much does a mobile app cost in 2026?',
          paragraphs: [
            'These are the ranges for a professional, custom app published on iOS and Android. They include scoping, design, development, testing and store publication:',
          ],
          list: [
            'Simple app (a few screens, login, content, forms, notifications): around €8,000 to €15,000.',
            'Business app with a back-office (user accounts, data management, roles, dashboards, integrations): €15,000 to €50,000.',
            'Beyond that (marketplaces, real-time features, high volumes, strict security requirements): the budget can exceed €50,000 and is priced after detailed scoping.',
          ],
        },
        {
          heading: 'What drives the cost of an app?',
          paragraphs: [
            'The cost of an app is, first of all, design and development time. Anything that adds screens, rules or connections adds time, and therefore budget.',
          ],
          list: [
            'Number of screens and features: every user flow (sign-up, ordering, booking, messaging) has to be designed, built and tested.',
            'The back-office: the interface where your team manages users, content and orders. It is often a large share of the budget.',
            'Integrations: CRM, ERP, point-of-sale or invoicing software. A tool with a well-documented API connects quickly; legacy software without one costs more.',
            'Offline mode: working without a connection, then syncing without losing or overwriting data, takes real engineering.',
            'Payments: card payments, subscriptions or in-app purchases, each with the rules of its store.',
            'Design: a polished interface built from standard components costs less than a fully custom look with bespoke animations.',
            'Technical approach: two native apps cost more than one codebase shared across both platforms.',
          ],
        },
        {
          heading: 'Native vs cross-platform: how much difference does it make?',
          paragraphs: [
            'A native app is built twice: in Swift for iOS and in Kotlin for Android. A cross-platform app, built with React Native or Flutter, shares most of its code between the two. For most projects that is cheaper to build and to evolve, because every fix and every new feature is done once.',
            'Native still makes sense when the app needs very high performance (games, video processing, augmented reality) or deep access to specific phone features. The right choice comes from your features, not from a technical preference.',
          ],
        },
        {
          heading: 'What are the hidden costs of a mobile app?',
          paragraphs: [
            'The build is only the start. Plan from day one for the costs that come back every year:',
          ],
          list: [
            'The Apple Developer Program: 99 USD a year, or the local-currency equivalent, to publish on the App Store.',
            'A Google Play developer account: 25 USD, paid once.',
            'Hosting for the back-office, database and notifications: often a few dozen euros a month at first, more as usage grows.',
            'Third-party services billed by usage: SMS, e-mail, maps, payments.',
            'Store commissions on digital purchases made inside the app (subscriptions, content), at a rate that depends on the platform and your situation.',
            'Maintenance: bug fixes, security, compatibility with new versions of iOS and Android. A common rule of thumb is 15 to 20% of the build cost per year.',
          ],
        },
        {
          heading: 'Why is app maintenance not optional?',
          paragraphs: [
            'Apple and Google release a major new version of their operating systems every year, and the stores regularly require recent development tools before they accept updates. An app nobody maintains ends up misbehaving on new phones, and the stores can restrict its availability.',
            'Maintenance also covers crash monitoring, security patches and the small improvements users ask for. It is better to budget for it in the initial quote than to discover it at the first incident.',
          ],
        },
        {
          heading: 'How can you reduce the cost of a mobile app?',
          list: [
            'Start with an MVP: a first version limited to the 3 to 5 features that really matter. Everything else waits for feedback from real users.',
            'Go cross-platform unless you have a genuine need for native.',
            'Validate a clickable prototype before development: changing a mock-up costs far less than changing code.',
            'Use existing building blocks for login, database and notifications (Firebase, Supabase) instead of building everything from scratch.',
            'Consider a PWA when the use case is simple.',
            'Provide your content and business rules early: late back-and-forth is expensive.',
          ],
        },
        {
          heading: 'Should you start with a PWA instead of an app?',
          paragraphs: [
            'A PWA (progressive web app) is a website that installs on the home screen like an app, without going through the stores. It is generally cheaper, updates instantly and runs on any device with a modern browser.',
            'It works well for a catalogue, a client area, an internal tool or a booking flow. On the other hand, it has more limited access to phone features, especially on iPhone, and it does not appear in the App Store. If your audience looks for you in the stores, or you need Bluetooth or background location, a real app is still the better choice.',
          ],
        },
        {
          heading: 'How long does it take to build a mobile app?',
          paragraphs: [
            'Allow 6 to 10 weeks for a first usable version (MVP), after scoping and prototype approval. A full business app is then built in stages, with installable test builds at every sprint.',
            'Also allow time for Apple and Google review before publication, often from a few hours to a few days, longer if the app is rejected and needs fixes. On Google Play, recently created personal accounts must first go through a closed testing phase: publish under an account in your company’s name instead, one that you own.',
          ],
        },
      ],
      conclusion: [
        'The right budget is not the lowest one: it is the one that pays for the features that matter, then for the maintenance that keeps the app working. A well-scoped first version, tested by real users, costs less than a complete app nobody opens.',
        'If you have a project in mind, tell us in a few lines what the app should do and who it is for. We will reply with a free, itemised quote.',
      ],
      faqs: [
        {
          q: 'How much does a simple mobile app cost?',
          a: 'Around €8,000 to €15,000 for a simple custom app published on iOS and Android. A business app with a back-office is more likely to fall between €15,000 and €50,000.',
        },
        {
          q: 'How much does app maintenance cost per year?',
          a: 'A common rule of thumb is 15 to 20% of the build cost per year, covering fixes, security and compatibility with new iOS and Android versions. Hosting and third-party services come on top.',
        },
        {
          q: 'How much does it cost to publish on the App Store and Google Play?',
          a: 'Apple charges 99 USD a year for the Apple Developer Program, and Google charges a one-time 25 USD for a Google Play developer account. Commissions may apply to digital purchases made inside the app.',
        },
        {
          q: 'Is a cross-platform app cheaper?',
          a: 'Generally yes, because one codebase serves both iOS and Android, for the initial build and for every update. Native is mainly justified by high performance needs or very specific phone features.',
        },
        {
          q: 'Who owns the app’s code?',
          a: 'It depends on the contract: before signing, check that the source code, the store accounts and the data belong to you. Without that, switching providers becomes difficult and expensive.',
        },
      ],
    },
  },
};

export default post;
