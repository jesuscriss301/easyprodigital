import './Frosting.css'

// Decoración de panadería (demo.frosting = true): el glaseado que gotea en
// las tarjetas es solo CSS (Frosting.css); aquí va la lluvia lenta de
// grageas, harina y espigas de trigo en los costados de la página.
// Igual que Vines.jsx: RNG con semilla (mismo dibujo en cada render, sin
// Math.random en el primer render), movimiento en CSS para que
// prefers-reduced-motion lo apague, y franja angosta pegada a los bordes para
// que nunca tape contenido (ver Frosting.css).

function rng(seed) {
  let s = (seed * 9301 + 49297) >>> 0 || 1
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0
    return s / 4294967296
  }
}

function WheatEar() {
  return (
    <svg viewBox="0 0 18 30" fill="currentColor" aria-hidden="true">
      <rect x="8.4" y="10" width="1.2" height="20" rx="0.6" />
      {[0, 1, 2, 3].map((k) => (
        <g key={k} transform={`translate(9 ${4 + k * 5})`}>
          <ellipse cx="-3" cy="0" rx="3.2" ry="1.7" transform="rotate(-35)" />
          <ellipse cx="3" cy="0" rx="3.2" ry="1.7" transform="rotate(35)" />
        </g>
      ))}
      <ellipse cx="9" cy="2" rx="1.6" ry="2.6" />
    </svg>
  )
}

function Column({ side, seed, colors }) {
  const rand = rng(seed)
  const pieces = Array.from({ length: 26 }, (_, i) => {
    const t = rand()
    const kind = t < 0.62 ? 'rod' : t < 0.88 ? 'dot' : 'wheat'
    const dur = 16 + rand() * 18
    const r0 = Math.round(rand() * 360)
    const style = {
      '--x': `${Math.round(10 + rand() * 60)}%`,
      '--dur': `${dur.toFixed(1)}s`,
      '--delay': `${(-rand() * dur).toFixed(1)}s`,
      '--r0': `${r0}deg`,
      '--r1': `${r0 + (rand() < 0.5 ? -1 : 1) * Math.round(120 + rand() * 240)}deg`,
      '--rest': `${Math.round(rand() * 95)}vh`,
      '--s': `${(3 + rand() * 4).toFixed(1)}px`,
      '--c': kind === 'dot' ? colors.flour : kind === 'wheat' ? colors.wheat : colors.rods[i % colors.rods.length],
    }
    return (
      <span key={i} className={`demo-sprinkle demo-sprinkle--${kind}`} style={style}>
        {kind === 'wheat' && <WheatEar />}
      </span>
    )
  })
  return <div className={`demo-sprinkles demo-sprinkles--${side}`} aria-hidden="true">{pieces}</div>
}

/** Grageas, harina y espigas cayendo en los dos costados de la página. */
export function SprinkleFrame({ theme }) {
  const colors = {
    rods: theme.sprinkles || [theme.primary, theme.accent, '#f6d365', '#ffffff'],
    flour: theme.flour || '#e9dccb',
    wheat: theme.wheat || '#c9953f',
  }
  return (
    <>
      <Column side="left" seed={7} colors={colors} />
      <Column side="right" seed={19} colors={colors} />
    </>
  )
}
