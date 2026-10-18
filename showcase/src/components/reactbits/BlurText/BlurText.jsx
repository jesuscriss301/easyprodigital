// BlurText (React Bits, motor motion) — las palabras del párrafo entran
// con fade + desenfoque de 10px → 0px por palabra, con un pequeño stagger.
import { motion } from 'motion/react'

export default function BlurText({ text, as: Tag = 'p', delay = 0, stagger = 0.04, className = '' }) {
  if (!text) return null
  const words = text.split(/(\s+)/)
  return (
    <Tag className={className} aria-label={text}>
      {words.map((w, i) => (
        /^\s+$/.test(w)
          ? <span key={i}>{w}</span>
          : <motion.span
              key={i}
              style={{ display: 'inline-block' }}
              initial={{ opacity: 0, filter: 'blur(10px)', y: 8 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: delay + i * stagger, ease: [0.22, 1, 0.36, 1] }}
            >
              {w}
            </motion.span>
      ))}
    </Tag>
  )
}
