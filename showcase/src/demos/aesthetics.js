// NICHE demo — gets indexed. See src/demos/README.md before duplicating this
// for a new niche or for a specific prospect.
export default {
  slug: 'aesthetics',
  brand: 'Lumora Aesthetic Clinic',
  niche: 'Medical Aesthetics & Cosmetic Treatments',
  kind: 'nicho', // 'nicho' (niche) | 'prospecto' (prospect)

  // `primary` here is only for the pill color in the style switcher (so each
  // option previews its own palette instead of inheriting the current
  // page's theme) — keep it in sync with `theme.primary` below/in the
  // sibling files.
  styleVariants: [
    { slug: 'aesthetics', label: 'Blush & Gold', primary: '#c17f8a' },
    { slug: 'aesthetics-terracotta', label: 'Terracotta Clay', primary: '#b5684a' },
    { slug: 'aesthetics-champagne', label: 'Champagne Taupe', primary: '#a98a5c' },
    { slug: 'aesthetics-night', label: 'Midnight Blush', primary: '#e8a9b5' },
  ],

  seo: {
    title: 'Website Design for Medical Aesthetics & Medspas (Example) | Easy Pro Digital',
    description:
      'A real example website for medical aesthetics clinics and medspas, built by Easy Pro Digital. This is how great your business website can look: treatments, credentials, patient gallery and more.',
    robots: 'index, follow',
  },

  // Trust-driven, visual trade: licensing/credentials matter as much as the
  // photos. Gallery uses the editorial layout (see styles.css) — a feature
  // photo + two supporting photos — instead of a uniform grid, and the
  // service cards keep a single quiet hover accent rather than a loud one.
  layout: {
    order: ['hero', 'services', 'features', 'gallery', 'testimonials', 'map', 'cta'],
  },

  theme: {
    primary: '#c17f8a',
    primaryDark: '#9c5f69',
    accent: '#caa057',
    bg: '#fdf8f4',
    surface: '#ffffff',
    ink: '#2e2420',
    muted: '#8a7a72',
    line: '#ead9cf',
    headingFont: "'Cormorant Garamond', serif",
    bodyFont: "'Jost', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Jost:wght@300;400;500;600&display=swap',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Treatments', href: '#services' },
      { label: 'Why Us', href: '#about' },
      { label: 'Our Clinic', href: '#gallery' },
      { label: 'Visit Us', href: '#location' },
    ],
    ctaLabel: 'Book a Consultation',
  },

  hero: {
    variant: 'split',
    eyebrow: 'Medical Aesthetics & Cosmetic Treatments',
    title: 'Look like the most rested, radiant version of yourself',
    text: 'Botox, fillers, laser and skin treatments from licensed medical providers who never oversell — just honest guidance and natural-looking results.',
    primaryCta: { label: 'Book a Consultation', href: '#book' },
    secondaryCta: { label: 'View Treatments', href: '#services' },
    trust: [
      { end: 6200, suffix: '+', label: 'treatments performed' },
      { value: '4.9 ★', label: 'average rating' },
      { end: 11, label: 'years in practice' },
    ],
    visualIcon: 'sparkle',
    // HaloGlow (hero.visualFrame: 'halo') — a soft, slow-breathing glow
    // around the hero photo, the one signature effect for this demo (user
    // asked for "media" animation level): reads as luminous/radiant skin,
    // not a gimmick, and never loops fast enough to feel "techy".
    visualFrame: 'halo',
    image: '/images/aesthetics/hero.jpg',
    imageAlt: 'Patient relaxing during a facial treatment at a modern medical spa',
  },

  services: {
    // GlassCard (React Bits, adaptación CSS sin deps nuevas): borde y fondo
    // tipo vidrio esmerilado al pasar el cursor — acabado de spa, no de app.
    hover: 'glass',
    eyebrow: 'Treatments',
    title: 'Aesthetic treatments tailored to your skin, not a template',
    intro: 'Sample pricing — this is how your treatments and rates would look on your own website.',
    variant: 'grid',
    items: [
      { icon: 'syringe', title: 'Botox & Anti-Wrinkle Injections', text: 'Softens fine lines around the eyes, forehead and brows — natural movement, no frozen look.', price: 'From $12/unit' },
      { icon: 'droplet', title: 'Dermal Fillers', text: 'Restore volume in lips, cheeks and under-eyes with FDA-approved hyaluronic acid fillers.', price: 'From $650' },
      { icon: 'bolt', title: 'Laser Hair Removal', text: 'Long-term hair reduction for face and body, safe for most skin tones.', price: 'From $89/session' },
      { icon: 'sparkle', title: 'Chemical Peels', text: 'Resurface dull, uneven skin and fade dark spots in a single in-office visit.', price: 'From $150' },
      { icon: 'needle', title: 'Microneedling with PRP', text: 'Your own platelet-rich plasma boosts collagen for smoother, firmer skin.', price: 'From $350' },
      { icon: 'flower', title: 'HydraFacial', text: 'A deep-cleansing, hydrating facial with zero downtime — book it on your lunch break.', price: 'From $175' },
    ],
  },

  features: {
    eyebrow: 'Why Choose Us',
    title: 'A clinic patients trust with their face',
    intro: 'Four reasons patients choose Lumora for their aesthetic care.',
    items: [
      { icon: 'shieldCheck', title: 'Licensed Medical Providers', text: 'Every injector is a licensed RN, NP or physician — not a weekend-certified technician.' },
      { icon: 'award', title: 'FDA-Cleared Technology', text: 'We use only FDA-approved injectables, lasers and devices, never off-brand alternatives.' },
      { icon: 'lock', title: 'Private, Discreet Suites', text: 'Separate entrances and private treatment rooms — come and go without a waiting-room audience.' },
      { icon: 'handHeart', title: 'Personalized Treatment Plans', text: 'Every plan starts with a consultation, not a sales script — we tell you what you do not need, too.' },
    ],
  },

  gallery: {
    // Editorial (ver styles.css): foto protagonista + dos de apoyo, marco
    // fino en el acento y leyenda en etiqueta flotante — en vez de un grid
    // parejo de tarjetas.
    hover: 'editorial',
    eyebrow: 'Our Clinic',
    title: 'A clinic designed to feel more spa than hospital',
    intro: 'On your real website, this is where photos of your own clinic would go.',
    items: [
      { label: 'Treatment Suite', image: '/images/aesthetics/treatment-suite.jpg', alt: 'Private medical aesthetics treatment room with a reclining chair and soft lighting' },
      { label: 'Consultation Lounge', image: '/images/aesthetics/consultation-lounge.jpg', alt: 'Elegant consultation lounge with neutral furniture for pre-treatment discussions' },
      { label: 'Relaxation Area', image: '/images/aesthetics/relaxation-area.jpg', alt: 'Calm relaxation area with soft seating for patients before and after treatments' },
    ],
  },

  testimonials: {
    eyebrow: 'Happy Patients',
    title: 'What patients say about us',
    intro: 'Sample testimonials — your website would feature real reviews from your patients.',
    items: [
      { name: 'Danielle K.', role: 'Botox patient', quote: 'Three years in and nobody can tell I get anything done — just that I look less tired. Exactly what I wanted.' },
      { name: 'Priya S.', role: 'Filler patient', quote: 'They talked me out of doing more than I needed. I trust them more because of that, not less.' },
      { name: 'Monica R.', role: 'HydraFacial regular', quote: 'My monthly facial is the one hour nobody can reach me. Worth every minute.' },
    ],
  },

  map: {
    eyebrow: 'Visit Us',
    title: 'Conveniently located, easy to reach',
    intro: 'Evening appointments available for patients who cannot get away during the day.',
    id: 'location',
    query: 'Lumora Aesthetic Clinic, Scottsdale, AZ',
    address: '7301 E Shea Blvd, Scottsdale, AZ 85255',
    phone: '+1 (480) 555-0163',
    hours: [
      { days: 'Mon – Fri', time: '9:00 AM – 6:00 PM' },
      { days: 'Saturday', time: '10:00 AM – 3:00 PM' },
    ],
  },

  cta: {
    heading: 'Ready to see what a little refresh can do?',
    text: 'Book a free consultation — no pressure, no sales pitch.',
    actions: [
      { label: 'Book a Consultation', href: '#want-this' },
      { label: 'View Treatments', href: '#want-this', variant: 'outline' },
    ],
  },

  disclosure: {
    heading: 'This is a sample website',
    text: '"Lumora Aesthetic Clinic" is not a real business: this page is a web design example for medical aesthetics clinics and medspas, built by Easy Pro Digital. If you run a clinic like this and want a website like this one (or better, with your brand, your photos and real booking requests), let’s talk.',
  },
}
