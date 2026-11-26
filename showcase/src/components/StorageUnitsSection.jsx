// Sección "portal de bodegas" — usada por la demo de Self Storage.
// Mismo esqueleto que ListingsSection (buscador arriba, filtros a la
// izquierda, tarjetas con foto/precio/specs y botones de contacto), pero
// adaptado a bodegas: pestañas por tipo de unidad, chips de tamaño y extras,
// y precio mensual. Los filtros funcionan sobre demo.units.items.
import { useMemo, useState } from 'react'
import Reveal from './Reveal.jsx'
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
const RulerIcon = (p) => (
  <svg {...base} {...p}><rect x="2.5" y="8.5" width="19" height="7" rx="1.4" transform="rotate(-2 12 12)" /><path d="M7 9v2M11 9v3M15 9v2M19 9v3" /></svg>
)
const ClimateIcon = (p) => (
  <svg {...base} {...p}><path d="M12 2v20M3.3 7l17.4 10M20.7 7 3.3 17" /><path d="M9 4l3 2 3-2M9 20l3-2 3 2M4 9l2 1-2 1M20 9l-2 1 2 1M4 15l2-1-2-1M20 15l-2-1 2-1" /></svg>
)
const ClockIcon = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>
)
const BoxIcon = (p) => (
  <svg {...base} {...p}><path d="M3 7l9-4 9 4-9 4z" /><path d="M3 7v10l9 4 9-4V7" /><path d="M12 11v10" /></svg>
)
const Heart = (p) => (
  <svg {...base} {...p}><path d="M12 20.5S4 15.4 4 9.9A4.4 4.4 0 0 1 8.4 5.5c1.6 0 2.9.8 3.6 2 .7-1.2 2-2 3.6-2A4.4 4.4 0 0 1 20 9.9c0 5.5-8 10.6-8 10.6z" /></svg>
)
const MapPin = (p) => (
  <svg {...base} {...p}><path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
)
const Phone = (p) => (
  <svg {...base} {...p}><path d="M5 4h3.5l1.5 4.5-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4.5 1.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-1z" /></svg>
)
const WhatsIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2s.2-1.1.2-1.2-.2-.2-.4-.3z" /></svg>
)
const MailIcon = (p) => (
  <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3.5 6.5 12 13l8.5-6.5" /></svg>
)
const FilterIcon = (p) => (
  <svg {...base} strokeWidth={2} {...p}><path d="M4 6h16M7 12h10M10 18h4" /></svg>
)
const SearchIcon = (p) => (
  <svg {...base} strokeWidth={2} {...p}><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4-4" /></svg>
)

function StorageCard({ item, labels, fmtPrice }) {
  const [fav, setFav] = useState(false)
  const title = `${labels.unitTitle} ${labels.sizes[item.size]} · ${item.m2} m²`

  return (
    <article className="rl-card">
      <div className="rl-photo">
        <img src={item.image} alt={title} loading="lazy" />
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
      </div>

      <div className="rl-body">
        <p className="rl-loc"><MapPin />{item.branch} | {item.level}</p>
        <p className="rl-price">
          {fmtPrice(item.price)}
          <small>{labels.perMonth}</small>
        </p>
        <h3 className="rl-title">{title}</h3>
        <ul className="rl-specs">
          <li><AreaIcon />{item.m2} m²</li>
          <li><RulerIcon />{item.dims}</li>
          {item.climate ? <li><ClimateIcon />{labels.climate}</li> : null}
          {item.access24 ? <li><ClockIcon />{labels.access24}</li> : null}
          <li><BoxIcon />{labels.available}: {item.available}</li>
        </ul>
        <div className="rl-actions">
          <a className="rl-act rl-act--call" href="#want-this"><Phone />{labels.call}</a>
          <a className="rl-act rl-act--wa" href="#want-this"><WhatsIcon />WhatsApp</a>
          <a className="rl-act rl-act--contact" href="#want-this"><MailIcon />{labels.reserve}</a>
        </div>
      </div>
    </article>
  )
}

const EMPTY = { kind: 'all', branch: 'all', sizes: [], climate: false, access24: false }

