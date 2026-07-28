import { useEffect, useRef, useState } from 'react'

/**
 * Envoltorio de entrada con scroll-reveal.
 * - Por defecto observa su propia posición y se marca "is-visible" al entrar
 *   al viewport (una sola vez, no se re-oculta al salir).
 * - `immediate` activa el estado visible al montar, para contenido above-the-fold
 *   (como el hero) donde no tiene sentido esperar el scroll.
 * - Los hijos directos reciben un stagger vía CSS (nth-child) — ver .reveal en styles.css.
 * - prefers-reduced-motion ya está cubierto globalmente (styles.css anula
 *   todas las transitions/animations), así que aquí no hace falta lógica extra.
 */
export default function Reveal({ children, as: Tag = 'div', className = '', immediate = false, ...rest }) {
  const ref = useRef(null)
  // Arranca siempre oculto: si "immediate" partiera ya visible, no habría
  // frame previo desde el cual hacer la transición y no se vería animación.
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (immediate) {
      // Deja pintar el frame oculto y recién en el siguiente tick revela,
      // para que la transición de opacity/transform sí se dispare.
      const id = requestAnimationFrame(() => setVisible(true))
      return () => cancelAnimationFrame(id)
    }
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [immediate])

  const cls = `reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`

  return (
    <Tag ref={ref} className={cls} {...rest}>
      {children}
    </Tag>
  )
}
