import { useEffect, useRef } from 'react'

// Pelotas de ping pong rebotando en el hero — canvas 2D simple, sin WebGL
// (el presupuesto de la página ya usa el cursor con paleta como único otro
// efecto, así que evitamos un segundo motor de animación pesado). Cada
// pelota tiene una física de rebote elemental (gravedad + restitución) y un
// pequeño brillo especular para que no se vean planas.

export default function BouncingBalls({ colors, count = 7 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf = 0
    let w = 0
    let h = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const rand = (a, b) => a + Math.random() * (b - a)
    const balls = Array.from({ length: count }, (_, i) => ({
      x: rand(0, w || 800),
      y: rand(-200, 0),
      r: rand(9, 16),
      vx: rand(-0.6, 0.6),
      vy: rand(0, 1),
      color: colors[i % colors.length],
      spin: rand(-0.02, 0.02),
      angle: rand(0, Math.PI * 2),
    }))

    const gravity = 0.16
    const restitution = 0.74

    function step() {
      ctx.clearRect(0, 0, w, h)
      for (const b of balls) {
        b.vy += gravity
        b.x += b.vx
        b.y += b.vy
        b.angle += b.spin

        if (b.x - b.r < 0) { b.x = b.r; b.vx *= -1 }
        if (b.x + b.r > w) { b.x = w - b.r; b.vx *= -1 }
        if (b.y + b.r > h) {
          b.y = h - b.r
          b.vy *= -restitution
          b.vx *= 0.98
          if (Math.abs(b.vy) < 0.6) b.vy = -rand(3, 6) // vuelve a rebotar, nunca se "duerme" del todo
        }

        ctx.save()
        ctx.translate(b.x, b.y)
        ctx.rotate(b.angle)
        const grad = ctx.createRadialGradient(-b.r * 0.35, -b.r * 0.35, b.r * 0.1, 0, 0, b.r)
        grad.addColorStop(0, 'rgba(255,255,255,0.9)')
        grad.addColorStop(0.25, b.color)
        grad.addColorStop(1, b.color)
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(0, 0, b.r, 0, Math.PI * 2)
        ctx.fill()
        // línea del "logo" de la pelota, simple guiño temático
        ctx.strokeStyle = 'rgba(0,0,0,0.12)'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(0, 0, b.r * 0.55, 0, Math.PI * 1.4)
        ctx.stroke()
        ctx.restore()
      }
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [colors, count])

  return <canvas ref={canvasRef} className="ppc-balls-canvas" aria-hidden="true" />
}
