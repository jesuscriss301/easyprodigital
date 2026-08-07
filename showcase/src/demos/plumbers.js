// NICHE demo — gets indexed. See src/demos/README.md before duplicating this
// for a new niche or for a specific prospect.
export default {
  slug: 'plumbers',
  brand: 'Reliable Flow Plumbing',
  niche: 'Residential & Commercial Plumbing',
  kind: 'nicho', // 'nicho' (niche) | 'prospecto' (prospect)

  // `primary` here is only for the pill color in the style switcher (so each
  // option previews its own palette instead of inheriting the current
  // page's theme) — keep it in sync with `theme.primary` below/in the
  // sibling files.
  styleVariants: [
    { slug: 'plumbers', label: 'Reliable Blue', primary: '#1d6fa5' },
    { slug: 'plumbers-emergency', label: 'Emergency Orange', primary: '#d9531e' },
    { slug: 'plumbers-steel', label: 'Steel Navy', primary: '#2c3e50' },
  ],

  seo: {
    title: 'Website Design for Plumbers (Example) | Easy Pro Digital',
    description:
      'A real example website for residential and commercial plumbing businesses, built by Easy Pro Digital. This is how great your business website can look: services, project gallery, service area map and more.',
    robots: 'index, follow',
  },

  // Controls which sections render and in what order. Any subset/order of
  // 'hero' | 'services' | 'features' | 'gallery' | 'testimonials' | 'map' |
  // 'cta' is valid — DemoPage.jsx renders whatever is listed here, skipping
  // the rest.
  layout: {
    order: ['hero', 'services', 'features', 'gallery', 'testimonials', 'map', 'cta'],
  },

  theme: {
    primary: '#1d6fa5',
    primaryDark: '#124a70',
    accent: '#e8871e',
    bg: '#f4f9fc',
    surface: '#ffffff',
    ink: '#152633',
    muted: '#5b7185',
    line: '#dbe7ef',
    headingFont: "'Barlow Condensed', sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Inter:wght@300;400;500;600&display=swap',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Services', href: '#services' },
      { label: 'Why Us', href: '#about' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Service Area', href: '#location' },
    ],
    ctaLabel: 'Schedule Service',
  },

  hero: {
    variant: 'split',
    eyebrow: 'Residential & Commercial Plumbing',
    title: 'Fast, honest plumbing repairs — done right the first time',
    text: 'Drain cleaning, water heaters, leak detection and emergency repairs from licensed plumbers who show up on time and explain every fix.',
    primaryCta: { label: 'Schedule Service', href: '#book' },
    secondaryCta: { label: 'View Services', href: '#services' },
    trust: [
      { end: 20, suffix: '+', label: 'years in business' },
      { value: '4.8 ★', label: 'average rating' },
      { end: 9000, suffix: '+', label: 'repairs completed' },
    ],
    visualIcon: 'wrench',
    image: '/images/plumbers/hero.jpg',
    imageAlt: 'A plumber adjusting a kitchen faucet under the sink',
  },

  services: {
    eyebrow: 'What We Do',
    title: 'Plumbing services for every job, big or small',
    intro: 'Sample pricing — this is how your services and rates would look on your own website.',
    variant: 'grid',
    items: [
      { icon: 'droplet', title: 'Drain Cleaning', text: 'Fast clog removal for sinks, tubs and main lines using professional-grade equipment.', price: 'From $99' },
      { icon: 'wrench', title: 'Water Heater Repair & Install', text: 'Tank and tankless water heater service, repair and full replacement.', price: 'From $650' },
      { icon: 'gauge', title: 'Leak Detection & Repair', text: 'Pinpoint hidden leaks before they cause real damage, with non-invasive detection.', price: 'From $175' },
      { icon: 'house', title: 'Pipe Repiping', text: 'Full or partial repiping for aging or corroded plumbing systems.', price: 'From $2,500' },
      { icon: 'droplet', title: 'Fixture Installation', text: 'Faucets, toilets, sinks and showerheads installed cleanly and correctly.', price: 'From $120' },
      { icon: 'clock', title: 'Emergency Plumbing (24/7)', text: 'Burst pipes and major leaks don’t wait — neither do we.', price: 'From $195' },
    ],
  },

  features: {
    eyebrow: 'Why Choose Us',
    title: 'A plumbing team homeowners actually trust',
    intro: 'Four reasons clients call Reliable Flow first.',
    items: [
      { icon: 'shieldCheck', title: 'Licensed & Insured', text: 'Fully licensed master plumbers — your home and business are protected.' },
      { icon: 'clock', title: '24/7 Emergency Service', text: 'Real people answer day or night — plumbing emergencies can’t wait for business hours.' },
      { icon: 'award', title: 'Upfront Pricing', text: 'Flat-rate quotes before we start — no surprise charges on the invoice.' },
      { icon: 'sparkle', title: 'Satisfaction Guaranteed', text: 'Every repair is backed by a workmanship guarantee.' },
    ],
  },

  gallery: {
    eyebrow: 'Our Work',
    title: 'A closer look at the craft',
    intro: 'On your real website, this is where photos of your own completed jobs would go.',
    items: [
      { label: 'Professional-Grade Tools', image: '/images/plumbers/wrench.jpg', alt: 'Close-up of two pipe wrenches fitted together on a pipe joint' },
      { label: 'Fixture Installation', image: '/images/plumbers/faucet.jpg', alt: 'Close-up of a modern chrome kitchen faucet with a water droplet' },
      { label: 'Repiping & Manifolds', image: '/images/plumbers/pipes.jpg', alt: 'Color-coded copper and PEX pipe manifold in a mechanical room' },
    ],
  },

  testimonials: {
    eyebrow: 'Happy Clients',
    title: 'What clients say about us',
    intro: 'Sample testimonials — your website would feature real reviews from your clients.',
    items: [
      { name: 'Diane R.', role: 'Emergency repair client', quote: 'Pipe burst at 11pm and they were at my door in 40 minutes. Fixed it clean, no upsell nonsense.' },
      { name: 'Marco S.', role: 'Water heater client', quote: 'Explained the tankless option clearly, gave a flat price, and installed it the same week.' },
      { name: 'Property Manager, Lakeview Apartments', role: 'Commercial client', quote: 'They handle every unit in our building. Fast response and always leave the space clean.' },
    ],
  },

  map: {
    eyebrow: 'Service Area',
    title: 'Serving homes and businesses across the region',
    intro: 'Based locally — reach out to confirm we cover your address.',
    id: 'location',
    query: 'Reliable Flow Plumbing, Phoenix, AZ',
    address: '1275 N 7th Ave, Phoenix, AZ 85007',
    phone: '+1 (602) 555-0134',
    hours: [
      { days: 'Mon – Sun', time: '24/7 Emergency Service' },
      { days: 'Office Hours', time: '8:00 AM – 6:00 PM' },
    ],
  },

  cta: {
    heading: 'Got a plumbing problem? Let’s fix it.',
    text: 'Get a free, no-obligation quote — same-day appointments available.',
    actions: [
      { label: 'Schedule Service', href: '#want-this' },
      { label: 'View Services', href: '#want-this', variant: 'outline' },
    ],
  },

  disclosure: {
    heading: 'This is a sample website',
    text: '"Reliable Flow Plumbing" is not a real business: this page is a web design example for plumbing businesses, built by Easy Pro Digital. If you run a business like this and want a website like this one (or better, with your brand, your photos and real online booking), let’s talk.',
  },
}
