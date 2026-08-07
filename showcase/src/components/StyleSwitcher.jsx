/** Barra "mismo sitio, otro estilo" — enlaza entre las variantes de paleta
 * y tipografía de una misma demo (ver demos/salonBelleza*.js). No se
 * renderiza si la demo no define `styleVariants` o solo tiene una. */
export default function StyleSwitcher({ variants = [], current }) {
  if (!variants || variants.length < 2) return null

  return (
    <div className="demo-style-switcher">
      <div className="demo-container demo-style-switcher-inner">
        <span className="demo-style-switcher-label">Same website, another style:</span>
        <div className="demo-style-switcher-options">
          {variants.map((v) => (
            <a
              key={v.slug}
              href={`/${v.slug}`}
              className={`demo-style-pill${v.slug === current ? ' is-active' : ''}`}
              aria-current={v.slug === current ? 'page' : undefined}
            >
              {v.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
