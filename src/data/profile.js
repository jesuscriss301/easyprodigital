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
  role: 'Desarrollador Full-Stack Freelance',
  tagline:
    'Desarrollo software productivo para salud, minería, hostelería y comercio electrónico — backend en Java y PHP, frontend en React/TypeScript, con IA aplicada y SEO integrados.',

  location: 'Medellín, Colombia',
  timezoneLabel: 'GMT-5',
  available: true,

  email: 'info@easyprodigital.com',
  whatsapp: 'https://wa.me/573238816434',
  linkedin: 'https://www.linkedin.com/in/jesus-cristancho',
  tiktok: 'https://www.tiktok.com/@easyprodigital',
  github: 'https://github.com/jesuscriss301',

  // Ruta a una foto profesional. Si se deja en null, se usa el monograma de
  // respaldo que ya está diseñado en el sitio.
  photo: '/photo-jesus-cristancho.jpg',

  about: [
    `Soy Jesús Manuel Cristancho, ingeniero de sistemas y desarrollador full-stack con base en Medellín, Colombia. He entregado software productivo en salud, minería, hostelería y comercio electrónico — incluyendo integraciones con el Ministerio de Salud de Colombia (MIPRES), plataformas de monitoreo en tiempo real con microservicios y tiendas online que crecieron su tráfico orgánico en 40%.`,
    `Mi stack principal es Java (Spring Boot) y PHP (Symfony/Laravel) en backend, con React/TypeScript en frontend. Integro IA aplicada con APIs de OpenAI, Gemini y Claude, además de despliegues locales de modelos open-source como DeepSeek y Qwen para clientes que necesitan privacidad de datos. Complemento cada proyecto con SEO orgánico. Easy Pro Digital nació como marca de agencia; hoy es mi práctica personal, así que hablas directamente con quien escribe el código.`,
  ],
}

// Experiencia profesional (del CV) — orden más reciente primero
export const experience = [
  {
    role: 'Desarrollador Full Stack',
    company: 'Offimedicas',
    // Logo real pendiente: no pude bajar el binario (el sandbox bloquea red
    // a dominios externos por bash, y el puente del navegador bloquea pasar
    // datos de imagen por seguridad). Archivo oficial en
    // https://www.offimedicas.com/img/logo_offimedicas_blanco.png — guárdalo
    // como public/logos/offimedicas.png y pon esto en '/logos/offimedicas.png'.
    logo: null,
    period: 'Sep. 2025 — Jun. 2026',
    bullets: [
      'Desarrollé y mantuve módulos del sistema de logística y distribución (PHP 7.2 / Symfony), mejorando 5% el tiempo de operación y procesando 3.000 consultas diarias.',
      'Integré la API MIPRES del Ministerio de Salud para el reporte y control de prescripciones y dispensación, reduciendo 40% los tiempos de respuesta.',
      'Diseñé la base de datos en MariaDB para inventarios, trazabilidad y cadena de suministro farmacéutico, garantizando el cumplimiento de la normativa del Ministerio de Salud de Colombia.',
      'Construí las interfaces de operación diaria (JavaScript/HTML/CSS) para el personal de bodega y distribución.',
    ],
  },
  {
    role: 'Desarrollador Full Stack & IA',
    company: 'Freelance (proyectos independientes)',
    logo: '/LOGO.ico', // marca propia — ya está en el proyecto
    period: '2021 — Sep. 2025',
    bullets: [
      'Implementé tiendas online con Bagisto (Laravel) — catálogo, pasarela de pago y gestión de pedidos — con SEO on-page que aumentó 40% el tráfico orgánico y posicionó 30 palabras clave en la primera página.',
      'Construí un chatbot con IA (OpenAI API) integrado a WhatsApp Business que redujo el tiempo de respuesta de 10–40 min a 1 min y automatizó 85% de las consultas.',
      'Realicé despliegues locales de modelos LLM open-source (DeepSeek, Qwen) para clientes que requieren IA privada sin dependencia de la nube.',
      'Desarrollé una aplicación en Python + Gemini API para generación de artículos SEO a escala, produciendo 150 artículos/semana.',
      'Automaticé flujos de negocio con n8n, agentes de IA y APIs REST; desarrollé componentes frontend en React/TypeScript y apps móviles híbridas.',
    ],
  },
  {
    role: 'Desarrollador Full Stack',
    company: 'Rasi Soluciones S.A.S',
    // Logo real pendiente — archivo oficial en https://rasi.com.co/logo-rasi.png,
    // guárdalo como public/logos/rasi.png y pon esto en '/logos/rasi.png'.
    logo: null,
    period: 'Oct. 2023 — May. 2024',
    bullets: [
      'Desarrollé módulos frontend y backend para aplicaciones del sector salud (Java Spring Boot, JavaScript, Bootstrap), priorizando la usabilidad para personal médico.',
      'Implementé pruebas unitarias y end-to-end con Cypress, elevando la cobertura a 10% y reduciendo 45% los defectos en producción, en entornos críticos de salud.',
    ],
  },
  {
    role: 'Líder de Sistemas y Desarrollador Full Stack',
    company: 'Carbones de Exportación de Colombia',
    // Logo real pendiente — archivo oficial en
    // https://carboexco.com/wp-content/uploads/2019/07/logo-carboexco.png,
    // guárdalo como public/logos/carboexco.png y pon esto en '/logos/carboexco.png'.
    logo: null,
    period: 'Ene. 2023 — Ago. 2023',
    bullets: [
      'Lideré técnicamente a un equipo de 2 desarrolladores en la construcción de una aplicación web empresarial desde cero.',
      'Diseñé una arquitectura de microservicios (Java Spring Boot, MySQL, APIs RESTful) para monitoreo en tiempo real, garantizando integridad y escalabilidad de los datos.',
    ],
  },
]

