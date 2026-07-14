/** Conversor Markdown → HTML minimalista, suficiente para artículos generados. */

function inline(text) {
  return text
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[(\d+)\](?!\()/g, '<sup class="cite"><a href="#ref-$1">[$1]</a></sup>')
    .replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
}

export function markdownToHtml(md) {
  const lines = md.split('\n');
  const out = [];
  let list = null; // 'ul' | 'ol'
  let para = [];

  const flushPara = () => {
    if (para.length) { out.push(`<p>${inline(para.join(' '))}</p>`); para = []; }
  };
  const flushList = () => {
    if (list) { out.push(`</${list}>`); list = null; }
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    const t = line.trim();

    if (!t) { flushPara(); flushList(); continue; }

    // Marcadores propios pasan intactos como bloques
    if (/^\[(IMAGE|SOURCE_IMAGE):/.test(t) || /^<figure|^<div|^<aside/.test(t)) {
      flushPara(); flushList(); out.push(t); continue;
    }
    const h = t.match(/^(#{1,4})\s+(.*)/);
    if (h) {
      flushPara(); flushList();
      const lvl = h[1].length;
      const id = h[2].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').slice(0, 60);
      out.push(`<h${lvl} id="${id}">${inline(h[2])}</h${lvl}>`);
      continue;
    }
    if (/^---+$/.test(t)) { flushPara(); flushList(); out.push('<hr>'); continue; }
    if (/^>\s?/.test(t)) {
      flushPara(); flushList();
      out.push(`<blockquote><p>${inline(t.replace(/^>\s?/, ''))}</p></blockquote>`);
      continue;
    }
    const ul = t.match(/^[-*]\s+(.*)/);
    const ol = t.match(/^\d+[.)]\s+(.*)/);
    if (ul || ol) {
      flushPara();
      const kind = ul ? 'ul' : 'ol';
      if (list !== kind) { flushList(); out.push(`<${kind}>`); list = kind; }
      out.push(`<li>${inline((ul || ol)[1])}</li>`);
      continue;
    }
    flushList();
    para.push(t);
  }
  flushPara(); flushList();
  return out.join('\n');
}

/** Extrae el TOC de los H2 del HTML generado. */
export function extractToc(html) {
  const toc = [];
  const re = /<h2 id="([^"]+)">([\s\S]*?)<\/h2>/g;
  let m;
  while ((m = re.exec(html))) toc.push({ id: m[1], text: m[2].replace(/<[^>]+>/g, '') });
  return toc;
}
