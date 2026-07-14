export function slugify(text) {
  return text.toString().toLowerCase().trim()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function log(step, msg) {
  const t = new Date().toISOString().slice(11, 19);
  console.log(`[${t}] [${step}] ${msg}`);
}

export function truncate(text, max = 3000) {
  return text.length > max ? text.slice(0, max) + '…' : text;
}

/** Extrae JSON de una respuesta de IA (tolera ```json fences y texto alrededor). */
export function extractJSON(text) {
  const cleaned = text.replace(/```json/gi, '```').trim();
  const fenced = cleaned.match(/```([\s\S]*?)```/);
  const candidate = fenced ? fenced[1] : cleaned;
  const start = candidate.search(/[[{]/);
  if (start === -1) throw new Error('No se encontró JSON en la respuesta de la IA');
  // Recorta hasta el último cierre balanceado
  for (let end = candidate.length; end > start; end--) {
    try { return JSON.parse(candidate.slice(start, end)); } catch { /* seguir */ }
  }
  throw new Error('JSON inválido en respuesta de IA');
}

export async function fetchWithTimeout(url, opts = {}, ms = 20000) {
  const ctrl = new AbortController();
  const id = setTimeout(() => ctrl.abort(), ms);
  try {
    return await fetch(url, {
      redirect: 'follow',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36',
        'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
        ...(opts.headers || {}),
      },
      ...opts,
      signal: ctrl.signal,
    });
  } finally { clearTimeout(id); }
}

export function uniqueBy(arr, keyFn) {
  const seen = new Set();
  return arr.filter(x => {
    const k = keyFn(x);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}
