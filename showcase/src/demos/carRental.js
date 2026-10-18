// NICHE demo — gets indexed. See src/demos/README.md before duplicating this
// for a new niche or for a specific prospect.
export default {
  slug: 'car-rental',
  brand: 'Veloz Car Rental',
  niche: 'Car Rental',
  kind: 'nicho',

  seo: {
    title: 'Website Design for Car Rental Companies (Example) | Easy Pro Digital',
    description:
      'A real example website for car rental agencies, built by Easy Pro Digital. Fleet showcase with premium hover effects, pricing, and instant booking.',
    robots: 'index, follow',
  },

  layout: {
    order: ['hero', 'services', 'features', 'gallery', 'testimonials', 'map', 'cta'],
  },

  theme: {
    primary: '#1c1f26',          // gris grafito, "metal premium"
    primaryDark: '#0e1014',
    accent: '#c62828',           // rojo deportivo
    bg: '#f4f4f6',
    surface: '#ffffff',
    ink: '#13151a',
    muted: '#5c5f68',
    line: '#e3e3e8',
    headingFont: "'Barlow Condensed', system-ui, sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Inter:wght@300;400;500;600&display=swap',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Fleet', href: '#services' },
      { label: 'Why Us', href: '#features' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Reviews', href: '#testimonials' },
      { label: 'Location', href: '#location' },
    ],
    ctaLabel: 'Book a Car',
  },

  hero: {
    variant: 'split',
    eyebrow: 'Car Rental · Medellín',
    title: 'Conduce lo que quieras, cuando quieras.',
    text: 'Flota renovada cada año, entrega en el aeropuerto o tu hotel, y reserva 100% en línea. Desde sedanes económicos hasta SUVs premium.',
    primaryCta: { label: 'Reservar mi carro', href: '#book' },
    secondaryCta: { label: 'Ver flota', href: '#services' },
    trust: [
      { end: 180, suffix: '+', label: 'vehículos en flota' },
      { value: '4.8 ★', label: 'calificación promedio' },
      { end: 7, label: 'años rentando' },
    ],
    visualIcon: 'car',
    // LiquidChrome (React Bits, motor ogl): metal líquido en grises —
    // "metal premium" sin usar three/Hyperspeed, que ya es pesado en otras
    // demos. Único WebGL de la página.
    background: 'liquidChrome',
    image: '/images/car-rental/hero.jpg',
    imageAlt: 'Sleek silver SUV parked at golden hour',
  },

  services: {
    eyebrow: 'Our Fleet',
    title: 'Un carro para cada plan',
    intro: 'Sample pricing — this is how the fleet and rates section would look on your own website.',
    variant: 'grid',
    // TiltedCard (motion) + GlareHover (sin deps): cada tarjeta se inclina
    // en 3D siguiendo el cursor y un brillo cruza la carrocería, como luz
    // real sobre metal.
    hover: 'tilted',
    items: [
      { icon: 'car',   title: 'Económico',       text: 'Chevrolet Spark o similar. Ideal para ciudad, bajo consumo.',              price: 'Desde $28 USD/día' },
      { icon: 'car',   title: 'Sedán Ejecutivo', text: 'Toyota Corolla o similar. Espacioso, cómodo para viajes largos.',           price: 'Desde $42 USD/día' },
      { icon: 'car',   title: 'SUV Compacta',    text: 'Chevrolet Tracker o similar. Para carretera y terrenos mixtos.',            price: 'Desde $55 USD/día' },
      { icon: 'car',   title: 'SUV Premium',     text: 'Toyota Fortuner o similar. Lujo y potencia para la familia completa.',      price: 'Desde $78 USD/día' },
      { icon: 'car',   title: 'Camioneta 4x4',   text: 'Toyota Hilux o similar. Para rutas exigentes fuera de la ciudad.',          price: 'Desde $85 USD/día' },
      { icon: 'car',   title: 'Van de Pasajeros', text: 'Hasta 12 personas. Perfecta para grupos y eventos corporativos.',         price: 'Desde $95 USD/día' },
    ],
  },

  features: {
    eyebrow: 'Why Choose Us',
    title: 'Reservar un carro no debería ser complicado',
    intro: 'Cuatro razones por las que la gente nos elige una y otra vez.',
    items: [
      { icon: 'clock',       title: 'Entrega donde estés', text: 'Aeropuerto, hotel o tu casa — llevamos el carro hasta ti sin costo extra en el área metro.' },
      { icon: 'shieldCheck', title: 'Seguro todo riesgo',   text: 'Todos nuestros vehículos incluyen cobertura completa sin deducibles sorpresa.' },
      { icon: 'award',       title: 'Flota renovada',       text: 'Vehículos de máximo 2 años, revisados y desinfectados antes de cada entrega.' },
      { icon: 'phone',       title: 'Soporte en ruta',      text: 'Línea de asistencia 24/7 si algo pasa durante tu renta.' },
    ],
  },

  gallery: {
    eyebrow: 'Our Cars',
    title: 'Conoce la flota',
    intro: 'En tu sitio real, aquí irían fotos reales de tus propios vehículos.',
    items: [
      { label: 'Sedán',    image: '/images/car-rental/sedan.jpg',    alt: 'Silver sedan parked in a modern garage' },
      { label: 'SUV',      image: '/images/car-rental/suv.jpg',      alt: 'Black SUV on a mountain road' },
      { label: 'Pickup',   image: '/images/car-rental/pickup.jpg',   alt: 'White pickup truck off-road' },
      { label: 'Económico', image: '/images/car-rental/economy.jpg', alt: 'Compact hatchback in the city' },
    ],
  },

  testimonials: {
    eyebrow: 'Happy Drivers',
    title: 'Lo que dicen nuestros clientes',
    intro: 'Sample testimonials — your website would feature real reviews from your customers.',
    items: [
      { name: 'Esteban G.', role: 'Viaje de negocios', quote: 'Reservé desde el aeropuerto y el carro ya me estaba esperando. Todo el proceso tomó 5 minutos.' },
      { name: 'Paula C.',  role: 'Viaje familiar',     quote: 'Rentamos la SUV premium para un viaje a la costa y llegó impecable, con tanque lleno y todo revisado.' },
      { name: 'Ricardo T.', role: 'Renta mensual',     quote: 'Rento mensual para mi trabajo hace más de un año. El precio y el servicio son consistentes siempre.' },
    ],
  },

  map: {
    eyebrow: 'Find Us',
    title: 'Oficina y entrega',
    intro: 'Entregamos en el aeropuerto José María Córdova sin costo adicional.',
    id: 'location',
    query: 'Aeropuerto José María Córdova, Rionegro, Colombia',
    address: 'Cra. 48 #26-50, Rionegro, Antioquia',
    phone: '+57 322 309 2267',
    hours: [
      { days: 'Lun – Dom', time: '6:00 AM – 10:00 PM' },
      { days: 'Entrega aeropuerto', time: '24/7, bajo reserva' },
    ],
  },

  cta: {
    heading: '¿Listo para tu próximo viaje?',
    text: 'Reserva en línea en menos de 3 minutos. Cancelación gratuita hasta 24h antes.',
    actions: [
      { label: 'Reservar ahora', href: '#want-this' },
      { label: 'Ver toda la flota', href: '#want-this', variant: 'outline' },
    ],
  },

  disclosure: {
    heading: 'This is a sample website',
    text: '"Veloz Car Rental" is not a real business: this page is a web design example for car rental companies, built by Easy Pro Digital. If you run a car rental business and want a website like this one (with your brand, your fleet and real booking), let\'s talk.',
  },
}
