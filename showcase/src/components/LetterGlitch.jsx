// Adaptado de React Bits (reactbits.dev/backgrounds/letter-glitch) — MIT.
// Cambios sobre el original:
//  - Guarda de prefers-reduced-motion: el original siempre corre un bucle
//    requestAnimationFrame infinito sin comprobar la preferencia del
//    usuario. Aquí, si el usuario prefiere menos movimiento, se dibuja una
//    única cuadrícula estática (sin animar) y nunca se arranca el rAF loop.
//  - `backgroundColor` de containerStyle pasó de '#000000' fijo a
//    'transparent', para que el fondo lo aporte la sección que lo envuelve
//    (usa el token --chrome-bg de la marca) en vez de un negro puro ajeno
//    a la paleta del sitio.
//  - Pausa por IntersectionObserver: el original sigue redibujando el
//    canvas para siempre aunque esté fuera de la pantalla. Aquí, si el
//    contenedor no es visible (el usuario hizo scroll más allá), se salta
//    el trabajo de ese frame en vez de gastar CPU en algo que no se ve —
//    esto fue justo lo que hacía sentir el sitio lento en local.
//  - `fontSize`/`charWidth`/`charHeight` pasaron de constantes fijas a
//    props opcionales, para poder usar una cuadrícula más gruesa (menos
//    celdas = menos costo) en usos grandes como el CTA de inicio, sin
//    tocar el uso pequeño (marco del avatar), que ya es barato de por sí.
//
// Portado tal cual (sin cambios funcionales) desde src/components/LetterGlitch.jsx
// del sitio principal (easyprodigital.com) para usarlo como fondo del CTA
// final de cada demo, con los colores del theme de esa demo en vez de la
// paleta fija de la marca.
import { useRef, useEffect } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const LetterGlitch = ({
  glitchColors = ['#2b4539', '#61dca3', '#61b3dc'],
  className = '',
  glitchSpeed = 50,
  centerVignette = false,
  outerVignette = true,
  smooth = true,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789',
  fontSize = 16,
  charWidth = 10,
  charHeight = 20,
}) => {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const letters = useRef([])
  const grid = useRef({ columns: 0, rows: 0 })
  const context = useRef(null)
  const lastGlitchTime = useRef(Date.now())
  const isVisible = useRef(true)

  const lettersAndSymbols = Array.from(characters)

  const getRandomChar = () => {
    return lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)]
  }

  const getRandomColor = () => {
    return glitchColors[Math.floor(Math.random() * glitchColors.length)]
  }

  const hexToRgb = (hex) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
    hex = hex.replace(shorthandRegex, (m, r, g, b) => {
      return r + r + g + g + b + b
    })

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null
  }

  const interpolateColor = (start, end, factor) => {
    const result = {
      r: Math.round(start.r + (end.r - start.r) * factor),
      g: Math.round(start.g + (end.g - start.g) * factor),
      b: Math.round(start.b + (end.b - start.b) * factor),
    }
    return `rgb(${result.r}, ${result.g}, ${result.b})`
  }

  const calculateGrid = (width, height) => {
    const columns = Math.ceil(width / charWidth)
    const rows = Math.ceil(height / charHeight)
    return { columns, rows }
  }

  const initializeLetters = (columns, rows) => {
    grid.current = { columns, rows }
    const totalLetters = columns * rows
    letters.current = Array.from({ length: totalLetters }, () => ({
      char: getRandomChar(),
      color: getRandomColor(),
      targetColor: getRandomColor(),
      colorProgress: 1,
    }))
  }

  const resizeCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const parent = canvas.parentElement
    if (!parent) return

    const dpr = window.devicePixelRatio || 1
    const rect = parent.getBoundingClientRect()

    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr

    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${rect.height}px`

    if (context.current) {
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const { columns, rows } = calculateGrid(rect.width, rect.height)
    initializeLetters(columns, rows)

    drawLetters()
  }

  const drawLetters = () => {
    if (!context.current || letters.current.length === 0) return
    const ctx = context.current
    const { width, height } = canvasRef.current.getBoundingClientRect()
    ctx.clearRect(0, 0, width, height)
    ctx.font = `${fontSize}px monospace`
    ctx.textBaseline = 'top'

    letters.current.forEach((letter, index) => {
      const x = (index % grid.current.columns) * charWidth
      const y = Math.floor(index / grid.current.columns) * charHeight
      ctx.fillStyle = letter.color
      ctx.fillText(letter.char, x, y)
    })
  }

  const updateLetters = () => {
    if (!letters.current || letters.current.length === 0) return

    const updateCount = Math.max(1, Math.floor(letters.current.length * 0.05))

    for (let i = 0; i < updateCount; i++) {
      const index = Math.floor(Math.random() * letters.current.length)
      if (!letters.current[index]) continue

      letters.current[index].char = getRandomChar()
      letters.current[index].targetColor = getRandomColor()

      if (!smooth) {
        letters.current[index].color = letters.current[index].targetColor
        letters.current[index].colorProgress = 1
      } else {
        letters.current[index].colorProgress = 0
      }
    }
  }

  const handleSmoothTransitions = () => {
    let needsRedraw = false
    letters.current.forEach((letter) => {
      if (letter.colorProgress < 1) {
        letter.colorProgress += 0.05
        if (letter.colorProgress > 1) letter.colorProgress = 1

        const startRgb = hexToRgb(letter.color)
        const endRgb = hexToRgb(letter.targetColor)
        if (startRgb && endRgb) {
          letter.color = interpolateColor(startRgb, endRgb, letter.colorProgress)
          needsRedraw = true
        }
      }
    })

    if (needsRedraw) {
      drawLetters()
    }
  }

  const animate = () => {
    // Fuera de pantalla: no actualizar ni redibujar, solo seguir "vivo" en
    // rAF (barato) para retomar de inmediato en cuanto vuelva a ser visible.
    if (isVisible.current) {
      const now = Date.now()
      if (now - lastGlitchTime.current >= glitchSpeed) {
        updateLetters()
        drawLetters()
        lastGlitchTime.current = now
      }

      if (smooth) {
        handleSmoothTransitions()
      }
    }

    animationRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    context.current = canvas.getContext('2d')
    resizeCanvas()

    // Reduced motion: draw one static grid and stop — never start the loop.
    const reduceMotion = prefersReducedMotion()
    if (!reduceMotion) {
      animate()
    }

    let resizeTimeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        if (animationRef.current) cancelAnimationFrame(animationRef.current)
        resizeCanvas()
        if (!reduceMotion) animate()
      }, 100)
    }

    window.addEventListener('resize', handleResize)

    // Pausa cuando el contenedor sale del viewport (scroll, tab en segundo
    // plano, etc.) — evita gastar CPU redibujando algo que nadie ve.
    let observer
    const container = canvas.parentElement
    if (container && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        ([entry]) => {
          isVisible.current = entry.isIntersecting
        },
        { threshold: 0 }
      )
      observer.observe(container)
    }

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', handleResize)
      observer?.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [glitchSpeed, smooth])

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    overflow: 'hidden',
  }

  const canvasStyle = {
    display: 'block',
    width: '100%',
    height: '100%',
  }

  const outerVignetteStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    background: 'radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%)',
  }

  const centerVignetteStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    background: 'radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)',
  }

  return (
    <div style={containerStyle} className={className} aria-hidden="true">
      <canvas ref={canvasRef} style={canvasStyle} />
      {outerVignette && <div style={outerVignetteStyle}></div>}
      {centerVignette && <div style={centerVignetteStyle}></div>}
    </div>
  )
}

export default LetterGlitch
