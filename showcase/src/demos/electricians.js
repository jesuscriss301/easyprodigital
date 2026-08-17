// NICHE demo — gets indexed. See src/demos/README.md before duplicating this
// for a new niche or for a specific prospect.
export default {
  slug: 'electricians',
  brand: 'BrightVolt Electric',
  niche: 'Electricians & Electrical Contractors',
  kind: 'nicho', // 'nicho' (niche) | 'prospecto' (prospect)

  // `primary` here is only for the pill color in the style switcher (so each
  // option previews its own palette instead of inheriting the current
  // page's theme) — keep it in sync with `theme.primary` below/in the
  // sibling files.
  styleVariants: [
    { slug: 'electricians', label: 'Amp Amber', primary: '#e8940c' },
    { slug: 'electricians-navy', label: 'Circuit Navy', primary: '#12395c' },
    { slug: 'electricians-volt', label: 'High Voltage', primary: '#3d9970' },
  ],

  seo: {
    title: 'Website Design for Electricians (Example) | Easy Pro Digital',
    description:
      'A real example website for electricians and electrical contractors, built by Easy Pro Digital. This is how great your business website can look: services, licensing, service area map and more.',
    robots: 'index, follow',
  },

  // Trust-driven local trade: features (licensing/insurance) stay high,
  // gallery supports rather than leads, map matters a lot.
  layout: {
    order: ['hero', 'services', 'features', 'gallery', 'testimonials', 'map', 'cta'],
  },

  theme: {
    primary: '#e8940c',
    primaryDark: '#b26f04',
    accent: '#1f2a37',
    bg: '#fbf8f2',
    surface: '#ffffff',
    ink: '#20242b',
    muted: '#6f6a5e',
    line: '#ece3d1',
    headingFont: "'Barlow Condensed', sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Services', href: '#services' },
      { label: 'Why Us', href: '#about' },
      { label: 'Our Work', href: '#gallery' },
      { label: 'Service Area', href: '#location' },
    ],
    ctaLabel: 'Get a Free Quote',
  },

  hero: {
    variant: 'split',
    eyebrow: 'Licensed Electricians',
    title: 'Safe, code-compliant electrical work — done right the first time',
    text: 'Panel upgrades, rewiring, EV chargers, lighting and 24/7 emergency repairs. Licensed, insured and upfront about pricing before we touch a single wire.',
    primaryCta: { label: 'Get a Free Quote', href: '#quote' },
    secondaryCta: { label: 'View Services', href: '#services' },
    trust: [
      { end: 15, suffix: '+', label: 'years in the trade' },
      { end: 3200, suffix: '+', label: 'jobs completed' },
      { value: '24/7', label: 'emergency service' },
    ],
    visualIcon: 'bolt',
    // ElectricBorder (React Bits, adaptación CSS sin deps): corriente
    // recorriendo el marco de la foto — el efecto insignia del rubro.
    visualFrame: 'electric',
    image: '/images/electricians/hero.jpg',
    imageAlt: 'Electrician installing a wall outlet',
  },

  services: {
    eyebrow: 'What We Do',
    title: 'Residential and commercial electrical services',
    intro: 'Sample pricing — this is how your services and rates would look on your own website.',
    variant: 'grid',
    items: [
      { icon: 'gauge', title: 'Panel Upgrades', text: 'Replace outdated fuse boxes and undersized panels to safely handle modern loads.', price: 'From $1,200' },
      { icon: 'bolt', title: 'Wiring & Rewiring', text: 'New-construction wiring and full rewires for older homes, all to current code.', price: 'From $90/hr' },
      { icon: 'plug', title: 'Outlets & Switches', text: 'New circuits, GFCI protection, dimmers and smart switches installed cleanly.', price: 'From $120' },
      { icon: 'car', title: 'EV Charger Installation', text: 'Level 2 home chargers installed with permits and load calculations included.', price: 'From $650' },
      { icon: 'sun', title: 'Lighting Design & Install', text: 'Recessed, landscape and security lighting that transforms how your home feels.', price: 'From $180' },
      { icon: 'shieldCheck', title: '24/7 Emergency Repairs', text: 'Power loss, burning smells, tripping breakers — we answer the phone at 2 AM.', price: 'From $150' },
    ],
  },

  features: {
    eyebrow: 'Why Choose Us',
    title: 'The electrician your insurance company wants you to hire',
    intro: 'Four reasons homeowners and businesses trust BrightVolt.',
    items: [
      { icon: 'shieldCheck', title: 'Licensed & Insured', text: 'Master electrician license, full liability coverage and pulled permits on every job that needs one.' },
      { icon: 'award', title: 'Code-Compliant, Guaranteed', text: 'Every installation passes inspection — we stand behind our work with a written warranty.' },
      { icon: 'clock', title: 'On Time, Every Time', text: 'Real appointment windows and a call when we are on the way. Your day matters.' },
      { icon: 'users', title: 'Clean, Respectful Crews', text: 'Shoe covers, drop cloths and a full cleanup before we leave. You will only notice the new lights.' },
    ],
  },

  gallery: {
    eyebrow: 'Our Work',
    title: 'Recent projects',
    intro: 'On your real website, this is where photos of your own installations would go.',
    items: [
      { label: 'Panel Work', image: '/images/electricians/panel.jpg', alt: 'Electrician testing breakers in an electrical panel' },
      { label: 'Clean Rough-In Wiring', image: '/images/electricians/wiring.jpg', alt: 'Electrical wires prepared in a wall outlet box' },
      { label: 'Lighting Install', image: '/images/electricians/lighting.jpg', alt: 'Warm interior pendant lighting installation' },
      { label: 'Pro Tools & Materials', image: '/images/electricians/work.jpg', alt: 'Professional electrician tools laid out' },
    ],
  },

  testimonials: {
    eyebrow: 'Happy Clients',
    title: 'What clients say about us',
    intro: 'Sample testimonials — your website would feature real reviews from your clients.',
    items: [
      { name: 'Daniel R.', role: 'Panel upgrade client', quote: 'They found double-tapped breakers the home inspector missed. Passed inspection first try.' },
      { name: 'Sofia M.', role: 'EV charger client', quote: 'Quoted a flat price, handled the permit, and the charger was running the same day.' },
      { name: 'Property Manager, Oakview Apartments', role: 'Commercial client', quote: 'They service all 40 of our units. Fast response, clean work, invoices that make sense.' },
    ],
  },

  map: {
    eyebrow: 'Service Area',
    title: 'Serving homes and businesses across the metro',
    intro: 'Based locally — call to confirm we cover your address, including same-day emergency calls.',
    id: 'location',
    query: 'BrightVolt Electric, Charlotte, NC',
    address: '1815 South Blvd, Charlotte, NC 28203',
    phone: '+1 (704) 555-0176',
    hours: [
      { days: 'Mon – Fri', time: '7:00 AM – 6:00 PM' },
      { days: 'Saturday', time: '8:00 AM – 2:00 PM' },
      { days: 'Emergencies', time: '24/7' },
    ],
  },

  cta: {
    heading: 'Flickering lights? Planning a remodel?',
    text: 'Get a free, no-pressure quote from a licensed electrician today.',
    actions: [
      { label: 'Get a Free Quote', href: '#want-this' },
      { label: 'View Services', href: '#want-this', variant: 'outline' },
    ],
  },

  disclosure: {
    heading: 'This is a sample website',
    text: '"BrightVolt Electric" is not a real business: this page is a web design example for electricians and electrical contractors, built by Easy Pro Digital. If you run a business like this and want a website like this one (or better, with your brand, your photos and real quote requests), let’s talk.',
  },
}
