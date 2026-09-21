import { useMemo } from 'react'
import { prefersReducedMotion } from '../components/motionUtils.js'

// Decoración de la taberna: todo dibujado en SVG de forma procedural, sin
// imágenes ni dependencias, igual que Vines.jsx hace con las enredaderas del
// nicho de jardinería. Cuatro familias:
//   · duendes  — la mascota del logo, asomándose por los bordes y por cada
//                tarjeta (uno distinto por tarjeta, como una especie distinta
//                por tarjeta en Vines)
//   · oro      — monedas que caen y destellan; la Chope cobra en "pièces d'or"
//   · hiedra   — la parte vegetal, en minoría y apagada, para no competir
//                con el oro
//   · letreros — tablones de madera colgados de cadenas (SignHeading.jsx)
//
// El movimiento vive en CSS (chope.css) para que la media query de
// prefers-reduced-motion lo apague de golpe; lo que se decide en JS consulta
// prefersReducedMotion() antes de montar nada animado.

const r1 = (n) => Math.round(n * 10) / 10

function rng(seed) {
  let s = (seed * 9301 + 49297) >>> 0 || 1
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0
    return s / 4294967296
  }
}

/* ------------------------------------------------------------------ */
/* Duende                                                              */
/* ------------------------------------------------------------------ */
// Construido a partir del gobelin del logo: piel verde, orejas largas y
// puntiagudas, nariz ganchuda, capucha. Mira siempre hacia `facing`.

const SKIN = { light: '#9ccf57', mid: '#6ea832', dark: '#3f6b1c' }

function GoblinFace({ hood = '#6b3f1d', hoodDark = '#4a2a12', blinkDelay = 0 }) {
  return (
    <g>
      {/* orejas */}
      <path d="M-15 -6C-26 -13 -33 -9 -31 -2C-29 4 -21 5 -14 2Z" fill={SKIN.mid} />
      <path d="M15 -6C26 -13 33 -9 31 -2C29 4 21 5 14 2Z" fill={SKIN.mid} />
      <path d="M-16 -4C-23 -8 -27 -6 -26 -2C-25 1 -20 2 -15 0Z" fill={SKIN.dark} opacity="0.5" />
      <path d="M16 -4C23 -8 27 -6 26 -2C25 1 20 2 15 0Z" fill={SKIN.dark} opacity="0.5" />
      {/* cabeza */}
      <ellipse cx="0" cy="0" rx="17" ry="16" fill={SKIN.light} />
      <path d="M-17 -1C-17 -11 -9 -17 0 -17C9 -17 17 -11 17 -1C13 -6 7 -9 0 -9C-7 -9 -13 -6 -17 -1Z" fill={SKIN.mid} opacity="0.45" />
      {/* capucha */}
      <path d="M-18 -3C-20 -16 -10 -24 0 -24C10 -24 20 -16 18 -3C14 -12 8 -16 0 -16C-8 -16 -14 -12 -18 -3Z" fill={hood} />
      <path d="M0 -24C6 -28 14 -27 17 -22C12 -22 6 -23 0 -24Z" fill={hoodDark} />
      {/* ojos */}
      <g className="chope-blink" style={{ animationDelay: `${r1(blinkDelay)}s` }}>
        <ellipse cx="-6.5" cy="-1" rx="3.6" ry="3.9" fill="#fdf6e0" />
        <ellipse cx="6.5" cy="-1" rx="3.6" ry="3.9" fill="#fdf6e0" />
        <circle cx="-6" cy="-0.5" r="1.9" fill="#1d2410" />
        <circle cx="7" cy="-0.5" r="1.9" fill="#1d2410" />
      </g>
      {/* nariz y sonrisa */}
      <path d="M0 1C3 3 3 6 0 7C-2 6 -2 3 0 1Z" fill={SKIN.mid} />
      <path d="M-6 9C-3 12 3 12 6 9" stroke={SKIN.dark} strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </g>
  )
}

/** Manitas agarradas a un borde. */
function Hands({ y = 0, spread = 26 }) {
  return (
    <g>
      {[-1, 1].map((s) => (
        <g key={s} transform={`translate(${s * spread} ${y})`}>
          <path d="M-5 0C-6 -5 -3 -8 0 -8C3 -8 6 -5 5 0C5 3 2 5 0 5C-2 5 -5 3 -5 0Z" fill={SKIN.light} />
          <path d="M-4 -3H4" stroke={SKIN.dark} strokeWidth="1.1" strokeLinecap="round" opacity="0.6" />
        </g>
      ))}
    </g>
  )
}

