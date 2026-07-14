import dotenv from 'dotenv';
import { fileURLToPath } from 'node:url';

// Carga blog/.env sin importar desde qué carpeta se ejecute el script
dotenv.config({ path: fileURLToPath(new URL('../.env', import.meta.url)) });

export const config = {
  ai: {
    provider: process.env.AI_PROVIDER || 'claude',
    keys: {
      claude: process.env.ANTHROPIC_API_KEY,
      openai: process.env.OPENAI_API_KEY,
      gemini: process.env.GEMINI_API_KEY,
      deepseek: process.env.DEEPSEEK_API_KEY,
    },
    models: {
      claude: process.env.CLAUDE_MODEL || 'claude-sonnet-4-5',
      openai: process.env.OPENAI_MODEL || 'gpt-4o',
      gemini: process.env.GEMINI_MODEL || 'gemini-2.0-flash',
      deepseek: process.env.DEEPSEEK_MODEL || 'deepseek-chat',
    },
  },
  search: {
    provider: process.env.SEARCH_PROVIDER || 'ddg',
    serpapiKey: process.env.SERPAPI_KEY,
    braveKey: process.env.BRAVE_API_KEY,
    topResults: 10,
    pagesToScrape: 3,
  },
  images: {
    pexelsKey: process.env.PEXELS_API_KEY,
    pixabayKey: process.env.PIXABAY_API_KEY,
    unsplashKey: process.env.UNSPLASH_ACCESS_KEY,
    aiProvider: process.env.IMAGE_AI_PROVIDER || 'none',
    minWidth: parseInt(process.env.MIN_IMAGE_WIDTH || '1200', 10),
    minHeight: parseInt(process.env.MIN_IMAGE_HEIGHT || '675', 10),
    perArticle: 4,
  },
  output: {
    dir: process.env.OUTPUT_DIR || './output',
    baseUrl: process.env.SITE_BASE_URL || 'https://easyprodigital.com/blog',
    // Raíz del sitio principal para los enlaces "volver al sitio" de las plantillas.
    // Vacío = enlaces relativos a la raíz ('/'), ideal cuando el blog vive en /blog del mismo dominio.
    siteUrl: (process.env.SITE_URL || '').replace(/\/+$/, ''),
  },
  language: process.env.LANGUAGE || 'es',
};
