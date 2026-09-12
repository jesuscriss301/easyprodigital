// ============================================================
//  English content bundle — primary language (US & Canada SEO focus).
//  Mirrors the shape of profile.js (Spanish) exactly. Edit both files
//  when content changes so the two languages stay in sync.
// ============================================================

export const site = {
  domain: 'https://easyprodigital.com',
  brand: 'Easy Pro Digital',
}

export const profile = {
  name: 'Jesús Manuel Cristancho',
  firstName: 'Jesús',
  role: 'Freelance Full-Stack Developer',
  tagline:
    'Production software for healthcare, mining, hospitality and e-commerce — Java and PHP backends, React/TypeScript frontends, with applied AI and SEO built in from day one.',

  location: 'Medellín, Colombia — remote, serving clients across the US & Canada',
  timezoneLabel: 'GMT-5',
  available: true,

  email: 'info@easyprodigital.com',
  whatsapp: 'https://wa.me/573238816434',
  linkedin: 'https://www.linkedin.com/in/jesus-cristancho',
  tiktok: 'https://www.tiktok.com/@easyprodigital',
  github: 'https://github.com/jesuscriss301',

  // Path to a professional photo. Leave null to use the built-in monogram fallback.
  photo: '/photo-jesus-cristancho.jpg',

  about: [
    `I'm Jesús Manuel Cristancho, a systems engineer and full-stack developer working remotely with clients across the US, Canada and Latin America. I've shipped production software for healthcare, mining, hospitality and e-commerce — including integrations with Colombia's Ministry of Health (MIPRES), real-time monitoring platforms built on microservices, and online stores that grew organic traffic by 40%.`,
    `My core stack is Java (Spring Boot) and PHP (Symfony/Laravel) on the backend, with React/TypeScript on the frontend. I integrate applied AI using OpenAI, Gemini and Claude APIs, plus local deployments of open-source models like DeepSeek and Qwen for clients who need data privacy. Every project ships with organic SEO built in. Easy Pro Digital started as an agency brand — today it's my independent practice, so you're talking directly to the person writing the code.`,
  ],
}

