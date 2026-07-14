import { config } from '../../config/default.js';
import { fetchWithTimeout, log } from '../utils/helpers.js';

/**
 * ESTRATEGIA DE IMÁGENES (en orden, respetando derechos de autor):
 *  1. Bancos gratuitos con licencia libre (Pexels → Pixabay → Unsplash).
 *     Se valida resolución mínima (config.images.minWidth/minHeight).
 *  2. Si el tema es de ACTUALIDAD (noticias, eventos, personas reales):
 *     NO se copian imágenes de los medios — el artículo enlaza y ACREDITA
 *     la fuente original y lo menciona en el texto.
 *  3. Último recurso: generación por IA (DALL·E 3) con prompt seguro.
 *
 * Devuelve objetos: { url, width, height, alt, credit, creditUrl, license, kind }
 *   kind: 'stock' | 'source-credit' | 'ai'
 */
export async function findImage(query, { concept } = {}) {
  const min = config.images;
  const providers = [
    ['Pexels', pexels, min.pexelsKey],
    ['Pixabay', pixabay, min.pixabayKey],
    ['Unsplash', unsplash, min.unsplashKey],
  ];

  for (const [name, fn, key] of providers) {
    if (!key) continue;
    try {
      const img = await fn(query, key);
      if (img && img.width >= min.minWidth && img.height >= min.minHeight) {
        log('images', `  ✓ ${name}: "${query}" (${img.width}×${img.height})`);
        return img;
      }
      if (img) log('images', `  ✗ ${name}: resolución insuficiente (${img.width}×${img.height} < ${min.minWidth}×${min.minHeight})`);
    } catch (err) {
      log('images', `  ✗ ${name} falló: ${err.message}`);
    }
  }

  // Último recurso: IA
  if (config.images.aiProvider === 'openai' && config.ai.keys.openai) {
    try {
      const img = await dalle(concept || query);
      log('images', `  ✓ IA (DALL·E 3): "${query}"`);
      return img;
    } catch (err) {
      log('images', `  ✗ IA falló: ${err.message}`);
    }
  }
  return null;
}

/** Para temas de actualidad: referencia con crédito a la imagen del medio original (no se copia el archivo). */
export function sourceImageCredit(scrapedImage, caption) {
  return {
    url: scrapedImage.src,
    width: null, height: null,
    alt: scrapedImage.alt || caption || '',
    credit: `Imagen: ${scrapedImage.sourceName} (fuente original)`,
    creditUrl: scrapedImage.sourcePage,
    license: 'source-attribution',
    kind: 'source-credit',
  };
}

// ── Pexels ── licencia Pexels (uso libre, atribución apreciada) ──
async function pexels(query, key) {
  const res = await fetchWithTimeout(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=5&orientation=landscape`,
    { headers: { Authorization: key } },
  );
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  const p = (data.photos || []).find(ph => ph.width >= config.images.minWidth);
  if (!p) return null;
  return {
    url: p.src.large2x || p.src.large || p.src.original,
    width: p.width, height: p.height,
    alt: p.alt || query,
    credit: `Foto de ${p.photographer} en Pexels`,
    creditUrl: p.url,
    license: 'Pexels License',
    kind: 'stock',
  };
}

// ── Pixabay ── licencia Pixabay (uso libre) ──
async function pixabay(query, key) {
  const res = await fetchWithTimeout(
    `https://pixabay.com/api/?key=${key}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&min_width=${config.images.minWidth}&min_height=${config.images.minHeight}&per_page=5&safesearch=true`,
  );
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  const p = (data.hits || [])[0];
  if (!p) return null;
  return {
    url: p.largeImageURL,
    width: p.imageWidth, height: p.imageHeight,
    alt: (p.tags || query).split(',')[0],
    credit: `Imagen de ${p.user} en Pixabay`,
    creditUrl: p.pageURL,
    license: 'Pixabay License',
    kind: 'stock',
  };
}

// ── Unsplash ── licencia Unsplash (uso libre, atribución requerida por guidelines de API) ──
async function unsplash(query, key) {
  const res = await fetchWithTimeout(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=5&orientation=landscape`,
    { headers: { Authorization: `Client-ID ${key}` } },
  );
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  const p = (data.results || []).find(ph => ph.width >= config.images.minWidth);
  if (!p) return null;
  return {
    url: p.urls.regular + '&w=1600',
    width: p.width, height: p.height,
    alt: p.alt_description || query,
    credit: `Foto de ${p.user.name} en Unsplash`,
    creditUrl: p.links.html,
    license: 'Unsplash License',
    kind: 'stock',
  };
}

// ── DALL·E 3 (último recurso) ──
async function dalle(concept) {
  const res = await fetchWithTimeout('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${config.ai.keys.openai}`,
    },
    body: JSON.stringify({
      model: 'dall-e-3',
      prompt: concept,
      size: '1792x1024',
      quality: 'standard',
      n: 1,
    }),
  }, 60000);
  if (!res.ok) throw new Error(`DALL·E ${res.status}`);
  const data = await res.json();
  return {
    url: data.data[0].url,
    width: 1792, height: 1024,
    alt: concept.slice(0, 120),
    credit: 'Imagen generada con IA (DALL·E 3)',
    creditUrl: null,
    license: 'ai-generated',
    kind: 'ai',
  };
}
