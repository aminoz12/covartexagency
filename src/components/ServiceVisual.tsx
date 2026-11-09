import type { Tone } from '@/lib/services';

/**
 * Flat illustrations for the four practice areas, in the signature
 * pink → orange gradient (480×360 viewBox). Inline SVG, decorative.
 * Gradient ids are prefixed per variant so several can share a page.
 */

const W = 'rgba(255,255,255,0.95)';
const W2 = 'rgba(255,255,255,0.6)';
const W3 = 'rgba(255,255,255,0.3)';

function Defs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-grad`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ff4f9a" />
        <stop offset="55%" stopColor="#ff7a59" />
        <stop offset="100%" stopColor="#ffb057" />
      </linearGradient>
      <linearGradient id={`${id}-soft`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffd6e6" />
        <stop offset="100%" stopColor="#ffe4cc" />
      </linearGradient>
      <linearGradient id={`${id}-dark`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2c2c2c" />
        <stop offset="100%" stopColor="#1c1c1c" />
      </linearGradient>
      <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ff6a7f" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#ff6a7f" stopOpacity="0" />
      </radialGradient>
    </defs>
  );
}

/** Small outline gear (like the reference's settings cogs). */
function Gear({ x, y, r }: { x: number; y: number; r: number }) {
  const teeth = Array.from({ length: 8 }, (_, i) => {
    const a = (i / 8) * Math.PI * 2;
    return (
      <rect
        key={i}
        x={x - r * 0.18}
        y={y - r * 1.25}
        width={r * 0.36}
        height={r * 0.5}
        rx={r * 0.08}
        transform={`rotate(${(a * 180) / Math.PI} ${x} ${y})`}
        fill="#d9d9d9"
      />
    );
  });
  return (
    <g>
      {teeth}
      <circle cx={x} cy={y} r={r} fill="#d9d9d9" />
      <circle cx={x} cy={y} r={r * 0.45} fill="#1b1b1b" />
    </g>
  );
}

function Web() {
  const id = 'sv-web';
  return (
    <>
      <Defs id={id} />
      <ellipse cx="240" cy="190" rx="200" ry="150" fill={`url(#${id}-glow)`} />
      <Gear x={92} y={70} r={16} />
      <Gear x={130} y={46} r={10} />
      {/* Laptop */}
      <rect x="112" y="78" width="268" height="178" rx="12" fill={`url(#${id}-dark)`} stroke={W3} />
      <rect x="122" y="88" width="248" height="158" rx="6" fill={`url(#${id}-grad)`} />
      <rect x="122" y="88" width="248" height="16" rx="6" fill="rgba(255,255,255,0.22)" />
      <circle cx="132" cy="96" r="3" fill={W} />
      <circle cx="142" cy="96" r="3" fill={W2} />
      <circle cx="152" cy="96" r="3" fill={W3} />
      <rect x="136" y="116" width="104" height="11" rx="4" fill={W} />
      <rect x="136" y="133" width="78" height="7" rx="3" fill={W2} />
      <rect x="136" y="148" width="46" height="14" rx="7" fill="#1b1b1b" />
      <rect x="254" y="114" width="102" height="62" rx="7" fill={W} />
      <polyline points="262,164 280,150 296,156 314,134 332,142 348,124" fill="none" stroke="#ff4f9a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="136" y="186" width="66" height="44" rx="6" fill="rgba(255,255,255,0.85)" />
      <rect x="210" y="186" width="66" height="44" rx="6" fill="rgba(255,255,255,0.7)" />
      <rect x="284" y="186" width="72" height="44" rx="6" fill="rgba(255,255,255,0.55)" />
      <circle cx="152" cy="202" r="7" fill="#ff7a59" />
      <rect x="146" y="215" width="44" height="5" rx="2.5" fill="rgba(0,0,0,0.25)" />
      <path d="M 92 256 L 400 256 L 420 272 Q 420 278 412 278 L 80 278 Q 72 278 72 272 Z" fill={`url(#${id}-soft)`} />
      <rect x="216" y="258" width="60" height="5" rx="2.5" fill="rgba(0,0,0,0.12)" />
      {/* Floating cards */}
      <g>
        <rect x="52" y="128" width="78" height="100" rx="12" fill={W} />
        <rect x="64" y="142" width="34" height="8" rx="4" fill="#ff4f9a" />
        <rect x="64" y="158" width="54" height="5" rx="2.5" fill="rgba(0,0,0,0.18)" />
        <rect x="64" y="169" width="44" height="5" rx="2.5" fill="rgba(0,0,0,0.12)" />
        <rect x="64" y="186" width="54" height="26" rx="6" fill={`url(#${id}-grad)`} />
        <line x1="130" y1="178" x2="122" y2="178" stroke={W2} strokeWidth="2" />
      </g>
      <g>
        <rect x="366" y="52" width="92" height="126" rx="14" fill={`url(#${id}-grad)`} stroke="rgba(255,255,255,0.5)" />
        <text x="380" y="80" fill="#ffffff" fontSize="15" fontWeight="600" fontFamily="Lexend, Arial, sans-serif">#1</text>
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i} d={`M ${385 + i * 14} 92 l 2.4 4.8 5.3 0.8 -3.8 3.7 0.9 5.2 -4.8 -2.5 -4.8 2.5 0.9 -5.2 -3.8 -3.7 5.3 -0.8 z`} fill="#ffffff" />
        ))}
        <rect x="380" y="118" width="62" height="6" rx="3" fill={W} />
        <rect x="380" y="131" width="48" height="6" rx="3" fill={W2} />
        <rect x="380" y="150" width="62" height="16" rx="8" fill="#1b1b1b" />
        <line x1="366" y1="140" x2="356" y2="140" stroke={W2} strokeWidth="2" />
      </g>
    </>
  );
}

