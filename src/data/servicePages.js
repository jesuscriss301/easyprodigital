// ============================================================
//  Una página propia por servicio (EN + ES), con el mismo molde que las
//  landings de nicho (NicheLanding en pages.jsx). Para agregar un servicio:
//  1) añade su slug a SERVICE_SLUGS, 2) escribe su bloque en `en` y en `es`,
//  3) agrega la ruta en src/App.jsx y en scripts/prerender.mjs.
//  El mercado objetivo es EE. UU., Canadá y Colombia: el inglés habla a
//  EE. UU./Canadá (texto, WhatsApp, Google) y el español a Colombia.
// ============================================================
import { articles } from './articles.js'

export const SERVICE_SLUGS = [
  'get-found-online',
  'instant-replies',
  'customer-retention',
  'web-development',
  'mobile-development',
  'saas-development',
  'seo-services',
  'digital-marketing',
  'ai-integrations',
]

// Artículos del blog que van en la columna derecha de cada servicio.
// Incluye las dos landings que ya existían (nicho y ficha de Google).
export const SERVICE_ARTICLES = {
  'get-found-online': ['invisible-on-google-where-to-start', 'google-business-profile-local-trades', 'how-much-should-a-website-cost'],
  'instant-replies': ['fontanero-cotizacion-automatica-whatsapp', 'whatsapp-only-business-losing-sales', 'emergency-page-converts-2am'],
  'customer-retention': ['dentista-crm-recordatorios-inasistencias', 'salon-app-reservas-fidelizacion', 'cleaning-company-recurring-clients'],
  'web-development': ['how-much-should-a-website-cost', 'plumbing-website-no-calls', 'web-dos-anos-sin-mantenimiento-google-olvida'],
  'mobile-development': ['agencia-idiomas-app-seguimiento-estudiantes', 'salon-app-reservas-fidelizacion', 'veterinary-website-appointment-booking'],
  'saas-development': ['construccion-erp-obra-sin-excel', 'self-storage-website-online-reservations', 'car-rental-website-availability-booking'],
  'seo-services': ['invisible-on-google-where-to-start', 'web-competencia-peor-rankea-mas-alto', 'google-business-profile-local-trades'],
  'digital-marketing': ['whatsapp-only-business-losing-sales', 'inmobiliaria-crm-seguimiento-leads', 'landscaper-website-no-contracts'],
  'ai-integrations': ['fontanero-cotizacion-automatica-whatsapp', 'web-con-ia-30-segundos-no-aparece-google', 'dentista-crm-recordatorios-inasistencias'],
  'google-business-profile-setup': ['google-business-profile-local-trades', 'invisible-on-google-where-to-start', 'web-competencia-peor-rankea-mas-alto'],
  'real-estate-website-design': ['real-estate-website-no-leads', 'five-second-test-agent-website', 'inmobiliaria-crm-seguimiento-leads'],
}

/** Artículos de la columna derecha para una ruta de servicio, o null. */
export function getServiceArticles(pathname) {
  const m = pathname.match(/\/services\/([a-z0-9-]+)\/?$/)
  const slugs = m && SERVICE_ARTICLES[m[1]]
  if (!slugs) return null
  const found = slugs.map((s) => articles.find((a) => a.slug === s)).filter(Boolean)
  return found.length ? found : null
}

const shared = {
  en: {
    includesTitle: 'What is included',
    processTitle: 'How it works',
    process: [
      { step: '01', title: 'Free audit', text: 'I look at how customers see your business today on Google, on their phone and in their messages, and tell you what to fix first.' },
      { step: '02', title: 'Fixed-price proposal', text: 'You know exactly what you get, when, and what it costs before anything starts. No surprises later.' },
      { step: '03', title: 'Build and launch', text: 'I build it, launch it and walk you through it in plain language. You always talk to the person doing the work.' },
      { step: '04', title: 'Measure', text: 'We check the numbers that matter to you: calls, messages, bookings and customers, not vanity metrics.' },
    ],
    pricingNote: 'You get a fixed price before I start, with no monthly surprise.',
    pricingCta: 'See pricing',
    faqTitle: 'Common questions',
    ctaTitle: 'Want this for your business?',
    ctaButton: 'Get my free audit',
    ctaWhatsappLabel: 'Message me on WhatsApp',
    ctaWhatsappText: 'Hi Jesús, I would like a free audit for my business.',
  },
  es: {
    includesTitle: 'Qué incluye',
    processTitle: 'Cómo trabajamos',
    process: [
      { step: '01', title: 'Auditoría gratis', text: 'Reviso cómo te ve un cliente hoy en Google, en su celular y en sus mensajes, y te digo qué arreglar primero.' },
      { step: '02', title: 'Propuesta a precio cerrado', text: 'Sabes exactamente qué recibes, cuándo y cuánto cuesta antes de empezar. Sin sorpresas después.' },
      { step: '03', title: 'Construyo y publico', text: 'Lo construyo, lo publico y te lo explico en palabras simples. Siempre hablas con quien hace el trabajo.' },
      { step: '04', title: 'Medimos', text: 'Revisamos los números que te importan: llamadas, mensajes, reservas y clientes, no métricas de vanidad.' },
    ],
    pricingNote: 'Recibes un precio cerrado antes de empezar, sin sorpresas mensuales.',
    pricingCta: 'Ver precios',
    faqTitle: 'Preguntas frecuentes',
    ctaTitle: '¿Quieres esto para tu negocio?',
    ctaButton: 'Pedir mi auditoría gratis',
    ctaWhatsappLabel: 'Escríbeme por WhatsApp',
    ctaWhatsappText: 'Hola Jesús, quiero una auditoría gratis para mi negocio.',
  },
}

