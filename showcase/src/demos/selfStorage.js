// NICHE demo — gets indexed. See src/demos/README.md before duplicating this
// for a new niche or for a specific prospect.
export default {
  slug: 'self-storage',
  brand: 'SafeBox Storage',
  niche: 'Self Storage',
  kind: 'nicho',

  seo: {
    title: 'Website Design for Self Storage Facilities (Example) | Easy Pro Digital',
    description:
      'A real example website for self-storage and warehouse rental businesses, built by Easy Pro Digital. Unit sizes, pricing, security features and online booking.',
    robots: 'index, follow',
  },

  layout: {
    order: ['hero', 'unitTypes', 'services', 'features', 'testimonials', 'map', 'cta'],
  },

  theme: {
    primary: '#2b4c7e',          // azul confianza, "orden y seguridad"
    primaryDark: '#1b3357',
    accent: '#e8a33d',           // ámbar de advertencia/acceso, cálido
    bg: '#f6f7fa',
    surface: '#ffffff',
    ink: '#1a2233',
    muted: '#5b6478',
    line: '#e2e5ee',
    headingFont: "'Sora', system-ui, sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=Inter:wght@300;400;500;600&display=swap',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Unit Sizes', href: '#unit-types' },
      { label: 'Services', href: '#services' },
      { label: 'Why Us', href: '#features' },
      { label: 'Reviews', href: '#testimonials' },
      { label: 'Location', href: '#location' },
    ],
    ctaLabel: 'Reserve a Unit',
  },

  hero: {
    variant: 'split',
    eyebrow: 'Self Storage · Medellín',
    title: 'Tu espacio, bajo llave y a tu ritmo.',
    text: 'Bodegas de almacenamiento de todos los tamaños, acceso 24/7, cámaras y alarma en cada pasillo. Reserva en línea en menos de 2 minutos.',
    primaryCta: { label: 'Reservar mi bodega', href: '#book' },
    secondaryCta: { label: 'Ver tamaños', href: '#unit-types' },
    trust: [
      { end: 450, suffix: '+', label: 'bodegas en renta' },
      { value: '24/7', label: 'acceso y vigilancia' },
      { end: 9, label: 'años operando' },
    ],
    visualIcon: 'shieldCheck',
    // GlassSurface (React Bits, sin deps): paneles de vidrio esmerilado —
    // transparencia como metáfora de "aquí no hay nada que esconder".
    background: 'glassSurface',
    image: '/images/self-storage/hero.jpg',
    imageAlt: 'Rows of modern self-storage units with roll-up doors',
  },

  // AccordionGallery (React Bits, motor gsap): franjas que se expanden al
  // hover revelando cada tamaño de unidad disponible.
  unitTypes: {
    eyebrow: 'Unit Sizes',
    title: 'Encuentra el tamaño justo',
    intro: 'Pasa el cursor sobre cada tamaño para ver el detalle — así se vería en tu sitio real con fotos de tus propias bodegas.',
    items: [
      { title: 'Pequeña · 1.5 m²', subtitle: 'Cajas y maletas',           image: '/images/self-storage/unit-small.jpg' },
      { title: 'Mediana · 4.5 m²', subtitle: 'Muebles de 1 habitación',   image: '/images/self-storage/unit-medium.jpg' },
      { title: 'Grande · 9 m²',    subtitle: 'Casa completa pequeña',     image: '/images/self-storage/unit-large.jpg' },
      { title: 'XL · 14 m²',       subtitle: 'Inventario de negocio',     image: '/images/self-storage/unit-xl.jpg' },
      { title: 'Vehicular',        subtitle: 'Carro, moto o lancha',      image: '/images/self-storage/unit-vehicle.jpg' },
    ],
  },

  services: {
    eyebrow: 'What We Offer',
    title: 'Todo lo que necesitas para guardar tranquilo',
    intro: 'Sample pricing — this is how the services and rates section would look on your own website.',
    variant: 'grid',
    items: [
      { icon: 'shieldCheck', title: 'Vigilancia 24/7',      text: 'Cámaras en cada pasillo y alarma individual por bodega.',                  price: 'Incluido' },
      { icon: 'clock',       title: 'Acceso cuando quieras', text: 'Entra y sal de tu bodega a cualquier hora, todos los días.',               price: 'Incluido' },
      { icon: 'mapPin',      title: 'Mudanza y transporte',  text: 'Camión y personal para traer tus cosas el día que reservas.',              price: 'Desde $35 USD' },
      { icon: 'leaf',        title: 'Control de clima',      text: 'Bodegas con control de humedad para electrónicos y documentos.',           price: 'Desde $8 USD/mes extra' },
      { icon: 'users',       title: 'Seguro de contenido',   text: 'Cobertura opcional para lo que guardas, sin trámites complicados.',        price: 'Desde $5 USD/mes' },
      { icon: 'phone',       title: 'Soporte en sitio',      text: 'Personal disponible en horario extendido para ayudarte a mudar o acomodar.', price: 'Incluido' },
    ],
  },

  features: {
    eyebrow: 'Why Choose Us',
    title: 'Orden, seguridad y cero sorpresas',
    intro: 'Cuatro razones por las que la gente confía sus cosas con nosotros.',
    items: [
      { icon: 'shieldCheck', title: 'Seguridad real',        text: 'Cámaras, alarmas individuales y acceso con código único por cliente.' },
      { icon: 'clock',       title: 'Flexibilidad total',    text: 'Contratos mes a mes, sin permanencia mínima ni letra pequeña.' },
      { icon: 'mapPin',      title: 'Ubicación accesible',   text: 'Fácil acceso vehicular, pasillos amplios y carretillas gratuitas.' },
      { icon: 'users',       title: 'Precios transparentes', text: 'Lo que ves en la cotización es lo que pagas — sin cargos ocultos.' },
    ],
  },

  testimonials: {
    eyebrow: 'Happy Customers',
    title: 'Lo que dicen nuestros clientes',
    intro: 'Sample testimonials — your website would feature real reviews from your customers.',
    items: [
      { name: 'Felipe A.', role: 'Mudanza temporal',  quote: 'Guardé todos mis muebles por 3 meses mientras me mudaba y todo llegó impecable. El acceso 24/7 me salvó varias veces.' },
      { name: 'Natalia V.', role: 'Inventario de negocio', quote: 'Tengo mi inventario de e-commerce guardado aquí hace un año. Nunca he tenido un problema de seguridad.' },
      { name: 'Jorge M.',   role: 'Bodega vehicular',  quote: 'Guardo mi moto en temporada de lluvias. El espacio es justo y el precio, muy razonable.' },
    ],
  },

  map: {
    eyebrow: 'Find Us',
    title: 'Visítanos',
    intro: 'Entrada vehicular amplia, abierta los 365 días del año.',
    id: 'location',
    query: 'Itagüí, Medellín, Colombia',
    address: 'Cl. 50 Sur #48-30, Itagüí, Antioquia',
    phone: '+57 322 309 2267',
    hours: [
      { days: 'Acceso bodegas', time: '24/7, todos los días' },
      { days: 'Oficina Lun–Sáb', time: '8:00 AM – 6:00 PM' },
      { days: 'Oficina Dom',    time: '9:00 AM – 1:00 PM' },
    ],
  },

  cta: {
    heading: '¿Necesitas espacio extra hoy?',
    text: 'Reserva en línea y mueve tus cosas desde mañana. Primer mes con 15% de descuento.',
    actions: [
      { label: 'Reservar bodega', href: '#want-this' },
      { label: 'Ver todos los tamaños', href: '#want-this', variant: 'outline' },
    ],
  },

  disclosure: {
    heading: 'This is a sample website',
    text: '"SafeBox Storage" is not a real business: this page is a web design example for self-storage facilities, built by Easy Pro Digital. If you run a storage business and want a website like this one (with your brand, your units and real booking), let\'s talk.',
  },
}
