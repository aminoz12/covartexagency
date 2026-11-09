import { notFound } from 'next/navigation';

/** Catch-all so unknown paths render the locale not-found page. */
export default function CatchAll() {
  notFound();
}