const en = {
  'get-found-online': {
    serviceType: 'Website design and local SEO',
    audienceType: 'Local businesses',
    seoTitle: 'Websites & Local SEO for Small Businesses | Easy Pro Digital',
    seoDescription: 'A clear, fast website plus a complete Google Business Profile so customers in the US and Canada find you and choose you. Fixed price, no jargon.',
    eyebrow: 'Get Found',
    title: 'Get found on Google by customers who are ready to buy',
    intro: 'A clear, fast website and a complete Google Business Profile, so people who search for what you do find you first and know how to contact you in one tap.',
    problemTitle: 'What this fixes',
    problems: [
      'Customers search for your service and your competitors show up instead of you.',
      'Your website is slow on a phone, confusing, or says nothing about why to pick you.',
      'Your Google listing is incomplete, so you miss the map results where most local calls start.',
      'Visitors leave because there is no obvious way to call, text or book.',
    ],
    includes: [
      'A fast, mobile-first website with clear messaging for your business.',
      'A complete Google Business Profile: categories, services, photos and hours.',
      'Pages written around what your customers actually search, including your city or service area.',
      'Call, text and WhatsApp buttons on every page.',
      'Basic analytics so you can see how many people find and contact you.',
      'Technical SEO: titles, descriptions, structured data and page speed.',
    ],
    faq: [
      { q: 'How long does it take?', a: 'It depends on the size of the site. You get a timeline in the fixed-price proposal, before anything starts.' },
      { q: 'Do I need to understand technology?', a: 'No. I handle everything and explain each step in plain language.' },
      { q: 'Will I rank first on Google?', a: 'Nobody can promise a position. I remove what is holding you back and track calls and messages so you can see what is working.' },
    ],
    ctaCopy: 'Tell me about your business and I will send you a free audit of how customers see you on Google today.',
  },
  'instant-replies': {
    serviceType: 'Business messaging automation',
    audienceType: 'Local businesses',
    seoTitle: 'Instant Replies by Text & WhatsApp | Easy Pro Digital',
    seoDescription: 'Answer every customer message in seconds with automatic replies and quick quotes by text or WhatsApp, and get an alert when a real lead comes in.',
    eyebrow: 'Respond Fast',
    title: 'Never leave a customer waiting for an answer',
    intro: 'Automatic replies to common questions, quick quotes and an alert on your phone when a new inquiry arrives, so you reply first and sell more.',
    problemTitle: 'What this fixes',
    problems: [
      'Messages arrive while you are working and the customer moves on to the next business.',
      'You answer the same five questions all day.',
      'Quotes take hours, so the customer who asked first is gone by the time you reply.',
      'Inquiries come from your website, Google, Instagram and WhatsApp, and some get lost.',
    ],
    includes: [
      'Automatic answers to your most common questions, in your own tone.',
      'Quick quote requests collected by text, WhatsApp or web form.',
      'A phone alert when a real inquiry arrives, with the customer details.',
      'An after-hours message that sets clear expectations.',
      'A handoff to you whenever the customer needs a real person.',
    ],
    faq: [
      { q: 'Will customers know it is automatic?', a: 'You decide the tone. The replies can sound like your business and hand the conversation to you whenever a person is needed.' },
      { q: 'Which channels does it work with?', a: 'WhatsApp Business is the main one, plus web forms and alerts to your phone. We pick the mix that matches how your customers already write to you.' },
      { q: 'Can I change the answers later?', a: 'Yes. I show you how, or I update them for you when your offer or prices change.' },
    ],
    ctaCopy: 'Tell me how customers contact you today and I will show you where messages are getting lost.',
  },
  'customer-retention': {
    serviceType: 'Customer retention and appointment reminders',
    audienceType: 'Clinics, salons and service businesses',
    seoTitle: 'Reminders & Customer Follow-Up | Easy Pro Digital',
    seoDescription: 'Appointment reminders, simple customer tracking and follow-up messages that bring customers back and cut no-shows for clinics, salons and service businesses.',
    eyebrow: 'Keep Them Coming Back',
    title: 'Turn one-time customers into regulars',
    intro: 'Appointment reminders, simple tracking of each customer and follow-up messages, so people return and recommend you without you chasing them.',
    problemTitle: 'What this fixes',
    problems: [
      'Customers book once and never return because nobody follows up.',
      'No-shows leave empty slots you cannot refill.',
      'You cannot remember who is due for a check-up, a service or a renewal.',
      'Reviews and referrals only happen when you remember to ask.',
    ],
    includes: [
      'Reminders by WhatsApp, text or email before every appointment.',
      'A simple customer list with last visit and next due date.',
      'Follow-up messages after a visit and when a customer is due to return.',
      'A review request after each good experience.',
      'A short monthly summary of returning customers.',
      'An optional booking page connected to the reminders.',
    ],
    faq: [
      { q: 'Does it replace my calendar?', a: 'No. It connects to the way you already schedule, so you do not have to change everything at once.' },
      { q: 'What if a customer does not reply?', a: 'They are flagged so you can follow up personally with a ready-made message.' },
      { q: 'How much work is it for me?', a: 'Very little. You serve your customers and the system handles reminders and follow-ups.' },
    ],
    ctaCopy: 'Tell me what kind of business you run and I will show you how many customers a follow-up system could bring back.',
  },
  'web-development': {
    serviceType: 'Custom web development',
    audienceType: 'Businesses and startups',
    seoTitle: 'Custom Web Development for Businesses | Easy Pro Digital',
    seoDescription: 'Fast, secure custom websites and web applications built with Java, PHP and React, with SEO and Core Web Vitals in mind, for businesses in the US and Canada.',
    eyebrow: 'Web Development',
    title: 'Websites and web applications built to last',
    intro: 'From a fast business website to an internal system handling thousands of daily transactions, built and maintained by the same developer.',
    problemTitle: 'What this solves',
    problems: [
      'Your website is slow, outdated or hard to update, and it shows.',
      'You need features a template cannot do: custom quotes, portals, integrations.',
      'Your systems do not talk to each other, so your team retypes data.',
      'The last agency left and nobody knows how your site works.',
    ],
    includes: [
      'Custom web applications and enterprise systems.',
      'E-commerce with Bagisto: catalog, payments and order management.',
      'REST APIs and microservices architecture.',
      'Java (Spring Boot) or PHP (Symfony/Laravel) backend with a React/TypeScript frontend.',
      'SEO-ready pages optimized for Core Web Vitals.',
    ],
    faq: [
      { q: 'Which technologies do you use?', a: 'Java (Spring Boot) or PHP (Symfony/Laravel) on the backend and React/TypeScript on the frontend. I pick what fits your project, not what is fashionable.' },
      { q: 'Can you take over an existing site?', a: 'Yes. I start with a review of the code and hosting and tell you what to keep, fix or rebuild.' },
      { q: 'Will the site be found on Google?', a: 'SEO is built in: clean URLs, structured data and speed. It is part of the build, not an add-on.' },
    ],
    ctaCopy: 'Describe what you need in two lines and I will reply with a fixed price and a timeline.',
  },
  'mobile-development': {
    serviceType: 'Mobile app development',
    audienceType: 'Businesses and startups',
    seoTitle: 'Mobile App Development (iOS & Android) | Easy Pro Digital',
    seoDescription: 'Hybrid iOS and Android apps from a single codebase, connected to your existing systems. Built by one developer, with fixed scope and price.',
    eyebrow: 'Mobile Apps',
    title: 'One app for iPhone and Android, one person to talk to',
    intro: 'Hybrid apps built with web technologies: a single codebase for both platforms, connected to the same systems that power your web product.',
    problemTitle: 'What this solves',
    problems: [
      'Your team or customers need an app, but two separate builds would double the cost.',
      'You have a web system and want a mobile version that uses the same data.',
      'Staff in the field need a simple tool, not a full desktop system.',
    ],
    includes: [
      'One codebase for iOS and Android.',
      'Integration with your existing backend and APIs.',
      'Responsive interfaces built for daily operations.',
      'Store-ready builds and a clear launch plan.',
    ],
    faq: [
      { q: 'Is a hybrid app as good as a native one?', a: 'For most business apps, yes: forms, bookings, lists and notifications work very well. If you need heavy graphics or special hardware, I will tell you upfront.' },
      { q: 'Can the app use my current website data?', a: 'Yes. It connects to the same APIs, so customers and staff see the same information everywhere.' },
      { q: 'Do I also get a web version?', a: 'Often yes, and cheaply, because the same code and APIs can serve both.' },
    ],
    ctaCopy: 'Tell me who would use the app and what they need to do with it, and I will send a fixed price.',
  },
  'saas-development': {
    serviceType: 'SaaS development',
    audienceType: 'Founders and growing businesses',
    seoTitle: 'SaaS Development, MVP to Production | Easy Pro Digital',
    seoDescription: 'Scalable SaaS platforms with authentication, payments and multi-tenant architecture, designed for compliance and growth, from MVP to production.',
    eyebrow: 'SaaS Solutions',
    title: 'Scalable cloud platforms, from MVP to production',
    intro: 'Cloud platforms built to grow: authentication, payments and architecture for real-time data. I have designed databases and systems for pharmaceutical supply chains, mining CRMs and reservation systems.',
    problemTitle: 'What this solves',
    problems: [
      'You have an idea and need a first version that real customers can pay for.',
      'Your spreadsheet process has outgrown spreadsheets.',
      'Your product must handle many customers (multi-tenant) without mixing their data.',
      'You operate in a regulated area and need the data design to hold up.',
    ],
    includes: [
      'Microservices for real-time monitoring.',
      'Regulatory-compliant database design.',
      'Payment gateways and subscriptions.',
      'Multi-tenant architecture, such as Turnero, my virtual queue SaaS.',
      'Docker-based deployment on your own server or cloud.',
    ],
    faq: [
      { q: 'Can you start with a small MVP?', a: 'Yes. I recommend it: a small first version, real users, and then we decide what to build next.' },
      { q: 'Who owns the code?', a: 'You do. It lives in your repository and your cloud account.' },
      { q: 'Can you work with my team?', a: 'Yes. I can lead the build or join your developers on a specific part.' },
    ],
    ctaCopy: 'Describe the product in a few lines and I will tell you how I would build the first version.',
  },
  'seo-services': {
    serviceType: 'Search engine optimization',
    audienceType: 'Local and online businesses',
    seoTitle: 'SEO Services for Local & Online Businesses | Easy Pro Digital',
    seoDescription: 'Technical, on-page and local SEO for businesses in the US, Canada and Colombia: structured data, speed and content that earns real traffic.',
    eyebrow: 'SEO Services',
    title: 'SEO that shows up in the numbers',
    intro: 'SEO built in from the start, not bolted on at the end: structured data, URL architecture, web performance and on-page optimization. On a past store, organic traffic grew 40% and 30 keywords reached page one.',
    problemTitle: 'What this solves',
    problems: [
      'You publish a website and nobody finds it.',
      'Competitors with worse sites rank above you.',
      'Your content is not written for what people search, or for AI answer engines.',
      'You do not know which pages bring real calls and which do not.',
    ],
    includes: [
      'On-page SEO and URL architecture.',
      'Structured data (schema.org) and meta tag optimization.',
      'Local SEO: Google Business Profile and local pages for your cities.',
      'AI-assisted content pipelines, up to 150 articles per week for large catalogs.',
      'Content structured so Google and AI assistants can quote you.',
    ],
    faq: [
      { q: 'How long until I see results?', a: 'Local searches can move in one to three months. Competitive national terms take longer. I tell you which is which for your case.' },
      { q: 'Do you guarantee rankings?', a: 'No one honestly can. I guarantee the work and the reporting, so you see what moves.' },
      { q: 'Is SEO different for the US, Canada and Colombia?', a: 'Yes: language, search habits and local directories differ. I set up each market separately.' },
    ],
    ctaCopy: 'Send me your website and I will tell you the three things holding it back on Google.',
  },
  'digital-marketing': {
    serviceType: 'Marketing automation',
    audienceType: 'Small and medium businesses',
    seoTitle: 'Marketing Automation & Lead Follow-Up | Easy Pro Digital',
    seoDescription: 'Connect acquisition to real numbers: n8n automations, WhatsApp Business flows and monthly reports that show leads and customers, not vanity metrics.',
    eyebrow: 'Digital Marketing',
    title: 'Marketing that runs almost on its own and reports real numbers',
    intro: 'User acquisition connected to real business metrics, plus workflow automation with n8n, AI agents and REST APIs, so every lead is captured, answered and tracked.',
    problemTitle: 'What this solves',
    problems: [
      'Leads arrive from several places and nobody tracks them in one spot.',
      'You spend on ads or posts and cannot tell what brought customers.',
      'Follow-up depends on someone remembering.',
    ],
    includes: [
      'Business workflow automation with n8n.',
      'WhatsApp Business integrations.',
      'Measurable campaigns with monthly reporting.',
      'Lead capture forms connected to your inbox or CRM.',
    ],
    faq: [
      { q: 'Do you run ads for me?', a: 'I set up the tracking and automation first, so that any ad spend can be measured. Then we decide what to promote.' },
      { q: 'What is n8n?', a: 'A tool that connects your apps so tasks happen automatically, for example a new form entry creating a contact and sending a message.' },
      { q: 'What will I see each month?', a: 'A short report: leads, replies, bookings and what to do next, in plain language.' },
    ],
    ctaCopy: 'Tell me where your leads come from today and I will show you where they get lost.',
  },
  'ai-integrations': {
    serviceType: 'AI integration and chatbot development',
    audienceType: 'Businesses',
    seoTitle: 'AI Chatbots & Integrations for Business | Easy Pro Digital',
    seoDescription: 'Practical AI: chatbots on WhatsApp Business, content pipelines and private local models for businesses that cannot send data to the cloud.',
    eyebrow: 'AI Integrations',
    title: 'AI that solves real business problems',
    intro: 'A WhatsApp chatbot I built took response time from 10–40 minutes to under a minute and automated 85% of customer inquiries. The same approach works with cloud APIs or with private models on your own infrastructure.',
    problemTitle: 'What this solves',
    problems: [
      'Your team answers the same questions all day.',
      'Customers write outside business hours and get nothing back.',
      'Your data is sensitive and cannot go to a cloud AI service.',
      'You want AI, but not a gimmick that gives wrong answers.',
    ],
    includes: [
      'AI chatbots integrated with WhatsApp Business.',
      'Answers grounded in your own documents (RAG), so the bot uses your information.',
      'Private LLM deployments (DeepSeek, Qwen) on your own infrastructure.',
      'AI-driven content and data pipelines.',
      'OpenAI, Gemini and Claude APIs when the cloud is acceptable.',
    ],
    faq: [
      { q: 'Will the bot make things up?', a: 'I ground it in your documents and limit it to what it knows, with a handoff to a person when it is unsure.' },
      { q: 'Is my data safe?', a: 'It depends on the model. For sensitive data I deploy open-source models on your own server, so nothing leaves it.' },
      { q: 'How much does it cost to run?', a: 'I estimate it in the proposal: setup plus a small monthly cost for hosting and usage.' },
    ],
    ctaCopy: 'Tell me what questions your customers ask most and I will show you what a bot could handle.',
  },
}

