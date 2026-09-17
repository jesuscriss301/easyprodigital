import { useEffect, useMemo, useRef, useState } from 'react'
import { prefersReducedMotion } from './motionUtils.js'

// Materiales de obra decorativos (albañilería, carpintería, plomería —
// demo.materials = 'masons' | 'carpenters' | 'plumbers').
// Igual que Vines.jsx: todo es SVG dibujado con código (sin imágenes ni
// librerías), cada tarjeta recibe un material distinto y el contorno de la
// página lleva dos columnas fijas con materiales del oficio.

const r1 = (n) => Math.round(n * 10) / 10

function rng(seed) {
  let s = (seed * 9301 + 49297) >>> 0 || 1
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0
    return s / 4294967296
  }
}

function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16)
  const c = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) =>
    Math.round(amt >= 0 ? v + (255 - v) * amt : v * (1 + amt)),
  )
  return `rgb(${c.join(',')})`
}

/* ------------------------------------------------------------------ */
/* Piezas base                                                          */
/* ------------------------------------------------------------------ */

// Caja en perspectiva: frente + cara superior + lateral derecho.
function Box({ x, y, w, h, d = 6, c, children, stroke }) {
  return (
    <g>
      <polygon points={`${x},${y} ${x + d},${y - d * 0.7} ${x + w + d},${y - d * 0.7} ${x + w},${y}`} fill={shade(c, 0.2)} />
      <polygon points={`${x + w},${y} ${x + w + d},${y - d * 0.7} ${x + w + d},${y + h - d * 0.7} ${x + w},${y + h}`} fill={shade(c, -0.25)} />
      <rect x={x} y={y} width={w} height={h} fill={c} stroke={stroke} strokeWidth={stroke ? 0.4 : undefined} />
      {children}
    </g>
  )
}

// Tubo con volumen: sombra + color + brillo.
function Tube({ d, w, c, cap = 'round', light = 0.45 }) {
  return (
    <g fill="none" strokeLinecap={cap} strokeLinejoin="round">
      <path d={d} stroke={shade(c, -0.35)} strokeWidth={w} />
      <path d={d} stroke={c} strokeWidth={w * 0.72} />
      <path d={d} stroke={shade(c, light)} strokeWidth={w * 0.2} transform={`translate(${-w * 0.14} ${-w * 0.14})`} opacity="0.85" />
    </g>
  )
}

function Grain({ x, y, w, h, c, n = 4, seed = 1 }) {
  const rand = rng(seed)
  return (
    <g stroke={c} strokeWidth="0.45" fill="none" opacity="0.55">
      {Array.from({ length: n }, (_, i) => {
        const gy = y + ((i + 0.5) * h) / n + (rand() - 0.5) * 1.5
        const a = (rand() - 0.5) * 3
        return <path key={i} d={`M${r1(x + 1)} ${r1(gy)}C${r1(x + w * 0.3)} ${r1(gy + a)} ${r1(x + w * 0.6)} ${r1(gy - a)} ${r1(x + w - 1)} ${r1(gy + a * 0.5)}`} />
      })}
    </g>
  )
}

const P = ({ i = 0, children, cls = '' }) => (
  <g className={`mat-piece ${cls}`} style={{ '--i': i }}>
    {children}
  </g>
)

const BRICK = ['#b5523a', '#a4442f', '#c2663f', '#9b3d2b', '#b85a3c', '#c47a4f']
const WOOD = ['#c8914f', '#a8703a', '#8b5a2b', '#d9a86c', '#6f4424', '#b98252', '#e0b98a', '#94603a', '#7a4b28']

function Brick({ x, y, w = 30, h = 11, c, holes }) {
  return (
    <Box x={x} y={y} w={w} h={h} d={7} c={c}>
      {holes && [0.25, 0.5, 0.75].map((t) => (
        <ellipse key={t} cx={r1(x + w * t + 3)} cy={r1(y - 2.4)} rx="2.4" ry="1.1" fill={shade(c, -0.55)} />
      ))}
      <path d={`M${x + 2} ${y + h * 0.4}h${w * 0.3}M${x + w * 0.5} ${y + h * 0.7}h${w * 0.35}`} stroke={shade(c, -0.15)} strokeWidth="0.5" />
    </Box>
  )
}

function Level({ x = -55, y = -6, w = 110, rot = -18 }) {
  return (
    <g transform={`rotate(${rot})`}>
      <Box x={x} y={y} w={w} h={12} d={4} c="#f2c230">
        <rect x={x} y={y} width="6" height="12" fill="#2b2b2b" />
        <rect x={x + w - 6} y={y} width="6" height="12" fill="#2b2b2b" />
        {[0.3, 0.62].map((t) => (
          <g key={t}>
            <rect x={r1(x + w * t)} y={y + 2.5} width="16" height="7" rx="2" fill="#20251c" />
            <rect x={r1(x + w * t + 1.5)} y={y + 4} width="13" height="4" rx="2" fill="#c8f25a" />
            <circle cx={r1(x + w * t + 8)} cy={y + 6} r="1.4" fill="#f6ffe0" />
          </g>
        ))}
      </Box>
    </g>
  )
}

function Tape({ rot = 0 }) {
  return (
    <g transform={`rotate(${rot})`}>
      <rect x="-4" y="4" width="62" height="7" fill="#f5d74a" stroke="#b89a1c" strokeWidth="0.4" />
      {Array.from({ length: 14 }, (_, i) => (
        <path key={i} d={`M${i * 4.2} 4v${i % 2 ? 2 : 3.5}`} stroke="#2b2b2b" strokeWidth="0.45" />
      ))}
      <rect x="57" y="3" width="3" height="10" fill="#555" />
      <rect x="-26" y="-14" width="36" height="34" rx="8" fill="#f2c230" />
      <rect x="-26" y="-14" width="36" height="34" rx="8" fill="none" stroke="#9a7b10" strokeWidth="0.8" />
      <circle cx="-8" cy="3" r="11" fill="#222" />
      <circle cx="-8" cy="3" r="3" fill="#bbb" />
      <rect x="-27" y="-2" width="4" height="10" rx="1" fill="#2b2b2b" />
    </g>
  )
}

/* ------------------------------------------------------------------ */
/* Catálogo de materiales                                               */
/* ------------------------------------------------------------------ */

