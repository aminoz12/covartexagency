export interface FaqEntry {
  q: string;
  a: string;
}

interface FaqProps {
  items: FaqEntry[];
  /** Emit FAQPage JSON-LD (only once per page). */
  jsonLd?: boolean;
}

/**
 * Accessible FAQ in a liquid-glass panel, using native <details>. No client JS.
 */
export default function Faq({ items, jsonLd = false }: FaqProps) {
  const data = jsonLd
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null;

  return (
    <div className="glass-panel divide-y divide-white/10">
      {data && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      )}
      {items.map((f, i) => (
        <details key={f.q} className="faq group px-6 md:px-8">
          <summary className="flex items-start justify-between gap-6 py-5 md:py-6 text-[1.0625rem] md:text-lg text-white select-none transition-colors hover:text-white/90">
            <span className="flex items-start gap-4">
              <span className="mt-1 font-mono text-[11px] tracking-widest text-white/55">{String(i + 1).padStart(2, '0')}</span>
              <span>{f.q}</span>
            </span>
            <span aria-hidden className="faq-icon mt-0.5 shrink-0 text-2xl leading-none text-white/60 font-light">
              +
            </span>
          </summary>
          <p className="-mt-1 max-w-3xl pb-6 pl-9 leading-relaxed text-white/70">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
