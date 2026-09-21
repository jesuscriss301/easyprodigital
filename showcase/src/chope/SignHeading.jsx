import { useEffect, useRef, useState } from 'react'

// Encabezado de sección montado sobre un tablón de madera colgado de dos
// cadenas. Reemplaza el par "eyebrow + h2" plano de las demás demos: es lo
// que más aporta el aire de taberna medieval de un solo golpe.
//
// El tablón y las cadenas son SVG; el texto va en HTML encima, así sigue
// siendo texto real (seleccionable, indexable y con la tipografía del tema)
// en vez de <text> dentro del SVG.

const NAILS = [
  [26, 28], [26, 112], [574, 28], [574, 112],
]

export default function SignHeading({ eyebrow, title, intro, id }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          io.unobserve(el)
        }
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div className={`chope-signhead${visible ? ' is-visible' : ''}`} ref={ref} id={id}>
      <div className="chope-sign">
        <svg className="chope-sign-art" viewBox="0 0 600 190" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="chope-plank" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="var(--chope-wood)" />
              <stop offset="1" stopColor="var(--chope-wood-dark)" />
            </linearGradient>
          </defs>

          {/* barra de hierro y cadenas */}
          <rect x="120" y="0" width="360" height="7" rx="3" fill="#3a332a" />
          {[150, 450].map((x) => (
            <g key={x}>
              {[0, 1, 2, 3].map((i) => (
                <ellipse key={i} cx={x} cy={14 + i * 13} rx="5.5" ry="8" fill="none" stroke="#4a4034" strokeWidth="2.6" />
              ))}
            </g>
          ))}

          {/* tablón, con el canto inferior irregular */}
          <path
            d="M14 60H586V150C520 160 470 152 404 158C338 164 286 152 220 157C154 162 104 154 14 150Z"
            fill="url(#chope-plank)"
          />
          {/* vetas */}
          {[78, 96, 116, 134].map((y, i) => (
            <path
              key={y}
              d={`M30 ${y}C170 ${y - 4 + i} 330 ${y + 5 - i} 570 ${y - 2}`}
              stroke="#000"
              strokeWidth="1.2"
              fill="none"
              opacity="0.13"
            />
          ))}
          {/* luz superior */}
          <path d="M14 60H586V70H14Z" fill="#fff" opacity="0.1" />
          {/* clavos */}
          {NAILS.map(([x, y]) => (
            <g key={`${x}-${y}`}>
              <circle cx={x} cy={y + 32} r="5" fill="#2a241c" />
              <circle cx={x - 1} cy={y + 31} r="2" fill="#6d6152" />
            </g>
          ))}
        </svg>

        <div className="chope-sign-text">
          {eyebrow && <span className="chope-sign-eyebrow">{eyebrow}</span>}
          <h2>{title}</h2>
        </div>
      </div>
      {intro && <p className="chope-sign-intro">{intro}</p>}
    </div>
  )
}
