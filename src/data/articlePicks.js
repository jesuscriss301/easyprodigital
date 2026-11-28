// Lógica pura de selección de artículos, sin datos: la usan tanto la lista
// completa (articles.js) como la lista liviana sin cuerpos (articleIndex.js).

/**
 * ¿El artículo tiene contenido en `lang`? Los artículos sin `onlyLang` son
 * bilingües; los que lo declaran solo existen en ese idioma.
 */
export function isAvailableIn(article, lang) {
  if (!lang) return true
  return !article.onlyLang || article.onlyLang === lang
}

/** Filtra una lista a los artículos disponibles en `lang`. */
export function availableIn(list, lang) {
  if (!lang) return list.slice()
  return list.filter((a) => isAvailableIn(a, lang))
}

/**
 * Elige `count` artículos de `list` de forma DETERMINISTA a partir de la ruta:
 * la misma página siempre muestra el mismo trío (así queda estable en el HTML
 * prerenderizado y Google indexa lo mismo que ve el visitante), pero páginas
 * distintas muestran tríos distintos.
 */
export function pickFrom(list, pathname, count = 3) {
  if (!list.length) return []
  // Mezcla determinista sembrada con la ruta: la misma página siempre muestra
  // el mismo trío (el HTML prerenderizado y lo que ve el visitante coinciden,
  // que es lo que Google necesita), y páginas distintas muestran tríos
  // distintos. Con 12 artículos hay 220 combinaciones posibles de 3.
  const pool = list.slice()
  const rand = mulberry32(hashPath(pathname))
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1))
    const tmp = pool[i]
    pool[i] = pool[j]
    pool[j] = tmp
  }
  return pool.slice(0, Math.min(count, pool.length))
}

// FNV-1a de 32 bits con mezcla final: cambios mínimos en la ruta dan
// resultados muy distintos.
function hashPath(pathname) {
  let h = 0x811c9dc5
  for (let i = 0; i < pathname.length; i += 1) {
    h ^= pathname.charCodeAt(i)
    h = Math.imul(h, 0x01000193)
  }
  h ^= h >>> 15
  h = Math.imul(h, 0x2545f491)
  h ^= h >>> 13
  return h >>> 0
}

// PRNG de 32 bits sin estado global: misma semilla, misma secuencia, en el
// navegador y en el prerender.
function mulberry32(seed) {
  let a = seed >>> 0
  return function next() {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
