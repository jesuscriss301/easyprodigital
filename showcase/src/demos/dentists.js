// NICHE demo — gets indexed. See src/demos/README.md before duplicating this
// for a new niche or for a specific prospect.
export default {
  slug: 'dentists',
  brand: 'Willowbrook Dental Studio',
  niche: 'Dental Care & Cosmetic Dentistry',
  kind: 'nicho', // 'nicho' (niche) | 'prospecto' (prospect)

  // `primary` here is only for the pill color in the style switcher (so each
  // option previews its own palette instead of inheriting the current
  // page's theme) — keep it in sync with `theme.primary` below/in the
  // sibling files.
  styleVariants: [
    { slug: 'dentists', label: 'Mint Clinical', primary: '#2f8f82' },
    { slug: 'dentists-coral', label: 'Warm Coral', primary: '#e07856' },
    { slug: 'dentists-sky', label: 'Sky Blue', primary: '#3f7fc4' },
    { slug: 'dentists-night', label: 'Midnight Mint', primary: '#4fd9c4' },
  ],

  seo: {
    title: 'Website Design for Dental Clinics & Dentists (Example) | Easy Pro Digital',
    description:
      'A real example website for dental clinics and cosmetic dentistry practices, built by Easy Pro Digital. This is how great your business website can look: services, credentials, patient gallery and more.',
    robots: 'index, follow',
  },

  // Trust-driven profile: features lean on licensing/credentials, hero
  // carries a patient-count/experience stat, map matters (walk-in/office
  // visits).
  layout: {
    order: ['hero', 'services', 'features', 'gallery', 'testimonials', 'map', 'cta'],
  },

  theme: {
    primary: '#2f8f82',
    primaryDark: '#226a60',
    accent: '#f0a24b',
    bg: '#f4fbfa',
    surface: '#ffffff',
    ink: '#1c3230',
    muted: '#5e7a76',
    line: '#dcefec',
    headingFont: "'Lexend', sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Lexend:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Services', href: '#services' },
      { label: 'Why Us', href: '#about' },
      { label: 'Our Office', href: '#gallery' },
      { label: 'Visit Us', href: '#location' },
    ],
    ctaLabel: 'Book an Appointment',
  },

  hero: {
    variant: 'split',
    eyebrow: 'Dental Care & Cosmetic Dentistry',
    title: 'A healthier smile, without the dread of a dental visit',
    text: 'Routine cleanings, whitening, Invisalign and implants from a gentle team that explains every step before it happens.',
    primaryCta: { label: 'Book an Appointment', href: '#book' },
    secondaryCta: { label: 'View Services', href: '#services' },
    trust: [
      { end: 9500, suffix: '+', label: 'patients treated' },
      { value: '4.9 ★', label: 'average rating' },
      { end: 16, label: 'years in practice' },
    ],
    visualIcon: 'tooth',
    // Sin visualFrame a propósito: un barrido de brillo en bucle sobre la
    // foto del hero leía como "efecto de catálogo" en un rubro serio. Para
    // dentistas/abogados la elegancia viene de la restricción (foto limpia,
    // tipografía, espacio), no de una animación constante encima.
    image: '/images/dentists/hero.jpg',
    imageAlt: 'Dentist and patient smiling during a checkup in a bright dental office',
  },

  services: {
    // SpotlightCard (React Bits, adaptación CSS sin deps nuevas): un halo de
    // luz sigue el cursor sobre la tarjeta — como la lámpara del sillón.
    hover: 'spotlight',
    eyebrow: 'What We Do',
    title: 'Dental care for every stage of your smile',
    intro: 'Sample pricing — this is how your services and rates would look on your own website.',
    variant: 'grid',
    items: [
      { icon: 'tooth', title: 'Checkup & Cleaning', text: 'Routine exam, professional cleaning and digital X-rays to catch problems early.', price: 'From $89' },
      { icon: 'sparkle', title: 'Teeth Whitening', text: 'In-office whitening that lifts years of stains in a single visit.', price: 'From $249' },
      { icon: 'smile', title: 'Invisalign & Clear Aligners', text: 'Straighten your teeth discreetly, with checkups every few weeks.', price: 'From $3,200' },
      { icon: 'shieldCheck', title: 'Dental Implants', text: 'A permanent, natural-looking replacement for a missing tooth.', price: 'From $1,800' },
      { icon: 'heart', title: 'Emergency Dental Care', text: 'Same-day relief for pain, breaks and lost fillings — call before you panic.', price: 'From $120' },
      { icon: 'users', title: 'Pediatric Dentistry', text: 'Gentle, patient checkups and cleanings for your kids, from first tooth onward.', price: 'From $69' },
    ],
  },

  features: {
    eyebrow: 'Why Choose Us',
    title: 'A dental practice patients actually keep coming back to',
    intro: 'Four reasons patients trust Willowbrook with their whole family.',
    items: [
      { icon: 'shieldCheck', title: 'Licensed & Accredited', text: 'Board-certified dentists in an ADA-accredited practice — every credential on file.' },
      { icon: 'sparkle', title: 'Modern, Gentle Technology', text: 'Low-radiation digital X-rays and laser treatments mean less discomfort, less waiting.' },
      { icon: 'clock', title: 'Evening & Saturday Slots', text: 'Appointments that fit around work and school, not the other way around.' },
      { icon: 'award', title: 'Insurance-Friendly', text: 'We accept most PPO plans and offer in-house financing for larger treatments.' },
    ],
  },

  gallery: {
    // Editorial (ver styles.css): foto protagonista + dos de apoyo, marco
    // fino en el acento y leyenda en etiqueta flotante — en vez de un grid
    // parejo de tarjetas, que leía como plantilla genérica.
    hover: 'editorial',
    eyebrow: 'Our Office',
    title: 'A clinic designed to feel calm, not clinical',
    intro: 'On your real website, this is where photos of your own office would go.',
    items: [
      { label: 'Treatment Room', image: '/images/dentists/treatment-room.jpg', alt: 'Modern dental treatment room with a dental chair and overhead light' },
      { label: 'Digital X-Ray Suite', image: '/images/dentists/xray.jpg', alt: 'Dentist reviewing a digital dental X-ray on a monitor' },
      { label: 'Smile Consultation', image: '/images/dentists/consultation.jpg', alt: 'Dentist showing a patient a treatment plan on a tablet' },
    ],
  },

  testimonials: {
    eyebrow: 'Happy Patients',
    title: 'What patients say about us',
    intro: 'Sample testimonials — your website would feature real reviews from your patients.',
    items: [
      { name: 'Melissa T.', role: 'Invisalign patient', quote: 'Eighteen months in and my teeth are finally straight. They checked in constantly and never rushed me.' },
      { name: 'Gregory H.', role: 'Implant patient', quote: 'I was dreading the implant. They talked me through every step and it was nothing like I feared.' },
      { name: 'Parent of two patients', role: 'Pediatric client', quote: 'Both my kids actually look forward to the dentist now. That alone is worth it.' },
    ],
  },

  map: {
    eyebrow: 'Visit Us',
    title: 'Conveniently located, easy to reach',
    intro: 'Walk-ins welcome for emergencies — call ahead for everything else.',
    id: 'location',
    query: 'Willowbrook Dental Studio, Raleigh, NC',
    address: '4420 Lake Boone Trail, Raleigh, NC 27607',
    phone: '+1 (919) 555-0142',
    hours: [
      { days: 'Mon – Thu', time: '8:00 AM – 6:00 PM' },
      { days: 'Friday', time: '8:00 AM – 2:00 PM' },
      { days: 'Saturday', time: '9:00 AM – 1:00 PM' },
    ],
  },

  cta: {
    heading: 'Ready for a smile you are not afraid to show?',
    text: 'Book an appointment in minutes — new patients welcome.',
    actions: [
      { label: 'Book an Appointment', href: '#want-this' },
      { label: 'View Services', href: '#want-this', variant: 'outline' },
    ],
  },

  disclosure: {
    heading: 'This is a sample website',
    text: '"Willowbrook Dental Studio" is not a real business: this page is a web design example for dental clinics and cosmetic dentistry practices, built by Easy Pro Digital. If you run a practice like this and want a website like this one (or better, with your brand, your photos and real online booking), let’s talk.',
  },
}
