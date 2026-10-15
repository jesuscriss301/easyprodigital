// NICHE demo — gets indexed. See src/demos/README.md before duplicating this
// for a new niche or for a specific prospect.
export default {
  slug: 'lawyers',
  brand: 'Sterling & Vance Law Group',
  niche: 'Law Firm & Legal Services',
  kind: 'nicho', // 'nicho' (niche) | 'prospecto' (prospect)

  // `primary` here is only for the pill color in the style switcher (so each
  // option previews its own palette instead of inheriting the current
  // page's theme) — keep it in sync with `theme.primary` below/in the
  // sibling files.
  styleVariants: [
    { slug: 'lawyers', label: 'Navy & Gold', primary: '#1f3a5f' },
    { slug: 'lawyers-ivory', label: 'Ivory & Gold', primary: '#2d5540' },
    { slug: 'lawyers-slate', label: 'Slate Blue', primary: '#43536b' },
    { slug: 'lawyers-night', label: 'Chambers Night', primary: '#d6a74a' },
  ],

  seo: {
    title: 'Website Design for Law Firms & Attorneys (Example) | Easy Pro Digital',
    description:
      'A real example website for law firms and attorneys, built by Easy Pro Digital. This is how great your business website can look: practice areas, credentials, client reviews and more.',
    robots: 'index, follow',
  },

  // Trust-driven profile: features lean on bar licensing/credentials, hero
  // carries a case-count/experience stat, map matters (office visits).
  layout: {
    order: ['hero', 'services', 'features', 'gallery', 'testimonials', 'map', 'cta'],
  },

  theme: {
    primary: '#1f3a5f',
    primaryDark: '#142942',
    accent: '#c9a227',
    bg: '#f7f7f4',
    surface: '#ffffff',
    ink: '#1b2430',
    muted: '#5e6673',
    line: '#e1e2dc',
    headingFont: "'Playfair Display', serif",
    bodyFont: "'Source Sans 3', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Source+Sans+3:wght@300;400;500;600&display=swap',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Practice Areas', href: '#services' },
      { label: 'Why Us', href: '#about' },
      { label: 'Our Office', href: '#gallery' },
      { label: 'Visit Us', href: '#location' },
    ],
    ctaLabel: 'Free Consultation',
  },

  hero: {
    variant: 'split',
    eyebrow: 'Law Firm & Legal Services',
    title: 'Legal help that explains your options before it bills your hours',
    text: 'Family law, personal injury, estate planning and business disputes, handled by attorneys who return your calls.',
    primaryCta: { label: 'Free Consultation', href: '#book' },
    secondaryCta: { label: 'View Practice Areas', href: '#services' },
    trust: [
      { end: 1400, suffix: '+', label: 'cases handled' },
      { value: '4.9 ★', label: 'average rating' },
      { end: 22, label: 'years of practice' },
    ],
    visualIcon: 'scale',
    // StreakFrame (hero.visualFrame: 'streak') — a clean diagonal streak of
    // light crosses the hero photo, like a page turning under a desk lamp.
    // Paired with services.hover 'magnet' and gallery.hover 'peel' below:
    // this three-field combination has not been used together by any other
    // demo (see src/demos/README.md effects table before reusing a single
    // value in a new combo).
    visualFrame: 'streak',
    image: '/images/lawyers/hero.jpg',
    imageAlt: 'Attorney in a suit shaking hands with a client across a desk',
  },

  services: {
    // MagnetCard (React Bits, adaptación CSS sin deps nuevas): la tarjeta se
    // desplaza levemente hacia el cursor, como si lo atrajera — firmeza de
    // despacho legal.
    hover: 'magnet',
    eyebrow: 'Practice Areas',
    title: 'Legal services for individuals, families and businesses',
    intro: 'Sample pricing — this is how your practice areas and rates would look on your own website.',
    variant: 'grid',
    items: [
      { icon: 'handHeart', title: 'Family Law', text: 'Divorce, custody and support agreements handled with a steady, practical hand.', price: 'From $150/hr' },
      { icon: 'shieldCheck', title: 'Personal Injury Claims', text: 'Car accidents, slip-and-falls and workplace injuries — no fee unless we win.', price: 'Free consultation' },
      { icon: 'fileText', title: 'Estate Planning & Wills', text: 'Wills, trusts and powers of attorney that keep your wishes out of probate court.', price: 'From $450' },
      { icon: 'briefcase', title: 'Business & Contract Law', text: 'Formation, contracts and disputes for small businesses and startups.', price: 'From $300/hr' },
      { icon: 'house', title: 'Real Estate Closings', text: 'Residential and commercial closings reviewed line by line before you sign.', price: 'From $650' },
      { icon: 'gavel', title: 'Criminal Defense', text: 'Misdemeanor and felony defense from arraignment through trial.', price: 'From $200/hr' },
    ],
  },

  features: {
    eyebrow: 'Why Choose Us',
    title: 'A law firm clients actually refer to their family',
    intro: 'Four reasons clients trust Sterling & Vance with their case.',
    items: [
      { icon: 'scale', title: 'Licensed & Bar-Certified', text: 'Every attorney is licensed in-state and an active member of the state bar association.' },
      { icon: 'heart', title: 'Free Initial Consultation', text: 'A no-cost, no-pressure case review before you commit to anything.' },
      { icon: 'fileText', title: 'Clear, Flat-Fee Options', text: 'Transparent pricing on wills, closings and other common matters — no surprise invoices.' },
      { icon: 'phone', title: 'Direct Attorney Access', text: 'You talk to the attorney on your case, not a rotating cast of paralegals.' },
    ],
  },

  gallery: {
    // PeelReveal (React Bits, adaptación CSS sin deps nuevas): la foto se
    // despega como una hoja de papel al pasar el cursor — el gesto de pasar
    // una página de un expediente.
    hover: 'peel',
    eyebrow: 'Our Office',
    title: 'A firm built for candid conversations',
    intro: 'On your real website, this is where photos of your own office would go.',
    items: [
      { label: 'Consultation Room', image: '/images/lawyers/consultation-room.jpg', alt: 'Attorney and clients in a consultation meeting around a wooden table' },
      { label: 'Law Library', image: '/images/lawyers/library.jpg', alt: 'Law library with rows of legal reference books' },
      { label: 'Case File Review', image: '/images/lawyers/filing.jpg', alt: 'Attorney reviewing case documents and files at a desk' },
    ],
  },

  testimonials: {
    eyebrow: 'Happy Clients',
    title: 'What clients say about us',
    intro: 'Sample testimonials — your website would feature real reviews from your clients.',
    items: [
      { name: 'Rachel D.', role: 'Family law client', quote: 'They walked me through the whole custody process in plain English, no legal jargon, no runaround.' },
      { name: 'Marcus B.', role: 'Personal injury client', quote: 'They handled the insurance company so I did not have to. Settled for triple their first offer.' },
      { name: 'Owner, Finch & Co.', role: 'Business client', quote: 'Our contracts finally hold up. They review everything before we sign, not after something goes wrong.' },
    ],
  },

  map: {
    eyebrow: 'Visit Us',
    title: 'Conveniently located downtown',
    intro: 'Evening and weekend consultations available by request.',
    id: 'location',
    query: 'Sterling & Vance Law Group, Minneapolis, MN',
    address: '800 Nicollet Mall, Minneapolis, MN 55402',
    phone: '+1 (612) 555-0187',
    hours: [
      { days: 'Mon – Fri', time: '8:30 AM – 6:00 PM' },
      { days: 'Saturday', time: 'By appointment' },
    ],
  },

  cta: {
    heading: 'Facing a legal issue you cannot ignore?',
    text: 'Get a free, confidential consultation with an attorney today.',
    actions: [
      { label: 'Free Consultation', href: '#want-this' },
      { label: 'View Practice Areas', href: '#want-this', variant: 'outline' },
    ],
  },

  disclosure: {
    heading: 'This is a sample website',
    text: '"Sterling & Vance Law Group" is not a real business: this page is a web design example for law firms and attorneys, built by Easy Pro Digital. If you run a firm like this and want a website like this one (or better, with your brand, your photos and real consultation requests), let’s talk.',
  },
}
