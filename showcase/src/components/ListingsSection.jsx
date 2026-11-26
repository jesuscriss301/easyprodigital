// Sección "portal de inmuebles" — usada por la demo de Bienes Raíces.
// Imita lo que la gente espera de un portal tipo Metrocuadrado/Fincaraíz:
// buscador arriba (arriendo/venta, tipo, precio), filtros a la izquierda,
// tarjetas con foto, ubicación, precio, m²/hab/baños/parqueaderos y botones
// Llamar / WhatsApp / Contactar. Los filtros funcionan de verdad sobre los
// inmuebles de ejemplo del objeto de la demo (demo.listings.items).
import { useMemo, useState } from 'react'
import Reveal from './Reveal.jsx'
import { Heart, MapPin, Phone } from './icons.jsx'
import './ListingsSection.css'

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}
const AreaIcon = (p) => (
  <svg {...base} {...p}><rect x="4" y="4" width="16" height="16" rx="1.5" /><path d="M4 9h3M9 4v3M20 15h-3M15 20v-3" /></svg>
)
const BedIcon = (p) => (
  <svg {...base} {...p}><path d="M3 18V7M3 13h18v5M21 13v-2a3 3 0 0 0-3-3h-7v5" /><circle cx="7" cy="10.5" r="1.6" /></svg>
)
const BathIcon = (p) => (
  <svg {...base} {...p}><path d="M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" /><path d="M6 12V6a2 2 0 0 1 3.6-1.2M7 19l-1 2M17 19l1 2" /></svg>
)
const CarIcon = (p) => (
  <svg {...base} {...p}><path d="M5 16V11l2-4.5h10L19 11v5M3.5 16h17v2.5h-17z" /><circle cx="7.5" cy="13" r=".8" /><circle cx="16.5" cy="13" r=".8" /></svg>
)
const WhatsIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2s.2-1.1.2-1.2-.2-.2-.4-.3z" /></svg>
)
const MailIcon = (p) => (
  <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3.5 6.5 12 13l8.5-6.5" /></svg>
)
const MapIcon = (p) => (
  <svg {...base} {...p}><path d="M9 4 3 6.5v13.5L9 17.5l6 2.5 6-2.5V4l-6 2.5z" /><path d="M9 4v13.5M15 6.5V20" /></svg>
)
const GridIcon = (p) => (
  <svg {...base} {...p}><rect x="4" y="4" width="7" height="7" rx="1" /><rect x="13" y="4" width="7" height="7" rx="1" /><rect x="4" y="13" width="7" height="7" rx="1" /><rect x="13" y="13" width="7" height="7" rx="1" /></svg>
)
const Chevron = ({ dir = 'right', ...p }) => (
  <svg {...base} strokeWidth={2.2} {...p}><path d={dir === 'right' ? 'M9 5l7 7-7 7' : 'M15 5l-7 7 7 7'} /></svg>
)
const FilterIcon = (p) => (
  <svg {...base} strokeWidth={2} {...p}><path d="M4 6h16M7 12h10M10 18h4" /></svg>
)
const SearchIcon = (p) => (
  <svg {...base} strokeWidth={2} {...p}><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4-4" /></svg>
)

function photoUrl(src, w = 720) {
  // Fotos de Unsplash (licencia libre) se piden recortadas al tamaño de la
  // tarjeta; las rutas locales (/images/...) se usan tal cual.
  if (src.startsWith('https://images.unsplash.com/')) return `${src}?w=${w}&h=${Math.round(w * 0.66)}&fit=crop&q=70&auto=format`
  return src
}

