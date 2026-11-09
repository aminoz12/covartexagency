import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/config/site';

/**
 * AI answer engines and assistants, allowed explicitly. Being crawlable by
 * them is a precondition for being cited or recommended in their answers,
 * and training crawlers are what teach models that the brand exists.
 * A bot that matches a named group ignores the "*" group, so the API
 * disallow is repeated here.
 */
const aiCrawlers = [
  // OpenAI — ChatGPT search, user-triggered browsing, model training
  'OAI-SearchBot',
  'ChatGPT-User',
  'GPTBot',
  // Anthropic — Claude search, user-triggered fetches, model training
  'Claude-SearchBot',
  'Claude-User',
  'ClaudeBot',
  // Perplexity
  'PerplexityBot',
  'Perplexity-User',
  // Google Gemini / Vertex grounding control token, Apple Intelligence
  'Google-Extended',
  'Applebot',
  'Applebot-Extended',
  // Microsoft Copilot and ChatGPT search lean on the Bing index
  'Bingbot',
  // Other assistants and the open corpus most models are trained on
  'Amazonbot',
  'DuckAssistBot',
  'meta-externalagent',
  'MistralAI-User',
  'CCBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: aiCrawlers,
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
