import { useEffect, useMemo, useRef, useState } from 'react'
import { prefersReducedMotion } from './motionUtils.js'

// Enredaderas decorativas (solo nicho Jardineros — demo.vines).
// Todo se dibuja en SVG de forma procedural (sin imágenes ni dependencias):
// cada tarjeta recibe una especie distinta (hiedra, jazmín, glicina, vid…)
// y el contorno de la página lleva dos guías fijas a los lados. Con
// `seed` fijo el dibujo es siempre el mismo (sin saltos entre renders).

const TAU = Math.PI * 2
const r1 = (n) => Math.round(n * 10) / 10

function rng(seed) {
  let s = (seed * 9301 + 49297) >>> 0 || 1
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0
    return s / 4294967296
  }
}

/* ------------------------------------------------------------------ */
/* Formas base (todas apuntan hacia arriba, con la base en 0,0)         */
/* ------------------------------------------------------------------ */

function polarLeaf(R, lobes, depth, { sharp = 1, teeth = 0, tooth = 0, stretch = 1 } = {}) {
  const N = 90
  const pts = []
  for (let i = 0; i <= N; i++) {
    const th = -Math.PI + (i / N) * TAU
    const c = Math.cos(lobes * th)
    let k = 1 + depth * Math.sign(c) * Math.pow(Math.abs(c), sharp)
    if (teeth) k *= 1 + tooth * Math.cos(teeth * th)
    const r = R * k
    pts.push([r * Math.sin(th), -R - r * Math.cos(th) * stretch])
  }
  return 'M' + pts.map((p) => `${r1(p[0])} ${r1(p[1])}`).join('L') + 'Z'
}

const ovate = (L, W) =>
  `M0 0C${W} ${-L * 0.22} ${W * 0.95} ${-L * 0.72} 0 ${-L}C${-W * 0.95} ${-L * 0.72} ${-W} ${-L * 0.22} 0 0Z`

const heart = (L, W) =>
  `M0 ${-L * 0.14}C${W * 0.4} ${L * 0.06} ${W * 1.08} ${-L * 0.04} ${W} ${-L * 0.4}C${W * 0.92} ${-L * 0.7} ${W * 0.3} ${-L * 0.86} 0 ${-L}C${-W * 0.3} ${-L * 0.86} ${-W * 0.92} ${-L * 0.7} ${-W} ${-L * 0.4}C${-W * 1.08} ${-L * 0.04} ${-W * 0.4} ${L * 0.06} 0 ${-L * 0.14}Z`

const petal = (L, W, round = 0) =>
  `M0 0C${W * (1 + round)} ${-L * 0.3} ${W * (1 + round * 0.6)} ${-L * (0.85 + round * 0.2)} 0 ${-L}C${-W * (1 + round * 0.6)} ${-L * (0.85 + round * 0.2)} ${-W * (1 + round)} ${-L * 0.3} 0 0Z`

const IVY = 'M0 0C-3 -1 -9 -1 -13 -5L-10.5 -8.5C-14 -11 -14.5 -15.5 -11 -18.5L-6 -16C-6 -21 -3 -26 0 -31C3 -26 6 -21 6 -16L11 -18.5C14.5 -15.5 14 -11 10.5 -8.5L13 -5C9 -1 3 -1 0 0Z'
const IVY_VEINS = 'M0 -1L0 -28M0 -2L-10 -15M0 -2L10 -15M0 -1L-11 -5M0 -1L11 -5'

function Leaf({ d, fill, vein, veins = 'M0 0L0 -1', sw = 0.5 }) {
  return (
    <g>
      <path d={d} fill={fill} />
      {vein && <path d={veins} stroke={vein} strokeWidth={sw} fill="none" strokeLinecap="round" opacity="0.8" />}
    </g>
  )
}

// hojas compuestas: foliolos a lo largo de un raquis
function Pinnate({ n, L, W, fill, vein, stem, gap = 5, tip = true, spread = 58 }) {
  const out = [<path key="r" d={`M0 0L0 ${-gap * n - (tip ? L * 0.6 : 0)}`} stroke={stem} strokeWidth="0.7" />]
  for (let i = 0; i < n; i++) {
    const y = -gap * (i + 0.6)
    for (const s of [-1, 1]) {
      out.push(
        <g key={`${i}${s}`} transform={`translate(0 ${y}) rotate(${s * spread})`}>
          <Leaf d={ovate(L * (1 - i * 0.04), W)} fill={fill} vein={vein} veins={`M0 0L0 ${-L * 0.9}`} sw={0.35} />
        </g>,
      )
    }
  }
  if (tip) out.push(<g key="t" transform={`translate(0 ${-gap * n})`}><Leaf d={ovate(L, W)} fill={fill} vein={vein} veins={`M0 0L0 ${-L * 0.9}`} sw={0.35} /></g>)
  return <g>{out}</g>
}

