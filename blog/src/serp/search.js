import { config } from '../../config/default.js';
import { fetchWithTimeout, log } from '../utils/helpers.js';
import * as cheerio from 'cheerio';

/**
 * Devuelve resultados de búsqueda: [{ title, url, snippet }]
 * Proveedores: serpapi (recomendado, resultados reales de Google),
 * brave (API oficial), ddg (HTML de DuckDuckGo, sin API key).
 * Nota: scrapear Google directamente viola sus ToS y es frágil;
 * por eso se usan APIs o DuckDuckGo como fallback sin key.
 */
export async function searchWeb(query) {
  const p = config.search.provider;
  try {
    if (p === 'serpapi' && config.search.serpapiKey) return await serpapi(query);
    if (p === 'brave' && config.search.braveKey) return await brave(query);
    return await duckduckgo(query);
  } catch (err) {
    log('serp', `Proveedor "${p}" falló (${err.message}). Intentando DuckDuckGo…`);
    try { return await duckduckgo(query); }
    catch { return []; }
  }
}

async function serpapi(query) {
  const url = `https://serpapi.com/search.json?engine=google&q=${encodeURIComponent(query)}&num=${config.search.topResults}&hl=${config.language || 'es'}&api_key=${config.search.serpapiKey}`;
  const res = await fetchWithTimeout(url);
  if (!res.ok) throw new Error(`SerpAPI ${res.status}`);
  const data = await res.json();
  return (data.organic_results || []).map(r => ({
    title: r.title, url: r.link, snippet: r.snippet || '',
  }));
}

async function brave(query) {
  const url = `https://api.search.brave.com/res/v1/web/search?q=${encodeURIComponent(query)}&count=${config.search.topResults}`;
  const res = await fetchWithTimeout(url, {
    headers: { 'X-Subscription-Token': config.search.braveKey, Accept: 'application/json' },
  });
  if (!res.ok) throw new Error(`Brave ${res.status}`);
  const data = await res.json();
  return (data.web?.results || []).map(r => ({
    title: r.title, url: r.url, snippet: r.description || '',
  }));
}

async function duckduckgo(query) {
  const res = await fetchWithTimeout(`https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`);
  if (!res.ok) throw new Error(`DDG ${res.status}`);
  const $ = cheerio.load(await res.text());
  const out = [];
  $('.result').each((_, el) => {
    const a = $(el).find('.result__a');
    let href = a.attr('href') || '';
    // DDG envuelve URLs: //duckduckgo.com/l/?uddg=<url-encoded>
    const m = href.match(/uddg=([^&]+)/);
    if (m) href = decodeURIComponent(m[1]);
    if (!href.startsWith('http')) return;
    out.push({
      title: a.text().trim(),
      url: href,
      snippet: $(el).find('.result__snippet').text().trim(),
    });
  });
  return out.slice(0, config.search.topResults);
}
