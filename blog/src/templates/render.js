import { markdownToHtml, extractToc } from './markdown.js';
import { config } from '../../config/default.js';
import { templates } from './themes.js';

/**
 * Convierte el artículo (Markdown + marcadores) en una página HTML completa
 * usando una de las 5 plantillas (rotación automática o elección manual).
 *
 * data = { markdown, meta: {title, metaDescription, slug, keywords},
 *          images: {featured, inline: []}, sourceImages: [],
 *          citations: [], related: [{title, slug, description}], scientific }
 */
export function renderArticle(data, templateIndex = null) {
  let md = data.markdown;

  // 1) Marcadores [IMAGE: concepto] → figuras con imagen de stock/IA
  let imgIdx = 0;
  md = md.replace(/^\[IMAGE:\s*([^\]]+)\]$/gm, (_, concept) => {
    const img = data.images.inline[imgIdx++];
    if (!img) return '';
    return figureHtml(img, concept.trim());
  });

  // 2) Marcadores [SOURCE_IMAGE: descripción | crédito] → tarjeta de fuente original
  //    (imagen de medio real: se enlaza y acredita, nunca se copia el archivo)
  let srcIdx = 0;
  md = md.replace(/^\[SOURCE_IMAGE:\s*([^\]|]+)(?:\|([^\]]+))?\]$/gm, (_, desc) => {
    const s = data.sourceImages[srcIdx++];
    if (!s) return '';
    return `<figure class="source-figure"><a href="${esc(s.creditUrl)}" target="_blank" rel="noopener nofollow"><img src="${esc(s.url)}" alt="${esc(s.alt || desc.trim())}" loading="lazy"></a><figcaption>${esc(desc.trim())} — <a href="${esc(s.creditUrl)}" target="_blank" rel="noopener nofollow">${esc(s.credit)}</a></figcaption></figure>`;
  });

  // 3) {{related: ancla}} → enlace interno al artículo relacionado más afín
  let relIdx = 0;
  md = md.replace(/\{\{related:\s*([^}]+)\}\}/g, (_, anchor) => {
    const rel = data.related[relIdx % Math.max(data.related.length, 1)];
    relIdx++;
    if (!rel) return anchor.trim();
    return `<a class="internal-link" href="${config.output.baseUrl}/${rel.slug}.html" title="${esc(rel.title)}">${esc(anchor.trim())}</a>`;
  });

  const bodyHtml = markdownToHtml(md);
  const toc = extractToc(bodyHtml);
  const words = data.markdown.split(/\s+/).length;
  const readingMinutes = Math.max(1, Math.round(words / 220));

  const ctx = {
    ...data,
    bodyHtml,
    toc,
    readingMinutes,
    words,
    publishedISO: new Date().toISOString(),
    publishedHuman: new Date().toLocaleDateString(config.language === 'es' ? 'es-CO' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    jsonLd: buildJsonLd(data, readingMinutes),
    headMeta: buildHeadMeta(data),
    referencesHtml: buildReferences(data.citations),
    relatedHtml: buildRelatedCards(data.related),
    figureHtml, esc,
  };

  const idx = templateIndex ?? Math.floor(Math.random() * templates.length);
  const tpl = templates[idx % templates.length];
  return { html: tpl.render(ctx), templateName: tpl.name, templateIndex: idx % templates.length };
}

export function figureHtml(img, caption) {
  const credit = img.creditUrl
    ? `<a href="${esc(img.creditUrl)}" target="_blank" rel="noopener nofollow">${esc(img.credit)}</a>`
    : esc(img.credit || '');
  return `<figure class="article-figure"><img src="${esc(img.url)}" alt="${esc(img.alt || caption)}" loading="lazy" ${img.width ? `width="${img.width}" height="${img.height}"` : ''}><figcaption>${esc(caption || img.alt || '')}${credit ? ` · ${credit}` : ''}</figcaption></figure>`;
}

function buildReferences(citations = []) {
  if (!citations.length) return '';
  return `<section class="references"><h2 id="referencias">Referencias</h2><ol>${citations
    .map((c, i) => `<li id="ref-${i + 1}"><a href="${esc(c.url)}" target="_blank" rel="noopener nofollow">${esc(c.title)}</a> — <span class="ref-domain">${esc(hostname(c.url))}</span></li>`)
    .join('')}</ol></section>`;
}

function buildRelatedCards(related = []) {
  if (!related.length) return '';
  return related.slice(0, 3).map(r => `
    <a class="related-card" href="${config.output.baseUrl}/${r.slug}.html">
      ${r.featuredImage ? `<img src="${esc(r.featuredImage)}" alt="${esc(r.title)}" loading="lazy">` : ''}
      <div class="related-card-body"><h3>${esc(r.title)}</h3><p>${esc(r.description || '')}</p></div>
    </a>`).join('');
}

function buildJsonLd(data, minutes) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': data.scientific ? 'ScholarlyArticle' : 'Article',
    headline: data.meta.title,
    description: data.meta.metaDescription,
    image: data.images.featured?.url ? [data.images.featured.url] : [],
    keywords: (data.meta.keywords || []).join(', '),
    inLanguage: config.language,
    datePublished: new Date().toISOString(),
    timeRequired: `PT${minutes}M`,
    mainEntityOfPage: `${config.output.baseUrl}/${data.meta.slug}.html`,
    ...(data.citations?.length ? { citation: data.citations.map(c => c.url) } : {}),
  }, null, 2);
}

function buildHeadMeta(data) {
  const url = `${config.output.baseUrl}/${data.meta.slug}.html`;
  const img = data.images.featured?.url || '';
  return `
  <meta name="description" content="${esc(data.meta.metaDescription)}">
  <meta name="keywords" content="${esc((data.meta.keywords || []).slice(0, 10).join(', '))}">
  <link rel="canonical" href="${esc(url)}">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${esc(data.meta.title)}">
  <meta property="og:description" content="${esc(data.meta.metaDescription)}">
  <meta property="og:url" content="${esc(url)}">
  ${img ? `<meta property="og:image" content="${esc(img)}">` : ''}
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(data.meta.title)}">
  <meta name="twitter:description" content="${esc(data.meta.metaDescription)}">
  ${img ? `<meta name="twitter:image" content="${esc(img)}">` : ''}`;
}

export function esc(s = '') {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function hostname(url) {
  try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return url; }
}
