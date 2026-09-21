// Todos los medios de esta demo se ENLAZAN al sitio original de La Chope
// Gobeline — no hay copias en este repo.
//
// El sitio original solo responde por HTTP y su certificado HTTPS no es
// válido, así que un <img src="http://..."> desde demos.easyprodigital.com
// (que sí es HTTPS) lo bloquea el navegador por contenido mixto. Por eso
// todo pasa por images.weserv.nl: un proxy/CDN de imágenes público que sirve
// por HTTPS, redimensiona y convierte a WebP sobre la marcha. No requiere
// cuenta ni clave.
//
// Bonus importante para los menús: weserv rasteriza la página de un PDF a
// imagen (`&page=` es 0-indexed). Eso permite mostrar los menús tal cual
// están, sin visor de PDF, sin barra de herramientas y sin bordes grises —
// y si el restaurante reemplaza el archivo .pdf en su servidor, la imagen se
// actualiza sola. Los menús siguen siendo PDF; solo cambia cómo se muestran.

const ORIGIN = 'www.lachopegobeline.com'
const PROXY = 'https://images.weserv.nl/'

/** Foto del sitio original, servida por HTTPS y convertida a WebP. */
export function photo(file, { w = 1200, h, fit = 'cover' } = {}) {
  const p = new URLSearchParams({ url: `${ORIGIN}/wafx_res/Images/${file}`, output: 'webp', q: '82', w: String(w) })
  if (h) {
    p.set('h', String(h))
    p.set('fit', fit)
  }
  return `${PROXY}?${p}`
}

/** Una página de un PDF de menú, rasterizada a imagen (sin visor de PDF). */
export function menuPage(file, page = 0, w = 1400) {
  const p = new URLSearchParams({
    url: `${ORIGIN}/wa_files/${file}`,
    output: 'webp',
    q: '90',
    w: String(w),
    page: String(page),
    maxage: '1d', // el restaurante cambia el PDF y la imagen se refresca al día
  })
  return `${PROXY}?${p}`
}

/** El PDF original, para el botón de descarga. */
export const menuPdf = (file) => `http://${ORIGIN}/wa_files/${file}`

export const LOGO = photo('0-138-EnseigneHard.png', { w: 420 })
