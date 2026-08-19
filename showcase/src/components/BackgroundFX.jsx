// BackgroundFX — fondos animados opt-in por nicho, detrás del hero completo
// (no solo alrededor de la foto, como visualFrame). Un solo componente
// canvas reutilizable con 16 variantes, una por demo, cada una con su
// propio algoritmo de dibujo — no son la misma animación recoloreada.
//
// Sigue el mismo patrón de rendimiento que LetterGlitch.jsx (adaptación de
// React Bits ya existente en este proyecto):
//  - canvas dimensionado con devicePixelRatio, redibujado en resize.
//  - rAF loop pausado por IntersectionObserver cuando el hero sale de
//    pantalla (nadie ve el frame, no vale la pena calcularlo).
//  - prefers-reduced-motion: se dibuja un único frame estático y nunca se
//    arranca el loop.
//  - Cero dependencias nuevas: solo Canvas 2D, sin ogl/three/motion.
import { useRef, useEffect } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function hexToRgb(hex) {
  const short = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  const full = (hex || '#888888').replace(short, (m, r, g, b) => r + r + g + g + b + b)
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(full)
  return result
    ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
    : { r: 136, g: 136, b: 136 }
}
const rgba = (hex, a) => {
  const { r, g, b } = hexToRgb(hex)
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

// ---------------------------------------------------------------------
// Cada variante recibe (ctx, w, h, t, colors) y dibuja UN frame. `t` es
// segundos transcurridos (float). `colors` = [primary, accent, primaryDark].
// Los generadores de partículas se guardan en `stateRef` para no
// reinicializar en cada frame.
// ---------------------------------------------------------------------

function seedParticles(n, w, h, extra) {
  return Array.from({ length: n }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: 1.5 + Math.random() * 2.5,
    speed: 0.4 + Math.random() * 0.8,
    phase: Math.random() * Math.PI * 2,
    ...extra?.(),
  }))
}