const M = {
  // ---------- albañilería ----------
  bricks: () => {
    const rows = [[20, [-48, -16, 16]], [7, [-32, 0]], [-6, [-16]]]
    let k = 0
    return (
      <g>
        {rows.flatMap(([y, xs]) => xs.map((x) => <P key={k} i={k}><Brick x={x} y={y} c={BRICK[k++ % BRICK.length]} holes={y < 0} /></P>))}
        <P i={7}><g transform="translate(-44 -30) rotate(-28)"><Brick x={0} y={0} c={BRICK[2]} holes /></g></P>
        <P i={8}><g transform="translate(30 -26) rotate(22)"><Brick x={0} y={0} c={BRICK[5]} holes /></g></P>
      </g>
    )
  },
  brickWall: () => {
    const rand = rng(21)
    const out = [<polygon key="m" points="-58,-40 52,-44 58,30 -50,34" fill="#cfc6b8" />]
    for (let r = 0; r < 6; r++) {
      const y = -40 + r * 12
      for (let c = -1; c < 5; c++) {
        const x = -58 + c * 24 + (r % 2 ? 12 : 0)
        if ((c === -1 || c === 4) && rand() < 0.5) continue
        out.push(
          <P key={`${r}-${c}`} i={r + c}>
            <rect x={Math.max(-58, x)} y={y + 1} width={Math.min(22, 58 - x)} height="10" rx="0.8" fill={BRICK[Math.floor(rand() * BRICK.length)]} />
          </P>,
        )
      }
    }
    return <g>{out}</g>
  },
  cinderBlocks: () => {
    const block = (x, y, i) => (
      <P key={i} i={i}>
        <Box x={x} y={y} w={38} h={18} d={10} c="#9b9c98">
          {[0.18, 0.58].map((t) => (
            <polygon key={t} points={`${x + 38 * t + 2},${y - 1.5} ${x + 38 * t + 5},${y - 5.5} ${x + 38 * t + 15},${y - 5.5} ${x + 38 * t + 12},${y - 1.5}`} fill="#4c4d4a" />
          ))}
          {[[4, 5], [20, 11], [30, 4]].map(([a, b]) => <circle key={a} cx={x + a} cy={y + b} r="0.7" fill="#7c7d79" />)}
        </Box>
      </P>
    )
    return <g>{[block(-46, 14, 0), block(-6, 14, 1), block(-26, -6, 2)]}</g>
  },
  flagstone: () => {
    const rand = rng(8)
    const cols = ['#b9b1a3', '#9e968a', '#cfc2a8', '#a8a39a', '#8f8a82', '#c4b59a']
    const centers = [[-30, -20], [8, -28], [38, -8], [-38, 14], [-4, 8], [30, 26], [-14, 36]]
    return (
      <g>
        {centers.map(([cx, cy], i) => {
          const n = 6 + Math.floor(rand() * 2)
          const pts = Array.from({ length: n }, (_, k) => {
            const a = (k / n) * Math.PI * 2 + rand() * 0.4
            const rr = 13 + rand() * 6
            return `${r1(cx + Math.cos(a) * rr)},${r1(cy + Math.sin(a) * rr * 0.8)}`
          }).join(' ')
          return (
            <P key={i} i={i}>
              <polygon points={pts} fill={cols[i % cols.length]} stroke="#6e685f" strokeWidth="0.8" />
              <path d={`M${cx - 6} ${cy - 3}l5 3l3 -2`} stroke="#6e685f" strokeWidth="0.5" fill="none" />
            </P>
          )
        })}
      </g>
    )
  },
  rebar: () => (
    <g>
      {Array.from({ length: 7 }, (_, i) => (
        <P key={i} i={i}>
          <g transform={`translate(${i * 3.6 - 10} ${i * 2.2 - 6})`}>
            <Tube d="M-56 40L50 -44" w={4} c={i % 2 ? '#7a5642' : '#6b4a3a'} light={0.35} />
            <path d="M-56 40L50 -44" stroke="#3b2a22" strokeWidth="3" strokeDasharray="0.8 3" fill="none" />
          </g>
        </P>
      ))}
      <P i={8}><g stroke="#8b8b8b" strokeWidth="1.2" fill="none"><ellipse cx="-24" cy="20" rx="4" ry="15" transform="rotate(38 -24 20)" /><ellipse cx="26" cy="-20" rx="4" ry="15" transform="rotate(38 26 -20)" /></g></P>
    </g>
  ),
  trowel: () => (
    <g transform="rotate(-32)">
      <P i={0}>
        <path d="M-2 -52L30 0L-2 22L-34 0Z" fill="url(#md-steel)" stroke="#6d7680" strokeWidth="0.8" />
        <path d="M-2 -46L-2 16" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="0.8" />
      </P>
      <P i={1}>
        <path d="M-2 16L-2 30L10 36" stroke="#555" strokeWidth="2.4" fill="none" />
        <Tube d="M10 36L52 44" w={9} c="#a8703a" />
        <rect x="8" y="31" width="6" height="10" rx="1" fill="#777" transform="rotate(10 11 36)" />
      </P>
    </g>
  ),
  level: () => <P i={0}><Level /></P>,
  marble: () => (
    <g>
      {[
        ['#eeece8', '#9aa0a6', -28, -24, -12],
        ['#2f3a3a', '#e8e8e8', -6, -10, 6],
        ['#dccbb0', '#8c7a60', 14, 4, 20],
      ].map(([c, v, x, y, rot], i) => (
        <P key={i} i={i}>
          <g transform={`translate(${x} ${y}) rotate(${rot})`}>
            <rect x="-24" y="-24" width="48" height="48" rx="2" fill={c} stroke={shade(c, -0.2)} strokeWidth="0.8" />
            <path d="M-24 -8C-12 -12 -6 2 6 -2S18 10 24 6M-10 -24C-8 -12 -14 0 -6 10S-2 20 -4 24M4 -24C8 -16 16 -18 24 -14" stroke={v} strokeWidth="0.7" fill="none" opacity="0.8" />
            <path d="M-24 -24h48" stroke="#fff" strokeOpacity="0.4" strokeWidth="1" />
          </g>
        </P>
      ))}
    </g>
  ),
  hydraulicTiles: () => {
    const pats = [
      ['#e9e3d6', '#3d6b8c', 'circles'],
      ['#e9e3d6', '#8c4a3d', 'star'],
      ['#dfe6ea', '#4a5a66', 'diamond'],
      ['#efe8d8', '#2f6b5c', 'petals'],
    ]
    return (
      <g>
        {pats.map(([bg, fg, kind], i) => (
          <P key={i} i={i}>
            <g transform={`translate(${-40 + i * 18} ${-30 + i * 14}) rotate(${-10 + i * 6})`}>
              <rect x="-17" y="-17" width="34" height="34" fill={bg} stroke="#b3ab9c" strokeWidth="0.8" />
              {kind === 'circles' && <g fill="none" stroke={fg} strokeWidth="2.2"><circle r="8" /><path d="M-17 -7A10 10 0 0 0 -7 -17M7 -17A10 10 0 0 0 17 -7M17 7A10 10 0 0 0 7 17M-7 17A10 10 0 0 0 -17 7" /></g>}
              {kind === 'star' && <g fill={fg}><polygon points="0,-12 3,-3 12,0 3,3 0,12 -3,3 -12,0 -3,-3" /><circle r="2.5" fill={bg} /><path d="M-17 -17h6l-6 6zM17 -17h-6l6 6zM17 17h-6l6 -6zM-17 17h6l-6 -6z" /></g>}
              {kind === 'diamond' && <g fill="none" stroke={fg} strokeWidth="1.6"><rect x="-8" y="-8" width="16" height="16" transform="rotate(45)" /><rect x="-3" y="-3" width="6" height="6" fill={fg} transform="rotate(45)" /><path d="M-17 0h5M12 0h5M0 -17v5M0 12v5" /></g>}
              {kind === 'petals' && <g fill={fg}>{[0, 90, 180, 270].map((a) => <ellipse key={a} cy="-7" rx="3.5" ry="7" transform={`rotate(${a + 45})`} />)}<circle r="2.4" fill="#d9a441" /></g>}
            </g>
          </P>
        ))}
      </g>
    )
  },
  pavers: () => {
    const cols = ['#a39787', '#8d8173', '#b8ab98', '#7f7568', '#9d8f7c']
    const out = []
    for (let r = 0; r < 4; r++)
      for (let c = 0; c < 4; c++)
        out.push(
          <P key={`${r}${c}`} i={r * 2 + c}>
            <rect x={-44 + c * 23 + (r % 2 ? 11 : 0)} y={-26 + r * 15} width="21" height="13" rx="3.5" fill={cols[(r * 3 + c) % cols.length]} stroke="#5f574d" strokeWidth="0.6" />
          </P>,
        )
    return <g transform="skewX(-22) rotate(-6)">{out}</g>
  },
  steelProfile: () => (
    <g transform="rotate(28)">
      <P i={0}>
        <Box x={-60} y={-8} w={120} h={16} d={8} c="#9aa3ab">
          <rect x={-60} y={-4} width="120" height="8" fill="#6f7880" />
          <path d="M-60 -4h120" stroke="#c9d0d6" strokeWidth="0.7" />
          {[-44, -8, 28].map((x) => <circle key={x} cx={x} cy="0" r="1.8" fill="#3e454b" />)}
        </Box>
      </P>
      <P i={2}>
        <Box x={-40} y={14} w={90} h={8} d={10} c="#b3bbc2" />
      </P>
    </g>
  ),
  tapeMeasure: () => <P i={0}><Tape rot={-14} /></P>,
  bucket: () => (
    <g>
      <P i={0}>
        <path d="M-30 -14L-24 34H24L30 -14Z" fill="#2c2c2c" />
        <path d="M-26 -8L-21 30" stroke="#555" strokeWidth="1.5" />
        <ellipse cx="0" cy="-14" rx="30" ry="7" fill="#3a3a3a" />
        <ellipse cx="0" cy="-13" rx="26" ry="5.2" fill="#a8a6a0" />
        <path d="M-12 -14c4 -3 10 -2 16 0" stroke="#8c8a84" strokeWidth="1.2" fill="none" />
        <path d="M-30 -12C-30 -44 30 -44 30 -12" stroke="#777" strokeWidth="1.6" fill="none" />
      </P>
      <P i={2}>
        <g transform="translate(12 -30) rotate(28) scale(0.55)">
          <path d="M-2 -52L30 0L-2 22L-34 0Z" fill="url(#md-steel)" stroke="#6d7680" />
          <Tube d="M-2 22L-2 58" w={10} c="#a8703a" />
        </g>
      </P>
    </g>
  ),
  gravel: () => {
    const rand = rng(33)
    const cols = ['#8f8a82', '#b3ada3', '#6f6a63', '#a39c90', '#c8c1b4', '#7d776e']
    return (
      <g>
        {Array.from({ length: 58 }, (_, i) => {
          const x = (rand() - 0.5) * 100
          const top = -34 * (1 - Math.abs(x) / 55)
          const y = top + rand() * (30 - top) * 0.9
          return (
            <P key={i} i={Math.floor(i / 6)}>
              <ellipse cx={r1(x)} cy={r1(y)} rx={r1(3 + rand() * 3)} ry={r1(2.2 + rand() * 2)} fill={cols[i % cols.length]} stroke="#4f4b45" strokeWidth="0.4" />
            </P>
          )
        })}
      </g>
    )
  },
  masonHammer: () => (
    <g>
      <P i={0}>
        <g transform="rotate(-38)">
          <Tube d="M0 -6L0 58" w={8} c="#b07a45" />
          <Box x={-26} y={-16} w={46} h={12} d={5} c="#3f4449">
            <polygon points="20,-16 34,-10 20,-4" fill="#5a6066" />
          </Box>
        </g>
      </P>
      <P i={2}>
        <g transform="translate(20 6) rotate(48)">
          <Tube d="M0 -40L0 30" w={6} c="#8e979f" light={0.6} />
          <path d="M-3 30L0 40L3 30Z" fill="#c9d0d6" />
          <rect x="-3.5" y="-44" width="7" height="6" rx="1" fill="#5a6066" />
        </g>
      </P>
    </g>
  ),
  stoneBlocks: () => (
    <g>
      {[[-50, 16, 44, 20], [-2, 16, 40, 20], [-30, -6, 46, 20]].map(([x, y, w, h], i) => (
        <P key={i} i={i}>
          <Box x={x} y={y} w={w} h={h} d={10} c={['#d8c7a4', '#cbb893', '#e0d2b4'][i]}>
            <polygon points={`${x + w - 8},${y} ${x + w},${y} ${x + w},${y + 7}`} fill="#b8a582" />
            <path d={`M${x + 5} ${y + 6}l6 2l4 -1M${x + 18} ${y + 14}l7 -2`} stroke="#a8966f" strokeWidth="0.6" fill="none" />
          </Box>
        </P>
      ))}
    </g>
  ),

  // ---------- carpintería ----------
  planks: () => (
    <g transform="rotate(-12)">
      {[0, 1, 2, 3].map((i) => {
        const x = -62 + (i % 2) * 6
        const y = 22 - i * 13
        const c = WOOD[i * 2]
        return (
          <P key={i} i={i}>
            <Box x={x} y={y} w={116} h={10} d={9} c={c}>
              <Grain x={x} y={y} w={116} h={10} c={shade(c, -0.45)} n={3} seed={i + 3} />
              <ellipse cx={x + 40 + i * 12} cy={y + 5} rx="3" ry="1.6" fill="none" stroke={shade(c, -0.45)} strokeWidth="0.5" />
            </Box>
          </P>
        )
      })}
    </g>
  ),
  swatchFan: () => (
    <g transform="translate(-26 36)">
      {WOOD.map((c, i) => (
        <P key={i} i={i}>
          <g transform={`rotate(${-78 + i * 11})`}>
            <rect x="-9" y="-78" width="18" height="84" rx="3" fill={c} stroke={shade(c, -0.35)} strokeWidth="0.6" />
            <Grain x={-9} y={-78} w={18} h={84} c={shade(c, -0.45)} n={4} seed={i} />
            <rect x="-9" y="-78" width="18" height="84" rx="3" fill="url(#md-sheen)" />
          </g>
        </P>
      ))}
      <circle r="3.4" fill="#c9d0d6" stroke="#6d7680" />
    </g>
  ),
  logRounds: () => (
    <g>
      {[[-24, 10, 24], [18, 16, 19], [-2, -22, 17]].map(([cx, cy, R], i) => (
        <P key={i} i={i}>
          <circle cx={cx} cy={cy} r={R + 3} fill="#5a3b22" />
          <circle cx={cx} cy={cy} r={R} fill="#e2b97d" />
          {[0.8, 0.62, 0.45, 0.28, 0.12].map((k) => (
            <circle key={k} cx={cx + (1 - k) * 1.5} cy={cy} r={R * k} fill="none" stroke="#b98a52" strokeWidth="0.7" />
          ))}
          <path d={`M${cx} ${cy}l${R * 0.7} ${-R * 0.4}`} stroke="#8a5f33" strokeWidth="0.8" />
        </P>
      ))}
    </g>
  ),
  plywood: () => (
    <g>
      {[0, 1].map((i) => (
        <P key={i} i={i}>
          <g transform={`translate(${i * 16 - 8} ${i * 14 - 8}) rotate(${-14 + i * 10})`}>
            <polygon points="-44,-30 40,-38 48,-30 -36,-22" fill="#d8b684" />
            <rect x="-44" y="-30" width="84" height="44" fill="#caa36d" transform="skewY(-5)" />
            <Grain x={-44} y={-30} w={84} h={40} c="#9b7442" n={6} seed={i + 9} />
            <g transform="translate(40 -38) skewY(38)">
              {[0, 1, 2, 3, 4].map((k) => <rect key={k} x="0" y={k * 1.8} width="8" height="1.8" fill={k % 2 ? '#e3c697' : '#8a6334'} />)}
            </g>
          </g>
        </P>
      ))}
    </g>
  ),
  handSaw: () => (
    <g transform="rotate(-24)">
      <P i={0}>
        <path d="M-60 -6L30 -16L30 8L-60 4Z" fill="url(#md-steel)" stroke="#6d7680" strokeWidth="0.6" />
        <path d={`M-60 4${Array.from({ length: 30 }, (_, i) => `L${-57 + i * 3} ${i % 2 ? 4.3 + i * 0.13 : 7.3 + i * 0.13}`).join('')}L30 8`} fill="#9aa3ab" />
        <path d="M-56 -4L26 -12" stroke="#fff" strokeOpacity="0.5" strokeWidth="0.7" />
      </P>
      <P i={1}>
        <path d="M26 -22C44 -26 58 -18 56 -2C54 12 42 16 26 14Z" fill="#8b4f2b" stroke="#5c321a" strokeWidth="0.8" />
        <ellipse cx="42" cy="-3" rx="7" ry="9" fill="#1e1e1e" opacity="0.85" />
        {[-14, 8].map((y) => <circle key={y} cx="30" cy={y} r="1.8" fill="#d7c08a" />)}
      </P>
    </g>
  ),
  plane: () => (
    <g transform="rotate(-10)">
      <P i={0}>
        <Box x={-48} y={0} w={92} h={16} d={12} c="#9b6a3a">
          <Grain x={-48} y={0} w={92} h={16} c="#5c3a1c" n={3} seed={4} />
        </Box>
      </P>
      <P i={1}>
        <polygon points="-2,-8 12,-30 18,-28 6,-6" fill="url(#md-steel)" stroke="#555" strokeWidth="0.5" />
        <path d="M18 -8C18 -30 40 -30 40 -8" stroke="#6b3f1e" strokeWidth="6" fill="none" />
        <circle cx="-30" cy="-12" r="7" fill="#6b3f1e" />
        <circle cx="-31.5" cy="-13.5" r="2" fill="#a67a4a" />
      </P>
      <P i={2}>
        <path d="M44 10c10 -8 20 -2 14 6c-5 7 -14 2 -9 -3" stroke="#e0b98a" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      </P>
    </g>
  ),
  chisels: () => (
    <g>
      {[[-12, -34, 18], [14, -30, 34]].map(([x, y, rot], i) => (
        <P key={i} i={i}>
          <g transform={`translate(${x} ${y}) rotate(${rot})`}>
            <Tube d="M0 -30L0 14" w={10} c={i ? '#c23b22' : '#b07a45'} />
            <rect x="-5" y="14" width="10" height="5" fill="#8a9097" />
            <path d="M-3 19L-3 58L0 64L3 58L3 19Z" fill="url(#md-steel)" stroke="#6d7680" strokeWidth="0.5" />
          </g>
        </P>
      ))}
    </g>
  ),
  hammerNails: () => (
    <g>
      <P i={0}>
        <g transform="rotate(32)">
          <Tube d="M0 -8L0 60" w={8} c="#c8914f" />
          <Box x={-8} y={-18} w={34} h={11} d={4} c="#3f4449" />
          <path d="M-8 -12C-18 -12 -24 -20 -28 -26M-8 -10C-20 -8 -26 -14 -32 -18" stroke="#3f4449" strokeWidth="3.2" fill="none" strokeLinecap="round" />
        </g>
      </P>
      {[[-40, 20, 70], [-28, 34, 10], [30, 30, -40], [40, 10, 100], [-46, 2, -20]].map(([x, y, rot], i) => (
        <P key={i} i={i + 1}>
          <g transform={`translate(${x} ${y}) rotate(${rot})`}>
            <path d="M0 -10L0 10L0.8 12" stroke="#8a9097" strokeWidth="1.3" />
            <rect x="-2.6" y="-11.5" width="5.2" height="1.8" rx="0.8" fill="#6d7680" />
          </g>
        </P>
      ))}
    </g>
  ),
  square: () => (
    <g>
      <P i={0}>
        <g transform="rotate(-12)">
          <path d="M-50 -40H-38V20H40V32H-50Z" fill="url(#md-steel)" stroke="#6d7680" strokeWidth="0.7" />
          {Array.from({ length: 14 }, (_, i) => <path key={i} d={`M${-34 + i * 5.5} 20v${i % 2 ? 3 : 5}`} stroke="#333" strokeWidth="0.5" />)}
          {Array.from({ length: 10 }, (_, i) => <path key={i} d={`M-38 ${-36 + i * 5.5}h${i % 2 ? 3 : 5}`} stroke="#333" strokeWidth="0.5" />)}
        </g>
      </P>
      <P i={2}>
        <g transform="translate(6 -10) rotate(38)">
          <rect x="-4" y="-40" width="8" height="64" fill="#e2432e" />
          <rect x="-4" y="-40" width="3" height="64" fill="#f06a52" />
          <path d="M-4 24L0 34L4 24Z" fill="#e8c9a0" />
          <path d="M-1.2 30L0 34L1.2 30Z" fill="#333" />
        </g>
      </P>
    </g>
  ),
  shavings: () => (
    <g>
      {[[-30, -10, 1.2, '#e0b98a'], [4, -26, 1, '#d9a86c'], [26, 6, 1.3, '#e6c79c'], [-8, 20, 0.9, '#c8914f'], [34, -28, 0.8, '#d9a86c'], [-40, 24, 0.8, '#e6c79c']].map(([x, y, s, c], i) => {
        let d = 'M0 0'
        let a = 0
        let px = 0
        let py = 0
        for (let k = 0; k < 30; k++) {
          a += 0.32
          const rr = 11 - k * 0.3
          px = Math.cos(a) * rr
          py = Math.sin(a) * rr * 0.7
          d += `L${r1(px + k * 0.9)} ${r1(py)}`
        }
        return (
          <P key={i} i={i} cls="mat-float">
            <g transform={`translate(${x} ${y}) scale(${s}) rotate(${i * 50})`}>
              <path d={d} stroke={shade(c, -0.3)} strokeWidth="4.2" fill="none" strokeLinecap="round" />
              <path d={d} stroke={c} strokeWidth="3" fill="none" strokeLinecap="round" />
            </g>
          </P>
        )
      })}
    </g>
  ),
  clamp: () => (
    <g transform="rotate(-20)">
      <P i={0}>
        <Tube d="M-8 -54L-8 44" w={7} c="#8e979f" light={0.6} cap="butt" />
        <Box x={-12} y={-54} w={40} h={10} d={4} c="#2d5fa3" />
        <Box x={-12} y={20} w={40} h={10} d={4} c="#2d5fa3" />
      </P>
      <P i={1}>
        <Tube d="M22 30L22 58" w={4} c="#c9d0d6" />
        <Tube d="M22 56L22 76" w={11} c="#d23a2a" />
        <rect x="18" y="-44" width="10" height="4" fill="#1e1e1e" />
      </P>
    </g>
  ),
  dowels: () => (
    <g>
      {[[0, 0], [-11, -6], [11, -6], [-11, 7], [11, 7], [0, -13], [0, 13]].map(([x, y], i) => (
        <P key={i} i={i}>
          <path d={`M${x - 30} ${y + 18}L${x} ${y}`} stroke="#b98252" strokeWidth="11" strokeLinecap="butt" />
          <circle cx={x} cy={y} r="5.6" fill="#e6c79c" stroke="#8a5f33" strokeWidth="0.8" />
          <circle cx={x} cy={y} r="2.6" fill="none" stroke="#b98a52" strokeWidth="0.5" />
        </P>
      ))}
      <P i={8}><path d="M-34 6C-30 -14 -20 -22 -8 -26M-18 34C-2 34 14 28 20 18" stroke="#c23b22" strokeWidth="2" fill="none" /></P>
    </g>
  ),
  screws: () => {
    const rand = rng(12)
    return (
      <g>
        {Array.from({ length: 9 }, (_, i) => {
          const x = (rand() - 0.5) * 90
          const y = (rand() - 0.5) * 70
          return (
            <P key={i} i={i}>
              <g transform={`translate(${r1(x)} ${r1(y)}) rotate(${Math.floor(rand() * 360)})`}>
                <path d="M-1.8 0L1.8 0L0 18Z" fill="#b8bec4" />
                <path d="M-2 3l4 1.5M-1.7 6.5l3.4 1.5M-1.4 10l2.8 1.5M-1 13.5l2 1.2" stroke="#6d7680" strokeWidth="0.6" />
                <circle cy="-1" r="4" fill="#d2d7dc" stroke="#6d7680" strokeWidth="0.5" />
                <path d="M-2.4 -1h4.8M0 -3.4v4.8" stroke="#555" strokeWidth="0.8" />
              </g>
            </P>
          )
        })}
      </g>
    )
  },
  dovetail: () => (
    <g transform="rotate(-8)">
      <P i={0}>
        <Box x={-54} y={-6} w={70} h={22} d={10} c="#c8914f">
          <Grain x={-54} y={-6} w={70} h={22} c="#7a4b28" n={4} seed={6} />
        </Box>
      </P>
      <P i={1}>
        <Box x={16} y={-44} w={22} h={60} d={10} c="#8b5a2b">
          <Grain x={16} y={-44} w={22} h={60} c="#4d2f16" n={6} seed={7} />
        </Box>
        {[-2, 8].map((y) => <polygon key={y} points={`16,${y} 8,${y - 3} 8,${y + 7} 16,${y + 4}`} fill="#8b5a2b" stroke="#4d2f16" strokeWidth="0.5" />)}
      </P>
    </g>
  ),

  // ---------- plomería ----------
  copperPipes: () => (
    <g>
      {[0, 1, 2, 3].map((i) => (
        <P key={i} i={i}>
          <g transform={`translate(${i * 9} ${i * 6})`}>
            <Tube d="M-60 30L36 -34" w={8} c={['#c77a45', '#b8683a', '#d48b56', '#a95d31'][i]} light={0.55} />
          </g>
        </P>
      ))}
      <P i={5}>
        <Tube d="M36 -34L54 -46Q62 -50 62 -40L62 -20" w={8} c="#c77a45" light={0.55} />
        <rect x="46" y="-49" width="7" height="12" rx="1.5" fill="#b0763a" transform="rotate(-34 49 -43)" />
      </P>
    </g>
  ),
  pvcPipes: () => (
    <g>
      <P i={0}><Tube d="M-60 -10L60 -10" w={16} c="#e9ecef" light={0.8} cap="butt" /></P>
      <P i={1}><Tube d="M0 -10L0 44" w={16} c="#e9ecef" light={0.8} cap="butt" /></P>
      <P i={2}>
        <rect x="-13" y="-21" width="26" height="22" rx="2" fill="#f7f8f9" stroke="#b9c0c7" />
        <rect x="-11" y="-8" width="22" height="14" rx="2" fill="#f7f8f9" stroke="#b9c0c7" />
        <path d="M-40 -12h14M26 -12h10" stroke="#3d7bd8" strokeWidth="1.2" />
        <text x="-44" y="-5" fontSize="4" fill="#6d7680" fontFamily="sans-serif">PVC 2&quot;</text>
      </P>
    </g>
  ),
  elbows: () => (
    <g>
      {[[-26, -14, 0], [18, -20, 90], [2, 20, 200]].map(([x, y, rot], i) => (
        <P key={i} i={i}>
          <g transform={`translate(${x} ${y}) rotate(${rot})`}>
            <Tube d="M-18 0Q0 0 0 18" w={12} c="#c9a24a" light={0.5} cap="butt" />
            <rect x="-22" y="-7" width="6" height="14" rx="1.5" fill="#b08b35" />
            <rect x="-7" y="16" width="14" height="6" rx="1.5" fill="#b08b35" />
          </g>
        </P>
      ))}
    </g>
  ),
  valve: () => (
    <g transform="rotate(-10)">
      <P i={0}><Tube d="M-60 6L60 6" w={11} c="#c9a24a" light={0.5} cap="butt" /></P>
      <P i={1}>
        <polygon points="-18,-6 -12,-12 12,-12 18,-6 18,18 -18,18" fill="#d4ac52" stroke="#8e6f28" strokeWidth="0.8" />
        <circle cx="0" cy="6" r="9" fill="#e0bd6a" stroke="#8e6f28" strokeWidth="0.8" />
        <rect x="-3" y="-20" width="6" height="10" fill="#8e979f" />
      </P>
      <P i={2}>
        <rect x="-8" y="-28" width="62" height="10" rx="4" fill="#d23a2a" />
        <rect x="-8" y="-28" width="62" height="3.5" rx="2" fill="#f06a52" />
        <circle cx="0" cy="-23" r="3" fill="#8e979f" />
      </P>
    </g>
  ),
  pipeWrench: () => (
    <g transform="rotate(-34)">
      <P i={0}>
        <Tube d="M-6 -4L-6 62" w={12} c="#d23a2a" cap="butt" />
        <path d="M-12 50h12" stroke="#111" strokeWidth="2" />
      </P>
      <P i={1}>
        <path d="M-14 -40H10V-30H-2V-8H-14Z" fill="url(#md-steel)" stroke="#555" strokeWidth="0.6" />
        <path d="M-2 -30v4h-3v4h3v4h-3v4h3" stroke="#555" strokeWidth="0.6" fill="none" />
        <rect x="-18" y="-6" width="16" height="10" rx="2" fill="#8e979f" />
        {[0, 1, 2, 3, 4].map((k) => <path key={k} d={`M${-16 + k * 3} -6v10`} stroke="#555" strokeWidth="0.5" />)}
        <path d="M-10 -18v-8" stroke="#555" strokeWidth="5" />
      </P>
    </g>
  ),
  faucet: () => (
    <g>
      <P i={0}>
        <Box x={-10} y={0} w={20} h={34} d={6} c="#c3cad1" />
        <Tube d="M0 4C0 -30 40 -30 40 0" w={10} c="#c3cad1" light={0.8} cap="butt" />
        <rect x="34" y="-2" width="12" height="6" rx="1" fill="#9aa3ab" />
        <rect x="-26" y="-10" width="24" height="7" rx="3.5" fill="#d9dee3" stroke="#8e979f" strokeWidth="0.6" />
      </P>
      <P i={2}>
        <g className="mat-drip">
          <path d="M40 10C40 10 36 16 36 18.5A4 4 0 0 0 44 18.5C44 16 40 10 40 10Z" fill="url(#md-water)" />
        </g>
        <g className="mat-drip mat-drip--2">
          <path d="M40 10C40 10 37 15 37 17A3 3 0 0 0 43 17C43 15 40 10 40 10Z" fill="url(#md-water)" />
        </g>
      </P>
    </g>
  ),
  gauge: () => (
    <g>
      <P i={0}><Tube d="M0 20L0 58" w={9} c="#c9a24a" light={0.5} cap="butt" /><polygon points="-7,22 7,22 9,30 -9,30" fill="#b08b35" /></P>
      <P i={1}>
        <circle r="30" fill="url(#md-steel)" stroke="#555" strokeWidth="1" />
        <circle r="25" fill="#f7f7f2" />
        <path d="M-17 12A21 21 0 1 1 17 12" stroke="#e24a3a" strokeWidth="2.4" fill="none" strokeDasharray="0 44 30" />
        {Array.from({ length: 11 }, (_, i) => {
          const a = (-225 + i * 27) * (Math.PI / 180)
          return <path key={i} d={`M${r1(Math.cos(a) * 21)} ${r1(Math.sin(a) * 21)}L${r1(Math.cos(a) * (i % 2 ? 18.5 : 17))} ${r1(Math.sin(a) * (i % 2 ? 18.5 : 17))}`} stroke="#333" strokeWidth="0.8" />
        })}
        <g className="mat-needle"><path d="M-1.4 2L0 -19L1.4 2Z" fill="#d23a2a" transform="rotate(35)" /></g>
        <circle r="3" fill="#333" />
        <text y="12" fontSize="4.2" textAnchor="middle" fill="#555" fontFamily="sans-serif">PSI</text>
      </P>
    </g>
  ),
  teflon: () => (
    <g>
      <P i={0}>
        <ellipse cx="-10" cy="0" rx="26" ry="22" fill="#f4f6f8" stroke="#c3cad1" strokeWidth="1" />
        <ellipse cx="-10" cy="0" rx="14" ry="12" fill="#e7ecf1" stroke="#c3cad1" />
        <ellipse cx="-10" cy="0" rx="10" ry="8.5" fill="#fff" stroke="#d23a2a" strokeWidth="1.4" />
      </P>
      <P i={2}>
        <path d="M14 8C30 14 26 30 42 34S56 26 60 40" stroke="#f4f6f8" strokeWidth="7" fill="none" />
        <path d="M14 8C30 14 26 30 42 34S56 26 60 40" stroke="#c3cad1" strokeWidth="0.6" fill="none" transform="translate(0 3.4)" />
      </P>
    </g>
  ),
  flexHose: () => (
    <g>
      <P i={0}>
        <Tube d="M-50 -30C-10 -40 -30 20 10 16S30 -20 50 -6" w={9} c="#b9c0c7" light={0.8} cap="butt" />
        <path d="M-50 -30C-10 -40 -30 20 10 16S30 -20 50 -6" stroke="#7d868f" strokeWidth="7" strokeDasharray="1 1.6" fill="none" opacity="0.6" />
      </P>
      <P i={1}>
        {[[-54, -30, -12], [50, -6, 30]].map(([x, y, rot]) => (
          <g key={x} transform={`translate(${x} ${y}) rotate(${rot})`}>
            <polygon points="-6,-7 6,-7 9,0 6,7 -6,7 -9,0" fill="#d4ac52" stroke="#8e6f28" strokeWidth="0.6" />
          </g>
        ))}
      </P>
    </g>
  ),
  pTrap: () => (
    <g>
      <P i={0}><Tube d="M-20 -50L-20 10A20 20 0 0 0 20 10L20 -6L56 -6" w={14} c="#eef0f2" light={0.9} cap="butt" /></P>
      <P i={1}>
        {[[-20, -26, 0], [20, -6, 0], [36, -6, 90]].map(([x, y, rot], k) => (
          <rect key={k} x={x - 9} y={y - 3.5} width="18" height="7" rx="2" fill="#dfe3e7" stroke="#aab2ba" transform={`rotate(${rot} ${x} ${y})`} />
        ))}
      </P>
    </g>
  ),
  drops: () => (
    <g>
      {[[-20, -20, 1.4], [8, -30, 1], [24, -2, 1.2], [-6, 12, 0.9], [-34, 16, 0.8], [30, 28, 0.7]].map(([x, y, s], i) => (
        <P key={i} i={i} cls="mat-float">
          <g transform={`translate(${x} ${y}) scale(${s})`}>
            <path d="M0 -14C0 -14 -9 -2 -9 4A9 9 0 0 0 9 4C9 -2 0 -14 0 -14Z" fill="url(#md-water)" />
            <ellipse cx="-3" cy="2" rx="2" ry="3.2" fill="#fff" opacity="0.7" />
          </g>
        </P>
      ))}
    </g>
  ),
  subwayTiles: () => {
    const out = [<polygon key="g" points="-58,-34 50,-40 56,32 -52,28" fill="#c9d3d9" />]
    let k = 0
    for (let r = 0; r < 6; r++)
      for (let c = -1; c < 5; c++) {
        const x = -58 + c * 22 + (r % 2 ? 11 : 0)
        if (x < -60 || x > 40) continue
        out.push(
          <P key={`${r}${c}`} i={k++ % 8}>
            <rect x={x + 1} y={-34 + r * 11 + 1} width="20" height="9" rx="1.5" fill={(r + c) % 5 === 0 ? '#9cc3de' : '#f7fafc'} stroke="#dfe7ec" strokeWidth="0.6" />
          </P>,
        )
      }
    return <g>{out}</g>
  },
  showerhead: () => (
    <g>
      <P i={0}><Tube d="M60 -40L20 -40Q10 -40 6 -30L0 -14" w={6} c="#c3cad1" light={0.8} /></P>
      <P i={1}>
        <g transform="rotate(20)">
          <ellipse cx="0" cy="-6" rx="24" ry="8" fill="url(#md-steel)" stroke="#6d7680" />
          {Array.from({ length: 12 }, (_, i) => <circle key={i} cx={-16 + (i % 6) * 6.4} cy={-7 + (i > 5 ? 3 : -1)} r="0.9" fill="#555" />)}
        </g>
      </P>
      <P i={2}>
        <g className="mat-shower" stroke="#6fb7ea" strokeWidth="1" strokeLinecap="round" opacity="0.8">
          {Array.from({ length: 9 }, (_, i) => <path key={i} d={`M${-20 + i * 5} 6l${-4 + i} 44`} strokeDasharray="4 6" />)}
        </g>
      </P>
    </g>
  ),
  washers: () => {
    const rand = rng(44)
    return (
      <g>
        {Array.from({ length: 8 }, (_, i) => {
          const x = (rand() - 0.5) * 90
          const y = (rand() - 0.5) * 60
          return (
            <P key={i} i={i}>
              <g transform={`translate(${r1(x)} ${r1(y)}) rotate(${Math.floor(rand() * 60)})`}>
                {i % 2 ? (
                  <>
                    <polygon points="-8,0 -4,-7 4,-7 8,0 4,7 -4,7" fill="#aab2ba" stroke="#5c646b" strokeWidth="0.6" />
                    <circle r="3.4" fill="#4f565c" />
                  </>
                ) : (
                  <>
                    <circle r="8" fill="#c9a24a" stroke="#8e6f28" strokeWidth="0.6" />
                    <circle r="3.6" fill="#3a3a3a" />
                  </>
                )}
              </g>
            </P>
          )
        })}
      </g>
    )
  },
  copperCoil: () => {
    let d = 'M-50 30'
    for (let k = 0; k <= 60; k++) {
      const a = k * 0.42
      d += `L${r1(-40 + k * 1.2 + Math.cos(a) * 16)} ${r1(10 + Math.sin(a) * 22 - k * 0.5)}`
    }
    return (
      <P i={0}>
        <Tube d={d} w={5} c="#c77a45" light={0.55} />
      </P>
    )
  },
}

