/**
 * 5 plantillas con layouts propios pero la paleta de la marca Easy Pro Digital
 * (navy #071F42 · azul #117EAD · porcelana #F2F5F7 · lima #C6F135) para que el
 * blog se sienta parte del sitio principal sin verse repetitivo.
 * Todas incluyen: SEO técnico (meta + JSON-LD), imagen destacada con crédito,
 * animaciones (respetando prefers-reduced-motion), sección de artículos
 * relacionados, referencias (modo científico), diseño responsive y un
 * header/footer compartido con enlace de vuelta al sitio principal.
 */
import { esc } from './render.js';
import { config } from '../../config/default.js';

// ── Bloques compartidos ──────────────────────────────────────
const REVEAL_JS = `
<script>
(function(){
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.rv').forEach(e=>e.classList.add('in'));
    return;
  }
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  }, {rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('article h2, article h3, article p, article figure, article ul, article ol, .related-card').forEach(function(el){
    el.classList.add('rv'); io.observe(el);
  });
})();
</script>`;

const PROGRESS_JS = `
<script>
(function(){
  var bar=document.getElementById('progress'); if(!bar) return;
  addEventListener('scroll',function(){
    var h=document.documentElement, p=h.scrollTop/(h.scrollHeight-h.clientHeight)*100;
    bar.style.width=p+'%';
  },{passive:true});
})();
</script>`;

const BASE_CSS = `
*{box-sizing:border-box;margin:0;padding:0}
img{max-width:100%;height:auto;display:block}
figure{margin:2rem 0}
figcaption{font-size:.8rem;opacity:.7;margin-top:.5rem}
.rv{opacity:0;transform:translateY(14px);transition:opacity .6s ease,transform .6s ease}
.rv.in{opacity:1;transform:none}
@media (prefers-reduced-motion: reduce){.rv{opacity:1;transform:none;transition:none}}
sup.cite a{text-decoration:none;font-weight:600}
a:focus-visible{outline:2px solid currentColor;outline-offset:3px;border-radius:2px}
.related-grid{display:grid;gap:1.25rem;grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}
.related-card{display:block;text-decoration:none;overflow:hidden;transition:transform .25s ease,box-shadow .25s ease}
.related-card img{aspect-ratio:16/9;object-fit:cover;width:100%}
.related-card:hover{transform:translateY(-4px)}
.source-figure a{display:block}
.internal-link{font-weight:600}
.ep-bar{border-bottom:1px solid var(--ep-line,rgba(7,31,66,.12))}
.ep-chrome{display:flex;align-items:center;justify-content:space-between;gap:1rem;max-width:1120px;margin:0 auto;padding:.85rem 1.25rem}
.ep-brand{font-family:Archivo,system-ui,sans-serif;font-weight:900;font-size:1.02rem;letter-spacing:-.02em;text-decoration:none;color:inherit}
.ep-brand span{color:var(--ep-accent,#117EAD)}
.ep-nav{display:flex;align-items:center;gap:1.1rem;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:.7rem;letter-spacing:.06em;text-transform:uppercase;white-space:nowrap}
.ep-nav a{text-decoration:none;color:inherit;opacity:.72;transition:opacity .15s ease,color .15s ease}
.ep-nav a:hover,.ep-nav a:focus-visible{opacity:1;color:var(--ep-accent,#117EAD)}
.ep-footer{border-top:1px solid var(--ep-line,rgba(7,31,66,.12));margin-top:3.5rem}
.ep-footer .ep-chrome{flex-wrap:wrap;font-size:.78rem;opacity:.78;padding:1.6rem 1.25rem}
.ep-footer a{color:inherit}
`;

// ── Header/footer del sitio: marca + vuelta a easyprodigital ──
function siteHeader() {
  const root = config.output.siteUrl;
  return `<header class="ep-bar"><div class="ep-chrome"><a class="ep-brand" href="${root}/">easypro<span>digital</span></a><nav class="ep-nav" aria-label="Sitio"><a href="${root}/blog/">Blog</a><a href="${root}/">← Volver al sitio</a></nav></div></header>`;
}

