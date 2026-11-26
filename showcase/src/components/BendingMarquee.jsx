// Cinta "esta es una web demo" que va debajo del nav en TODAS las demos.
// Implementación propia inspirada en el Bending Marquee de React Bits Pro
// (código no público): un tríptico en perspectiva — panel central plano y
// dos alas dobladas hacia atrás — por donde corre una sola franja de texto
// continua, con un separador ✳ que se balancea. Cada panel recorta la misma
// franja desplazada según su posición, así el texto "dobla" la esquina sin
// cortes. Sin dependencias: CSS + un ResizeObserver para medir el ancho.
import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n.jsx'
import './BendingMarquee.css'

const TEXT = {
  es: ['Esta es una web demo', 'Puedes tener la tuya', 'Conecta tu negocio y consigue clientes en internet'],
  en: ['This is a demo website', 'You can have yours', 'Connect your business and get customers online'],
  fr: ['Ceci est un site de démonstration', 'Vous pouvez avoir le vôtre', 'Connectez votre entreprise et trouvez des clients en ligne'],
}

// Proporción de cada panel sobre el ancho total: ala · centro · ala.
const WING = 0.2
const CENTER = 1 - WING * 2

function Strip({ items, separator, copies }) {
  // La franja se repite `copies` veces dentro de dos mitades idénticas: la
  // animación recorre exactamente una mitad (-50%) y el bucle no se nota.
  const half = Array.from({ length: copies }, () => items).flat()
  return (
    <div className="bm-track" aria-hidden="true">
      {[0, 1].map((h) => (
        <div className="bm-half" key={h}>
          {half.map((t, i) => (
            <span className="bm-item" key={i}>
              <span className="bm-text">{t}</span>
              <span className="bm-mark">{separator}</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}

export default function BendingMarquee({
  lang: langProp,
  items,
  href = '#want-this',
  separator = '✳',
  bend = 26, // grados que se doblan las alas
  speed = 38, // segundos por vuelta de la franja
}) {
  let ctxLang = 'es'
  try {
    ctxLang = useLanguage().lang
  } catch {
    // Páginas fuera del LanguageProvider: se usa langProp o español.
  }
  const lang = langProp || ctxLang
  const words = items || TEXT[lang] || TEXT.es

  const rootRef = useRef(null)
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const el = rootRef.current
    if (!el || typeof ResizeObserver === 'undefined') return
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const wing = width * WING
  const center = width * CENTER
  // En pantallas angostas las alas se doblan menos para que el texto se lea.
  const angle = width && width < 640 ? bend * 0.6 : bend
  const panels = [
    { key: 'l', w: wing, offset: 0, cls: 'bm-panel--left' },
    { key: 'c', w: center, offset: wing, cls: 'bm-panel--center' },
    { key: 'r', w: wing, offset: wing + center, cls: 'bm-panel--right' },
  ]

  return (
    <a
      ref={rootRef}
      className="bm-root"
      href={href}
      style={{ '--bm-bend': `${angle}deg`, '--bm-speed': `${speed}s` }}
      aria-label={words.join(' · ')}
    >
      {width > 0 &&
        panels.map((p) => (
          <div key={p.key} className={`bm-panel ${p.cls}`} style={{ width: p.w }}>
            <div className="bm-shift" style={{ transform: `translateX(${-p.offset}px)` }}>
              <Strip items={words} separator={separator} copies={3} />
            </div>
          </div>
        ))}
    </a>
  )
}