function Palmate({ n, L, W, fill, vein, spread = 150, stem }) {
  const out = [<path key="p" d="M0 0L0 -4" stroke={stem} strokeWidth="0.9" />]
  for (let i = 0; i < n; i++) {
    const a = -spread / 2 + (spread / (n - 1)) * i
    const k = 1 - Math.abs(a) / (spread * 1.3)
    out.push(
      <g key={i} transform={`translate(0 -4) rotate(${a})`}>
        <Leaf d={ovate(L * k, W * k)} fill={fill} vein={vein} veins={`M0 0L0 ${-L * k * 0.92}`} sw={0.4} />
      </g>,
    )
  }
  return <g>{out}</g>
}

function Radial({ n, d, fill, rot = 0, children, stroke, sw }) {
  return (
    <g>
      {Array.from({ length: n }, (_, i) => (
        <path key={i} d={d} fill={fill} stroke={stroke} strokeWidth={sw} transform={`rotate(${rot + (360 / n) * i})`} />
      ))}
      {children}
    </g>
  )
}

/* ------------------------------------------------------------------ */
/* Especies                                                            */
/* ------------------------------------------------------------------ */
// g(id) → url del degradado de hojas de esa especie en este SVG.

export const SPECIES = {
  ivy: {
    name: 'Ivy',
    stem: '#5b4630', leafA: '#5da548', leafB: '#1f5a24', vein: '#bfe3a4',
    step: 10, size: [0.62, 1.05],
    leaf: (g, s) => <Leaf d={IVY} fill={g} vein={s.vein} veins={IVY_VEINS} />,
    every: 7,
    flower: (rand) => (
      <g>
        {Array.from({ length: 7 }, (_, i) => {
          const a = (i / 7) * TAU
          return <circle key={i} cx={r1(Math.cos(a) * 3.2)} cy={r1(Math.sin(a) * 3.2)} r="1.5" fill={i % 2 ? '#1c2233' : '#2b3350'} />
        })}
        <circle r="1.4" fill="#1c2233" />
      </g>
    ),
  },
  jasmine: {
    name: 'Jasmine',
    stem: '#4d5a2c', leafA: '#5c9a3e', leafB: '#26592a', vein: '#a9d58d',
    step: 9, size: [0.55, 0.9],
    leaf: (g, s) => <Pinnate n={2} L={9} W={3.4} gap={5} fill={g} vein={s.vein} stem={s.stem} />,
    every: 2,
    flower: (rand) => (
      <g transform={`rotate(${rand() * 72})`}>
        <Radial n={5} d={petal(6.5, 2.6, 0.5)} fill="url(#vw-jasmine)" />
        <circle r="1.2" fill="#f2d36b" />
      </g>
    ),
    defs: (
      <radialGradient id="vw-jasmine">
        <stop offset="0" stopColor="#fff6d8" />
        <stop offset="0.5" stopColor="#ffffff" />
        <stop offset="1" stopColor="#f3eef8" />
      </radialGradient>
    ),
  },
  virginia: {
    name: 'Virginia creeper',
    stem: '#7a3b2a', leafA: '#6fb24a', leafB: '#2c6a2b', vein: '#c8e7ad',
    step: 13, size: [0.7, 1.05],
    leaf: (g, s) => <Palmate n={5} L={15} W={5} fill={g} vein={s.vein} stem="#9b3b2c" />,
    every: 4,
    flower: (rand) => (
      <g>
        <path d="M0 0L-3 5M0 0L2 6M0 0L5 3" stroke="#a3392c" strokeWidth="0.7" />
        {[[-3, 6], [2, 7.5], [5, 4], [-0.5, 10], [4, 10], [-4, 10.5]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2" fill="url(#vw-berry)" />
        ))}
      </g>
    ),
    defs: (
      <radialGradient id="vw-berry" cx="0.35" cy="0.35">
        <stop offset="0" stopColor="#6d7fb8" />
        <stop offset="1" stopColor="#1b2146" />
      </radialGradient>
    ),
  },
  grape: {
    name: 'Grape vine',
    stem: '#6b5132', leafA: '#86c25a', leafB: '#2f6f2e', vein: '#d4efb4',
    step: 16, size: [0.8, 1.15],
    leaf: (g, s) => (
      <Leaf d={polarLeaf(9, 5, 0.22, { sharp: 1.6, teeth: 26, tooth: 0.05 })} fill={g} vein={s.vein} veins="M0 -1L0 -18M0 -3L-9 -13M0 -3L9 -13M0 -2L-10 -6M0 -2L10 -6" />
    ),
    every: 3,
    hang: true,
    flower: (rand) => {
      const rows = [5, 4, 4, 3, 2, 1]
      const out = [<path key="p" d="M0 0L0 4" stroke="#6b5132" strokeWidth="0.9" />]
      rows.forEach((n, ri) => {
        for (let i = 0; i < n; i++) {
          out.push(<circle key={`${ri}-${i}`} cx={r1((i - (n - 1) / 2) * 3.9 + (rand() - 0.5))} cy={r1(6 + ri * 3.4)} r="2.2" fill="url(#vw-grape)" />)
        }
      })
      return <g>{out}</g>
    },
    defs: (
      <radialGradient id="vw-grape" cx="0.35" cy="0.3">
        <stop offset="0" stopColor="#eef7b0" />
        <stop offset="0.55" stopColor="#9cc24a" />
        <stop offset="1" stopColor="#4f7a22" />
      </radialGradient>
    ),
  },
  wisteria: {
    name: 'Wisteria',
    stem: '#5e4a3a', leafA: '#7cc05c', leafB: '#2e6a2c', vein: '#cdeab4',
    step: 11, size: [0.6, 0.95],
    leaf: (g, s) => <Pinnate n={4} L={7.5} W={2.8} gap={4.2} fill={g} vein={s.vein} stem={s.stem} spread={62} />,
    every: 2,
    hang: true,
    flower: (rand) => {
      const n = 12 + Math.floor(rand() * 5)
      const out = [<path key="a" d={`M0 0L0 ${n * 3.1}`} stroke="#6a5a4a" strokeWidth="0.6" />]
      const top = [196, 170, 238]
      const bot = [92, 60, 176]
      for (let i = 0; i < n; i++) {
        const t = i / (n - 1)
        const w = (1 - t) * 5.5 + 1
        const c = top.map((v, k) => Math.round(v + (bot[k] - v) * t))
        for (const s of i % 2 ? [-1, 0.2, 1] : [-0.6, 0.6]) {
          out.push(<ellipse key={`${i}${s}`} cx={r1(s * w * (0.8 + rand() * 0.3))} cy={r1(3 + i * 3.1)} rx={r1(2.3 - t * 0.9)} ry={r1(1.9 - t * 0.6)} fill={`rgb(${c})`} />)
        }
      }
      return <g>{out}</g>
    },
  },
  morningGlory: {
    name: 'Morning glory',
    stem: '#4f6b35', leafA: '#79bb57', leafB: '#2b642c', vein: '#c8e8ad',
    step: 13, size: [0.7, 1.0],
    leaf: (g, s) => <Leaf d={heart(22, 10)} fill={g} vein={s.vein} veins="M0 -2L0 -20M0 -6L-6 -13M0 -6L6 -13" />,
    every: 3,
    flower: (rand) => (
      <g transform={`rotate(${rand() * 72})`}>
        <circle r="8.5" fill="url(#vw-glory)" />
        <Radial n={5} d="M0 -1.5L0 -8" fill="none" stroke="#ffffff" sw="0.5" />
        <circle r="1.6" fill="#fff9d6" />
      </g>
    ),
    defs: (
      <radialGradient id="vw-glory">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="0.28" stopColor="#bcd4ff" />
        <stop offset="0.7" stopColor="#6d7cf0" />
        <stop offset="1" stopColor="#5a3fc4" />
      </radialGradient>
    ),
  },
  bougainvillea: {
    name: 'Bougainvillea',
    stem: '#6a4b35', leafA: '#6fae4a', leafB: '#2c6429', vein: '#c3e2a8',
    step: 10, size: [0.55, 0.85],
    leaf: (g, s) => <Leaf d={ovate(16, 6)} fill={g} vein={s.vein} veins="M0 0L0 -14" />,
    every: 2,
    flower: (rand) => (
      <g transform={`rotate(${rand() * 120})`}>
        <Radial n={3} d={heart(8, 4.6).replace('M0', 'M0')} fill="url(#vw-bouga)" />
        <circle r="0.9" fill="#fff4cf" />
      </g>
    ),
    defs: (
      <radialGradient id="vw-bouga">
        <stop offset="0" stopColor="#ff9bd2" />
        <stop offset="1" stopColor="#c2177a" />
      </radialGradient>
    ),
  },
  passionflower: {
    name: 'Passionflower',
    stem: '#4d6a34', leafA: '#6cae4b', leafB: '#265c27', vein: '#c0e0a6',
    step: 15, size: [0.75, 1.05],
    leaf: (g, s) => <Leaf d={polarLeaf(9, 3, 0.42, { sharp: 1.4 })} fill={g} vein={s.vein} veins="M0 -1L0 -19M0 -4L-9 -13M0 -4L9 -13" />,
    every: 4,
    flower: (rand) => (
      <g>
        <Radial n={10} d={petal(9, 2.2, 0.3)} fill="#f4f1fb" />
        <Radial n={36} d="M0 -2L0 -7.5" fill="none" stroke="#6a2fa3" sw="0.45" />
        <circle r="2.6" fill="#f6f1ff" stroke="#8a4cc4" strokeWidth="0.6" />
        <circle r="1.4" fill="#9cc54f" />
      </g>
    ),
  },
  clematis: {
    name: 'Clematis',
    stem: '#5d5134', leafA: '#6aa94a', leafB: '#285f29', vein: '#c0e0a6',
    step: 12, size: [0.6, 0.95],
    leaf: (g, s) => <Palmate n={3} L={12} W={4.6} spread={100} fill={g} vein={s.vein} stem={s.stem} />,
    every: 3,
    flower: (rand) => (
      <g transform={`rotate(${rand() * 60})`}>
        <Radial n={6} d={petal(10, 3.6, 0.2)} fill="url(#vw-clem)" />
        <Radial n={6} d="M0 -2L0 -8.5" fill="none" stroke="#c9a6ff" sw="0.7" />
        <circle r="2.3" fill="#f5e6a8" />
      </g>
    ),
    defs: (
      <radialGradient id="vw-clem">
        <stop offset="0" stopColor="#8b5cf6" />
        <stop offset="1" stopColor="#4c1d95" />
      </radialGradient>
    ),
  },
  honeysuckle: {
    name: 'Honeysuckle',
    stem: '#6b5a3a', leafA: '#7fb561', leafB: '#35692f', vein: '#cde6b5',
    step: 11, size: [0.6, 0.95],
    leaf: (g, s) => <Leaf d={ovate(15, 6.5)} fill={g} vein={s.vein} veins="M0 0L0 -13" />,
    every: 3,
    flower: (rand) => (
      <g transform={`rotate(${-30 + rand() * 60})`}>
        {[-40, -15, 15, 40].map((a, i) => (
          <g key={i} transform={`rotate(${a})`}>
            <path d="M-0.9 0L-1.3 -11C-1.3 -12 -3.5 -13 -4.5 -12M1.3 -11L0.9 0" fill="none" stroke={i % 2 ? '#fff1c1' : '#ffd36e'} strokeWidth="2" strokeLinecap="round" />
            <path d="M0 -12L1.5 -15.5" stroke="#e58fa0" strokeWidth="0.5" />
          </g>
        ))}
      </g>
    ),
  },
  hops: {
    name: 'Hops',
    stem: '#566b36', leafA: '#8cc55e', leafB: '#346c2c', vein: '#d7efbd',
    step: 14, size: [0.7, 1.05],
    leaf: (g, s) => <Leaf d={polarLeaf(8.5, 3, 0.3, { sharp: 1.2, teeth: 30, tooth: 0.05 })} fill={g} vein={s.vein} veins="M0 -1L0 -17M0 -4L-8 -12M0 -4L8 -12" />,
    every: 3,
    hang: true,
    flower: (rand) => (
      <g>
        <path d="M0 0L0 3" stroke="#566b36" strokeWidth="0.7" />
        {Array.from({ length: 6 }, (_, i) => {
          const w = 4.2 - Math.abs(i - 2) * 0.7
          return (
            <g key={i}>
              <ellipse cx={-w * 0.45} cy={5 + i * 2.6} rx={w * 0.7} ry="2" fill={i % 2 ? '#b8dd7c' : '#cbe79a'} />
              <ellipse cx={w * 0.45} cy={5.8 + i * 2.6} rx={w * 0.7} ry="2" fill={i % 2 ? '#cbe79a' : '#a8d06a'} />
            </g>
          )
        })}
      </g>
    ),
  },
  sweetPea: {
    name: 'Sweet pea',
    stem: '#6a8a4a', leafA: '#9ccc84', leafB: '#4f8a4a', vein: '#e0f2d4',
    step: 10, size: [0.6, 0.9],
    leaf: (g, s) => (
      <g>
        <Pinnate n={1} L={11} W={3.6} gap={5} tip={false} fill={g} vein={s.vein} stem={s.stem} spread={38} />
        <path d="M0 -6C1 -12 5 -13 5 -10C5 -8 3 -8 3 -9.5" fill="none" stroke={s.stem} strokeWidth="0.45" />
      </g>
    ),
    every: 2,
    flower: (rand) => {
      const cols = [['#ffc2da', '#f06fa6'], ['#e4d0ff', '#9b6ae8'], ['#ffd9c9', '#f08a6e']]
      const [a, b] = cols[Math.floor(rand() * cols.length)]
      return (
        <g transform={`rotate(${-20 + rand() * 40})`}>
          <path d="M0 0C-8 -2 -9 -11 -3 -12C0 -12.5 0 -9 0 -9C0 -9 0 -12.5 3 -12C9 -11 8 -2 0 0Z" fill={a} />
          <path d="M0 0.5C-3 -1 -3 -5 0 -6C3 -5 3 -1 0 0.5Z" fill={b} />
        </g>
      )
    },
  },
  trumpetVine: {
    name: 'Trumpet vine',
    stem: '#6d4a2e', leafA: '#6fb04d', leafB: '#2b6229', vein: '#c3e2a8',
    step: 12, size: [0.55, 0.9],
    leaf: (g, s) => <Pinnate n={3} L={8.5} W={3} gap={4.6} fill={g} vein={s.vein} stem={s.stem} />,
    every: 3,
    flower: (rand) => (
      <g transform={`rotate(${-35 + rand() * 70})`}>
        <path d="M-1.4 0L-2.2 -9C-4.5 -11 -5.5 -14 -4 -15.5C-2 -14.5 2 -14.5 4 -15.5C5.5 -14 4.5 -11 2.2 -9L1.4 0Z" fill="url(#vw-trumpet)" />
        <ellipse cx="0" cy="-14.6" rx="3.2" ry="1.1" fill="#ffd16b" />
      </g>
    ),
    defs: (
      <linearGradient id="vw-trumpet" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0" stopColor="#f6a13a" />
        <stop offset="1" stopColor="#e2461f" />
      </linearGradient>
    ),
  },
  rose: {
    name: 'Climbing rose',
    stem: '#5a4a2c', leafA: '#5f9e48', leafB: '#1f5226', vein: '#b7dca0',
    step: 11, size: [0.6, 0.95],
    leaf: (g, s) => <Pinnate n={2} L={8} W={3.8} gap={5} fill={g} vein={s.vein} stem={s.stem} spread={55} />,
    every: 3,
    flower: (rand) => (
      <g transform={`rotate(${rand() * 360})`}>
        <Radial n={5} d={petal(8.5, 5, 0.9)} fill="#e0435f" />
        <Radial n={5} rot={36} d={petal(6.2, 4, 0.9)} fill="#f0647d" />
        <path d="M0 0C3 -1 3 -4 0 -4.3C-3.5 -4.5 -4.5 -0.5 -2 2C1 4.5 5 2 5 -1.5" fill="none" stroke="#a91e3a" strokeWidth="0.8" />
        <circle r="1.3" fill="#b3223f" />
      </g>
    ),
  },
  blackEyedSusan: {
    name: 'Black-eyed Susan vine',
    stem: '#5c6d36', leafA: '#7cb659', leafB: '#30662b', vein: '#cbe6b1',
    step: 11, size: [0.6, 0.95],
    leaf: (g, s) => <Leaf d={heart(17, 7.5)} fill={g} vein={s.vein} veins="M0 -2L0 -15M0 -5L-5 -10M0 -5L5 -10" />,
    every: 3,
    flower: (rand) => (
      <g transform={`rotate(${rand() * 72})`}>
        <Radial n={5} d={petal(7.5, 4.2, 1.1)} fill="#ff9f1c" />
        <circle r="2.8" fill="#2a1508" />
        <circle r="1.1" cx="-0.6" cy="-0.6" fill="#5b2c0f" />
      </g>
    ),
  },
  mandevilla: {
    name: 'Mandevilla',
    stem: '#4f5a33', leafA: '#4f9a40', leafB: '#164a22', vein: '#b2dc98',
    step: 12, size: [0.65, 1.0],
    leaf: (g, s) => <Leaf d={ovate(18, 7.5)} fill={g} vein={s.vein} veins="M0 0L0 -16M0 -5L-4 -9M0 -5L4 -9M0 -10L-3 -13M0 -10L3 -13" />,
    every: 3,
    flower: (rand) => (
      <g transform={`rotate(${rand() * 72})`}>
        <Radial n={5} d="M0 0C3 -2 7 -5 7 -9C7 -11 4 -12 2 -11C0 -10 -1 -6 0 0Z" fill="url(#vw-mande)" />
        <circle r="2" fill="#ffe08a" />
      </g>
    ),
    defs: (
      <radialGradient id="vw-mande">
        <stop offset="0" stopColor="#ffd1e0" />
        <stop offset="1" stopColor="#ec3f86" />
      </radialGradient>
    ),
  },
}

