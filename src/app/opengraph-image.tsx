import { ImageResponse } from 'next/og';
import { siteConfig } from '@/config/site';

export const alt = 'Covartex — Site web, SEO, IA & services juridiques externalisés';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Default social share card in the v4 "ember" palette: charcoal ground, magenta / amber glows, gradient accent.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          backgroundColor: '#141414',
          backgroundImage:
            'radial-gradient(ellipse 60% 70% at 0% 20%, rgba(214, 51, 132, 0.45) 0%, transparent 60%), radial-gradient(ellipse 60% 70% at 100% 0%, rgba(230, 120, 40, 0.42) 0%, transparent 60%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 26, letterSpacing: 4, color: '#ff7a45' }}>
          AGENCE WEB · IA · JURIDIQUE
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 120, fontWeight: 600, letterSpacing: -4, lineHeight: 1 }}>{siteConfig.name}</div>
          <div style={{ marginTop: 28, fontSize: 40, color: 'rgba(255, 255, 255, 0.78)', lineHeight: 1.25, maxWidth: 1000 }}>
            Site web · Première page Google · Cité par ChatGPT · Applications · Automatisation · Services juridiques
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, fontSize: 30 }}>
          <div style={{ width: 56, height: 4, backgroundImage: 'linear-gradient(90deg, #ff4f9a, #ff9a3c)' }} />
          Devis gratuit sous 48 h
        </div>
      </div>
    ),
    { ...size },
  );
}