/* Gradientes compartidos (un solo <svg> oculto por página) */
export function MaterialDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="md-steel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#eef1f4" />
          <stop offset="0.45" stopColor="#a9b1b9" />
          <stop offset="0.6" stopColor="#d7dce1" />
          <stop offset="1" stopColor="#7d868f" />
        </linearGradient>
        <linearGradient id="md-sheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0.25" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.15" />
        </linearGradient>
        <radialGradient id="md-water" cx="0.35" cy="0.4">
          <stop offset="0" stopColor="#e6f6ff" />
          <stop offset="0.5" stopColor="#6fc3f2" />
          <stop offset="1" stopColor="#1f78c2" />
        </radialGradient>
      </defs>
    </svg>
  )
}

/* Un material distinto por tarjeta en cada oficio (16 = 6+4+3+3). */
export const MATERIAL_SETS = {
  masons: ['bricks', 'cinderBlocks', 'trowel', 'flagstone', 'rebar', 'hydraulicTiles', 'brickWall', 'level', 'marble', 'bucket', 'stoneBlocks', 'pavers', 'masonHammer', 'steelProfile', 'gravel', 'tapeMeasure'],
  carpenters: ['planks', 'handSaw', 'swatchFan', 'plane', 'logRounds', 'chisels', 'hammerNails', 'square', 'plywood', 'dovetail', 'clamp', 'tapeMeasure', 'shavings', 'dowels', 'screws', 'level'],
  plumbers: ['copperPipes', 'pipeWrench', 'valve', 'faucet', 'pvcPipes', 'gauge', 'pTrap', 'elbows', 'flexHose', 'showerhead', 'subwayTiles', 'teflon', 'drops', 'washers', 'copperCoil', 'level'],
}
const OFFSETS = { services: 0, features: 6, testimonials: 10, gallery: 13 }
// acento pequeño en la esquina opuesta: otro material del mismo oficio
const ACCENT_SHIFT = 7

