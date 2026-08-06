import { useEffect, useRef, useState } from 'react'

/** Envuelve cualquier bloque y lo revela suavemente al entrar en viewport. */
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.unobserve(el)
        }
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`demo-reveal${visible ? ' is-visible' : ''}${className ? ' ' + className : ''}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
