import { useEffect, useRef, useState } from 'react'

/**
 * Entrada con scroll-reveal (igual que en easyprodigital.com).
 * Marca "is-visible" al entrar al viewport; los hijos directos entran con
 * un pequeño escalonado vía CSS (.reveal en base.css). prefers-reduced-motion
 * se respeta desde el CSS.
 */
export default function Reveal({ children, as: Tag = 'div', className = '', immediate = false, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (immediate) {
      const id = requestAnimationFrame(() => setVisible(true))
      return () => cancelAnimationFrame(id)
    }
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [immediate])

  const cls = `reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`
  return (
    <Tag ref={ref} className={cls} {...rest}>
      {children}
    </Tag>
  )
}
