// NICHE demo — gets indexed. See src/demos/README.md before duplicating this
// for a new niche or for a specific prospect.
export default {
  slug: 'language-school',
  brand: 'Políglota Academy',
  niche: 'Language School',
  valueProps: [
    `Free trial class that books itself`,
    `Online level test that captures leads`,
    `Full classes with a waiting list`,
  ],
  kind: 'nicho',

  seo: {
    title: 'Website Design for Language Schools (Live Example) | Easy Pro Digital',
    description:
      'A real example website for language schools and academies, built by Easy Pro Digital. Clean hero with rotating greetings, courses, teachers and testimonials — ready for your brand.',
    robots: 'index, follow',
  },

  layout: {
    order: ['hero', 'valueProps', 'services', 'features', 'gallery', 'testimonials', 'map', 'cta'],
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
    eyebrow: 'Language School · 5 Languages',
    title: 'Speak the language, live the country.',
    text: 'Small-group classes, native teachers and a method that gets you speaking from the first week. English, Spanish, French, Mandarin Chinese and Japanese.',
    primaryCta: { label: 'Book Your Free Class', href: '#book' },
    secondaryCta: { label: 'See Courses', href: '#services' },
    trust: [
      { end: 1200, suffix: '+', label: 'active students' },
      { value: '5 languages', label: 'taught by natives' },
      { end: 12, label: 'years in Medellín' },
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
    title: 'A language for every motivation',
    intro: 'Sample pricing — this is how the courses and rates section would look on your own website.',
    variant: 'grid',
    items: [
      { icon: 'sparkle', title: 'General English',       text: 'A1 to C1 — levels aligned with the Common European Framework. Classes twice a week.',             price: 'From $120/mo' },
      { icon: 'brush',   title: 'Spanish for Foreigners', text: 'DELE prep and everyday use. Small groups of up to 6 students.',                        price: 'From $140/mo' },
      { icon: 'leaf',    title: 'French',               text: 'DELF/DALF, with an emphasis on conversation and listening comprehension.',                        price: 'From $130/mo' },
      { icon: 'sun',     title: 'Mandarin Chinese',        text: 'HSK 1-4 with a native teacher. Includes an introduction to characters and pinyin.',               price: 'From $160/mo' },
      { icon: 'flower',  title: 'Japanese',               text: 'JLPT N5-N3, with Japanese culture integrated into every class.',                                   price: 'From $160/mo' },
      { icon: 'droplet', title: 'Business English',      text: 'For professionals who need to present, negotiate and write in English.',             price: 'From $180/mo' },
    ],
  },

  features: {
    eyebrow: 'Why Choose Us',
    title: 'An academy built for you to speak, not just study',
    intro: 'Four reasons our students stay course after course.',
    items: [
      { icon: 'users',   title: 'Small Groups',          text: 'A maximum of 6 students per class. You speak more, the teacher corrects you more.' },
      { icon: 'award',   title: 'Native Teachers',       text: 'All our teachers are native speakers of the language and certified to teach.' },
      { icon: 'waves',   title: 'Conversational Method', text: 'You speak from the first class. No months of grammar before you open your mouth.' },
      { icon: 'clock',   title: 'Flexible Schedules',       text: 'Classes in the morning, afternoon, evening and on Saturdays. Online or in person.' },
    ],
  },

  gallery: {
    eyebrow: 'Our Classroom',
    title: 'A space to learn by speaking',
    intro: 'On your real website, this is where photos of your classrooms, cultural events and students would go.',
    items: [
      { label: 'Classroom', image: '/images/language-school/classroom.jpg', alt: 'Small language class with students practicing conversation' },
      { label: 'Teachers',  image: '/images/language-school/teachers.jpg',  alt: 'Language teacher explaining on a whiteboard' },
      { label: 'Event',     image: '/images/language-school/event.jpg',     alt: 'Students enjoying an international culture night' },
      { label: 'Online',    image: '/images/language-school/online.jpg',    alt: 'Student taking an online language class on a laptop' },
    ],
  },

  testimonials: {
    eyebrow: 'Happy Students',
    title: 'What our students say',
    intro: 'Sample testimonials — your website would feature real reviews from your students.',
    items: [
      { name: 'Daniel R.', role: 'Business English, B2 level', quote: 'In 6 months I went from freezing up in meetings to leading them in English. The small-group classes were the key.' },
      { name: 'María S.',  role: 'French, A2 level',          quote: 'I prepared to move to Montreal and arrived speaking. The conversational method really works.' },
      { name: 'Camila P.', role: 'Japanese, JLPT N5',           quote: 'I thought Japanese would be impossible, and 4 months later I was ordering sushi in Tokyo like a local.' },
    ],
  },

  map: {
    eyebrow: 'Find Us',
    title: 'Visit Us in Medellín',
    intro: 'Stop by our campus or take the sample class online — you choose.',
    id: 'location',
    query: 'El Poblado, Medellín, Colombia',
    address: 'Cl. 10 #43B-15, El Poblado, Medellín',
    phone: '+57 322 309 2267',
    hours: [
      { days: 'Mon – Fri', time: '7:00 AM – 9:00 PM' },
      { days: 'Saturday',    time: '8:00 AM – 2:00 PM' },
      { days: 'Sunday',   time: 'Closed' },
    ],
  },

  cta: {
    heading: 'Ready to speak a new language?',
    text: 'Book your free 45-minute class. No card, no commitment.',
    actions: [
      { label: 'Book a Free Class', href: '#want-this' },
      { label: 'See All Courses', href: '#want-this', variant: 'outline' },
    ],
  },

}
