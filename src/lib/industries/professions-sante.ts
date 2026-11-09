import type { IndustryDef } from '@/lib/industries';

const industry: IndustryDef = {
  slug: 'professions-sante',
  tone: 'web',
  services: ['creation-site-web', 'referencement-google-seo', 'visibilite-ia-aeo-geo', 'automatisation-processus'],
  projects: ['cabinet-dentaire-site-seo-local'],
  content: {
    fr: {
      name: 'Professions de santé',
      title: 'Agence web pour cabinets médicaux, dentaires et paramédicaux',
      metaTitle: 'Site web et SEO pour cabinets médicaux et dentaires',
      metaDescription:
        'Covartex crée des sites pour médecins, dentistes et kinés : informations claires, SEO local et visibilité dans les IA, dans le respect de la déontologie.',
      promise:
        'Un site qui informe vos patients, vous fait trouver près de chez eux et allège l’accueil, dans le respect de votre déontologie.',
      cardText: 'Site informatif, SEO local et rappels automatisés, sans publicité.',
      summary: [
        'Covartex crée des sites web pour les cabinets médicaux, dentaires et paramédicaux qui informent les patients sans faire de publicité.',
        'Le site d’un cabinet de santé conçu par Covartex présente l’équipe, les soins proposés, les horaires, l’accès et un lien vers la prise de rendez-vous en ligne.',
        'Covartex travaille aussi le référencement local des professionnels de santé : fiche Google Business Profile, recherches du type « dentiste à Nantes » et réponses des assistants IA comme ChatGPT.',
        'Covartex automatise les tâches administratives des cabinets de santé, comme les rappels et les formulaires, en limitant les données de santé collectées et en respectant le RGPD.',
      ],
      challenges: [
        {
          title: 'Un accueil saturé par les mêmes questions',
          description:
            'Horaires, accès, documents à apporter, soins pratiqués : le téléphone sonne pour des informations qu’un site bien fait donnerait en quelques secondes.',
        },
        {
          title: 'Des patients qui ne vous trouvent pas',
          description:
            'Les nouveaux patients cherchent « kiné près de chez moi » sur Google, dans Maps ou auprès d’un assistant IA. Sans fiche Google complète ni site clair, le cabinet n’apparaît pas.',
        },
        {
          title: 'Une frontière fine entre informer et faire de la publicité',
          description:
            'Les codes de déontologie autorisent désormais la communication, mais en encadrent le contenu. Un prestataire qui les ignore peut proposer des témoignages de patients ou des comparaisons interdits.',
        },
        {
          title: 'Des données sensibles mal protégées',
          description:
            'Un formulaire qui recueille des symptômes, un outil d’envoi inadapté ou un tableur partagé peuvent exposer des données de santé. Le RGPD et l’hébergement certifié HDS s’appliquent.',
        },
      ],
      solutions: [
        {
          service: 'creation-site-web',
          title: 'Un site qui informe vos patients',
          text: 'Covartex crée pour votre cabinet un site sobre et rapide : praticiens et parcours, soins proposés, horaires, accès, tarifs et conventionnement, lien vers votre plateforme de rendez-vous. Les textes sont factuels, sans témoignages ni comparaisons, et vous les validez avant la mise en ligne. Création de site web à partir de 1 500 €.',
        },
        {
          service: 'referencement-google-seo',
          title: 'Apparaître dans les recherches locales',
          text: 'Covartex complète votre fiche Google Business Profile, crée une page par soin ou par spécialité et ajoute les données structurées qui décrivent le cabinet. Les patients de votre secteur vous trouvent quand ils cherchent un praticien près de chez eux.',
        },
        {
          service: 'visibilite-ia-aeo-geo',
          title: 'Être cité par ChatGPT et les assistants IA',
          text: 'Quand un patient demande à ChatGPT quel dentiste consulter dans sa ville, la réponse s’appuie sur des informations publiques claires et cohérentes. Covartex rend celles de votre cabinet faciles à reprendre : nom, adresse, spécialités, horaires et soins identiques partout, et des pages qui répondent directement aux questions des patients.',
        },
        {
          service: 'automatisation-processus',
          title: 'Moins d’administratif à l’accueil',
          text: 'Covartex automatise les rappels de rendez-vous, l’envoi des documents avant une première consultation et les réponses aux questions pratiques. Les flux transportent le moins possible de données de santé, avec des outils et un hébergement adaptés quand elles sont nécessaires.',
        },
      ],
      rules: {
        title: 'Ce que la déontologie et la loi imposent au site d’un cabinet',
        paragraphs: [
          'Depuis les décrets de décembre 2020, les médecins, les chirurgiens-dentistes et plusieurs autres professions de santé dotées d’un ordre peuvent communiquer au public des informations sur leurs compétences, leur parcours et leurs conditions d’exercice, y compris sur un site internet. La publicité commerciale reste exclue par leurs codes de déontologie : ces professions ne s’exercent pas comme un commerce. Le site d’un cabinet informe, il ne fait pas de publicité.',
          'Les règles précises varient selon votre ordre professionnel, et c’est lui qui fait référence. Covartex rédige les contenus dans ce cadre, et vous les validez avant leur publication. Les principaux points à respecter :',
        ],
        list: [
          'Une information loyale, honnête et vérifiable, qui n’induit pas le patient en erreur.',
          'Pas de témoignages de patients, ni de comparaison avec d’autres praticiens ou établissements.',
          'Pas d’incitation à des soins ou à des actes de prévention inutiles.',
          'Un hébergeur certifié HDS (hébergeur de données de santé) dès que des données de santé à caractère personnel sont hébergées pour votre compte.',
          'Le RGPD : les données de santé sont des données sensibles, à ne collecter que si c’est nécessaire, avec une information claire des patients.',
        ],
      },
      faqs: [
        {
          q: 'Un médecin a-t-il le droit d’avoir un site internet ?',
          a: 'Oui. Depuis les décrets de décembre 2020, un médecin peut présenter sur un site internet ses compétences, son parcours, ses conditions d’exercice et des informations pratiques. Le contenu doit rester loyal et informatif, sans témoignages de patients ni comparaison avec d’autres praticiens. Covartex crée des sites de cabinets médicaux dans ce cadre.',
        },
        {
          q: 'Combien coûte un site internet pour un cabinet dentaire ?',
          a: 'Chez Covartex, la création d’un site web pour un cabinet dentaire ou médical démarre à partir de 1 500 €. Le prix dépend du nombre de praticiens, de pages et de langues. Covartex envoie un devis détaillé et gratuit sous 48 h, sans engagement.',
        },
        {
          q: 'Un dentiste a-t-il le droit de faire de la publicité ?',
          a: 'Pas au sens commercial : le code de déontologie des chirurgiens-dentistes exclut l’exercice de la profession comme un commerce, mais il autorise depuis décembre 2020 l’information du public. Un dentiste peut donc présenter son cabinet, ses soins et ses horaires sur un site et sur Google. Covartex aide les cabinets dentaires à rester du côté de l’information.',
        },
        {
          q: 'Faut-il un hébergeur HDS pour le site d’un cabinet médical ?',
          a: 'Un hébergeur certifié HDS est obligatoire dès que des données de santé à caractère personnel sont hébergées pour le compte du cabinet. Un site purement informatif, qui renvoie la prise de rendez-vous vers une plateforme spécialisée, n’en stocke en général pas. Covartex conçoit les sites de santé pour éviter les collectes inutiles et choisit un hébergement adapté quand il en faut un.',
        },
        {
          q: 'Comment un kiné peut-il apparaître dans Google Maps ?',
          a: 'Un kinésithérapeute apparaît dans Google Maps grâce à une fiche Google Business Profile complète et vérifiée : catégorie exacte, adresse, horaires, photos du cabinet et lien vers le site. Des informations identiques sur le site et dans les annuaires renforcent cette fiche. Covartex prend en charge ce référencement local pour les professionnels de santé.',
        },
        {
          q: 'Comment être recommandé par ChatGPT quand un patient cherche un dentiste ?',
          a: 'ChatGPT et les autres assistants IA s’appuient sur des informations publiques claires et cohérentes : site du cabinet, fiche Google, annuaires. Covartex rend ces informations faciles à comprendre et à citer pour les cabinets de santé. Personne ne peut garantir une citation, mais un cabinet bien décrit en ligne a plus de chances d’être mentionné.',
        },
      ],
    },
    en: {
      name: 'Healthcare Practices',
      title: 'Web Agency for Medical, Dental and Allied Health Practices',
      metaTitle: 'Websites & Local SEO for Medical and Dental Practices',
      metaDescription:
        'Covartex builds websites for doctors, dentists and physiotherapists in France: clear information, local SEO and AI visibility, within healthcare ethics rules.',
      promise:
        'A website that informs your patients, helps them find you nearby and takes pressure off your front desk, within your professional ethics rules.',
      cardText: 'Informative website, local SEO and automated reminders, with no advertising.',
      summary: [
        'Covartex builds websites for medical, dental and allied health practices that inform patients without advertising.',
        'A healthcare practice website built by Covartex presents the team, the care offered, opening hours, directions and a link to online appointment booking.',
        'Covartex also handles local SEO for healthcare professionals: Google Business Profile, searches such as “dentist in Nantes” and answers from AI assistants like ChatGPT.',
        'Covartex automates admin tasks for healthcare practices, such as reminders and forms, while keeping the health data collected to a minimum and complying with the GDPR.',
      ],
      challenges: [
        {
          title: 'A front desk swamped by the same questions',
          description:
            'Opening hours, directions, what to bring, which treatments you provide: the phone rings for information a good website would give in seconds.',
        },
        {
          title: 'Patients who cannot find you',
          description:
            'New patients search for “physio near me” on Google, in Maps or with an AI assistant. Without a complete Google listing and a clear website, the practice does not show up.',
        },
        {
          title: 'A thin line between informing and advertising',
          description:
            'French codes of medical ethics now allow practitioners to communicate, but they regulate what is said. A provider unaware of them may suggest patient testimonials or comparisons that are not allowed.',
        },
        {
          title: 'Sensitive data at risk',
          description:
            'A form that asks for symptoms, an unsuitable messaging tool or a shared spreadsheet can expose health data. The GDPR and France’s certified health data hosting rules (HDS) apply.',
        },
      ],
      solutions: [
        {
          service: 'creation-site-web',
          title: 'A website that informs your patients',
          text: 'Covartex builds a clean, fast site for your practice: practitioners and their background, care offered, opening hours, directions, fees and national health insurance status, and a link to your booking platform. The copy is factual, with no testimonials or comparisons, and you approve it before launch. Website design from €1,500.',
        },
        {
          service: 'referencement-google-seo',
          title: 'Show up in local searches',
          text: 'Covartex completes your Google Business Profile, creates one page per treatment or specialty and adds structured data that describes the practice. Patients in your area find you when they look for a practitioner nearby.',
        },
        {
          service: 'visibilite-ia-aeo-geo',
          title: 'Get cited by ChatGPT and AI assistants',
          text: 'When a patient asks ChatGPT which dentist to see in their town, the answer draws on clear, consistent public information. Covartex makes your practice’s information easy for these assistants to reuse: the same name, address, specialties, hours and treatments everywhere, and pages that answer patients’ questions directly.',
        },
        {
          service: 'automatisation-processus',
          title: 'Less admin at the front desk',
          text: 'Covartex automates appointment reminders, sending documents before a first visit and answers to practical questions. The workflows carry as little health data as possible, with suitable tools and hosting when such data is needed.',
        },
      ],
      rules: {
        title: 'What French ethics rules and law require of a practice website',
        paragraphs: [
          'Since the decrees of December 2020, doctors, dentists and several other regulated health professions in France may share information with the public about their skills, background and practice conditions, including on a website. Commercial advertising, however, remains ruled out by their codes of ethics: these professions are not to be practised as a business. A practice website informs; it does not advertise.',
          'The exact rules depend on your professional body (ordre), which remains the reference. Covartex writes content within that framework, and you approve it before it goes live. The main points to respect:',
        ],
        list: [
          'Fair, honest and verifiable information that does not mislead patients.',
          'No patient testimonials, and no comparison with other practitioners or facilities.',
          'Nothing that encourages unnecessary treatment or preventive procedures.',
          'A host certified under France’s HDS scheme (health data hosting) whenever personal health data is hosted on your behalf.',
          'The GDPR: health data is a special category of data, to be collected only when necessary, with clear information for patients.',
        ],
      },
      faqs: [
        {
          q: 'Is a doctor in France allowed to have a website?',
          a: 'Yes. Since the decrees of December 2020, a doctor in France may present their skills, background, practice conditions and practical information on a website. The content must stay fair and informative, with no patient testimonials and no comparison with other practitioners. Covartex builds medical practice websites within that framework.',
        },
        {
          q: 'How much does a website for a dental practice cost?',
          a: 'At Covartex, a website for a dental or medical practice starts from €1,500. The price depends on the number of practitioners, pages and languages. Covartex sends a free, detailed quote within 48 hours, with no commitment.',
        },
        {
          q: 'Can a dentist in France advertise?',
          a: 'Not in the commercial sense: the French dentists’ code of ethics rules out practising dentistry as a business, but since December 2020 it allows informing the public. A dentist can therefore present the practice, treatments and opening hours on a website and on Google. Covartex helps dental practices stay on the side of information.',
        },
        {
          q: 'Does a medical practice website need HDS-certified hosting?',
          a: 'HDS-certified hosting is mandatory in France whenever personal health data is hosted on the practice’s behalf. A purely informative website that sends bookings to a specialised platform generally stores no such data. Covartex designs healthcare websites to avoid unnecessary data collection and chooses suitable hosting when it is needed.',
        },
        {
          q: 'How can a physiotherapist appear in Google Maps?',
          a: 'A physiotherapist appears in Google Maps through a complete, verified Google Business Profile: the right category, address, opening hours, photos of the practice and a link to the website. Matching information on the website and in directories strengthens that listing. Covartex handles this local SEO work for healthcare professionals.',
        },
        {
          q: 'How can a practice be recommended by ChatGPT when a patient looks for a dentist?',
          a: 'ChatGPT and other AI assistants rely on clear, consistent public information: the practice website, its Google listing, directories. Covartex makes that information easy for AI assistants to understand and cite for healthcare practices. Nobody can guarantee a citation, but a practice that is well described online is more likely to be mentioned.',
        },
      ],
    },
  },
};

export default industry;
