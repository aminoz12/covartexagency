interface MarqueeProps {
  items: readonly string[];
  /** Accessible name for the strip (the list is read once). */
  label: string;
}

/**
 * Tilted ribbon of services scrolling sideways, separated by orange
 * sparkles. The list is rendered twice for a seamless loop; the copy is
 * hidden from assistive tech. CSS-only; stops under reduced motion.
 */
export default function Marquee({ items, label }: MarqueeProps) {
  const group = (hidden: boolean) => (
    <ul className="ribbon-group" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-7">
          <span className="spark" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label={label} className="relative z-10 overflow-x-clip py-10 md:py-14">
      <div className="ribbon">
        <div className="ribbon-track">
          {group(false)}
          {group(true)}
        </div>
      </div>
    </section>
  );
}
