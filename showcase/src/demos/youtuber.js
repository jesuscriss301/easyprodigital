// NICHE demo — gets indexed. See src/demos/README.md before duplicating this
// for a new niche or for a specific prospect.
export default {
  slug: 'youtuber',
  brand: 'Nova Vega',
  niche: 'YouTubers & Content Creators',
  kind: 'nicho', // 'nicho' (niche) | 'prospecto' (prospect)

  // `primary` here is only for the pill color in the style switcher (so each
  // option previews its own palette instead of inheriting the current
  // page's theme) — keep it in sync with `theme.primary` below/in the
  // sibling files.
  styleVariants: [
    { slug: 'youtuber', label: 'Creator Red', primary: '#e5383b' },
    { slug: 'youtuber-purple', label: 'Stream Purple', primary: '#6d3bd6' },
    { slug: 'youtuber-mint', label: 'Fresh Mint', primary: '#12a594' },
    { slug: 'youtuber-night', label: 'Dark Mode', primary: '#dd4b4e' },
  ],

  seo: {
    title: 'Website Design for YouTubers & Content Creators (Example) | Easy Pro Digital',
    description:
      'A real example website for YouTubers and content creators, built by Easy Pro Digital. This is how great your creator site can look: channel stats, content, sponsorship packages and more.',
    robots: 'index, follow',
  },

  // Online-only business: no map. Centered hero (big, brandy), then what the
  // channel is about, the studio gallery, sponsor packages, social proof.
  layout: {
    order: ['hero', 'features', 'gallery', 'services', 'testimonials', 'cta'],
  },

  theme: {
    primary: '#e5383b',
    primaryDark: '#b1272a',
    accent: '#161a1d',
    bg: '#f8f9fa',
    surface: '#ffffff',
    ink: '#161a1d',
    muted: '#6c757d',
    line: '#e3e6e8',
    headingFont: "'Space Grotesk', sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'The Channel', href: '#about' },
      { label: 'Studio', href: '#gallery' },
      { label: 'Work With Me', href: '#services' },
    ],
    ctaLabel: 'Subscribe',
  },

  hero: {
    variant: 'centered',
    eyebrow: 'Tech · Maker · Weekly Videos',
    title: 'I build ridiculous things so you don’t have to',
    text: 'DIY tech builds, honest gadget teardowns and maker projects — new video every Friday. One site for my content, my community and the brands I work with.',
    primaryCta: { label: 'Subscribe', href: '#subscribe' },
    secondaryCta: { label: 'Work With Me', href: '#services' },
    trust: [
      { end: 480, suffix: 'K', label: 'subscribers' },
      { end: 320, suffix: '+', label: 'videos published' },
      { end: 38, suffix: 'M', label: 'total views' },
    ],
    visualIcon: 'play',
  },

  features: {
    eyebrow: 'The Channel',
    title: 'What you’ll find here every week',
    intro: 'Three formats, one promise: no fake hype, no paid opinions.',
    items: [
      { icon: 'wrench', title: 'DIY Tech Builds', text: 'From 3D-printed drones to home-made smart mirrors — full builds with real budgets and real fails.' },
      { icon: 'camera', title: 'Honest Teardowns', text: 'Gadgets opened up and reviewed with zero sponsor pressure. If it breaks, you see it break.' },
      { icon: 'play', title: 'Live Q&A Streams', text: 'Monthly streams where the community picks the next build and we debug together.' },
      { icon: 'users', title: 'Maker Community', text: 'A Discord full of people finishing the projects I start — share yours and get help.' },
    ],
  },

  gallery: {
    hover: 'glare', // GlareHover (React Bits, CSS sin deps) — brillo al pasar sobre el estudio
    eyebrow: 'Behind the Scenes',
    title: 'The studio',
    intro: 'On your real website, this is where your own studio, thumbnails and setup shots would go.',
    items: [
      { label: 'The Set', image: '/images/youtuber/studio.jpg', alt: 'Video recording studio with camera and lighting' },
      { label: 'Camera Rig', image: '/images/youtuber/camera.jpg', alt: 'Professional camera on a rig' },
      { label: 'Audio Corner', image: '/images/youtuber/mic.jpg', alt: 'Studio microphone close-up' },
      { label: 'Edit Bay', image: '/images/youtuber/editing.jpg', alt: 'Video editing workstation with monitors' },
    ],
  },

  services: {
    eyebrow: 'Work With Me',
    title: 'Sponsorships & collaborations',
    intro: 'Sample packages — this is how your sponsorship offers would look on your own website.',
    variant: 'grid',
    items: [
      { icon: 'play', title: 'Dedicated Video', text: 'A full video around your product — concept, build and honest verdict.', price: 'From $4,500' },
      { icon: 'clock', title: '60-Second Integration', text: 'A native mid-roll segment inside a regular video, scripted with you.', price: 'From $1,800' },
      { icon: 'camera', title: 'Product Review', text: 'Hands-on teardown and review. I keep final cut — that’s why they convert.', price: 'From $2,500' },
      { icon: 'mic', title: 'Speaking & Panels', text: 'Talks and panels on the creator economy and maker education.', price: 'On request' },
    ],
  },

  testimonials: {
    eyebrow: 'Partners',
    title: 'What sponsors and viewers say',
    intro: 'Sample testimonials — your website would feature real quotes from partners and community.',
    items: [
      { name: 'Marketing Lead, VoltCore Batteries', role: 'Sponsor, 3 campaigns', quote: 'Best cost-per-signup of any creator campaign we ran last year. The audience actually trusts him.' },
      { name: 'Dana W.', role: 'Community member', quote: 'Built the smart mirror from episode 214 with my daughter. The build guides are gold.' },
      { name: 'Partnerships, MakerCon', role: 'Event organizer', quote: 'His panel filled the main hall. Professional to work with from first email to stage.' },
    ],
  },

  cta: {
    heading: 'New video every Friday',
    text: 'Subscribe so you don’t miss the next build — or grab a sponsorship slot for your brand.',
    actions: [
      { label: 'Subscribe', href: '#want-this' },
      { label: 'Get the Media Kit', href: '#want-this', variant: 'outline' },
    ],
  },

  disclosure: {
    heading: 'This is a sample website',
    text: '"Nova Vega" is not a real creator: this page is a web design example for YouTubers and content creators, built by Easy Pro Digital. If you’re a creator and want a website like this one (or better, with your brand, your stats and a real media kit), let’s talk.',
  },
}
