// Burbujas de jabón que suben por el fondo del hero. Solo CSS (sin canvas ni
// librerías), para que vaya fluido en el celular del cliente. Posiciones y
// tamaños salen de un generador con semilla fija: el mismo dibujo en cada
// render. El movimiento vive en pulkro.css y se apaga con
// prefers-reduced-motion (las burbujas quedan quietas, como decoración).

function seeded(seed) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

const rand = seeded(20261128)
const BUBBLES = Array.from({ length: 16 }, (_, i) => {
  const size = Math.round(14 + rand() * 62)
  return {
    key: i,
    left: `${Math.round(rand() * 96)}%`,
    size,
    duration: `${(11 + rand() * 12).toFixed(1)}s`,
    delay: `${(-rand() * 20).toFixed(1)}s`,
    drift: `${Math.round(-30 + rand() * 60)}px`,
  }
})

export default function Bubbles() {
  return (
    <div className="pk-bubbles" aria-hidden="true">
      {BUBBLES.map((b) => (
        <span
          key={b.key}
          className="pk-bubble"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            animationDuration: b.duration,
            animationDelay: b.delay,
            '--drift': b.drift,
          }}
        />
      ))}
    </div>
  )
}
