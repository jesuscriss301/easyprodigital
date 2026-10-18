// NICHE demo — gets indexed. See src/demos/README.md before duplicating this
// for a new niche or for a specific prospect.
export default {
  slug: 'veterinary',
  brand: 'Patitas Felices Vet',
  niche: 'Veterinary Clinic',
  kind: 'nicho',

  seo: {
    title: 'Website Design for Veterinary Clinics (Example) | Easy Pro Digital',
    description:
      'A real example website for veterinary clinics and pet hospitals, built by Easy Pro Digital. Hero that expands on scroll, "our patients" gallery with bouncing cards, services and bookings.',
    robots: 'index, follow',
  },

  layout: {
    // scrollFeature (ScrollExpand) justo después del hero, luego patients
    // (BounceCards), luego el resto.
    order: ['hero', 'scrollFeature', 'patients', 'services', 'features', 'testimonials', 'map', 'cta'],
  },

  theme: {
    primary: '#2a9d8f',          // verde cálido-confianza, nada clínico frío
    primaryDark: '#1f776c',
    accent: '#f4a261',           // naranja mandarina para calidez
    bg: '#fdf9f3',
    surface: '#ffffff',
    ink: '#1f2b2a',
    muted: '#5f6e6d',
    line: '#e8e4dc',
    headingFont: "'Nunito', system-ui, sans-serif",
    bodyFont: "'Nunito Sans', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Nunito:wght@700;800&family=Nunito+Sans:wght@300;400;500;600&display=swap',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Services', href: '#services' },
      { label: 'Patients', href: '#patients' },
      { label: 'Why Us', href: '#features' },
      { label: 'Reviews', href: '#testimonials' },
      { label: 'Location', href: '#location' },
    ],
    ctaLabel: 'Book a Visit',
  },

  hero: {
    variant: 'split',
    eyebrow: 'Veterinary Clinic · Medellín',
    title: 'Cuidamos a los que más quieres.',
    text: 'Medicina preventiva, cirugía, baño y estética para perros y gatos. Un equipo que entiende que tu mascota es parte de la familia.',
    primaryCta: { label: 'Agenda tu cita', href: '#book' },
    secondaryCta: { label: 'Ver servicios', href: '#services' },
    trust: [
      { end: 2000, suffix: '+', label: 'pacientes felices' },
      { value: '4.9 ★', label: 'promedio de reseñas' },
      { end: 10, label: 'años cuidando mascotas' },
    ],
    visualIcon: 'leaf',
    image: '/images/veterinary/hero.jpg',
    imageAlt: 'Veterinarian playing with a happy golden retriever',
  },

  // ScrollExpand (React Bits) — la foto del hero se expande a pantalla
  // completa a medida que haces scroll, dando entrada al resto del sitio.
  scrollFeature: {
    src: '/images/veterinary/scroll-expand.jpg',
    alt: 'Veterinary team examining a cat with warmth and care',
    title: 'Patitas Felices Vet',
    scrollHint: 'Scroll',
  },

  patients: {
    eyebrow: 'Our Patients',
    title: 'Algunos de nuestros pacientes consentidos',
    intro: 'Sample gallery — en tu sitio real, aquí irían fotos de las mascotas que atiendes (con autorización de sus dueños, claro).',
    items: [
      { name: 'Luna',   image: '/images/veterinary/pet-1.jpg', alt: 'Golden retriever smiling at the camera' },
      { name: 'Mochi',  image: '/images/veterinary/pet-2.jpg', alt: 'Grey cat with green eyes' },
      { name: 'Rocky',  image: '/images/veterinary/pet-3.jpg', alt: 'French bulldog puppy sitting on a blanket' },
      { name: 'Nala',   image: '/images/veterinary/pet-4.jpg', alt: 'Tabby cat relaxing' },
      { name: 'Toby',   image: '/images/veterinary/pet-5.jpg', alt: 'Beagle puppy playing outside' },
    ],
  },

  services: {
    eyebrow: 'What We Do',
    title: 'Servicios veterinarios integrales',
    intro: 'Sample pricing — this is how the services and rates section would look on your own website.',
    variant: 'grid',
    items: [
      { icon: 'leaf',       title: 'Consulta general',        text: 'Revisión completa, vacunas y plan de medicina preventiva.',                    price: 'Desde $40 USD' },
      { icon: 'shieldCheck', title: 'Cirugía',                text: 'Esterilizaciones y cirugías de tejidos blandos con quirófano propio.',          price: 'Desde $120 USD' },
      { icon: 'droplet',    title: 'Baño y estética',         text: 'Baño medicado, corte de pelo y cuidado de uñas en ambiente sin estrés.',       price: 'Desde $28 USD' },
      { icon: 'sparkle',    title: 'Odontología',             text: 'Profilaxis dental con ultrasonido y extracciones bajo anestesia.',              price: 'Desde $90 USD' },
      { icon: 'users',      title: 'Hospitalización',         text: 'Monitoreo 24/7 cuando tu mascota necesita quedarse con nosotros.',              price: 'Desde $55 USD/día' },
      { icon: 'phone',      title: 'Urgencias',               text: 'Línea directa en horario extendido para emergencias.',                           price: 'Según servicio' },
    ],
  },

  features: {
    eyebrow: 'Why Choose Us',
    title: 'Un lugar donde las mascotas no tiemblan',
    intro: 'Cuatro razones por las que las familias nos recomiendan.',
    items: [
      { icon: 'award',      title: 'Equipo certificado',      text: 'Médicos veterinarios con especialización y educación continua anual.' },
      { icon: 'waves',      title: 'Ambiente libre de estrés', text: 'Salas separadas para perros y gatos, feromonas y manejo con refuerzo positivo.' },
      { icon: 'shieldCheck', title: 'Quirófano propio',        text: 'No tercerizamos — operamos en nuestras instalaciones con monitoreo completo.' },
      { icon: 'phone',       title: 'Seguimiento post-visita', text: 'Te escribimos al día siguiente para saber cómo sigue tu peludo.' },
    ],
  },

  testimonials: {
    eyebrow: 'Happy Families',
    title: 'Lo que dicen las familias',
    intro: 'Sample testimonials — your website would feature real reviews from your clients.',
    items: [
      { name: 'Andrea M.', role: 'Mamá de Luna',  quote: 'Luna nunca había estado tan tranquila en una veterinaria. El equipo la trata como si fuera suya.' },
      { name: 'Camilo H.', role: 'Papá de Rocky', quote: 'Operaron a mi bulldog y me mandaron fotos y actualizaciones todo el día. Nunca sentí ansiedad.' },
      { name: 'Laura P.',  role: 'Mamá de Mochi', quote: 'Mi gato odia salir de casa, pero aquí se deja revisar sin pelear. Eso ya es magia.' },
    ],
  },

  map: {
    eyebrow: 'Find Us',
    title: 'Visítanos',
    intro: 'Parqueadero gratuito y sala de espera separada para gatos.',
    id: 'location',
    query: 'Laureles, Medellín, Colombia',
    address: 'Cra. 76 #37-20, Laureles, Medellín',
    phone: '+57 322 309 2267',
    hours: [
      { days: 'Lun – Vie', time: '8:00 AM – 7:00 PM' },
      { days: 'Sábado',    time: '9:00 AM – 4:00 PM' },
      { days: 'Domingo',   time: '10:00 AM – 1:00 PM (urgencias)' },
    ],
  },

  cta: {
    heading: '¿Tu peludo necesita una visita?',
    text: 'Agenda en 1 minuto. Primera consulta con 20% de descuento para pacientes nuevos.',
    actions: [
      { label: 'Agendar ahora', href: '#want-this' },
      { label: 'Llamar al vet', href: '#want-this', variant: 'outline' },
    ],
  },

  disclosure: {
    heading: 'This is a sample website',
    text: '"Patitas Felices Vet" is not a real business: this page is a web design example for veterinary clinics, built by Easy Pro Digital. If you run a vet clinic and want a website like this one (with your brand, your team and real booking), let\'s talk.',
  },
}