/** Chope (jarra) que el duende levanta. */
function Tankard() {
  return (
    <g>
      <path d="M-7 -10H7V4C7 7 5 9 0 9C-5 9 -7 7 -7 4Z" fill="#8b6a3e" />
      <path d="M-7 -10H7V-6H-7Z" fill="#c9a86a" />
      <path d="M7 -6C12 -6 13 0 8 1" stroke="#8b6a3e" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <path d="M-6 -10C-4 -14 -1 -12 0 -15C2 -12 5 -14 6 -10Z" fill="#f4ead2" />
    </g>
  )
}

/** Moneda de oro, de perfil variable. */
function Coin({ r = 7, tilt = 1 }) {
  return (
    <g>
      <ellipse rx={r * tilt} ry={r} fill="#d9a441" />
      <ellipse rx={r * tilt * 0.72} ry={r * 0.72} fill="#f0c766" />
      <ellipse rx={r * tilt * 0.72} ry={r * 0.72} fill="none" stroke="#a97c23" strokeWidth="0.8" />
      {tilt > 0.45 && <path d={`M${-r * tilt * 0.3} ${r * 0.28}L0 ${-r * 0.32}L${r * tilt * 0.3} ${r * 0.28}`} stroke="#a97c23" strokeWidth="1" fill="none" />}
    </g>
  )
}

/* variantes de duende: cada tarjeta recibe una distinta */
const GOBLINS = [
  { id: 'peek', w: 96, h: 72, draw: (d) => (<g transform="translate(48 44)"><GoblinFace blinkDelay={d} /><Hands y={17} spread={24} /></g>) },
  { id: 'tankard', w: 104, h: 80, draw: (d) => (<g transform="translate(48 44)"><g transform="translate(30 10)" className="chope-tip"><Tankard /></g><GoblinFace blinkDelay={d} hood="#5d6b2a" hoodDark="#3f4a1b" /><Hands y={17} spread={20} /></g>) },
  { id: 'coin', w: 96, h: 80, draw: (d) => (<g transform="translate(48 44)"><GoblinFace blinkDelay={d} hood="#7a4a2a" hoodDark="#53301a" /><Hands y={17} spread={24} /><g transform="translate(26 6)" className="chope-glint"><Coin r={8} /></g></g>) },
  { id: 'sly', w: 96, h: 72, draw: (d) => (<g transform="translate(48 46) rotate(-9)"><GoblinFace blinkDelay={d} hood="#4a3a6b" hoodDark="#332748" /><Hands y={17} spread={22} /></g>) },
  { id: 'wide', w: 96, h: 72, draw: (d) => (<g transform="translate(48 44) scale(1.06)"><GoblinFace blinkDelay={d} hood="#6b2a2a" hoodDark="#481b1b" /><Hands y={16} spread={26} /></g>) },
  { id: 'tilt', w: 96, h: 72, draw: (d) => (<g transform="translate(48 46) rotate(8)"><GoblinFace blinkDelay={d} hood="#2a5a6b" hoodDark="#1b3d48" /><Hands y={17} spread={22} /></g>) },
]

/**
 * Un duende asomado a la esquina de una tarjeta. `index` elige cuál —
 * recorre la lista, así que dos tarjetas seguidas nunca llevan el mismo.
 */
