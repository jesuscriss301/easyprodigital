import fs from 'node:fs/promises';
import path from 'node:path';
import { config } from '../config/default.js';
import { aiComplete } from './ai/provider.js';
import { searchWeb } from './serp/search.js';
import { scrapeTopPages, buildSerpDigest, detectNewsSignals } from './serp/scraper.js';
import { findImage, sourceImageCredit } from './images/sourcer.js';
import {
  keywordResearchPrompt, outlinePrompt, articlePrompt,
  imageQueryPrompt, aiImagePrompt,
} from './prompts/prompts.js';
import { renderArticle } from './templates/render.js';
import { slugify, log, extractJSON } from './utils/helpers.js';

const MANIFEST = () => path.join(config.output.dir, 'posts.json');

export async function generateArticle(topic, opts = {}) {
  log('pipeline', `═══ Generando artículo: "${topic}" ═══`);

  // ── 1. SERP: buscar y scrapear las 3 primeras páginas ──
  log('serp', 'Buscando en el buscador…');
  const results = await searchWeb(topic);
  log('serp', `${results.length} resultados. Scrapeando top ${config.search.pagesToScrape}…`);
  const pages = await scrapeTopPages(results);
  const serpDigest = buildSerpDigest(pages);

  // ── 2. Investigación de keywords (captura todas las posibles) ──
  log('keywords', 'Extrayendo palabras clave con IA…');
  const kwRaw = await aiComplete({ ...keywordResearchPrompt({ topic, language: config.language, serpDigest }), temperature: 0.4 });
  const keywords = extractJSON(kwRaw);
  log('keywords', `Principal: "${keywords.primary_keyword}" · ${keywords.secondary_keywords.length} secundarias · ${keywords.long_tail.length} long-tail`);

  const scientific = opts.scientific ?? keywords.is_scientific;
  const newsMode = opts.news ?? detectNewsSignals(pages, keywords);
  if (scientific) log('pipeline', 'Modo científico: se añadirán citas y referencias.');
  if (newsMode) log('pipeline', 'Modo actualidad: imágenes de medios → solo enlace + crédito a la fuente original.');

  // ── 3. Esquema del artículo ──
  log('outline', 'Diseñando estructura…');
  const outRaw = await aiComplete({
    ...outlinePrompt({ topic, language: config.language, keywords, serpDigest, competitorGaps: keywords.competitor_gaps }),
    temperature: 0.5,
  });
  const outline = extractJSON(outRaw);

  // ── 4. Fuentes citables (modo científico) ──
  const citations = scientific
    ? pages.filter(p => p.wordCount > 200).map(p => ({ title: p.title, url: p.url }))
    : [];

  // ── 5. Redacción del artículo completo ──
  log('writer', 'Redactando artículo (esto toma un momento)…');
  const markdown = await aiComplete({
    ...articlePrompt({ topic, language: config.language, keywords, outline, serpDigest, scientific, newsMode, sourceCitations: citations }),
    maxTokens: 8000,
    temperature: 0.7,
  });

  // ── 6. Imágenes ──
  log('images', 'Buscando imágenes libres de derechos…');
  const concepts = (outline.sections || []).filter(s => s.needs_image && s.image_concept).map(s => s.image_concept);
  let queries = { queries: concepts.map(c => c.split(' ').slice(0, 3).join(' ')), featured_query: topic };
  try {
    const qRaw = await aiComplete({ ...imageQueryPrompt({ topic, imageConcepts: [outline.title, ...concepts], language: config.language }), temperature: 0.3, maxTokens: 800 });
    const parsed = extractJSON(qRaw);
    queries = { queries: parsed.queries.slice(1), featured_query: parsed.featured_query || parsed.queries[0] };
  } catch { log('images', 'No se pudieron optimizar las consultas; usando conceptos directos.'); }

  const featured = await findImage(queries.featured_query, { concept: aiImagePrompt(queries.featured_query, topic) });
  const inline = [];
  for (let i = 0; i < concepts.length; i++) {
    const q = queries.queries[i] || concepts[i];
    const img = await findImage(q, { concept: aiImagePrompt(concepts[i], topic) });
    if (img) inline.push(img);
  }

  // Modo actualidad: imágenes reales del SERP → referencia con crédito, no copia
  const sourceImages = newsMode
    ? pages.flatMap(p => p.images).slice(0, 3).map(s => sourceImageCredit(s))
    : [];

  // ── 7. Artículos relacionados (desde el manifiesto del sitio) ──
  const manifest = await loadManifest();
  const related = pickRelated(manifest.articles, keywords, outline.slug);

  // ── 8. Render con plantilla rotativa (5 diseños) ──
  const slug = slugify(outline.slug || outline.title);
  const templateIndex = opts.template ?? (manifest.lastTemplate + 1) % 5;
  const { html, templateName } = renderArticle({
    markdown,
    meta: {
      title: outline.title,
      metaDescription: outline.meta_description,
      slug,
      keywords: [keywords.primary_keyword, ...keywords.secondary_keywords],
    },
    images: { featured, inline },
    sourceImages,
    citations,
    related,
    scientific,
    langCode: config.language,
  }, templateIndex);

  // ── 9. Guardar HTML + metadatos y actualizar manifiesto ──
  await fs.mkdir(config.output.dir, { recursive: true });
  const htmlPath = path.join(config.output.dir, `${slug}.html`);
  await fs.writeFile(htmlPath, html, 'utf8');
  await fs.writeFile(path.join(config.output.dir, `${slug}.json`), JSON.stringify({
    topic, slug, template: templateName, keywords, outline: { title: outline.title, meta: outline.meta_description },
    scientific, newsMode, citations, generatedAt: new Date().toISOString(),
  }, null, 2), 'utf8');

  manifest.articles = manifest.articles.filter(a => a.slug !== slug);
  manifest.articles.push({
    slug, title: outline.title, description: outline.meta_description,
    keywords: [keywords.primary_keyword, ...keywords.secondary_keywords, ...keywords.lsi_semantic],
    featuredImage: featured?.url || null, template: templateName,
  });
  manifest.lastTemplate = templateIndex;
  await fs.writeFile(MANIFEST(), JSON.stringify(manifest, null, 2), 'utf8');

  log('pipeline', `✔ Artículo listo: ${htmlPath} (plantilla: ${templateName})`);
  return { htmlPath, slug, templateName, keywords };
}

/** Relaciona artículos por solapamiento de keywords (ideal para enlaces internos SEO). */
function pickRelated(articles, keywords, currentSlug) {
  const mine = new Set([keywords.primary_keyword, ...keywords.secondary_keywords, ...keywords.lsi_semantic]
    .map(k => k.toLowerCase()));
  return articles
    .filter(a => a.slug !== currentSlug)
    .map(a => ({
      ...a,
      score: (a.keywords || []).reduce((s, k) => s + (mine.has(k.toLowerCase()) ? 1 : 0), 0),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

async function loadManifest() {
  try {
    return JSON.parse(await fs.readFile(MANIFEST(), 'utf8'));
  } catch {
    return { articles: [], lastTemplate: -1 };
  }
}
