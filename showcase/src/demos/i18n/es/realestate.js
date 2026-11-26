// Contenido en español para realestate (y sus variantes). Ver
// salonBelleza.js para la explicación del patrón.
export default {
  niche: 'Bienes Raíces Residenciales',

  seo: {
    title: 'Diseño Web para Agentes Inmobiliarios (Ejemplo) | Easy Pro Digital',
    description:
      'Un ejemplo real de sitio web para agentes y agencias de bienes raíces residenciales, hecho por Easy Pro Digital. Así de bien puede verse la web de tu negocio: servicios, galería de propiedades, mapa de cobertura y más.',
  },

  nav: {
    links: [
      { label: 'Inicio' },
      { label: 'Inmuebles' },
      { label: 'Servicios' },
      { label: 'Por Qué Elegirnos' },
      { label: 'Zona de Cobertura' },
    ],
    ctaLabel: 'Agendar Consulta',
  },

  hero: {
    eyebrow: 'Bienes Raíces Residenciales',
    title: 'Encuentra tu próximo hogar, o vende el tuyo al mejor precio',
    text: 'Compra, venta y administración de propiedades con un agente que conoce el mercado local a fondo — sin presión, solo asesoría honesta.',
    primaryCta: { label: 'Ver Inmuebles' },
    secondaryCta: { label: 'Agendar Consulta' },
    trust: [
      { label: 'propiedades vendidas' },
      { label: 'calificación promedio' },
      { label: 'años en bienes raíces' },
    ],
  },

  listings: {
    eyebrow: 'Inmuebles Disponibles',
    title: 'Encuentra tu próximo hogar',
    intro: 'Inmuebles de ejemplo — en tu web real aquí aparecerían tus propios inmuebles, actualizados desde tu sistema.',
    city: 'Medellín',
    mapQuery: 'Medellín, Antioquia',
    locale: 'es-CO',
    currency: 'COP',
    labels: {
      allOps: 'Todos', ops: { rent: 'en Arriendo', sale: 'en Venta' }, opsPlural: { rent: 'Arriendo', sale: 'Venta' },
      types: { apartment: 'Apartamento', house: 'Casa', studio: 'Apartaestudio' },
      allTypes: 'Todos los tipos', where: '¿Dónde?', wherePlaceholder: 'Barrio, zona o municipio', type: 'Tipo de inmueble', search: 'Buscar',
      home: 'Inicio', properties: 'Inmuebles', resultOne: 'inmueble en', resultMany: 'inmuebles en',
      viewMap: 'Ver en el mapa', viewList: 'Ver listado', sortBy: 'Ordenar por', sortFeatured: 'Destacados',
      sortPriceAsc: 'Menor precio', sortPriceDesc: 'Mayor precio', sortArea: 'Mayor área',
      price: 'Precio del inmueble', min: 'Mínimo $', max: 'Máximo $', apply: 'Aplicar', beds: 'Habitaciones', baths: 'Baños', clear: 'Limpiar filtros',
      perMonth: '/mes', adminFee: 'de administración', bedsShort: 'hab.', bathsShort: 'baños', bathShortOne: 'baño', parkingShort: 'parq.',
      filters: 'Filtros', call: 'Llamar', contact: 'Contactar', favorite: 'Guardar en favoritos', prevPhoto: 'Foto anterior', nextPhoto: 'Foto siguiente',
      empty: 'No hay inmuebles con esos filtros. Prueba ampliando la búsqueda.',
    },
    items: [
      { price: 2600000, adminFee: 380000, tag: 'Nuevo', neighborhood: 'El Poblado', zone: 'Suroriente', city: 'Medellín' },
      { price: 3200000, adminFee: 450000, neighborhood: 'Laureles', zone: 'Occidente', city: 'Medellín' },
      { price: 1850000000, tag: 'Destacado', neighborhood: 'Las Palmas', zone: 'Oriente', city: 'Envigado' },
      { price: 1450000, adminFee: 180000, neighborhood: 'Conquistadores', zone: 'Occidente', city: 'Medellín' },
      { price: 720000000, neighborhood: 'Envigado Centro', zone: 'Sur', city: 'Envigado' },
      { price: 2450000000, tag: 'Destacado', neighborhood: 'Llanogrande', zone: 'Oriente', city: 'Rionegro' },
      { price: 1900000, adminFee: 260000, neighborhood: 'Belén', zone: 'Suroccidente', city: 'Medellín' },
      { price: 480000000, tag: 'Nuevo', neighborhood: 'Sabaneta', zone: 'Sur', city: 'Sabaneta' },
      { price: 5500000, neighborhood: 'Loma de Los Parra', zone: 'Suroriente', city: 'Medellín' },
    ],
  },

  services: {
    eyebrow: 'Qué Hacemos',
    title: 'Servicios inmobiliarios para compradores, vendedores e inversionistas',
    intro: 'Precios de ejemplo — así se verían tus servicios y tarifas en tu propio sitio.',
    items: [
      { title: 'Asistencia de Compra', text: 'Desde la búsqueda hasta el cierre, te guiamos en cada paso de la compra de tu hogar.' },
      { title: 'Venta y Publicación de Propiedades', text: 'Fotografía profesional, asesoría de puesta en escena y estrategia de precio para vender más rápido.' },
      { title: 'Avalúo Gratis', text: 'Descubre cuánto vale tu propiedad en el mercado actual — sin compromiso.' },
      { title: 'Administración de Propiedades', text: 'Gestión integral para propiedades de alquiler e inversión.' },
      { title: 'Servicios de Reubicación', text: '¿Te mudas a la zona? Te ayudamos a encontrar el barrio correcto, no solo una casa.' },
      { title: 'Propiedades de Inversión', text: 'Identificamos y evaluamos propiedades para renta o reventa.' },
    ],
  },

  features: {
    eyebrow: 'Por Qué Elegirnos',
    title: 'Un agente que trabaja para ti, no para la venta',
    intro: 'Cuatro razones por las que los clientes eligen Harborview para su decisión financiera más importante.',
    items: [
      { title: 'Licenciados y Experimentados', text: 'Cada agente está licenciado, verificado y conoce a fondo el mercado local.' },
      { title: 'Siempre Disponibles', text: 'Respuestas rápidas y visitas flexibles — según tu horario, no el nuestro.' },
      { title: 'Historial Comprobado', text: 'Cientos de cierres exitosos y una sólida reputación local.' },
      { title: 'Asesoría Sin Presión', text: 'Nosotros asesoramos, tú decides — cada recomendación se trata de tus metas, no de una venta rápida.' },
    ],
  },

  gallery: {
    eyebrow: 'Nuestro Trabajo',
    title: 'Una mirada más cercana a lo que hacemos',
    intro: 'En tu sitio real, aquí irían fotos de tus propias propiedades y cierres.',
    items: [
      { label: 'Interiores Listos para Habitar', alt: 'Sala y comedor luminosos y modernos con pisos de madera' },
      { label: 'Entregando las Llaves', alt: 'Primer plano de una mano sosteniendo llaves de casa frente a casas adosadas desenfocadas' },
      { label: 'Encanto de Barrio', alt: 'Casa estilo artesanal en azul pastel con cerca blanca' },
    ],
  },

  testimonials: {
    eyebrow: 'Clientes Felices',
    title: 'Lo que dicen nuestros clientes',
    intro: 'Testimonios de ejemplo — tu sitio mostraría reseñas reales de tus clientes.',
    items: [
      { role: 'Compradora primeriza', quote: 'Pacientes, honestos y nunca insistentes. Explicaron cada paso para que nunca nos sintiéramos perdidos.' },
      { role: 'Vendedores', quote: 'Pusieron el precio correcto a nuestra casa y tuvimos tres ofertas en una semana. Vendimos por encima del precio pedido.' },
      { role: 'Propietario de alquiler', quote: 'Administran dos de mis propiedades de alquiler y de verdad nunca tengo que pensar en eso.' },
    ],
  },

  map: {
    eyebrow: 'Zona de Cobertura',
    title: 'Sirviendo a compradores y vendedores en toda la región',
    intro: 'Operamos localmente — contáctanos para confirmar que cubrimos tu barrio.',
    hours: [
      { days: 'Lun – Sáb', time: '9:00 AM – 6:00 PM' },
      { days: 'Domingo', time: 'Con cita previa' },
    ],
  },

  cta: {
    heading: '¿Listo para tu próximo movimiento?',
    text: 'Agenda una consulta gratis y sin compromiso hoy mismo.',
    actions: [{ label: 'Agendar Consulta' }, { label: 'Ver Servicios' }],
  },

}