export function GoblinPeek({ index = 0, side = 'right' }) {
  const g = GOBLINS[index % GOBLINS.length]
  return (
    <svg
      className={`chope-goblin chope-goblin--${side}`}
      width={g.w}
      height={g.h}
      viewBox={`0 0 ${g.w} ${g.h}`}
      aria-hidden="true"
      focusable="false"
    >
      {g.draw((index % 7) * 1.3)}
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/* Hiedra colgante — la parte vegetal, deliberadamente discreta         */
/* ------------------------------------------------------------------ */

function IvyStrand({ seed = 1, length = 520 }) {
  const rand = useMemo(() => rng(seed), [seed])
  const { d, leaves } = useMemo(() => {
    const pts = []
    const lv = []
    let x = 0
    for (let y = 0; y <= length; y += 26) {
      x += (rand() - 0.5) * 14
      pts.push([r1(x), y])
      if (y > 20) lv.push({ x: r1(x), y, s: (y % 2 ? -1 : 1), k: r1(0.7 + rand() * 0.5), delay: r1(rand() * 6) })
    }
    return {
      d: 'M' + pts.map((p) => `${p[0]} ${p[1]}`).join('L'),
      leaves: lv,
    }
  }, [rand, length])

  return (
    <g>
      <path d={d} stroke="#4a3a22" strokeWidth="2" fill="none" strokeLinecap="round" />
      {leaves.map((l, i) => (
        <g key={i} className="chope-leaf" style={{ animationDelay: `${l.delay}s` }} transform={`translate(${l.x} ${l.y}) rotate(${l.s * 48}) scale(${l.k})`}>
          <path d="M0 0C-4 -3 -10 -3 -13 -8C-10 -13 -4 -14 0 -11C4 -14 10 -13 13 -8C10 -3 4 -3 0 0Z" fill="#3f6b1c" />
          <path d="M0 0L0 -10" stroke="#6ea832" strokeWidth="0.8" opacity="0.7" />
        </g>
      ))}
    </g>
  )
}

/* ------------------------------------------------------------------ */
/* Marco de página: cadenas de hierro, hiedra, monedas y un duende       */
/* ------------------------------------------------------------------ */

function ChainColumn({ side }) {
  return (
    <g>
      <path d="M12 0V2000" stroke="#2b2318" strokeWidth="5" />
      {Array.from({ length: 40 }, (_, i) => (
        <ellipse key={i} cx="12" cy={i * 52 + 26} rx="7" ry="13" fill="none" stroke="#4a4034" strokeWidth="3" />
      ))}
      <g transform={`translate(${side === 'left' ? 30 : 30} 0)`}>
        <IvyStrand seed={side === 'left' ? 7 : 19} length={1900} />
      </g>
    </g>
  )
}

/** Marco fijo a ambos lados de la página. Se oculta por CSS bajo 1100px. */
export function TavernFrame() {
  const reduced = prefersReducedMotion()
  const coins = useMemo(() => {
    const rand = rng(23)
    return Array.from({ length: 10 }, (_, i) => ({
      x: r1(6 + rand() * 46),
      dur: r1(9 + rand() * 11),
      delay: r1(rand() * 14),
      r: r1(4 + rand() * 4),
      tilt: r1(0.35 + rand() * 0.6),
      left: i % 2 === 0,
    }))
  }, [])

  return (
    <div className="chope-frame" aria-hidden="true">
      {['left', 'right'].map((side) => (
        <div key={side} className={`chope-frame-col chope-frame-col--${side}`}>
          <svg width="72" height="100%" viewBox="0 0 72 1900" preserveAspectRatio="xMidYMin slice">
            <ChainColumn side={side} />
          </svg>
          {/* un duende trepando la cadena, uno por lado */}
          <svg className="chope-frame-climber" width="80" height="62" viewBox="0 0 96 72">
            {GOBLINS[side === 'left' ? 1 : 2].draw(side === 'left' ? 0 : 2.4)}
          </svg>
          {!reduced &&
            coins
              .filter((c) => (side === 'left' ? c.left : !c.left))
              .map((c, i) => (
                <svg
                  key={i}
                  className="chope-coin"
                  style={{ left: `${c.x}px`, animationDuration: `${c.dur}s`, animationDelay: `${c.delay}s` }}
                  width="22"
                  height="22"
                  viewBox="-11 -11 22 22"
                >
                  <Coin r={c.r} tilt={c.tilt} />
                </svg>
              ))}
        </div>
      ))}
    </div>
  )
}

/** Lluvia corta de monedas dentro de una sección concreta. */
export function CoinRain({ count = 14, seed = 5 }) {
  const reduced = prefersReducedMotion()
  const coins = useMemo(() => {
    const rand = rng(seed)
    return Array.from({ length: count }, () => ({
      x: r1(rand() * 100),
      dur: r1(7 + rand() * 9),
      delay: r1(rand() * 10),
      r: r1(3 + rand() * 4),
      tilt: r1(0.3 + rand() * 0.7),
    }))
  }, [count, seed])
  if (reduced) return null
  return (
    <div className="chope-coinrain" aria-hidden="true">
      {coins.map((c, i) => (
        <svg
          key={i}
          className="chope-coin"
          style={{ left: `${c.x}%`, animationDuration: `${c.dur}s`, animationDelay: `${c.delay}s` }}
          width="20"
          height="20"
          viewBox="-10 -10 20 20"
        >
          <Coin r={c.r} tilt={c.tilt} />
        </svg>
      ))}
    </div>
  )
}

export { Coin, Tankard, GoblinFace }
