import type { TermDef } from '@/lib/glossary';

const terms: TermDef[] = [
  {
    slug: 'kbis',
    group: 'legal',
    service: 'formalites-juridiques',
    related: ['formalites-juridiques', 'transfert-de-siege', 'registre-beneficiaires-effectifs'],
    content: {
      fr: {
        term: 'Extrait Kbis',
        definition:
          'L’extrait Kbis est le document officiel qui atteste de l’immatriculation d’une société au registre du commerce et des sociétés (RCS) et en résume l’identité juridique.',
        body: [
          'Le Kbis est délivré par le greffe qui tient le RCS et peut être commandé en ligne. Il reprend les informations essentielles de la société : dénomination, forme juridique, capital, adresse du siège, activité, numéro d’immatriculation (SIREN), dirigeants et, le cas échéant, commissaires aux comptes. Il concerne les sociétés commerciales (SARL, SAS, SA) comme les sociétés civiles immatriculées au RCS, par exemple les SCI.',
          'C’est la carte d’identité de la société : banques, bailleurs, fournisseurs, administrations et acheteurs publics le demandent pour vérifier qu’elle existe et qui peut l’engager. Le document n’a pas de durée de validité légale, mais un extrait de moins de trois mois est généralement exigé.',
          'Le Kbis ne change qu’une fois la modification inscrite au registre. Après un changement de dirigeant, un transfert de siège ou une augmentation de capital déclarés sur le guichet unique de l’INPI, il faut donc attendre l’inscription modificative au RCS pour obtenir un extrait à jour.',
        ],
        keyPoints: [
          'Preuve officielle de l’existence d’une société et de ses dirigeants.',
          'Délivré par le greffe ; commandable en ligne.',
          'Généralement demandé de moins de trois mois.',
          'Mis à jour après chaque modification inscrite au RCS.',
        ],
        example:
          'Après son immatriculation, une SAS transmet son extrait Kbis à la banque où son capital a été déposé, ce qui permet de débloquer les fonds. Plus tard, après un changement de président, la banque demande un Kbis à jour pour actualiser son dossier.',
      },
      en: {
        term: 'Kbis extract',
        definition:
          'A Kbis extract is the official document proving that a company is registered in the French trade and companies register (RCS), summarising its legal identity.',
        body: [
          'The Kbis is issued by the court registry (greffe) that keeps the RCS and can be ordered online. It lists the company’s key details: name, legal form, share capital, registered office address, business activity, registration number (SIREN), officers and, where applicable, statutory auditors. It covers commercial companies (SARL, SAS, SA) and civil companies registered at the RCS.',
          'It works as the company’s identity card in France: banks, landlords, suppliers, public bodies and public buyers ask for it to check that the company exists and who can act on its behalf. The document has no legal expiry date, but a copy less than three months old is generally required.',
          'The Kbis only changes once an amendment has been recorded in the register. After a change of director, a transfer of registered office or a capital increase filed through the guichet unique, the online portal run by INPI, you have to wait for the RCS entry to be amended before getting an up-to-date extract.',
        ],
        keyPoints: [
          'Official proof of a French company’s existence and of who runs it.',
          'Issued by the court registry; can be ordered online.',
          'Generally requested less than three months old.',
          'Updated after each change recorded at the RCS.',
          'Often compared to a certificate of incorporation or a company register extract in other countries.',
        ],
        example:
          'After registration, a newly formed SAS (a French simplified joint-stock company) sends its Kbis extract to the bank where its share capital was deposited, which allows the funds to be released. Later, after a change of president, the bank asks for an up-to-date Kbis to keep its records current.',
      },
    },
  },
  {
    slug: 'formalites-juridiques',
    group: 'legal',
    service: 'formalites-juridiques',
    related: ['kbis', 'transfert-de-siege', 'approbation-des-comptes', 'registre-beneficiaires-effectifs'],
    content: {
      fr: {
        term: 'Formalités juridiques',
        definition:
          'Les formalités juridiques sont les démarches obligatoires qui accompagnent la vie d’une société, de sa création à sa dissolution, pour rendre ses décisions officielles et opposables aux tiers.',
        body: [
          'Elles couvrent trois grands moments. La création : statuts, dépôt du capital, annonce légale, demande d’immatriculation. Les modifications : transfert de siège, changement de dirigeant, modification du capital, de l’objet ou de la dénomination. La cessation : dissolution, liquidation puis radiation. S’y ajoutent des obligations récurrentes, comme l’approbation et le dépôt des comptes annuels ou la mise à jour des bénéficiaires effectifs.',
          'Depuis le 1er janvier 2023, la création, la modification et la cessation d’une entreprise se déclarent en ligne sur le guichet unique géré par l’INPI. Le dossier est transmis au greffe, qui tient le registre du commerce et des sociétés (RCS) et délivre l’extrait Kbis à jour. La plupart des modifications statutaires exigent aussi une annonce dans un journal d’annonces légales.',
          'Un dossier incomplet est rejeté ou renvoyé pour régularisation, ce qui retarde ses effets. Le travail consiste donc autant à réunir des pièces conformes (actes signés, justificatifs, pièces d’identité) qu’à suivre chaque dépôt jusqu’au document final.',
        ],
        keyPoints: [
          'Création, modification, cessation : trois familles de formalités.',
          'Dépôt en ligne sur le guichet unique de l’INPI depuis 2023.',
          'Annonce légale le plus souvent requise pour les modifications.',
          'En principe, une modification n’est opposable aux tiers qu’après sa publicité.',
        ],
        example:
          'Une SARL change de gérant. Les associés adoptent la décision et la consignent dans un procès-verbal, une annonce légale est publiée, puis le dossier est déposé sur le guichet unique avec les justificatifs du nouveau gérant. Une fois l’inscription faite au RCS, le nouvel extrait Kbis mentionne le nouveau gérant.',
      },
      en: {
        term: 'Legal formalities',
        definition:
          'Legal formalities are the mandatory filings and publications that accompany a company’s life, from incorporation to dissolution, to make its decisions official and enforceable against third parties.',
        body: [
          'In France they cover three main stages. Incorporation: articles of association, deposit of share capital, legal notice, registration application. Changes: transfer of registered office, change of director, changes to share capital, corporate purpose or name. Closure: dissolution, liquidation, then deregistration. On top of these come recurring obligations, such as approving and filing the annual accounts and keeping beneficial ownership information up to date.',
          'Since 1 January 2023, incorporations, changes and closures are filed online through the guichet unique, a single portal run by INPI, the French National Institute of Industrial Property. The file is then passed to the court registry (greffe), which keeps the trade and companies register (RCS) and issues an updated Kbis extract. Most changes to the articles also require a notice in an official legal announcements journal.',
          'An incomplete file is rejected or sent back for correction, which delays its effect. The work is as much about assembling compliant documents as about following each filing through to the final document. Filings are made in French.',
        ],
        keyPoints: [
          'Incorporation, changes, closure: three families of formalities.',
          'Filed online through the INPI guichet unique since 2023.',
          'A legal notice is usually required for changes.',
          'In principle, a change is only enforceable against third parties once it has been published.',
        ],
        example:
          'A French SARL (a private limited company) changes its manager. The shareholders adopt the decision and record it in minutes, a legal notice is published, then the file is submitted through the guichet unique with the new manager’s supporting documents. Once the RCS entry is updated, the new Kbis extract shows the new manager.',
      },
    },
  },
  {
    slug: 'approbation-des-comptes',
    group: 'legal',
    service: 'formalites-juridiques',
    related: ['secretariat-juridique', 'formalites-juridiques'],
    content: {
      fr: {
        term: 'Approbation des comptes',
        definition:
          'L’approbation des comptes est la décision annuelle par laquelle les associés ou actionnaires d’une société examinent et valident les comptes de l’exercice écoulé, puis décident de l’affectation du résultat.',
        body: [
          'Après la clôture de l’exercice, le dirigeant fait établir les comptes annuels (bilan, compte de résultat, annexe), le plus souvent avec l’expert-comptable. Les associés se prononcent ensuite en assemblée générale ou, lorsque la forme de la société et les statuts le permettent, par consultation écrite, et décident de l’affectation du résultat : dividendes, réserves ou report à nouveau.',
          'En principe, l’approbation doit intervenir dans les six mois suivant la clôture pour les SARL, SAS et SA ; une prolongation peut être accordée par décision de justice, sur demande. Les comptes sont ensuite déposés au greffe dans le mois qui suit l’approbation, ou dans les deux mois en cas de dépôt par voie électronique. Les sociétés de petite taille, au sens des seuils comptables, peuvent demander que tout ou partie de leurs comptes reste confidentiel.',
          'Les sociétés à associé unique bénéficient de règles simplifiées : dans certains cas, notamment quand l’associé unique est aussi le dirigeant, le dépôt des comptes au greffe vaut approbation. Un retard ou un oubli expose la société et ses dirigeants à des sanctions.',
        ],
        keyPoints: [
          'En principe dans les six mois suivant la clôture, sauf prolongation accordée par le juge.',
          'Dépôt au greffe dans le mois suivant l’approbation (deux mois par voie électronique).',
          'Option de confidentialité pour les sociétés de petite taille.',
          'Règles simplifiées pour les sociétés à associé unique.',
        ],
        example:
          'Une SAS clôture son exercice le 31 décembre. Les associés approuvent les comptes au plus tard le 30 juin et décident de mettre le bénéfice en réserve. Les comptes et la décision d’affectation sont ensuite déposés en ligne au greffe, dans les deux mois.',
      },
      en: {
        term: 'Approval of annual accounts',
        definition:
          'The approval of annual accounts is the yearly decision by which a company’s shareholders review and approve the accounts for the past financial year, then decide how to allocate the profit or loss.',
        body: [
          'In France, once the financial year has ended, the company’s manager or president has the annual accounts prepared (balance sheet, income statement and notes), usually with the chartered accountant. Shareholders then vote at a general meeting or, where the legal form and the articles allow it, by written consultation, and decide how to allocate the result: dividends, reserves or carry-forward.',
          'In principle, approval must take place within six months of the year end for SARL, SAS and SA companies; an extension can be granted by court order on request. The accounts are then filed with the court registry (greffe) within one month of approval, or two months when filed electronically. Smaller companies, as defined by accounting thresholds, can ask for all or part of their accounts to remain confidential.',
          'Single-shareholder companies follow simplified rules: in some cases, notably when the sole shareholder is also the manager or president, filing the accounts with the registry counts as approval. Late or missing approval or filing exposes the company and its officers to penalties.',
        ],
        keyPoints: [
          'In principle within six months of the year end, unless extended by a judge.',
          'Filing with the registry within one month of approval (two months when filed electronically).',
          'Confidentiality option for smaller companies.',
          'Simplified rules for single-shareholder companies.',
        ],
        example:
          'An SAS closes its financial year on 31 December. The shareholders approve the accounts by 30 June at the latest and decide to put the profit into reserves. The accounts and the allocation decision are then filed online with the registry within two months.',
      },
    },
  },
  {
    slug: 'registre-beneficiaires-effectifs',
    group: 'legal',
    service: 'formalites-juridiques',
    related: ['formalites-juridiques', 'secretariat-juridique', 'kbis'],
    content: {
      fr: {
        term: 'Registre des bénéficiaires effectifs (RBE)',
        definition:
          'Le registre des bénéficiaires effectifs (RBE) recense les personnes physiques qui possèdent ou contrôlent réellement une société, directement ou indirectement, dans le cadre de la lutte contre le blanchiment de capitaux.',
        body: [
          'Est en principe bénéficiaire effectif toute personne physique qui détient, directement ou par l’intermédiaire d’autres sociétés, plus de 25 % du capital ou des droits de vote, ou qui exerce un contrôle sur la société par d’autres moyens. Si aucune personne ne remplit ces critères, c’est le représentant légal qui est déclaré.',
          'La déclaration est déposée lors de l’immatriculation, via le guichet unique, puis mise à jour dans les 30 jours suivant tout changement : cession de titres, entrée d’un investisseur, modification des droits de vote. L’absence de déclaration ou une déclaration inexacte expose à des sanctions, y compris pénales.',
          'Le registre est tenu par les greffes. À la suite d’un arrêt de la Cour de justice de l’Union européenne de novembre 2022, son accès est désormais limité, en dehors des autorités et de certains professionnels, aux personnes justifiant d’un intérêt légitime. En pratique, banques et investisseurs vérifient que les informations déclarées correspondent à la réalité.',
        ],
        keyPoints: [
          'Concerne les personnes physiques qui détiennent plus de 25 % du capital ou des droits de vote, ou exercent un contrôle.',
          'Déclaration à la création, puis mise à jour dans les 30 jours après un changement.',
          'À défaut de bénéficiaire identifié, le représentant légal est déclaré.',
          'Accès restreint depuis 2024 aux personnes justifiant d’un intérêt légitime.',
        ],
        example:
          'Une SAS est détenue à 60 % par une société holding, elle-même détenue à parts égales par deux fondateurs. Chacun détient donc indirectement 30 % de la SAS : tous deux sont déclarés comme bénéficiaires effectifs. Si l’un d’eux cède ses titres de la holding, une mise à jour doit être déposée dans les 30 jours.',
      },
      en: {
        term: 'Beneficial ownership register (RBE)',
        expansion: 'Registre des bénéficiaires effectifs',
        definition:
          'The beneficial ownership register (RBE) lists the individuals who ultimately own or control a French company, directly or indirectly, as part of the fight against money laundering.',
        body: [
          'In principle, a beneficial owner is any individual who holds, directly or through other companies, more than 25% of the share capital or voting rights, or who controls the company by other means. If nobody meets these criteria, the company’s legal representative is declared instead.',
          'The declaration is filed at incorporation through the guichet unique, the online portal run by INPI, and must be updated within 30 days of any change: a transfer of shares, a new investor, a change in voting rights. Failing to file, or filing inaccurate information, exposes the company to penalties, including criminal ones.',
          'The register is kept by the court registries (greffes). Following a ruling by the Court of Justice of the European Union in November 2022, access is now limited, beyond the authorities and certain regulated professionals, to people who can show a legitimate interest. In practice, banks and investors check that the declared information matches reality.',
        ],
        keyPoints: [
          'Covers individuals who hold more than 25% of the capital or voting rights, or exercise control.',
          'Filed at incorporation, then updated within 30 days of a change.',
          'If no beneficial owner can be identified, the legal representative is declared.',
          'Access restricted since 2024 to people with a legitimate interest.',
        ],
        example:
          'A French SAS is 60% owned by a holding company, itself owned equally by two founders. Each founder therefore holds 30% of the SAS indirectly: both are declared as beneficial owners. If one of them sells their shares in the holding company, an update must be filed within 30 days.',
      },
    },
  },
  {
    slug: 'transfert-de-siege',
    group: 'legal',
    service: 'formalites-juridiques',
    related: ['formalites-juridiques', 'kbis', 'secretariat-juridique'],
    content: {
      fr: {
        term: 'Transfert de siège social',
        definition:
          'Le transfert de siège social est le changement d’adresse officielle d’une société, qui suppose une décision de l’organe compétent, une modification des statuts, une annonce légale et une formalité d’inscription au registre.',
        body: [
          'L’organe compétent dépend de la forme de la société et de ses statuts. En principe, les associés décident en assemblée extraordinaire. Pour un transfert en France, le gérant de SARL ou le conseil d’administration de SA peut aussi décider, sous réserve de ratification par les associés ou actionnaires, de même que le président de SAS lorsque les statuts le prévoient.',
          'La décision est consignée dans un procès-verbal, les statuts sont mis à jour et une annonce est publiée dans un journal d’annonces légales du département du nouveau siège, ainsi qu’en principe dans celui de l’ancien siège lorsque la société change de greffe. Le dossier est ensuite déposé sur le guichet unique de l’INPI ; une fois l’inscription faite, la société obtient un extrait Kbis à jour.',
          'Il faut aussi mettre à jour factures, site web et mentions légales, et prévenir banque, clients et fournisseurs. Le numéro SIREN ne change pas, mais le siège reçoit un nouveau numéro SIRET. Un transfert hors de France obéit à des règles distinctes, nettement plus lourdes.',
        ],
        keyPoints: [
          'Décision prise par l’organe prévu par la loi et les statuts.',
          'Statuts modifiés, annonce légale, formalité sur le guichet unique.',
          'SIREN inchangé, nouveau SIRET pour le siège.',
        ],
        example:
          'Une SARL installée à Lyon déménage à Marseille. Le gérant décide le transfert, sous réserve de ratification par les associés à la prochaine assemblée. Les statuts sont modifiés, des annonces légales paraissent dans le Rhône et les Bouches-du-Rhône, puis la formalité fait passer la société au greffe de Marseille.',
      },
      en: {
        term: 'Transfer of registered office',
        definition:
          'A transfer of registered office is the change of a company’s official address, which requires a decision by the competent body, an amendment to the articles, a legal notice and a registry filing.',
        body: [
          'In a French company, the competent body depends on the legal form and the articles of association. In principle, the shareholders decide at an extraordinary general meeting. For a move within France, the manager of an SARL or the board of directors of an SA can also decide, subject to ratification by the shareholders, as can the president of an SAS when the articles allow it.',
          'The decision is recorded in minutes, the articles are updated and a notice is published in an official legal announcements journal in the département of the new office and, in principle, in that of the former office when the company changes registry. The file is then submitted through the INPI guichet unique; once the entry is recorded, the company obtains an updated Kbis extract.',
          'Invoices, the website and its legal notice must also be updated, and the bank, customers and suppliers informed. The SIREN company number stays the same, but the head office receives a new SIRET establishment number. A transfer outside France follows separate and much heavier rules.',
        ],
        keyPoints: [
          'Decision taken by the body set by law and the articles.',
          'Amended articles, legal notice, filing through the guichet unique.',
          'Same SIREN, new SIRET for the head office.',
        ],
        example:
          'An SARL based in Lyon moves to Marseille. The manager decides on the transfer, subject to ratification by the shareholders at the next general meeting. The articles are amended, legal notices appear in the Rhône and Bouches-du-Rhône départements, and the filing moves the company to the Marseille registry.',
      },
    },
  },
  {
    slug: 'secretariat-juridique',
    group: 'legal',
    service: 'management-supervision-juridique',
    related: ['approbation-des-comptes', 'formalites-juridiques', 'registre-beneficiaires-effectifs', 'transfert-de-siege'],
    content: {
      fr: {
        term: 'Secrétariat juridique',
        definition:
          'Le secrétariat juridique consiste à tenir à jour la vie juridique d’une société : décisions des associés, assemblées, procès-verbaux, registres obligatoires, dépôts au greffe et changements de dirigeants.',
        body: [
          'Chaque année et à chaque événement important, une société doit produire des actes précis : convocation et tenue de l’assemblée qui approuve les comptes, rédaction des procès-verbaux, report des décisions dans le registre prévu à cet effet, tenue du registre des mouvements de titres pour les SAS et les SA, suivi des mandats des dirigeants et, le cas échéant, des commissaires aux comptes. Les décisions qui l’exigent donnent lieu à une formalité au greffe.',
          'Ce travail est souvent sous-estimé tant que tout va bien. Il devient visible lors d’une levée de fonds, d’une cession, d’un financement bancaire ou d’un contrôle : acheteurs, investisseurs et conseils examinent les registres et les procès-verbaux, et chaque lacune doit être régularisée, parfois dans l’urgence.',
          'Il est assuré en interne par un juriste, ou confié à un avocat ou à un expert-comptable, qui peut s’appuyer sur une équipe externalisée pour l’exécution. Pour les groupes qui gèrent de nombreuses filiales, un calendrier centralisé et des modèles standardisés évitent les oublis et les écarts d’une société à l’autre.',
        ],
        keyPoints: [
          'Assemblées, procès-verbaux et registres tenus à jour.',
          'Calendrier annuel : approbation des comptes, dépôts, échéances des mandats.',
          'Des registres complets facilitent les audits, les cessions et les levées de fonds.',
        ],
        example:
          'Un groupe détient une dizaine de filiales. Son secrétariat juridique suit un calendrier commun : arrêté des comptes, approbation dans les six mois, dépôt au greffe, mise à jour des registres, renouvellement des mandats arrivant à échéance. Lorsqu’un directeur général est remplacé dans une filiale, la décision, le procès-verbal et la formalité sont préparés dans la foulée.',
      },
      en: {
        term: 'Corporate secretarial work',
        definition:
          'Corporate secretarial work means keeping a company’s legal life up to date: shareholder decisions, general meetings, minutes, statutory registers, registry filings and changes of officers.',
        body: [
          'In France, where it is called secrétariat juridique, it covers the documents a company must produce every year and at every key event: convening and holding the meeting that approves the accounts, drafting minutes, recording decisions in the dedicated register, keeping the share transfer register for SAS and SA companies, and tracking the terms of office of directors and, where applicable, statutory auditors. Decisions that require it are followed by a filing with the court registry (greffe).',
          'This work is often underestimated while everything runs smoothly. It becomes visible during a fundraising round, a sale, a bank financing or an audit: buyers, investors and their advisers review the registers and minutes, and every gap has to be fixed, sometimes in a hurry.',
          'It is handled in-house by a legal professional, or entrusted to a law firm or a chartered accountant, who may rely on an outsourced team for execution. For groups managing many subsidiaries, a central calendar and standard templates prevent missed deadlines and inconsistencies between entities.',
        ],
        keyPoints: [
          'General meetings, minutes and registers kept up to date.',
          'Annual calendar: approval of accounts, filings, expiring terms of office.',
          'Complete registers make audits, sales and fundraising easier.',
        ],
        example:
          'A group owns around ten French subsidiaries. Its corporate secretarial team follows a shared calendar: closing the accounts, approval within six months, filing with the registry, updating registers, renewing expiring terms of office. When a managing director is replaced in one subsidiary, the decision, the minutes and the filing are prepared straight away.',
      },
    },
  },
];

export default terms;
