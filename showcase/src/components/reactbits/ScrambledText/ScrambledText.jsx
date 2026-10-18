// ScrambledText (React Bits, motor gsap puro — sin ScrambleTextPlugin
// premium). Al entrar en viewport o al hover, "revuelve" las letras hasta
// aterrizar en el texto final. Usado en subtítulos (eyebrows) de Idiomas.
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const CHARS = '!<>-_\\/[]{}—=+*^?#________'

export default function ScrambledText({ text, as: Tag = 'span', duration = 1.2, delay = 0, className = '', trigger = 'inView' }) {
  const ref = useRef(null)
  const playedRef = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node || !text) return

    const run = () => {
      if (playedRef.current && trigger !== 'hover') return
      playedRef.current = true
      const steps = Math.max(10, Math.floor(duration * 30))
      const final = text
      let step = 0
      const tick = () => {
        const progress = step / steps
        let out = ''
        for (let i = 0; i < final.length; i++) {
          const reveal = Math.floor(progress * final.length)
          if (i < reveal) out += final[i]
          else if (final[i] === ' ') out += ' '
          else out += CHARS[Math.floor(Math.random() * CHARS.length)]
        }
        node.textContent = out
        if (step < steps) {
          step++
          gsap.delayedCall(duration / steps, tick)
        } else {
          node.textContent = final
        }
      }
      gsap.delayedCall(delay, tick)
    }

    node.textContent = text
    if (trigger === 'hover') {
      node.addEventListener('mouseenter', run)
      return () => node.removeEventListener('mouseenter', run)
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && run()),
      { threshold: 0.3 }
    )
    io.observe(node)
    return () => io.disconnect()
  }, [text, duration, delay, trigger])

  return <Tag ref={ref} className={className}>{text}</Tag>
}
