import { useEffect, useRef } from 'react'

// Cursor con paleta de ping pong: un overlay fijo (pointer-events: none) que
// sigue el mouse con un pequeño retraso (lerp) y "golpea" al hacer click.
// Solo se monta si prefiere-movimiento y el dispositivo tiene un puntero
// fino (ver motionUtils / gate en la página) — nada de esto corre en touch.

export default function PaddleCursor({ color = '#eb5928' }) {
  const elRef = useRef(null)
  const pos = useRef({ x: -100, y: -100 })
  const target = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const el = elRef.current
    if (!el) return
    let raf = 0

    const onMove = (e) => { target.current.x = e.clientX; target.current.y = e.clientY }
    const onDown = () => el.classList.add('is-swinging')
    const onUp = () => el.classList.remove('is-swinging')

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    function tick() {
      pos.current.x += (target.current.x - pos.current.x) * 0.22
      pos.current.y += (target.current.y - pos.current.y) * 0.22
      el.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) rotate(-35deg)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  return (
    <div ref={elRef} className="ppc-paddle-cursor" aria-hidden="true">
      <svg width="34" height="46" viewBox="0 0 34 46" fill="none">
        <ellipse cx="17" cy="15" rx="14" ry="15" fill={color} stroke="#1a0f09" strokeWidth="1.5" />
        <ellipse cx="17" cy="15" rx="9" ry="10" fill="none" stroke="#1a0f09" strokeOpacity="0.25" strokeWidth="1" />
        <rect x="14" y="27" width="6" height="17" rx="3" fill="#3d2a20" stroke="#1a0f09" strokeWidth="1.5" />
      </svg>
    </div>
  )
}
