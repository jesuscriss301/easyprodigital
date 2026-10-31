import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n.jsx'

const DEFAULT_WHATSAPP = 'https://wa.me/573238816434'

/**
 * Card de notificacion flotante (reemplaza la vieja pastilla "StickyCta"
 * y la cinta animada que se probo antes). Aparece en todos los tamanos de
 * pantalla, con un pequeno delay para que no choque con el primer
 * render, y tiene dos acciones: "Contactar" (abre WhatsApp con el mensaje
 * prellenado del nicho) y un boton que solo cierra la tarjeta (el
 * visitante ya la vio / no quiere seguir viendola).
 */
export default function NoticeCard({ niche, whatsappMessage }) {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1400)
    return () => clearTimeout(timer)
  }, [])

  if (dismissed) return null

  const n = t.noticeCard
  const message = whatsappMessage || t.disclosure.defaultWhatsapp(niche)
  const href = `${DEFAULT_WHATSAPP}?text=${encodeURIComponent(message)}`

  return (
    <div
      className={`demo-notice-card${visible ? ' is-visible' : ''}`}
      role="dialog"
      aria-live="polite"
      aria-label={n.heading}
    >
      <p className="demo-notice-heading">{n.heading}</p>
      <p className="demo-notice-text">{n.text(niche)}</p>
      <div className="demo-notice-actions">
        <a href={href} className="demo-btn demo-btn-primary demo-btn-sm" target="_blank" rel="noopener noreferrer">
          {n.contact}
        </a>
        <button type="button" className="demo-btn demo-btn-outline demo-btn-sm" onClick={() => setDismissed(true)}>
          {n.review}
        </button>
      </div>
    </div>
  )
}