export default function StorageUnitsSection({
  id = 'units',
  eyebrow,
  title,
  intro,
  city,
  locale = 'en-US',
  currency = 'USD',
  labels,
  items = [],
}) {
  const [draft, setDraft] = useState(EMPTY)
  const [filters, setFilters] = useState(EMPTY)
  const [sort, setSort] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)

  const fmt = useMemo(
    () => new Intl.NumberFormat(locale, { style: 'currency', currency, maximumFractionDigits: 0 }),
    [locale, currency],
  )
  const fmtPrice = (n) => fmt.format(n)

  // Sedes presentes en los datos, sin repetir.
  const branches = useMemo(() => [...new Set(items.map((it) => it.branch))], [items])

  const results = useMemo(() => {
    let list = items.filter((it) => {
      if (filters.kind !== 'all' && it.kind !== filters.kind) return false
      if (filters.branch !== 'all' && it.branch !== filters.branch) return false
      if (filters.sizes.length && !filters.sizes.includes(it.size)) return false
      if (filters.climate && !it.climate) return false
      if (filters.access24 && !it.access24) return false
      return true
    })
    if (sort === 'priceAsc') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'sizeDesc') list = [...list].sort((a, b) => b.m2 - a.m2)
    return list
  }, [items, filters, sort])

  const apply = (next = draft) => setFilters(next)
  const pickKind = (kind) => {
    const next = { ...draft, kind }
    setDraft(next)
    apply(next)
  }
  const pickBranch = (e) => {
    const next = { ...draft, branch: e.target.value }
    setDraft(next)
    apply(next)
  }
  const pickSize = (size) => {
    const sizes = draft.sizes.includes(size)
      ? draft.sizes.filter((s) => s !== size)
      : [...draft.sizes, size]
    const next = { ...draft, sizes }
    setDraft(next)
    apply(next)
  }
  const pickFlag = (key) => {
    const next = { ...draft, [key]: !draft[key] }
    setDraft(next)
    apply(next)
  }
  const reset = () => {
    setDraft(EMPTY)
    setFilters(EMPTY)
  }

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
          <div className="rl-ops" role="tablist" style={{ flexWrap: 'wrap' }}>
            {['all', 'indoor', 'driveup', 'vehicle'].map((kind) => (
              <button
                key={kind}
                type="button"
                role="tab"
                aria-selected={draft.kind === kind}
                className={`rl-op${draft.kind === kind ? ' is-on' : ''}`}
                onClick={() => pickKind(kind)}
              >
                {kind === 'all' ? labels.allKinds : labels.kinds[kind]}
              </button>
            ))}
          </div>
          <div className="rl-search-row">
            <label className="rl-field rl-field--grow">
              <span>{labels.branch}</span>
              <select value={draft.branch} onChange={pickBranch}>
                <option value="all">{labels.allBranches}</option>
                {branches.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
            </label>
            <button type="submit" className="rl-search-btn"><SearchIcon />{labels.search}</button>
          </div>
        </form>

        {/* Barra de resultados */}
        <div className="rl-bar">
          <p className="rl-total">
            <b>{results.length}</b> {results.length === 1 ? labels.resultOne : labels.resultMany} {city}
          </p>
          <div className="rl-bar-tools">
            <button
              type="button"
              className={`rl-tool rl-tool--filters${showFilters ? ' is-on' : ''}`}
              aria-expanded={showFilters}
              onClick={() => setShowFilters((v) => !v)}
            >
              <FilterIcon />{labels.filters}
            </button>
            <label className="rl-sort">
              <span className="rl-visually-hidden">{labels.sortBy}</span>
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="featured">{labels.sortFeatured}</option>
                <option value="priceAsc">{labels.sortPriceAsc}</option>
                <option value="sizeDesc">{labels.sortSizeDesc}</option>
              </select>
            </label>
          </div>
        </div>

        <div className="rl-layout">
          {/* Filtros */}
          <aside className={`rl-filters${showFilters ? ' is-open' : ''}`}>
            <div className="rl-filter">
              <h4>{labels.size}</h4>
              <div className="rl-chips">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`rl-chip${draft.sizes.includes(size) ? ' is-on' : ''}`}
                    aria-pressed={draft.sizes.includes(size)}
                    onClick={() => pickSize(size)}
                  >
                    {labels.sizes[size]}
                  </button>
                ))}
              </div>
            </div>
            <div className="rl-filter">
              <h4>{labels.extras}</h4>
              <div className="rl-chips">
                <button
                  type="button"
                  className={`rl-chip${draft.climate ? ' is-on' : ''}`}
                  aria-pressed={draft.climate}
                  onClick={() => pickFlag('climate')}
                >
                  {labels.climate}
                </button>
                <button
                  type="button"
                  className={`rl-chip${draft.access24 ? ' is-on' : ''}`}
                  aria-pressed={draft.access24}
                  onClick={() => pickFlag('access24')}
                >
                  {labels.access24}
                </button>
              </div>
            </div>
            <button type="button" className="rl-reset" onClick={reset}>{labels.clear}</button>
          </aside>

          {/* Resultados */}
          <div className="rl-results">
            {results.length ? (
              <div className="rl-grid">
                {results.map((it) => (
                  <StorageCard key={it.id} item={it} labels={labels} fmtPrice={fmtPrice} />
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