// Orden de asignación: 16 especies = 6 servicios + 4 features + 3 testimonios
// + 3 fotos de la galería, sin repetir ninguna en toda la página.
export const SPECIES_ORDER = [
  'ivy', 'wisteria', 'jasmine', 'grape', 'morningGlory', 'virginia',
  'clematis', 'passionflower', 'bougainvillea', 'rose',
  'honeysuckle', 'trumpetVine', 'sweetPea',
  'hops', 'blackEyedSusan', 'mandevilla',
]
export const VINE_OFFSETS = { services: 0, features: 6, testimonials: 10, gallery: 13 }
export const speciesFor = (section, i) => SPECIES_ORDER[(VINE_OFFSETS[section] + i) % SPECIES_ORDER.length]

/* ------------------------------------------------------------------ */
/* Geometría del tallo                                                 */
/* ------------------------------------------------------------------ */

function buildStrand(anchors, rand, amp = 4, step = 3) {
  const pts = []
  let dist = 0
  const phase = rand() * TAU
  const freq = 0.05 + rand() * 0.03
  for (let s = 0; s < anchors.length - 1; s++) {
    const [ax, ay] = anchors[s]
    const [bx, by] = anchors[s + 1]
    const len = Math.hypot(bx - ax, by - ay)
    const nx = -(by - ay) / len
    const ny = (bx - ax) / len
    const n = Math.max(2, Math.ceil(len / step))
    for (let k = s === 0 ? 0 : 1; k <= n; k++) {
      const t = k / n
      const d = dist + len * t
      const w = amp * (Math.sin(phase + d * freq) + 0.4 * Math.sin(phase * 2 + d * freq * 2.7))
      pts.push({ x: ax + (bx - ax) * t + nx * w, y: ay + (by - ay) * t + ny * w, d })
    }
    dist += len
  }
  // suavizado de esquinas
  for (let pass = 0; pass < 3; pass++) {
    for (let i = 1; i < pts.length - 1; i++) {
      pts[i].x = (pts[i - 1].x + pts[i].x * 2 + pts[i + 1].x) / 4
      pts[i].y = (pts[i - 1].y + pts[i].y * 2 + pts[i + 1].y) / 4
    }
  }
  for (let i = 0; i < pts.length; i++) {
    const a = pts[Math.max(0, i - 1)]
    const b = pts[Math.min(pts.length - 1, i + 1)]
    pts[i].ang = Math.atan2(b.y - a.y, b.x - a.x)
  }
  return { pts, length: dist }
}

