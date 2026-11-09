import type { PostDef } from '@/lib/blog';

const post: PostDef = {
  slug: 'refonte-site-web-sans-perdre-seo',
  date: '2026-09-23',
  author: 'Covartex',
  relatedService: 'creation-site-web',
  readingMinutes: 6,
  content: {
    fr: {
      title: 'Refonte de site web : la checklist pour ne pas perdre son référencement',
      description:
        'Refonte de site web sans perdre son référencement : la checklist avant, pendant et après la mise en ligne, des redirections 301 au suivi dans Search Console.',
      tags: ['Site web', 'SEO', 'Refonte'],
      takeaways: [
        'Une refonte fait perdre du référencement quand des URL changent sans redirection, quand les pages qui se classaient sont supprimées ou réécrites, ou quand le nouveau site reste bloqué à l’indexation.',
        'Avant toute refonte, exportez la liste complète des URL du site actuel et repérez dans Search Console les pages qui apportent du trafic et des liens : ce sont elles qu’il faut protéger en priorité.',
        'Chaque ancienne URL qui change d’adresse doit être redirigée en 301 vers sa nouvelle page équivalente, une par une, et jamais en masse vers la page d’accueil.',
        'Le jour de la mise en ligne, déployez les redirections, retirez le noindex, soumettez le nouveau sitemap et vérifiez balises canonical, formulaires et suivi des conversions.',
        'Une fluctuation des positions pendant quelques semaines après une refonte est fréquente ; une baisse qui dure signale le plus souvent une erreur de migration à corriger.',
      ],
      intro: [
        'Un site plus beau, plus rapide, mieux organisé : sur le papier, une refonte ne devrait faire que du bien au référencement. En pratique, c’est l’un des moments où un site peut perdre le plus de trafic Google en une seule journée.',
        'Ces pertes viennent le plus souvent des mêmes oublis, et une méthode simple les évite. Voici la checklist en quatre temps : avant, pendant, le jour de la mise en ligne et les semaines suivantes.',
      ],
      sections: [
        {
          heading: 'Pourquoi une refonte peut-elle faire chuter le référencement ?',
          paragraphs: [
            'Google associe chacune de vos pages à des recherches précises. Une page qui se classe a une adresse (URL), un titre, un contenu et des liens qui pointent vers elle depuis d’autres sites. Si l’un de ces éléments disparaît ou change sans précaution, Google doit tout réévaluer.',
          ],
          list: [
            'Des URL modifiées sans redirection : les anciennes adresses renvoient une erreur 404 et les liens venus d’autres sites sont perdus.',
            'Des pages qui se classaient, supprimées ou fusionnées sans équivalent.',
            'Des titres et des textes réécrits qui ne répondent plus aux mêmes recherches.',
            'Une consigne « noindex » de la préproduction oubliée après la mise en ligne.',
            'Un nouveau site plus lent ou moins bien structuré que l’ancien.',
          ],
        },
        {
          heading: 'Que faut-il faire avant une refonte de site ?',
          paragraphs: [
            'C’est l’étape la plus souvent sautée, et la plus utile. Elle permet de savoir ce que vous avez avant d’y toucher, et de garder un point de comparaison.',
          ],
          list: [
            'Explorez le site actuel avec un outil de crawl comme Screaming Frog et exportez toutes les URL, avec leurs titres, descriptions et balises.',
            'Ajoutez les URL que l’exploration ne trouve pas : sitemap actuel, pages de campagnes, PDF, anciennes pages encore citées ailleurs.',
            'Dans Search Console, exportez les clics, impressions et positions par page et par requête sur la période la plus longue disponible (16 mois).',
            'Dans le rapport « Liens » de Search Console, notez les pages qui reçoivent le plus de liens externes.',
            'Relevez les positions de vos requêtes principales pour pouvoir les comparer après le lancement.',
            'Notez ce qui est mesuré aujourd’hui : formulaires, appels, achats, et les outils de suivi installés.',
          ],
        },
        {
          heading: 'Comment garder ses positions pendant la refonte ?',
          paragraphs: [
            'La règle la plus simple est aussi la plus efficace : ne changez une URL que si vous avez une vraie raison de le faire. Une adresse qui ne bouge pas n’a besoin d’aucune redirection.',
            'Pour les pages qui se classent bien, gardez le sujet, le titre et l’essentiel du texte. Vous pouvez améliorer la mise en page et compléter le contenu, mais une page qui répondait à une recherche doit continuer à y répondre.',
          ],
          list: [
            'Conservez la structure des URL partout où c’est possible.',
            'Reprenez les balises title et meta description, les données structurées et les textes alternatifs des images des pages importantes.',
            'Mettez à jour les liens internes pour qu’ils pointent directement vers les nouvelles adresses.',
            'Bloquez l’indexation de la préproduction : protection par mot de passe de préférence, sinon balise noindex.',
            'Vérifiez que le nouveau site est au moins aussi rapide que l’ancien sur mobile.',
          ],
        },
        {
          heading: 'Comment faire un plan de redirection 301 ?',
          paragraphs: [
            'Une redirection 301 indique aux navigateurs et à Google qu’une page a déménagé définitivement. Google reporte alors les signaux de l’ancienne page sur la nouvelle, à condition que la destination traite du même sujet.',
            'Rediriger toutes les anciennes pages vers la page d’accueil est une erreur fréquente : Google traite souvent ces redirections comme des pages introuvables, et les positions sont perdues. Le plan tient dans un simple tableau : ancienne URL, nouvelle URL.',
          ],
          list: [
            'Une ligne par ancienne URL, vers la nouvelle page la plus proche en contenu.',
            'Pas de chaîne : l’ancienne page redirige directement vers la destination finale, sans étape intermédiaire.',
            'Une page supprimée sans équivalent renvoie une erreur 404 ou 410, plutôt qu’une redirection hors sujet.',
            'Les redirections restent en place longtemps : Google recommande au moins un an.',
            'Le plan est testé sur la préproduction avant le lancement.',
          ],
        },
        {
          heading: 'Que vérifier le jour de la mise en ligne ?',
          paragraphs: [
            'Choisissez un jour calme, en début de semaine, avec quelqu’un disponible pour corriger tout de suite. Puis déroulez cette liste dans l’ordre :',
          ],
          list: [
            'Déployez les redirections en même temps que le nouveau site, pas le lendemain.',
            'Retirez le noindex et la protection de la préproduction, et vérifiez que le fichier robots.txt ne bloque pas le site.',
            'Contrôlez les balises canonical, qui désignent la version de référence de chaque page : elles doivent pointer vers les nouvelles URL définitives, jamais vers la préproduction.',
            'Pour un site multilingue, vérifiez les balises hreflang, qui relient chaque page à ses versions dans les autres langues.',
            'Publiez le nouveau sitemap XML, la liste des pages à explorer, et soumettez-le dans Search Console.',
            'Si le nom de domaine change, utilisez l’outil de changement d’adresse de Search Console.',
            'Testez chaque formulaire, le paiement s’il y en a un et le suivi des conversions.',
            'Ouvrez à la main un échantillon d’anciennes URL importantes pour vérifier qu’elles redirigent au bon endroit.',
          ],
        },
        {
          heading: 'Combien de temps surveiller le site après une refonte ?',
          paragraphs: [
            'Surveillez de près pendant 4 à 8 semaines. Google explore le nouveau site et prend en compte les redirections progressivement : les problèmes n’apparaissent pas tous le premier jour.',
          ],
          list: [
            'Le rapport « Pages » de Search Console : erreurs 404, pages exclues, pages explorées mais non indexées.',
            'Les clics et impressions des pages clés, comparés à votre export d’avant refonte.',
            'Les positions de vos requêtes principales, chaque semaine.',
            'Les nouvelles erreurs 404 : ajoutez une redirection dès qu’une ancienne URL utile a été oubliée.',
            'Les conversions : demandes, appels et ventes, pas seulement le trafic.',
          ],
        },
        {
          heading: 'Une baisse de trafic après une refonte est-elle normale ?',
          paragraphs: [
            'Une fluctuation des positions pendant quelques semaines est fréquente, le temps que Google réévalue les nouvelles pages. Elle n’est pas inquiétante si les pages importantes sont indexées et que la tendance remonte.',
            'Une baisse qui dure au-delà de deux mois signale le plus souvent une erreur de migration : redirections manquantes ou vers de mauvaises pages, contenus supprimés, noindex oublié, balise canonical erronée. Reprenez votre export d’avant refonte et comparez page par page, puis corrigez vite : plus une erreur reste en ligne, plus la page risque de perdre durablement ses positions.',
          ],
        },
      ],
      conclusion: [
        'Une refonte réussie ne se joue pas le jour du lancement, mais dans la préparation : l’inventaire des URL, le plan de redirection et quelques vérifications simples. Bien menée, elle devient une occasion d’améliorer le référencement plutôt qu’un risque.',
        'Si vous préparez une refonte, nous pouvons intégrer cette checklist au projet, de l’inventaire de départ au suivi des semaines suivantes. Décrivez-nous votre site actuel et ce que vous voulez changer : le devis est gratuit.',
      ],
      faqs: [
        {
          q: 'Une refonte de site fait-elle perdre son référencement ?',
          a: 'Pas forcément. Les pertes viennent surtout d’URL modifiées sans redirection, de contenus supprimés ou d’un blocage d’indexation oublié ; bien préparée, une refonte peut au contraire améliorer le référencement.',
        },
        {
          q: 'Combien de temps pour retrouver ses positions après une refonte ?',
          a: 'Les fluctuations durent en général quelques semaines. Si les positions ne sont pas revenues après environ deux mois, cherchez une erreur de migration plutôt que d’attendre.',
        },
        {
          q: 'Faut-il garder les mêmes URL lors d’une refonte ?',
          a: 'Oui, chaque fois que c’est possible : une URL inchangée ne demande aucune redirection. Changez-la seulement si la nouvelle structure apporte un vrai bénéfice, et redirigez alors l’ancienne en 301.',
        },
        {
          q: 'Combien de temps faut-il garder les redirections 301 ?',
          a: 'Le plus longtemps possible. Google recommande de les conserver au moins un an ; celles des pages qui reçoivent des liens externes peuvent rester en place sans limite.',
        },
        {
          q: 'Peut-on changer de nom de domaine sans perdre son SEO ?',
          a: 'Oui, avec des redirections 301 page par page vers le nouveau domaine, les deux domaines vérifiés dans Search Console et l’outil de changement d’adresse. Évitez si possible de changer de domaine et de structure en même temps : la cause d’une baisse devient plus difficile à trouver.',
        },
      ],
    },
    en: {
      title: 'How to Redesign a Website Without Losing SEO: The Checklist',
      description:
        'How to redesign a website without losing SEO: the checklist for before, during and after launch, from 301 redirect maps to monitoring in Search Console.',
      tags: ['Website', 'SEO', 'Redesign'],
      takeaways: [
        'A website redesign loses SEO when URLs change without redirects, when pages that ranked are removed or rewritten, or when the new site is still blocked from indexing.',
        'Before any redesign, export every URL on the current site and use Search Console to find the pages that bring traffic and links: those are the pages to protect first.',
        'Every old URL that changes address needs a 301 redirect to its closest new equivalent, one by one, never a mass redirect to the homepage.',
        'On launch day, deploy the redirects, remove noindex, submit the new sitemap in Search Console, and check canonical tags, forms and conversion tracking.',
        'Rankings commonly fluctuate for a few weeks after a redesign; a drop that lasts usually points to a migration error that needs fixing.',
      ],
      intro: [
        'A better-looking, faster, better-organised site should, on paper, only help your SEO. In practice, a redesign is one of the moments when a site can lose the most Google traffic in a single day.',
        'Those losses usually come from the same few oversights, and a simple method prevents them. Here is the checklist in four stages: before, during, on launch day and in the weeks that follow.',
      ],
      sections: [
        {
          heading: 'Why can a website redesign hurt SEO?',
          paragraphs: [
            'Google connects each of your pages to specific searches. A page that ranks has an address (URL), a title, content and links pointing to it from other sites. If any of these disappears or changes carelessly, Google has to reassess everything.',
          ],
          list: [
            'URLs changed without redirects: old addresses return a 404 error and the links from other sites are lost.',
            'Ranking pages deleted or merged with no equivalent.',
            'Titles and copy rewritten so they no longer answer the same searches.',
            'A “noindex” directive from the staging site left in place after launch.',
            'A new site that is slower or less well structured than the old one.',
          ],
        },
        {
          heading: 'What should you do before a website redesign?',
          paragraphs: [
            'This is the step most often skipped, and the most useful one. The goal: know exactly what you have before touching anything, and keep a baseline to compare against later.',
          ],
          list: [
            'Crawl the current site with a tool such as Screaming Frog and export every URL with its title, description and tags.',
            'Add the URLs a crawl will not find: the current sitemap, campaign landing pages, PDFs, old pages still linked from elsewhere.',
            'In Search Console, export clicks, impressions and positions by page and by query over the longest period available (16 months).',
            'In the Search Console Links report, note which pages receive the most external links.',
            'Record the rankings of your main queries so you can compare them after launch.',
            'List what is tracked today: forms, calls, purchases, and the analytics tools installed.',
          ],
        },
        {
          heading: 'How do you keep your rankings during a redesign?',
          paragraphs: [
            'The simplest rule is also the most effective: only change a URL if you have a real reason to. An address that does not move needs no redirect at all.',
            'For pages that rank well, keep the topic, the title and most of the copy. You can improve the layout and expand the content, but a page that answered a search should keep answering it.',
          ],
          list: [
            'Keep the existing URL structure wherever possible.',
            'Carry over title tags, meta descriptions, structured data and image alt text on important pages.',
            'Update internal links so they point straight to the new addresses.',
            'Block the staging site from indexing: password protection is best, a noindex tag otherwise.',
            'Check that the new site is at least as fast as the old one on mobile.',
          ],
        },
        {
          heading: 'How do you build a 301 redirect map?',
          paragraphs: [
            'A 301 redirect tells browsers and Google that a page has moved permanently. Google then passes the old page’s signals to the new one, as long as the destination covers the same topic.',
            'Redirecting every old page to the homepage is a common mistake: Google often treats those redirects as missing pages, and the rankings are lost. The map itself is a simple spreadsheet, old URL in one column, new URL in the other.',
          ],
          list: [
            'One row per old URL, pointing to the new page closest in content.',
            'No chains: each old page redirects straight to its final destination, with no hop in between.',
            'A deleted page with no equivalent returns a 404 or 410 error rather than an off-topic redirect.',
            'Redirects stay in place for a long time: Google recommends at least one year.',
            'The map is tested on the staging site before launch.',
          ],
        },
        {
          heading: 'What should you check on launch day?',
          paragraphs: [
            'Pick a quiet day early in the week, with someone available to fix issues straight away. Then work through this list in order:',
          ],
          list: [
            'Deploy the redirects at the same time as the new site, not the next day.',
            'Remove noindex and the staging password, and check that robots.txt does not block the site.',
            'Check canonical tags, which name the reference version of each page: they must point to the final new URLs, never to staging.',
            'On a multilingual site, check the hreflang tags that connect each page to its versions in other languages.',
            'Publish the new XML sitemap, the list of pages for Google to crawl, and submit it in Search Console.',
            'If the domain name changes, use the Change of Address tool in Search Console.',
            'Test every form, the checkout if there is one, and conversion tracking.',
            'Open a sample of important old URLs by hand to confirm they redirect to the right place.',
          ],
        },
        {
          heading: 'How long should you monitor a site after a redesign?',
          paragraphs: [
            'Watch closely for 4 to 8 weeks. Google recrawls the new site and processes the redirects gradually, so problems do not all show up on day one.',
          ],
          list: [
            'The Search Console Page indexing report: 404 errors, excluded pages, pages crawled but not indexed.',
            'Clicks and impressions on key pages, compared with your pre-redesign export.',
            'Rankings for your main queries, every week.',
            'New 404 errors: add a redirect as soon as a useful old URL turns out to be missing.',
            'Conversions: enquiries, calls and sales, not just traffic.',
          ],
        },
        {
          heading: 'Is a traffic drop after a redesign normal?',
          paragraphs: [
            'Rankings commonly fluctuate for a few weeks while Google reassesses the new pages. That is not a concern if your important pages are indexed and the trend is recovering.',
            'A drop that lasts beyond two months usually points to a migration error: missing or misdirected redirects, deleted content, a forgotten noindex, a wrong canonical tag. Go back to your pre-redesign export, compare page by page, then fix fast: the longer an error stays live, the more likely the page is to lose its rankings for good.',
          ],
        },
      ],
      conclusion: [
        'A successful redesign is not decided on launch day but in the preparation: the URL inventory, the redirect map and a handful of simple checks. Done properly, it becomes a chance to improve your SEO rather than a risk to it.',
        'If you are planning a redesign, we can build this checklist into the project, from the initial inventory to the weeks of monitoring after launch. Tell us about your current site and what you want to change: the quote is free.',
      ],
      faqs: [
        {
          q: 'Does a website redesign hurt SEO?',
          a: 'Not necessarily. Losses mostly come from URLs changed without redirects, deleted content or a forgotten indexing block; with a redirect map and launch-day checks, a redesign can actually improve your SEO.',
        },
        {
          q: 'How long does it take to recover rankings after a redesign?',
          a: 'Fluctuations generally last a few weeks. If rankings have not come back after about two months, look for a migration error rather than waiting.',
        },
        {
          q: 'Should you keep the same URLs when redesigning a website?',
          a: 'Yes, whenever possible: an unchanged URL needs no redirect and carries no risk. Only change it if the new structure brings a real benefit, and then 301-redirect the old one.',
        },
        {
          q: 'How long should you keep 301 redirects?',
          a: 'As long as possible. Google recommends keeping them for at least a year; redirects for pages with external links can stay in place indefinitely.',
        },
        {
          q: 'Can you change domain name without losing SEO?',
          a: 'Yes, with page-by-page 301 redirects to the new domain, both domains verified in Search Console and the Change of Address tool. If you can, avoid changing domain and structure at the same time: the cause of a drop becomes harder to find.',
        },
      ],
    },
  },
};

export default post;