const VARIANTS = {
  // Electricistas: cuadrícula tipo circuito + pulsos viajando por trazos en L.
  circuit(ctx, w, h, t, colors, state) {
    if (!state.paths) {
      const step = 64
      const paths = []
      for (let x = step; x < w; x += step) {
        paths.push({ type: 'v', x, y0: 0, y1: h })
      }
      for (let y = step; y < h; y += step) {
        paths.push({ type: 'h', y, x0: 0, x1: w })
      }
      state.paths = paths
      state.pulses = Array.from({ length: 6 }, () => ({
        path: paths[Math.floor(Math.random() * paths.length)] || paths[0],
        progress: Math.random(),
        speed: 0.15 + Math.random() * 0.15,
      }))
    }
    ctx.lineWidth = 1
    ctx.strokeStyle = rgba(colors[2], 0.14)
    state.paths.forEach((p) => {
      ctx.beginPath()
      if (p.type === 'v') { ctx.moveTo(p.x, p.y0); ctx.lineTo(p.x, p.y1) }
      else { ctx.moveTo(p.x0, p.y); ctx.lineTo(p.x1, p.y) }
      ctx.stroke()
    })
    state.pulses.forEach((pulse) => {
      pulse.progress += pulse.speed * 0.016
      if (pulse.progress > 1) { pulse.progress = 0; pulse.path = state.paths[Math.floor(Math.random() * state.paths.length)] }
      const p = pulse.path
      const x = p.type === 'v' ? p.x : p.x0 + (p.x1 - p.x0) * pulse.progress
      const y = p.type === 'v' ? p.y0 + (p.y1 - p.y0) * pulse.progress : p.y
      const grad = ctx.createRadialGradient(x, y, 0, x, y, 22)
      grad.addColorStop(0, rgba(colors[0], 0.9))
      grad.addColorStop(1, rgba(colors[0], 0))
      ctx.fillStyle = grad
      ctx.beginPath(); ctx.arc(x, y, 22, 0, Math.PI * 2); ctx.fill()
    })
  },

  // Car wash: burbujas subiendo con leve deriva lateral.
  bubbles(ctx, w, h, t, colors, state) {
    if (!state.items) {
      state.items = seedParticles(26, w, h, () => ({ r: 4 + Math.random() * 10, drift: Math.random() * 2 - 1 }))
    }
    state.items.forEach((b) => {
      b.y -= b.speed * 0.6
      b.x += Math.sin(t * 0.6 + b.phase) * 0.3
      if (b.y < -20) { b.y = h + 20; b.x = Math.random() * w }
      ctx.beginPath()
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)
      ctx.strokeStyle = rgba(colors[0], 0.35)
      ctx.lineWidth = 1.5
      ctx.stroke()
      ctx.fillStyle = rgba('#ffffff', 0.08)
      ctx.fill()
    })
  },

  // Plomeros: líneas de onda horizontales fluyendo (agua).
  waves(ctx, w, h, t, colors) {
    const lines = [
      { y: h * 0.3, amp: 18, len: 90, speed: 0.6, color: colors[0], a: 0.28 },
      { y: h * 0.55, amp: 26, len: 130, speed: 0.4, color: colors[1], a: 0.2 },
      { y: h * 0.8, amp: 14, len: 70, speed: 0.8, color: colors[2], a: 0.22 },
    ]
    lines.forEach((line) => {
      ctx.beginPath()
      for (let x = 0; x <= w; x += 8) {
        const y = line.y + Math.sin(x / line.len + t * line.speed) * line.amp
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      ctx.strokeStyle = rgba(line.color, line.a)
      ctx.lineWidth = 2
      ctx.stroke()
    })
  },

  // Mecánicos: haces de luz diagonales cruzando en momentos escalonados.
  beams(ctx, w, h, t, colors) {
    const count = 4
    for (let i = 0; i < count; i++) {
      const speed = 0.35
      const offset = i / count
      const progress = ((t * speed + offset) % 1)
      const x = -w * 0.3 + progress * w * 1.6
      const grad = ctx.createLinearGradient(x, 0, x + 140, h)
      grad.addColorStop(0, rgba(colors[i % 2], 0))
      grad.addColorStop(0.5, rgba(colors[i % 2], 0.16))
      grad.addColorStop(1, rgba(colors[i % 2], 0))
      ctx.save()
      ctx.transform(1, 0, -0.35, 1, 0, 0)
      ctx.fillStyle = grad
      ctx.fillRect(x, -50, 90, h + 100)
      ctx.restore()
    }
  },

  // Iglesias: rayos de luz suaves rotando muy lento desde arriba.
  rays(ctx, w, h, t, colors) {
    const cx = w / 2, cy = -h * 0.2
    const rayCount = 10
    ctx.save()
    ctx.translate(cx, cy)
    ctx.rotate(t * 0.02)
    for (let i = 0; i < rayCount; i++) {
      const angle = (Math.PI * 2 * i) / rayCount
      const grad = ctx.createLinearGradient(0, 0, Math.cos(angle) * h * 1.6, Math.sin(angle) * h * 1.6)
      grad.addColorStop(0, rgba(colors[1], 0.16))
      grad.addColorStop(1, rgba(colors[1], 0))
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.arc(0, 0, h * 1.8, angle - 0.05, angle + 0.05)
      ctx.closePath()
      ctx.fill()
    }
    ctx.restore()
  },

  // Chef privado: vapor — partículas suaves subiendo rápido y desvaneciendo.
  steam(ctx, w, h, t, colors, state) {
    if (!state.items) {
      state.items = seedParticles(16, w, h * 1.2, () => ({ r: 14 + Math.random() * 22, drift: Math.random() * 1.4 - 0.7 }))
    }
    state.items.forEach((p) => {
      p.y -= p.speed * 0.9
      p.x += Math.sin(t * 0.5 + p.phase) * p.drift
      if (p.y < -40) { p.y = h + 40; p.x = Math.random() * w }
      const lifeAlpha = 0.08
      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r)
      grad.addColorStop(0, rgba(colors[0], lifeAlpha))
      grad.addColorStop(1, rgba(colors[0], 0))
      ctx.fillStyle = grad
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill()
    })
  },

  // Carpinteros: textura de grano/veta de madera, muy sutil.
  grain(ctx, w, h, t, colors, state) {
    if (!state.lines) {
      state.lines = Array.from({ length: 22 }, (_, i) => ({
        y: (h / 22) * i + Math.random() * 10,
        amp: 6 + Math.random() * 10,
        len: 200 + Math.random() * 200,
        phase: Math.random() * Math.PI * 2,
      }))
    }
    state.lines.forEach((line) => {
      ctx.beginPath()
      for (let x = 0; x <= w; x += 12) {
        const y = line.y + Math.sin(x / line.len + line.phase + t * 0.05) * line.amp
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      ctx.strokeStyle = rgba(colors[2], 0.07)
      ctx.lineWidth = 1
      ctx.stroke()
    })
  },

  // Construcción: cuadrícula de plano/blueprint + línea de escaneo.
  blueprint(ctx, w, h, t, colors, state) {
    const step = 40
    ctx.strokeStyle = rgba(colors[0], 0.08)
    ctx.lineWidth = 1
    for (let x = 0; x < w; x += step) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke() }
    for (let y = 0; y < h; y += step) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke() }
    const scanY = ((t * 40) % (h + 80)) - 40
    const grad = ctx.createLinearGradient(0, scanY - 30, 0, scanY + 30)
    grad.addColorStop(0, rgba(colors[1], 0))
    grad.addColorStop(0.5, rgba(colors[1], 0.14))
    grad.addColorStop(1, rgba(colors[1], 0))
    ctx.fillStyle = grad
    ctx.fillRect(0, scanY - 30, w, 60)
  },

  // Youtuber: manchas de color estilo aurora moviéndose, energía de estudio.
  aurora(ctx, w, h, t, colors, state) {
    if (!state.blobs) {
      state.blobs = colors.map((c, i) => ({
        color: c,
        rx: w * (0.35 + i * 0.08),
        ry: h * (0.5 + i * 0.1),
        speed: 0.15 + i * 0.07,
        phase: i * 2.1,
      }))
    }
    ctx.globalCompositeOperation = 'lighter'
    state.blobs.forEach((b) => {
      const x = w / 2 + Math.cos(t * b.speed + b.phase) * w * 0.28
      const y = h / 2 + Math.sin(t * b.speed * 0.8 + b.phase) * h * 0.25
      const grad = ctx.createRadialGradient(x, y, 0, x, y, Math.max(b.rx, b.ry) * 0.5)
      grad.addColorStop(0, rgba(b.color, 0.22))
      grad.addColorStop(1, rgba(b.color, 0))
      ctx.fillStyle = grad
      ctx.beginPath(); ctx.ellipse(x, y, b.rx * 0.5, b.ry * 0.5, 0, 0, Math.PI * 2); ctx.fill()
    })
    ctx.globalCompositeOperation = 'source-over'
  },

  // Limpieza: puntos pequeños titilando — "brillo limpio".
  sparkle(ctx, w, h, t, colors, state) {
    if (!state.items) {
      state.items = seedParticles(40, w, h, () => ({ r: 1 + Math.random() * 1.6, blinkSpeed: 0.6 + Math.random() * 1.4 }))
    }
    state.items.forEach((s) => {
      const a = (Math.sin(t * s.blinkSpeed + s.phase) + 1) / 2
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      ctx.fillStyle = rgba('#ffffff', 0.15 + a * 0.55)
      ctx.fill()
    })
  },

  // Inmobiliaria: malla de gradiente suave y lenta, editorial/premium.
  mesh(ctx, w, h, t, colors, state) {
    if (!state.blobs) {
      state.blobs = colors.map((c, i) => ({ color: c, phase: i * 2.4, speed: 0.06 + i * 0.02 }))
    }
    state.blobs.forEach((b, i) => {
      const x = w * (0.25 + 0.5 * ((i + 1) / (state.blobs.length + 1))) + Math.cos(t * b.speed + b.phase) * w * 0.12
      const y = h * 0.5 + Math.sin(t * b.speed + b.phase) * h * 0.2
      const r = Math.max(w, h) * 0.4
      const grad = ctx.createRadialGradient(x, y, 0, x, y, r)
      grad.addColorStop(0, rgba(b.color, 0.1))
      grad.addColorStop(1, rgba(b.color, 0))
      ctx.fillStyle = grad
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill()
    })
  },

  // Salón de belleza: cintas/hilos curvos fluyendo, elegante.
  threads(ctx, w, h, t, colors) {
    const strands = 4
    for (let i = 0; i < strands; i++) {
      ctx.beginPath()
      const yBase = (h / (strands + 1)) * (i + 1)
      for (let x = 0; x <= w; x += 6) {
        const y = yBase + Math.sin(x / 140 + t * 0.35 + i * 1.3) * 30 + Math.sin(x / 55 + t * 0.6) * 8
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      ctx.strokeStyle = rgba(colors[i % colors.length], 0.16)
      ctx.lineWidth = 1.6
      ctx.stroke()
    }
  },

  // Jardineros: polen/hojas derivando en diagonal, orgánico.
  pollen(ctx, w, h, t, colors, state) {
    if (!state.items) {
      state.items = seedParticles(34, w, h, () => ({ r: 1.5 + Math.random() * 2, driftX: 0.3 + Math.random() * 0.5 }))
    }
    state.items.forEach((p) => {
      p.y += p.speed * 0.35
      p.x += p.driftX * 0.4 + Math.sin(t * 0.4 + p.phase) * 0.3
      if (p.y > h + 10) { p.y = -10; p.x = Math.random() * w }
      if (p.x > w + 10) p.x = -10
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = rgba(p === state.items[0] ? colors[1] : colors[0], 0.28)
      ctx.fill()
    })
  },

  // Albañiles: anillos concéntricos expandiéndose — capas de piedra.
  rings(ctx, w, h, t, colors, state) {
    const cx = w * 0.8, cy = h * 0.3
    const count = 4
    for (let i = 0; i < count; i++) {
      const progress = ((t * 0.18 + i / count) % 1)
      const r = progress * Math.max(w, h) * 0.7
      ctx.beginPath()
      ctx.arc(cx, cy, r, 0, Math.PI * 2)
      ctx.strokeStyle = rgba(colors[i % 2], 0.22 * (1 - progress))
      ctx.lineWidth = 2
      ctx.stroke()
    }
  },

  // Fundación: estrellas titilando — guía/esperanza.
  stars(ctx, w, h, t, colors, state) {
    if (!state.items) {
      state.items = seedParticles(50, w, h, () => ({ r: 0.8 + Math.random() * 1.4, blinkSpeed: 0.4 + Math.random() * 1.2 }))
    }
    state.items.forEach((s) => {
      const a = (Math.sin(t * s.blinkSpeed + s.phase) + 1) / 2
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      ctx.fillStyle = rgba(colors[1], 0.2 + a * 0.6)
      ctx.fill()
    })
  },

  // Adult creator: cuadrícula de puntos con una onda de pulso viajando.
  dotgrid(ctx, w, h, t, colors, state) {
    const step = 26
    if (!state.cols) {
      state.cols = Math.ceil(w / step)
      state.rows = Math.ceil(h / step)
    }
    for (let gy = 0; gy < state.rows; gy++) {
      for (let gx = 0; gx < state.cols; gx++) {
        const x = gx * step + step / 2
        const y = gy * step + step / 2
        const d = Math.hypot(gx - state.cols / 2, gy - state.rows / 2)
        const wave = Math.sin(d * 0.4 - t * 1.6)
        const scale = 0.6 + Math.max(0, wave) * 1.4
        const a = 0.08 + Math.max(0, wave) * 0.22
        ctx.beginPath()
        ctx.arc(x, y, 1.3 * scale, 0, Math.PI * 2)
        ctx.fillStyle = rgba(colors[0], a)
        ctx.fill()
      }
    }
  },
}