function pathFrom(pts) {
  const p = pts.filter((_, i) => i % 2 === 0 || i === pts.length - 1)
  let d = `M${r1(p[0].x)} ${r1(p[0].y)}`
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[Math.max(0, i - 1)]
    const p1 = p[i]
    const p2 = p[i + 1]
    const p3 = p[Math.min(p.length - 1, i + 2)]
    d += `C${r1(p1.x + (p2.x - p0.x) / 6)} ${r1(p1.y + (p2.y - p0.y) / 6)} ${r1(p2.x - (p3.x - p1.x) / 6)} ${r1(p2.y - (p3.y - p1.y) / 6)} ${r1(p2.x)} ${r1(p2.y)}`
  }
  return d
}

function spiral(x, y, ang, size, dir) {
  let d = `M${r1(x)} ${r1(y)}`
  let a = ang
  let px = x
  let py = y
  for (let k = 0; k < 26; k++) {
    const seg = size * (1 - k / 30) * 0.9
    a += dir * (0.18 + k * 0.028)
    px += Math.cos(a) * seg
    py += Math.sin(a) * seg
    d += `L${r1(px)} ${r1(py)}`
  }
  return d
}

/* ------------------------------------------------------------------ */
/* Composición                                                          */
/* ------------------------------------------------------------------ */

