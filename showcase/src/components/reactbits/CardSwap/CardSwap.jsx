// CardSwap (React Bits, motor motion) — stack de tarjetas 3D que rotan en
// bucle. Usado en el hero de Agencia de Idiomas (saludos + país).
import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import './CardSwap.css'

/**
 * @param {Array<{greeting:string, language:string, image:string, alt?:string}>} items
 * @param {number} interval  ms entre swaps (default 3000)
 */
export default function CardSwap({ items = [], interval = 3000 }) {
  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => {
    if (!items.length) return
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % items.length)
    }, interval)
    return () => clearInterval(timerRef.current)
  }, [items.length, interval])

  if (!items.length) return null

  return (
    <div className="rb-cardswap" aria-live="polite">
      {items.map((item, i) => {
        // Posición relativa en el stack: 0 = activo (frente), 1 = segundo…
        const offset = (i - index + items.length) % items.length
        const z = items.length - offset
        return (
          <motion.div
            key={item.language}
            className="rb-cardswap__card"
            style={{ zIndex: z }}
            animate={{
              x: offset * 18,
              y: offset * -14,
              rotate: offset * -4,
              scale: 1 - offset * 0.05,
              opacity: offset > 2 ? 0 : 1 - offset * 0.15,
            }}
            transition={{ type: 'spring', stiffness: 90, damping: 18 }}
          >
            <div className="rb-cardswap__caption">
              <span className="rb-cardswap__greeting">{item.greeting}</span>
              <span className="rb-cardswap__lang">{item.language}</span>
            </div>
            <img src={item.image} alt={item.alt || `${item.language} — ${item.greeting}`} loading={i === 0 ? 'eager' : 'lazy'} />
          </motion.div>
        )
      })}
    </div>
  )
}
