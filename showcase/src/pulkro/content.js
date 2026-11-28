// Contenido real de Pulkro Express, tomado de su Instagram
// (@pulkroexpress.medellin), de sus piezas de servicios del 29 de junio de
// 2026 y de su Linktree. No se inventan precios, horarios, reseñas ni cifras:
// lo que no publican se resuelve con "pregunta por WhatsApp".

const IMG = '/images/pulkro-express'

export const CONTACT = {
  whatsapp: '573052881044',
  whatsappLabel: '305 288 1044',
  address: 'Cra. 70 #27-47, Belén, Medellín',
  mapQuery: 'Cra. 70 #27-47, Belén, Medellín, Antioquia',
  instagram: 'https://www.instagram.com/pulkroexpress.medellin/',
  tiktok: 'https://www.tiktok.com/@pulkroexpress',
  facebook: 'https://www.facebook.com/pulkroexpress.medellin',
}

export const wa = (text) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`

export const LOGO = `${IMG}/logo.webp`

export const HERO = {
  eyebrow: 'Lavado de calzado · Belén, Medellín',
  titleStart: 'Revivimos',
  titleHighlight: 'tus tenis',
  titleEnd: 'en Medellín',
  text:
    'Limpieza profunda, desinfección y cuidado profesional para tus tenis y zapatos. Tráelos a nuestro local en Belén o los recogemos a domicilio.',
  image: { src: `${IMG}/bota-local.webp`, w: 455, h: 812, alt: 'Bota Quechua recién lavada frente al aviso de Pulkro Express en el local de Belén' },
  chip: 'Tu calzado, nuestra pasión',
  trust: [
    { value: '24 h', label: 'Lavado Express' },
    { value: 'Domicilio', label: 'Recogemos y entregamos' },
    { value: 'Belén', label: 'Local en Cra. 70' },
  ],
}

// Pares reales de antes/después publicados en su Instagram (carruseles).
export const BEFORE_AFTER = [
  {
    id: 'lona',
    label: 'Tenis de lona',
    note: 'Lona blanca: manchas de uso y suela gris.',
    before: `${IMG}/antes-lona.webp`,
    after: `${IMG}/despues-lona.webp`,
    w: 640, h: 515,
  },
  {
    id: 'gamuza',
    label: 'Gamuza',
    note: 'Gamuza con suela amarillenta y cordones manchados.',
    before: `${IMG}/antes-gamuza.webp`,
    after: `${IMG}/despues-gamuza.webp`,
    w: 705, h: 674,
  },
  {
    id: 'cuero',
    label: 'Mocasín de cuero',
    note: 'Cuero opaco y con marcas blancas de uso.',
    before: `${IMG}/antes-cuero.webp`,
    after: `${IMG}/despues-cuero.webp`,
    w: 779, h: 654,
  },
]

// Los tres servicios tal como los publican en sus piezas.
export const SERVICES = [
  {
    icon: 'clock',
    name: 'Lavado Express',
    time: 'Se entrega en 24 horas',
    text: 'Del sucio al impecable en un día, sin descuidar el detalle.',
    items: [
      'Limpieza profunda y desinfección total',
      'Eliminación de olores y bacterias',
      'Productos premium',
      'Calidad garantizada',
    ],
    featured: true,
  },
  {
    icon: 'sparkle',
    name: 'Lavado Pulkro',
    time: 'Se entrega en 3 días hábiles',
    text: 'Nuestra limpieza más completa, por dentro y por fuera.',
    items: [
      'Interno y externo',
      'Lavado de plantillas y cordones',
      'Desinfección total',
      'Máquinas con tecnología de punta',
    ],
  },
  {
    icon: 'droplet',
    name: 'Gamuza y nubuck',
    time: 'Se entrega en 3 días hábiles',
    text: 'Cuidado especializado para materiales delicados.',
    items: [
      'Lavado interno y externo',
      'Plantillas y cordones',
      'Humectación para recuperar el material',
      'Resaltador de color (no es pintura)',
    ],
  },
]

export const EXTRAS = [
  'Recogida y entrega a domicilio',
  'Eliminación de olores',
  'Esterilización con vapor',
  'Secado a temperatura controlada',
  'Membresía para clientes frecuentes',
]

export const STEPS = [
  { n: '01', title: 'Agenda por WhatsApp', text: 'Nos escribes, te contamos el servicio que necesita tu par y cuadramos la entrega.' },
  { n: '02', title: 'Lo traes o lo recogemos', text: 'Pásate por el local en Belén o pide la recogida a domicilio.' },
  { n: '03', title: 'Lavamos y desinfectamos', text: 'Máquina de lavado por cepillos, vapor para esterilizar y secadora a temperatura constante.' },
  { n: '04', title: 'Te los devolvemos como nuevos', text: 'Listos para estrenar otra vez, en tu casa o en el local.' },
]

export const PROCESS_PHOTOS = [
  { src: `${IMG}/maquina-lavado.webp`, w: 473, h: 840, label: 'Máquina de lavado por cepillos', alt: 'Máquina de lavado de calzado con cepillos para suela, empeine y cordones en Pulkro Express' },
  { src: `${IMG}/esterilizacion.webp`, w: 473, h: 600, label: 'Esterilización con vapor', alt: 'Tenis blanco recibiendo vapor de esterilización en Pulkro Express, Medellín' },
  { src: `${IMG}/secadora.webp`, w: 473, h: 840, label: 'Secadora a temperatura constante', alt: 'Secadora de calzado a temperatura constante en el local de Pulkro Express' },
]

export const GALLERY = [
  { src: `${IMG}/dc-antes-despues.webp`, w: 472, h: 840, label: 'Mitad y mitad', alt: 'Tenis DC: el izquierdo antes del lavado y el derecho después, en Pulkro Express Medellín' },
  { src: `${IMG}/tenis-cordones.webp`, w: 630, h: 840, label: 'Cordones como nuevos', alt: 'Tenis azules con cordones gruesos recién lavados en Pulkro Express Belén' },
  { src: `${IMG}/tenis-reebok.webp`, w: 473, h: 840, label: 'Running', alt: 'Tenis Reebok de running después del lavado en Pulkro Express' },
  { src: `${IMG}/local-mostrador.webp`, w: 473, h: 840, label: 'Nuestro local', alt: 'Mostrador del local de Pulkro Express en Belén, Medellín, con el aviso de la marca' },
]

export const FAQS = [
  { q: '¿Cuánto cuesta lavar mis tenis?', a: 'Depende del material y del servicio (Express, Pulkro o gamuza y nubuck). Escríbenos por WhatsApp con una foto de tu par y te damos el precio exacto.' },
  { q: '¿Cuánto se demoran?', a: 'El Lavado Express se entrega en 24 horas. El Lavado Pulkro y el de gamuza y nubuck se entregan en 3 días hábiles.' },
  { q: '¿Recogen a domicilio?', a: 'Sí. Recogemos tu calzado y te lo entregamos como nuevo. Pregunta por WhatsApp la cobertura en Medellín.' },
  { q: '¿Lavan gamuza, nubuck y cuero?', a: 'Sí. Para gamuza y nubuck tenemos un servicio especializado con humectación del material y resaltador de color (no es pintura).' },
  { q: '¿Dónde están ubicados?', a: 'En la Cra. 70 #27-47, barrio Belén, Medellín.' },
]

export const DISCLOSURE = {
  heading: '¿Te gusta cómo se ve esta web?',
  text:
    'Esta es una propuesta de diseño hecha por Easy Pro Digital para Pulkro Express, con las fotos, servicios y datos de contacto que el negocio publica en su Instagram y su Linktree. Pulkro Express no la encargó ni la ha aprobado: es un ejemplo de cómo podría verse su página web.',
  whatsappMessage: 'Hola Jesús, vi la demo de la web de Pulkro Express y quiero saber más.',
}
