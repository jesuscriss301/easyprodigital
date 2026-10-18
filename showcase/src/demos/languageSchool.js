// NICHE demo — gets indexed. See src/demos/README.md before duplicating this
// for a new niche or for a specific prospect.
export default {
  slug: 'language-school',
  brand: 'Políglota Academy',
  niche: 'Language School',
  kind: 'nicho',

  seo: {
    title: 'Website Design for Language Schools (Example) | Easy Pro Digital',
    description:
      'A real example website for language schools and academies, built by Easy Pro Digital. Clean hero with rotating greetings, courses, teachers and testimonials — ready for your brand.',
    robots: 'index, follow',
  },

  layout: {
    order: ['hero', 'services', 'features', 'gallery', 'testimonials', 'map', 'cta'],
  },

  theme: {
    primary: '#2e5bff',          // azul confianza, "idiomas"
    primaryDark: '#1a3bb3',
    accent: '#ffb547',           // acento cálido tipo bandera
    bg: '#f7f8ff',
    surface: '#ffffff',
    ink: '#15172b',
    muted: '#5f6480',
    line: '#e4e6f5',
    headingFont: "'Fraunces', Georgia, serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Inter:wght@300;400;500;600&display=swap',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Courses', href: '#services' },
      { label: 'Why Us', href: '#features' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Reviews', href: '#testimonials' },
      { label: 'Location', href: '#location' },
    ],
    ctaLabel: 'Book a Free Trial',
  },

  hero: {
    variant: 'split',
    eyebrow: 'Language School · 5 Idiomas',
    title: 'Habla el idioma, vive el país.',
    text: 'Clases en grupos pequeños, profesores nativos y una metodología que te hace hablar desde la primera semana. Inglés, español, francés, chino mandarín y japonés.',
    primaryCta: { label: 'Reserva tu clase gratis', href: '#book' },
    secondaryCta: { label: 'Ver cursos', href: '#services' },
    trust: [
      { end: 1200, suffix: '+', label: 'estudiantes activos' },
      { value: '5 idiomas', label: 'enseñados por nativos' },
      { end: 12, label: 'años en Medellín' },
    ],
    visualIcon: 'sparkle',
    // DotField (React Bits, sin deps): puntos sutiles que reaccionan al
    // cursor — fondo tranquilo que no compite con la pila de tarjetas.
    background: 'dotField',
    // CardSwap (React Bits, motor motion): tarjetas rotando con un saludo
    // + lugar icónico de cada idioma — reemplaza la foto del hero.
    heroEffect: {
      type: 'cardSwap',
      props: {
        interval: 2800,
        items: [
          { greeting: 'Hello',    language: 'English',           image: '/images/language-school/hello-london.jpg',    alt: 'Big Ben in London on a sunny day' },
          { greeting: 'Hola',     language: 'Español',           image: '/images/language-school/hola-madrid.jpg',     alt: 'Plaza Mayor in Madrid at golden hour' },
          { greeting: 'Bonjour',  language: 'Français',          image: '/images/language-school/bonjour-paris.jpg',   alt: 'Eiffel Tower seen from a Paris street' },
          { greeting: '你好',       language: '中文 · Mandarin',    image: '/images/language-school/nihao-greatwall.jpg', alt: 'Great Wall of China on a misty morning' },
          { greeting: 'こんにちは',   language: '日本語 · Japanese',  image: '/images/language-school/konnichiwa-kyoto.jpg', alt: 'Torii gates at Fushimi Inari shrine, Kyoto' },
        ],
      },
    },
    // ScrambledText (gsap) en el eyebrow + BlurText (motion) en el párrafo.
    textEffect: 'languageSchool',
  },

  services: {
    eyebrow: 'Our Courses',
    title: 'Un idioma por cada motivación',
    intro: 'Sample pricing — this is how the courses and rates section would look on your own website.',
    variant: 'grid',
    items: [
      { icon: 'sparkle', title: 'Inglés General',       text: 'A1 a C1 — niveles alineados con el Marco Común Europeo. Clases 2x por semana.',             price: 'Desde $120 USD/mes' },
      { icon: 'brush',   title: 'Español para Extranjeros', text: 'DELE y uso diario. Grupos reducidos de hasta 6 estudiantes.',                        price: 'Desde $140 USD/mes' },
      { icon: 'leaf',    title: 'Francés',               text: 'DELF/DALF, con énfasis en conversación y comprensión auditiva.',                        price: 'Desde $130 USD/mes' },
      { icon: 'sun',     title: 'Chino Mandarín',        text: 'HSK 1-4 con profesor nativo. Incluye introducción a caracteres y pinyin.',               price: 'Desde $160 USD/mes' },
      { icon: 'flower',  title: 'Japonés',               text: 'JLPT N5-N3, cultura japonesa integrada en cada clase.',                                   price: 'Desde $160 USD/mes' },
      { icon: 'droplet', title: 'Business English',      text: 'Para profesionales que necesitan presentar, negociar y escribir en inglés.',             price: 'Desde $180 USD/mes' },
    ],
  },

  features: {
    eyebrow: 'Why Choose Us',
    title: 'Una academia pensada para que hables, no solo estudies',
    intro: 'Cuatro razones por las que nuestros estudiantes se quedan curso tras curso.',
    items: [
      { icon: 'users',   title: 'Grupos pequeños',          text: 'Máximo 6 estudiantes por clase. Hablas más, el profesor te corrige más.' },
      { icon: 'award',   title: 'Profesores nativos',       text: 'Todos nuestros docentes son nativos del idioma y certificados en enseñanza.' },
      { icon: 'waves',   title: 'Metodología conversacional', text: 'Desde la primera clase hablas. Nada de meses de gramática antes de abrir la boca.' },
      { icon: 'clock',   title: 'Horarios flexibles',       text: 'Clases en la mañana, tarde, noche y sábados. Virtual o presencial.' },
    ],
  },

  gallery: {
    eyebrow: 'Our Classroom',
    title: 'Un espacio para aprender hablando',
    intro: 'En tu sitio real, aquí irían las fotos de tus salones, eventos culturales y estudiantes.',
    items: [
      { label: 'Classroom', image: '/images/language-school/classroom.jpg', alt: 'Small language class with students practicing conversation' },
      { label: 'Teachers',  image: '/images/language-school/teachers.jpg',  alt: 'Language teacher explaining on a whiteboard' },
      { label: 'Event',     image: '/images/language-school/event.jpg',     alt: 'Students enjoying an international culture night' },
      { label: 'Online',    image: '/images/language-school/online.jpg',    alt: 'Student taking an online language class on a laptop' },
    ],
  },

  testimonials: {
    eyebrow: 'Happy Students',
    title: 'Lo que dicen nuestros estudiantes',
    intro: 'Sample testimonials — your website would feature real reviews from your students.',
    items: [
      { name: 'Daniel R.', role: 'Business English, nivel B2', quote: 'En 6 meses pasé de bloquearme en reuniones a liderarlas en inglés. Las clases en grupos pequeños fueron la clave.' },
      { name: 'María S.',  role: 'Francés, nivel A2',          quote: 'Me preparé para irme a Montreal y llegué hablando. La metodología conversacional funciona de verdad.' },
      { name: 'Camila P.', role: 'Japonés, JLPT N5',           quote: 'Pensé que el japonés iba a ser imposible, y a los 4 meses ya pedía sushi en Tokio como local.' },
    ],
  },

  map: {
    eyebrow: 'Find Us',
    title: 'Visítanos en Medellín',
    intro: 'Pasa por nuestra sede o toma la clase de muestra online — tú eliges.',
    id: 'location',
    query: 'El Poblado, Medellín, Colombia',
    address: 'Cl. 10 #43B-15, El Poblado, Medellín',
    phone: '+57 322 309 2267',
    hours: [
      { days: 'Lun – Vie', time: '7:00 AM – 9:00 PM' },
      { days: 'Sábado',    time: '8:00 AM – 2:00 PM' },
      { days: 'Domingo',   time: 'Cerrado' },
    ],
  },

  cta: {
    heading: '¿Listo para hablar un nuevo idioma?',
    text: 'Agenda tu clase gratuita de 45 minutos. Sin tarjeta, sin compromiso.',
    actions: [
      { label: 'Reservar clase gratis', href: '#want-this' },
      { label: 'Ver todos los cursos', href: '#want-this', variant: 'outline' },
    ],
  },

  disclosure: {
    heading: 'This is a sample website',
    text: '"Políglota Academy" is not a real business: this page is a web design example for language schools, built by Easy Pro Digital. If you run a language academy and want a website like this (with your brand, your teachers and real booking), let\'s talk.',
  },
}
