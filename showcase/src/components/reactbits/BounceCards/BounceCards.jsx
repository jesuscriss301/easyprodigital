// BounceCards (React Bits, motor gsap) — tarjetas en abanico que entran
// con rebote al aparecer en viewport. Usado en veterinaria para la sección
// "nuestros pacientes" (fotos de mascotas).
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './BounceCards.css'

export default function BounceCards({ items = [], transforms = null, containerWidth = 520, containerHeight = 300 }) {
  const rootRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const cards = root.querySelectorAll('.rb-bouncecards__card')
    const defaultTransforms = [
      'rotate(-14deg) translate(-170px, 10px)',
      'rotate(-6deg)  translate(-80px, -10px)',
      'rotate(0deg)   translate(0, 0)',
      'rotate(6deg)   translate(80px, -10px)',
      'rotate(14deg)  translate(170px, 10px)',
    ]
    const tx = transforms && transforms.length ? transforms : defaultTransforms

    cards.forEach((c, i) => {
      c.style.transform = 'scale(0.4) translateY(60px)'
      c.style.opacity = '0'
    })

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return
        cards.forEach((c, i) => {
          gsap.to(c, {
            opacity: 1,
            scale: 1,
            x: 0, y: 0,
            duration: 0.9,
            delay: i * 0.08,
            ease: 'elastic.out(1, 0.55)',
            onStart: () => { c.style.transform = tx[i % tx.length] },
          })
          // Fuerza el transform final via setProperty después del tween
          gsap.set(c, { clearProps: 'transform', delay: i * 0.08 + 0.9 })
          gsap.delayedCall(i * 0.08 + 0.9, () => { c.style.transform = tx[i % tx.length] })
        })
        io.disconnect()
      })
    }, { threshold: 0.25 })
    io.observe(root)
    return () => io.disconnect()
  }, [transforms])

  return (
    <div
      ref={rootRef}
      className="rb-bouncecards"
      style={{ width: containerWidth, height: containerHeight }}
    >
      {items.map((item, i) => (
        <div key={i} className="rb-bouncecards__card">
          <img src={item.image} alt={item.alt || `pet-${i}`} loading="lazy" />
          {item.name && <span className="rb-bouncecards__name">{item.name}</span>}
        </div>
      ))}
    </div>
  )
}
