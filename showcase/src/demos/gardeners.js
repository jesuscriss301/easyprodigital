// NICHE demo — gets indexed. See src/demos/README.md before duplicating this
// for a new niche or for a specific prospect.
export default {
  slug: 'gardeners',
  brand: 'Evergreen Yard Co.',
  niche: 'Landscaping & Garden Care',
  kind: 'nicho', // 'nicho' (niche) | 'prospecto' (prospect)

  // `primary` here is only for the pill color in the style switcher (so each
  // option previews its own palette instead of inheriting the current
  // page's theme) — keep it in sync with `theme.primary` below/in the
  // sibling files.
  styleVariants: [
    { slug: 'gardeners', label: 'Garden Green', primary: '#3f7d32' },
    { slug: 'gardeners-terracotta', label: 'Terracotta Bloom', primary: '#c1622d' },
    { slug: 'gardeners-sage', label: 'Modern Sage', primary: '#6b8f71' },
  ],

  seo: {
    title: 'Website Design for Landscapers & Gardeners (Example) | Easy Pro Digital',
    description:
      'A real example website for landscaping and garden care businesses, built by Easy Pro Digital. This is how great your business website can look: services, project gallery, service area map and more.',
    robots: 'index, follow',
  },

  // Controls which sections render and in what order. Any subset/order of
  // 'hero' | 'services' | 'features' | 'gallery' | 'testimonials' | 'map' |
  // 'cta' is valid — DemoPage.jsx renders whatever is listed here, skipping
  // the rest.
  layout: {
    order: ['hero', 'services', 'gallery', 'features', 'testimonials', 'map', 'cta'],
  },

  theme: {
    primary: '#3f7d32',
    primaryDark: '#2c5b23',
    accent: '#e8a33d',
    bg: '#f7faf5',
    surface: '#ffffff',
    ink: '#1f2e1a',
    muted: '#5f715a',
    line: '#dfebd9',
    headingFont: "'Fraunces', serif",
    bodyFont: "'Nunito Sans', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Fraunces:wght@600;700;800&family=Nunito+Sans:wght@300;400;500;600&display=swap',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Services', href: '#services' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Why Us', href: '#about' },
      { label: 'Service Area', href: '#location' },
    ],
    ctaLabel: 'Get a Free Quote',
  },

  hero: {
    variant: 'split',
    eyebrow: 'Landscaping & Garden Care',
    title: 'A garden that thrives all year round, minus the weekend labor',
    text: 'Lawn care, garden design, tree trimming and seasonal cleanup from a local crew that treats your yard like their own.',
    primaryCta: { label: 'Get a Free Quote', href: '#book' },
    secondaryCta: { label: 'View Services', href: '#services' },
    trust: [
      { end: 1200, suffix: '+', label: 'yards maintained' },
      { value: '4.9 ★', label: 'average rating' },
      { end: 12, label: 'years in business' },
    ],
    visualIcon: 'tree',
    image: '/images/gardeners/hero.jpg',
    imageAlt: 'A gardener kneeling in a flower bed trimming with garden shears',
  },

  services: {
    eyebrow: 'What We Do',
    title: 'Garden and yard care for every season',
    intro: 'Sample pricing — this is how your services and rates would look on your own website.',
    variant: 'grid',
    items: [
      { icon: 'tree', title: 'Lawn Care & Mowing', text: 'Weekly or biweekly mowing, edging and cleanup to keep your lawn sharp.', price: 'From $45/visit' },
      { icon: 'flower', title: 'Landscape Design', text: 'Custom garden beds, layouts and plant selection designed for your space.', price: 'From $600' },
      { icon: 'scissors', title: 'Tree & Shrub Trimming', text: 'Precision pruning that keeps trees healthy and hedges looking sharp.', price: 'From $89' },
      { icon: 'droplet', title: 'Irrigation Installation', text: 'Sprinkler systems and drip irrigation so your garden waters itself.', price: 'From $850' },
      { icon: 'leaf', title: 'Seasonal Cleanup', text: 'Spring and fall cleanup — leaves, debris and bed prep, done right.', price: 'From $150' },
      { icon: 'sparkle', title: 'Garden Maintenance', text: 'Ongoing weeding, mulching and plant care to keep everything thriving.', price: 'From $99/mo' },
    ],
  },

  features: {
    eyebrow: 'Why Choose Us',
    title: 'A yard crew homeowners actually keep',
    intro: 'Four reasons clients stay with Evergreen year after year.',
    items: [
      { icon: 'shieldCheck', title: 'Licensed & Insured', text: 'Every crew member is insured — your property is always protected.' },
      { icon: 'leaf', title: 'Sustainable Practices', text: 'Organic-first fertilizing and water-wise irrigation design.' },
      { icon: 'clock', title: 'Reliable Scheduling', text: 'Same crew, same day each week — no surprises, no no-shows.' },
      { icon: 'award', title: 'Local Plant Expertise', text: 'We know what thrives in your climate and soil, not generic advice.' },
    ],
  },

  gallery: {
    eyebrow: 'Our Work',
    title: 'See the Evergreen difference',
    intro: 'On your real website, this is where photos of your own finished projects would go.',
    items: [
      { label: 'Hedge Trimming', image: '/images/gardeners/hedge.jpg', alt: 'Gardener trimming a boxwood hedge with manual shears' },
      { label: 'Lawn Care', image: '/images/gardeners/mowing.jpg', alt: 'Riding mower cutting a lawn next to a garden bed' },
      { label: 'Planting & Beds', image: '/images/gardeners/planting.jpg', alt: 'Gloved hands planting seedlings in a garden bed' },
    ],
  },

  testimonials: {
    eyebrow: 'Happy Clients',
    title: 'What clients say about us',
    intro: 'Sample testimonials — your website would feature real reviews from your clients.',
    items: [
      { name: 'Karen L.', role: 'Weekly lawn care client', quote: 'Same two guys every Thursday, and my lawn has never looked this good. Worth every penny.' },
      { name: 'Andre P.', role: 'Landscape design client', quote: 'They redesigned our whole front bed and picked plants that actually survive our winters.' },
      { name: 'HOA Board, Willow Creek', role: 'Commercial client', quote: 'Reliable, tidy, and they communicate before every visit. Exactly what an HOA needs.' },
    ],
  },

  map: {
    eyebrow: 'Service Area',
    title: 'Serving yards across the region',
    intro: 'Based locally — reach out to confirm we cover your address.',
    id: 'location',
    query: 'Evergreen Yard Co., Denver, CO',
    address: '880 S Broadway, Denver, CO 80209',
    phone: '+1 (720) 555-0198',
    hours: [
      { days: 'Mon – Fri', time: '7:00 AM – 5:00 PM' },
      { days: 'Saturday', time: '8:00 AM – 1:00 PM' },
    ],
  },

  cta: {
    heading: 'Ready for a yard you love coming home to?',
    text: 'Get a free, no-obligation quote in minutes.',
    actions: [
      { label: 'Get a Free Quote', href: '#want-this' },
      { label: 'View Services', href: '#want-this', variant: 'outline' },
    ],
  },

  disclosure: {
    heading: 'This is a sample website',
    text: '"Evergreen Yard Co." is not a real business: this page is a web design example for landscaping and garden care businesses, built by Easy Pro Digital. If you run a business like this and want a website like this one (or better, with your brand, your photos and real online booking), let’s talk.',
  },
}
