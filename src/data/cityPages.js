// ============================================================
//  Páginas por ciudad — SOLO EN ESPAÑOL (mercado Colombia).
//
//  Se pintan con NicheLanding (src/pages/pages.jsx) a través de CityPage.
//  A diferencia de las páginas de nicho, aquí sí tiene sentido una página por
//  ciudad: hay trabajo presencial en Medellín, Cúcuta y Bucaramanga.
//
//  Reglas de contenido:
//  - Nada de cifras inventadas (clientes, porcentajes, años de experiencia).
//  - Los precios salen de la página de precios: web desde 450 USD y
//    consultoría desde $400.000 COP.
//  - `areaServed` alimenta el JSON-LD (Service) con ciudades y municipios.
//
//  Para agregar una ciudad: slug en CITY_SLUGS, bloque en `pages`, ruta en
//  src/App.jsx, en scripts/prerender.mjs (ES_ONLY_PATHS) y en
//  public/sitemap.xml. La entrada del sitemap debe quedar fuera del bloque
//  <!-- articles:start --> / <!-- articles:end -->, que reescribe
//  scripts/sitemap-articles.mjs.
// ============================================================

export const CITY_SLUGS = [
  'paginas-web-medellin',
  'consultoria-ia',
  'consultoria-ia-medellin',
  'consultoria-ia-cucuta',
  'consultoria-ia-bucaramanga',
]

function cityArea(name, department) {
  return {
    '@type': 'City',
    name,
    containedInPlace: { '@type': 'AdministrativeArea', name: department },
  }
}

function cityAreas(names, department) {
  return names.map((name) => cityArea(name, department))
}

const CONSULTING_INCLUDES = [
  'IA con los documentos de tu empresa: un asistente que responde con tus manuales y contratos, en tu propio servidor.',
  'Equipos para IA: qué tarjeta gráfica, memoria y almacenamiento comprar según lo que vas a usar.',
  'Servidores: archivos compartidos, copias de seguridad y sistemas internos en un solo equipo o en la nube.',
  'Equipos para empresas: computadores y estaciones de trabajo según el uso real, sin pagar de más.',
  'Redes de 10 Gb: tarjetas, switch y cableado para abrir archivos pesados del servidor sin esperar.',
  'Software: elegir o construir el sistema correcto e integrarlo con lo que ya usas.',
]

const CONSULTING_PROCESS = [
  {
    step: '01',
    title: 'Primera conversación',
    text: 'Por WhatsApp o videollamada, gratis. Me cuentas qué quieres resolver y cómo trabajan hoy.',
  },
  {
    step: '02',
    title: 'Reunión de cierre',
    text: 'En tu empresa. Revisamos el alcance, los tiempos y el presupuesto, y cierro la propuesta contigo.',
  },
  {
    step: '03',
    title: 'Toma de requerimientos',
    text: 'En tu empresa. Vemos procesos, equipos, red y espacio. De ahí sale el plan y la lista de compra.',
  },
  {
    step: '04',
    title: 'Construcción y configuración',
    text: 'A distancia. Monto el asistente, los servidores o la red y te muestro avances por WhatsApp.',
  },
  {
    step: '05',
    title: 'Pruebas del proceso',
    text: 'En tu empresa. Probamos con tus documentos y tus equipos antes de entregar.',
  },
  {
    step: '06',
    title: 'Entrega y capacitación',
    text: 'Te explico cómo se usa, dejo las indicaciones por escrito y respondo las dudas del equipo.',
  },
]

