import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — Site web, SEO, IA & services juridiques`,
    short_name: siteConfig.shortName,
    description:
      'Création de site web, référencement Google, visibilité IA, applications sur mesure, automatisation et services juridiques externalisés.',
    start_url: '/',
    display: 'standalone',
    background_color: '#141414',
    theme_color: '#141414',
    lang: 'fr',
    icons: [
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
