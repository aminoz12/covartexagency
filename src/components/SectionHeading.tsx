import Reveal from '@/components/Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  /** Optional muted tail rendered on its own line, in the hero's second voice. */
  tail?: string;
  text?: string;
  /** Right-aligned slot (a link, a button). */
  action?: React.ReactNode;
  className?: string;
}

/**
 * Section opener used across the site: mono eyebrow, light display title,
 * optional lead text. Same voice as the homepage hero.
 */
export default function SectionHeading({ eyebrow, title, tail, text, action, className = '' }: SectionHeadingProps) {
  return (
    <Reveal className={`flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14 ${className}`}>
      <div className="max-w-3xl">
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h2 className="text-display-2">
          {title}
          {tail && (
            <>
              {' '}
              <span className="display-muted">{tail}</span>
            </>
          )}
        </h2>
        {text && <p className="lead mt-5 max-w-2xl">{text}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>
  );
}
