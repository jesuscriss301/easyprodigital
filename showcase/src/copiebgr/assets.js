// Medios enlazados al sitio real de Copie BGR (copiebgr.com) — no hay copias
// en el repo. El sitio solo responde por HTTP y sin certificado válido, así
// que un <img src="http://..."> desde demos.easyprodigital.com (HTTPS) lo
// bloquea el navegador por contenido mixto. Todo pasa por images.weserv.nl,
// un proxy/CDN de imágenes público que sirve por HTTPS, redimensiona y
// convierte a WebP. No requiere cuenta ni clave.

const ORIGIN = 'www.copiebgr.com'
const PROXY = 'https://images.weserv.nl/'

/** Imagen del sitio original, por HTTPS y en WebP. */
export function img(file, { w = 1200, h, fit = 'cover', crop } = {}) {
  const p = new URLSearchParams({ url: `${ORIGIN}/${file}`, output: 'webp', q: '85', w: String(w) })
  if (h) { p.set('h', String(h)); p.set('fit', fit) }
  // crop = [cx, cy, cw, ch] en píxeles del original (weserv recorta antes de redimensionar)
  if (crop) { p.set('cx', crop[0]); p.set('cy', crop[1]); p.set('cw', crop[2]); p.set('ch', crop[3]) }
  return `${PROXY}?${p}`
}

/** PNG con transparencia (el logo). */
export function png(file, { w = 400 } = {}) {
  const p = new URLSearchParams({ url: `${ORIGIN}/${file}`, output: 'png', w: String(w) })
  return `${PROXY}?${p}`
}

export const LOGO = png('img/logo.png', { w: 240 })
export const STORE = img('img/bgr_store.png', { w: 1200 })
// Solo la mitad derecha de cada banner: la fotografía real del producto,
// dejando fuera el texto y el botón "Plus d'info" del sitio antiguo.
export const SLIDES = {
  cards: img('img/slide2.jpg', { w: 900, crop: [470, 0, 524, 230] }), // muestras impresas
  large: img('img/slide3.jpg', { w: 900, crop: [470, 0, 524, 230] }), // gran formato a color
  plans: img('img/slide4.jpg', { w: 900, crop: [470, 0, 524, 230] }), // plans architecturaux
}
