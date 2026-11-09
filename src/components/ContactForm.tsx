'use client';

import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionary';

interface ContactFormProps {
  locale: Locale;
  t: Dictionary['contactPage'];
  /** [slug, label] pairs for the service select. */
  services: { slug: string; name: string }[];
  /** Pre-selected service slug (from ?service=...). */
  initialService?: string;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm({ locale, t, services, initialService }: ContactFormProps) {
  const [status, setStatus] = useState<Status>('idle');
  const validInitial = services.some((s) => s.slug === initialService) ? initialService : '';

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot: bots fill every field.
    if (typeof data.website === 'string' && data.website.length > 0) {
      setStatus('success');
      form.reset();
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, locale, page: window.location.href }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="glass-panel p-8 md:p-12" role="status" aria-live="polite">
        <span className="glow-dot h-10 w-10">
          <Check size={16} strokeWidth={2.5} aria-hidden="true" />
        </span>
        <h2 className="text-display-3 mt-6">{t.formTitle}</h2>
        <p className="lead mt-4">{t.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel space-y-5 p-6 md:p-9">
      <div>
        <p className="eyebrow mb-3">{t.eyebrow}</p>
        <h2 className="text-display-3">{t.formTitle}</h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label">{t.name} *</label>
          <input id="name" name="name" type="text" required autoComplete="name" className="field" />
        </div>
        <div>
          <label htmlFor="email" className="label">{t.email} *</label>
          <input id="email" name="email" type="email" required autoComplete="email" className="field" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="label">{t.phone}</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className="field" />
        </div>
        <div>
          <label htmlFor="company" className="label">{t.company}</label>
          <input id="company" name="company" type="text" autoComplete="organization" className="field" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="label">{t.service} *</label>
          <select id="service" name="service" required defaultValue={validInitial} className="field">
            <option value="" disabled>
              {t.selectService}
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
            <option value="other">{t.other}</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="label">{t.budget}</label>
          <select id="budget" name="budget" defaultValue="" className="field">
            <option value="">{t.selectBudget}</option>
            {t.budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="label">{t.message} *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="field resize-y"
          placeholder={t.messagePlaceholder}
        />
      </div>

      {/* Honeypot — hidden from humans. */}
      <div className="hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === 'error' && (
        <p className="rounded-xl border border-red-400/25 bg-red-500/10 p-3 text-sm text-red-200" role="alert">
          {t.error}
        </p>
      )}

      <button type="submit" disabled={status === 'sending'} className="btn btn-primary group w-full disabled:opacity-60">
        {status === 'sending' ? t.sending : t.submit}
        <ArrowUpRight
          size={17}
          aria-hidden="true"
          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </button>
      <p className="text-xs text-white/58">{t.privacy}</p>
    </form>
  );
}
