// NICHE demo — gets indexed. See src/demos/README.md before duplicating this
// for a new niche or for a specific prospect.
export default {
  slug: 'veterinary',
  brand: 'Patitas Felices Vet',
  niche: 'Veterinary Clinic',
  valueProps: [
    `Book appointments online instead of answering WhatsApp all day`,
    `Automatic vaccine reminders that bring clients back`,
    `A visible emergency button`,
  ],
  kind: 'nicho',

  seo: {
    title: 'Website Design for Veterinary Clinics (Live Example) | Easy Pro Digital',
    description:
      'A real example website for veterinary clinics and pet hospitals, built by Easy Pro Digital. Hero that expands on scroll, "our patients" gallery with bouncing cards, services and bookings.',
    robots: 'index, follow',
  },

  layout: {
    // scrollFeature (ScrollExpand) justo después del hero, luego patients
    // (BounceCards), luego el resto.
    order: ['hero', 'valueProps', 'scrollFeature', 'patients', 'services', 'features', 'testimonials', 'map', 'cta'],
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
    title: 'Caring for the ones you love most.',
    text: 'Preventive medicine, surgery, grooming and spa care for dogs and cats. A team that understands your pet is part of the family.',
    primaryCta: { label: 'Book Your Visit', href: '#book' },
    secondaryCta: { label: 'See Services', href: '#services' },
    trust: [
      { end: 2000, suffix: '+', label: 'happy patients' },
      { value: '4.9 ★', label: 'average review score' },
      { end: 10, label: 'years caring for pets' },
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
    title: 'A few of our most spoiled patients',
    intro: 'Sample gallery — on your real website, this is where photos of the pets you care for would go (with their owners’ permission, of course).',
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
    title: 'Comprehensive veterinary services',
    intro: 'Sample pricing — this is how the services and rates section would look on your own website.',
    variant: 'grid',
    items: [
      { icon: 'leaf',       title: 'General Checkup',        text: 'Complete exam, vaccines and a preventive medicine plan.',                       price: 'From $40' },
      { icon: 'shieldCheck', title: 'Surgery',                text: 'Spays, neuters and soft-tissue surgeries in our own operating room.',           price: 'From $120' },
      { icon: 'droplet',    title: 'Grooming & Spa',          text: 'Medicated baths, haircuts and nail care in a stress-free setting.',             price: 'From $28' },
      { icon: 'sparkle',    title: 'Dentistry',               text: 'Ultrasonic dental cleanings and extractions under anesthesia.',                 price: 'From $90' },
      { icon: 'users',      title: 'Hospitalization',         text: '24/7 monitoring when your pet needs to stay with us.',                          price: 'From $55/day' },
      { icon: 'phone',      title: 'Emergencies',             text: 'A direct line during extended hours for emergencies.',                          price: 'Varies by service' },
    ],
  },

  features: {
    eyebrow: 'Why Choose Us',
    title: 'A place where pets don’t tremble',
    intro: 'Four reasons families recommend us.',
    items: [
      { icon: 'award',      title: 'Certified Team',          text: 'Veterinarians with specialties and annual continuing education.' },
      { icon: 'waves',      title: 'Stress-Free Environment', text: 'Separate dog and cat rooms, pheromones and positive-reinforcement handling.' },
      { icon: 'shieldCheck', title: 'Our Own Operating Room',  text: 'We don’t outsource — we operate in our own facility with full monitoring.' },
      { icon: 'phone',       title: 'Post-Visit Follow-Up',   text: 'We text you the next day to see how your furry friend is doing.' },
    ],
  },

  testimonials: {
    eyebrow: 'Happy Families',
    title: 'What families say',
    intro: 'Sample testimonials — your website would feature real reviews from your clients.',
    items: [
      { name: 'Andrea M.', role: 'Luna’s mom',  quote: 'Luna had never been so calm at a vet’s office. The team treats her like she’s theirs.' },
      { name: 'Camilo H.', role: 'Rocky’s dad', quote: 'They operated on my bulldog and sent me photos and updates all day. I never felt anxious.' },
      { name: 'Laura P.',  role: 'Mochi’s mom', quote: 'My cat hates leaving home, but here she lets them examine her without a fight. That’s magic.' },
    ],
  },

  map: {
    eyebrow: 'Find Us',
    title: 'Visit Us',
    intro: 'Free parking and a separate waiting room for cats.',
    id: 'location',
    query: 'Laureles, Medellín, Colombia',
    address: 'Cra. 76 #37-20, Laureles, Medellín',
    phone: '+57 322 309 2267',
    hours: [
      { days: 'Mon – Fri', time: '8:00 AM – 7:00 PM' },
      { days: 'Saturday',    time: '9:00 AM – 4:00 PM' },
      { days: 'Sunday',   time: '10:00 AM – 1:00 PM (emergencies)' },
    ],
  },

  cta: {
    heading: 'Does your furry friend need a visit?',
    text: 'Book in under a minute. First visit 20% off for new patients.',
    actions: [
      { label: 'Book Now', href: '#want-this' },
      { label: 'Call the Vet', href: '#want-this', variant: 'outline' },
    ],
  },

}