function ListingCard({ item, labels, fmtPrice }) {
  const [idx, setIdx] = useState(0)
  const [fav, setFav] = useState(false)
  const photos = item.images?.length ? item.images : []
  const go = (d) => (e) => {
    e.preventDefault()
    setIdx((i) => (i + d + photos.length) % photos.length)
  }
  const title = `${labels.types[item.type]} ${labels.ops[item.op]}, ${item.neighborhood}`

  return (
    <article className="rl-card">
      <div className="rl-photo">
        {photos.length > 0 && (
          <img src={photoUrl(photos[idx])} alt={title} loading="lazy" />
        )}
        {item.tag && <span className="rl-tag">{item.tag}</span>}
        <button
          type="button"
          className={`rl-fav${fav ? ' is-on' : ''}`}
          aria-label={labels.favorite}
          aria-pressed={fav}
          onClick={() => setFav((v) => !v)}
        >
          <Heart />
        </button>
        {photos.length > 1 && (
          <>
            <button type="button" className="rl-nav rl-nav--prev" onClick={go(-1)} aria-label={labels.prevPhoto}><Chevron dir="left" /></button>
            <button type="button" className="rl-nav rl-nav--next" onClick={go(1)} aria-label={labels.nextPhoto}><Chevron /></button>
            <span className="rl-count">{idx + 1}/{photos.length}</span>
          </>
        )}
      </div>

      <div className="rl-body">
        <p className="rl-loc"><MapPin />{item.neighborhood} | {item.zone} | {item.city}</p>
        <p className="rl-price">
          {fmtPrice(item.price)}
          {item.op === 'rent' && <small>{labels.perMonth}</small>}
        </p>
        {item.op === 'rent' && item.adminFee ? (
          <p className="rl-fee">+ {fmtPrice(item.adminFee)} {labels.adminFee}</p>
        ) : null}
        <h3 className="rl-title">{title}</h3>
        <ul className="rl-specs">
          <li><AreaIcon />{item.area} m²</li>
          <li><BedIcon />{item.beds} {labels.bedsShort}</li>
          <li><BathIcon />{item.baths} {item.baths === 1 ? labels.bathShortOne || labels.bathsShort : labels.bathsShort}</li>
          {item.parking ? <li><CarIcon />{item.parking} {labels.parkingShort}</li> : null}
        </ul>
        <div className="rl-actions">
          <a className="rl-act rl-act--call" href="#want-this"><Phone />{labels.call}</a>
          <a className="rl-act rl-act--wa" href="#want-this"><WhatsIcon />WhatsApp</a>
          <a className="rl-act rl-act--contact" href="#want-this"><MailIcon />{labels.contact}</a>
        </div>
      </div>
    </article>
  )
}

const EMPTY = { op: 'all', type: 'all', min: '', max: '', beds: 0, baths: 0, q: '' }

