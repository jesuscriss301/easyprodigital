// ============================================================
//  UI copy + page-level SEO metadata + legal text, per language.
//  Structured content (profile/services/projects/experience) lives in
//  src/data/profile.js (Spanish) and src/data/profile.en.js (English).
// ============================================================

export const en = {
  nav: {
    services: 'Services',
    portfolio: 'Portfolio',
    blog: 'Blog',
    about: 'About',
    startProject: 'Start a project',
  },
  footer: {
    services: 'Services',
    portfolio: 'Portfolio',
    blog: 'Blog',
    about: 'About',
    contact: 'Contact',
    privacy: 'Privacy',
    terms: 'Terms',
    cookies: 'Cookies',
  },
  statusbar: {
    available: 'Available for projects',
    booked: 'Currently booked',
    contact: '→ contact',
  },
  common: {
    readMore: 'Learn more →',
    viewLiveProject: 'View live project ↗',
    viewCode: 'View code on GitHub',
    public: 'Public',
    private: 'Private',
    demoUser: 'User',
    demoPassword: 'Password',
  },
  home: {
    seoTitle: 'Jesús Manuel Cristancho — Freelance Full-Stack Developer | Easy Pro Digital',
    seoDescription:
      'Freelance full-stack developer building web, mobile and SaaS applications for businesses across the US and Canada. Based in Colombia, direct communication, end-to-end delivery.',
    heroGreeting: 'Hi, I’m',
    heroRest: '. I build web, mobile and SaaS products end to end.',
    ctaViewWork: 'See my work',
    ctaStartProject: 'Start a project',
    servicesEyebrow: 'What I do',
    servicesTitle: 'Services',
    portfolioEyebrow: 'Portfolio',
    portfolioTitle: 'Selected work that solves real business problems',
    portfolioViewAll: 'View full portfolio',
    portfolioCopy:
      'I design systems for healthcare, mining, hospitality and e-commerce — combining backend engineering, product thinking and applied AI.',
    contactEyebrow: 'Contact',
    contactTitle: 'Have a project in mind?',
  },
  services: {
    seoTitle: 'Services — Web, Mobile Apps, SaaS, SEO & AI | Jesús Manuel Cristancho',
    seoDescription:
      'Freelance development services: web development, mobile apps, SaaS platforms, technical and local SEO, digital marketing and AI integrations for businesses across the US and Canada.',
    eyebrow: 'Services',
    title: 'Everything your product needs, from a single developer',
    intro:
      'The same services Easy Pro Digital has always offered, now delivered directly by me, without agency overhead.',
    ctaTitle: 'Need something custom?',
    ctaButton: "Let's talk",
  },
  portfolio: {
    seoTitle: 'Portfolio — Projects by Jesús Manuel Cristancho | Easy Pro Digital',
    seoDescription:
      'Selected web, mobile and SaaS projects built end to end by freelance developer Jesús Manuel Cristancho for clients across the US, Canada and Latin America.',
    eyebrow: 'Portfolio',
    title: 'Selected work',
    intro:
      'A growing catalog of products and integrations I have built end to end for businesses that need reliable software, not just prototypes.',
    focusEyebrow: 'What I focus on',
    focusTitle: 'Web products, automations and AI tools that ship.',
    focusCopy: 'My work spans custom platforms, e-commerce, SaaS and operating systems with SEO and analytics built in.',
    statDelivered: 'Projects delivered',
    statFocusValue: 'US, Canada & LATAM',
    statFocusLabel: 'Client focus',
    statEndToEndValue: 'End to end',
    statEndToEndLabel: 'From strategy to deployment',
  },
  about: {
    seoTitle: 'About — Jesús Manuel Cristancho, Freelance Developer',
    seoDescription:
      'Full-stack developer based in Colombia, working with clients across the US, Canada and Latin America. From agency brand to independent practice: one developer, accountable end to end.',
    eyebrow: 'About',
    title: 'From agency brand to freelance practice',
    factName: 'Name',
    factBase: 'Based in',
    factTimezone: 'Timezone',
    timezoneSuffix: ' — overlaps with US & Canada business hours',
    factWorkingWith: 'Working with',
    workingWithValue: 'Clients across the US, Canada & Latin America',
    factGithub: 'GitHub',
    stackEyebrow: 'Core stack',
    experienceEyebrow: 'Track record',
    experienceTitle: 'Professional experience',
    experienceIntro: 'Four roles, one thread: shipping production software that regulated industries actually rely on. Hover the stack to pause on any one.',
    educationEyebrow: 'Education',
    educationTitle: 'Education',
  },
  contact: {
    seoTitle: 'Contact — Hire Jesús Manuel Cristancho | Easy Pro Digital',
    seoDescription:
      'Start a project with freelance full-stack developer Jesús Manuel Cristancho. Email, WhatsApp and LinkedIn — direct communication, no middlemen.',
    eyebrow: 'Contact',
    title: 'Have a project in mind?',
  },
  blog: {
    seoTitle: 'Blog — Easy Pro Digital',
    seoDescription:
      'Articles on web development, applied AI and SEO: practical guides written from real experience building production software.',
    eyebrow: 'Blog',
    title: 'Guides & articles',
    tagline: 'Web development, applied AI and SEO — practical content, straight to the point.',
    loading: 'Loading articles…',
    empty: 'No articles published yet. Check back soon.',
    readArticle: 'Read article →',
  },
  notFound: {
    seoTitle: '404 — Page not found | Easy Pro Digital',
    seoDescription: 'The page you are looking for could not be found.',
    title: "This page doesn't exist",
    intro: "The page you're looking for was moved or never existed.",
    goHome: 'Go home',
  },
  legal: {
    eyebrow: 'Legal',
    effectiveDateLabel: 'Effective date:',
    questionsPrefix: 'If you have questions, write to',
    meta: {
      privacy: { title: 'Privacy Policy', path: '/privacy/' },
      terms: { title: 'Terms of Service', path: '/terms/' },
      cookies: { title: 'Cookie Policy', path: '/cookies/' },
    },
    seoDescriptionSuffix: 'for easyprodigital.com, the personal site of freelance developer Jesús Manuel Cristancho.',
    content: {
      privacy: {
        intro: (name, domain) =>
          `This privacy policy explains how ${name}, operating as Easy Pro Digital, collects, uses and protects your personal information when you visit ${domain} or contact me about a project.`,
        sections: [
          {
            title: 'Information I collect',
            paragraphs: [
              'When you contact me through the website, email, WhatsApp or social media, I may collect your name, email address, phone number, company and details about your request.',
              'I may also collect technical information such as your IP address, browser type, device, referring page and site interactions for security and analytics purposes.',
            ],
          },
          {
            title: 'How I use your information',
            paragraphs: [
              'I use your information to respond to your inquiry, prepare a proposal, deliver services, communicate about your project and improve the quality of my work.',
              'I may also use it to comply with legal obligations and maintain the security of the website and my systems.',
            ],
          },
          {
            title: 'Sharing information',
            paragraphs: [
              'I do not sell your personal data. I may share limited information with trusted providers such as hosting, email delivery, analytics or payment platforms, only when necessary to operate the site and fulfill your request.',
            ],
          },
          {
            title: 'Your rights',
            paragraphs: [
              'Depending on your location, you may have the right to access, correct, delete or restrict your personal data, as well as withdraw your consent where applicable.',
              'To exercise these rights, contact me at the email below.',
            ],
          },
          {
            title: 'Security and retention',
            paragraphs: [
              'I use reasonable technical and organizational measures to protect your information, though no transmission over the internet is completely secure.',
              'I retain personal data only for as long as necessary to fulfill the purpose it was collected for or to meet a legal obligation.',
            ],
          },
        ],
        effectiveDate: 'July 7, 2026',
      },
      terms: {
        intro: (domain) =>
          `These terms of service govern the use of ${domain} and the freelance development services I provide through Easy Pro Digital.`,
        sections: [
          {
            title: 'Scope of services',
            paragraphs: [
              'I provide freelance services such as web development, mobile applications, SaaS platforms, SEO, AI integrations and related consulting. The specific scope, deliverables, timelines and budget will be defined in a proposal, contract or written agreement.',
            ],
          },
          {
            title: 'Project flow',
            paragraphs: [
              'Work begins once scope, price and timeline are agreed upon. Delays caused by missing content, late feedback or pending approvals may affect delivery dates.',
            ],
          },
          {
            title: 'Payments and invoicing',
            paragraphs: [
              'Payments are made according to the agreed proposal or contract. If a project is billed by milestones, each milestone is due as indicated in the agreement.',
            ],
          },
          {
            title: 'Intellectual property',
            paragraphs: [
              'You will own the final deliverables once the agreed payments have been completed, unless otherwise stated in writing. I retain rights over my general tools, templates, methods and pre-existing materials.',
            ],
          },
          {
            title: 'Confidentiality and liability',
            paragraphs: [
              'I will keep your sensitive information confidential, except where disclosure is required by law. I am not liable for indirect, incidental or consequential damages arising from the use of the site or services, including lost profits, business interruption or data loss.',
            ],
          },
          {
            title: 'Governing law',
            paragraphs: [
              'These terms are governed by the laws of Colombia, unless a different agreement is signed with you. Any dispute will be resolved in accordance with the applicable law and the agreed contract.',
            ],
          },
        ],
        effectiveDate: 'July 7, 2026',
      },
      cookies: {
        intro: (domain) =>
          `This Cookie Policy explains how ${domain} uses cookies and similar technologies to improve your browsing experience and understand how the site is used.`,
        sections: [
          {
            title: 'What are cookies?',
            paragraphs: [
              'Cookies are small text files stored on your device to remember preferences and help websites function more efficiently.',
            ],
          },
          {
            title: 'What I use them for',
            paragraphs: [
              'I use cookies to keep the site functioning, remember your preferences, understand anonymous traffic and improve the overall experience.',
            ],
          },
          {
            title: 'Types of cookies',
            paragraphs: [
              'Essential cookies are required for the site to work. Analytics cookies help me understand traffic and performance. Functional cookies remember your choices. Marketing cookies may be used only if I activate ad or campaign tracking in the future.',
            ],
          },
          {
            title: 'Your choices',
            paragraphs: [
              'You can manage or disable cookies through your browser settings. Blocking some cookies may limit certain features of the website.',
            ],
          },
          {
            title: 'Third-party cookies',
            paragraphs: [
              'If I use analytics or external services, they may place their own cookies according to their own privacy policies.',
            ],
          },
        ],
        effectiveDate: 'July 7, 2026',
      },
    },
  },
}

