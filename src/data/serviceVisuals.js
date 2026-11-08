// ============================================================
//  Elementos visuales de las páginas de servicio:
//   - diagramas de pasos (flow)
//   - ejemplo "antes / después" de una ficha de Google (listing)
//  Son ilustraciones con un negocio inventado, no capturas reales.
// ============================================================

const LISTING = {
  en: {
    title: 'How your Google listing changes',
    description:
      'Illustration of a Google listing before and after: before, it has no photos, no reviews and missing hours and address; after, it shows photos, a 4.8 rating with 126 reviews, opening hours, address and Call, Directions, Website and WhatsApp buttons.',
    name: 'Your Example Business',
    category: 'Business category',
    beforeLabel: 'Before',
    afterLabel: 'After',
    before: { noPhotos: 'No photos', noReviews: 'No reviews yet', addHours: 'Add hours', addAddress: 'Add address' },
    after: {
      rating: '4.8',
      reviews: '126 reviews',
      open: 'Open · Closes 6:00 PM',
      address: '10 Main St, Medellín',
      actions: ['Call', 'Directions', 'Website', 'WhatsApp'],
    },
    caption: 'Illustrative example with a made-up business.',
  },
  es: {
    title: 'Así cambia tu ficha de Google',
    description:
      'Ilustración de una ficha de Google antes y después: antes no tiene fotos ni reseñas y le faltan el horario y la dirección; después muestra fotos, calificación 4,8 con 126 reseñas, horario, dirección y botones de Llamar, Cómo llegar, Sitio web y WhatsApp.',
    name: 'Tu Negocio Ejemplo',
    category: 'Categoría del negocio',
    beforeLabel: 'Antes',
    afterLabel: 'Después',
    before: { noPhotos: 'Sin fotos', noReviews: 'Sin reseñas todavía', addHours: 'Agregar horario', addAddress: 'Agregar dirección' },
    after: {
      rating: '4,8',
      reviews: '126 reseñas',
      open: 'Abierto · Cierra a las 6:00 p. m.',
      address: 'Calle 10 #20-30, Medellín',
      actions: ['Llamar', 'Cómo llegar', 'Sitio web', 'WhatsApp'],
    },
    caption: 'Ejemplo ilustrativo con un negocio inventado.',
  },
}

const FLOWS = {
  find: {
    en: {
      title: 'How a customer finds you',
      caption: 'Illustrative diagram of a new customer’s path.',
      steps: [
        { title: 'Searches on Google', text: 'For example: dentist near me' },
        { title: 'Sees your listing', text: 'Photos, hours and reviews' },
        { title: 'Visits your website', text: 'Clear and fast on a phone' },
        { title: 'Messages you', text: 'On WhatsApp, in one tap' },
      ],
    },
    es: {
      title: 'Cómo te encuentra un cliente',
      caption: 'Diagrama ilustrativo del camino de un cliente nuevo.',
      steps: [
        { title: 'Busca en Google', text: 'Por ejemplo: dentista cerca de mí' },
        { title: 'Ve tu ficha', text: 'Fotos, horario y reseñas' },
        { title: 'Entra a tu web', text: 'Clara y rápida en el celular' },
        { title: 'Te escribe', text: 'Por WhatsApp, en un toque' },
      ],
    },
  },
  reply: {
    en: {
      title: 'What happens when someone messages you',
      caption: 'Illustrative diagram of how an inquiry is handled.',
      steps: [
        { title: 'Message arrives', text: 'On WhatsApp' },
        { title: 'Instant reply', text: 'With the most common answers' },
        { title: 'Quick quote', text: 'Without you doing anything' },
        { title: 'You get notified', text: 'Alert on your phone' },
        { title: 'You close the sale', text: 'With a customer already interested' },
      ],
    },
    es: {
      title: 'Qué pasa cuando alguien te escribe',
      caption: 'Diagrama ilustrativo del flujo de una consulta.',
      steps: [
        { title: 'Llega el mensaje', text: 'Por WhatsApp' },
        { title: 'Respuesta al instante', text: 'Con las dudas más comunes' },
        { title: 'Cotización rápida', text: 'Sin que tú hagas nada' },
        { title: 'Te avisa', text: 'Notificación en tu celular' },
        { title: 'Tú cierras', text: 'Con el cliente ya interesado' },
      ],
    },
  },
  retain: {
    en: {
      title: 'How we bring customers back',
      caption: 'Illustrative diagram of a customer’s cycle.',
      steps: [
        { title: 'Appointment booked', text: 'The customer reserves' },
        { title: 'Reminder', text: 'The day before, on WhatsApp' },
        { title: 'You serve them', text: 'As usual' },
        { title: 'Follow-up', text: 'A message after the visit' },
        { title: 'They come back', text: 'And recommend you' },
      ],
    },
    es: {
      title: 'Cómo hacemos que vuelvan',
      caption: 'Diagrama ilustrativo del ciclo de un cliente.',
      steps: [
        { title: 'Cita agendada', text: 'El cliente reserva' },
        { title: 'Recordatorio', text: 'Un día antes, por WhatsApp' },
        { title: 'Lo atiendes', text: 'Como siempre' },
        { title: 'Seguimiento', text: 'Mensaje después de la visita' },
        { title: 'Vuelve', text: 'Y te recomienda' },
      ],
    },
  },
  gbp: {
    en: {
      title: 'How we set up your listing',
      caption: 'Illustrative diagram of the setup steps.',
      steps: [
        { title: 'Free audit', text: 'I check how it looks today' },
        { title: 'Create or claim', text: 'It stays in your Google account' },
        { title: 'Complete it', text: 'Categories, hours, services, photos' },
        { title: 'Keep it alive', text: 'Posts and a guide to answer reviews' },
      ],
    },
    es: {
      title: 'Cómo dejamos lista tu ficha',
      caption: 'Diagrama ilustrativo de los pasos de la configuración.',
      steps: [
        { title: 'Auditoría gratis', text: 'Veo cómo está hoy' },
        { title: 'Crear o reclamar', text: 'Queda en tu cuenta de Google' },
        { title: 'Completarla', text: 'Categorías, horario, servicios y fotos' },
        { title: 'Mantenerla viva', text: 'Publicaciones y guía para responder reseñas' },
      ],
    },
  },
}

// Qué lleva cada página de servicio.
const BY_SLUG = {
  'get-found-online': { flow: 'find', listing: true },
  'google-business-profile-setup': { flow: 'gbp', listing: true },
  'instant-replies': { flow: 'reply' },
  'customer-retention': { flow: 'retain' },
}

export function getListingCopy(lang) {
  return LISTING[lang] ?? LISTING.en
}

export function getServiceVisuals(lang, slug) {
  const entry = BY_SLUG[slug]
  if (!entry) return null
  const l = lang === 'es' ? 'es' : 'en'
  return {
    flow: entry.flow ? FLOWS[entry.flow][l] : null,
    listing: entry.listing ? LISTING[l] : null,
  }
}
