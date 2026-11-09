import { NextResponse } from 'next/server';

/**
 * Quote-request endpoint.
 *
 * Forwards the lead as JSON to CONTACT_WEBHOOK_URL (an n8n / Make / Zapier /
 * Formspree webhook, or your CRM). If the variable is not set the lead is
 * logged server-side only — set it before going live.
 */
const MAX = { name: 120, email: 200, phone: 40, company: 120, service: 80, budget: 40, message: 5000 };

function clean(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  // Honeypot filled → pretend success, drop silently.
  if (clean(body.website, 10).length > 0) {
    return NextResponse.json({ ok: true });
  }

  const lead = {
    name: clean(body.name, MAX.name),
    email: clean(body.email, MAX.email),
    phone: clean(body.phone, MAX.phone),
    company: clean(body.company, MAX.company),
    service: clean(body.service, MAX.service),
    budget: clean(body.budget, MAX.budget),
    message: clean(body.message, MAX.message),
    locale: clean(body.locale, 5) || 'fr',
    page: clean(body.page, 500),
    receivedAt: new Date().toISOString(),
  };

  if (!lead.name || !lead.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return NextResponse.json({ ok: false, error: 'validation' }, { status: 422 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    console.warn('[contact] CONTACT_WEBHOOK_URL is not set — lead not forwarded:', lead);
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
    });
    if (!res.ok) throw new Error(`webhook responded ${res.status}`);
  } catch (err) {
    console.error('[contact] forwarding failed:', err);
    return NextResponse.json({ ok: false, error: 'forwarding' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
