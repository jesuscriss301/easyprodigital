// NICHE demo — gets indexed. See src/demos/README.md before duplicating this
// for a new niche or for a specific prospect.
export default {
  slug: 'construction',
  brand: 'Ironclad Builders',
  niche: 'General Contracting & Construction',
  kind: 'nicho', // 'nicho' (niche) | 'prospecto' (prospect)

  // `primary` here is only for the pill color in the style switcher (so each
  // option previews its own palette instead of inheriting the current
  // page's theme) — keep it in sync with `theme.primary` below/in the
  // sibling files.
  styleVariants: [
    { slug: 'construction', label: 'Steel Blue', primary: '#1f3a52' },
    { slug: 'construction-orange', label: 'Safety Orange', primary: '#e0501c' },
    { slug: 'construction-gray', label: 'Concrete Gray', primary: '#5a5f66' },
  ],

  seo: {
    title: 'Website Design for General Contractors & Construction Companies (Example) | Easy Pro Digital',
    description:
      'A real example website for general contractors and construction companies, built by Easy Pro Digital. This is how great your business website can look: services, project gallery, service area map and more.',
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
    primary: '#1f3a52',
    primaryDark: '#132738',
    accent: '#e0501c',
    bg: '#f5f6f7',
    surface: '#ffffff',
    ink: '#1c2226',
    muted: '#69737a',
    line: '#dde1e4',
    headingFont: "'Archivo Black', sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@300;400;500;600&display=swap',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Services', href: '#services' },
      { label: 'Why Us', href: '#about' },
      { label: 'Projects', href: '#gallery' },
      { label: 'Service Area', href: '#location' },
    ],
    ctaLabel: 'Request a Quote',
  },

  hero: {
    variant: 'split',
    eyebrow: 'General Contracting & Construction',
    title: 'From groundbreak to final walkthrough, built right',
    text: 'New construction, commercial buildouts and additions — one licensed team managing your project from permits to punch list, with a schedule and budget you can count on.',
    primaryCta: { label: 'Request a Quote', href: '#book' },
    secondaryCta: { label: 'View Our Projects', href: '#gallery' },
    trust: [
      { end: 18, suffix: '+', label: 'years building locally' },
      { value: '4.8 ★', label: 'average rating' },
      { end: 300, suffix: '+', label: 'projects delivered' },
    ],
    visualIcon: 'hammer',
    image: '/images/construction/hero.jpg',
    imageAlt: 'Construction worker on a tower crane at a building site',
  },

  services: {
    eyebrow: 'What We Do',
    title: 'Construction services for homes and businesses',
    intro: 'Sample pricing — this is how your services and rates would look on your own website.',
    variant: 'grid',
    items: [
      { icon: 'house', title: 'New Home Construction', text: 'Custom home builds from foundation to finish, managed under one roof.', price: 'Custom quote' },
      { icon: 'crane', title: 'Commercial Buildouts', text: 'Office, retail and restaurant buildouts completed on schedule with minimal disruption.', price: 'From $45/sq ft' },
      { icon: 'hammer', title: 'Additions & Remodels', text: 'Room additions, second stories and major renovations that match your home’s structure.', price: 'From $180/sq ft' },
      { icon: 'gauge', title: 'Project Management', text: 'A single point of contact coordinating subcontractors, inspections and timelines.', price: 'Included' },
      { icon: 'sparkle', title: 'Design-Build Services', text: 'Architectural planning and construction under one contract, one team, one budget.', price: 'From $8,500' },
      { icon: 'wrench', title: 'Site Development & Excavation', text: 'Grading, excavation and utility trenching to prep your site for a clean build.', price: 'From $12/sq ft' },
    ],
  },

  features: {
    eyebrow: 'Why Choose Us',
    title: 'Construction management that keeps projects on track',
    intro: 'Four reasons property owners and developers build with Ironclad.',
    items: [
      { icon: 'shieldCheck', title: 'Licensed & Bonded', text: 'Fully licensed general contractor — every project is permitted, inspected and insured.' },
      { icon: 'award', title: 'Award-Winning Builds', text: 'Recognized by the regional builders association for craftsmanship and safety.' },
      { icon: 'clock', title: 'On-Time Delivery', text: 'Detailed scheduling and weekly progress updates so you always know where things stand.' },
      { icon: 'gauge', title: 'Transparent Budgets', text: 'Line-item estimates and change-order approval before any extra cost hits your bill.' },
    ],
  },

  gallery: {
    eyebrow: 'Our Work',
    title: 'A closer look at the build process',
    intro: 'On your real website, this is where photos of your own completed projects would go.',
    items: [
      { label: 'Site Excavation', image: '/images/construction/excavation.jpg', alt: 'Pipeline being laid in an excavated construction trench' },
      { label: 'Framing Stage', image: '/images/construction/framing.jpg', alt: 'Interior wood framing of a house under construction' },
      { label: 'Steel Structure', image: '/images/construction/steelframe.jpg', alt: 'Worker on a steel-framed building under construction' },
    ],
  },

  testimonials: {
    eyebrow: 'Happy Clients',
    title: 'What clients say about us',
    intro: 'Sample testimonials — your website would feature real reviews from your clients.',
    items: [
      { name: 'Daniel P.', role: 'Custom home client', quote: 'Ironclad kept us updated every week and hit the move-in date they promised on day one.' },
      { name: 'Renee S.', role: 'Commercial buildout client', quote: 'Our restaurant opened on schedule despite two permit delays. They handled everything.' },
      { name: 'Property Developer, Westbrook Group', role: 'Repeat commercial client', quote: 'Our default general contractor for multi-unit projects. Clean job sites, clear budgets.' },
    ],
  },

  map: {
    eyebrow: 'Service Area',
    title: 'Building across the metro area and surrounding counties',
    intro: 'Based locally — reach out to confirm we cover your address.',
    id: 'location',
    query: 'Ironclad Builders, Columbus, OH',
    address: '415 W Broad St, Columbus, OH 43215',
    phone: '+1 (614) 555-0148',
    hours: [
      { days: 'Mon – Fri', time: '7:00 AM – 5:00 PM' },
      { days: 'Saturday', time: 'By appointment' },
    ],
  },

  cta: {
    heading: 'Ready to break ground on your project?',
    text: 'Get a free, no-obligation quote and project timeline.',
    actions: [
      { label: 'Request a Quote', href: '#want-this' },
      { label: 'View Our Projects', href: '#want-this', variant: 'outline' },
    ],
  },

  disclosure: {
    heading: 'This is a sample website',
    text: '"Ironclad Builders" is not a real business: this page is a web design example for general contractors and construction companies, built by Easy Pro Digital. If you run a business like this and want a website like this one (or better, with your brand, your photos and real online booking), let’s talk.',
  },
}
