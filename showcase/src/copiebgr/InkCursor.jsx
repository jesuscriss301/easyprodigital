import { useEffect, useRef } from 'react'

// Cursor con rastro de tinta — canvas 2D, NO WebGL. La página ya tiene su
// único lienzo WebGL en el hero (LiquidChrome), y el presupuesto del showcase
// es un solo canvas WebGL visible a la vez; un rastro 2D convive sin costo de
// GPU. Deja gotas de color que van rotando por el ciclo CMYK y se desvanecen,
// como tinta fresca. Se apaga en táctil y con movimiento reducido.
export default function InkCursor({ colors = ['#00aeef', '#ec008c', '#fff200', '#01a748'] }) {
  const ref = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return

    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2)
    const resize = () => {
      w = window.innerWidth; h = window.innerHeight
      canvas.width = w * dpr; canvas.height = h * dpr
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const drops = []
    let ci = 0
    let last = { x: w / 2, y: h / 2, t: 0 }

    const onMove = (e) => {
      const now = performance.now()
      const dx = e.clientX - last.x, dy = e.clientY - last.y
      const dist = Math.hypot(dx, dy)
      // más rápido el cursor, gotas más grandes y frecuentes
      if (dist > 6 || now - last.t > 60) {
        const speed = Math.min(dist, 40)
        drops.push({
          x: e.clientX + (Math.random() - 0.5) * 6,
          y: e.clientY + (Math.random() - 0.5) * 6,
          r: 3 + speed * 0.22,
          life: 1,
          color: colors[ci % colors.length],
        })
        ci++
        last = { x: e.clientX, y: e.clientY, t: now }
        if (drops.length > 90) drops.splice(0, drops.length - 90)
      }
    }
    window.addEventListener('pointermove', onMove, { passive: true })

    let raf = 0
    let running = true
    const onVis = () => { running = !document.hidden; if (running) { last.t = performance.now(); raf = requestAnimationFrame(frame) } else cancelAnimationFrame(raf) }
    document.addEventListener('visibilitychange', onVis)

    function frame() {
      raf = requestAnimationFrame(frame)
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'lighter'
      for (let i = drops.length - 1; i >= 0; i--) {
        const d = drops[i]
        d.life -= 0.028
        if (d.life <= 0) { drops.splice(i, 1); continue }
        const r = d.r * (0.6 + d.life * 0.6)
        ctx.globalAlpha = d.life * 0.5
        const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, r)
        g.addColorStop(0, d.color)
        g.addColorStop(1, 'transparent')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(d.x, d.y, r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
      ctx.globalCompositeOperation = 'source-over'
    }
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [colors])

  return <canvas ref={ref} className="bgr-ink-cursor" aria-hidden="true" />
}