function materialAt(set, section, i, shift = 0) {
  const list = MATERIAL_SETS[set] || MATERIAL_SETS.masons
  return list[(OFFSETS[section] + i + shift) % list.length]
}

function useBuilt() {
  const ref = useRef(null)
  const [built, setBuilt] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined' || prefersReducedMotion()) {
      setBuilt(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setBuilt(true)
          io.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, built]
}

const GLOW = ['#9dff6e', '#c78bff']

/** Material para una tarjeta. `set`: oficio. `section`/`index`: posición. */
export function MaterialDecor({ set, section, index = 0, side = 'right' }) {
  const [ref, built] = useBuilt()
  const main = materialAt(set, section, index)
  const accent = materialAt(set, section, index, ACCENT_SHIFT)
  const glow = GLOW[(OFFSETS[section] + index) % 2]
  return (
    <span ref={ref} className={`demo-mat demo-mat--${side}${built ? ' is-built' : ''}`} aria-hidden="true" data-material={main}>
      <svg className="demo-mat-main" viewBox="-80 -70 160 160" width="208" height="208">
        <path className="mat-glow" d="M-150 -6C-90 -12 -20 -16 -2 8S8 80 -4 150" stroke={glow} style={{ color: glow }} pathLength="1" />
        <g transform="scale(0.9)">{M[main]?.()}</g>
      </svg>
      <svg className="demo-mat-accent" viewBox="-60 -60 120 120" width="112" height="112">
        <g transform="scale(0.62)">{M[accent]?.()}</g>
      </svg>
    </span>
  )
}

