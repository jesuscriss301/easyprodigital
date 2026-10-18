// GlareHover (React Bits, sin deps) — un brillo diagonal cruza la tarjeta
// al pasar el cursor, como luz sobre carrocería. Envuelve TiltedCard en la
// flota de Renta de Coches.
import './GlareHover.css'

export default function GlareHover({ children, className = '' }) {
  return (
    <div className={`rb-glarehover ${className}`}>
      {children}
      <span className="rb-glarehover__sheen" aria-hidden="true" />
    </div>
  )
}
