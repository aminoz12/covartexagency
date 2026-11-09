'use client';

import { motion, useReducedMotion } from 'motion/react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Seconds. */
  delay?: number;
  /** Pixels the element rises from. */
  distance?: number;
}

/**
 * Scroll reveal that matches the hero's entrance: fade + rise, once.
 * Content is still in the HTML for crawlers; motion is skipped when the
 * viewer prefers reduced motion.
 */
export default function Reveal({ children, className, delay = 0, distance = 24 }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
