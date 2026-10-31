import { useLanguage } from '../i18n.jsx'

const DEFAULT_WHATSAPP = 'https://wa.me/573238816434'

/**
 * Pastilla flotante fija abajo, SOLO en móvil (ver .demo-sticky-cta en
 * styles.css) — la mayoría de los visitantes no llega hasta el aviso del
 * final, así que este botón va apareciendo desde el principio (Parte 1.4
 * del doc de estrategias). En escritorio no se muestra: el Badge ya ocupa
 * esa esquina y el aviso de "quiero esto" está a la vista antes.
 */
export default function StickyCta({ niche, whatsappMessage }) {
  const { t } = useLanguage()
  const message = whatsappMessage || t.disclosure.defaultWhatsapp(niche)
  const href = `${DEFAULT_WHATSAPP}?text=${encodeURIComponent(message)}`

  return (
    <a href={href} className="demo-sticky-cta" target="_blank" rel="noopener noreferrer">
      <span className="demo-sticky-cta-icon" aria-hidden="true">💬</span>
      <span>
        {t.stickyCta.label} <strong>{t.stickyCta.sub}</strong>
      </span>
    </a>
  )
}