// Professional experience (from résumé) — most recent first
export const experience = [
  {
    role: 'Full-Stack Developer',
    company: 'Offimedicas',
    // Real logo pending: couldn't pull the binary file in (sandbox network +
    // safety limits on transferring image data from the browser). Found the
    // official file at https://www.offimedicas.com/img/logo_offimedicas_blanco.png
    // — save it as public/logos/offimedicas.png and set this to
    // '/logos/offimedicas.png' to swap in the real logo.
    logo: null,
    period: 'Sep. 2025 — Jun. 2026',
    bullets: [
      'Built and maintained logistics and distribution system modules (PHP 7.2 / Symfony), improving operation time by 5% while processing 3,000 daily queries.',
      "Integrated Colombia's Ministry of Health MIPRES API for prescription reporting and dispensing control, cutting response times by 40%.",
      'Designed the MariaDB database for inventory, traceability and pharmaceutical supply chain, ensuring compliance with Colombian Ministry of Health regulations.',
      'Built the day-to-day operations interfaces (JavaScript/HTML/CSS) for warehouse and distribution staff.',
    ],
  },
  {
    role: 'Full-Stack & AI Developer',
    company: 'Freelance (independent projects)',
    logo: '/LOGO.ico', // this one's own brand mark — already in the project
    period: '2021 — Sep. 2025',
    bullets: [
      'Implemented online stores with Bagisto (Laravel) — catalog, payment gateway and order management — with on-page SEO that grew organic traffic by 40% and ranked 30 keywords on page one.',
      'Built an AI chatbot (OpenAI API) integrated with WhatsApp Business that cut response time from 10–40 minutes to under 1 minute and automated 85% of customer inquiries.',
      'Ran local deployments of open-source LLMs (DeepSeek, Qwen) for clients requiring private AI with no cloud dependency.',
      'Built a Python + Gemini API application for SEO article generation at scale, producing 150 articles/week.',
      'Automated business workflows with n8n, AI agents and REST APIs; built React/TypeScript frontend components and hybrid mobile apps.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Rasi Soluciones S.A.S',
    // Real logo pending — official file at https://rasi.com.co/logo-rasi.png,
    // save as public/logos/rasi.png and set this to '/logos/rasi.png'.
    logo: null,
    period: 'Oct. 2023 — May. 2024',
    bullets: [
      'Built frontend and backend modules for healthcare applications (Java Spring Boot, JavaScript, Bootstrap), prioritizing usability for medical staff.',
      'Implemented unit and end-to-end tests with Cypress, raising coverage to 10% and cutting production defects by 45% in mission-critical healthcare environments.',
    ],
  },
  {
    role: 'Systems Lead & Full-Stack Developer',
    company: 'Carbones de Exportación de Colombia',
    // Real logo pending — official file at
    // https://carboexco.com/wp-content/uploads/2019/07/logo-carboexco.png,
    // save as public/logos/carboexco.png and set this to '/logos/carboexco.png'.
    logo: null,
    period: 'Jan. 2023 — Aug. 2023',
    bullets: [
      'Technically led a 2-developer team building an enterprise web application from scratch.',
      'Designed a microservices architecture (Java Spring Boot, MySQL, RESTful APIs) for real-time monitoring, ensuring data integrity and scalability.',
    ],
  },
]

export const education = [
  { title: 'Systems Engineering', school: 'Universidad Francisco de Paula Santander', period: '2018 — 2022' },
  { title: 'Systems Technician', school: 'SENA', period: '2018' },
]

// Services (real stack, matching the original site's offerings)
export const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    short: 'Landing pages, e-commerce and custom web applications.',
    detail:
      'Fast, responsive websites and web applications — from high-performance landing pages to enterprise systems processing thousands of daily transactions. Java (Spring Boot) or PHP (Symfony/Laravel) backend, React/TypeScript frontend — SEO-ready and optimized for Core Web Vitals.',
    stack: ['Java / Spring Boot', 'PHP / Symfony / Laravel', 'React / TypeScript', 'Node.js'],
    bullets: [
      'Custom web applications and enterprise systems',
      'E-commerce with Bagisto: catalog, payments and order management',
      'REST APIs and microservices architecture',
    ],
  },
  {
    id: 'mobile-development',
    title: 'Mobile Apps',
    short: 'Hybrid mobile apps for iOS and Android.',
    detail:
      'Hybrid mobile apps built with web technologies — a single codebase for both platforms, connected to the same APIs powering your web product.',
    stack: ['Hybrid apps', 'React', 'TypeScript', 'REST APIs'],
    bullets: [
      'One codebase for iOS and Android',
      'Integration with your existing backend',
      'Responsive interfaces built for daily operations',
    ],
  },
  {
    id: 'saas-development',
    title: 'SaaS Solutions',
    short: 'Scalable cloud platforms, from MVP to production.',
    detail:
      'Cloud platforms built to scale: authentication, payments and microservices architecture for real-time data. I have designed databases and architectures for pharmaceutical supply chains, mining CRMs and reservation systems.',
    stack: ['Spring Boot', 'PostgreSQL / MySQL / MariaDB', 'Google Cloud', 'Microservices'],
    bullets: [
      'Microservices for real-time monitoring',
      'Regulatory-compliant database design',
      'Payment gateways and subscriptions',
    ],
  },
  {
    id: 'seo-services',
    title: 'SEO Services',
    short: 'Technical, on-page and content SEO that shows up in the numbers.',
    detail:
      'SEO built in from the start, not bolted on at the end: structured data, URL architecture, web performance and on-page optimization. Real results: +40% organic traffic and 30 keywords ranked on page one.',
    stack: ['Technical SEO', 'Structured data', 'Web performance', 'Content at scale'],
    bullets: [
      'On-page SEO and URL architecture',
      'Structured data (schema.org) and meta tag optimization',
      'AI-assisted content pipelines: 150 articles/week',
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    short: 'Acquisition, remarketing and business automation.',
    detail:
      'User acquisition connected to real product metrics, plus business workflow automation with n8n, AI agents and REST APIs — so your marketing runs almost on its own and reports real numbers.',
    stack: ['n8n automation', 'AI agents', 'WhatsApp Business', 'Analytics'],
    bullets: [
      'Business workflow automation with n8n',
      'WhatsApp Business integrations',
      'Measurable campaigns with monthly reporting',
    ],
  },
  {
    id: 'ai-integrations',
    title: 'AI Integrations',
    short: 'Applied AI: cloud APIs or private local models.',
    detail:
      'AI that solves real business problems: chatbots that automated 85% of customer inquiries, content generators producing 150 SEO articles per week, and local deployments of open-source models (DeepSeek, Qwen) for clients who can’t send data to the cloud.',
    stack: ['OpenAI / Gemini / Claude APIs', 'DeepSeek / Qwen (local)', 'Python', 'n8n / AI agents'],
    bullets: [
      'AI chatbots integrated with WhatsApp Business',
      'Private LLM deployments on your own infrastructure',
      'AI-driven content and data pipelines',
    ],
  },
]

