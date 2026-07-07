// ============================================================
//  EDITA ESTE ARCHIVO para personalizar todo el contenido.
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
    'Full-stack developer shipping production software for healthcare, mining, hospitality and e-commerce — backend in Java & PHP, frontend in React/TypeScript, with applied AI and SEO built in.',

  location: 'Medellín, Colombia',
  timezoneLabel: 'GMT-5',
  available: true,

  email: 'info@easyprodigital.com',
  whatsapp: 'https://wa.me/573222309267',
  linkedin: 'https://www.linkedin.com/in/jesus-cristancho',
  tiktok: 'https://www.tiktok.com/@easyprodigital',
  github: 'https://github.com/jesuscriss301',

  about: [
    `I'm Jesús Manuel Cristancho, a Systems Engineer and full-stack developer based in Medellín, Colombia. I've delivered production software across healthcare, mining, hospitality and e-commerce — including integrations with Colombia's Ministry of Health (MIPRES), real-time monitoring platforms with microservices, and online stores that grew organic traffic by 40%.`,
    `My core stack is Java (Spring Boot) and PHP (Symfony/Laravel) on the backend with React/TypeScript on the frontend. I integrate applied AI — OpenAI, Gemini and Claude APIs, plus local deployments of open-source models like DeepSeek and Qwen for clients who need data privacy — and I complement every build with organic SEO. Easy Pro Digital started as an agency brand; today it's my personal practice, so you talk directly to the person who writes the code.`,
  ],
}

// Servicios (los del sitio original, con tu stack real)
export const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    short: 'Landing pages, e-commerce and custom web applications.',
    detail:
      'Fast, responsive websites and web applications: from high-converting landing pages to enterprise systems processing thousands of daily operations. Backend in Java (Spring Boot) or PHP (Symfony/Laravel), frontend in React/TypeScript — everything SEO-ready and optimized for Core Web Vitals.',
    stack: ['Java / Spring Boot', 'PHP / Symfony / Laravel', 'React / TypeScript', 'Node.js'],
    bullets: [
      'Custom web applications and enterprise systems',
      'E-commerce with Bagisto: catalog, payments, order management',
      'REST APIs and microservices architecture',
    ],
  },
  {
    id: 'mobile-development',
    title: 'Mobile Apps',
    short: 'Hybrid mobile apps for iOS and Android.',
    detail:
      'Hybrid mobile applications built with web technologies — one codebase for both platforms, connected to the same APIs that power your web product.',
    stack: ['Hybrid apps', 'React', 'TypeScript', 'REST APIs'],
    bullets: [
      'One codebase, iOS and Android',
      'Integration with your existing backend',
      'Responsive interfaces designed for daily operations',
    ],
  },
  {
    id: 'saas-development',
    title: 'SaaS Solutions',
    short: 'Scalable cloud platforms, from MVP to production.',
    detail:
      'Cloud platforms designed to scale: authentication, payments, and microservices architecture for real-time data. I have designed databases and architectures for pharmaceutical supply chains, mining CRMs and reservation systems.',
    stack: ['Spring Boot', 'PostgreSQL / MySQL / MariaDB', 'Google Cloud', 'Microservices'],
    bullets: [
      'Microservices for real-time monitoring',
      'Database design with regulatory compliance',
      'Payment gateways and subscriptions',
    ],
  },
  {
    id: 'seo-services',
    title: 'SEO Services',
    short: 'Technical, on-page and content SEO that shows in the numbers.',
    detail:
      'SEO baked into the build, not bolted on afterwards: structured data, URL architecture, web performance and on-page optimization. Results from real projects: +40% organic traffic and 30 keywords ranked on the first page.',
    stack: ['Technical SEO', 'Structured data', 'Web performance', 'Content at scale'],
    bullets: [
      'On-page SEO and URL architecture',
      'Structured data (schema.org) and meta optimization',
      'AI-assisted content pipelines: 150 articles/week',
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    short: 'Acquisition, remarketing and business automation.',
    detail:
      'User acquisition connected to real product metrics, plus business flow automation with n8n, AI agents and REST APIs — so your marketing runs on autopilot and reports real numbers.',
    stack: ['n8n automation', 'AI agents', 'WhatsApp Business', 'Analytics'],
    bullets: [
      'Business flow automation with n8n',
      'WhatsApp Business integrations',
      'Measured campaigns with monthly reporting',
    ],
  },
  {
    id: 'ai-integrations',
    title: 'AI Integrations',
    short: 'Applied AI: cloud APIs or private local models.',
    detail:
      'AI that solves real business problems: chatbots that automated 85% of customer queries, content generators producing 150 SEO articles per week, and local deployments of open-source models (DeepSeek, Qwen) for clients who cannot send data to the cloud.',
    stack: ['OpenAI / Gemini / Claude APIs', 'DeepSeek / Qwen (local)', 'Python', 'n8n / AI agents'],
    bullets: [
      'AI chatbots integrated with WhatsApp Business',
      'Private, on-premise LLM deployments',
      'AI content and data pipelines',
    ],
  },
]

// Proyectos reales (del CV)
export const projects = [
  {
    id: 'mipres',
    name: 'MIPRES Reporting API — Ministry of Health',
    type: 'Healthcare API',
    year: '2026',
    summary:
      "Integration with Colombia's Ministry of Health platform for prescription reporting and dispensation control, under strict health-sector regulation. Optimized queries cut response times by 40% while processing 3,000 daily operations.",
    stack: ['PHP / Symfony', 'MariaDB', 'REST'],
    url: null,
    image: null,
  },
  {
    id: 'ai-chatbot',
    name: 'AI Customer-Service Chatbot',
    type: 'AI + WhatsApp',
    year: '2025',
    summary:
      'AI chatbot integrated with WhatsApp Business that cut response times from 10–40 minutes to under 1 minute and automated 85% of customer queries.',
    stack: ['Python', 'OpenAI API', 'WhatsApp Business'],
    url: null,
    image: null,
  },
  {
    id: 'seo-generator',
    name: 'AI Article Generator for SEO',
    type: 'AI Content',
    year: '2025',
    summary:
      'Python + Gemini API application generating SEO-optimized articles at scale — 150 articles per week — with an integrated organic-positioning content strategy.',
    stack: ['Python', 'Gemini API', 'SEO'],
    url: null,
    image: null,
  },
  {
    id: 'bagisto-stores',
    name: 'E-commerce Stores with Bagisto',
    type: 'E-commerce',
    year: '2024',
    summary:
      'Online stores with catalog, payment gateway and order management, plus on-page SEO that grew organic traffic by 40% and ranked 30 keywords on the first page of Google.',
    stack: ['Bagisto / Laravel', 'MySQL', 'SEO'],
    url: null,
    image: null,
  },
  {
    id: 'mining-crm',
    name: 'CRM for the Mining Sector',
    type: 'Enterprise SaaS',
    year: '2023',
    summary:
      'Client and operations management platform with microservices architecture for real-time monitoring, built from scratch leading a development team.',
    stack: ['Java / Spring Boot', 'MySQL', 'Microservices'],
    url: null,
    image: null,
  },
  {
    id: 'hotel-reservations',
    name: 'Hotel & Restaurant Reservation System',
    type: 'Web App',
    year: '2022',
    summary:
      'Real-time reservation management for a hotel-restaurant, with a responsive interface for staff and guests.',
    stack: ['Java', 'MySQL', 'Bootstrap'],
    url: null,
    image: null,
  },
]
