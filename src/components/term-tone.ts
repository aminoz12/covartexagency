import { serviceTone, toneClass, type Tone } from '@/lib/services';
import type { TermGroup } from '@/lib/glossary';

const groupTone: Record<TermGroup, Tone> = { visibility: 'web', build: 'apps', legal: 'legal' };

/** A glossary term wears the colour of its related service, else of its group. */
export function termToneClass(term: { group: TermGroup; service?: string }): string {
  return toneClass(serviceTone(term.service) ?? groupTone[term.group]);
}
