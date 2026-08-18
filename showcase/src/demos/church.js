// NICHE demo — gets indexed. See src/demos/README.md before duplicating this
// for a new niche or for a specific prospect.
export default {
  slug: 'church',
  brand: 'Grace Point Church',
  niche: 'Churches & Faith Communities',
  kind: 'nicho', // 'nicho' (niche) | 'prospecto' (prospect)

  // `primary` here is only for the pill color in the style switcher (so each
  // option previews its own palette instead of inheriting the current
  // page's theme) — keep it in sync with `theme.primary` below/in the
  // sibling files.
  styleVariants: [
    { slug: 'church', label: 'Warm Welcome', primary: '#7a5c3e' },
    { slug: 'church-modern', label: 'Modern Sanctuary', primary: '#20415e' },
    { slug: 'church-dawn', label: 'Morning Light', primary: '#886a9e' },
    { slug: 'church-night', label: 'Evening Vespers', primary: '#dd944b' },
  ],

  seo: {
    title: 'Website Design for Churches & Ministries (Example) | Easy Pro Digital',
    description:
      'A real example website for churches and faith communities, built by Easy Pro Digital. This is how great your church website can look: service times, ministries, location map and more.',
    robots: 'index, follow',
  },

  // A church website's #1 job: when is the service and where are you.
  // Ministries (services) and community photos follow; map is essential.
  layout: {
    order: ['hero', 'services', 'features', 'gallery', 'testimonials', 'map', 'cta'],
  },

  theme: {
    primary: '#7a5c3e',
    primaryDark: '#59422b',
    accent: '#c9a227',
    bg: '#faf8f4',
    surface: '#ffffff',
    ink: '#2c261f',
    muted: '#7b7267',
    line: '#eae3d7',
    headingFont: "'Lora', Georgia, serif",
    bodyFont: "'Source Sans 3', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Lora:wght@600;700&family=Source+Sans+3:wght@300;400;500;600&display=swap',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Ministries', href: '#services' },
      { label: 'About Us', href: '#about' },
      { label: 'Community', href: '#gallery' },
      { label: 'Visit', href: '#location' },
    ],
    ctaLabel: 'Plan Your Visit',
  },

  hero: {
    variant: 'split',
    eyebrow: 'A Church for the Whole Family',
    title: 'Come as you are — you already belong here',
    text: 'Sunday services at 9:00 and 11:00 AM, kids’ ministry at both, and coffee that’s actually good. Whether you’ve been in church your whole life or never once, there’s a seat for you.',
    primaryCta: { label: 'Plan Your Visit', href: '#visit' },
    secondaryCta: { label: 'Watch Online', href: '#services' },
    trust: [
      { end: 25, label: 'years serving the city' },
      { end: 600, suffix: '+', label: 'people every Sunday' },
      { end: 14, label: 'active ministries' },
    ],
    visualIcon: 'cross',
    image: '/images/church/hero.jpg',
    imageAlt: 'Sunlit church interior with wooden pews',
  },

  services: {
    eyebrow: 'Ministries & Gatherings',
    title: 'More than a Sunday service',
    intro: 'Sample schedule — this is how your services and ministries would look on your own website.',
    variant: 'grid',
    items: [
      { icon: 'sun', title: 'Sunday Worship', text: 'Two identical services with live worship and practical teaching.', price: '9:00 & 11:00 AM' },
      { icon: 'users', title: 'Kids & Youth', text: 'Safe, fun, age-graded programs from nursery through high school.', price: 'Both services' },
      { icon: 'book', title: 'Midweek Bible Study', text: 'Small groups in homes across the city — dinner included, questions welcome.', price: 'Wednesdays 7 PM' },
      { icon: 'music', title: 'Worship & Choir', text: 'Rehearsals open to anyone who sings or plays — no audition needed to start.', price: 'Thursdays 6:30 PM' },
      { icon: 'handHeart', title: 'Food Pantry', text: 'Free groceries for any neighbor in need, no questions asked.', price: 'Saturdays 10 AM' },
      { icon: 'heart', title: 'Prayer & Care', text: 'A team that visits, calls and prays — because nobody should walk hard seasons alone.', price: 'Always available' },
    ],
  },

  features: {
    eyebrow: 'About Us',
    title: 'What we’re about',
    intro: 'Four things you can expect every single week.',
    items: [
      { icon: 'heart', title: 'Everyone Is Welcome', text: 'No dress code, no background check on your past. Come as you are, seriously.' },
      { icon: 'book', title: 'Teaching for Real Life', text: 'Messages that connect scripture to marriage, work, worry and everything in between.' },
      { icon: 'users', title: 'Real Community', text: 'Small groups where people actually know your name and show up when it matters.' },
      { icon: 'globe', title: 'Serving Our City', text: 'Food pantry, school partnerships and mission trips — faith with its sleeves rolled up.' },
    ],
  },

  gallery: {
    eyebrow: 'Our Community',
    title: 'Life at Grace Point',
    intro: 'On your real website, this is where photos of your own services and events would go.',
    items: [
      { label: 'Sunday Worship', image: '/images/church/worship.jpg', alt: 'Congregation during a worship service' },
      { label: 'The Sanctuary', image: '/images/church/sanctuary.jpg', alt: 'Church sanctuary interior' },
      { label: 'Community', image: '/images/church/community.jpg', alt: 'People talking together after a service' },
      { label: 'Kids Ministry', image: '/images/church/kids.jpg', alt: 'Children activity room' },
    ],
  },

  testimonials: {
    eyebrow: 'Stories',
    title: 'What people say about our church',
    intro: 'Sample testimonials — your website would feature real stories from your congregation.',
    items: [
      { name: 'The Ramírez Family', role: 'Members for 6 years', quote: 'We visited "just once" after moving here. The kids asked to come back before we reached the car.' },
      { name: 'Kevin O.', role: 'First-time visitor, now volunteer', quote: 'I hadn’t set foot in a church in 20 years. Nobody made it weird. Now I serve coffee on Sundays.' },
      { name: 'Alice T.', role: 'Small group member', quote: 'When my husband was in the hospital, our group brought meals for three weeks straight. That’s church.' },
    ],
  },

  map: {
    eyebrow: 'Visit Us',
    title: 'We’d love to see you this Sunday',
    intro: 'Free parking on site, greeters at every door, and the coffee’s ready by 8:30.',
    id: 'location',
    query: 'Grace Point Church, Nashville, TN',
    address: '4210 Charlotte Ave, Nashville, TN 37209',
    phone: '+1 (615) 555-0122',
    hours: [
      { days: 'Sunday Services', time: '9:00 AM & 11:00 AM' },
      { days: 'Church Office', time: 'Mon – Fri, 9:00 AM – 4:00 PM' },
      { days: 'Food Pantry', time: 'Saturdays, 10:00 AM – 12:00 PM' },
    ],
  },

  cta: {
    heading: 'New here? Let us save you a seat',
    text: 'Tell us you’re coming and we’ll meet you at the door — no forms longer than two questions.',
    actions: [
      { label: 'Plan Your Visit', href: '#want-this' },
      { label: 'Watch a Service Online', href: '#want-this', variant: 'outline' },
    ],
  },

  disclosure: {
    heading: 'This is a sample website',
    text: '"Grace Point Church" is not a real congregation: this page is a web design example for churches and faith communities, built by Easy Pro Digital. If you lead a church and want a website like this one (or better, with your photos, your service times and online giving), let’s talk.',
  },
}