const CONSULTING_SHARED = {
  // Ilustración animada (ServiceIllustration). Se comparte en las 4 páginas de consultoría.
  illustration: 'infra',
  // Variante de soporte para instalaciones: sin planes de mantenimiento web.
  support: 'infra',
  includesTitle: 'Seis frentes de trabajo',
  includes: CONSULTING_INCLUDES,
  demoTitle: 'Mira un asistente de IA funcionando',
  demoCopy:
    'Uchuva es un asistente de WhatsApp que responde con la información del negocio: horarios, servicios, precios y preguntas frecuentes. Es un ejemplo real de cómo un asistente entrenado con tus documentos atiende a tus clientes.',
  demoUrl: 'https://uchuva.easyprodigital.com/',
  demoCta: 'Abrir el asistente',
  processTitle: 'Cómo trabajamos: en persona cuando importa',
  process: CONSULTING_PROCESS,
  pricingNote:
    'La consultoría empieza en $400.000 COP e incluye la visita, la toma de requerimientos y un informe con el plan y la lista de compra. El montaje y los equipos se cotizan aparte, por escrito.',
  pricingCta: 'Ver precios',
  ctaButton: 'Agendar conversación',
  ctaWhatsappLabel: 'Escríbeme por WhatsApp',
}

// Preguntas comunes a las páginas de ciudad. Cada ciudad agrega dos propias.
const CONSULTING_FAQ_BASE = [
  {
    q: '¿Cuánto cuesta la consultoría?',
    a: 'Empieza en $400.000 COP e incluye la visita, la toma de requerimientos y un informe con el plan y la lista de compra. El montaje y los equipos se cotizan aparte, por escrito.',
  },
  {
    q: '¿Mis datos se quedan dentro de la empresa?',
    a: 'Sí, cuando el asistente va en tu servidor: los documentos y las conversaciones no salen de tu red. Si elegimos la nube, se configura con tus cuentas y tus permisos.',
  },
  {
    q: '¿Necesito una tarjeta gráfica cara para usar IA?',
    a: 'No siempre. Depende de cuántas personas lo usan y de qué tan grande es el modelo. Para empezar, a veces basta un equipo modesto o la nube.',
  },
  {
    q: '¿Servidor propio o nube?',
    a: 'Los dos sirven. En la visita reviso cuánta información manejas, quién necesita acceso y qué tan sensible es, y te propongo la opción que mejor encaje.',
  },
  {
    q: '¿Vale la pena una red de 10 Gb en mi oficina?',
    a: 'Sí, si mueven archivos grandes del servidor o varias personas trabajan sobre los mismos archivos. Si el uso es ligero, no hace falta gastar en eso.',
  },
  {
    q: '¿Me ayudas a comprar los equipos?',
    a: 'Sí. Te doy la lista con alternativas y te acompaño en la compra para que no pagues de más ni compres algo que no vas a usar.',
  },
  {
    q: '¿Sirve para una empresa pequeña?',
    a: 'Sí. Una empresa pequeña suele notar rápido el ahorro de tiempo. Ajusto el plan al tamaño y al presupuesto.',
  },
  {
    q: '¿Capacitas a mi equipo?',
    a: 'Sí. En la entrega explico cómo se usa y dejo las indicaciones por escrito para que el equipo pueda trabajar sin depender de mí.',
  },
]

