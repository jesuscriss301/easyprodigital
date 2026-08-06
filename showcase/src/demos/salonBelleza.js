// Demo de NICHO — se indexa. Ver src/demos/README.md antes de duplicar esto
// para un nuevo nicho o para un prospecto puntual.
export default {
  slug: 'salon-belleza',
  brand: 'Bella Aura Studio',
  niche: 'Salón de belleza y estética',
  kind: 'nicho', // 'nicho' | 'prospecto'

  seo: {
    title: 'Diseño Web para Salones de Belleza y Estética (Ejemplo) | Easy Pro Digital',
    description:
      'Ejemplo real de sitio web para salones de belleza y centros de estética, creado por Easy Pro Digital. Así de bien puede lucir la web de tu negocio: servicios, reservas, testimonios y más.',
    robots: 'index, follow',
  },

  theme: {
    primary: '#b76e79',
    primaryDark: '#8c4a56',
    accent: '#c9a869',
    bg: '#fff8f5',
    surface: '#ffffff',
    ink: '#2c2224',
    muted: '#7c6b6d',
    line: '#ecdfda',
    headingFont: "'Playfair Display', Georgia, serif",
    bodyFont: "'Poppins', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@300;400;500;600&display=swap',
  },

  nav: {
    links: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Servicios', href: '#servicios' },
      { label: 'Nosotros', href: '#nosotros' },
      { label: 'Galería', href: '#galeria' },
      { label: 'Testimonios', href: '#testimonios' },
    ],
    ctaLabel: 'Reservar cita',
  },

  hero: {
    variant: 'split',
    eyebrow: 'Salón de Belleza & Estética',
    title: 'Realza tu belleza, siéntete increíble',
    text: 'Cortes, color, manicure, tratamientos faciales y maquillaje profesional en un espacio pensado para que te consientas. Reserva en minutos, sin llamadas ni esperas.',
    primaryCta: { label: 'Reservar cita', href: '#reservar' },
    secondaryCta: { label: 'Ver servicios', href: '#servicios' },
    trust: [
      { value: '4.9 ★', label: 'valoración promedio' },
      { value: '+500', label: 'clientas atendidas' },
      { value: '8 años', label: 'de experiencia' },
    ],
    visualIcon: 'flower',
  },

  services: {
    eyebrow: 'Lo que hacemos',
    title: 'Servicios pensados para ti',
    intro: 'Precios de ejemplo — así se vería la sección de servicios y tarifas en tu propia web.',
    variant: 'grid',
    items: [
      { icon: 'scissors', title: 'Corte y peinado', text: 'Cortes a la medida y peinados para cualquier ocasión, con acabado profesional.', price: 'Desde $35.000' },
      { icon: 'droplet', title: 'Coloración y mechas', text: 'Técnicas de color, balayage y mechas con productos de alta gama.', price: 'Desde $90.000' },
      { icon: 'sparkle', title: 'Manicure & pedicure', text: 'Esmaltado tradicional, semipermanente y nail art personalizado.', price: 'Desde $28.000' },
      { icon: 'leaf', title: 'Tratamientos faciales', text: 'Limpieza profunda, hidratación y rutinas anti-edad personalizadas.', price: 'Desde $60.000' },
      { icon: 'sun', title: 'Depilación', text: 'Cera tibia y depilación facial y corporal en un ambiente cómodo y privado.', price: 'Desde $22.000' },
      { icon: 'brush', title: 'Maquillaje profesional', text: 'Maquillaje social y de novia, con prueba previa incluida.', price: 'Desde $70.000' },
    ],
  },

  features: {
    eyebrow: 'Por qué elegirnos',
    title: 'Un espacio pensado para consentirte',
    intro: 'Cuatro razones por las que nuestras clientas vuelven una y otra vez.',
    items: [
      { icon: 'award', title: 'Profesionales certificadas', text: 'Equipo con formación continua en las últimas técnicas del sector.' },
      { icon: 'droplet', title: 'Productos premium', text: 'Trabajamos solo con marcas profesionales, seguras para tu piel y cabello.' },
      { icon: 'waves', title: 'Ambiente relajante', text: 'Un espacio diseñado para desconectar mientras te cuidamos.' },
      { icon: 'users', title: 'Atención personalizada', text: 'Cada servicio se adapta a lo que tu cabello, piel y estilo necesitan.' },
    ],
  },

  gallery: {
    eyebrow: 'Nuestro trabajo',
    title: 'Galería',
    intro: 'En tu web real, aquí van fotos de tus trabajos, tu local y tu equipo.',
    items: ['Coloración', 'Estudio', 'Manicure', 'Peinados', 'Faciales', 'Maquillaje'],
  },

  testimonials: {
    eyebrow: 'Clientas felices',
    title: 'Lo que dicen de nosotras',
    intro: 'Testimonios de ejemplo — en tu web irían reseñas reales de tus clientas.',
    items: [
      { name: 'Mariana G.', role: 'Cliente frecuente', quote: 'Cambié de look completamente y quedé feliz. El equipo es súper profesional y el ambiente muy relajante.' },
      { name: 'Laura P.', role: 'Cliente nueva', quote: 'Reservar fue facilísimo y llegué sin esperar nada. El resultado de mi manicure duró semanas.' },
      { name: 'Camila R.', role: 'Cliente frecuente', quote: 'El tratamiento facial me dejó la piel increíble. Ya es mi lugar de confianza para todo.' },
    ],
  },

  cta: {
    heading: '¿Lista para tu transformación?',
    text: 'Agenda tu cita hoy mismo y déjate consentir por nuestro equipo.',
    actions: [
      { label: 'Reservar cita', href: '#quieres-esto' },
      { label: 'Ver más servicios', href: '#quieres-esto', variant: 'outline' },
    ],
  },

  disclosure: {
    heading: 'Esta es una web de muestra',
    text: '"Bella Aura Studio" no es un negocio real: esta página es un ejemplo de diseño web para salones de belleza y centros de estética, creado por Easy Pro Digital. Si tienes un negocio de este rubro y quieres una web así (o mejor, con tu marca, tus fotos y sistema de reservas real), hablemos.',
  },
}
