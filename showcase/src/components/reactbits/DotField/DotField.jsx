// DotField (React Bits, sin deps) — grid de puntos sutil que reacciona
// con una leve "iluminación" alrededor del cursor. Fondo de hero para
// Agencia de Idiomas.
import { useEffect, useRef } from 'react'
import './DotField.css'

export default function DotField({ color = 'currentColor', gap = 28, radius = 1.4, mouseRadius = 110, opacity = 0.35 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2)
    const mouse = { x: -9999, y: -9999 }

    const resize = () => {
      const r = canvas.getBoundingClientRect()
      w = r.width; h = r.height
      canvas.width = w * dpr; canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const resolveColor = () => {
      if (color !== 'currentColor') return color
      const c = getComputedStyle(canvas).color
      return c || '#000'
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const col = resolveColor()
      for (let y = gap; y < h; y += gap) {
        for (let x = gap; x < w; x += gap) {
          const dx = x - mouse.x, dy = y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const boost = dist < mouseRadius ? 1 - dist / mouseRadius : 0
          ctx.globalAlpha = opacity + boost * 0.6
          ctx.beginPath()
          ctx.arc(x, y, radius + boost * 1.6, 0, Math.PI * 2)
          ctx.fillStyle = col
          ctx.fill()
        }
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }

    let raf = 0
    resize()
    draw()

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
    }
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999 }
    window.addEventListener('resize', resize)
    canvas.addEventListener('mousemove', onMove)
    canvas.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMove)
      canvas.removeEventListener('mouseleave', onLeave)
    }
  }, [color, gap, radius, mouseRadius, opacity])

  return <canvas ref={canvasRef} className="rb-dotfield" aria-hidden="true" />
}