/**
 * Genera una rama completa: tallo + hojas + flores/frutos + zarcillos + arcos
 * de luz. `bias(p)` devuelve un factor de tamaño según la posición (hojas más
 * grandes y densas cerca del ancla de la esquina).
 */
function grow(sp, anchors, rand, { scale = 1, amp = 4, bias = () => 1, hangDown = false, leafSides = [-1, 1], glow, stemW = 1.6, maxLen } = {}) {
  const { pts, length } = buildStrand(anchors, rand, amp)
  const L = maxLen ?? length
  const leaves = []
  const flowers = []
  const tendrils = []
  let next = 2
  let n = 0
  for (const p of pts) {
    if (p.d < next) continue
    const b = bias(p)
    next = p.d + (sp.step * scale * (0.75 + rand() * 0.5)) / Math.max(0.7, b)
    const side = leafSides[n % leafSides.length]
    const dir = (p.ang * 180) / Math.PI + side * (48 + rand() * 38)
    const s = scale * b * (sp.size[0] + rand() * (sp.size[1] - sp.size[0]))
    leaves.push({ x: p.x, y: p.y, rot: dir + 90, s, t: p.d / L, pet: 2 + rand() * 3, rustle: rand() < 0.35, delay: rand() * 4 })
    if (sp.every && n % sp.every === sp.every - 1) {
      const hang = hangDown || sp.hang
      flowers.push({
        x: p.x + (hang ? 0 : Math.cos(p.ang - side * 1.3) * 5 * scale),
        y: p.y + (hang ? 1 : Math.sin(p.ang - side * 1.3) * 5 * scale),
        rot: hang ? rand() * 16 - 8 : rand() * 30 - 15,
        s: scale * (0.85 + rand() * 0.35) * Math.min(1.25, b),
        t: p.d / L,
        seed: rand(),
      })
    }
    if (n % 5 === 2) tendrils.push({ d: spiral(p.x, p.y, p.ang - side * 1.1, 1.6 * scale, side), t: p.d / L })
    n++
  }
  const glows = []
  if (glow) {
    for (const [idx, dir] of [[Math.floor(pts.length * 0.12), 1], [pts.length - 1, -1]]) {
      const p = pts[idx]
      glows.push(spiral(p.x, p.y, p.ang + dir * 1.9, 3.4 * scale, dir))
    }
  }
  return { d: pathFrom(pts), leaves, flowers, tendrils, glows, stemW: stemW * scale }
}

