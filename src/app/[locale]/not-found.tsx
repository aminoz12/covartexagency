import Link from 'next/link';
import { getDictionary } from '@/i18n/dictionary';

/**
 * not-found.tsx does not receive route params, so this page is bilingual.
 */
export default function NotFound() {
  const fr = getDictionary('fr').common;
  const en = getDictionary('en').common;

  return (
    <section className="section relative overflow-hidden pt-40 pb-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_0%,rgba(214,51,132,0.25),transparent_70%),radial-gradient(ellipse_50%_50%_at_90%_10%,rgba(230,120,40,0.22),transparent_70%)]"
        aria-hidden
      />
      <div className="container-x relative max-w-2xl">
        <div className="card p-8 md:p-12">
          <p className="eyebrow mb-5">404</p>
          <h1 className="text-display-2 text-white" lang="fr">
            {fr.notFoundTitle}
          </h1>
          <p className="mt-4 text-lg text-white/70" lang="fr">
            {fr.notFoundText}
          </p>
          <Link href="/" className="btn btn-primary mt-8" lang="fr">
            {fr.backHome}
          </Link>

          <hr className="hairline my-12" />

          <h2 className="text-display-3 text-white" lang="en">
            {en.notFoundTitle}
          </h2>
          <p className="mt-3 text-white/70" lang="en">
            {en.notFoundText}
          </p>
          <Link href="/en" className="btn btn-secondary mt-6" lang="en">
            {en.backHome}
          </Link>
        </div>
      </div>
    </section>
  );
}
