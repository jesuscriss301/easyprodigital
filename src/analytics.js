// Eventos de conversión para Google Analytics (G-8FEQGGF2GG, cargado en
// index.html). Se escuchan a nivel de documento para cubrir todos los botones
// de WhatsApp, teléfono y formularios sin tocar cada componente.
//
//   whatsapp_click  — clic en cualquier enlace a wa.me
//   phone_click     — clic en cualquier enlace tel:
//   form_submit     — envío de cualquier formulario
//
// Cada evento lleva page_path, para ver en GA qué página trajo el contacto.
// En GA4: Administrar → Eventos → marcar estos tres como "eventos clave".

function send(name, params) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', name, { page_path: window.location.pathname, ...params })
}

export function initAnalytics() {
  if (typeof document === 'undefined') return

  document.addEventListener(
    'click',
    (e) => {
      const a = e.target.closest && e.target.closest('a[href]')
      if (!a) return
      const href = a.getAttribute('href') || ''
      if (/^https?:\/\/(api\.)?wa\.me\//i.test(href) || /whatsapp\.com\/send/i.test(href)) {
        send('whatsapp_click', { link_text: (a.textContent || '').trim().slice(0, 80) })
      } else if (href.startsWith('tel:')) {
        send('phone_click', {})
      }
    },
    { capture: true }
  )

  document.addEventListener(
    'submit',
    (e) => {
      const form = e.target
      send('form_submit', { form_id: form.id || form.getAttribute('name') || 'form' })
    },
    { capture: true }
  )
}