function seededFlower(sp, seed) {
  return sp.flower(rng(Math.floor(seed * 1e6)))
}

function Branch({ sp, b, gid, glowColor, animate = true }) {
  const fillUrl = `url(#${gid})`
  return (
    <g className="vine-branch">
      <path className="vine-stem" d={b.d} stroke={sp.stem} strokeWidth={b.stemW} fill="none" strokeLinecap="round" pathLength="1" />
      <path d={b.d} stroke="#ffffff" strokeOpacity="0.14" strokeWidth={b.stemW * 0.35} fill="none" transform="translate(-0.3 -0.3)" />
      {b.tendrils.map((t, i) => (
        <path key={`t${i}`} className="vine-pop" style={{ '--t': t.t }} d={t.d} stroke={sp.stem} strokeWidth="0.5" fill="none" strokeLinecap="round" />
      ))}
      {b.leaves.map((l, i) => (
        <g key={`l${i}`} transform={`translate(${r1(l.x)} ${r1(l.y)}) rotate(${r1(l.rot)})`}>
          <g className="vine-pop" style={{ '--t': l.t }}>
            <g className={l.rustle && animate ? 'vine-rustle' : undefined} style={{ animationDelay: `${r1(l.delay)}s` }}>
              <path d={`M0 0L0 ${-r1(l.pet)}`} stroke={sp.stem} strokeWidth="0.6" />
              <g transform={`translate(0 ${-r1(l.pet)}) scale(${r1(l.s * 100) / 100})`}>{sp.leaf(fillUrl, sp)}</g>
            </g>
          </g>
        </g>
      ))}
      {b.flowers.map((f, i) => (
        <g key={`f${i}`} transform={`translate(${r1(f.x)} ${r1(f.y)}) rotate(${r1(f.rot)})`}>
          <g className="vine-pop vine-pop--late" style={{ '--t': f.t }}>
            <g className={animate && sp.hang ? 'vine-sway' : undefined} style={{ animationDelay: `${r1(f.seed * 3)}s` }}>
              <g transform={`scale(${r1(f.s * 100) / 100})`}>{seededFlower(sp, f.seed)}</g>
            </g>
          </g>
        </g>
      ))}
      {glowColor &&
        b.glows.map((d, i) => (
          <path key={`g${i}`} className="vine-glow" d={d} stroke={glowColor} strokeWidth="1.3" fill="none" strokeLinecap="round" style={{ color: glowColor, animationDelay: `${i * 1.3}s` }} />
        ))}
    </g>
  )
}

