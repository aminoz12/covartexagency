import type { IndustryDef } from '@/lib/industries';

const industry: IndustryDef = {
  slug: 'organismes-formation',
  tone: 'apps',
  services: ['saas-sur-mesure', 'automatisation-processus', 'creation-site-web', 'solutions-ia'],
  projects: ['organisme-formation-saas-gestion'],
  content: {
    fr: {
      name: 'Organismes de formation',
      title: 'Agence web et logiciel pour organismes de formation',
      metaTitle: 'Logiciel et site web pour organismes de formation',
      metaDescription:
        'Covartex crée les outils des organismes de formation : plateforme de gestion, émargement et preuves Qualiopi, automatisations, site qui inscrit et assistant IA.',
      promise:
        'Inscriptions, convocations, émargement, attestations et preuves Qualiopi dans un seul outil, et un site qui transforme vos pages de formation en inscriptions.',
      cardText: 'Plateforme de gestion, preuves Qualiopi et un site qui remplit vos sessions.',
      summary: [
        'Covartex développe les plateformes de gestion des organismes de formation : inscriptions, convocations, émargement, attestations et documents réglementaires au même endroit.',
        'Pour un organisme de formation certifié Qualiopi, les outils de Covartex conservent au fil de l’eau les preuves demandées à l’audit : présence, évaluations, satisfaction, suivi de chaque stagiaire.',
        'Covartex automatise aussi la chaîne administrative des organismes de formation, crée des sites qui transforment les pages de formation en inscriptions et installe des assistants IA pour les questions des apprenants.',
        'Covartex travaille à distance avec les organismes de formation, les CFA et les formateurs indépendants qui se structurent, répond sous 24 h et envoie un devis détaillé et gratuit sous 48 h.',
      ],
      challenges: [
        {
          title: 'Des tableurs et du copier-coller',
          description:
            'Catalogue dans un fichier, inscriptions dans un autre, convocations rédigées à la main : chaque session impose les mêmes saisies plusieurs fois, avec autant de risques d’erreur.',
        },
        {
          title: 'Des preuves éparpillées avant l’audit',
          description:
            'Émargements papier, questionnaires dans un outil, échanges avec les stagiaires dans les mails : rassembler les preuves pour l’auditeur Qualiopi prend des jours.',
        },
        {
          title: 'Des financeurs aux exigences différentes',
          description:
            'OPCO, CPF, France Travail, entreprises : chaque financeur a ses documents et ses justificatifs. Un dossier incomplet retarde le paiement.',
        },
        {
          title: 'Un site qui informe mais n’inscrit pas',
          description:
            'Des fiches sans dates, sans prix, sans bouton d’inscription : le visiteur repart au lieu de réserver, et vos formations restent absentes des recherches qui comptent.',
        },
      ],
      solutions: [
        {
          service: 'saas-sur-mesure',
          title: 'Une plateforme de gestion à votre mesure',
          text: 'Covartex construit une plateforme qui suit chaque session de bout en bout : catalogue, inscriptions, convocations, émargement électronique, évaluations, attestations et facturation. Elle épouse votre fonctionnement, en présentiel, à distance ou en apprentissage, et se construit par sprints avec une démo à chaque étape.',
        },
        {
          service: 'automatisation-processus',
          title: 'Une chaîne administrative qui tourne seule',
          text: 'Une inscription validée déclenche la convocation, le rappel de la veille, le questionnaire de fin de formation et l’attestation, sans ressaisie. Les documents sont générés depuis vos modèles et rangés dans le dossier du stagiaire, et vos outils (agenda, comptabilité, signature électronique) sont reliés entre eux.',
        },
        {
          service: 'creation-site-web',
          title: 'Un site qui remplit vos sessions',
          text: 'Chaque formation a sa page : objectifs, prérequis, programme, prix, prochaines dates, financements et inscription en ligne. Ces pages visent les recherches de vos futurs stagiaires, comme « formation + métier + ville », et accueillent les informations que Qualiopi demande de publier sur votre offre.',
        },
        {
          service: 'solutions-ia',
          title: 'Un assistant IA pour les questions des apprenants',
          text: 'Un assistant alimenté par vos programmes, votre règlement intérieur et vos réponses habituelles traite à toute heure les questions courantes : horaires, accès, prérequis, financement. Ce qu’il ne sait pas traiter remonte à votre équipe.',
        },
      ],
      rules: {
        title: 'Qualiopi, NDA, BPF : ce que vos outils doivent prouver',
        paragraphs: [
          'Depuis le 1er janvier 2022, la certification Qualiopi est obligatoire pour accéder aux fonds publics ou mutualisés de la formation : OPCO, CPF, France Travail, Régions, État. Elle est délivrée par un organisme certificateur après audit, vérifiée par un audit de surveillance et renouvelée tous les trois ans.',
          'L’auditeur juge sur pièces : émargements, évaluations, satisfaction, réclamations, traçabilité du parcours de chaque stagiaire. Selon votre situation, par exemple une activité financée uniquement par des entreprises sur leurs fonds propres, la certification n’est pas toujours requise.',
          'Qualiopi ou non, un organisme de formation doit déposer une déclaration d’activité auprès de la DREETS pour obtenir son numéro (NDA), puis transmettre chaque année un bilan pédagogique et financier (BPF). Des données tenues à jour toute l’année (heures, stagiaires, financeurs, chiffre d’affaires par financement) rendent ce bilan simple à remplir.',
          'Covartex n’est pas un organisme certificateur et ne délivre pas Qualiopi. Covartex construit des outils qui produisent ces preuves au fil de l’eau, horodatées et rangées par session, pour qu’un audit se prépare en un export :',
        ],
        list: [
          'Émargement électronique par séance ou par demi-journée, horodaté, signé par le stagiaire et le formateur.',
          'Positionnement à l’entrée et évaluation des acquis à la sortie, dans le dossier de chaque stagiaire.',
          'Questionnaires de satisfaction à chaud et à froid, avec suivi des résultats.',
          'Registre des réclamations et des actions d’amélioration.',
          'Historique des documents envoyés, dont le certificat de réalisation, et exports pour les financeurs et le BPF.',
        ],
      },
      faqs: [
        {
          q: 'Quel logiciel pour un organisme de formation certifié Qualiopi ?',
          a: 'Un organisme de formation certifié Qualiopi a besoin d’un logiciel qui gère inscriptions, convocations, émargement, évaluations et attestations, et qui conserve ces preuves pour l’audit. Les logiciels du marché conviennent à beaucoup d’organismes. Covartex développe une plateforme sur mesure quand votre fonctionnement (apprentissage, plusieurs sites, financements mixtes, intégrations) ne rentre pas dans un outil standard.',
        },
        {
          q: 'Combien coûte une plateforme de gestion sur mesure pour un organisme de formation ?',
          a: 'Chez Covartex, une plateforme de gestion sur mesure pour un organisme de formation démarre à partir de 8 000 €. Le prix dépend du nombre de modules, des intégrations et du volume de sessions. Covartex envoie un devis détaillé et gratuit sous 48 h, sans engagement.',
        },
        {
          q: 'L’émargement électronique est-il accepté pour Qualiopi et par les financeurs ?',
          a: 'L’émargement électronique est largement utilisé par les organismes de formation, à condition de garantir l’identité du signataire, la date et l’heure de signature et l’intégrité du document. Les exigences précises varient selon les financeurs : vérifiez-les avec vos OPCO. Covartex conçoit des modules d’émargement qui horodatent chaque signature et en gardent une trace exploitable en audit.',
        },
        {
          q: 'Covartex peut-il nous faire obtenir la certification Qualiopi ?',
          a: 'Non, Covartex n’est ni un organisme certificateur ni un cabinet de conseil Qualiopi. Covartex construit les outils qui produisent et conservent les preuves demandées à l’audit ; la démarche de certification reste la vôtre.',
        },
        {
          q: 'Comment un organisme de formation peut-il obtenir plus d’inscriptions grâce à son site ?',
          a: 'Un organisme de formation obtient plus d’inscriptions quand chaque formation a une page complète : programme, prix, dates, financements et inscription en ligne. Ces pages doivent viser les recherches réelles des futurs stagiaires pour apparaître sur Google. Covartex crée ce type de site à partir de 1 500 €.',
        },
        {
          q: 'Un assistant IA peut-il répondre aux questions des stagiaires d’un organisme de formation ?',
          a: 'Oui, un assistant IA alimenté par vos programmes et votre règlement intérieur répond aux questions courantes des stagiaires : horaires, accès, prérequis, financement. Covartex le configure pour passer la main à votre équipe quand il ne sait pas répondre. Les solutions IA de Covartex démarrent à partir de 3 000 €.',
        },
      ],
    },
    en: {
      name: 'Training Providers',
      title: 'Software and Websites for Training Providers in France',
      metaTitle: 'Software & Websites for Training Providers in France',
      metaDescription:
        'Covartex builds the tools French training providers need: a platform for enrolment, attendance and Qualiopi evidence, automation, a website and AI assistants.',
      promise:
        'Enrolment, joining instructions, attendance, certificates and Qualiopi evidence in one tool, plus a website that turns course pages into sign-ups.',
      cardText: 'A management platform, Qualiopi evidence and a website that fills your sessions.',
      summary: [
        'Covartex builds management platforms for French training providers: enrolment, joining instructions, attendance, certificates and regulatory documents in one place.',
        'For a training provider certified under Qualiopi, the French quality standard required for public training funding, Covartex tools keep the evidence auditors ask for: attendance, assessments, satisfaction and a traceable record for every learner.',
        'Covartex also automates the admin chain of training providers, builds websites that turn course pages into enrolments and sets up AI assistants for learners’ questions.',
        'Covartex works remotely with training providers, apprenticeship centres (CFA) and independent trainers who are scaling up, replies within 24 hours and sends a free, detailed quote within 48 hours.',
      ],
      challenges: [
        {
          title: 'Spreadsheets and copy-paste',
          description:
            'Catalogue in one file, enrolments in another, joining instructions written by hand: every session means typing the same data several times, with as many chances for error.',
        },
        {
          title: 'Evidence scattered before the audit',
          description:
            'Paper attendance sheets, surveys in one tool, learner exchanges buried in email: pulling evidence together for the Qualiopi auditor takes days.',
        },
        {
          title: 'Funders with different requirements',
          description:
            'Sector skills bodies (OPCO), individual training accounts (CPF), the public employment service France Travail, employers: each has its own documents and proof. An incomplete file delays payment.',
        },
        {
          title: 'A website that informs but does not enrol',
          description:
            'Course pages with no dates, no price and no sign-up button: visitors leave instead of booking a seat, and your courses stay invisible in the searches that matter.',
        },
      ],
      solutions: [
        {
          service: 'saas-sur-mesure',
          title: 'A management platform built around you',
          text: 'Covartex builds a platform that follows every session from start to finish: catalogue, enrolment, joining instructions, electronic attendance, assessments, certificates and invoicing. It fits the way you work, in person, online or through apprenticeships, and is built in sprints with a demo at each stage.',
        },
        {
          service: 'automatisation-processus',
          title: 'An admin chain that runs itself',
          text: 'A confirmed enrolment triggers the joining instructions, the day-before reminder, the end-of-course survey and the certificate, with no re-typing. Documents are generated from your templates and filed in each learner’s record, and your existing tools (calendar, accounting, e-signature) are connected.',
        },
        {
          service: 'creation-site-web',
          title: 'A website that fills your sessions',
          text: 'Every course gets its own page: objectives, prerequisites, programme, price, upcoming dates, funding options and online enrolment. These pages target what future learners actually search, such as “course + job + city”, and carry the information Qualiopi requires you to publish about your offer.',
        },
        {
          service: 'solutions-ia',
          title: 'An AI assistant for learners’ questions',
          text: 'An assistant fed with your programmes, internal rules and usual answers handles routine questions at any hour: schedules, access, prerequisites, funding. Anything it cannot handle goes to your team.',
        },
      ],
      rules: {
        title: 'Qualiopi, NDA, BPF: what your tools need to prove',
        paragraphs: [
          'Since 1 January 2022, Qualiopi certification has been mandatory in France for training providers that want public or pooled funding: sector skills bodies (OPCO), individual training accounts (CPF), France Travail, regions and the State. It is awarded by a certification body after an audit, checked again by a surveillance audit and renewed every three years.',
          'Auditors judge on evidence: attendance, assessments, satisfaction, complaints and a traceable record of each learner’s journey. Depending on your situation, for example if your courses are paid for only by companies from their own budgets, certification is not always required.',
          'Certified or not, French training providers must file a declaration of activity with the regional labour authority (DREETS) to get a registration number (NDA), then submit an annual educational and financial report (BPF). Data kept up to date all year (hours, learners, funders, revenue by funding source) makes that report simple to complete.',
          'Covartex is not a certification body and does not award Qualiopi. Covartex builds tools that produce this evidence as you go, time-stamped and filed by session, so preparing for an audit comes down to an export:',
        ],
        list: [
          'Electronic attendance per session or half-day, time-stamped and signed by learner and trainer.',
          'Entry assessments and end-of-course learning assessments in each learner’s record.',
          'Satisfaction surveys at the end of the course and some time later, with results tracked.',
          'A log of complaints and the improvements made in response.',
          'A history of documents sent, including certificates of completion, and exports for funders and the BPF.',
        ],
      },
      faqs: [
        {
          q: 'What software does a Qualiopi-certified training provider need?',
          a: 'A Qualiopi-certified training provider needs software that handles enrolment, joining instructions, attendance, assessments and certificates, and keeps that evidence ready for the audit. Off-the-shelf tools suit many providers. Covartex builds a custom platform when the way you operate (apprenticeships, several sites, mixed funding, integrations) does not fit a standard tool.',
        },
        {
          q: 'How much does a custom management platform for a training provider cost?',
          a: 'At Covartex, a custom management platform for a training provider starts from €8,000. The price depends on the number of modules, the integrations and the volume of sessions. Covartex sends a free, detailed quote within 48 hours, with no commitment.',
        },
        {
          q: 'Is electronic attendance accepted for Qualiopi and by funders?',
          a: 'Electronic attendance is widely used by French training providers, provided it guarantees the signer’s identity, the date and time of signing and the integrity of the record. Exact requirements vary by funder, so check them with your OPCO. Covartex builds attendance modules that time-stamp every signature and keep a usable trail for audits.',
        },
        {
          q: 'Can Covartex get us Qualiopi certified?',
          a: 'No. Covartex is neither a certification body nor a Qualiopi consultancy. Covartex builds the tools that produce and store the evidence auditors ask for; the certification process remains yours.',
        },
        {
          q: 'How can a training provider get more enrolments from its website?',
          a: 'A training provider gets more enrolments when every course has a complete page: programme, price, upcoming dates, funding options and online enrolment. Those pages must also target what future learners really search for to show up on Google. Covartex builds this kind of website from €1,500.',
        },
        {
          q: 'Can an AI assistant answer a training provider’s learner questions?',
          a: 'Yes. An AI assistant fed with your programmes and internal rules answers routine learner questions about schedules, access, prerequisites and funding. Covartex sets it up to hand over to your team when it cannot answer. Covartex AI solutions start from €3,000.',
        },
      ],
    },
  },
};

export default industry;
