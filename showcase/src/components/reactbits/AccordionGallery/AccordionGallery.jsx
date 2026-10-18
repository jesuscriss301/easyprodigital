// AccordionGallery (React Bits, motor gsap) — franjas verticales que se
// expanden al hover/focus, cada una revelando una foto + etiqueta. Usado
// en Self Storage para mostrar los tamaños de unidad disponibles.
import { useRef } from 'react'
import gsap from 'gsap'
import './AccordionGallery.css'

export default function AccordionGallery({ items = [] }) {
  const rootRef = useRef(null)

  const handleEnter = (el) => {
    const root = rootRef.current
    if (!root) return
    const panels = root.querySelectorAll('.rb-accordiongallery__panel')
    panels.forEach((p) => {
      gsap.to(p, { flexGrow: p === el ? 3 : 1, duration: 0.55, ease: 'power3.out' })
    })
  }
  const handleLeaveAll = () => {
    const root = rootRef.current
    if (!root) return
    const panels = root.querySelectorAll('.rb-accordiongallery__panel')
    panels.forEach((p) => gsap.to(p, { flexGrow: 1, duration: 0.5, ease: 'power3.out' }))
  }

  if (!items.length) return null

  return (
    <div ref={rootRef} className="rb-accordiongallery" onMouseLeave={handleLeaveAll}>
      {items.map((item, i) => (
        <div
          key={i}
          className="rb-accordiongallery__panel"
          onMouseEnter={(e) => handleEnter(e.currentTarget)}
          onFocus={(e) => handleEnter(e.currentTarget)}
          tabIndex={0}
          role="group"
          aria-label={item.title}
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="rb-accordiongallery__scrim" />
          <div className="rb-accordiongallery__label">
            <strong>{item.title}</strong>
            {item.subtitle && <span>{item.subtitle}</span>}
          </div>
        </div>
      ))}
    </div>
  )
}