function Defs({ keys, uid }) {
  return (
    <defs>
      {keys.map((k) => {
        const sp = SPECIES[k]
        return (
          <g key={k}>
            <linearGradient id={`${uid}-${k}`} x1="0" y1="0" x2="0.4" y2="1">
              <stop offset="0" stopColor={sp.leafA} />
              <stop offset="1" stopColor={sp.leafB} />
            </linearGradient>
            {sp.defs}
          </g>
        )
      })}
    </defs>
  )
}

function useGrown() {
  const ref = useRef(null)
  const [grown, setGrown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined' || prefersReducedMotion()) {
      setGrown(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setGrown(true)
          io.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, grown]
}

let uidCounter = 0
const useUid = (p) => useMemo(() => `${p}${++uidCounter}`, [p])

/**
 * Enredadera para una tarjeta. `species`: clave de SPECIES. `side`: esquina
 * de arranque ('right' | 'left'). El SVG sobresale del borde a propósito.
 */
export function VineDecor({ species, seed = 1, side = 'right' }) {
  const sp = SPECIES[species] || SPECIES.ivy
  const uid = useUid('vc')
  const [ref, grown] = useGrown()
  const W = 250
  const H = 270
  const C = 30 // esquina de la tarjeta dentro del SVG
  const glow = seed % 2 ? '#9dff6e' : '#c78bff'

  const data = useMemo(() => {
    const rand = rng(seed * 7 + species.length * 131)
    const cx = W - C
    const nearCorner = (p) => 1.3 - Math.min(1, Math.hypot(p.x - cx, p.y - C) / 170) * 0.55
    const branches = []
    if (sp.hang) {
      // cortina: corre por el borde superior y deja colgar racimos
      branches.push(grow(sp, [[W - 6, C + 70], [cx + 2, C + 4], [cx - 60, C - 6], [60, C + 2], [8, C - 4]], rand, { bias: nearCorner, amp: 5, hangDown: true, glow: true }))
      branches.push(grow(sp, [[cx - 20, C - 2], [cx + 8, C + 60], [cx + 2, C + 150]], rand, { bias: () => 0.85, amp: 3, scale: 0.9 }))
    } else {
      // trepadora: sube por el borde lateral y dobla en la esquina
      branches.push(grow(sp, [[cx + 4, H - 4], [cx - 2, C + 90], [cx + 1, C + 2], [cx - 70, C - 2], [30, C + 6]], rand, { bias: nearCorner, amp: 4.5, glow: true }))
      branches.push(grow(sp, [[cx + 16, C + 30], [cx - 10, C - 16], [cx - 40, C - 22]], rand, { bias: () => 1.05, amp: 3, scale: 0.85 }))
    }
    return branches
  }, [sp, seed, species])

  // ramita pequeña en la esquina opuesta inferior
  const sprig = useMemo(() => {
    const rand = rng(seed * 13 + 5)
    return grow(sp, [[2, 92], [22, 72], [26, 44], [52, 30]], rand, { scale: 0.62, amp: 2 })
  }, [sp, seed])

  return (
    <span ref={ref} className={`demo-vine demo-vine--${side}${grown ? ' is-grown' : ''}`} aria-hidden="true">
      <svg className="demo-vine-main" viewBox={`0 0 ${W} ${H}`} width={W} height={H}>
        <Defs keys={[species in SPECIES ? species : 'ivy']} uid={uid} />
        {data.map((b, i) => (
          <Branch key={i} sp={sp} b={b} gid={`${uid}-${species in SPECIES ? species : 'ivy'}`} glowColor={i === 0 ? glow : null} />
        ))}
      </svg>
      <svg className="demo-vine-sprig" viewBox="0 0 110 110" width="110" height="110">
        <Defs keys={[species in SPECIES ? species : 'ivy']} uid={`${uid}s`} />
        <Branch sp={sp} b={sprig} gid={`${uid}s-${species in SPECIES ? species : 'ivy'}`} />
      </svg>
    </span>
  )
}

/**
 * Contorno de la página: dos columnas fijas (izquierda y derecha) con
 * enredaderas mezcladas, de arriba abajo.
 */
export function VineFrame() {
  const uid = useUid('vf')
  const [ref, grown] = useGrown()
  const H = 1000
  const W = 170

  const left = useMemo(() => {
    const rand = rng(4242)
    const edge = (p) => 1.15 - Math.min(1, p.x / 120) * 0.35
    return [
      { k: 'ivy', b: grow(SPECIES.ivy, [[10, H + 20], [22, 760], [12, 520], [26, 260], [14, -20]], rand, { scale: 1.9, amp: 9, bias: edge, glow: true, stemW: 1.5 }) },
      { k: 'wisteria', b: grow(SPECIES.wisteria, [[-10, 24], [60, 50], [120, 44], [160, 70]], rand, { scale: 1.7, amp: 6, hangDown: true, glow: true, stemW: 1.4 }) },
      { k: 'jasmine', b: grow(SPECIES.jasmine, [[0, 640], [30, 560], [70, 470], [60, 380]], rand, { scale: 1.6, amp: 6, stemW: 1.1 }) },
      { k: 'ivy', b: grow(SPECIES.ivy, [[0, 980], [60, 930], [120, 960]], rand, { scale: 1.5, amp: 5, stemW: 1.2 }) },
    ]
  }, [])

  const right = useMemo(() => {
    const rand = rng(9191)
    const edge = (p) => 1.15 - Math.min(1, p.x / 120) * 0.35
    return [
      { k: 'grape', b: grow(SPECIES.grape, [[12, H + 20], [20, 700], [10, 420], [24, 160], [12, -20]], rand, { scale: 1.8, amp: 9, bias: edge, glow: true, stemW: 1.6 }) },
      { k: 'virginia', b: grow(SPECIES.virginia, [[-8, 330], [50, 250], [90, 180], [80, 110]], rand, { scale: 1.6, amp: 6, stemW: 1.2 }) },
      { k: 'morningGlory', b: grow(SPECIES.morningGlory, [[0, 860], [40, 780], [80, 700], [70, 620]], rand, { scale: 1.5, amp: 6, glow: true, stemW: 1.1 }) },
      { k: 'wisteria', b: grow(SPECIES.wisteria, [[-10, 30], [70, 44], [150, 60]], rand, { scale: 1.5, amp: 5, hangDown: true, stemW: 1.3 }) },
    ]
  }, [])

  const renderSide = (items, cls, pre) => (
    <svg className={`demo-vine-frame ${cls}`} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMinYMin slice">
      <Defs keys={[...new Set(items.map((i) => i.k))]} uid={pre} />
      {items.map(({ k, b }, i) => (
        <Branch key={i} sp={SPECIES[k]} b={b} gid={`${pre}-${k}`} glowColor={b.glows.length ? (i % 2 ? '#c78bff' : '#9dff6e') : null} />
      ))}
    </svg>
  )

  return (
    <div ref={ref} className={`demo-vine-frame-wrap${grown ? ' is-grown' : ''}`} aria-hidden="true">
      {renderSide(left, 'demo-vine-frame--left', `${uid}l`)}
      {renderSide(right, 'demo-vine-frame--right', `${uid}r`)}
    </div>
  )
}