function Apps() {
  const id = 'sv-apps';
  return (
    <>
      <Defs id={id} />
      <ellipse cx="240" cy="190" rx="200" ry="150" fill={`url(#${id}-glow)`} />
      {/* Tablet */}
      <rect x="196" y="40" width="210" height="270" rx="22" fill={`url(#${id}-dark)`} stroke={W3} />
      <rect x="208" y="54" width="186" height="242" rx="12" fill={`url(#${id}-grad)`} />
      <rect x="222" y="70" width="90" height="10" rx="5" fill={W} />
      <rect x="222" y="88" width="62" height="6" rx="3" fill={W2} />
      {[0, 1].map((col) =>
        [0, 1].map((row) => (
          <rect key={`${col}-${row}`} x={222 + col * 86} y={108 + row * 70} width="76" height="60" rx="10" fill={row === 0 && col === 0 ? W : 'rgba(255,255,255,0.7)'} />
        )),
      )}
      <circle cx="242" cy="128" r="9" fill="#ff4f9a" />
      <rect x="234" y="146" width="44" height="5" rx="2.5" fill="rgba(0,0,0,0.2)" />
      <rect x="222" y="256" width="158" height="24" rx="12" fill="#1b1b1b" />
      {/* Phone */}
      <rect x="84" y="96" width="132" height="236" rx="26" fill="#121212" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
      <rect x="94" y="108" width="112" height="212" rx="18" fill={`url(#${id}-soft)`} />
      <rect x="132" y="114" width="36" height="7" rx="3.5" fill="#121212" />
      <rect x="104" y="132" width="60" height="9" rx="4.5" fill="#1b1b1b" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="104" y={152 + i * 40} width="92" height="32" rx="8" fill={W} />
          <circle cx="120" cy={168 + i * 40} r="8" fill={i === 1 ? '#ff9a3c' : '#ff4f9a'} />
          <rect x="134" y={162 + i * 40} width="50" height="5" rx="2.5" fill="rgba(0,0,0,0.25)" />
          <rect x="134" y={171 + i * 40} width="34" height="4" rx="2" fill="rgba(0,0,0,0.12)" />
        </g>
      ))}
      <rect x="104" y="280" width="92" height="26" rx="13" fill={`url(#${id}-grad)`} />
      {/* Notification */}
      <g>
        <rect x="330" y="20" width="128" height="46" rx="14" fill={W} />
        <circle cx="352" cy="43" r="11" fill={`url(#${id}-grad)`} />
        <rect x="370" y="35" width="72" height="6" rx="3" fill="rgba(0,0,0,0.3)" />
        <rect x="370" y="47" width="52" height="5" rx="2.5" fill="rgba(0,0,0,0.15)" />
      </g>
    </>
  );
}