const pages = {
  'paginas-web-medellin': {
    serviceType: 'Diseño de páginas web para negocios',
    illustration: 'web',
    storeCompare: true,
    audienceType: 'Negocios y pymes de Medellín y el Valle de Aburrá',
    seoTitle:
      'Páginas Web en Medellín para Negocios — Precio Publicado | EasyPro Digital',
    seoDescription:
      'Diseño de páginas web en Medellín con WhatsApp integrado, listas para Google, precio fijo desde 450 USD, demos en vivo.',
    eyebrow: 'Para negocios de Medellín y el Valle de Aburrá',
    title: 'Páginas web en Medellín que te traen clientes por Google y WhatsApp',
    intro:
      'Tu negocio puede existir, pero si en Google no aparece, el cliente llama al de al lado. Necesitas una página que trabaje 24 horas, hecha por quien la programa y con precio fijo.',
    problemTitle: 'Lo que pasa cuando tu negocio no aparece en Google',
    problems: [
      'Te buscan y encuentran a la competencia, aunque tu trabajo sea mejor.',
      'Te piden "¿tienes página?" y no tienes cómo mostrar tu trabajo en un solo lugar.',
      'Solo te encuentran quienes ya te siguen en Instagram.',
      'Respondes lo mismo todo el día por WhatsApp: precios, horario y dirección.',
      'Tienes una web vieja que no se ve bien en el celular.',
    ],
    includesTitle: 'Qué incluye tu página web',
    includes: [
      'Diseño pensado para celular, donde está la mayoría de tus clientes.',
      'Botón de WhatsApp a la vista en cada pantalla.',
      'Ficha de Google conectada y zona de servicio escrita en la página.',
      'Secciones de servicios, fotos y precios.',
      'Pagos en línea con pasarelas colombianas (Wompi, ePayco, PSE) si los necesitas.',
      'Carga rápida y lista para que Google y las IA la lean.',
      'Dominio, hosting y código a tu nombre.',
    ],
    demoTitle: 'Mira páginas reales antes de decidir',
    demoCopy:
      'Más de 20 ejemplos navegables por tipo de negocio. Ábrelos en tu celular y mira cómo se vería el tuyo.',
    demoUrl: 'https://demos.easyprodigital.com/',
    demoCta: 'Abrir los ejemplos',
    areasTitle: 'Dónde trabajo',
    areasIntro:
      'Vivo en Medellín. Me reúno contigo en persona en el Valle de Aburrá o por videollamada, como te quede más fácil.',
    areas: [
      {
        region: 'Medellín',
        places: ['El Poblado', 'Laureles', 'Belén', 'Robledo', 'San Javier', 'Centro'],
      },
      {
        region: 'Valle de Aburrá',
        places: ['Envigado', 'Itagüí', 'Sabaneta', 'Bello', 'La Estrella', 'Copacabana'],
      },
      { region: 'Oriente cercano', places: ['Rionegro'] },
    ],
    faqTitle: 'Lo que preguntan los negocios de Medellín',
    faq: [
      {
        q: '¿Cuánto cuesta una página web en Medellín?',
        a: 'Desde 450 USD, con precio fijo por escrito antes de empezar. En la página de precios están los paquetes y lo que incluye cada uno.',
      },
      {
        q: '¿Cuánto tarda?',
        a: 'De una a dos semanas desde que tengo tus textos y fotos. Si no tienes los textos, te ayudo a ordenarlos.',
      },
      {
        q: '¿Trabajas solo con negocios de Medellín?',
        a: 'No. Trabajo con negocios de otras ciudades y países. Lo que cambia es que en Medellín puedo reunirme contigo en persona.',
      },
      {
        q: '¿Mi página va a salir en Google?',
        a: 'Tu página queda lista para Google y conectada a tu ficha. Nadie honesto puede garantizarte el primer lugar: eso depende de tu competencia y de tu constancia.',
      },
      {
        q: '¿Puedo editarla yo después?',
        a: 'Sí. Te dejo el panel para editar textos, fotos y precios, y te explico cómo hacerlo. Si prefieres, también puedo hacer los cambios por ti.',
      },
      {
        q: '¿Qué pasa si no me gusta el diseño?',
        a: 'La ves funcionando antes de publicar. Si algo no te gusta, lo ajustamos en dos rondas de cambios sobre la web real.',
      },
      {
        q: '¿Puedo cobrar en línea?',
        a: 'Sí, si lo necesitas. Se conectan pasarelas colombianas como Wompi, ePayco o PSE, con las condiciones de tu cuenta.',
      },
      {
        q: '¿Por qué no hacerla yo en Wix o con IA?',
        a: 'Puedes. La diferencia es que una página hecha aquí queda lista para Google, carga rápido en celular y tiene textos pensados para que te escriban. Si ya tienes una, la reviso y te digo qué cambiar.',
      },
    ],
    ctaTitle: '¿Quieres una página que te traiga clientes?',
    ctaCopy:
      'Cuéntame qué hace tu negocio, en qué zona estás y qué necesitas mostrar. Te envío un precio cerrado y un plazo.',
    ctaButton: 'Empezar mi página',
    ctaWhatsappLabel: 'Escríbeme por WhatsApp',
    ctaWhatsappText:
      'Hola Jesús, vi tu página de páginas web en Medellín y quiero una para mi negocio de ___ en ___.',
    processTitle: 'Cómo trabajamos',
    process: [
      {
        step: '01',
        title: 'Hablamos',
        text: 'Gratis, por WhatsApp. Me cuentas qué hace tu negocio, a quién le vendes y qué necesitas mostrar.',
      },
      {
        step: '02',
        title: 'La ves primero',
        text: 'Te muestro una versión funcionando con tu marca y tus servicios, para que la revises con calma.',
      },
      {
        step: '03',
        title: 'Ajustamos',
        text: 'Dos rondas de cambios sobre la web real, no sobre una imagen.',
      },
      {
        step: '04',
        title: 'Sale al aire',
        text: 'Dominio, hosting y ficha de Google conectados, todo a tu nombre.',
      },
    ],
    pricingNote:
      'Las páginas web empiezan en 450 USD, con precio cerrado por escrito antes de empezar.',
    pricingCta: 'Ver precios',
    areaServed: cityAreas(
      ['Medellín', 'Envigado', 'Itagüí', 'Sabaneta', 'Bello', 'La Estrella', 'Copacabana', 'Rionegro'],
      'Antioquia',
    ),
  },

  'consultoria-ia': {
    ...CONSULTING_SHARED,
    serviceType: 'Consultoría en inteligencia artificial, servidores y equipos',
    audienceType: 'Empresas y pymes de Medellín, Cúcuta y Bucaramanga',
    seoTitle:
      'Consultoría en IA, Servidores y Equipos para Empresas | EasyPro Digital',
    seoDescription:
      'Consultoría en IA para empresas de Medellín, Cúcuta y Bucaramanga: documentos, servidores, equipos, redes de 10 Gb y software. Desde $400.000.',
    eyebrow: 'Consultoría presencial en Medellín, Cúcuta y Bucaramanga',
    title: 'Pon la inteligencia artificial a trabajar en tu empresa, sin regalar tus datos',
    intro:
      'Te asesoro, te ayudo a comprar lo justo y lo dejo funcionando. Voy en persona en los momentos clave y la consultoría empieza en $400.000 COP.',
    problemTitle: 'Lo que suele frenar un proyecto de IA',
    problems: [
      'Sabes que la IA puede ahorrarte tiempo, pero no sabes por dónde empezar.',
      'Te da miedo subir contratos o datos de clientes a internet.',
      'Te ofrecen equipos caros y no sabes si los necesitas.',
      'Tu red y tus computadores se quedan cortos cuando mueven archivos pesados.',
      'Tienes sistemas sueltos que no se hablan entre sí.',
    ],
    areasTitle: 'Dónde voy en persona',
    areasIntro:
      'Trabajo con empresas de Medellín, Cúcuta y Bucaramanga. En cada ciudad voy en los momentos clave y el resto lo avanzamos por videollamada y WhatsApp.',
    areas: [
      {
        region: 'Medellín y el Valle de Aburrá',
        places: ['Medellín', 'Envigado', 'Itagüí', 'Sabaneta', 'Bello', 'Rionegro'],
      },
      {
        region: 'Cúcuta y su área metropolitana',
        places: ['Cúcuta', 'Villa del Rosario', 'Los Patios', 'El Zulia'],
      },
      {
        region: 'Bucaramanga y su área metropolitana',
        places: ['Bucaramanga', 'Floridablanca', 'Girón', 'Piedecuesta'],
      },
    ],
    faqTitle: 'Lo que preguntan las empresas',
    faq: [
      CONSULTING_FAQ_BASE[0],
      {
        q: '¿Vienes a mi empresa?',
        a: 'Sí. Voy en los momentos clave: para cerrar la propuesta, tomar los requerimientos y probar todo antes de entregar. El resto lo avanzamos por videollamada y WhatsApp.',
      },
      CONSULTING_FAQ_BASE[1],
      CONSULTING_FAQ_BASE[2],
      CONSULTING_FAQ_BASE[3],
      CONSULTING_FAQ_BASE[4],
      CONSULTING_FAQ_BASE[5],
      CONSULTING_FAQ_BASE[6],
      CONSULTING_FAQ_BASE[7],
      {
        q: '¿Qué pasa si ya tengo equipos?',
        a: 'Los reviso y aprovecho lo que sirve. Solo propongo cambiar lo que de verdad limita el trabajo.',
      },
    ],
    ctaTitle: '¿Quieres usar IA en tu empresa?',
    ctaCopy:
      'Cuéntame qué proceso quieres mejorar y en qué ciudad estás. Te digo por dónde empezar y qué hace falta comprar.',
    ctaWhatsappText: 'Hola Jesús, quiero una consultoría de IA para mi empresa en ___.',
    areaServed: [
      ...cityAreas(['Medellín', 'Envigado', 'Itagüí', 'Sabaneta', 'Bello', 'Rionegro'], 'Antioquia'),
      ...cityAreas(['Cúcuta', 'Villa del Rosario', 'Los Patios', 'El Zulia'], 'Norte de Santander'),
      ...cityAreas(['Bucaramanga', 'Floridablanca', 'Girón', 'Piedecuesta'], 'Santander'),
    ],
  },

  'consultoria-ia-medellin': {
    ...CONSULTING_SHARED,
    serviceType: 'Consultoría en IA, servidores y equipos',
    audienceType: 'Empresas y pymes de Medellín y el Valle de Aburrá',
    seoTitle:
      'Consultoría en IA y Servidores en Medellín — Presencial | EasyPro Digital',
    seoDescription:
      'Consultoría presencial en Medellín: IA con los documentos de tu empresa, servidores, equipos y redes de 10 Gb. Desde $400.000. Primera conversación gratis.',
    eyebrow: 'Para empresas de Medellín y su área metropolitana',
    title: 'Consultoría en IA, servidores y equipos en Medellín, en persona',
    intro:
      'Vivo en Medellín. Puedo pasar por tu empresa en el Valle de Aburrá, ver cómo trabajan y dejar la IA, los servidores y los equipos funcionando. Trabajo con pymes de servicios, diseño y manufactura.',
    problemTitle: 'Lo que frena a las empresas de Medellín que quieren usar IA',
    problems: [
      'La IA suena útil, pero en la empresa nadie tiene claro qué proceso conviene mejorar primero.',
      'Te preocupa subir contratos o datos de clientes a herramientas que no controlas.',
      'Te ofrecen servidores y equipos caros sin revisar cuántas personas los van a usar.',
      'Los archivos de diseño o producción pesan y la red actual hace esperar a todo el equipo.',
      'Los sistemas están sueltos y toca copiar datos de un lado a otro para poder trabajar.',
    ],
    areasTitle: 'Dónde trabajo en Medellín',
    areasIntro:
      'Vivo en Medellín y me muevo por todo el Valle de Aburrá. Si estás por fuera, coordinamos por videollamada y voy cuando el proyecto lo necesita.',
    areas: [
      {
        region: 'Medellín',
        places: ['El Poblado', 'Laureles', 'Belén', 'Robledo', 'San Javier', 'Centro'],
      },
      {
        region: 'Valle de Aburrá',
        places: ['Envigado', 'Itagüí', 'Sabaneta', 'Bello', 'La Estrella', 'Rionegro'],
      },
    ],
    faqTitle: 'Lo que preguntan las empresas de Medellín',
    faq: [
      ...CONSULTING_FAQ_BASE,
      {
        q: '¿Puedes venir a mi oficina en Medellín?',
        a: 'Sí. En Medellín y el Valle de Aburrá paso por tu empresa para cerrar la propuesta, tomar requerimientos y probar el proceso antes de entregar.',
      },
      {
        q: '¿Trabajas con empresas del Valle de Aburrá?',
        a: 'Sí. Atiendo Envigado, Itagüí, Sabaneta, Bello, La Estrella y Rionegro, además de Medellín.',
      },
    ],
    ctaTitle: '¿Quieres usar IA en tu empresa de Medellín?',
    ctaCopy:
      'Cuéntame qué proceso quieres mejorar y qué equipos tienes hoy. Te respondo con un plan claro y la lista de compra.',
    ctaWhatsappText: 'Hola Jesús, quiero una consultoría de IA para mi empresa en Medellín.',
    areaServed: cityAreas(
      ['Medellín', 'Envigado', 'Itagüí', 'Sabaneta', 'Bello', 'La Estrella', 'Rionegro'],
      'Antioquia',
    ),
  },

  'consultoria-ia-cucuta': {
    ...CONSULTING_SHARED,
    serviceType: 'Consultoría en IA, servidores y equipos',
    audienceType: 'Comercio y empresas de Cúcuta y su área metropolitana',
    seoTitle:
      'Consultoría en IA y Servidores en Cúcuta — Presencial | EasyPro Digital',
    seoDescription:
      'Consultoría presencial en Cúcuta: IA con los documentos de tu empresa, servidores, equipos y redes de 10 Gb. Desde $400.000. Primera conversación gratis.',
    eyebrow: 'Para empresas de Cúcuta y su área metropolitana',
    title: 'Consultoría en IA, servidores y equipos en Cúcuta, en persona',
    intro:
      'Soy de Norte de Santander y estudié Ingeniería de Sistemas en la UFPS. Viajo a Cúcuta en los momentos clave del proyecto y el resto lo avanzamos por videollamada y WhatsApp. Trabajo con comercio y empresas del área metropolitana y de la frontera.',
    problemTitle: 'Lo que frena a las empresas de Cúcuta que quieren usar IA',
    problems: [
      'Quieres usar IA en el comercio o en la empresa, pero no sabes qué tarea vale la pena delegar primero.',
      'Los datos de clientes y proveedores se mueven por WhatsApp y correo, sin un lugar seguro donde quedarse.',
      'Te ofrecen equipos importados caros y no sabes cuáles de verdad necesitas para empezar.',
      'La red de la oficina se queda corta cuando varios mueven facturas, fotos o archivos pesados.',
      'Cada área tiene su propio programa y la información no se comparte con facilidad.',
    ],
    areasTitle: 'Dónde trabajo en Cúcuta',
    areasIntro:
      'Viajo a Cúcuta para cerrar la propuesta, tomar requerimientos y probar antes de entregar. El resto lo avanzamos a distancia.',
    areas: [
      {
        region: 'Cúcuta y su área metropolitana',
        places: ['Cúcuta', 'Villa del Rosario', 'Los Patios', 'El Zulia'],
      },
    ],
    faqTitle: 'Lo que preguntan las empresas de Cúcuta',
    faq: [
      ...CONSULTING_FAQ_BASE,
      {
        q: '¿Cada cuánto vienes a Cúcuta?',
        a: 'En los momentos clave de tu proyecto: el cierre, la toma de requerimientos y las pruebas. El resto lo avanzamos a distancia.',
      },
      {
        q: '¿Trabajas con empresas fuera de Cúcuta?',
        a: 'Sí. Cubro Villa del Rosario, Los Patios y El Zulia, y también atiendo empresas de otras ciudades a distancia.',
      },
    ],
    ctaTitle: '¿Quieres usar IA en tu empresa de Cúcuta?',
    ctaCopy:
      'Cuéntame qué proceso quieres mejorar y cómo trabajan hoy. Te respondo con un plan claro y la lista de compra.',
    ctaWhatsappText: 'Hola Jesús, quiero una consultoría de IA para mi empresa en Cúcuta.',
    areaServed: cityAreas(
      ['Cúcuta', 'Villa del Rosario', 'Los Patios', 'El Zulia'],
      'Norte de Santander',
    ),
  },

  'consultoria-ia-bucaramanga': {
    ...CONSULTING_SHARED,
    serviceType: 'Consultoría en IA, servidores y equipos',
    audienceType: 'Comercio, salud, calzado y empresas de servicios de Bucaramanga',
    seoTitle:
      'Consultoría en IA y Servidores en Bucaramanga — Presencial | EasyPro Digital',
    seoDescription:
      'Consultoría presencial en Bucaramanga: IA con tus documentos, servidores, equipos y redes de 10 Gb. Desde $400.000. Primera conversación gratis.',
    eyebrow: 'Para empresas de Bucaramanga y su área metropolitana',
    title: 'Consultoría en IA, servidores y equipos en Bucaramanga, en persona',
    intro:
      'Conozco el área metropolitana de Bucaramanga y viajo en los momentos clave del proyecto. Trabajo con comercio, salud, calzado y empresas de servicios que quieren usar IA sin regalar sus datos.',
    problemTitle: 'Lo que frena a las empresas de Bucaramanga que quieren usar IA',
    problems: [
      'Sabes que la IA puede ayudarte con inventarios, pedidos o documentos, pero no hay un plan claro.',
      'Te da desconfianza que la información de pacientes o clientes termine en una herramienta externa.',
      'Comprar una tarjeta gráfica o un servidor sin asesoría puede salir caro y quedar sin uso.',
      'En temporada alta la red y los computadores se vuelven lentos con los archivos del taller o la oficina.',
      'El software de ventas, el de inventario y el de contabilidad no comparten información.',
    ],
    areasTitle: 'Dónde trabajo en Bucaramanga',
    areasIntro:
      'Viajo a Bucaramanga para cerrar la propuesta, tomar requerimientos y probar antes de entregar. El resto lo avanzamos a distancia.',
    areas: [
      {
        region: 'Bucaramanga y su área metropolitana',
        places: ['Bucaramanga', 'Floridablanca', 'Girón', 'Piedecuesta'],
      },
    ],
    faqTitle: 'Lo que preguntan las empresas de Bucaramanga',
    faq: [
      ...CONSULTING_FAQ_BASE,
      {
        q: '¿Cada cuánto vienes a Bucaramanga?',
        a: 'En los momentos clave de tu proyecto: el cierre, la toma de requerimientos y las pruebas. El resto lo avanzamos a distancia.',
      },
      {
        q: '¿Trabajas con empresas de Floridablanca, Girón y Piedecuesta?',
        a: 'Sí. Esas zonas hacen parte del área metropolitana que atiendo, igual que Bucaramanga.',
      },
    ],
    ctaTitle: '¿Quieres usar IA en tu empresa de Bucaramanga?',
    ctaCopy:
      'Cuéntame qué proceso quieres mejorar y cómo trabajan hoy. Te respondo con un plan claro y la lista de compra.',
    ctaWhatsappText: 'Hola Jesús, quiero una consultoría de IA para mi empresa en Bucaramanga.',
    areaServed: cityAreas(
      ['Bucaramanga', 'Floridablanca', 'Girón', 'Piedecuesta'],
      'Santander',
    ),
  },
}

/** Contenido de una página por ciudad. Solo existe en español. */
export function getCityPage(slug) {
  return pages[slug] || null
}
