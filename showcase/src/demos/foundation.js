// NICHE demo — gets indexed. See src/demos/README.md before duplicating this
// for a new niche or for a specific prospect.
export default {
  slug: 'foundation',
  brand: 'Raíces Foundation',
  niche: 'Foundations & Nonprofits',
  kind: 'nicho', // 'nicho' (niche) | 'prospecto' (prospect)

  // `primary` here is only for the pill color in the style switcher (so each
  // option previews its own palette instead of inheriting the current
  // page's theme) — keep it in sync with `theme.primary` below/in the
  // sibling files.
  styleVariants: [
    { slug: 'foundation', label: 'Hopeful Green', primary: '#2e7d5b' },
    { slug: 'foundation-sky', label: 'Open Sky', primary: '#2c6e9e' },
    { slug: 'foundation-sunrise', label: 'Sunrise', primary: '#c05621' },
    { slug: 'foundation-night', label: 'Midnight Mission', primary: '#4bdd9e' },
  ],

  seo: {
    title: 'Website Design for Foundations & Nonprofits (Example) | Easy Pro Digital',
    description:
      'A real example website for foundations and nonprofits, built by Easy Pro Digital. This is how great your organization’s website can look: programs, impact numbers, donations and more.',
    robots: 'index, follow',
  },

  // Donors give to impact they can see: impact stats up top (hero CountUp),
  // programs, then faces and places (gallery), then how to help. Local HQ →
  // map near the end.
  layout: {
    order: ['hero', 'features', 'services', 'gallery', 'testimonials', 'map', 'cta'],
  },

  theme: {
    primary: '#2e7d5b',
    primaryDark: '#1e5940',
    accent: '#e9a13b',
    bg: '#f6faf7',
    surface: '#ffffff',
    ink: '#1f2d26',
    muted: '#5f7268',
    line: '#dcebe1',
    headingFont: "'Merriweather', Georgia, serif",
    bodyFont: "'Public Sans', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=Public+Sans:wght@300;400;500;600&display=swap',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Our Impact', href: '#about' },
      { label: 'Programs', href: '#services' },
      { label: 'Stories', href: '#gallery' },
      { label: 'Contact', href: '#location' },
    ],
    ctaLabel: 'Donate',
  },

  hero: {
    variant: 'split',
    eyebrow: 'Nonprofit · Est. 2012',
    title: 'Every child deserves a fair start — we make sure they get one',
    text: 'Raíces Foundation runs after-school education, nutrition and family-support programs in underserved neighborhoods. 87 cents of every dollar goes directly to programs.',
    primaryCta: { label: 'Donate Now', href: '#donate' },
    secondaryCta: { label: 'See Our Programs', href: '#services' },
    trust: [
      { end: 4800, suffix: '+', label: 'children served' },
      { end: 12, label: 'years of work' },
      { value: '87¢', label: 'of every $1 goes to programs' },
    ],
    visualIcon: 'handHeart',
    image: '/images/foundation/hero.jpg',
    imageAlt: 'Children raising hands in a classroom',
  },

  features: {
    eyebrow: 'Our Impact',
    title: 'Why our work matters',
    intro: 'Numbers are audited yearly and published in our annual report.',
    items: [
      { icon: 'book', title: 'Education First', text: '92% of kids in our after-school program pass the school year — versus 64% before joining.' },
      { icon: 'heart', title: 'No Child Hungry', text: 'A hot, balanced meal at every session, plus weekend food bags for families who need them.' },
      { icon: 'shieldCheck', title: 'Transparent by Default', text: 'Audited financials, public annual reports and a donor dashboard that shows where money goes.' },
      { icon: 'users', title: 'Community-Led', text: 'Our staff and volunteers come from the same neighborhoods we serve — trust is built in.' },
    ],
  },

  services: {
    eyebrow: 'Programs',
    title: 'Where your support goes',
    intro: 'Sample programs — this is how your organization’s work would look on your own website.',
    variant: 'grid',
    items: [
      { icon: 'book', title: 'After-School Learning', text: 'Homework help, reading clubs and STEM workshops, five afternoons a week.', price: '$30/mo per child' },
      { icon: 'utensils', title: 'Nutrition Program', text: 'Daily meals and nutrition education for every enrolled family.', price: '$18 feeds a child weekly' },
      { icon: 'users', title: 'Family Support', text: 'Counseling, job-search help and emergency aid for parents and caregivers.', price: 'Donor funded' },
      { icon: 'sun', title: 'Summer Camp', text: 'Six weeks of learning, sports and field trips while school is out.', price: '$120 sends a child' },
      { icon: 'globe', title: 'Scholarships', text: 'High-school and university scholarships for program graduates.', price: '48 active scholars' },
      { icon: 'handHeart', title: 'Volunteer Corps', text: 'Tutors, cooks and mentors — 200+ volunteers give their time every month.', price: 'Join free' },
    ],
  },

  gallery: {
    eyebrow: 'Stories',
    title: 'The faces behind the numbers',
    intro: 'On your real website, this is where photos of your own programs and events would go.',
    items: [
      { label: 'Learning Together', image: '/images/foundation/classroom.jpg', alt: 'Two girls doing arts and crafts in a classroom' },
      { label: 'Our Volunteers', image: '/images/foundation/volunteers.jpg', alt: 'Volunteer smiling with a group of children' },
      { label: 'Stronger Together', image: '/images/foundation/community.jpg', alt: 'Group of hands stacked together in teamwork' },
      { label: 'Growing Up Strong', image: '/images/foundation/kids.jpg', alt: 'Children playing outside holding hands' },
    ],
  },

  testimonials: {
    eyebrow: 'Voices',
    title: 'What families and donors say',
    intro: 'Sample testimonials — your website would feature real voices from your community.',
    items: [
      { name: 'Marta L.', role: 'Mother of two participants', quote: 'My kids went from failing math to loving school. This place changed the direction of our family.' },
      { name: 'Andrés P.', role: 'Monthly donor for 5 years', quote: 'The annual report shows exactly where my donation went. That transparency is why I stay.' },
      { name: 'Julia F.', role: 'Scholarship graduate', quote: 'I started in the reading club at age 8. Next year I graduate as a nurse. Raíces walked the whole road with me.' },
    ],
  },

  map: {
    eyebrow: 'Visit Us',
    title: 'Our community center',
    intro: 'Come meet the team, tour the programs, or drop off in-kind donations any weekday.',
    id: 'location',
    query: 'Raíces Foundation, San Antonio, TX',
    address: '1310 S Flores St, San Antonio, TX 78204',
    phone: '+1 (210) 555-0139',
    hours: [
      { days: 'Mon – Fri', time: '8:00 AM – 6:00 PM' },
      { days: 'Program Hours', time: '3:00 PM – 6:00 PM' },
      { days: 'Donation Drop-off', time: 'Mon – Fri, 9:00 AM – 4:00 PM' },
    ],
  },

  cta: {
    // StarBorder (React Bits, adaptación CSS sin deps nuevas): anillo de
    // puntos rotando muy lento alrededor del CTA — guía/esperanza, mucho
    // más lento y punteado que el ElectricBorder sólido de electricistas.
    effect: 'star',
    heading: '$30 a month changes a child’s year',
    text: 'Join 400+ monthly donors — or give your time as a tutor or mentor.',
    actions: [
      { label: 'Donate Now', href: '#want-this' },
      { label: 'Become a Volunteer', href: '#want-this', variant: 'outline' },
    ],
  },

  disclosure: {
    heading: 'This is a sample website',
    text: '"Raíces Foundation" is not a real organization: this page is a web design example for foundations and nonprofits, built by Easy Pro Digital. If you run a nonprofit and want a website like this one (or better, with your programs, your impact numbers and real online donations), let’s talk.',
  },
}
