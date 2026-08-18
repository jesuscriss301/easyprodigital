// Contenido en español para salon-belleza (y sus variantes de estilo, que
// heredan este mismo contenido). Solo texto — colores, imágenes e íconos no
// cambian entre idiomas. Se combina sobre el objeto en inglés con
// mergeLang() (ver ../../../i18n.jsx); cualquier campo que falte acá se
// deja tal cual en inglés.
export default {
  niche: 'Salón de Belleza y Spa',

  seo: {
    title: 'Diseño Web para Salones de Belleza y Spa (Ejemplo) | Easy Pro Digital',
    description:
      'Un ejemplo real de sitio web para salones de belleza y spas, hecho por Easy Pro Digital. Así de bien puede verse la web de tu negocio: servicios, reservas, testimonios y más.',
  },

  nav: {
    links: [
      { label: 'Inicio' },
      { label: 'Servicios' },
      { label: 'Nosotros' },
      { label: 'Galería' },
      { label: 'Testimonios' },
      { label: 'Ubicación' },
    ],
    ctaLabel: 'Reservar',
  },

  hero: {
    eyebrow: 'Salón de Belleza y Spa',
    title: 'Realza tu belleza, siéntete increíble',
    text: 'Cortes, color, manicura, tratamientos faciales y maquillaje profesional en un espacio pensado para que te relajes y te consientan. Reserva en minutos, sin llamadas ni esperas.',
    primaryCta: { label: 'Reservar' },
    secondaryCta: { label: 'Ver Servicios' },
    trust: [
      { label: 'calificación promedio' },
      { label: 'clientas atendidas' },
      { label: 'años de experiencia' },
    ],
  },

  services: {
    eyebrow: 'Qué Hacemos',
    title: 'Servicios pensados para ti',
    intro: 'Precios de ejemplo — así se vería la sección de servicios y tarifas en tu propio sitio.',
    items: [
      { title: 'Corte y Peinado', text: 'Cortes y peinados a medida para cualquier ocasión, con acabado profesional.' },
      { title: 'Color y Mechas', text: 'Técnicas de color, balayage y mechas con productos premium.' },
      { title: 'Manicura y Pedicura', text: 'Esmaltado clásico, gel y nail art personalizado.' },
      { title: 'Tratamientos Faciales', text: 'Limpieza profunda, hidratación y rutinas antiedad personalizadas.' },
      { title: 'Depilación con Cera', text: 'Depilación facial y corporal con cera tibia, en un ambiente privado y cómodo.' },
      { title: 'Maquillaje Profesional', text: 'Maquillaje para eventos y novias, con sesión de prueba incluida.' },
    ],
  },

  features: {
    eyebrow: 'Por Qué Elegirnos',
    title: 'Un espacio diseñado para consentirte',
    intro: 'Cuatro razones por las que nuestras clientas siguen volviendo.',
    items: [
      { title: 'Profesionales Certificadas', text: 'Un equipo en formación continua en las últimas técnicas del sector.' },
      { title: 'Productos Premium', text: 'Solo trabajamos con marcas profesionales, seguras para tu piel y cabello.' },
      { title: 'Ambiente Relajante', text: 'Un espacio diseñado para que te desconectes mientras nos encargamos de ti.' },
      { title: 'Atención Personalizada', text: 'Cada servicio se adapta a lo que tu cabello, piel y estilo necesitan.' },
    ],
  },

  gallery: {
    eyebrow: 'Nuestro Trabajo',
    title: 'Galería',
    intro: 'En tu sitio real, aquí irían fotos de tu trabajo, tu espacio y tu equipo.',
    items: [
      { label: 'Coloración', alt: 'Estilista aplicando mechas de color' },
      { label: 'Estudio', alt: 'Interior del salón con sillas de peinado' },
      { label: 'Manicura', alt: 'Mano con manicura de uñas florales' },
      { label: 'Peinado', alt: 'Estación de peinado de un salón elegante' },
      { label: 'Faciales', alt: 'Clienta recibiendo un tratamiento facial' },
      { label: 'Maquillaje', alt: 'Set de brochas de maquillaje profesional' },
    ],
  },

  testimonials: {
    eyebrow: 'Clientas Felices',
    title: 'Lo que dicen de nosotras',
    intro: 'Testimonios de ejemplo — tu sitio mostraría reseñas reales de tus clientas.',
    items: [
      { role: 'Clienta habitual', quote: 'Cambié completamente mi look y no podría estar más feliz. El equipo es súper profesional y el ambiente es muy relajante.' },
      { role: 'Clienta nueva', quote: 'Reservar fue facilísimo y no esperé nada. Mi manicura duró semanas.' },
      { role: 'Clienta habitual', quote: 'El tratamiento facial dejó mi piel espectacular. Ya es mi lugar de confianza para todo.' },
    ],
  },

  map: {
    eyebrow: 'Encuéntranos',
    title: 'Visita el estudio',
    intro: 'Recibimos sin cita si hay sillas libres — o reserva con anticipación y evita la espera.',
    hours: [
      { days: 'Mar – Vie', time: '9:00 AM – 7:00 PM' },
      { days: 'Sábado', time: '9:00 AM – 5:00 PM' },
      { days: 'Dom – Lun', time: 'Cerrado' },
    ],
  },

  cta: {
    heading: '¿Lista para tu transformación?',
    text: 'Reserva tu cita hoy y deja que nuestro equipo se encargue de ti.',
    actions: [{ label: 'Reservar' }, { label: 'Ver Más Servicios' }],
  },

  disclosure: {
    heading: 'Este es un sitio web de muestra',
    text: '"Bella Aura Studio" no es un negocio real: esta página es un ejemplo de diseño web para salones de belleza y spas, hecho por Easy Pro Digital. Si tienes un negocio así y quieres un sitio como este (o mejor, con tu marca, tus fotos y un sistema de reservas real), hablemos.',
  },
}
