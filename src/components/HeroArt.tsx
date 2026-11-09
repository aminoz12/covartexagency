import { facets } from '@/components/hero-art-data';

/**
 * Homepage centrepiece: a faceted, lit low-poly orb in the brand gradient,
 * glossy beads floating around it, an orbit ring and a spiral ribbon.
 * Pure inline SVG (no image request, no client JS); the float animations
 * are CSS and stop under prefers-reduced-motion.
 */

type Bead = readonly [cx: number, cy: number, r: number, fill: string, delay: number];

// Beads around the orb, then a few resting on its surface.
const beads: readonly Bead[] = [
  [112, 128, 15, 'url(#bead-pink)', 0],
  [396, 112, 19, 'url(#bead-orange)', 1.2],
  [432, 300, 10, 'url(#bead-cream)', 2.1],
  [84, 318, 9, 'url(#bead-orange)', 0.6],
  [344, 52, 8, 'url(#bead-cream)', 1.8],
  [150, 432, 11, 'url(#bead-pink)', 2.6],
  [378, 410, 7, 'url(#bead-violet)', 0.9],
  [62, 212, 6, 'url(#bead-violet)', 3],
  [236, 30, 6, 'url(#bead-orange)', 2.3],
  [306, 166, 17, 'url(#bead-orange)', 0.4],
  [196, 214, 11, 'url(#bead-cream)', 1.5],
  [338, 262, 13, 'url(#bead-pink)', 2.8],
  [228, 318, 8, 'url(#bead-orange)', 1.1],
];

// Spiral ribbon hanging under the orb (a helix seen from the side).
const spring = (() => {
  const pts: string[] = [];
  for (let i = 0; i <= 120; i++) {
    const t = i / 120;
    const a = t * Math.PI * 2 * 3.5;
    const x = 256 + Math.sin(a) * 30 * (1 - t * 0.3);
    const y = 420 + t * 92 + Math.cos(a) * 8;
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return `M${pts.join(' L')}`;
})();

export default function HeroArt({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 520" className={className} aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="orb-glow" cx="50%" cy="48%" r="50%">
          <stop offset="0%" stopColor="#ff4f9a" stopOpacity="0.7" />
          <stop offset="45%" stopColor="#ff8a3d" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ff8a3d" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ring" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ff4f9a" stopOpacity="0" />
          <stop offset="35%" stopColor="#ff4f9a" stopOpacity="0.9" />
          <stop offset="70%" stopColor="#ff9a3c" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ff9a3c" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="ribbon" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffc15e" />
          <stop offset="100%" stopColor="#ff4f9a" />
        </linearGradient>
        {[
          ['bead-pink', '#ffd1e4', '#ff4f9a', '#9c1d5a'],
          ['bead-orange', '#ffe2c2', '#ff8a3d', '#a3420f'],
          ['bead-cream', '#ffffff', '#f5e6d3', '#b58f6a'],
          ['bead-violet', '#efd9ff', '#a855f7', '#4c1d95'],
        ].map(([id, hi, mid, lo]) => (
          <radialGradient key={id} id={id} cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor={hi} />
            <stop offset="45%" stopColor={mid} />
            <stop offset="100%" stopColor={lo} />
          </radialGradient>
        ))}
      </defs>

      <circle cx="250" cy="250" r="250" fill="url(#orb-glow)" />

      <g className="hero-float">
        {/* Back half of the orbit ring */}
        <g transform="rotate(-16 250 250)">
          <path d="M 18 250 A 232 64 0 0 1 482 250" fill="none" stroke="url(#ring)" strokeWidth="2" opacity="0.55" />
        </g>

        <path d={spring} fill="none" stroke="url(#ribbon)" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />

        <g stroke="rgba(255,255,255,0.10)" strokeWidth="0.6" strokeLinejoin="round">
          {facets.map(([points, fill]) => (
            <polygon key={points} points={points} fill={fill} />
          ))}
        </g>

        {/* Front half of the orbit ring */}
        <g transform="rotate(-16 250 250)">
          <path d="M 482 250 A 232 64 0 0 1 18 250" fill="none" stroke="url(#ring)" strokeWidth="2.5" />
        </g>
      </g>

      {beads.map(([cx, cy, r, fill, delay]) => (
        <circle
          key={`${cx}-${cy}`}
          className="hero-bead"
          cx={cx}
          cy={cy}
          r={r}
          fill={fill}
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
    </svg>
  );
}