/* ------------------------------------------------------------------ */
/* Contorno de página                                                   */
/* ------------------------------------------------------------------ */

function BrickPillar({ seed, stone }) {
  const rand = rng(seed)
  const out = []
  let k = 0
  for (let r = 0; r < 78; r++) {
    const y = -6 + r * 13
    let x = r % 2 ? -14 : -2
    const end = 44 + rand() * 34
    while (x < end) {
      const w = stone ? 22 + rand() * 16 : 26
      const c = stone ? ['#b9b1a3', '#a39c90', '#cfc2a8', '#8f8a82'][Math.floor(rand() * 4)] : BRICK[Math.floor(rand() * BRICK.length)]
      out.push(<rect key={k++} x={r1(x)} y={y} width={r1(Math.min(w, end - x + 6) - 2)} height="11" rx={stone ? 2.5 : 0.8} fill={c} />)
      x += w
    }
  }
  return (
    <g className="mat-frame-piece">
      <rect x="-20" y="-10" width="70" height="1020" fill={stone ? '#7c776e' : '#cfc6b8'} opacity="0.9" />
      {out}
    </g>
  )
}

function PlankColumn({ seed }) {
  const rand = rng(seed)
  return (
    <g className="mat-frame-piece">
      {[0, 1].map((i) => {
        const c = WOOD[i === 0 ? 1 : 3]
        return (
          <g key={i}>
            <rect x={i * 30} y="-10" width="28" height="1020" fill={c} />
            <rect x={i * 30 + 24} y="-10" width="4" height="1020" fill={shade(c, -0.3)} />
            {Array.from({ length: 30 }, (_, k) => (
              <path key={k} d={`M${i * 30 + 3 + rand() * 20} ${k * 34}c${rand() * 4 - 2} 12 ${rand() * 4 - 2} 20 0 30`} stroke={shade(c, -0.45)} strokeWidth="0.6" fill="none" opacity="0.6" />
            ))}
            {[120, 480, 840].map((y) => <circle key={y} cx={i * 30 + 14} cy={y} r="2" fill="#555" />)}
          </g>
        )
      })}
    </g>
  )
}