const es = {
  'get-found-online': {
    serviceType: 'Diseño web y SEO local',
    audienceType: 'Negocios locales',
    seoTitle: 'Páginas Web y SEO Local para Negocios | Easy Pro Digital',
    seoDescription: 'Página web clara y rápida más tu ficha de Google completa para que los clientes en Colombia te encuentren y te elijan. Precio cerrado, sin tecnicismos.',
    eyebrow: 'Aparece',
    title: 'Aparece en Google ante clientes listos para comprar',
    intro: 'Una página web clara y rápida y tu ficha de Google completa, para que quien busque lo que haces te encuentre primero y sepa cómo contactarte con un toque.',
    problemTitle: 'Qué resuelve',
    problems: [
      'Los clientes buscan tu servicio y aparece tu competencia en vez de ti.',
      'Tu página es lenta en el celular, confusa o no dice por qué elegirte.',
      'Tu ficha de Google está incompleta y te pierdes el mapa, donde empiezan la mayoría de llamadas locales.',
      'Los visitantes se van porque no hay una forma obvia de llamar, escribir o reservar.',
    ],
    includes: [
      'Página web rápida, pensada primero para el celular, con mensajes claros para tu negocio.',
      'Ficha de Google completa: categorías, servicios, fotos y horarios.',
      'Páginas escritas según lo que tus clientes buscan, incluyendo tu ciudad o zona de servicio.',
      'Botones de llamada y WhatsApp en cada página.',
      'Analítica básica para ver cuántas personas te encuentran y te contactan.',
      'SEO técnico: títulos, descripciones, datos estructurados y velocidad.',
    ],
    faq: [
      { q: '¿Cuánto tarda?', a: 'Depende del tamaño de la página. Recibes el plazo en la propuesta a precio cerrado, antes de empezar.' },
      { q: '¿Tengo que entender de tecnología?', a: 'No. Yo me encargo de todo y te explico cada paso en palabras simples.' },
      { q: '¿Voy a salir primero en Google?', a: 'Nadie puede prometer una posición. Quito lo que te frena y mido llamadas y mensajes para que veas qué funciona.' },
    ],
    ctaCopy: 'Cuéntame de tu negocio y te envío una auditoría gratis de cómo te ven hoy los clientes en Google.',
  },
  'instant-replies': {
    serviceType: 'Automatización de mensajes para negocios',
    audienceType: 'Negocios locales',
    seoTitle: 'Respuestas Automáticas por WhatsApp | Easy Pro Digital',
    seoDescription: 'Responde cada mensaje de tus clientes en segundos con respuestas automáticas y cotizaciones rápidas por WhatsApp, y recibe un aviso cuando llegue un cliente real.',
    eyebrow: 'Responde',
    title: 'Que ningún cliente se quede esperando respuesta',
    intro: 'Respuestas automáticas a las preguntas comunes, cotizaciones rápidas y un aviso en tu celular cuando entra una consulta nueva. Respondes primero y vendes más.',
    problemTitle: 'Qué resuelve',
    problems: [
      'Los mensajes llegan mientras trabajas y el cliente se va con el siguiente negocio.',
      'Contestas las mismas cinco preguntas todo el día.',
      'Las cotizaciones tardan horas y el primero que preguntó ya se fue cuando respondes.',
      'Las consultas llegan por tu web, Google, Instagram y WhatsApp, y algunas se pierden.',
    ],
    includes: [
      'Respuestas automáticas a tus preguntas más comunes, con tu tono.',
      'Solicitudes de cotización recogidas por WhatsApp o formulario web.',
      'Aviso a tu celular cuando entra una consulta real, con los datos del cliente.',
      'Un mensaje fuera de horario que aclara qué esperar.',
      'Traspaso a ti cuando el cliente necesita una persona.',
    ],
    faq: [
      { q: '¿Los clientes sabrán que es automático?', a: 'Tú decides el tono. Las respuestas pueden sonar como tu negocio y pasarte la conversación cuando haga falta una persona.' },
      { q: '¿Con qué canales funciona?', a: 'WhatsApp Business es el principal, además de formularios web y avisos a tu celular. Elegimos la mezcla que encaja con cómo te escriben tus clientes.' },
      { q: '¿Puedo cambiar las respuestas después?', a: 'Sí. Te enseño cómo, o las actualizo yo cuando cambie tu oferta o tus precios.' },
    ],
    ctaCopy: 'Cuéntame cómo te contactan hoy los clientes y te muestro dónde se pierden los mensajes.',
  },
  'customer-retention': {
    serviceType: 'Retención de clientes y recordatorios de citas',
    audienceType: 'Clínicas, salones y negocios de servicios',
    seoTitle: 'Recordatorios y Seguimiento de Clientes | Easy Pro Digital',
    seoDescription: 'Recordatorios de citas, seguimiento simple de clientes y mensajes de regreso que reducen las inasistencias en clínicas, salones y negocios de servicios.',
    eyebrow: 'Retiene',
    title: 'Convierte clientes de una sola vez en clientes fijos',
    intro: 'Recordatorios de citas, seguimiento simple de cada cliente y mensajes de regreso, para que vuelvan y te recomienden sin que tengas que perseguirlos.',
    problemTitle: 'Qué resuelve',
    problems: [
      'Los clientes reservan una vez y no vuelven porque nadie les hace seguimiento.',
      'Las inasistencias dejan huecos que no puedes volver a llenar.',
      'No recuerdas a quién le toca control, servicio o renovación.',
      'Las reseñas y los referidos solo ocurren cuando te acuerdas de pedirlos.',
    ],
    includes: [
      'Recordatorios por WhatsApp o correo antes de cada cita.',
      'Lista simple de clientes con última visita y próxima fecha.',
      'Mensajes de seguimiento después de la visita y cuando toca volver.',
      'Solicitud de reseña después de cada buena experiencia.',
      'Resumen mensual corto de clientes que regresan.',
      'Página de reservas opcional conectada a los recordatorios.',
    ],
    faq: [
      { q: '¿Reemplaza mi agenda?', a: 'No. Se conecta con la forma en que ya agendas, para que no tengas que cambiarlo todo de golpe.' },
      { q: '¿Qué pasa si un cliente no responde?', a: 'Queda marcado para que lo contactes tú con un mensaje ya preparado.' },
      { q: '¿Cuánto trabajo me da a mí?', a: 'Muy poco. Tú atiendes a tus clientes y el sistema se encarga de recordatorios y seguimientos.' },
    ],
    ctaCopy: 'Cuéntame qué tipo de negocio tienes y te muestro cuántos clientes podría recuperar un sistema de seguimiento.',
  },
  'web-development': {
    serviceType: 'Desarrollo web a medida',
    audienceType: 'Empresas y startups',
    seoTitle: 'Desarrollo Web a Medida en Colombia | Easy Pro Digital',
    seoDescription: 'Sitios y aplicaciones web a medida, rápidos y seguros, con Java, PHP y React, pensados para SEO y Core Web Vitals. Para negocios en Colombia.',
    eyebrow: 'Desarrollo web',
    title: 'Sitios y aplicaciones web hechos para durar',
    intro: 'Desde una web rápida para tu negocio hasta un sistema interno con miles de transacciones diarias, construido y mantenido por el mismo desarrollador.',
    problemTitle: 'Qué resuelve',
    problems: [
      'Tu página es lenta, anticuada o difícil de actualizar, y se nota.',
      'Necesitas funciones que una plantilla no hace: cotizaciones a medida, portales, integraciones.',
      'Tus sistemas no se hablan entre sí y tu equipo digita los datos dos veces.',
      'La última agencia se fue y nadie sabe cómo funciona tu sitio.',
    ],
    includes: [
      'Aplicaciones web a medida y sistemas empresariales.',
      'E-commerce con Bagisto: catálogo, pagos y gestión de pedidos.',
      'APIs REST y arquitectura de microservicios.',
      'Backend en Java (Spring Boot) o PHP (Symfony/Laravel) con frontend en React/TypeScript.',
      'Páginas listas para SEO y optimizadas para Core Web Vitals.',
    ],
    faq: [
      { q: '¿Qué tecnologías usas?', a: 'Java (Spring Boot) o PHP (Symfony/Laravel) en el backend y React/TypeScript en el frontend. Elijo lo que encaja con tu proyecto, no lo que está de moda.' },
      { q: '¿Puedes tomar un sitio que ya existe?', a: 'Sí. Empiezo revisando el código y el hosting, y te digo qué conservar, arreglar o rehacer.' },
      { q: '¿El sitio aparecerá en Google?', a: 'El SEO viene incluido: URLs limpias, datos estructurados y velocidad. Es parte de la construcción, no un extra.' },
    ],
    ctaCopy: 'Cuéntame en dos líneas qué necesitas y te respondo con un precio cerrado y un plazo.',
  },
  'mobile-development': {
    serviceType: 'Desarrollo de apps móviles',
    audienceType: 'Empresas y startups',
    seoTitle: 'Apps Móviles iOS y Android a Medida | Easy Pro Digital',
    seoDescription: 'Apps híbridas para iOS y Android con un solo código, conectadas a tus sistemas actuales. Las construye una sola persona, con alcance y precio cerrados.',
    eyebrow: 'Apps móviles',
    title: 'Una app para iPhone y Android, una sola persona con quien hablar',
    intro: 'Apps híbridas hechas con tecnologías web: un solo código para las dos plataformas, conectadas a los mismos sistemas que mueven tu producto web.',
    problemTitle: 'Qué resuelve',
    problems: [
      'Tu equipo o tus clientes necesitan una app, pero hacer dos desarrollos separados duplicaría el costo.',
      'Tienes un sistema web y quieres una versión móvil que use los mismos datos.',
      'El personal en campo necesita una herramienta simple, no un sistema de escritorio completo.',
    ],
    includes: [
      'Un solo código para iOS y Android.',
      'Integración con tu backend y APIs actuales.',
      'Interfaces responsivas pensadas para la operación diaria.',
      'Versiones listas para las tiendas y un plan de lanzamiento claro.',
    ],
    faq: [
      { q: '¿Una app híbrida es tan buena como una nativa?', a: 'Para la mayoría de apps de negocio sí: formularios, reservas, listas y notificaciones funcionan muy bien. Si necesitas gráficos pesados o hardware especial, te lo digo desde el principio.' },
      { q: '¿La app puede usar los datos de mi web?', a: 'Sí. Se conecta a las mismas APIs, así que clientes y personal ven la misma información en todas partes.' },
      { q: '¿Tendré también una versión web?', a: 'Muchas veces sí y a bajo costo, porque el mismo código y las mismas APIs pueden servir a ambas.' },
    ],
    ctaCopy: 'Cuéntame quién usaría la app y qué necesita hacer con ella, y te envío un precio cerrado.',
  },
  'saas-development': {
    serviceType: 'Desarrollo de SaaS',
    audienceType: 'Fundadores y negocios en crecimiento',
    seoTitle: 'Desarrollo de SaaS: del MVP a Producción | Easy Pro Digital',
    seoDescription: 'Plataformas SaaS escalables con autenticación, pagos y arquitectura multi-cliente, pensadas para normativa y crecimiento, del MVP a producción.',
    eyebrow: 'Soluciones SaaS',
    title: 'Plataformas en la nube que escalan, del MVP a producción',
    intro: 'Plataformas construidas para crecer: autenticación, pagos y arquitectura para datos en tiempo real. He diseñado bases de datos y sistemas para cadenas de suministro farmacéuticas, CRMs mineros y sistemas de reservas.',
    problemTitle: 'Qué resuelve',
    problems: [
      'Tienes una idea y necesitas una primera versión por la que clientes reales puedan pagar.',
      'Tu proceso en hojas de cálculo ya se les quedó pequeño.',
      'Tu producto debe atender a muchos clientes (multi-cliente) sin mezclar sus datos.',
      'Operas en un sector regulado y el diseño de datos debe resistir.',
    ],
    includes: [
      'Microservicios para monitoreo en tiempo real.',
      'Diseño de bases de datos que cumple la normativa.',
      'Pasarelas de pago y suscripciones.',
      'Arquitectura multi-cliente, como Turnero, mi SaaS de turnos virtuales.',
      'Despliegue con Docker en tu servidor o nube.',
    ],
    faq: [
      { q: '¿Puedes empezar con un MVP pequeño?', a: 'Sí, lo recomiendo: una primera versión pequeña, usuarios reales y luego decidimos qué construir.' },
      { q: '¿De quién es el código?', a: 'Tuyo. Vive en tu repositorio y en tu cuenta de nube.' },
      { q: '¿Puedes trabajar con mi equipo?', a: 'Sí. Puedo liderar la construcción o sumarme a tus desarrolladores en una parte concreta.' },
    ],
    ctaCopy: 'Descríbeme el producto en pocas líneas y te cuento cómo construiría la primera versión.',
  },
  'seo-services': {
    serviceType: 'Optimización para buscadores (SEO)',
    audienceType: 'Negocios locales y online',
    seoTitle: 'SEO Técnico y Local en Colombia | Easy Pro Digital',
    seoDescription: 'SEO técnico, on-page y local para negocios en Colombia, EE. UU. y Canadá: datos estructurados, velocidad y contenido que trae tráfico real.',
    eyebrow: 'Servicios de SEO',
    title: 'SEO que se ve en los números',
    intro: 'SEO desde el inicio, no pegado al final: datos estructurados, arquitectura de URLs, rendimiento web y optimización on-page. En una tienda anterior, el tráfico orgánico creció 40 % y 30 palabras clave llegaron a la primera página.',
    problemTitle: 'Qué resuelve',
    problems: [
      'Publicas una web y nadie la encuentra.',
      'Competidores con peores sitios salen por encima de ti.',
      'Tu contenido no está escrito para lo que la gente busca ni para los buscadores con IA.',
      'No sabes qué páginas traen llamadas reales y cuáles no.',
    ],
    includes: [
      'SEO on-page y arquitectura de URLs.',
      'Datos estructurados (schema.org) y optimización de metaetiquetas.',
      'SEO local: ficha de Google y páginas locales para tus ciudades.',
      'Producción de contenido asistida por IA, hasta 150 artículos por semana en catálogos grandes.',
      'Contenido estructurado para que Google y los asistentes de IA puedan citarte.',
    ],
    faq: [
      { q: '¿Cuánto tarda en verse resultado?', a: 'Las búsquedas locales pueden moverse en uno a tres meses. Los términos nacionales competidos tardan más. Te digo cuál aplica a tu caso.' },
      { q: '¿Garantizas posiciones?', a: 'Nadie puede hacerlo con honestidad. Garantizo el trabajo y los reportes, para que veas qué se mueve.' },
      { q: '¿El SEO cambia entre Colombia, EE. UU. y Canadá?', a: 'Sí: el idioma, los hábitos de búsqueda y los directorios locales son distintos. Configuro cada mercado por separado.' },
    ],
    ctaCopy: 'Envíame tu web y te digo las tres cosas que la frenan en Google.',
  },
  'digital-marketing': {
    serviceType: 'Automatización de marketing',
    audienceType: 'Pymes',
    seoTitle: 'Automatización de Marketing y Leads | Easy Pro Digital',
    seoDescription: 'Conecta la captación con números reales: automatizaciones con n8n, flujos de WhatsApp Business y reportes mensuales de clientes y ventas, no métricas de vanidad.',
    eyebrow: 'Marketing digital',
    title: 'Marketing que funciona casi solo y reporta números reales',
    intro: 'Captación de clientes conectada a métricas reales del negocio, más automatización de procesos con n8n, agentes de IA y APIs REST, para que cada cliente potencial sea captado, atendido y medido.',
    problemTitle: 'Qué resuelve',
    problems: [
      'Los clientes potenciales llegan de varios sitios y nadie los registra en un solo lugar.',
      'Gastas en anuncios o publicaciones y no sabes qué trajo clientes.',
      'El seguimiento depende de que alguien se acuerde.',
    ],
    includes: [
      'Automatización de procesos de negocio con n8n.',
      'Integraciones con WhatsApp Business.',
      'Campañas medibles con reporte mensual.',
      'Formularios de captación conectados a tu correo o CRM.',
    ],
    faq: [
      { q: '¿Manejas los anuncios por mí?', a: 'Primero dejo listo el seguimiento y la automatización, para que cualquier inversión en anuncios se pueda medir. Luego decidimos qué promocionar.' },
      { q: '¿Qué es n8n?', a: 'Una herramienta que conecta tus aplicaciones para que las tareas ocurran solas, por ejemplo que un formulario nuevo cree un contacto y envíe un mensaje.' },
      { q: '¿Qué veré cada mes?', a: 'Un reporte corto: clientes potenciales, respuestas, reservas y qué hacer después, en palabras simples.' },
    ],
    ctaCopy: 'Cuéntame de dónde llegan hoy tus clientes potenciales y te muestro dónde se pierden.',
  },
  'ai-integrations': {
    serviceType: 'Integración de IA y chatbots',
    audienceType: 'Empresas',
    seoTitle: 'Chatbots e IA para Negocios | Easy Pro Digital',
    seoDescription: 'IA práctica: chatbots en WhatsApp Business, producción de contenido y modelos locales privados para negocios que no pueden enviar sus datos a la nube.',
    eyebrow: 'Integraciones de IA',
    title: 'IA que resuelve problemas reales de negocio',
    intro: 'Un chatbot de WhatsApp que construí bajó el tiempo de respuesta de 10–40 minutos a menos de un minuto y automatizó el 85 % de las consultas. El mismo enfoque sirve con APIs en la nube o con modelos privados en tu propia infraestructura.',
    problemTitle: 'Qué resuelve',
    problems: [
      'Tu equipo responde las mismas preguntas todo el día.',
      'Los clientes escriben fuera de horario y no reciben nada.',
      'Tus datos son sensibles y no pueden ir a un servicio de IA en la nube.',
      'Quieres IA, pero no un juguete que da respuestas equivocadas.',
    ],
    includes: [
      'Chatbots con IA integrados a WhatsApp Business.',
      'Respuestas basadas en tus propios documentos (RAG), para que el bot use tu información.',
      'Modelos privados (DeepSeek, Qwen) en tu propia infraestructura.',
      'Producción de contenido y datos con IA.',
      'APIs de OpenAI, Gemini y Claude cuando la nube es aceptable.',
    ],
    faq: [
      { q: '¿El bot se inventa cosas?', a: 'Lo baso en tus documentos y lo limito a lo que sabe, con traspaso a una persona cuando no está seguro.' },
      { q: '¿Mis datos están seguros?', a: 'Depende del modelo. Con datos sensibles instalo modelos de código abierto en tu propio servidor, para que nada salga de él.' },
      { q: '¿Cuánto cuesta mantenerlo?', a: 'Lo estimo en la propuesta: implementación más un costo mensual pequeño de alojamiento y uso.' },
    ],
    ctaCopy: 'Cuéntame qué preguntas te hacen más los clientes y te muestro qué podría atender un bot.',
  },
}

const pages = { en, es }

/** Contenido completo de un servicio en el molde que usa NicheLanding. */
export function getServicePage(lang, slug) {
  const l = lang === 'es' ? 'es' : 'en'
  const entry = pages[l][slug]
  if (!entry) return null
  return { ...shared[l], ...entry }
}

/** Grupos para la portada y la página de servicios. */
export const SOLUTION_SLUGS = ['get-found-online', 'instant-replies', 'customer-retention']
export const TECH_SLUGS = SERVICE_SLUGS.filter((s) => !SOLUTION_SLUGS.includes(s))