export default function ListingsSection({
  id = 'listings',
  eyebrow,
  title,
  intro,
  city,
  mapQuery,
  locale = 'en-US',
  currency = 'USD',
  labels,
  items = [],
}) {
  const [draft, setDraft] = useState(EMPTY)
  const [filters, setFilters] = useState(EMPTY)
  const [sort, setSort] = useState('featured')
  const [view, setView] = useState('grid')
  const [showFilters, setShowFilters] = useState(false)

  const fmt = useMemo(
    () => new Intl.NumberFormat(locale, { style: 'currency', currency, maximumFractionDigits: 0 }),
    [locale, currency],
  )
  const fmtPrice = (n) => fmt.format(n)

  const results = useMemo(() => {
    const q = filters.q.trim().toLowerCase()
    let list = items.filter((it) => {
      if (filters.op !== 'all' && it.op !== filters.op) return false
      if (filters.type !== 'all' && it.type !== filters.type) return false
      if (filters.min !== '' && it.price < Number(filters.min)) return false
      if (filters.max !== '' && it.price > Number(filters.max)) return false
      if (filters.beds && it.beds < filters.beds) return false
      if (filters.baths && it.baths < filters.baths) return false
      if (q && !`${it.neighborhood} ${it.zone} ${it.city}`.toLowerCase().includes(q)) return false
      return true
    })
    if (sort === 'priceAsc') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'priceDesc') list = [...list].sort((a, b) => b.price - a.price)
    if (sort === 'areaDesc') list = [...list].sort((a, b) => b.area - a.area)
    return list
  }, [items, filters, sort])

  const set = (k) => (e) => setDraft((d) => ({ ...d, [k]: e.target.value }))
  const apply = (next = draft) => setFilters(next)
  const pickOp = (op) => {
    const next = { ...draft, op }
    setDraft(next)
    apply(next)
  }
  const pickNum = (k, n) => {
    const next = { ...draft, [k]: draft[k] === n ? 0 : n }
    setDraft(next)
    apply(next)
  }
  const reset = () => {
    setDraft(EMPTY)
    setFilters(EMPTY)
  }
  const opLabel = filters.op === 'all' ? labels.allOps : labels.opsPlural[filters.op]

  return (
    <section id={id} className="demo-section rl-section">
      <div className="demo-container rl-container">
        <Reveal className="rl-head">
          {eyebrow && <span className="demo-eyebrow">{eyebrow}</span>}
          <h2>{title}</h2>
          {intro && <p>{intro}</p>}
        </Reveal>

        {/* Buscador principal */}
        <form
          className="rl-search"
          onSubmit={(e) => {
            e.preventDefault()
            apply()
          }}
        >
          <div className="rl-ops" role="tablist">
            {['all', 'rent', 'sale'].map((op) => (
              <button
                key={op}
                type="button"
                role="tab"
                aria-selected={draft.op === op}
                className={`rl-op${draft.op === op ? ' is-on' : ''}`}
                onClick={() => pickOp(op)}
              >
                {op === 'all' ? labels.allOps : labels.opsPlural[op]}
              </button>
            ))}
          </div>
          <div className="rl-search-row">
            <label className="rl-field rl-field--grow">
              <span>{labels.where}</span>
              <input type="text" value={draft.q} onChange={set('q')} placeholder={labels.wherePlaceholder} />
            </label>
            <label className="rl-field">
              <span>{labels.type}</span>
              <select value={draft.type} onChange={set('type')}>
                <option value="all">{labels.allTypes}</option>
                {Object.entries(labels.types).map(([k, v]) => (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
            </label>
            <button type="submit" className="rl-search-btn"><SearchIcon />{labels.search}</button>
          </div>
        </form>

        {/* Barra de resultados */}
        <div className="rl-bar">
          <div>
            <nav className="rl-crumbs" aria-label="breadcrumb">
              <span>{labels.home}</span> › <span>{labels.properties}</span> › <span>{opLabel}</span> › <b>{city}</b>
            </nav>
            <p className="rl-total">
              <b>{results.length}</b> {results.length === 1 ? labels.resultOne : labels.resultMany} {city}
            </p>
          </div>
          <div className="rl-bar-tools">
            <button type="button" className={`rl-tool rl-tool--filters${showFilters ? ' is-on' : ''}`} aria-expanded={showFilters} onClick={() => setShowFilters((v) => !v)}>
              <FilterIcon />{labels.filters || 'Filters'}
            </button>
            <button type="button" className={`rl-tool${view === 'map' ? ' is-on' : ''}`} onClick={() => setView(view === 'map' ? 'grid' : 'map')}>
              {view === 'map' ? <GridIcon /> : <MapIcon />}
              {view === 'map' ? labels.viewList : labels.viewMap}
            </button>
            <label className="rl-sort">
              <span className="rl-visually-hidden">{labels.sortBy}</span>
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="featured">{labels.sortFeatured}</option>
                <option value="priceAsc">{labels.sortPriceAsc}</option>
                <option value="priceDesc">{labels.sortPriceDesc}</option>
                <option value="areaDesc">{labels.sortArea}</option>
              </select>
            </label>
          </div>
        </div>

        <div className="rl-layout">
          {/* Filtros */}
          <aside className={`rl-filters${showFilters ? ' is-open' : ''}`}>
            <div className="rl-filter">
              <h4>{labels.price}</h4>
              <div className="rl-range">
                <input type="number" inputMode="numeric" min="0" placeholder={labels.min} value={draft.min} onChange={set('min')} />
                <input type="number" inputMode="numeric" min="0" placeholder={labels.max} value={draft.max} onChange={set('max')} />
              </div>
              <button type="button" className="rl-apply" onClick={() => apply()}>{labels.apply}<SearchIcon /></button>
            </div>
            <div className="rl-filter">
              <h4>{labels.beds}</h4>
              <div className="rl-chips">
                {[1, 2, 3, 4].map((n) => (
                  <button key={n} type="button" className={`rl-chip${draft.beds === n ? ' is-on' : ''}`} onClick={() => pickNum('beds', n)}>
                    {n}{n === 4 ? '+' : ''}
                  </button>
                ))}
              </div>
            </div>
            <div className="rl-filter">
              <h4>{labels.baths}</h4>
              <div className="rl-chips">
                {[1, 2, 3].map((n) => (
                  <button key={n} type="button" className={`rl-chip${draft.baths === n ? ' is-on' : ''}`} onClick={() => pickNum('baths', n)}>
                    {n}{n === 3 ? '+' : ''}
                  </button>
                ))}
              </div>
            </div>
            <button type="button" className="rl-reset" onClick={reset}>{labels.clear}</button>
          </aside>

          {/* Resultados */}
          <div className="rl-results">
            {view === 'map' && (
              <div className="rl-map">
                <iframe
                  title={labels.viewMap}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery || city)}&z=13&output=embed`}
                  loading="lazy"
                />
              </div>
            )}
            {results.length ? (
              <div className="rl-grid">
                {results.map((it) => (
                  <ListingCard key={it.id} item={it} labels={labels} fmtPrice={fmtPrice} />
                ))}
              </div>
            ) : (
              <div className="rl-empty">
                <p>{labels.empty}</p>
                <button type="button" className="demo-btn demo-btn-primary" onClick={reset}>{labels.clear}</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