function Ai() {
  const id = 'sv-ai';
  const nodes: [number, number][] = [[392, 70], [446, 128], [404, 186], [446, 250], [384, 290]];
  return (
    <>
      <Defs id={id} />
      <ellipse cx="230" cy="190" rx="200" ry="150" fill={`url(#${id}-glow)`} />
      {/* Network */}
      <g stroke="rgba(255,255,255,0.35)" strokeWidth="1.5">
        {nodes.slice(1).map(([x, y], i) => (
          <line key={i} x1={nodes[i][0]} y1={nodes[i][1]} x2={x} y2={y} />
        ))}
        <line x1="392" y1="70" x2="404" y2="186" />
        <line x1="404" y1="186" x2="384" y2="290" />
      </g>
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 2 ? 13 : 8} fill={i === 2 ? `url(#${id}-grad)` : W} />
      ))}
      {/* Chat window */}
      <rect x="48" y="44" width="300" height="270" rx="20" fill={`url(#${id}-dark)`} stroke={W3} />
      <path d="M 48 64 a 20 20 0 0 1 20 -20 h 260 a 20 20 0 0 1 20 20 v 24 h -300 z" fill={`url(#${id}-grad)`} />
      <path d="M 78 54 l 4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4 z" fill="#ffffff" />
      <rect x="102" y="60" width="96" height="9" rx="4.5" fill={W} />
      {/* Bubbles */}
      <rect x="68" y="106" width="176" height="44" rx="14" fill="rgba(255,255,255,0.1)" />
      <rect x="82" y="119" width="134" height="6" rx="3" fill={W2} />
      <rect x="82" y="132" width="96" height="6" rx="3" fill={W3} />
      <rect x="148" y="164" width="180" height="58" rx="14" fill={`url(#${id}-grad)`} />
      <rect x="162" y="178" width="148" height="6" rx="3" fill={W} />
      <rect x="162" y="191" width="128" height="6" rx="3" fill={W} />
      <rect x="162" y="204" width="84" height="6" rx="3" fill={W2} />
      <rect x="68" y="236" width="120" height="34" rx="12" fill="rgba(255,255,255,0.1)" />
      <circle cx="90" cy="253" r="4" fill={W} />
      <circle cx="104" cy="253" r="4" fill={W2} />
      <circle cx="118" cy="253" r="4" fill={W3} />
      <rect x="68" y="282" width="260" height="20" rx="10" fill="rgba(255,255,255,0.06)" stroke={W3} />
      <circle cx="316" cy="292" r="7" fill="#ff7a59" />
    </>
  );
}

function Legal() {
  const id = 'sv-legal';
  return (
    <>
      <Defs id={id} />
      <ellipse cx="240" cy="190" rx="200" ry="150" fill={`url(#${id}-glow)`} />
      {/* Document stack */}
      <rect x="150" y="62" width="190" height="248" rx="14" fill="rgba(255,255,255,0.18)" transform="rotate(-6 245 186)" />
      <rect x="140" y="52" width="190" height="248" rx="14" fill={`url(#${id}-soft)`} />
      <rect x="160" y="74" width="100" height="10" rx="5" fill="#1b1b1b" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x="160" y={98 + i * 16} width={i % 3 === 2 ? 110 : 150} height="6" rx="3" fill="rgba(0,0,0,0.18)" />
      ))}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <circle cx="170" cy={210 + i * 22} r="8" fill={`url(#${id}-grad)`} />
          <path d={`M 166 ${210 + i * 22} l 3 3 6 -6`} stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="186" y={207 + i * 22} width={i === 1 ? 80 : 110} height="6" rx="3" fill="rgba(0,0,0,0.22)" />
        </g>
      ))}
      <path d="M 250 282 q 14 -14 26 0 q 12 12 26 -4" fill="none" stroke="#1b1b1b" strokeWidth="2.5" strokeLinecap="round" />
      {/* Seal */}
      <circle cx="322" cy="246" r="40" fill={`url(#${id}-grad)`} />
      <circle cx="322" cy="246" r="31" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M 307 246 l 10 10 20 -20" stroke="#ffffff" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Deadline card */}
      <g>
        <rect x="46" y="96" width="96" height="104" rx="14" fill={`url(#${id}-dark)`} stroke={W3} />
        <path d="M 46 110 a 14 14 0 0 1 14 -14 h 68 a 14 14 0 0 1 14 14 v 14 h -96 z" fill={`url(#${id}-grad)`} />
        <text x="94" y="170" textAnchor="middle" fill="#ffffff" fontSize="34" fontWeight="600" fontFamily="Lexend, Arial, sans-serif">48h</text>
        <rect x="70" y="182" width="48" height="5" rx="2.5" fill={W3} />
      </g>
      {/* Scale */}
      <g stroke="#d9d9d9" strokeWidth="3" fill="none" strokeLinecap="round">
        <line x1="400" y1="70" x2="400" y2="150" />
        <line x1="364" y1="84" x2="436" y2="84" />
        <path d="M 364 84 l -14 34 h 28 z" />
        <path d="M 436 84 l -14 34 h 28 z" />
        <line x1="384" y1="150" x2="416" y2="150" />
      </g>
    </>
  );
}

const variants: Record<Tone, () => React.ReactElement> = { web: Web, apps: Apps, ai: Ai, legal: Legal };

export default function ServiceVisual({ tone, className = '' }: { tone: Tone; className?: string }) {
  const Variant = variants[tone];
  return (
    <svg viewBox="0 0 480 360" className={className} aria-hidden="true" focusable="false">
      <Variant />
    </svg>
  );
}
