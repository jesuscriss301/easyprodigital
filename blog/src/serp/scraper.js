import * as cheerio from 'cheerio';
import { config } from '../../config/default.js';
import { fetchWithTimeout, log, truncate, uniqueBy } from '../utils/helpers.js';

/**
 * Scrapea las N primeras páginas del buscador (por defecto 3).
 * Extrae: título, meta description, encabezados, texto principal,
 * y METADATOS de imágenes (URL, alt) — las imágenes de terceros
 * NUNCA se descargan ni se copian al artículo: solo sirven como
 * referencia de crédito/fuente cuando el tema es de actualidad.
 */
export async function scrapeTopPages(results) {
  const top = results.slice(0, config.search.pagesToScrape);
  const pages = [];

  for (const r of top) {
    try {
      log('scraper', `Analizando ${r.url}`);
      const res = await fetchWithTimeout(r.url, {}, 15000);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const ct = res.headers.get('content-type') || '';
      if (!ct.includes('html')) throw new Error(`content-type no HTML: ${ct}`);
      const html = await res.text();
      pages.push(parsePage(html, r));
    } catch (err) {
      log('scraper', `  ✗ ${r.url} — ${err.message} (se usará solo el snippet SERP)`);
      pages.push({
        url: r.url, title: r.title, metaDescription: r.snippet,
        headings: [], text: r.snippet, images: [], hasVideo: false, wordCount: 0,
      });
    }
  }
  return pages;
}

function parsePage(html, result) {
  const $ = cheerio.load(html);
  $('script, style, nav, footer, header, aside, iframe, noscript, form').remove();

  const headings = [];
  $('h1, h2, h3').each((_, el) => {
    const t = $(el).text().trim().replace(/\s+/g, ' ');
    if (t && t.length < 200) headings.push({ level: el.tagName.toLowerCase(), text: t });
  });

  const container = $('article').length ? $('article').first() : $('main').length ? $('main').first() : $('body');
  const text = container.text().replace(/\s+/g, ' ').trim();

  // Solo metadatos de imágenes reales del contenido (para crédito de fuente)
  const images = [];
  container.find('img').each((_, el) => {
    const src = $(el).attr('src') || $(el).attr('data-src') || '';
    const alt = ($(el).attr('alt') || '').trim();
    if (!src || src.startsWith('data:')) return;
    const abs = toAbsolute(src, result.url);
    if (abs) images.push({ src: abs, alt, sourcePage: result.url, sourceName: hostname(result.url) });
  });

  const hasVideo = /youtube\.com|youtu\.be|vimeo\.com|<video/i.test(html) || $('video').length > 0;

  return {
    url: result.url,
    title: $('title').text().trim() || result.title,
    metaDescription: $('meta[name="description"]').attr('content') || result.snippet || '',
    headings: headings.slice(0, 25),
    text: truncate(text, 6000),
    images: uniqueBy(images, i => i.src).slice(0, 8),
    hasVideo,
    wordCount: text.split(/\s+/).length,
  };
}

/** Digest compacto de la competencia para inyectar en los prompts. */
export function buildSerpDigest(pages) {
  return pages.map((p, i) => `
── RESULTADO #${i + 1}: ${p.title}
URL: ${p.url}
Meta: ${p.metaDescription}
Encabezados: ${p.headings.map(h => `[${h.level}] ${h.text}`).join(' | ') || '(no extraídos)'}
Extracto (${p.wordCount} palabras aprox.): ${truncate(p.text, 1500)}
${p.hasVideo ? '⚑ Contiene video incrustado.' : ''}`).join('\n');
}

/** Detecta si el SERP está dominado por medios/imágenes reales (noticias, eventos). */
export function detectNewsSignals(pages, keywords) {
  const newsDomains = /(\.gov|news|noticias|reuters|apnews|bbc|cnn|elpais|eltiempo|semana|infobae|elespectador)/i;
  const domainHits = pages.filter(p => newsDomains.test(p.url)).length;
  return keywords?.is_news_or_current_event || domainHits >= 2;
}

function toAbsolute(src, base) {
  try { return new URL(src, base).href; } catch { return null; }
}
function hostname(url) {
  try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return url; }
}