export const es = {
  nav: {
    services: 'Servicios',
    portfolio: 'Portafolio',
    blog: 'Blog',
    about: 'Sobre mí',
    startProject: 'Empezar un proyecto',
  },
  footer: {
    services: 'Servicios',
    portfolio: 'Portafolio',
    blog: 'Blog',
    about: 'Sobre mí',
    contact: 'Contacto',
    privacy: 'Privacidad',
    terms: 'Términos',
    cookies: 'Cookies',
  },
  statusbar: {
    available: 'Disponible para proyectos',
    booked: 'Agenda completa',
    contact: '→ contacto',
  },
  common: {
    readMore: 'Ver más →',
    viewLiveProject: 'Ver proyecto en vivo ↗',
    viewCode: 'Código en GitHub',
    public: 'Público',
    private: 'Privado',
    demoUser: 'Usuario',
    demoPassword: 'Contraseña',
  },
  home: {
    seoTitle: 'Jesús Manuel Cristancho — Desarrollador Full-Stack Freelance | Easy Pro Digital',
    seoDescription:
      'Desarrollador full-stack freelance creando aplicaciones web, móviles y SaaS para negocios en Colombia y LATAM. Con base en Medellín, comunicación directa y entrega completa.',
    heroGreeting: 'Hola, soy',
    heroRest: '. Construyo productos web, móviles y SaaS de principio a fin.',
    ctaViewWork: 'Ver mi trabajo',
    ctaStartProject: 'Empezar un proyecto',
    servicesEyebrow: 'Lo que hago',
    servicesTitle: 'Servicios',
    portfolioEyebrow: 'Portfolio',
    portfolioTitle: 'Trabajo seleccionado que resuelve problemas reales de negocio',
    portfolioViewAll: 'Ver todo el portafolio',
    portfolioCopy:
      'Diseño sistemas para salud, minería, hostelería y comercio electrónico — combinando ingeniería backend, pensamiento de producto e IA aplicada.',
    contactEyebrow: 'Contacto',
    contactTitle: '¿Tienes un proyecto en mente?',
  },
  services: {
    seoTitle: 'Servicios — Web, Apps Móviles, SaaS, SEO e IA | Jesús Manuel Cristancho',
    seoDescription:
      'Servicios de desarrollo freelance: desarrollo web, apps móviles, plataformas SaaS, SEO técnico y local, marketing digital e integraciones de IA para negocios en Colombia y LATAM.',
    eyebrow: 'Servicios',
    title: 'Todo lo que tu producto necesita, desde un solo desarrollador',
    intro:
      'Los mismos servicios que Easy Pro Digital siempre ha ofrecido, ahora entregados directamente por mí, sin sobrecostos de agencia.',
    ctaTitle: '¿Necesitas algo a medida?',
    ctaButton: 'Hablemos',
  },
  portfolio: {
    seoTitle: 'Portafolio — Proyectos de Jesús Manuel Cristancho | Easy Pro Digital',
    seoDescription:
      'Proyectos seleccionados de web, apps móviles y SaaS construidos de principio a fin por el desarrollador freelance Jesús Manuel Cristancho para clientes en Colombia y LATAM.',
    eyebrow: 'Portafolio',
    title: 'Trabajo seleccionado',
    intro:
      'Un catálogo en crecimiento de productos e integraciones que he construido de principio a fin para negocios que necesitan software confiable, no solo prototipos.',
    focusEyebrow: 'En lo que enfoco',
    focusTitle: 'Productos web, automatizaciones y herramientas de IA que se lanzan.',
    focusCopy: 'Mi trabajo abarca plataformas a medida, e-commerce, SaaS y sistemas operativos con SEO y analítica integrados.',
    statDelivered: 'Proyectos entregados',
    statFocusValue: 'Colombia & LATAM',
    statFocusLabel: 'Enfoque de clientes',
    statEndToEndValue: 'De principio a fin',
    statEndToEndLabel: 'Desde la estrategia hasta el despliegue',
  },
  about: {
    seoTitle: 'Sobre mí — Jesús Manuel Cristancho, Desarrollador Freelance',
    seoDescription:
      'Desarrollador full-stack en Medellín, Colombia trabajando con clientes en Colombia y LATAM. De marca de agencia a práctica independiente: un desarrollador responsable de principio a fin.',
    eyebrow: 'Sobre mí',
    title: 'De marca de agencia a práctica freelance',
    factName: 'Nombre',
    factBase: 'Base',
    factTimezone: 'Zona horaria',
    timezoneSuffix: ' — solapa con Colombia y LATAM',
    factWorkingWith: 'Trabajando con',
    workingWithValue: 'Clientes en Colombia y LATAM',
    factGithub: 'GitHub',
    stackEyebrow: 'Stack principal',
    experienceEyebrow: 'Trayectoria',
    experienceTitle: 'Experiencia profesional',
    experienceIntro: 'Cuatro roles, un mismo hilo: software en producción del que dependen industrias reguladas. Pasa el cursor sobre el stack para pausarlo en cualquier tarjeta.',
    educationEyebrow: 'Formación',
    educationTitle: 'Educación',
  },
  contact: {
    seoTitle: 'Contacto — Contrata a Jesús Manuel Cristancho | Easy Pro Digital',
    seoDescription:
      'Inicia un proyecto con el desarrollador full-stack freelance Jesús Manuel Cristancho. Email, WhatsApp y LinkedIn — comunicación directa, sin intermediarios.',
    eyebrow: 'Contacto',
    title: '¿Tienes un proyecto en mente?',
  },
  blog: {
    seoTitle: 'Blog — Easy Pro Digital',
    seoDescription:
      'Artículos sobre desarrollo web, IA aplicada y SEO: guías prácticas escritas desde la experiencia construyendo software productivo.',
    eyebrow: 'Blog',
    title: 'Guías y artículos',
    tagline: 'Desarrollo web, IA aplicada y SEO — contenido práctico, directo al grano.',
    loading: 'Cargando artículos…',
    empty: 'Aún no hay artículos publicados. Vuelve pronto.',
    readArticle: 'Leer artículo →',
  },
  notFound: {
    seoTitle: '404 — Página no encontrada | Easy Pro Digital',
    seoDescription: 'La página que buscas no pudo ser encontrada.',
    title: 'Esta página no existe',
    intro: 'La página que buscas fue movida o nunca existió.',
    goHome: 'Ir al inicio',
  },
  legal: {
    eyebrow: 'Legal',
    effectiveDateLabel: 'Fecha de vigencia:',
    questionsPrefix: 'Si tienes preguntas, escribe a',
    meta: {
      privacy: { title: 'Política de privacidad', path: '/privacy/' },
      terms: { title: 'Términos de servicio', path: '/terms/' },
      cookies: { title: 'Política de cookies', path: '/cookies/' },
    },
    seoDescriptionSuffix: 'de easyprodigital.com, el sitio personal del desarrollador freelance Jesús Manuel Cristancho.',
    content: {
      privacy: {
        intro: (name, domain) =>
          `Esta política de privacidad explica cómo ${name}, operando como Easy Pro Digital, recopila, utiliza y protege tu información personal cuando visitas ${domain} o te pones en contacto conmigo sobre un proyecto.`,
        sections: [
          {
            title: 'Información que recopilo',
            paragraphs: [
              'Cuando te pones en contacto conmigo a través del sitio web, email, WhatsApp o redes sociales, puedo recopilar tu nombre, dirección de correo, número de teléfono, empresa y detalles de tu solicitud.',
              'También puedo recopilar información técnica como tu dirección IP, tipo de navegador, dispositivo, página de referencia e interacciones con el sitio por motivos de seguridad y analítica.',
            ],
          },
          {
            title: 'Cómo utilizo tu información',
            paragraphs: [
              'Utilizo tu información para responder tu consulta, preparar una propuesta, entregar servicios, comunicarme sobre tu proyecto y mejorar la calidad de mi trabajo.',
              'También puedo usarla para cumplir obligaciones legales y mantener la seguridad del sitio web y mis sistemas.',
            ],
          },
          {
            title: 'Compartir información',
            paragraphs: [
              'No vendo tus datos personales. Puedo compartir información limitada con proveedores de confianza como hosting, entrega de correo, analítica o plataformas de pago, solo cuando sea necesario para operar el sitio y cumplir con tu solicitud.',
            ],
          },
          {
            title: 'Tus derechos',
            paragraphs: [
              'Dependiendo de tu ubicación, puedes tener derecho a acceder, corregir, eliminar o restringir tus datos personales, así como a retirar tu consentimiento cuando aplique.',
              'Para ejercer estos derechos, contáctame al correo que aparece abajo.',
            ],
          },
          {
            title: 'Seguridad y conservación',
            paragraphs: [
              'Utilizo medidas técnicas y organizativas razonables para proteger tu información, aunque ninguna transmisión por internet es completamente segura.',
              'Conservo los datos personales solo durante el tiempo necesario para cumplir el propósito para el cual fueron recopilados o para atender una obligación legal.',
            ],
          },
        ],
        effectiveDate: '7 de julio de 2026',
      },
      terms: {
        intro: (domain) =>
          `Estos términos de servicio rigen el uso de ${domain} y los servicios de desarrollo freelance que presto a través de Easy Pro Digital.`,
        sections: [
          {
            title: 'Alcance de los servicios',
            paragraphs: [
              'Presto servicios freelance como desarrollo web, aplicaciones móviles, plataformas SaaS, SEO, integraciones de IA y consultoría relacionada. El alcance específico, entregables, plazos y presupuesto se definirán en una propuesta, contrato o acuerdo escrito.',
            ],
          },
          {
            title: 'Flujo del proyecto',
            paragraphs: [
              'El trabajo comienza una vez se acuerdan alcance, precio y cronograma. Los retrasos por contenido faltante, retroalimentación tardía o aprobaciones pendientes pueden afectar las fechas de entrega.',
            ],
          },
          {
            title: 'Pagos y facturas',
            paragraphs: [
              'Los pagos se realizan según la propuesta o contrato acordado. Si un proyecto se factura por hitos, cada hito se vence según lo indicado en el acuerdo.',
            ],
          },
          {
            title: 'Propiedad intelectual',
            paragraphs: [
              'Serás propietario de los entregables finales una vez se hayan completado los pagos acordados, salvo que se indique otra cosa por escrito. Conservo los derechos sobre mis herramientas, plantillas, métodos y materiales preexistentes de uso general.',
            ],
          },
          {
            title: 'Confidencialidad y responsabilidad',
            paragraphs: [
              'Mantendré tu información sensible de forma confidencial, salvo que la ley exija divulgarla. No soy responsable por daños indirectos, incidentales o consecuentes derivados del uso del sitio o los servicios, incluyendo pérdida de beneficios, interrupción del negocio o pérdida de datos.',
            ],
          },
          {
            title: 'Ley aplicable',
            paragraphs: [
              'Estos términos se rigen por las leyes de Colombia, salvo que se firme un acuerdo distinto contigo. Cualquier disputa se resolverá conforme a la ley aplicable y el contrato acordado.',
            ],
          },
        ],
        effectiveDate: '7 de julio de 2026',
      },
      cookies: {
        intro: (domain) =>
          `Esta política de cookies explica cómo ${domain} utiliza cookies y tecnologías similares para mejorar tu experiencia de navegación y entender cómo se usa el sitio.`,
        sections: [
          {
            title: '¿Qué son las cookies?',
            paragraphs: [
              'Las cookies son pequeños archivos de texto almacenados en tu dispositivo para recordar preferencias y ayudar a que los sitios web funcionen de forma más eficiente.',
            ],
          },
          {
            title: 'Para qué las uso',
            paragraphs: [
              'Uso cookies para mantener el sitio funcionando, recordar tus preferencias, entender el tráfico anónimo y mejorar la experiencia general.',
            ],
          },
          {
            title: 'Tipos de cookies',
            paragraphs: [
              'Las cookies esenciales son necesarias para que el sitio funcione. Las cookies analíticas me ayudan a entender el tráfico y el rendimiento. Las cookies funcionales recuerdan tus elecciones. Las cookies de marketing solo se usarían si en el futuro activo seguimiento de anuncios o campañas.',
            ],
          },
          {
            title: 'Tus opciones',
            paragraphs: [
              'Puedes gestionar o deshabilitar las cookies desde la configuración de tu navegador. Bloquear algunas cookies puede limitar ciertas funciones del sitio web.',
            ],
          },
          {
            title: 'Cookies de terceros',
            paragraphs: [
              'Si utilizo analítica o servicios externos, estos pueden colocar sus propias cookies según sus propias políticas de privacidad.',
            ],
          },
        ],
        effectiveDate: '7 de julio de 2026',
      },
    },
  },
}

export function getStrings(lang) {
  return lang === 'es' ? es : en
}
