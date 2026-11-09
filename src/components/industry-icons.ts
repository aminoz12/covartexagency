import { Building2, GraduationCap, HardHat, Rocket, Scale, Stethoscope, type LucideIcon } from 'lucide-react';

/** One line icon per industry page (src/lib/industries). */
export const industryIcons: Record<string, LucideIcon> = {
  'cabinets-avocats': Scale,
  'professions-sante': Stethoscope,
  'artisans-btp': HardHat,
  'organismes-formation': GraduationCap,
  'startups-saas': Rocket,
};

export function industryIcon(slug: string): LucideIcon {
  return industryIcons[slug] ?? Building2;
}
