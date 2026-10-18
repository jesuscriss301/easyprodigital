// TiltedCard (React Bits, motor motion) — la tarjeta se inclina en 3D
// siguiendo al cursor. Usado en la flota de Renta de Coches.
import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import './TiltedCard.css'

export default function TiltedCard({ children, maxTilt = 12, scaleOnHover = 1.03, className = '' }) {
  const ref = useRef(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(y, [0, 1], [maxTilt, -maxTilt]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [0, 1], [-maxTilt, maxTilt]), { stiffness: 200, damping: 20 })

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }
  const handleLeave = () => { x.set(0.5); y.set(0.5) }

  return (
    <motion.div
      ref={ref}
      className={`rb-tiltedcard ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ scale: scaleOnHover }}
      transition={{ scale: { type: 'spring', stiffness: 260, damping: 20 } }}
    >
      {children}
    </motion.div>
  )
}
