// Medios enlazados al sitio real de Ping Pong Club (pingpongclub.ca) — no hay
// copias en el repo. El logo vive en Wix (static.wixstatic.com), que sí sirve
// por HTTPS, pero lo pasamos igual por images.weserv.nl para redimensionarlo
// y convertirlo a WebP/PNG de forma consistente con el resto del showcase.

const LOGO_ORIGIN = 'static.wixstatic.com/media/e6cd0e_2c5b943b607944fd88bc166ff248a6d5~mv2.png'
const PROXY = 'https://images.weserv.nl/'

/** PNG con transparencia (el logo real, 800x800 en origen). */
export function logo({ w = 400 } = {}) {
  const p = new URLSearchParams({ url: LOGO_ORIGIN, output: 'png', w: String(w) })
  return `${PROXY}?${p}`
}

export const LOGO = logo({ w: 320 })

// El menú completo real (PDF, 2 páginas) tal como lo sirve Wix — botón de
// descarga directa, sin reincrustarlo como visor PDF (ver skill §7.1).
export const MENU_PDF_URL =
  'https://50910382-e833-4381-94a2-1ee1d2ecf28a.usrfiles.com/ugd/e6cd0e_6a099d434dbf43e98a0c1321189de556.pdf'