// Real projects (from résumé)
export const projects = [
  {
    id: 'turnero-saas',
    name: 'Turnero — Virtual Queue SaaS',
    type: 'Multi-tenant SaaS',
    year: '2026',
    summary:
      'Multi-tenant SaaS platform for managing customer service queues: each business registers, configures branches and services, and issues tickets dispatched in real time. Includes a public TV display, mobile ticket tracking via SSE, and safe concurrent dispatching with database-level locking. Fully packaged in a single Docker container ready to deploy on any VPS.',
    stack: ['Java 21 / Spring Boot 3', 'React + TypeScript', 'MySQL 8', 'Docker / SSE'],
    url: 'https://turnero.easyprodigital.com',
    demo: { user: 'demo@easyprodigital.com', password: 'DemoTurnero2026' },
    repo: 'https://github.com/jesuscriss301/Turnero-java-react',
    image: null,
    private: false,
  },
  {
    id: 'bagisto-ecommerce-pos',
    name: 'Bagisto — E-commerce with POS',
    type: 'E-commerce / Point of Sale',
    year: '2026',
    summary:
      'E-commerce platform on Laravel + Vue.js with catalog, payments and order management, plus a Point of Sale (POS) module for running inventory and in-person sales from the same system as the online store. Modular architecture (~42 packages) with repository pattern and event-based extensibility — the foundation I use to build custom stores for clients.',
    stack: ['Laravel 12 / PHP 8.3', 'Vue.js 3', 'Tailwind CSS', 'MySQL', 'POS'],
    url: 'https://store.easyprodigital.com',
    demo: { user: 'admin@example.com', password: 'admin123' },
    repo: 'https://github.com/jesuscriss301/bagisto',
    image: null,
    private: false,
  },
  {
    id: 'mipres',
    name: 'MIPRES Reporting API — Ministry of Health',
    type: 'Healthcare API',
    year: '2026',
    summary:
      "Integration with Colombia's Ministry of Health platform for prescription reporting and dispensing control, under strict healthcare-sector regulation. Optimized queries cut response times by 40% while processing 3,000 daily transactions.",
    stack: ['PHP / Symfony', 'MariaDB', 'REST'],
    url: null,
    image: null,
    private: true,
  },
  {
    id: 'ai-chatbot',
    name: 'AI Customer Service Chatbot',
    type: 'AI + WhatsApp',
    year: '2025',
    summary:
      'AI chatbot integrated with WhatsApp Business that cut response times from 10–40 minutes to under 1 minute and automated 85% of customer inquiries.',
    stack: ['Python', 'OpenAI API', 'WhatsApp Business'],
    url: null,
    image: null,
    private: true,
  },
  {
    id: 'seo-generator',
    name: 'AI SEO Article Generator',
    type: 'AI Content',
    year: '2025',
    summary:
      'Python + Gemini API application that generates SEO articles at scale — 150 articles per week — with a built-in content strategy for organic ranking.',
    stack: ['Python', 'Gemini API', 'SEO'],
    url: null,
    image: null,
    private: true,
  },
  {
    id: 'bagisto-stores',
    name: 'Bagisto E-commerce Stores',
    type: 'E-commerce',
    year: '2024',
    summary:
      'Online stores with catalog, payment gateway and order management, plus on-page SEO that grew organic traffic by 40% and ranked 30 keywords on Google’s first page.',
    stack: ['Bagisto / Laravel', 'MySQL', 'SEO'],
    url: null,
    image: null,
    private: true,
  },
  {
    id: 'mining-crm',
    name: 'Mining Sector CRM',
    type: 'Enterprise SaaS',
    year: '2023',
    summary:
      'Customer and operations management platform with a microservices architecture for real-time monitoring, built from scratch while leading a development team.',
    stack: ['Java / Spring Boot', 'MySQL', 'Microservices'],
    url: null,
    image: null,
    private: true,
  },
  {
    id: 'hotel-reservations',
    name: 'Hotel-Restaurant Reservation System',
    type: 'Web Application',
    year: '2022',
    summary:
      'Real-time reservation management for a hotel-restaurant, with a responsive interface for staff and guests.',
    stack: ['Java', 'MySQL', 'Bootstrap'],
    url: null,
    image: null,
    private: true,
  },
]

// Niche sample sites — full demos hosted separately (demos.easyprodigital.com,
// the showcase/ project), meant to show a visitor in that industry what their
// own site could look like.
export const nicheDemos = [
  {
    slug: 'salon-belleza',
    niche: 'Beauty salon & aesthetics',
    brand: 'Bella Aura Studio',
    summary:
      'Booking, priced services, testimonials and a warm aesthetic built for beauty businesses.',
    url: 'https://demos.easyprodigital.com/salon-belleza',
  },
]