function siteFooter(ctx) {
  const root = config.output.siteUrl;
  return `<footer class="ep-footer"><div class="ep-chrome"><span>© Easy Pro Digital · Publicado el ${ctx.publishedHuman}</span><a href="${root}/">easyprodigital.com</a></div></footer>`;
}

function head(ctx, fonts, extraCss) {
  return `<!DOCTYPE html>
<html lang="${ctx.langCode || 'es'}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(ctx.meta.title)}</title>${ctx.headMeta}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?${fonts}&display=swap" rel="stylesheet">
<script type="application/ld+json">${ctx.jsonLd}</script>
<style>${BASE_CSS}${extraCss}</style>
</head>`;
}

function featured(ctx, cls = 'hero-img') {
  const f = ctx.images.featured;
  if (!f) return '';
  const credit = f.creditUrl ? `<a href="${esc(f.creditUrl)}" target="_blank" rel="noopener nofollow">${esc(f.credit)}</a>` : esc(f.credit || '');
  return `<figure class="${cls}"><img src="${esc(f.url)}" alt="${esc(f.alt || ctx.meta.title)}" fetchpriority="high">${credit ? `<figcaption>${credit}</figcaption>` : ''}</figure>`;
}

function relatedSection(ctx, title = 'Sigue leyendo') {
  if (!ctx.relatedHtml) return '';
  return `<section class="related"><h2>${title}</h2><div class="related-grid">${ctx.relatedHtml}</div></section>`;
}