function PipeColumn() {
  return (
    <g className="mat-frame-piece">
      <Tube d="M18 -20L18 1020" w={14} c="#c77a45" light={0.55} cap="butt" />
      <Tube d="M46 -20L46 1020" w={18} c="#e9ecef" light={0.8} cap="butt" />
      {Array.from({ length: 8 }, (_, k) => (
        <g key={k}>
          <rect x="9" y={60 + k * 130} width="18" height="10" rx="2" fill="#b0763a" />
          <rect x="35" y={120 + k * 130} width="22" height="10" rx="2" fill="#dfe3e7" stroke="#aab2ba" />
          <rect x="2" y={100 + k * 130} width="60" height="4" rx="2" fill="#6d7680" />
        </g>
      ))}
    </g>
  )
}

const FRAME = {
  masons: {
    left: () => (
      <>
        <BrickPillar seed={3} />
        <g transform="translate(40 60) scale(0.9)" className="mat-frame-piece">{M.rebar()}</g>
        <g transform="translate(70 470) scale(0.8)" className="mat-frame-piece">{M.trowel()}</g>
        <g transform="translate(60 880) rotate(-70) scale(0.9)" className="mat-frame-piece">{M.level()}</g>
      </>
    ),
    right: () => (
      <>
        <BrickPillar seed={9} stone />
        <g transform="translate(60 250) scale(0.75)" className="mat-frame-piece">{M.cinderBlocks()}</g>
        <g transform="translate(60 640) scale(0.7)" className="mat-frame-piece">{M.bucket()}</g>
        <g transform="translate(55 940) scale(0.8)" className="mat-frame-piece">{M.bricks()}</g>
      </>
    ),
  },
  carpenters: {
    left: () => (
      <>
        <PlankColumn seed={5} />
        <g transform="translate(60 230) scale(0.7)" className="mat-frame-piece">{M.swatchFan()}</g>
        <g transform="translate(64 560) scale(0.8)" className="mat-frame-piece">{M.square()}</g>
        <g transform="translate(58 900) scale(0.8)" className="mat-frame-piece">{M.logRounds()}</g>
      </>
    ),
    right: () => (
      <>
        <PlankColumn seed={11} />
        <g transform="translate(66 170) rotate(70) scale(0.8)" className="mat-frame-piece">{M.handSaw()}</g>
        <g transform="translate(66 520) scale(0.7)" className="mat-frame-piece">{M.tapeMeasure()}</g>
        <g transform="translate(64 860) scale(0.8)" className="mat-frame-piece">{M.shavings()}</g>
      </>
    ),
  },
  plumbers: {
    left: () => (
      <>
        <PipeColumn />
        <g transform="translate(40 300) scale(0.7)" className="mat-frame-piece">{M.valve()}</g>
        <g transform="translate(66 600) scale(0.75)" className="mat-frame-piece">{M.gauge()}</g>
        <g transform="translate(70 900) scale(0.7)" className="mat-frame-piece">{M.drops()}</g>
      </>
    ),
    right: () => (
      <>
        <PipeColumn />
        <g transform="translate(66 200) scale(0.75)" className="mat-frame-piece">{M.faucet()}</g>
        <g transform="translate(60 540) scale(0.7)" className="mat-frame-piece">{M.pipeWrench()}</g>
        <g transform="translate(66 880) scale(0.7)" className="mat-frame-piece">{M.flexHose()}</g>
      </>
    ),
  },
}

/** Contorno fijo de página con materiales del oficio. */
export function MaterialFrame({ set }) {
  const [ref, built] = useBuilt()
  const f = FRAME[set] || FRAME.masons
  const col = (cls, content) => (
    <svg className={`demo-mat-frame ${cls}`} viewBox="0 0 170 1000" preserveAspectRatio="xMinYMin slice">
      {content}
    </svg>
  )
  return (
    <>
      <MaterialDefs />
      <div ref={ref} className={`demo-mat-frame-wrap${built ? ' is-built' : ''}`} aria-hidden="true">
        {col('demo-mat-frame--left', f.left())}
        {col('demo-mat-frame--right', f.right())}
      </div>
    </>
  )
}
