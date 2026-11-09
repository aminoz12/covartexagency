import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { LocalizedProject } from '@/lib/agencyData';
import { toneClass } from '@/lib/services';

interface ProjectCardProps {
  project: LocalizedProject;
  href: string;
  readCase: string;
  /** Heading level: h3 inside a titled section, h2 on the portfolio index. */
  as?: 'h2' | 'h3';
  /** Bigger type for the two-column portfolio grid. */
  size?: 'default' | 'large';
}

/**
 * Case-study card (v4): the headline result shown big on a cover lit with
 * the area colour, then title, summary and the other figures. Used on the
 * homepage and the portfolio index so both read the same way.
 */
export default function ProjectCard({ project: p, href, readCase, as: Heading = 'h3', size = 'default' }: ProjectCardProps) {
  const [lead, ...rest] = p.results;
  const large = size === 'large';

  return (
    <Link href={href} className={`glass-panel tone-edge ${toneClass(p.tone)} group flex h-full flex-col`}>
      {lead && (
        <div className={`project-cover relative ${large ? 'px-6 pb-7 pt-7 md:px-8 md:pt-8' : 'px-6 pb-6 pt-7 md:px-7'}`}>
          <p className="eyebrow">{p.categoryLabel}</p>
          <p className={`mt-7 font-medium leading-none tracking-tight text-white tabular-nums ${large ? 'text-6xl md:text-7xl' : 'text-5xl md:text-6xl'}`}>
            {lead.value}
          </p>
          <p className="mt-3 text-sm text-white/72">{lead.label}</p>
        </div>
      )}

      <div className={`relative flex flex-1 flex-col border-t border-white/10 ${large ? 'p-6 md:p-8' : 'p-6 md:p-7'}`}>
        {!lead && <p className="eyebrow mb-4">{p.categoryLabel}</p>}
        <Heading className={large ? 'text-display-3' : 'text-xl leading-snug text-white'}>{p.title}</Heading>
        <p className={`mt-3 flex-1 leading-relaxed text-white/72 ${large ? '' : 'text-sm'}`}>{p.description}</p>

        {rest.length > 0 && (
          <dl className="mt-6 grid grid-cols-2 gap-4">
            {rest.map((r) => (
              <div key={r.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-[11px] leading-tight text-white/60">{r.label}</dt>
                <dd className={`font-medium text-white tabular-nums ${large ? 'text-xl md:text-2xl' : 'text-lg'}`}>{r.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <span className="link-arrow mt-6 text-sm">
          {readCase}
          <ArrowUpRight size={15} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
