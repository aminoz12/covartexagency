import { buildLlmsFullTxt } from '@/lib/llms';

/** Full text of every service page and guide, EN + FR — see src/lib/llms.ts. */
export const dynamic = 'force-static';

export function GET() {
  return new Response(buildLlmsFullTxt(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