export default function BackgroundFX({ variant, colors = ['#888', '#aaa', '#555'], opacity = 0.55, className = '' }) {
  const canvasRef = useRef(null)
  const stateRef = useRef({})
  const rafRef = useRef(null)
  const isVisible = useRef(true)
  const ctxRef = useRef(null)
  const startRef = useRef(null)

  const drawFn = VARIANTS[variant]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !drawFn) return
    const ctx = canvas.getContext('2d')
    ctxRef.current = ctx
    stateRef.current = {}

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = parent.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      stateRef.current = {}
    }
    resize()

    const reduceMotion = prefersReducedMotion()

    const frame = (now) => {
      if (startRef.current == null) startRef.current = now
      if (isVisible.current) {
        const { width, height } = canvas.getBoundingClientRect()
        ctx.clearRect(0, 0, width, height)
        const t = (now - startRef.current) / 1000
        drawFn(ctx, width, height, t, colors, stateRef.current)
      }
      if (!reduceMotion) rafRef.current = requestAnimationFrame(frame)
    }

    if (reduceMotion) {
      // Un solo frame estático (t=0.4 para que no arranque en un estado
      // "vacío" de partículas recién sembradas en el origen).
      const { width, height } = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, width, height)
      drawFn(ctx, width, height, 0.4, colors, stateRef.current)
    } else {
      rafRef.current = requestAnimationFrame(frame)
    }

    let resizeTimeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(resize, 100)
    }
    window.addEventListener('resize', handleResize)

    let observer
    const container = canvas.parentElement
    if (container && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(([entry]) => { isVisible.current = entry.isIntersecting }, { threshold: 0 })
      observer.observe(container)
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', handleResize)
      observer?.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variant])

  if (!drawFn) return null

  return (
    <canvas
      ref={canvasRef}
      className={`demo-hero-bg${className ? ' ' + className : ''}`}
      style={{ opacity }}
      aria-hidden="true"
    />
  )
}
