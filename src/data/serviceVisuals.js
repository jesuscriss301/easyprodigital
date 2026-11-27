// ============================================================
//  Elementos visuales de las páginas de servicio y de ciudad:
//   - diagramas de pasos (flow)
//   - ejemplo "antes / después" de una ficha de Google (listing)
//   - ilustraciones animadas por servicio (illustrations)
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

// ============================================================
//  Ilustraciones animadas por servicio (ServiceIllustrations.jsx).
//  Todo el texto va aquí, en el idioma de la página. Son dibujos con
//  negocios inventados: nada de marcas reales ni cifras de resultados.
// ============================================================
const ILLUSTRATIONS = {
  en: {
    web: {
      description:
        'Illustration of a laptop and a phone showing the same page for a made-up business: a header, a sample photo and a WhatsApp button that pulses.',
      business: 'Your Example Business',
      url: 'yourbusiness.com',
      nav: ['Home', 'Services', 'Contact'],
      tagline: 'Friendly service, close to you',
      photo: 'Business photo',
      whatsappCta: 'Message us on WhatsApp',
      caption: 'Your business, looking sharp on desktop and mobile, with WhatsApp one tap away.',
    },
    store: {
      description:
        'Illustration of an online purchase: a product card goes into a cart and ends in an approved payment with online payment by PSE or card.',
      product: 'Example product',
      inStock: 'In stock',
      addToCart: 'Add',
      cart: 'Cart',
      approved: 'Payment approved',
      payOnline: 'Online payment',
      pse: 'PSE',
      card: 'Card',
      caption: 'From product card to cart to approved payment, without writing anyone.',
    },
    mobile: {
      description:
        'Illustration of two phones, a generic iPhone and a generic Android, showing the same app, with a notification dropping in with an appointment reminder.',
      appName: 'My Business',
      appTitle: 'Your appointments',
      appItem: 'Appointment confirmed',
      appTime: 'Tomorrow · 3:00 PM',
      notificationTitle: 'Reminder',
      notification: 'Your appointment is tomorrow at 3:00 PM.',
      ios: 'iPhone',
      android: 'Android',
      caption: 'Your app on iPhone and Android, with reminders that arrive on their own.',
    },
    system: {
      description:
        'Illustration of a business system: on the left, a messy spreadsheet fading out; on the right, an orderly dashboard with sales, inventory and customers cards and a chart that grows.',
      appName: 'Business dashboard',
      sheetLabel: 'Spreadsheet',
      sales: 'Sales',
      inventory: 'Inventory',
      customers: 'Customers',
      chartLabel: 'Overview',
      caption: 'From a messy spreadsheet to your whole business on one screen.',
    },
    search: {
      description:
        'Illustration of generic search results where the “Your business” card rises from fourth to first place.',
      query: 'service near me',
      business: 'Your business',
      businessUrl: 'yourbusiness.com',
      others: [
        { title: 'Local service', url: 'example.com/local' },
        { title: 'Neighborhood shop', url: 'example.com/shop' },
        { title: 'Central office', url: 'example.com/office' },
      ],
      caption: 'Be the first one they find when they search nearby.',
    },
    funnel: {
      description:
        'Illustration of a three-level funnel with the steps “See your ad”, “They message you” and “They buy”, and dots falling through it.',
      steps: ['See your ad', 'They message you', 'They buy'],
      caption: 'A clear path from your ad to the sale.',
    },
    ai: {
      description:
        'Illustration of a PDF document called “Company handbook” feeding a chat where an assistant answers a question about returns and cites the handbook.',
      docLabel: 'PDF',
      docTitle: 'Company handbook',
      assistant: 'Assistant',
      question: 'What is the return policy?',
      answer: 'You have 30 days with the receipt. (Source: Handbook, p. 4)',
      caption: 'An assistant that answers from your company documents.',
    },
    infra: {
      description:
        'Illustration of a server with blinking lights, connected by 10 Gb lines to three computers, with an AI chip and a lock showing that data stays in the company.',
      rackLabel: 'Company server',
      chip: 'AI',
      linkLabel: '10 Gb',
      lockLabel: 'Your data stays in your company',
      caption: 'AI and files on your own server, with a fast network for the whole team.',
    },
  },
  es: {
    web: {
      description:
        'Ilustración de un portátil y un celular que muestran la misma página de un negocio inventado: encabezado, una foto de muestra y un botón de WhatsApp que late.',
      business: 'Tu Negocio Ejemplo',
      url: 'tunegocio.com',
      nav: ['Inicio', 'Servicios', 'Contacto'],
      tagline: 'Atención cercana para tu hogar',
      photo: 'Foto del negocio',
      whatsappCta: 'Escríbenos por WhatsApp',
      caption: 'Tu negocio, bien presentado en computador y celular, con WhatsApp a un toque.',
    },
    store: {
      description:
        'Ilustración de una compra en línea: una tarjeta de producto pasa al carrito y termina en un pago aprobado, con pago en línea por PSE o tarjeta.',
      product: 'Producto de ejemplo',
      inStock: 'Disponible',
      addToCart: 'Agregar',
      cart: 'Carrito',
      approved: 'Pago aprobado',
      payOnline: 'Pago en línea',
      pse: 'PSE',
      card: 'Tarjeta',
      caption: 'Del producto al carrito y al pago, sin escribirle a nadie.',
    },
    mobile: {
      description:
        'Ilustración de dos celulares, un iPhone y un Android genéricos, con la misma app, y una notificación que cae con el recordatorio de una cita.',
      appName: 'Mi Negocio',
      appTitle: 'Tus citas',
      appItem: 'Cita confirmada',
      appTime: 'Mañana · 3:00 p. m.',
      notificationTitle: 'Recordatorio',
      notification: 'Tu cita es mañana a las 3:00 p. m.',
      ios: 'iPhone',
      android: 'Android',
      caption: 'Tu app en iPhone y Android, con recordatorios que llegan solos.',
    },
    system: {
      description:
        'Ilustración de un sistema: a la izquierda, una hoja de cálculo desordenada que se desvanece; a la derecha, un panel ordenado con tarjetas de ventas, inventario y clientes y una gráfica que crece.',
      appName: 'Panel del negocio',
      sheetLabel: 'Hoja de cálculo',
      sales: 'Ventas',
      inventory: 'Inventario',
      customers: 'Clientes',
      chartLabel: 'Resumen',
      caption: 'Del Excel desordenado a todo tu negocio en una pantalla.',
    },
    search: {
      description:
        'Ilustración de resultados de búsqueda genéricos en los que la tarjeta “Tu negocio” sube del cuarto al primer lugar.',
      query: 'servicio cerca de mí',
      business: 'Tu negocio',
      businessUrl: 'tunegocio.com',
      others: [
        { title: 'Servicio local', url: 'ejemplo.com/local' },
        { title: 'Taller del barrio', url: 'ejemplo.com/taller' },
        { title: 'Oficina central', url: 'ejemplo.com/oficina' },
      ],
      caption: 'Que te encuentren primero cuando te buscan cerca.',
    },
    funnel: {
      description:
        'Ilustración de un embudo de tres niveles con los pasos “Ven tu anuncio”, “Te escriben” y “Te compran”, y puntos que bajan por el embudo.',
      steps: ['Ven tu anuncio', 'Te escriben', 'Te compran'],
      caption: 'Un recorrido claro desde el anuncio hasta la compra.',
    },
    ai: {
      description:
        'Ilustración de un documento PDF llamado “Manual de la empresa” que alimenta un chat donde un asistente responde una pregunta sobre devoluciones citando el manual.',
      docLabel: 'PDF',
      docTitle: 'Manual de la empresa',
      assistant: 'Asistente',
      question: '¿Cuál es la política de devoluciones?',
      answer: 'Tienes 30 días con la factura. (Fuente: Manual, pág. 4)',
      caption: 'Un asistente que responde con los documentos de tu empresa.',
    },
    infra: {
      description:
        'Ilustración de un servidor con luces que parpadean, conectado por líneas de 10 Gb a tres computadores, con un chip de IA y un candado que indica que los datos se quedan en la empresa.',
      rackLabel: 'Servidor de la empresa',
      chip: 'IA',
      linkLabel: '10 Gb',
      lockLabel: 'Tus datos se quedan en la empresa',
      caption: 'IA y archivos en tu propio servidor, con una red rápida para todo el equipo.',
    },
  },
}

// Qué lleva cada página de servicio.
// (La ilustración 'store' está lista en ILLUSTRATIONS; todavía no la usa ninguna página.)
const BY_SLUG = {
  'get-found-online': { flow: 'find', listing: true },
  'google-business-profile-setup': { flow: 'gbp', listing: true },
  'instant-replies': { flow: 'reply' },
  'customer-retention': { flow: 'retain' },
  'web-development': { illustration: 'web', storeCompare: true },
  'mobile-development': { illustration: 'mobile' },
  'saas-development': { illustration: 'system' },
  'seo-services': { illustration: 'search' },
  'digital-marketing': { illustration: 'funnel' },
  'ai-integrations': { illustration: 'ai' },
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
    illustration: entry.illustration ?? null,
    storeCompare: entry.storeCompare ?? false,
  }
}

export function getIllustrationCopy(lang, kind) {
  const l = lang === 'es' ? 'es' : 'en'
  return ILLUSTRATIONS[l][kind] ?? null
}
