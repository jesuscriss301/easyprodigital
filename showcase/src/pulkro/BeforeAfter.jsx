import { useState } from 'react'

// Comparador antes/después sin dependencias. La foto "después" va de base y
// la "antes" encima, recortada con clip-path según la posición del divisor.
// El control real es un <input type="range"> transparente que cubre toda la
// foto: así funciona con mouse, dedo y teclado (flechas) sin listeners
// propios, y los lectores de pantalla lo anuncian como un deslizador.
export default function BeforeAfter({ pair }) {
  const [pos, setPos] = useState(50)
  return (
    <div className="pk-ba" style={{ aspectRatio: `${pair.w} / ${pair.h}`, '--pos': `${pos}%` }}>
      <img className="pk-ba-img" src={pair.after} width={pair.w} height={pair.h}
        alt={`${pair.label} después del lavado en Pulkro Express`} loading="lazy" decoding="async" />
      <img className="pk-ba-img pk-ba-before" src={pair.before} width={pair.w} height={pair.h}
        alt={`${pair.label} antes del lavado`} loading="lazy" decoding="async" />
      <span className="pk-ba-tag pk-ba-tag--before" aria-hidden="true">Antes</span>
      <span className="pk-ba-tag pk-ba-tag--after" aria-hidden="true">Después</span>
      <span className="pk-ba-handle" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
        </svg>
      </span>
      <input
        className="pk-ba-range"
        type="range" min="0" max="100" step="1" value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`Comparar antes y después: ${pair.label}`}
        aria-valuetext={`${pos}% antes`}
      />
    </div>
  )
}
