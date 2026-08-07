import { useEffect, useRef, useState } from 'react'

// Ligero a propósito (sin dependencias): counts up a number when it scrolls
// into view. Es la tercera "familia" de animación en el proyecto además de
// SplitText (GSAP, texto) y LetterGlitch (canvas, fondo) — para las cifras
// de confianza (stats) queríamos algo numérico, no otro efecto de texto o
// de fondo, así se ve variedad real entre secciones en vez del mismo
// recurso reciclado en todos lados.
const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// easeOutCubic — arranca rápido y frena suave, más natural que lineal para
// un contador que "llega" a su valor final.
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

export default function CountUp({ end, duration = 1.4, decimals = 0, prefix = '', suffix = '' }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const startedRef = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof end !== 'number') return

    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      setValue(end)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return
        startedRef.current = true
        io.unobserve(el)

        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min(1, (now - start) / (duration * 1000))
          setValue(end * easeOutCubic(progress))
          if (progress < 1) requestAnimationFrame(tick)
          else setValue(end)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [end, duration])

  const display = value.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
