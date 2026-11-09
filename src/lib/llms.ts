import { SITE_URL, siteConfig } from '@/config/site';
import { localeHref, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionary';
import { getCategories } from '@/lib/services';
import { getPosts } from '@/lib/blog';
import { homeFaq } from '@/lib/agencyData';
import { getIndustries } from '@/lib/industries';
import { getTerms, termTitle } from '@/lib/glossary';
import { formatEur } from '@/lib/seo';

/**
 * /llms.txt and /llms-full.txt — a plain-Markdown brief of the site for
 * AI assistants (https://llmstxt.org). Built from the same data as the
 * pages, so it never drifts from what visitors see.
 *
 * Only verifiable facts go here. Case studies, stats and testimonials in
 * src/lib/agencyData.ts are still placeholders and are deliberately left
 * out: once they are real (and approved by the clients), add them.
 */

const abs = (locale: Locale, path: string) => `${SITE_URL}${localeHref(locale, path)}`;

const labels = {
  en: {
    services: 'Services',
    guides: 'Guides',
    industries: 'Industries',
    glossary: 'Glossary',
    challenges: 'Common problems',
    solutions: 'What Covartex does',
    rules: 'Sector rules',
    faq: 'FAQ',
    from: 'From',
    area: 'Area served',
    worldwide: 'Worldwide (remote delivery)',
    france: 'France (French law)',
    category: 'Practice area',
    includes: 'What is included',
    benefits: 'Benefits',
    process: 'Process',
    inShort: 'In short',
    published: 'Published',
    updated: 'Updated',
  },
  fr: {
    services: 'Services',
    guides: 'Guides',
    industries: 'Secteurs',
    glossary: 'Glossaire',
    challenges: 'Problèmes fréquents',
    solutions: 'Ce que fait Covartex',
    rules: 'Règles du secteur',
    faq: 'Questions fréquentes',
    from: 'À partir de',
    area: 'Zone',
    worldwide: 'Monde entier (à distance)',
    france: 'France (droit français)',
    category: 'Pôle',
    includes: 'Ce qui est inclus',
    benefits: 'Bénéfices',
    process: 'Méthode',
    inShort: 'En bref',
    published: 'Publié le',
    updated: 'Mis à jour le',
  },
} as const;

const summary: Record<Locale, string> = {
  en: 'Covartex is a web and AI agency. It designs websites that convert, ranks businesses on Google (SEO), gets them cited by AI assistants such as ChatGPT, Perplexity and Google AI Overviews (AEO/GEO), builds mobile apps and custom SaaS platforms, ships AI solutions and workflow automation, and provides outsourced legal services (formalities, dedicated legal teams, supervision) for companies and law firms under French law.',
  fr: 'Covartex est une agence web et IA. Elle crée des sites qui convertissent, place les entreprises sur Google (SEO) et dans les réponses des IA comme ChatGPT, Perplexity ou Google AI Overviews (AEO/GEO), développe des applications mobiles et des SaaS sur mesure, déploie des solutions IA et des automatisations, et propose des services juridiques externalisés (formalités, équipes juridiques dédiées, supervision) en droit français.',
};

function keyFacts(): string[] {
  const reassurance = getDictionary('en')
    .common.reassurance.map((r) => r.charAt(0).toLowerCase() + r.slice(1))
    .join(', ');
  return [
    `- Languages: ${siteConfig.languages.join(', ')}`,
    '- Area served: worldwide, remote delivery; legal services cover French law (French companies and foreign groups with a French entity)',
    `- Free quote: ${reassurance} — ${abs('en', '/contact')} (FR: ${abs('fr', '/contact')})`,
    `- Contact: ${siteConfig.email} · ${siteConfig.phone}`,
    `- Website: ${abs('en', '/')} (English) · ${abs('fr', '/')} (French)`,
  ];
}

function serviceLines(locale: Locale): string[] {
  const l = labels[locale];
  return getCategories(locale).flatMap((c) => [
    '',
    `### ${c.title}`,
    '',
    c.description,
    '',
    ...c.services.map((s) => {
      const price = s.priceFrom ? ` ${l.from} ${formatEur(s.priceFrom, locale)}.` : '';
      return `- [${s.name}](${abs(locale, `/services/${s.slug}`)}): ${s.promise}${price}`;
    }),
  ]);
}

function guideLines(locale: Locale): string[] {
  return getPosts(locale).map((p) => `- [${p.title}](${abs(locale, `/blog/${p.slug}`)}): ${p.description}`);
}

function industryLines(locale: Locale): string[] {
  return getIndustries(locale).map((i) => `- [${i.title}](${abs(locale, `/industries/${i.slug}`)}): ${i.summary[0]}`);
}

/** Each definition is one self-contained sentence, quotable as is. */
function glossaryLines(locale: Locale): string[] {
  return getTerms(locale).map((t) => `- [${t.term}](${abs(locale, `/glossary/${t.slug}`)}): ${t.definition}`);
}

export function buildLlmsTxt(): string {
  const lines = [
    `# ${siteConfig.name}`,
    '',
    `> ${summary.en}`,
    '',
    ...keyFacts(),
    '',
    `## ${labels.en.services}`,
    ...serviceLines('en'),
    '',
    `## ${labels.en.industries}`,
    '',
    ...industryLines('en'),
    '',
    `## ${labels.en.guides}`,
    '',
    ...guideLines('en'),
    '',
    `## ${labels.en.glossary}`,
    '',
    ...glossaryLines('en'),
    '',
    `## ${labels.en.faq}`,
    '',
    ...homeFaq.en.flatMap((f) => [`### ${f.q}`, '', f.a, '']),
    '## Français',
    '',
    `> ${summary.fr}`,
    '',
    `### ${labels.fr.services}`,
    ...serviceLines('fr').map((line) => (line.startsWith('### ') ? `#${line}` : line)),
    '',
    `### ${labels.fr.industries}`,
    '',
    ...industryLines('fr'),
    '',
    `### ${labels.fr.guides}`,
    '',
    ...guideLines('fr'),
    '',
    `### ${labels.fr.glossary}`,
    '',
    ...glossaryLines('fr'),
    '',
    '## Optional',
    '',
    `- [Full text of every service, industry page, guide and glossary entry, EN + FR](${SITE_URL}/llms-full.txt)`,
    `- [Sitemap](${SITE_URL}/sitemap.xml)`,
    '',
  ];
  return lines.join('\n');
}

function fullContent(locale: Locale): string[] {
  const l = labels[locale];
  const out: string[] = [];

  for (const c of getCategories(locale)) {
    for (const s of c.services) {
      out.push(
        `## ${s.name}`,
        '',
        `URL: ${abs(locale, `/services/${s.slug}`)}`,
        `${l.category}: ${c.title}`,
        `${l.area}: ${s.area === 'france' ? l.france : l.worldwide}`,
        ...(s.priceFrom ? [`${l.from}: ${formatEur(s.priceFrom, locale)}`] : []),
        '',
        s.promise,
        '',
        ...s.overview.flatMap((p) => [p, '']),
        `### ${l.includes}`,
        '',
        ...s.deliverables.map((d) => `- ${d}`),
        '',
        `### ${l.benefits}`,
        '',
        ...s.benefits.map((b) => `- **${b.title}**: ${b.description}`),
        '',
        `### ${l.process}`,
        '',
        ...s.process.map((p, i) => `${i + 1}. **${p.title}**: ${p.description}`),
        '',
        `### ${l.faq}`,
        '',
        ...s.faqs.flatMap((f) => [`**${f.q}**`, f.a, '']),
        '---',
        '',
      );
    }
  }

  for (const i of getIndustries(locale)) {
    out.push(
      `## ${i.title}`,
      '',
      `URL: ${abs(locale, `/industries/${i.slug}`)}`,
      `${l.area}: ${i.area === 'france' ? l.france : l.worldwide}`,
      '',
      i.promise,
      '',
      `### ${l.inShort}`,
      '',
      ...i.summary.map((x) => `- ${x}`),
      '',
      `### ${l.challenges}`,
      '',
      ...i.challenges.map((c) => `- **${c.title}**: ${c.description}`),
      '',
      `### ${l.solutions}`,
      '',
      ...i.solutions.map((s) => `- **${s.title}** (${abs(locale, `/services/${s.service}`)}): ${s.text}`),
      '',
      ...(i.rules
        ? [`### ${l.rules}: ${i.rules.title}`, '', ...i.rules.paragraphs.flatMap((x) => [x, '']), ...(i.rules.list ?? []).map((x) => `- ${x}`), '']
        : []),
      `### ${l.faq}`,
      '',
      ...i.faqs.flatMap((f) => [`**${f.q}**`, f.a, '']),
      '---',
      '',
    );
  }

  out.push(`## ${l.glossary}`, '');
  for (const t of getTerms(locale)) {
    out.push(
      `### ${termTitle(t)}`,
      '',
      `URL: ${abs(locale, `/glossary/${t.slug}`)}`,
      '',
      t.definition,
      '',
      ...t.body.flatMap((x) => [x, '']),
      ...(t.keyPoints?.length ? [...t.keyPoints.map((x) => `- ${x}`), ''] : []),
    );
  }
  out.push('---', '');

  for (const p of getPosts(locale)) {
    out.push(
      `## ${p.title}`,
      '',
      `URL: ${abs(locale, `/blog/${p.slug}`)}`,
      `${l.published} ${p.date}${p.updated ? ` · ${l.updated} ${p.updated}` : ''}`,
      '',
      ...(p.takeaways?.length ? [`### ${l.inShort}`, '', ...p.takeaways.map((t) => `- ${t}`), ''] : []),
      ...p.intro.flatMap((x) => [x, '']),
      ...p.sections.flatMap((s) => [
        `### ${s.heading}`,
        '',
        ...(s.paragraphs ?? []).flatMap((x) => [x, '']),
        ...(s.list?.length ? [...s.list.map((x) => `- ${x}`), ''] : []),
        ...(s.code ? ['```', s.code, '```', ''] : []),
      ]),
      ...p.conclusion.flatMap((x) => [x, '']),
      ...(p.faqs?.length ? [`### ${l.faq}`, '', ...p.faqs.flatMap((f) => [`**${f.q}**`, f.a, ''])] : []),
      '---',
      '',
    );
  }

  return out;
}

export function buildLlmsFullTxt(): string {
  return [
    `# ${siteConfig.name} — full content`,
    '',
    `> ${summary.en}`,
    '',
    ...keyFacts(),
    '',
    '# English',
    '',
    ...fullContent('en'),
    '# Français',
    '',
    `> ${summary.fr}`,
    '',
    ...fullContent('fr'),
  ].join('\n');
}
