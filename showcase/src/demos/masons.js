// NICHE demo — gets indexed. See src/demos/README.md before duplicating this
// for a new niche or for a specific prospect.
export default {
  slug: 'masons',
  brand: 'Stonecraft Masonry',
  niche: 'Masonry & Bricklaying',
  kind: 'nicho', // 'nicho' (niche) | 'prospecto' (prospect)

  // `primary` here is only for the pill color in the style switcher (so each
  // option previews its own palette instead of inheriting the current
  // page's theme) — keep it in sync with `theme.primary` below/in the
  // sibling files.
  styleVariants: [
    { slug: 'masons', label: 'Brick Red', primary: '#8a3324' },
    { slug: 'masons-slate', label: 'Slate Gray', primary: '#4a4f56' },
    { slug: 'masons-terracotta', label: 'Terracotta Warm', primary: '#b5652f' },
  ],

  seo: {
    title: 'Website Design for Masons & Bricklayers (Example) | Easy Pro Digital',
    description:
      'A real example website for masonry and bricklaying businesses, built by Easy Pro Digital. This is how great your business website can look: services, project gallery, service area map and more.',
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
    primary: '#8a3324',
    primaryDark: '#5f2118',
    accent: '#c9922f',
    bg: '#faf6f2',
    surface: '#ffffff',
    ink: '#2b1f1a',
    muted: '#7a6a5e',
    line: '#ecdfd3',
    headingFont: "'Rajdhani', sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&family=Inter:wght@300;400;500;600&display=swap',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Services', href: '#services' },
      { label: 'Why Us', href: '#about' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Service Area', href: '#location' },
    ],
    ctaLabel: 'Get a Free Estimate',
  },

  hero: {
    variant: 'split',
    eyebrow: 'Masonry & Bricklaying',
    title: 'Brick and stone work built to outlast the building around it',
    text: 'Brick laying, stone veneer, chimneys and retaining walls — precise, code-compliant masonry from a crew that treats every wall like it has to stand for a century.',
    primaryCta: { label: 'Get a Free Estimate', href: '#book' },
    secondaryCta: { label: 'View Our Work', href: '#gallery' },
    trust: [
      { end: 25, suffix: '+', label: 'years in masonry' },
      { value: '4.9 ★', label: 'average rating' },
      { end: 600, suffix: '+', label: 'projects completed' },
    ],
    visualIcon: 'brick',
    image: '/images/masons/hero.jpg',
    imageAlt: 'Two masons applying render to the exterior wall of a building',
  },

  services: {
    eyebrow: 'What We Do',
    title: 'Masonry services for homes and commercial buildings',
    intro: 'Sample pricing — this is how your services and rates would look on your own website.',
    variant: 'grid',
    items: [
      { icon: 'brick', title: 'Brick & Block Laying', text: 'New walls, additions and structural brick or block work, laid plumb and true.', price: 'From $18/sq ft' },
      { icon: 'house', title: 'Stone Veneer Installation', text: 'Natural and manufactured stone veneer for a high-end exterior finish.', price: 'From $22/sq ft' },
      { icon: 'hammer', title: 'Chimney Repair & Rebuilding', text: 'Repointing, crown repair and full rebuilds for aging or damaged chimneys.', price: 'From $650' },
      { icon: 'wrench', title: 'Retaining Walls', text: 'Engineered stone and block retaining walls that handle drainage and grade properly.', price: 'From $35/sq ft' },
      { icon: 'gauge', title: 'Concrete & Foundation Work', text: 'Footings, slabs and foundation repair to support your masonry project.', price: 'From $8/sq ft' },
      { icon: 'sparkle', title: 'Tuckpointing & Repointing', text: 'Restore old mortar joints to stop water damage and keep walls structurally sound.', price: 'From $12/sq ft' },
    ],
  },

  features: {
    eyebrow: 'Why Choose Us',
    title: 'Masonry work that passes inspection the first time',
    intro: 'Four reasons contractors and homeowners call Stonecraft.',
    items: [
      { icon: 'shieldCheck', title: 'Licensed & Insured', text: 'Fully licensed masonry contractor — every project is permitted and up to code.' },
      { icon: 'award', title: 'Master Craftsmanship', text: 'Decades of combined experience in brick, block and natural stone.' },
      { icon: 'clock', title: 'On-Time, On-Budget', text: 'Clear timelines and written estimates — no mid-project surprises.' },
      { icon: 'gauge', title: 'Built to Last', text: 'Proper footings, flashing and mortar mix for work that survives freeze-thaw cycles.' },
    ],
  },

  gallery: {
    eyebrow: 'Our Work',
    title: 'A closer look at the craft',
    intro: 'On your real website, this is where photos of your own finished projects would go.',
    items: [
      { label: 'Brick Wall Construction', image: '/images/masons/brickwall.jpg', alt: 'Close-up of a freshly laid red brick wall' },
      { label: 'Retaining Walls', image: '/images/masons/retainingwall.jpg', alt: 'Stacked natural stone retaining wall with landscaping' },
      { label: 'Chimney Rebuilding', image: '/images/masons/chimney.jpg', alt: 'Brick chimney against a blue sky' },
    ],
  },

  testimonials: {
    eyebrow: 'Happy Clients',
    title: 'What clients say about us',
    intro: 'Sample testimonials — your website would feature real reviews from your clients.',
    items: [
      { name: 'Frank D.', role: 'Chimney rebuild client', quote: 'They caught a cracked flue liner our inspector missed and fixed it right the first time.' },
      { name: 'Melissa R.', role: 'Retaining wall client', quote: 'The wall has held up through two hard winters with zero shifting. Worth every penny.' },
      { name: 'General Contractor, Aldridge Builders', role: 'Repeat commercial client', quote: 'Our go-to masonry sub for the last six years. Always on schedule, always clean work.' },
    ],
  },

  map: {
    eyebrow: 'Service Area',
    title: 'Serving homeowners and contractors across the region',
    intro: 'Based locally — reach out to confirm we cover your address.',
    id: 'location',
    query: 'Stonecraft Masonry, Pittsburgh, PA',
    address: '620 E Ohio St, Pittsburgh, PA 15212',
    phone: '+1 (412) 555-0163',
    hours: [
      { days: 'Mon – Fri', time: '7:00 AM – 5:00 PM' },
      { days: 'Saturday', time: 'By appointment' },
    ],
  },

  cta: {
    heading: 'Ready to build something that lasts?',
    text: 'Get a free, no-obligation estimate for your project.',
    actions: [
      { label: 'Get a Free Estimate', href: '#want-this' },
      { label: 'View Our Work', href: '#want-this', variant: 'outline' },
    ],
  },

  disclosure: {
    heading: 'This is a sample website',
    text: '"Stonecraft Masonry" is not a real business: this page is a web design example for masonry and bricklaying businesses, built by Easy Pro Digital. If you run a business like this and want a website like this one (or better, with your brand, your photos and real online booking), let’s talk.',
  },
}