// ═════════════════════════════════════════════════════════════
// 1 · PRISMA — editorial de revista: porcelana fría, azul marca, drop cap
// ═════════════════════════════════════════════════════════════
const prisma = {
  name: 'prisma-editorial',
  render(ctx) {
    return `${head(ctx, 'family=Archivo:wght@900&family=Fraunces:opsz,wght@9..144,600;9..144,900&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600', `
:root{--bg:#F2F5F7;--ink:#071F42;--accent:#117EAD;--soft:#D7DFE6;--ep-accent:#117EAD;--ep-line:#D7DFE6}
body{background:var(--bg);color:var(--ink);font-family:'Source Serif 4',Georgia,serif;line-height:1.75;font-size:1.06rem}
.wrap{max-width:720px;margin:0 auto;padding:0 1.25rem}
.hero{padding:3.5rem 0 1.5rem;text-align:center}
.kicker{color:var(--accent);text-transform:uppercase;letter-spacing:.2em;font-size:.75rem;font-weight:600}
h1{font-family:Fraunces,serif;font-weight:900;font-size:clamp(2rem,5vw,3.2rem);line-height:1.12;margin:.75rem 0}
.byline{font-size:.85rem;opacity:.65}
.hero-img img{width:100%;aspect-ratio:21/10;object-fit:cover}
article h2{font-family:Fraunces,serif;font-weight:600;font-size:1.7rem;margin:2.5rem 0 1rem;position:relative;padding-left:1rem}
article h2::before{content:'';position:absolute;left:0;top:.3rem;bottom:.3rem;width:3px;background:var(--accent)}
article h3{font-family:Fraunces,serif;font-size:1.25rem;margin:1.8rem 0 .8rem}
article p{margin:0 0 1.2rem}
article>p:first-of-type::first-letter{font-family:Fraunces,serif;font-weight:900;font-size:3.4em;float:left;line-height:.85;padding:.05em .12em 0 0;color:var(--accent)}
article ul,article ol{margin:0 0 1.2rem 1.4rem}
article a{color:var(--accent)}
blockquote{border-left:3px solid var(--accent);padding:.5rem 0 .5rem 1.25rem;font-style:italic;margin:1.6rem 0;background:#FAFCFD}
.references{margin-top:3rem;padding-top:1.5rem;border-top:1px solid var(--soft);font-size:.9rem}
.references ol{margin-left:1.4rem}
.related{margin:3.5rem 0}
.related h2{font-family:Fraunces,serif;text-align:center;margin-bottom:1.5rem}
.related-card{background:#FAFCFD;border:1px solid var(--soft);color:var(--ink)}
.related-card-body{padding:1rem}
.related-card h3{font-family:Fraunces,serif;font-size:1.05rem;margin-bottom:.4rem}
.related-card p{font-size:.85rem;opacity:.7}
`)}
<body>
${siteHeader()}
<main class="wrap">
  <div class="hero">
    <div class="kicker">${esc((ctx.meta.keywords || [])[0] || 'Artículo')}</div>
    <h1>${esc(ctx.meta.title)}</h1>
    <div class="byline">${ctx.publishedHuman} · Lectura de ${ctx.readingMinutes} min</div>
  </div>
  ${featured(ctx)}
  <article>${ctx.bodyHtml.replace(/<h1[^>]*>[\s\S]*?<\/h1>/, '')}</article>
  ${ctx.referencesHtml}
  ${relatedSection(ctx, 'También en el blog')}
</main>
${siteFooter(ctx)}
${REVEAL_JS}
</body></html>`;
  },
};

// ═════════════════════════════════════════════════════════════
// 2 · CIRCUITO — tech oscuro navy de marca, lima señal, barra de progreso
// ═════════════════════════════════════════════════════════════
const circuito = {
  name: 'circuito-tech',
  render(ctx) {
    const tocHtml = ctx.toc.length
      ? `<nav class="toc" aria-label="Contenido"><span class="toc-label">// índice</span>${ctx.toc.map(t => `<a href="#${t.id}">${esc(t.text)}</a>`).join('')}</nav>` : '';
    return `${head(ctx, 'family=Archivo:wght@900&family=IBM+Plex+Mono:wght@500&family=Inter:wght@400;600;800', `
:root{--bg:#071F42;--panel:#0D2A55;--ink:#DCE6F2;--dim:#8CA3C6;--accent:#C6F135;--line:#1B3A6B;--ep-accent:#C6F135;--ep-line:#1B3A6B}
body{background:var(--bg);color:var(--ink);font-family:Inter,system-ui,sans-serif;line-height:1.75;font-size:1.03rem}
#progress{position:fixed;top:0;left:0;height:3px;background:var(--accent);width:0;z-index:99}
.wrap{max-width:760px;margin:0 auto;padding:0 1.25rem}
.hero{padding:2.5rem 0 1.5rem}
.tag{font-family:'IBM Plex Mono',monospace;font-size:.72rem;color:var(--accent);border:1px solid var(--line);padding:.25rem .6rem;border-radius:99px;display:inline-block;margin-bottom:1rem}
h1{font-weight:800;font-size:clamp(1.9rem,4.6vw,2.9rem);line-height:1.15;letter-spacing:-.02em}
.byline{font-family:'IBM Plex Mono',monospace;font-size:.75rem;color:var(--dim);margin-top:.9rem}
.hero-img{margin:2rem 0}
.hero-img img{border:1px solid var(--line);border-radius:10px;aspect-ratio:16/8;object-fit:cover;width:100%}
.toc{display:flex;flex-wrap:wrap;gap:.5rem;padding:1rem;background:var(--panel);border:1px solid var(--line);border-radius:10px;margin:1.5rem 0;font-size:.82rem}
.toc-label{font-family:'IBM Plex Mono',monospace;color:var(--accent);width:100%}
.toc a{color:var(--dim);text-decoration:none;border:1px solid var(--line);padding:.2rem .6rem;border-radius:99px;transition:color .2s,border-color .2s}
.toc a:hover{color:var(--accent);border-color:var(--accent)}
article h2{font-size:1.55rem;font-weight:800;margin:2.6rem 0 1rem;letter-spacing:-.01em}
article h2::before{content:'▸ ';color:var(--accent)}
article h3{font-size:1.2rem;font-weight:600;margin:1.8rem 0 .8rem;color:var(--accent)}
article p{margin:0 0 1.2rem}
article ul,article ol{margin:0 0 1.2rem 1.4rem}
article a{color:var(--accent)}
article code{background:var(--panel);border:1px solid var(--line);padding:.1em .35em;border-radius:5px;font-size:.9em}
blockquote{background:var(--panel);border-left:3px solid var(--accent);padding:1rem 1.25rem;border-radius:0 10px 10px 0;margin:1.6rem 0}
figure img{border-radius:10px;border:1px solid var(--line)}
figcaption a{color:var(--dim)}
.references{margin-top:3rem;background:var(--panel);border:1px solid var(--line);border-radius:10px;padding:1.5rem;font-size:.88rem}
.references ol{margin-left:1.3rem}
.references a{color:var(--accent)}
.related{margin:3.5rem 0}
.related h2{font-family:'IBM Plex Mono',monospace;font-size:1rem;color:var(--accent);margin-bottom:1.2rem}
.related-card{background:var(--panel);border:1px solid var(--line);border-radius:10px;color:var(--ink)}
.related-card:hover{border-color:var(--accent);box-shadow:0 8px 24px rgba(0,0,0,.35)}
.related-card-body{padding:1rem}
.related-card h3{font-size:1rem;margin-bottom:.35rem}
.related-card p{font-size:.82rem;color:var(--dim)}
`)}
<body>
<div id="progress"></div>
${siteHeader()}
<main class="wrap">
  <div class="hero">
    <span class="tag">${esc((ctx.meta.keywords || [])[0] || 'artículo')}</span>
    <h1>${esc(ctx.meta.title)}</h1>
    <div class="byline">${ctx.publishedHuman} — ${ctx.readingMinutes} min de lectura — ${ctx.words} palabras</div>
  </div>
  ${featured(ctx)}
  ${tocHtml}
  <article>${ctx.bodyHtml.replace(/<h1[^>]*>[\s\S]*?<\/h1>/, '')}</article>
  ${ctx.referencesHtml}
  ${relatedSection(ctx, '// relacionados')}
</main>
${siteFooter(ctx)}
${PROGRESS_JS}${REVEAL_JS}
</body></html>`;
  },
};

// ═════════════════════════════════════════════════════════════
// 3 · MOSAICO — claro, tarjetas, degradado azul→lima de la marca
// ═════════════════════════════════════════════════════════════
const mosaico = {
  name: 'mosaico-cards',
  render(ctx) {
    return `${head(ctx, 'family=Archivo:wght@900&family=Sora:wght@600;800&family=Nunito+Sans:opsz,wght@6..12,400;6..12,700', `
:root{--bg:#F2F5F7;--ink:#071F42;--g1:#117EAD;--g2:#C6F135;--card:#FFFFFF;--line:#D7DFE6;--ep-accent:#117EAD;--ep-line:#D7DFE6}
body{background:var(--bg);color:var(--ink);font-family:'Nunito Sans',system-ui,sans-serif;line-height:1.75;font-size:1.04rem}
.wrap{max-width:740px;margin:0 auto;padding:0 1.25rem}
.hero{background:var(--card);border:1px solid var(--line);border-radius:20px;padding:2.5rem;margin:1.5rem 0;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;inset:0 0 auto 0;height:6px;background:linear-gradient(90deg,var(--g1),var(--g2))}
h1{font-family:Sora,sans-serif;font-weight:800;font-size:clamp(1.8rem,4.5vw,2.7rem);line-height:1.18}
.byline{font-size:.85rem;opacity:.6;margin-top:.9rem}
.hero-img{margin:1.5rem 0}
.hero-img img{border-radius:20px;aspect-ratio:16/8;object-fit:cover;width:100%}
article h2{font-family:Sora,sans-serif;font-weight:800;font-size:1.5rem;margin:2.6rem 0 1rem;display:flex;align-items:center;gap:.6rem}
article h2::before{content:'';width:14px;height:14px;border-radius:4px;background:linear-gradient(135deg,var(--g1),var(--g2));flex:none}
article h3{font-family:Sora,sans-serif;font-size:1.15rem;margin:1.8rem 0 .8rem}
article p{margin:0 0 1.2rem}
article ul,article ol{margin:0 0 1.2rem 1.4rem}
article a{color:var(--g1)}
blockquote{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:1rem 1.25rem;margin:1.6rem 0}
figure img{border-radius:16px}
.references{margin-top:3rem;background:var(--card);border:1px solid var(--line);border-radius:16px;padding:1.5rem;font-size:.9rem}
.references ol{margin-left:1.3rem}
.related{margin:3.5rem 0}
.related h2{font-family:Sora,sans-serif;margin-bottom:1.2rem}
.related-card{background:var(--card);border:1px solid var(--line);border-radius:16px;color:var(--ink);box-shadow:0 2px 8px rgba(7,31,66,.05)}
.related-card:hover{box-shadow:0 14px 30px rgba(17,126,173,.18)}
.related-card-body{padding:1.1rem}
.related-card h3{font-family:Sora,sans-serif;font-size:1rem;margin-bottom:.35rem}
.related-card p{font-size:.83rem;opacity:.65}
`)}
<body>
${siteHeader()}
<main class="wrap">
  <div class="hero rv in">
    <h1>${esc(ctx.meta.title)}</h1>
    <div class="byline">${ctx.publishedHuman} · ${ctx.readingMinutes} min de lectura</div>
  </div>
  ${featured(ctx)}
  <article>${ctx.bodyHtml.replace(/<h1[^>]*>[\s\S]*?<\/h1>/, '')}</article>
  ${ctx.referencesHtml}
  ${relatedSection(ctx, 'Te puede interesar')}
</main>
${siteFooter(ctx)}
${REVEAL_JS}
</body></html>`;
  },
};

// ═════════════════════════════════════════════════════════════
// 4 · ACADEMIA — científico: papel frío, azul profundo, TOC lateral, citas
// ═════════════════════════════════════════════════════════════
const academia = {
  name: 'academia-cientifico',
  render(ctx) {
    const tocHtml = ctx.toc.length
      ? `<nav class="side-toc" aria-label="Contenido"><strong>Contenido</strong><ol>${ctx.toc.map(t => `<li><a href="#${t.id}">${esc(t.text)}</a></li>`).join('')}</ol></nav>` : '';
    return `${head(ctx, 'family=Lora:ital,wght@0,400;0,600;1,400&family=Archivo:wght@600;700;900', `
:root{--bg:#FAFCFD;--ink:#071F42;--accent:#0C5F84;--line:#D7DFE6;--hl:#EDF3F7;--ep-accent:#117EAD;--ep-line:#D7DFE6}
body{background:var(--bg);color:var(--ink);font-family:Lora,Georgia,serif;line-height:1.85;font-size:1.05rem}
.layout{max-width:1080px;margin:0 auto;padding:0 1.25rem;display:grid;grid-template-columns:1fr;gap:2.5rem}
@media(min-width:960px){.layout{grid-template-columns:230px minmax(0,1fr)}}
.ep-bar{border-bottom:2px solid var(--ink)}
.hero{padding:3rem 0 1rem;grid-column:1/-1;max-width:760px}
.kicker{font-family:Archivo,sans-serif;font-size:.72rem;letter-spacing:.18em;text-transform:uppercase;color:var(--accent);font-weight:700}
h1{font-family:Lora,serif;font-weight:600;font-size:clamp(1.9rem,4.5vw,2.8rem);line-height:1.2;margin:.7rem 0}
.byline{font-family:Archivo,sans-serif;font-size:.78rem;opacity:.6}
.side-toc{position:sticky;top:2rem;align-self:start;font-family:Archivo,sans-serif;font-size:.82rem;border-left:2px solid var(--accent);padding-left:1rem;display:none}
@media(min-width:960px){.side-toc{display:block}}
.side-toc strong{display:block;margin-bottom:.6rem;text-transform:uppercase;letter-spacing:.1em;font-size:.7rem;color:var(--accent)}
.side-toc ol{list-style:none}
.side-toc li{margin:.45rem 0}
.side-toc a{color:var(--ink);text-decoration:none;opacity:.75}
.side-toc a:hover{opacity:1;color:var(--accent)}
main{max-width:720px}
.hero-img img{aspect-ratio:16/8;object-fit:cover;width:100%}
article h2{font-family:Lora,serif;font-weight:600;font-size:1.6rem;margin:2.6rem 0 1rem;padding-bottom:.4rem;border-bottom:1px solid var(--line)}
article h3{font-size:1.2rem;font-weight:600;margin:1.8rem 0 .8rem;color:var(--accent)}
article p{margin:0 0 1.25rem}
article ul,article ol{margin:0 0 1.25rem 1.5rem}
article a{color:var(--accent)}
sup.cite a{color:var(--accent)}
blockquote{background:var(--hl);border-left:3px solid var(--accent);padding:1rem 1.25rem;margin:1.6rem 0;font-style:italic}
.references{margin-top:3rem;background:var(--hl);padding:1.75rem;font-size:.88rem;font-family:Archivo,sans-serif;line-height:1.6}
.references h2{font-size:1.1rem;margin-bottom:1rem;border:none}
.references ol{margin-left:1.3rem}
.references li{margin:.5rem 0}
.ref-domain{opacity:.55}
.related{margin:3.5rem 0}
.related h2{font-family:Archivo,sans-serif;font-size:.85rem;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);margin-bottom:1.2rem}
.related-card{background:#fff;border:1px solid var(--line);color:var(--ink)}
.related-card:hover{border-color:var(--accent)}
.related-card-body{padding:1rem}
.related-card h3{font-size:1rem;margin-bottom:.35rem;font-weight:600}
.related-card p{font-size:.83rem;opacity:.65;font-family:Archivo,sans-serif}
`)}
<body>
${siteHeader()}
<div class="layout">
  <div class="hero">
    <div class="kicker">${ctx.scientific ? 'Artículo con referencias' : 'Análisis'}</div>
    <h1>${esc(ctx.meta.title)}</h1>
    <div class="byline">${ctx.publishedHuman} · Lectura de ${ctx.readingMinutes} min${ctx.citations?.length ? ` · ${ctx.citations.length} referencias` : ''}</div>
  </div>
  ${tocHtml}
  <main>
    ${featured(ctx)}
    <article>${ctx.bodyHtml.replace(/<h1[^>]*>[\s\S]*?<\/h1>/, '')}</article>
    ${ctx.referencesHtml}
    ${relatedSection(ctx, 'Lecturas relacionadas')}
  </main>
</div>
${siteFooter(ctx)}
${REVEAL_JS}
</body></html>`;
  },
};

// ═════════════════════════════════════════════════════════════
// 5 · VERTIENTE — hero partido, navy de marca + lima, tipografía rotunda
// ═════════════════════════════════════════════════════════════
const vertiente = {
  name: 'vertiente-split',
  render(ctx) {
    const f = ctx.images.featured;
    return `${head(ctx, 'family=Archivo:wght@500;700;900&family=Public+Sans:wght@400;600', `
:root{--navy:#071F42;--lime:#C6F135;--porcelain:#F2F5F7;--bg:#FAFCFD;--ink:#071F42;--line:#D7DFE6;--ep-accent:#117EAD;--ep-line:#D7DFE6}
body{background:var(--bg);color:var(--ink);font-family:'Public Sans',system-ui,sans-serif;line-height:1.75;font-size:1.03rem}
.split{display:grid;grid-template-columns:1fr;min-height:52vh}
@media(min-width:860px){.split{grid-template-columns:1.1fr 1fr}}
.split-text{background:var(--navy);color:var(--porcelain);padding:3.5rem 2.5rem;display:flex;flex-direction:column;justify-content:center}
.split-img{min-height:280px;background:#ccc center/cover no-repeat}
.brand{font-family:Archivo,sans-serif;font-weight:900;font-size:.8rem;letter-spacing:.2em;text-transform:uppercase;margin-bottom:2rem;color:var(--lime);opacity:.9}
h1{font-family:Archivo,sans-serif;font-weight:900;font-size:clamp(2rem,4.8vw,3.3rem);line-height:1.08;letter-spacing:-.02em}
.byline{margin-top:1.4rem;font-size:.82rem;opacity:.75}
.img-credit{font-size:.72rem;text-align:right;padding:.4rem 1rem;opacity:.6}
.img-credit a{color:inherit}
.wrap{max-width:720px;margin:0 auto;padding:0 1.25rem}
article{padding-top:2.5rem}
article h2{font-family:Archivo,sans-serif;font-weight:700;font-size:1.55rem;margin:2.6rem 0 1rem;position:relative;display:inline-block}
article h2::after{content:'';position:absolute;left:0;bottom:-6px;height:4px;width:44px;background:var(--navy);transition:width .35s ease}
article h2:hover::after{width:100%}
article h3{font-family:Archivo,sans-serif;font-weight:700;font-size:1.2rem;margin:1.8rem 0 .8rem;color:var(--ep-accent)}
article p{margin:0 0 1.2rem}
article ul,article ol{margin:0 0 1.2rem 1.4rem}
article a{color:var(--ep-accent);text-decoration-color:var(--lime);text-decoration-thickness:2px}
blockquote{border:2px solid var(--navy);padding:1.1rem 1.35rem;margin:1.7rem 0;font-family:Archivo,sans-serif;font-weight:500}
figure img{border-radius:4px}
.references{margin-top:3rem;border-top:2px solid var(--navy);padding-top:1.5rem;font-size:.9rem}
.references ol{margin-left:1.4rem}
.related{margin:3.5rem 0}
.related h2{font-family:Archivo,sans-serif;font-weight:900;text-transform:uppercase;letter-spacing:.08em;font-size:1rem;margin-bottom:1.2rem}
.related-card{background:#fff;border:1px solid var(--line);color:var(--ink);border-radius:4px}
.related-card:hover{box-shadow:6px 6px 0 var(--navy)}
.related-card-body{padding:1rem}
.related-card h3{font-family:Archivo,sans-serif;font-size:1rem;margin-bottom:.35rem}
.related-card p{font-size:.83rem;opacity:.65}
.ep-footer{background:var(--navy);color:var(--porcelain);border-top:none}
.ep-footer .ep-chrome{opacity:.9}
`)}
<body>
${siteHeader()}
<div class="split">
  <div class="split-text">
    <div class="brand">Blog · Easy Pro Digital</div>
    <h1>${esc(ctx.meta.title)}</h1>
    <div class="byline">${ctx.publishedHuman} · ${ctx.readingMinutes} min de lectura</div>
  </div>
  <div class="split-img" ${f ? `style="background-image:url('${esc(f.url)}')" role="img" aria-label="${esc(f.alt || ctx.meta.title)}"` : ''}></div>
</div>
${f?.credit ? `<div class="img-credit">${f.creditUrl ? `<a href="${esc(f.creditUrl)}" target="_blank" rel="noopener nofollow">${esc(f.credit)}</a>` : esc(f.credit)}</div>` : ''}
<main class="wrap">
  <article>${ctx.bodyHtml.replace(/<h1[^>]*>[\s\S]*?<\/h1>/, '')}</article>
  ${ctx.referencesHtml}
  ${relatedSection(ctx, 'Más artículos')}
</main>
${siteFooter(ctx)}
${REVEAL_JS}
</body></html>`;
  },
};

export const templates = [prisma, circuito, mosaico, academia, vertiente];