export const education = [
  { title: 'Ingeniería en Sistemas', school: 'Universidad Francisco de Paula Santander', period: '2018 — 2022' },
  { title: 'Técnico en Sistemas', school: 'SENA', period: '2018' },
]

// Servicios (los del sitio original, con tu stack real)
export const services = [
  {
    id: 'web-development',
    title: 'Desarrollo Web',
    short: 'Landing pages, e-commerce y aplicaciones web a medida.',
    detail:
      'Sitios y aplicaciones web rápidas y responsivas: desde landing pages de alto rendimiento hasta sistemas empresariales que procesan miles de operaciones diarias. Backend en Java (Spring Boot) o PHP (Symfony/Laravel), frontend en React/TypeScript — todo listo para SEO y optimizado para Core Web Vitals.',
    stack: ['Java / Spring Boot', 'PHP / Symfony / Laravel', 'React / TypeScript', 'Node.js'],
    bullets: [
      'Aplicaciones web y sistemas empresariales a medida',
      'E-commerce con Bagisto: catálogo, pagos y gestión de pedidos',
      'APIs REST y arquitectura de microservicios',
    ],
  },
  {
    id: 'mobile-development',
    title: 'Apps Móviles',
    short: 'Apps móviles híbridas para iOS y Android.',
    detail:
      'Aplicaciones móviles híbridas construidas con tecnologías web — una sola base de código para ambas plataformas, conectada a las mismas APIs que impulsan tu producto web.',
    stack: ['Apps híbridas', 'React', 'TypeScript', 'REST APIs'],
    bullets: [
      'Una base de código para iOS y Android',
      'Integración con tu backend actual',
      'Interfaces responsivas pensadas para operaciones diarias',
    ],
  },
  {
    id: 'saas-development',
    title: 'Soluciones SaaS',
    short: 'Plataformas cloud escalables, desde MVP hasta producción.',
    detail:
      'Plataformas cloud pensadas para escalar: autenticación, pagos y arquitectura de microservicios para datos en tiempo real. He diseñado bases de datos y arquitecturas para cadenas de suministro farmacéuticas, CRMs mineros y sistemas de reservas.',
    stack: ['Spring Boot', 'PostgreSQL / MySQL / MariaDB', 'Google Cloud', 'Microservices'],
    bullets: [
      'Microservicios para monitoreo en tiempo real',
      'Diseño de bases de datos con cumplimiento regulatorio',
      'Pasarelas de pago y suscripciones',
    ],
  },
  {
    id: 'seo-services',
    title: 'Servicios de SEO',
    short: 'SEO técnico, on-page y de contenido que se ve en los números.',
    detail:
      'SEO integrado desde la construcción, no pegado al final: datos estructurados, arquitectura de URLs, rendimiento web y optimización on-page. Resultados reales: +40% de tráfico orgánico y 30 palabras clave posicionadas en la primera página.',
    stack: ['SEO técnico', 'Datos estructurados', 'Rendimiento web', 'Contenido a escala'],
    bullets: [
      'SEO on-page y arquitectura de URLs',
      'Datos estructurados (schema.org) y optimización de meta etiquetas',
      'Pipelines de contenido asistidos por IA: 150 artículos/semana',
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Marketing Digital',
    short: 'Captación, remarketing y automatización de negocio.',
    detail:
      'Captación de usuarios conectada a métricas reales del producto, además de automatización de flujos de negocio con n8n, agentes de IA y APIs REST — para que tu marketing funcione casi solo y reporte números reales.',
    stack: ['Automatización n8n', 'Agentes de IA', 'WhatsApp Business', 'Analítica'],
    bullets: [
      'Automatización de flujos de negocio con n8n',
      'Integraciones con WhatsApp Business',
      'Campañas medibles con reportes mensuales',
    ],
  },
  {
    id: 'ai-integrations',
    title: 'Integraciones de IA',
    short: 'IA aplicada: APIs cloud o modelos locales privados.',
    detail:
      'IA que resuelve problemas reales del negocio: chatbots que automatizaron 85% de las consultas de clientes, generadores de contenido que producen 150 artículos SEO por semana y despliegues locales de modelos open-source (DeepSeek, Qwen) para clientes que no pueden enviar datos a la nube.',
    stack: ['APIs de OpenAI / Gemini / Claude', 'DeepSeek / Qwen (local)', 'Python', 'n8n / agentes de IA'],
    bullets: [
      'Chatbots de IA integrados con WhatsApp Business',
      'Despliegues privados de LLM en infraestructura propia',
      'Pipelines de contenido y datos con IA',
    ],
  },
]

// Proyectos reales (del CV)
export const projects = [
  {
    id: 'turnero-saas',
    name: 'Turnero — SaaS de filas virtuales',
    type: 'SaaS multi-tenant',
    year: '2026',
    summary:
      'Plataforma SaaS multi-tenant para gestionar filas de atención al cliente: cada empresa se registra, configura sucursales y servicios, y emite turnos que se despachan en tiempo real. Incluye pantalla pública para TV, seguimiento del turno desde el móvil vía SSE y despacho concurrente seguro con bloqueos a nivel de base de datos. Todo empaquetado en un solo contenedor Docker listo para desplegar en cualquier VPS.',
    stack: ['Java 21 / Spring Boot 3', 'React + TypeScript', 'MySQL 8', 'Docker / SSE'],
    url: 'https://turnero.easyprodigital.com',
    demo: { user: 'demo@easyprodigital.com', password: 'DemoTurnero2026' },
    repo: 'https://github.com/jesuscriss301/Turnero-java-react',
    image: null,
    private: false,
  },
  {
    id: 'bagisto-ecommerce-pos',
    name: 'Bagisto — E-commerce con POS',
    type: 'E-commerce / Punto de venta',
    year: '2026',
    summary:
      'Plataforma de e-commerce sobre Laravel + Vue.js con catálogo, pagos y gestión de pedidos, más módulo de Punto de Venta (POS) para operar inventario y ventas presenciales desde el mismo sistema que la tienda online. Arquitectura modular (~42 paquetes) con patrón repositorio y extensibilidad basada en eventos — base sobre la que construyo tiendas a medida para clientes.',
    stack: ['Laravel 12 / PHP 8.3', 'Vue.js 3', 'Tailwind CSS', 'MySQL', 'POS'],
    url: 'https://store.easyprodigital.com',
    demo: { user: 'admin@example.com', password: 'admin123' },
    repo: 'https://github.com/jesuscriss301/bagisto',
    image: null,
    private: false,
  },
  {
    id: 'mipres',
    name: 'MIPRES Reporting API — Ministerio de Salud',
    type: 'API de salud',
    year: '2026',
    summary:
      'Integración con la plataforma del Ministerio de Salud de Colombia para reporte de prescripciones y control de dispensación, bajo estricta regulación del sector salud. Las consultas optimizadas redujeron tiempos de respuesta en 40% mientras procesaban 3.000 operaciones diarias.',
    stack: ['PHP / Symfony', 'MariaDB', 'REST'],
    url: null,
    image: null,
    private: true,
  },
  {
    id: 'ai-chatbot',
    name: 'Chatbot de atención al cliente con IA',
    type: 'IA + WhatsApp',
    year: '2025',
    summary:
      'Chatbot de IA integrado con WhatsApp Business que redujo los tiempos de respuesta de 10–40 minutos a menos de 1 minuto y automatizó 85% de las consultas de clientes.',
    stack: ['Python', 'OpenAI API', 'WhatsApp Business'],
    url: null,
    image: null,
    private: true,
  },
  {
    id: 'seo-generator',
    name: 'Generador de artículos con IA para SEO',
    type: 'Contenido con IA',
    year: '2025',
    summary:
      'Aplicación en Python + Gemini API que genera artículos SEO a escala — 150 artículos por semana — con una estrategia de contenido integrada para posicionamiento orgánico.',
    stack: ['Python', 'Gemini API', 'SEO'],
    url: null,
    image: null,
    private: true,
  },
  {
    id: 'bagisto-stores',
    name: 'Tiendas e-commerce con Bagisto',
    type: 'E-commerce',
    year: '2024',
    summary:
      'Tiendas online con catálogo, pasarela de pagos y gestión de pedidos, además de SEO on-page que incrementó el tráfico orgánico en 40% y posicionó 30 palabras clave en la primera página de Google.',
    stack: ['Bagisto / Laravel', 'MySQL', 'SEO'],
    url: null,
    image: null,
    private: true,
  },
  {
    id: 'mining-crm',
    name: 'CRM para el sector minero',
    type: 'SaaS empresarial',
    year: '2023',
    summary:
      'Plataforma de gestión de clientes y operaciones con arquitectura de microservicios para monitoreo en tiempo real, construida desde cero liderando un equipo de desarrollo.',
    stack: ['Java / Spring Boot', 'MySQL', 'Microservices'],
    url: null,
    image: null,
    private: true,
  },
  {
    id: 'hotel-reservations',
    name: 'Sistema de reservas hotel-restaurante',
    type: 'Aplicación web',
    year: '2022',
    summary:
      'Gestión de reservas en tiempo real para un hotel-restaurante, con una interfaz responsive para personal y huéspedes.',
    stack: ['Java', 'MySQL', 'Bootstrap'],
    url: null,
    image: null,
    private: true,
  },
]

// Webs de muestra por nicho — demos completas alojadas aparte
// (demos.easyprodigital.com, proyecto en showcase/), pensadas para que un
// visitante del rubro vea cómo luciría su propia web.
export const nicheDemos = [
  {
    slug: 'salon-belleza',
    niche: 'Salón de belleza y estética',
    brand: 'Bella Aura Studio',
    summary:
      'Reservas, servicios con precios, testimonios y una estética cálida pensada para negocios de belleza.',
    url: 'https://demos.easyprodigital.com/salon-belleza',
  },
]
