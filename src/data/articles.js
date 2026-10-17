/**
 * Artículos del blog. Viven en el repo a propósito: así se prerenderizan
 * (scripts/prerender.mjs) y quedan como HTML estático real con status 200,
 * que es justo lo que una API externa cargada por JavaScript NO consigue.
 *
 * Para agregar uno: añade la entrada aquí y corre `npm run sitemap:articles`
 * (el build ya lo corre solo). Las rutas del prerender se derivan de este
 * mismo arreglo, así que no hay que tocar ROUTE_PATHS. El generador
 * "SEO Article Forge" debe ESCRIBIR en este archivo, no servir una API en
 * runtime: una lista cargada por fetch no se indexa igual.
 *
 * Campos: slug, tag (nicho, se muestra como etiqueta), title/summary/body
 * por idioma. `body` es un array de bloques { h } para subtítulo o { p }
 * para párrafo.
 */
export const articles = [
  {
    slug: 'real-estate-website-no-leads',
    relatedDemo: 'realestate',
    relatedService: 'real-estate-website-design',
    related: ['five-second-test-agent-website', 'inmobiliaria-web-ia-sin-leads', 'inmobiliaria-competencia-aparece-primero-google'],
    tag: { en: 'Real estate', es: 'Inmobiliaria' },
    date: '2026-10-16',
    image: 'https://cdn.pixabay.com/photo/2021/10/07/15/23/real-estate-6688945_640.jpg',
    imageAlt: { en: 'Real estate for-sale sign in front of a house', es: 'Cartel de venta inmobiliaria frente a una casa' },
    en: {
      title: 'Your Real Estate Website Looks Fine. So Why No Leads?',
      summary:
        'Most agent sites fail for the same five reasons, and none of them are about how pretty the design is.',
      body: [
        { p: 'A real estate website that gets no enquiries is rarely an ugly website. It is usually a website that never asks for anything.' },
        { h: 'It loads too slowly on a phone' },
        { p: 'Buyers find you between showings, in a car, on mobile data. If your listing photos are full-resolution and your hero video autoplays, you lose them before the page paints. Compress every image and let the first screen render in under two seconds.' },
        { h: 'There is no obvious next step' },
        { p: 'A visitor reads your bio, looks at three properties and then finds nothing to do. Every page needs one clear action: request a valuation, book a viewing, ask a question. One action, repeated, beats five competing buttons.' },
        { h: 'Your listings live somewhere else' },
        { p: 'If your properties sit on a portal and your site just links out, the portal captures the lead and sells it back to you. Keep the listings on your own domain, even if the portal also has them.' },
        { h: 'You look like every other agent' },
        { p: 'The same template, the same stock photo of a handshake, the same "your trusted partner". Nothing there makes someone choose you. Name your neighbourhoods, show your own closings, write like a person.' },
        { h: 'Nothing catches the visitor who is not ready' },
        { p: 'Most people who land on your site will not call today. Give them something smaller to say yes to: a valuation estimate, a saved search, a market update for their street. That is the lead you are currently throwing away.' },
      ],
    },
    es: {
      title: 'Tu Página de Finca Raíz Se Ve Bien. ¿Y Entonces Por Qué No Llegan Clientes?',
      summary:
        'Casi todas las páginas de agentes fallan por las mismas cinco razones, y ninguna tiene que ver con lo bonito del diseño.',
      body: [
        { p: 'Una página inmobiliaria que no recibe consultas rara vez es una página fea. Casi siempre es una página que nunca pide nada.' },
        { h: 'Carga lento en el celular' },
        { p: 'Los compradores te buscan entre visita y visita, en el carro, con datos móviles. Si las fotos van en resolución completa y el video del inicio se reproduce solo, los perdiste antes de que se pinte la página. Comprime cada imagen y haz que la primera pantalla aparezca en menos de dos segundos.' },
        { h: 'No hay un siguiente paso claro' },
        { p: 'El visitante lee tu perfil, mira tres inmuebles y no encuentra qué hacer. Cada página necesita una sola acción visible: pedir un avalúo, agendar una visita, hacer una pregunta. Una acción repetida vende más que cinco botones compitiendo.' },
        { h: 'Tus inmuebles viven en otra parte' },
        { p: 'Si tus propiedades están en un portal y tu web solo enlaza hacia allá, el portal se queda con el contacto y después te lo revende. Ten las fichas en tu propio dominio, aunque también estén en el portal.' },
        { h: 'Te ves igual a todos los demás' },
        { p: 'La misma plantilla, la misma foto de archivo del apretón de manos, el mismo "tu aliado de confianza". Ahí no hay nada que haga que te elijan a ti. Nombra tus barrios, muestra tus propios cierres, escribe como una persona.' },
        { h: 'Nada atrapa al que todavía no está listo' },
        { p: 'La mayoría de quienes llegan a tu web no te van a llamar hoy. Dales algo más pequeño a lo que decir que sí: un estimado de avalúo, una búsqueda guardada, un informe del mercado de su cuadra. Ese es el cliente que hoy estás botando.' },
      ],
    },
  },
  {
    slug: 'five-second-test-agent-website',
    relatedDemo: 'realestate',
    relatedService: 'real-estate-website-design',
    related: ['real-estate-website-no-leads', 'inmobiliaria-web-ia-sin-leads', 'invisible-on-google-where-to-start'],
    tag: { en: 'Real estate', es: 'Inmobiliaria' },
    date: '2026-10-16',
    image: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_640.jpg',
    imageAlt: { en: 'Modern house with garage and landscaped driveway', es: 'Casa moderna con garaje y entrada ajardinada' },
    en: {
      title: 'The Five-Second Test Almost Every Agent Website Fails',
      summary:
        'Open your own site on a phone and start a timer. If a stranger cannot answer three questions, neither can a buyer.',
      body: [
        { p: 'Here is a test that costs nothing. Open your website on your phone, hand it to someone who does not know what you do, and count to five. Then take it back and ask them three questions.' },
        { h: 'What does this person sell?' },
        { p: 'If the answer is vague, your headline is doing nothing. "Welcome to my website" and "Your real estate partner" are not answers. "I sell homes in Laureles and Envigado" is.' },
        { h: 'Where do they work?' },
        { p: 'Real estate is local and your site should say so above the fold. A city name in the headline does more for your search ranking and your credibility than an entire About page.' },
        { h: 'What am I supposed to do now?' },
        { p: 'If they hesitate, your call to action is buried or competing with four other buttons. One button, high on the page, saying exactly what happens when they tap it.' },
        { h: 'Why this works' },
        { p: 'Nobody reads a website. They scan it, decide in a few seconds whether it is worth more attention, and leave if it is not. Every optimisation you do below the fold is worth less than fixing the first screen. Fix the first screen first.' },
      ],
    },
    es: {
      title: 'La Prueba de Cinco Segundos Que Casi Ninguna Web de Agente Pasa',
      summary:
        'Abre tu propia página en el celular y cuenta hasta cinco. Si un desconocido no puede responder tres preguntas, un comprador tampoco.',
      body: [
        { p: 'Esta prueba no cuesta nada. Abre tu web en el celular, pásasela a alguien que no sepa a qué te dedicas y cuenta hasta cinco. Luego quítasela y hazle tres preguntas.' },
        { h: '¿Qué vende esta persona?' },
        { p: 'Si la respuesta es vaga, tu titular no está haciendo nada. "Bienvenido a mi sitio" y "tu aliado inmobiliario" no son respuestas. "Vendo apartamentos en Laureles y Envigado" sí lo es.' },
        { h: '¿Dónde trabaja?' },
        { p: 'La finca raíz es local y tu web debería decirlo arriba, sin tener que bajar. El nombre de tu ciudad en el titular hace más por tu posicionamiento y por tu credibilidad que una página entera de "sobre mí".' },
        { h: '¿Y ahora qué se supone que haga?' },
        { p: 'Si duda, tu llamado a la acción está enterrado o compitiendo con otros cuatro botones. Un botón, arriba, que diga exactamente qué pasa cuando lo toquen.' },
        { h: 'Por qué funciona' },
        { p: 'Nadie lee una página web. La escanean, deciden en segundos si merece más atención y se van si no. Cualquier mejora que hagas más abajo vale menos que arreglar la primera pantalla. Arregla la primera pantalla primero.' },
      ],
    },
  },
  {
    slug: 'plumbing-website-no-calls',
    relatedDemo: 'plumbers',
    relatedService: null,
    related: ['emergency-page-converts-2am', 'fontaneria-web-lovable-no-google', 'fontanero-vecino-mas-llamadas-web-fea'],
    tag: { en: 'Plumbing', es: 'Plomería' },
    date: '2026-10-16',
    image: 'https://cdn.pixabay.com/photo/2017/09/26/11/11/plumber-2788334_640.jpg',
    imageAlt: { en: 'Plumber repairing a kitchen faucet', es: 'Fontanero reparando un grifo de cocina' },
    en: {
      title: 'Your Plumbing Website Is Not Getting Calls. Here Is Why',
      summary:
        'Emergency customers do not browse. They scan for a phone number and call whoever makes it easiest.',
      body: [
        { p: 'A plumbing website has one job, and it is not to look good. It is to turn a person standing in a flooded kitchen into a phone call within about twenty seconds.' },
        { h: 'Your phone number is not a button' },
        { p: 'Written as plain text, a number has to be memorised and typed. As a tappable link it becomes one touch. Put it in the header, in the hero, and fixed at the bottom of the screen on mobile.' },
        { h: 'You do not say where you work' },
        { p: 'Someone searching at midnight needs to know in one glance whether you cover their neighbourhood. List the areas by name. It answers the question and it is exactly what local search needs to connect you to those searches.' },
        { h: 'Nothing says you are available now' },
        { p: 'If you take emergency calls, say the hours in real text, not inside an image. "24/7 emergency call-outs" above the fold does more than any amount of design.' },
        { h: 'No reason to trust you' },
        { p: 'Licence number, insurance, years working, a handful of real reviews. A stranger is about to let you into their home at 2 AM. Give them a reason to pick you over the next result.' },
      ],
    },
    es: {
      title: 'Tu Página de Plomería No Recibe Llamadas. Esta Es la Razón',
      summary:
        'El cliente de urgencia no navega. Busca un número y llama al que se lo ponga más fácil.',
      body: [
        { p: 'Una página de plomería tiene un solo trabajo, y no es verse bonita. Es convertir a alguien parado en una cocina inundada en una llamada, en unos veinte segundos.' },
        { h: 'Tu teléfono no es un botón' },
        { p: 'Escrito como texto plano, el número toca memorizarlo y marcarlo. Como enlace se vuelve un solo toque. Ponlo en el encabezado, en la primera pantalla y fijo abajo en el celular.' },
        { h: 'No dices dónde trabajas' },
        { p: 'Quien busca a medianoche necesita saber de un vistazo si cubres su barrio. Nombra las zonas una por una. Responde la pregunta y es justo lo que la búsqueda local necesita para conectarte con esas consultas.' },
        { h: 'Nada dice que estás disponible ahora' },
        { p: 'Si atiendes urgencias, pon los horarios en texto de verdad, no dentro de una imagen. Un "atendemos urgencias 24/7" bien arriba hace más que cualquier diseño.' },
        { h: 'No hay razón para confiar en ti' },
        { p: 'Matrícula, seguro, años de trabajo y unas cuantas reseñas reales. Un desconocido está por dejarte entrar a su casa a las 2 de la mañana. Dale un motivo para elegirte a ti y no al siguiente resultado.' },
      ],
    },
  },
  {
    slug: 'emergency-page-converts-2am',
    relatedDemo: 'plumbers',
    relatedService: null,
    related: ['plumbing-website-no-calls', 'fontaneria-web-lovable-no-google', 'google-business-profile-local-trades'],
    tag: { en: 'Home services', es: 'Servicios a domicilio' },
    date: '2026-10-16',
    image: 'https://cdn.pixabay.com/photo/2019/10/24/08/07/fire-department-4573674_640.jpg',
    imageAlt: { en: 'Emergency services responding at night', es: 'Servicios de emergencia respondiendo de noche' },
    en: {
      title: 'What an Emergency Page Needs to Convert at 2 AM',
      summary:
        'Panic changes how people read. Your emergency page has to work for someone who is not thinking clearly.',
      body: [
        { p: 'An emergency page is not a normal page. The person reading it is stressed, probably on a phone, possibly standing in water. Everything that works on a calm Tuesday afternoon stops working.' },
        { h: 'One decision, not five' },
        { p: 'Remove the navigation menu, the service grid, the blog links. An emergency page should offer a phone call and nothing else. Every extra option is one more thing to process.' },
        { h: 'Big text, high contrast' },
        { p: 'Shaky hands, bad light, a cracked screen. Make the phone number the largest thing on the page and make sure it is readable at arms length.' },
        { h: 'Answer "how fast" immediately' },
        { p: 'The only question that matters is how soon someone arrives. If you can say "within the hour in these areas", say it in the first line. Vague promises lose to a competitor who commits to a number.' },
        { h: 'Say what to do while they wait' },
        { p: 'Where the stopcock is, how to cut the power safely, what not to touch. It costs you nothing, it genuinely helps, and it is the kind of page people bookmark and send to a neighbour.' },
      ],
    },
    es: {
      title: 'Qué Necesita una Página de Urgencias Para Convertir a las 2 de la Mañana',
      summary:
        'El susto cambia la forma de leer. Tu página de urgencias tiene que funcionar para alguien que no está pensando con claridad.',
      body: [
        { p: 'Una página de urgencias no es una página normal. Quien la lee está estresado, casi seguro en el celular, posiblemente parado en agua. Todo lo que funciona un martes tranquilo deja de funcionar.' },
        { h: 'Una decisión, no cinco' },
        { p: 'Quita el menú, la grilla de servicios, los enlaces al blog. Una página de urgencias ofrece una llamada y nada más. Cada opción extra es una cosa más que procesar.' },
        { h: 'Texto grande y con contraste' },
        { p: 'Manos temblorosas, mala luz, pantalla rota. Que el teléfono sea lo más grande de la página y que se lea con el brazo estirado.' },
        { h: 'Responde "en cuánto llegan" de una vez' },
        { p: 'La única pregunta que importa es qué tan rápido llega alguien. Si puedes decir "en menos de una hora en estas zonas", dilo en la primera línea. Las promesas vagas pierden contra el competidor que se compromete con un número.' },
        { h: 'Di qué hacer mientras esperan' },
        { p: 'Dónde está el registro, cómo cortar la luz sin riesgo, qué no tocar. No te cuesta nada, ayuda de verdad, y es el tipo de página que la gente guarda y le manda al vecino.' },
      ],
    },
  },
  {
    slug: 'how-much-should-a-website-cost',
    relatedDemo: null,
    relatedService: null,
    related: ['invisible-on-google-where-to-start', 'web-con-ia-30-segundos-no-aparece-google', 'web-dos-anos-sin-mantenimiento-google-olvida'],
    tag: { en: 'Pricing', es: 'Precios' },
    date: '2026-10-16',
    image: 'https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_640.jpg',
    imageAlt: { en: 'Laptop displaying a website on a clean desk', es: 'Portatil mostrando una web sobre un escritorio limpio' },
    en: {
      title: 'How Much Should a Small Business Website Actually Cost?',
      summary:
        'Quotes range from 200 to 20,000 for what looks like the same thing. Here is what actually moves the number.',
      body: [
        { p: 'Ask five people to build you a website and you will get five prices with no obvious relationship to each other. The spread is real, and it comes down to a few things.' },
        { h: 'How much of it already exists' },
        { p: 'A template that gets your text and your photos dropped in is cheap because most of the work is done. A layout designed around your business costs more because someone has to think.' },
        { h: 'What has to connect to something else' },
        { p: 'A brochure site is one price. The moment it has to talk to a booking system, a payment processor, an inventory feed or a CRM, you are paying for integration work and for the testing that comes with it.' },
        { h: 'Who owns it afterwards' },
        { p: 'A low monthly fee often means you are renting. Stop paying and the site disappears. A one-off price where the domain, hosting and code end up in your name is a different product, and worth comparing carefully.' },
        { h: 'What is not included' },
        { p: 'Ask specifically: is hosting included, for how long? The domain? Who writes the text? How many rounds of changes? Most quotes that look cheap get expensive right here.' },
      ],
    },
    es: {
      title: '¿Cuánto Debería Costar Realmente la Página Web de un Negocio Pequeño?',
      summary:
        'Las cotizaciones van de 200 a 20.000 por lo que parece lo mismo. Esto es lo que de verdad mueve el precio.',
      body: [
        { p: 'Pídele a cinco personas que te hagan una web y vas a recibir cinco precios sin relación aparente entre ellos. La diferencia es real y se explica por unas pocas cosas.' },
        { h: 'Cuánto de eso ya existe' },
        { p: 'Una plantilla donde meten tu texto y tus fotos sale barata porque el trabajo ya está hecho. Un diseño pensado alrededor de tu negocio cuesta más porque alguien tiene que pensarlo.' },
        { h: 'Qué se tiene que conectar con otra cosa' },
        { p: 'Una web de presentación tiene un precio. En el momento en que debe hablar con un sistema de reservas, una pasarela de pagos, un inventario o un CRM, estás pagando integración y las pruebas que vienen con ella.' },
        { h: 'De quién queda al final' },
        { p: 'Una mensualidad baja muchas veces significa que estás alquilando. Dejas de pagar y la web desaparece. Un pago único donde el dominio, el hosting y el código quedan a tu nombre es otro producto, y vale la pena compararlo con calma.' },
        { h: 'Qué no está incluido' },
        { p: 'Pregunta específicamente: ¿el hosting va incluido, por cuánto tiempo? ¿El dominio? ¿Quién escribe los textos? ¿Cuántas rondas de cambios? La mayoría de cotizaciones que se ven baratas se encarecen justo aquí.' },
      ],
    },
  },
  {
    slug: 'invisible-on-google-where-to-start',
    relatedDemo: null,
    relatedService: null,
    related: ['google-business-profile-local-trades', 'web-competencia-peor-rankea-mas-alto', 'web-con-ia-30-segundos-no-aparece-google'],
    tag: { en: 'SEO', es: 'SEO' },
    date: '2026-10-16',
    image: 'https://cdn.pixabay.com/photo/2015/05/08/14/47/seo-758264_640.jpg',
    imageAlt: { en: 'SEO and web marketing concept with colored pencils', es: 'Concepto de SEO y marketing web con lapices de colores' },
    en: {
      title: 'Invisible on Google? Start Here, Not With Keywords',
      summary:
        'Most small businesses skip the two steps that matter and go straight to the one that does not.',
      body: [
        { p: 'When a business says "we are not on Google", the instinct is to go hunting for keywords. That is usually the third thing to do, and the first two are easier.' },
        { h: 'First: can Google actually read your site?' },
        { p: 'If your pages are built entirely in the browser with JavaScript, or every route returns a 404 status while still looking fine to a human, Google may be seeing nothing. Open your page source and look for your own headline. If it is not there, nothing else you do matters.' },
        { h: 'Second: claim your business profile' },
        { p: 'For anyone selling locally, the map results sit above the normal ones, and they come from a free business profile, not from your website. Categories, service areas, photos, and real reviews. This single step beats months of content for a local business.' },
        { h: 'Third, and only then: content' },
        { p: 'Now it makes sense to ask what people search for. Not the words you use internally, but the ones a customer types when they have the problem you solve. Write one page that answers one of those questions properly, and repeat.' },
        { h: 'The honest timeline' },
        { p: 'Local results can move in weeks. Competitive national terms take six to twelve months and may never arrive if bigger sites own them. Plan accordingly and do not let anyone promise you page one by next month.' },
      ],
    },
    es: {
      title: '¿Invisible en Google? Empieza Por Aquí, No Por las Palabras Clave',
      summary:
        'Casi todos los negocios pequeños se saltan los dos pasos que importan y arrancan por el que no.',
      body: [
        { p: 'Cuando un negocio dice "no aparecemos en Google", el instinto es salir a buscar palabras clave. Eso casi siempre es lo tercero que hay que hacer, y los dos primeros pasos son más fáciles.' },
        { h: 'Primero: ¿Google puede leer tu sitio?' },
        { p: 'Si tus páginas se arman enteras en el navegador con JavaScript, o si cada ruta devuelve un código 404 aunque se vea bien para una persona, puede que Google no esté viendo nada. Abre el código fuente de tu página y busca tu propio titular. Si no está ahí, nada más de lo que hagas importa.' },
        { h: 'Segundo: reclama tu perfil de empresa' },
        { p: 'Para quien vende local, el bloque de mapas va antes que los resultados normales, y sale de un perfil de empresa gratuito, no de tu web. Categorías, zonas de servicio, fotos y reseñas reales. Este solo paso le gana a meses de contenido para un negocio local.' },
        { h: 'Tercero, y solo entonces: contenido' },
        { p: 'Ahora sí tiene sentido preguntarse qué busca la gente. No las palabras que usas tú internamente, sino las que teclea un cliente cuando tiene el problema que tú resuelves. Escribe una página que responda bien una de esas preguntas, y repite.' },
        { h: 'El plazo, sin cuentos' },
        { p: 'Los resultados locales se pueden mover en semanas. Los términos nacionales competidos toman de seis a doce meses y puede que nunca lleguen si sitios más grandes los tienen tomados. Planea con eso en mente y no dejes que nadie te prometa primera página para el otro mes.' },
      ],
    },
  },
  {
    slug: 'electrician-website-licence-trust',
    relatedDemo: 'electricians',
    relatedService: null,
    related: ['invisible-on-google-where-to-start', 'google-business-profile-local-trades', 'web-competencia-peor-rankea-mas-alto'],
    tag: { en: 'Electricians', es: 'Electricistas' },
    date: '2026-10-16',
    image: 'https://cdn.pixabay.com/photo/2015/12/07/10/49/electrician-1080554_640.jpg',
    imageAlt: { en: 'Electrician working on wiring in a panel', es: 'Electricista trabajando en el cableado de un panel' },
    en: {
      title: 'Homeowners Check Your Licence Before They Call. Does Your Site Show It?',
      summary:
        'Electrical work is the one trade people are afraid to get wrong. Your website either removes that fear in ten seconds or loses the job.',
      body: [
        { p: 'Nobody shops for an electrician the way they shop for a painter. The question in their head is not "is this nice work" but "is this person going to burn my house down".' },
        { h: 'Put the licence number where it cannot be missed' },
        { p: 'Licence or registration number, insurance, and the areas you cover belong in the header or the first screen, not buried in a footer. It is the single fastest trust signal you have and it costs you nothing.' },
        { h: 'Separate emergency work from planned work' },
        { p: 'A tripped panel at night and a kitchen rewire in three weeks are two different buyers. Give each one its own page and its own action: call now for the first, request a quote for the second.' },
        { h: 'Show the work, not stock photos' },
        { p: 'Six photos of your own panels, your own conduit runs, your own van is worth more than any gallery of purchased images. People can tell the difference and they assume the worst when they spot stock.' },
        { h: 'Say what you will not do' },
        { p: 'Naming your limits reads as honesty, not weakness. "We do residential and small commercial, not industrial" filters out the calls that waste your afternoon and makes the rest trust the quote.' },
      ],
    },
    es: {
      title: 'La Gente Revisa Tu Matrícula Antes de Llamarte. ¿Tu Página la Muestra?',
      summary:
        'La electricidad es el oficio que nadie quiere equivocar. Tu web le quita ese miedo en diez segundos o pierde el trabajo.',
      body: [
        { p: 'Nadie busca un electricista como busca un pintor. La pregunta en su cabeza no es "¿qué tan bonito queda?" sino "¿esta persona me va a quemar la casa?".' },
        { h: 'Pon la matrícula donde no se pueda pasar por alto' },
        { p: 'Matrícula profesional, seguro o póliza y zonas donde trabajas van en el encabezado o en la primera pantalla, no enterrados en el pie de página. Es la señal de confianza más rápida que tienes y no te cuesta nada.' },
        { h: 'Separa la urgencia del trabajo planeado' },
        { p: 'Un tablero que se botó a medianoche y una reinstalación de cocina para dentro de tres semanas son dos clientes distintos. Dale a cada uno su página y su acción: llamar ya para el primero, pedir cotización para el segundo.' },
        { h: 'Muestra tu trabajo, no fotos de archivo' },
        { p: 'Seis fotos de tus propios tableros, tus propias canalizaciones y tu propia camioneta valen más que cualquier galería comprada. La gente nota la diferencia y cuando ve una foto de archivo piensa lo peor.' },
        { h: 'Di qué no haces' },
        { p: 'Nombrar tus límites se lee como honestidad, no como debilidad. "Hacemos residencial y comercial pequeño, no industrial" filtra las llamadas que te dañan la tarde y hace que las demás confíen en tu cotización.' },
      ],
    },
  },
  {
    slug: 'auto-shop-website-books-appointments',
    relatedDemo: 'automechanics',
    relatedService: null,
    related: ['salon-online-booking-empty-chair', 'invisible-on-google-where-to-start', 'google-business-profile-local-trades'],
    tag: { en: 'Auto repair', es: 'Mecánica' },
    date: '2026-10-16',
    image: 'https://cdn.pixabay.com/photo/2016/08/05/17/20/car-1572686_640.jpg',
    imageAlt: { en: 'Car engine in an auto repair shop', es: 'Motor de auto en un taller mecanico' },
    en: {
      title: 'Your Shop Is Full and Your Phone Still Rings All Day. Fix It With One Page',
      summary:
        'A workshop website should book the appointment and answer the three questions every caller asks. Most do neither.',
      body: [
        { p: 'Every call to a workshop is roughly the same three questions: do you work on my car, how much, and when can you take it. A website that answers those stops the phone from eating your day.' },
        { h: 'Name the makes you service' },
        { p: 'A list of brands you actually work on cuts the wrong calls immediately and makes you findable for the searches that matter, because people search by make, not by "mechanic".' },
        { h: 'Publish a range, not a secret' },
        { p: 'You cannot quote a repair blind, but you can publish ranges for the routine jobs: oil service, brakes, diagnostics fee. Silence on price reads as expensive, and the caller hangs up and dials the next shop.' },
        { h: 'Let them book a drop-off slot' },
        { p: 'A simple form with car, problem and preferred day beats a phone number for anyone calling from an office. Those are the customers you are missing, not the ones already standing in your bay.' },
        { h: 'One photo of a clean bay is worth a paragraph' },
        { p: 'Drivers decide about care from how the shop looks. Show the workspace, the lift, the people. It answers the question they will not ask out loud.' },
      ],
    },
    es: {
      title: 'El Taller Está Lleno y el Teléfono No Para. Una Sola Página lo Arregla',
      summary:
        'La web de un taller debería agendar la cita y responder las tres preguntas que hace todo el que llama. Casi ninguna hace ninguna de las dos.',
      body: [
        { p: 'Toda llamada a un taller es más o menos la misma: ¿atienden mi carro?, ¿cuánto cuesta? y ¿cuándo me lo reciben? Una web que responde eso te devuelve el día.' },
        { h: 'Nombra las marcas que atiendes' },
        { p: 'La lista de marcas con las que realmente trabajas corta de inmediato las llamadas equivocadas y te hace aparecer en las búsquedas que importan, porque la gente busca por marca, no por "mecánico".' },
        { h: 'Publica un rango, no un secreto' },
        { p: 'No puedes cotizar una reparación a ciegas, pero sí publicar rangos de lo rutinario: cambio de aceite, frenos, costo del diagnóstico. El silencio sobre el precio se lee como "caro" y el cliente cuelga y marca el siguiente taller.' },
        { h: 'Deja que agenden la entrega del carro' },
        { p: 'Un formulario simple con carro, falla y día preferido sirve más que un número de teléfono para quien está llamando desde la oficina. Esos son los clientes que estás perdiendo, no los que ya están en tu bahía.' },
        { h: 'Una foto del taller limpio dice más que un párrafo' },
        { p: 'El dueño del carro decide por cómo se ve el taller. Muestra el espacio, el elevador, la gente. Eso responde la pregunta que no te va a hacer en voz alta.' },
      ],
    },
  },
  {
    slug: 'cleaning-company-recurring-clients',
    relatedDemo: 'cleaners',
    relatedService: null,
    related: ['landscaper-website-no-contracts', 'invisible-on-google-where-to-start', 'google-business-profile-local-trades'],
    tag: { en: 'Cleaning', es: 'Limpieza' },
    date: '2026-10-16',
    image: 'https://cdn.pixabay.com/photo/2025/06/16/12/52/cleaning-services-9663247_640.jpg',
    imageAlt: { en: 'Professional cleaning supplies for house cleaning', es: 'Articulos profesionales de limpieza organizados' },
    en: {
      title: 'One-Off Cleans Pay the Week. Recurring Clients Pay the Year',
      summary:
        'If your website sells a single clean, you built a website for your worst customer. Here is how to sell the contract instead.',
      body: [
        { p: 'A cleaning business lives on repeat work, and yet almost every cleaning website is built to sell one visit. The page should make the weekly plan the obvious choice.' },
        { h: 'Price the plan, not the hour' },
        { p: 'Hourly pricing invites haggling and makes every job a negotiation. Show weekly, fortnightly and monthly plans side by side with what each includes. The middle one is what most people pick, so design the middle one well.' },
        { h: 'Say exactly what is included' },
        { p: 'The real objection is not price, it is uncertainty about what gets done. A plain checklist per room removes the fear of paying for a job half finished, and it protects you from scope creep later.' },
        { h: 'Answer the keys-and-trust question' },
        { p: 'Someone is letting a stranger into their home. Background checks, insurance, the same cleaner every visit, what happens if something breaks. Put that on the page before anyone has to ask.' },
        { h: 'Split homes from offices' },
        { p: 'A family and an office manager need different pages, different language and different proof. Mixing them makes both feel like they landed in the wrong place.' },
      ],
    },
    es: {
      title: 'Un Aseo Suelto Paga la Semana. El Cliente Fijo Paga el Año',
      summary:
        'Si tu web vende un aseo suelto, hiciste una web para tu peor cliente. Así se vende el contrato.',
      body: [
        { p: 'Un negocio de aseo vive del cliente que vuelve, y sin embargo casi toda web de limpieza está hecha para vender una sola visita. La página debería hacer que el plan semanal sea la opción obvia.' },
        { h: 'Cotiza el plan, no la hora' },
        { p: 'Cobrar por hora invita al regateo y convierte cada trabajo en una negociación. Muestra planes semanal, quincenal y mensual uno al lado del otro con lo que incluye cada uno. La mayoría elige el del medio, así que diseña bien el del medio.' },
        { h: 'Di exactamente qué incluye' },
        { p: 'La objeción real no es el precio, es no saber qué se hace. Una lista clara por espacio quita el miedo a pagar por un trabajo a medias y después te protege a ti de que te pidan más de lo acordado.' },
        { h: 'Responde la pregunta de las llaves' },
        { p: 'Alguien va a dejar entrar a un desconocido a su casa. Verificación de antecedentes, póliza, la misma persona en cada visita, qué pasa si algo se rompe. Eso va en la página antes de que lo tengan que preguntar.' },
        { h: 'Separa hogares de oficinas' },
        { p: 'Una familia y un administrador de oficina necesitan páginas distintas, lenguaje distinto y pruebas distintas. Mezclarlos hace que los dos sientan que llegaron al lugar equivocado.' },
      ],
    },
  },
  {
    slug: 'salon-online-booking-empty-chair',
    relatedDemo: 'salonBelleza',
    relatedService: null,
    related: ['salon-web-wix-ai-sin-clientes', 'auto-shop-website-books-appointments', 'invisible-on-google-where-to-start'],
    tag: { en: 'Salons', es: 'Belleza' },
    date: '2026-10-16',
    image: 'https://cdn.pixabay.com/photo/2019/12/09/07/47/hairdresser-4682912_640.jpg',
    imageAlt: { en: 'Hairdresser styling a client in a modern salon', es: 'Peluquera atendiendo a una clienta en un salon moderno' },
    en: {
      title: 'The Empty Chair at 3pm Is a Website Problem',
      summary:
        'Your clients book at night, from bed, on a phone. If booking means calling during business hours, the slot stays empty.',
      body: [
        { p: 'Salon bookings happen at the worst possible moment for a phone call: late at night, on a lunch break, in a queue. A page that only offers a phone number loses every one of those.' },
        { h: 'Booking has to work at 11pm' },
        { p: 'Online booking is not a luxury feature, it is the whole point. Even a form that reaches your phone as a message beats forcing a call you will not answer until morning.' },
        { h: 'Show prices by service and by length' },
        { p: 'Hair pricing depends on length and condition and everyone knows it. Publish ranges and say what changes them. Hiding prices does not protect the sale, it sends the client to the salon that published theirs.' },
        { h: 'Your portfolio is your product' },
        { p: 'Real photos of real clients, grouped by what they asked for: balayage, colour correction, curly cuts. People do not browse your gallery, they look for themselves in it.' },
        { h: 'Say who does what' },
        { p: 'Clients book a person, not a business. A short profile per stylist with their specialty and their own work turns a price-shopper into someone asking for a specific chair.' },
      ],
    },
    es: {
      title: 'La Silla Vacía de las 3pm Es un Problema de Página Web',
      summary:
        'Tus clientas agendan de noche, desde la cama, en el celular. Si agendar significa llamar en horario laboral, el cupo se queda vacío.',
      body: [
        { p: 'En un salón las citas se piden en el peor momento posible para una llamada: en la noche, en la hora de almuerzo, en una fila. Una página que solo ofrece un teléfono pierde todas esas.' },
        { h: 'Agendar tiene que funcionar a las 11 de la noche' },
        { p: 'Agendar en línea no es un lujo, es el punto completo. Incluso un formulario que te llegue como mensaje al celular sirve más que obligar a una llamada que no vas a contestar hasta mañana.' },
        { h: 'Muestra precios por servicio y por largo' },
        { p: 'El precio del cabello depende del largo y del estado, y todo el mundo lo sabe. Publica rangos y di qué los cambia. Esconder el precio no protege la venta, manda a la clienta al salón que sí publicó el suyo.' },
        { h: 'Tu portafolio es tu producto' },
        { p: 'Fotos reales de clientas reales, agrupadas por lo que pidieron: balayage, corrección de color, corte en rizado. Nadie navega tu galería: se busca a sí misma dentro de ella.' },
        { h: 'Di quién hace qué' },
        { p: 'Las clientas agendan con una persona, no con un local. Un perfil corto por estilista, con su especialidad y su propio trabajo, convierte a quien compara precios en alguien que pide una silla específica.' },
      ],
    },
  },
  {
    slug: 'google-business-profile-local-trades',
    relatedDemo: null,
    relatedService: null,
    related: ['invisible-on-google-where-to-start', 'web-competencia-peor-rankea-mas-alto', 'fontanero-vecino-mas-llamadas-web-fea'],
    tag: { en: 'Local SEO', es: 'SEO local' },
    date: '2026-10-16',
    image: 'https://cdn.pixabay.com/photo/2016/11/22/21/34/treasure-map-1850653_640.jpg',
    imageAlt: { en: 'Navigation map symbolizing local business search', es: 'Mapa de navegacion simbolizando busqueda local' },
    en: {
      title: 'Your Google Business Profile Beats Your Homepage. Treat It That Way',
      summary:
        'For local trades, most people decide inside Google and never reach your site. The profile is the storefront.',
      body: [
        { p: 'Search "plumber near me" and look at what fills the screen: a map, three listings, photos and review counts. Your homepage is below all of that, and most people never scroll.' },
        { h: 'Categories decide who sees you' },
        { p: 'The primary category is the strongest lever in local search. Pick the one that names what you actually sell, add the secondary ones honestly, and resist listing everything you can technically do.' },
        { h: 'Photos are ranking and conversion at once' },
        { p: 'Profiles with recent, real photos get chosen more often. Add a few every month from jobs you finish: the van, the team, the before and after. Dormant profiles look closed.' },
        { h: 'Answer every review, especially the bad one' },
        { p: 'A calm, specific reply to a one-star review sells better than the five-star ones above it, because it shows what happens when something goes wrong. Silence reads as guilt.' },
        { h: 'Match your site to your profile' },
        { p: 'Same business name, same address format, same phone number everywhere. Mismatches make Google less confident about you, and that confidence is the ranking.' },
      ],
    },
    es: {
      title: 'Tu Perfil de Google Pesa Más que Tu Página de Inicio. Trátalo Así',
      summary:
        'En oficios locales la mayoría decide dentro de Google y nunca llega a tu web. El perfil es la vitrina.',
      body: [
        { p: 'Busca "plomero cerca de mí" y mira qué llena la pantalla: un mapa, tres fichas, fotos y número de reseñas. Tu página de inicio está debajo de todo eso, y casi nadie baja.' },
        { h: 'Las categorías deciden quién te ve' },
        { p: 'La categoría principal es la palanca más fuerte del posicionamiento local. Elige la que nombra lo que realmente vendes, agrega las secundarias con honestidad y resiste la tentación de listar todo lo que técnicamente podrías hacer.' },
        { h: 'Las fotos posicionan y venden a la vez' },
        { p: 'Los perfiles con fotos reales y recientes se eligen más. Sube unas cuantas cada mes de trabajos que terminas: la camioneta, el equipo, el antes y el después. Un perfil quieto parece cerrado.' },
        { h: 'Responde toda reseña, sobre todo la mala' },
        { p: 'Una respuesta calmada y concreta a una reseña de una estrella vende más que las de cinco que están arriba, porque muestra qué pasa cuando algo sale mal. El silencio se lee como culpa.' },
        { h: 'Que tu web y tu perfil digan lo mismo' },
        { p: 'Mismo nombre, misma forma de escribir la dirección, mismo teléfono en todas partes. Las diferencias hacen que Google confíe menos en ti, y esa confianza es el posicionamiento.' },
      ],
    },
  },
  {
    slug: 'whatsapp-only-business-losing-sales',
    relatedDemo: null,
    relatedService: null,
    related: ['invisible-on-google-where-to-start', 'how-much-should-a-website-cost', 'web-con-ia-30-segundos-no-aparece-google'],
    tag: { en: 'Online store', es: 'Tienda online' },
    date: '2026-10-16',
    image: 'https://cdn.pixabay.com/photo/2018/03/23/17/10/company-3254289_640.jpg',
    imageAlt: { en: 'Hand holding smartphone with a business app', es: 'Mano sosteniendo un telefono con app empresarial' },
    en: {
      title: 'Selling Only Through WhatsApp Caps Your Business at How Fast You Type',
      summary:
        'Chat is a great way to close a sale and a terrible way to run a catalogue. The difference costs you orders every week.',
      body: [
        { p: 'WhatsApp closes sales beautifully. The problem is everything that happens before: the price list you resend twenty times a day, the stock question, the "is this still available".' },
        { h: 'You are the bottleneck' },
        { p: 'Every order waits for you to reply. Nights, Sundays and busy afternoons are sales you never see, because the buyer moved on to a seller who answered instantly with a page.' },
        { h: 'Nobody can find you' },
        { p: 'A chat conversation is invisible to search. Nothing you send in WhatsApp will ever appear in Google, so every customer has to already know you exist. A catalogue page can be found by someone who has never heard your name.' },
        { h: 'Prices drift and trust goes with them' },
        { p: 'Three versions of your price list are circulating right now and you do not know which one a customer is reading. One page, one price, updated once, ends the argument.' },
        { h: 'Keep the chat, add the storefront' },
        { p: 'This is not about replacing WhatsApp. Let the page show the catalogue, the price and the stock, and let the button hand a ready-made message to WhatsApp so you close a buyer who already decided.' },
      ],
    },
    es: {
      title: 'Vender Solo por WhatsApp Limita Tu Negocio a lo Rápido que Escribas',
      summary:
        'El chat cierra ventas muy bien y maneja un catálogo muy mal. Esa diferencia te cuesta pedidos cada semana.',
      body: [
        { p: 'WhatsApp cierra ventas de maravilla. El problema es todo lo que pasa antes: la lista de precios que reenvías veinte veces al día, la pregunta por el inventario, el "¿todavía lo tienes?".' },
        { h: 'El cuello de botella eres tú' },
        { p: 'Cada pedido espera a que tú respondas. Las noches, los domingos y las tardes ocupadas son ventas que nunca ves, porque el comprador se fue con quien le respondió de inmediato con una página.' },
        { h: 'Nadie te puede encontrar' },
        { p: 'Una conversación de chat es invisible para los buscadores. Nada de lo que mandas por WhatsApp va a aparecer en Google, así que todo cliente tiene que saber de antemano que existes. Una página de catálogo la encuentra alguien que nunca oyó tu nombre.' },
        { h: 'Los precios se desordenan y la confianza se va con ellos' },
        { p: 'Ahora mismo circulan tres versiones de tu lista de precios y no sabes cuál está leyendo el cliente. Una página, un precio, actualizado una sola vez, termina la discusión.' },
        { h: 'Quédate con el chat y suma la vitrina' },
        { p: 'Esto no es reemplazar WhatsApp. Que la página muestre el catálogo, el precio y la disponibilidad, y que el botón entregue a WhatsApp un mensaje ya escrito para que cierres a alguien que ya decidió.' },
      ],
    },
  },
  {
    slug: 'web-con-ia-30-segundos-no-aparece-google',
    relatedDemo: null,
    relatedService: null,
    related: ['inmobiliaria-web-ia-sin-leads', 'fontaneria-web-lovable-no-google', 'salon-web-wix-ai-sin-clientes'],
    tag: { en: 'AI websites', es: 'Webs con IA' },
    date: '2026-10-16',
    image: 'https://cdn.pixabay.com/photo/2018/09/27/09/22/artificial-intelligence-3706562_640.jpg',
    imageAlt: { en: 'Artificial intelligence concept with digital brain', es: 'Concepto de inteligencia artificial con cerebro digital' },
    en: {
      title: 'I Built My Website With AI in 30 Seconds and Nobody Finds It',
      summary:
        'The AI gave you a site that looks good on the preview and disappears in Google. Here is why.',
      body: [
        { p: 'You tried Lovable, V0, Durable or Wix AI. It gave you a website in less time than making coffee. Two months later, no one has visited it. The problem is not the AI. The problem is that nobody told you what a website needs beyond looking good.' },
        { h: 'The AI copies the same structure for everyone' },
        { p: 'It uses the same three sections, the same hero image styles, the same generic copy. Google sees a template it has indexed a thousand times already and has no reason to show yours instead of the next one.' },
        { h: 'There is no local SEO because the AI does not know where you work' },
        { p: 'Your website never says the name of your city, your neighbourhood, or your service area. "Website for professionals" ranks for nothing. "Plumber in Austin, Texas" is what people actually type.' },
        { h: 'Google needs more than pretty text' },
        { p: 'Meta description, structured data, a real sitemap, image alt text, internal links, a page that loads under three seconds. AI generators skip most of this because it is invisible to the person previewing the site.' },
        { h: 'Thin content gets ignored' },
        { p: 'Three paragraphs of generic marketing copy about "quality" and "trust" is thin content, even if it reads well. Google wants pages that answer a specific question in depth. Your AI-built site answers nothing in particular.' },
        { h: 'What actually works' },
        { p: 'Keep the AI site as a starting point. Then rewrite every page in the language of your real customers, add the name of your city in the headlines, publish articles about problems your customers actually have, and claim your Google Business profile. That is the week of work the AI skipped.' },
      ],
    },
    es: {
      title: 'Creé Mi Web Con IA en 30 Segundos y Nadie La Encuentra',
      summary:
        'La IA te dio una página que se ve bien en la vista previa y desaparece en Google. Esta es la razón.',
      body: [
        { p: 'Probaste Lovable, V0, Durable o Wix AI. Te armó una web en menos de lo que tardas en hacer un café. Dos meses después, nadie la ha visitado. El problema no es la IA. El problema es que nadie te dijo lo que una web necesita además de verse bonita.' },
        { h: 'La IA copia la misma estructura para todos' },
        { p: 'Usa las mismas tres secciones, los mismos estilos de imagen principal, los mismos textos genéricos. Google ve una plantilla que ya indexó mil veces y no tiene razón para mostrar la tuya en vez de la siguiente.' },
        { h: 'No hay SEO local porque la IA no sabe dónde trabajas' },
        { p: 'Tu web nunca dice el nombre de tu ciudad, tu barrio o tu zona de cobertura. "Página para profesionales" no rankea para nada. "Fontanero en Medellín" sí es lo que la gente escribe de verdad.' },
        { h: 'Google necesita más que texto bonito' },
        { p: 'Meta descripción, datos estructurados, un sitemap real, texto alternativo en imágenes, enlaces internos, una página que cargue en menos de tres segundos. Los generadores de IA se saltan casi todo esto porque es invisible para quien está mirando la vista previa.' },
        { h: 'El contenido delgado se ignora' },
        { p: 'Tres párrafos de marketing genérico sobre "calidad" y "confianza" es contenido delgado, aunque se lea bien. Google quiere páginas que respondan una pregunta específica a fondo. Tu web hecha con IA no responde nada en particular.' },
        { h: 'Lo que sí funciona' },
        { p: 'Deja la web de la IA como punto de partida. Después reescribe cada página en el idioma de tus clientes reales, mete el nombre de tu ciudad en los titulares, publica artículos sobre problemas que tus clientes sí tienen, y reclama tu ficha de Google Business. Esa es la semana de trabajo que la IA se saltó.' },
      ],
    },
  },
  {
    slug: 'web-competencia-peor-rankea-mas-alto',
    relatedDemo: null,
    relatedService: null,
    related: ['fontanero-vecino-mas-llamadas-web-fea', 'inmobiliaria-competencia-aparece-primero-google', 'google-business-profile-local-trades'],
    tag: { en: 'Local SEO', es: 'SEO local' },
    date: '2026-10-16',
    image: 'https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427_640.jpg',
    imageAlt: { en: 'Digital marketing analytics on a laptop screen', es: 'Analitica de marketing digital en pantalla' },
    en: {
      title: "Your Competitor's Website Is Worse Than Yours But Ranks Higher. Here Is Why",
      summary:
        'Their site looks like 2012. It is on the first page of Google. Yours is on page three. The reason is almost never the design.',
      body: [
        { p: 'You open Google, type your service and your city, and the agency on the corner appears first. Their site has pixelated images and a hit counter. Yours has animations, dark mode and sounds like a Silicon Valley startup. And they are three pages ahead of you.' },
        { h: 'Google does not reward pretty, it rewards presence' },
        { p: "Their site has been at the same domain for eight years. Yours has been online for four months. In Google's eyes that difference says 'this one is still here, that one might disappear next week'." },
        { h: 'They have inbound links. You do not' },
        { p: 'The local chamber of commerce links to them, two trade blogs mention them, an old customer wrote about them on their own site. Each one is a vote for Google. Design does not add votes. Being around for years and doing the work does.' },
        { h: 'Their Google Business profile is complete' },
        { p: 'Address, hours, 47 reviews with answers, photos uploaded every month. Yours is empty or does not exist. For a local business, that profile weighs more than your website.' },
        { h: 'They answer questions you do not' },
        { p: 'Their old blog has 60 posts about specific local topics ("permits in the north district", "cost of repairing a leak in brick walls"). Yours has three articles that could be about any city in the world. Google rewards topic depth, not visual polish.' },
        { h: 'What you can do in 30 days' },
        { p: 'Claim your Google Business profile, ask ten past customers for a review, write five articles about specific problems from your city, and get two local sites to link to you. In two months you move up. The design stays as is.' },
      ],
    },
    es: {
      title: 'La Web de Tu Competencia Es Peor Que la Tuya Pero Rankea Más Alto: La Razón Real',
      summary:
        'Su web parece del 2012. Está en la primera página de Google. La tuya en la tercera. La razón casi nunca es el diseño.',
      body: [
        { p: 'Abres Google, escribes tu servicio y tu ciudad, y aparece primero la agencia de la esquina. Su web tiene imágenes pixeladas y un contador de visitas. La tuya tiene animaciones, modo oscuro y suena a startup de Silicon Valley. Y ellos están tres páginas por delante.' },
        { h: 'Google no premia bonito, premia presencia' },
        { p: 'Su web lleva ocho años en el mismo dominio. La tuya lleva cuatro meses online. Esa diferencia, para Google, dice "este sigue aquí, este otro puede desaparecer la semana que viene".' },
        { h: 'Tienen enlaces de otros sitios. Tú no' },
        { p: 'La cámara de comercio local los enlaza, dos blogs del gremio los mencionan, un cliente viejo escribió sobre ellos en su propia web. Cada uno es un voto para Google. El diseño no suma votos. Llevar años y hacer el trabajo, sí.' },
        { h: 'Su ficha de Google Business está completa' },
        { p: 'Dirección, horarios, 47 reseñas con respuestas, fotos subidas cada mes. La tuya está vacía o no existe. Para un negocio local, esa ficha pesa más que tu web.' },
        { h: 'Responden preguntas que tú no' },
        { p: 'Su blog viejo tiene 60 artículos sobre temas locales específicos ("permisos de obra en el barrio norte", "cuánto cuesta arreglar una fuga en pared de ladrillo"). El tuyo tiene tres artículos que podrían ser de cualquier ciudad del mundo. Google premia profundidad de tema, no acabado visual.' },
        { h: 'Lo que puedes hacer en 30 días' },
        { p: 'Reclama tu ficha de Google Business, pide diez reseñas a clientes pasados, escribe cinco artículos sobre problemas específicos de tu ciudad y consigue que dos sitios locales te enlacen. En dos meses subes. El diseño queda igual.' },
      ],
    },
  },
  {
    slug: 'inmobiliaria-web-ia-sin-leads',
    relatedDemo: 'realestate',
    relatedService: 'real-estate-website-design',
    related: ['real-estate-website-no-leads', 'web-con-ia-30-segundos-no-aparece-google', 'inmobiliaria-competencia-aparece-primero-google'],
    tag: { en: 'Real estate', es: 'Inmobiliaria' },
    date: '2026-10-16',
    image: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_640.jpg',
    imageAlt: { en: 'Suburban house with a well-kept front lawn', es: 'Casa suburbana con jardin frontal bien cuidado' },
    en: {
      title: 'You Built Your Real Estate Website With AI and No Leads Are Coming: What No One Explained',
      summary:
        'The AI gave you a beautiful site in an afternoon. Two months later, zero enquiries. The real problem is almost never the design.',
      body: [
        { p: 'You told the AI "make me a website for my real estate agency" and it did. Modern design, big photos, rotating listings. Two months in, no one has filled out the form. Not because the site is ugly. Because it has none of what makes a buyer trust an agent.' },
        { h: 'The AI does not know your city' },
        { p: 'It writes "sell your home with us" instead of "we sell apartments in Laureles and Envigado". Buyers search by neighbourhood, not by generic phrases. If your city and neighbourhoods are not in the headlines, you do not exist for local search.' },
        { h: 'The listings live on a portal, not on your site' },
        { p: 'The AI linked you to a listings portal because it was faster. Every click takes the visitor out, and the portal gets the lead and resells it to you. Your own listings on your own domain is what captures the enquiry you paid for.' },
        { h: 'There is no reason to leave your details' },
        { p: 'A visitor sees three properties and finds no way to stay in touch. No valuation estimate, no neighbourhood market report, no "notify me of new properties". The small yes is what you are throwing away.' },
        { h: 'The form sends an email that never arrives' },
        { p: 'AI generators often connect the form to a dummy address or to nothing. Open your site, fill out the form yourself and check if the email actually arrives. In half the cases it does not, and nobody noticed until now.' },
        { h: 'The website is not the product, it is the channel' },
        { p: 'The AI built the channel. What travels through it — your market, your voice, your closed deals — is what no AI can replace. Replace the generic copy with yours, add the names of your neighbourhoods, and put the enquiry form above the fold.' },
      ],
    },
    es: {
      title: 'Hiciste la Web de Tu Inmobiliaria Con IA y No Te Llegan Leads: Lo Que Nadie Te Explicó',
      summary:
        'La IA te armó una web bonita en una tarde. Dos meses después, cero consultas. El problema real casi nunca es el diseño.',
      body: [
        { p: 'Le dijiste a la IA "hazme una web para mi inmobiliaria" y lo hizo. Diseño moderno, fotos grandes, carrusel de propiedades. Dos meses después, nadie ha llenado el formulario. No porque la web sea fea. Porque no tiene nada de lo que hace que un comprador confíe en un agente.' },
        { h: 'La IA no conoce tu ciudad' },
        { p: 'Escribe "vende tu casa con nosotros" en vez de "vendemos apartamentos en Laureles y Envigado". Los compradores buscan por barrio, no por frases genéricas. Si tu ciudad y tus barrios no están en los titulares, no existes para la búsqueda local.' },
        { h: 'Las fichas viven en un portal, no en tu web' },
        { p: 'La IA te enlazó a un portal de propiedades porque era más rápido. Cada clic saca al visitante de tu sitio, y el portal se queda con el contacto y te lo revende. Tener las fichas en tu propio dominio es lo que captura al cliente por el que ya pagaste.' },
        { h: 'No hay razón para dejar los datos' },
        { p: 'Un visitante ve tres propiedades y no encuentra forma de quedarse en contacto. No hay estimado de avalúo, ni informe de mercado del barrio, ni "avísame de nuevas propiedades". El sí pequeño es lo que estás botando.' },
        { h: 'El formulario manda un correo que nunca llega' },
        { p: 'Los generadores con IA muchas veces conectan el formulario a una dirección falsa o a nada. Abre tu web, llena tú mismo el formulario y revisa si el correo llega de verdad. En la mitad de los casos no llega, y nadie se había dado cuenta hasta ahora.' },
        { h: 'La web no es el producto, es el canal' },
        { p: 'La IA te armó el canal. Lo que pasa por él — tu mercado, tu voz, tus cierres — es lo que ninguna IA puede reemplazar. Cambia los textos genéricos por los tuyos, mete los nombres de tus barrios, y pon el formulario de consulta antes de que haya que bajar.' },
      ],
    },
  },
  {
    slug: 'fontaneria-web-lovable-no-google',
    relatedDemo: 'plumbers',
    relatedService: null,
    related: ['plumbing-website-no-calls', 'web-con-ia-30-segundos-no-aparece-google', 'fontanero-vecino-mas-llamadas-web-fea'],
    tag: { en: 'Plumbing', es: 'Plomería' },
    date: '2026-10-16',
    image: 'https://cdn.pixabay.com/photo/2015/07/11/14/53/plumbing-840835_640.jpg',
    imageAlt: { en: 'Plumbing tools and pipe wrenches on a workbench', es: 'Herramientas de fontaneria y llaves sobre un banco' },
    en: {
      title: 'Your Plumbing Website Built With Lovable Does Not Appear in Google: The Real Reason',
      summary:
        'Lovable gave you a pretty page in an hour. Google ignores it because beauty is not what gets a plumber ranked locally.',
      body: [
        { p: 'You used Lovable, V0 or any other AI builder. The site looks modern, loads smoothly and the animations work. But a month in, when someone searches "plumber in your city", you are nowhere to be seen. The AI optimised for the preview, not for the search.' },
        { h: 'Lovable optimises visual, not local SEO' },
        { p: 'These tools are made for designers and quick MVPs, not for a local plumber competing against ten others in the same city. There is no field for your service area, your licence number or your Google Business profile.' },
        { h: 'The words a buyer searches for are not there' },
        { p: 'The AI wrote "professional and quality services". Nobody searches that. People search "unclogging in the north district" or "emergency plumber Saturday night". If those exact words are not in your page, Google does not match them to you.' },
        { h: 'The phone number is text, not a tappable button' },
        { p: 'On a phone, if the number cannot be tapped, half of the people give up and go to the next result. One tap, one call. If the AI did not make the number a tel: link, you lose calls every day without knowing.' },
        { h: 'There is no emergency page' },
        { p: 'Your worst customer (and your most profitable) is the one with a flooded kitchen at 2 AM. If your site has no page saying "24-hour emergency service" with the number and your coverage area, that customer goes to whoever has it.' },
        { h: 'What you need to add on top of Lovable' },
        { p: 'Rewrite the headlines with your city and service area. Make the number a tappable button in the header. Add a specific emergency page. Claim your Google Business profile and ask for reviews. The AI gave you 30% of the work. The other 70% is what gets you ranked.' },
      ],
    },
    es: {
      title: 'Tu Web de Fontanería Hecha Con Lovable No Aparece en Google: La Razón Real',
      summary:
        'Lovable te dio una página bonita en una hora. Google la ignora porque lo bonito no es lo que posiciona a un fontanero local.',
      body: [
        { p: 'Usaste Lovable, V0 o cualquier otro constructor con IA. La web se ve moderna, carga rápido y las animaciones funcionan. Pero al mes, cuando alguien busca "fontanero en tu ciudad", no apareces por ningún lado. La IA optimizó para la vista previa, no para la búsqueda.' },
        { h: 'Lovable optimiza lo visual, no el SEO local' },
        { p: 'Estas herramientas están pensadas para diseñadores y para hacer MVPs rápidos, no para un fontanero local compitiendo contra otros diez en la misma ciudad. No hay un campo para tu zona de cobertura, ni para tu matrícula, ni para tu ficha de Google Business.' },
        { h: 'Las palabras que busca el cliente no están' },
        { p: 'La IA escribió "servicios profesionales y de calidad". Nadie busca eso. La gente busca "destapar cañería barrio norte" o "fontanero urgencia sábado noche". Si esas palabras exactas no están en tu página, Google no te relaciona con ellas.' },
        { h: 'El número de teléfono es texto, no botón' },
        { p: 'En un celular, si el número no se puede tocar, la mitad de la gente se rinde y pasa al siguiente resultado. Un toque, una llamada. Si la IA no puso el número como enlace tel:, estás perdiendo llamadas todos los días sin saberlo.' },
        { h: 'No hay página de urgencias' },
        { p: 'Tu peor cliente (y el más rentable) es el que tiene una cocina inundada a las 2 de la madrugada. Si tu web no tiene una página que diga "servicio de urgencia 24 horas" con el número y tu zona de cobertura, ese cliente se va con quien sí la tenga.' },
        { h: 'Lo que hay que agregar encima de Lovable' },
        { p: 'Reescribe los titulares con tu ciudad y zona. Pon el número como botón tocable en el encabezado. Agrega una página de urgencias específica. Reclama tu ficha de Google Business y pide reseñas. La IA te dio el 30% del trabajo. El otro 70% es lo que te posiciona.' },
      ],
    },
  },
  {
    slug: 'fontanero-vecino-mas-llamadas-web-fea',
    relatedDemo: 'plumbers',
    relatedService: null,
    related: ['plumbing-website-no-calls', 'google-business-profile-local-trades', 'web-competencia-peor-rankea-mas-alto'],
    tag: { en: 'Plumbing', es: 'Plomería' },
    date: '2026-10-16',
    image: 'https://cdn.pixabay.com/photo/2017/09/26/11/11/plumber-2788334_640.jpg',
    imageAlt: { en: 'Plumber repairing a kitchen faucet', es: 'Fontanero reparando un grifo de cocina' },
    en: {
      title: 'The Plumber Next Door Gets More Calls Than You and His Website Is Uglier: Why',
      summary:
        'His site is a one-page from 2010 with a photo of a wrench. He is booked solid. You are not. The reason is almost never the design.',
      body: [
        { p: 'You know the one. The plumber two streets over whose website looks like a project from the early 2000s. His phone rings three times an hour. Yours is quiet. You built yours with modern tools, he never updated his, and he is still winning. Here is what is actually happening.' },
        { h: 'He has been at the same number for 12 years' },
        { p: 'Every customer he ever served has his number saved. He gets referrals from referrals from referrals. You started six months ago with a new number and no history. That gap closes with time, not with a redesign.' },
        { h: 'He has 83 reviews. You have four' },
        { p: 'Google ranks local businesses by trust signals, and reviews are the strongest. Someone searching for a plumber scans the review count before clicking. "4.8 (83)" wins over "5.0 (4)" every time. He asks every customer. You do not.' },
        { h: 'His Google Business profile is more active than his website' },
        { p: 'He uploads a photo of every finished job, answers every review, posts weekly updates. For local search, that profile matters more than any website. Your beautiful website means nothing if your profile is empty.' },
        { h: 'He picks up the phone' },
        { p: 'The call that goes to voicemail is the call that goes to the next plumber. His simple trick: he always answers, or calls back within 10 minutes. Half of the local trades you compete with miss calls, and that is money sitting on the floor.' },
        { h: 'What to copy from him' },
        { p: 'Stop looking at his website. Copy the three things that actually matter: ask every customer for a Google review, update your Google Business profile weekly, and answer every call fast. Do that for three months and you will see the ranking change — your pretty website on top of all of it will convert even better.' },
      ],
    },
    es: {
      title: 'Tu Fontanero Vecino Recibe Más Llamadas Que Tú y Su Web Es Más Fea: Por Qué',
      summary:
        'Su web es una página sola del 2010 con una foto de una llave inglesa. Está lleno de trabajo. Tú no. La razón casi nunca es el diseño.',
      body: [
        { p: 'Lo conoces. El fontanero de dos cuadras más allá, cuya web parece un proyecto de los años 2000. Su teléfono suena tres veces por hora. El tuyo está callado. Tú armaste la tuya con herramientas modernas, él nunca actualizó la suya, y sigue ganando. Esto es lo que pasa de verdad.' },
        { h: 'Lleva 12 años con el mismo número' },
        { p: 'Cada cliente que atendió tiene su número guardado. Recibe recomendaciones de recomendaciones de recomendaciones. Tú empezaste hace seis meses con número nuevo y sin historia. Esa brecha se cierra con tiempo, no con rediseños.' },
        { h: 'Tiene 83 reseñas. Tú tienes cuatro' },
        { p: 'Google posiciona los negocios locales por señales de confianza, y las reseñas son la más fuerte. Alguien que busca un fontanero mira el número de reseñas antes de hacer clic. "4.8 (83)" le gana a "5.0 (4)" siempre. Él las pide a cada cliente. Tú no.' },
        { h: 'Su ficha de Google Business está más activa que su web' },
        { p: 'Sube foto de cada trabajo terminado, responde todas las reseñas, publica novedades cada semana. Para la búsqueda local, esa ficha importa más que cualquier web. Tu página bonita no sirve de nada si tu ficha está vacía.' },
        { h: 'Contesta el teléfono' },
        { p: 'La llamada que entra al buzón de voz es la llamada que se va al siguiente fontanero. Su truco simple: siempre contesta, o devuelve la llamada en menos de 10 minutos. La mitad de los oficios locales con los que compites pierden llamadas, y eso es plata tirada al piso.' },
        { h: 'Qué copiarle' },
        { p: 'Deja de mirar su web. Copia las tres cosas que de verdad importan: pide reseña de Google a cada cliente, actualiza tu ficha de Google Business cada semana y contesta rápido. Hazlo tres meses y vas a ver cambiar el posicionamiento — tu web bonita encima de todo eso va a convertir aún mejor.' },
      ],
    },
  },
  {
    slug: 'landscaper-website-no-contracts',
    relatedDemo: 'gardeners',
    relatedService: null,
    related: ['cleaning-company-recurring-clients', 'pool-service-website-summer-season', 'invisible-on-google-where-to-start'],
    tag: { en: 'Landscaping', es: 'Jardinería' },
    date: '2026-10-16',
    image: 'https://cdn.pixabay.com/photo/2015/08/04/09/05/deck-874459_640.jpg',
    imageAlt: { en: 'Wooden deck in a landscaped garden', es: 'Terraza de madera en un jardin paisajistico' },
    en: {
      title: 'Your Landscaping Website Gets Visits But Nobody Signs a Maintenance Contract',
      summary:
        'One-off jobs pay the bill this month. Monthly contracts pay the bill every month. Your website is only selling the first kind.',
      body: [
        { p: "A landscaping business lives on recurring contracts, not on one-off jobs. The one-off is cash this week. The contract is cash every month for two years. If your website is only selling 'come and mow my lawn this Saturday', you are leaving the real business on the table." },
        { h: 'Your site reads as "one-time job"' },
        { p: 'Call-to-action says "request a quote". Nothing says "monthly maintenance plan from $X". The visitor sees a handyman, not a service provider they can rely on all year. Give the contract its own page and its own price.' },
        { h: 'No visible price range on recurring plans' },
        { p: "A homeowner who hesitates about a contract wants to know if it fits their budget before writing. 'Monthly plans from $120' on the first screen filters out tourists and brings in real buyers. Hiding the price does not raise it, it loses the lead." },
        { h: 'No portfolio of properties you maintain year-round' },
        { p: 'Three before-and-after photos of a one-day job do not sell a contract. What sells a contract is a gallery of properties you have been maintaining for two or three years, with the owner saying how it has gone.' },
        { h: 'No seasonal booking calendar' },
        { p: "Spring and autumn are when homeowners decide. If your site has no visible 'book your spring cleanup' or 'autumn leaf collection' section at the right time of year, they book the first landscaper who did." },
        { h: 'The trust decision takes longer than one visit' },
        { p: "Signing a mowing contract is signing someone a key to come onto your property every two weeks. That is a trust decision, not a price decision. Reviews, named properties, years in business, insurance — put all of that above the fold. If it is below, nobody scrolls that far." },
      ],
    },
    es: {
      title: 'Tu Web de Jardinería Recibe Visitas Pero Nadie Firma un Contrato de Mantenimiento',
      summary:
        'Los trabajos sueltos pagan el mes. Los contratos mensuales pagan todos los meses. Tu web solo está vendiendo lo primero.',
      body: [
        { p: 'Un negocio de jardinería vive de contratos recurrentes, no de trabajos sueltos. El trabajo suelto es la plata de esta semana. El contrato es la plata de todos los meses durante dos años. Si tu web solo está vendiendo "ven a cortar el pasto este sábado", estás dejando el negocio real sobre la mesa.' },
        { h: 'Tu web se lee como "trabajo de un día"' },
        { p: 'El botón dice "pide una cotización". Nada dice "plan de mantenimiento mensual desde $X". El visitante ve un todoterreno, no un proveedor en quien pueda apoyarse todo el año. Dale al contrato su propia página y su propio precio.' },
        { h: 'No hay rango de precio visible para los planes recurrentes' },
        { p: 'Un dueño que duda de un contrato quiere saber si entra en su presupuesto antes de escribir. "Planes mensuales desde $120" en la primera pantalla filtra a los curiosos y trae a los compradores reales. Esconder el precio no lo sube, pierde el lead.' },
        { h: 'No hay portafolio de propiedades que mantengas todo el año' },
        { p: 'Tres fotos de antes y después de un trabajo de un día no venden un contrato. Lo que vende un contrato es una galería de propiedades que llevas manteniendo dos o tres años, con el dueño contando cómo ha ido.' },
        { h: 'No hay calendario de reservas por temporada' },
        { p: 'La primavera y el otoño son cuando los dueños deciden. Si tu web no tiene una sección visible de "reserva tu limpieza de primavera" o "recogida de hojas de otoño" en el momento del año, se van con el primer jardinero que sí la tuvo.' },
        { h: 'La decisión de confianza toma más de una visita' },
        { p: 'Firmar un contrato de jardinería es darle a alguien la llave para entrar a tu propiedad cada 15 días. Esa es una decisión de confianza, no de precio. Reseñas, propiedades con nombre, años trabajando, seguro — todo eso tiene que estar arriba. Si está abajo, nadie baja hasta allá.' },
      ],
    },
  },
  {
    slug: 'pool-service-website-summer-season',
    relatedDemo: null,
    relatedService: null,
    related: ['landscaper-website-no-contracts', 'invisible-on-google-where-to-start', 'google-business-profile-local-trades'],
    tag: { en: 'Pool service', es: 'Mantenimiento de piscinas' },
    date: '2026-10-16',
    image: 'https://cdn.pixabay.com/photo/2014/04/23/10/09/pool-cleaning-330399_640.jpg',
    imageAlt: { en: 'Pool cleaning equipment in a swimming pool', es: 'Equipo de limpieza en una piscina' },
    en: {
      title: 'Your Pool Service Website Needs to Be Ready in May or You Lose the Season',
      summary:
        'Pool owners search in waves. If your site is not optimised before the first hot weekend, your competitor takes the whole summer.',
      body: [
        { p: "Pool service is one of the most seasonal trades. Searches for 'pool cleaning near me' spike in May and die in September. If your website is not ready by April, you miss the whole buying window and the next one does not open until next year." },
        { h: 'The search traffic is concentrated in four months' },
        { p: "Google Trends shows the same pattern every year: a vertical rise in May, a peak in July, a decline in August. You cannot catch up in July — ranking takes weeks. Everything you want to show in summer has to be published and indexed by March." },
        { h: 'The one keyword that matters' },
        { p: "'Pool cleaning near me' or 'pool cleaner [city name]' is 80% of what people type. Your headlines need to say exactly that. Not 'aquatic maintenance services' — those words are not what anyone searches for." },
        { h: 'The green pool emergency' },
        { p: "Your most profitable customer is the one who opens the cover in May to find a green swamp. They need help this weekend, not next month. A specific 'green pool restoration' page with the before-and-after photos and a price range captures that panic buyer." },
        { h: 'The seasonal contract converts best in April' },
        { p: 'Nobody signs a six-month pool maintenance contract in August. By then the summer is almost over. Push the recurring plan hard between March and May, when the owner is just remembering they have a pool.' },
        { h: 'Do the SEO work in March, not July' },
        { p: 'Articles, Google Business photos, review requests, service area pages — all of this takes 6 to 12 weeks to show up in rankings. If you start in July you are optimising for next summer. Start in February and you catch this one.' },
      ],
    },
    es: {
      title: 'Tu Web de Mantenimiento de Piscinas Tiene Que Estar Lista en Mayo o Pierdes la Temporada',
      summary:
        'Los dueños de piscinas buscan en oleadas. Si tu web no está optimizada antes del primer fin de semana caluroso, la competencia se lleva todo el verano.',
      body: [
        { p: 'El servicio de piscinas es uno de los oficios más estacionales. Las búsquedas de "limpieza de piscina cerca de mí" se disparan en mayo y mueren en septiembre. Si tu web no está lista en abril, pierdes toda la ventana de compra y la siguiente no se abre hasta el próximo año.' },
        { h: 'El tráfico de búsqueda se concentra en cuatro meses' },
        { p: 'Google Trends muestra el mismo patrón cada año: subida vertical en mayo, pico en julio, caída en agosto. En julio ya no alcanzas — posicionar toma semanas. Todo lo que quieras mostrar en verano tiene que estar publicado e indexado en marzo.' },
        { h: 'La única palabra clave que importa' },
        { p: '"Limpieza de piscina cerca de mí" o "mantenimiento piscinas [ciudad]" es el 80% de lo que la gente escribe. Tus titulares tienen que decir exactamente eso. No "servicios acuáticos de mantenimiento" — esas palabras no las busca nadie.' },
        { h: 'La urgencia de la piscina verde' },
        { p: 'Tu cliente más rentable es el que abre la cubierta en mayo y encuentra un pantano verde. Necesita ayuda este fin de semana, no el próximo mes. Una página específica de "recuperación de piscina verde" con fotos de antes y después y un rango de precio captura a ese comprador en pánico.' },
        { h: 'El contrato de temporada convierte mejor en abril' },
        { p: 'Nadie firma un contrato de mantenimiento de seis meses en agosto. Para entonces el verano ya se acaba. Empuja el plan recurrente fuerte entre marzo y mayo, cuando el dueño recién se está acordando de que tiene piscina.' },
        { h: 'Haz el trabajo de SEO en marzo, no en julio' },
        { p: 'Artículos, fotos en Google Business, pedir reseñas, páginas de zona de cobertura — todo esto toma de 6 a 12 semanas en aparecer en los rankings. Si empiezas en julio estás optimizando para el próximo verano. Empieza en febrero y agarras este.' },
      ],
    },
  },
  {
    slug: 'web-dos-anos-sin-mantenimiento-google-olvida',
    relatedDemo: null,
    relatedService: null,
    related: ['invisible-on-google-where-to-start', 'how-much-should-a-website-cost', 'web-competencia-peor-rankea-mas-alto'],
    tag: { en: 'Website maintenance', es: 'Mantenimiento web' },
    date: '2026-10-16',
    image: 'https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_640.jpg',
    imageAlt: { en: 'Laptop on a startup desk with notes and coffee', es: 'Portatil en un escritorio con notas y cafe' },
    en: {
      title: 'What Happens to a Website After Two Years Without Maintenance (and Why Google Forgets It)',
      summary:
        'A website is a living thing, not a sign on a wall. If it does not move, Google assumes nobody is home.',
      body: [
        { p: "Your website went live two years ago. It looked great. You never touched it again. Today you type your name into Google and you have fallen off the first page without noticing. Nothing broke. Nothing was hacked. Google just decided your site is probably not updated anymore and stopped promoting it." },
        { h: 'Google measures activity, not age' },
        { p: "A domain can be ten years old and still rank well, as long as something changes on it. New articles, updated pages, reviews answered. A site that has not moved in two years looks dead to the crawler — and the crawler starts coming back less often, until it almost stops." },
        { h: 'Your plugins and libraries have expired' },
        { p: "Every framework, every WordPress plugin, every library has security updates every few months. Two years without touching them means your site has a dozen known vulnerabilities. Google now penalises sites it considers insecure, and some visitors see a warning page." },
        { h: 'Broken links pile up' },
        { p: "Pages you linked to no longer exist. Services you mentioned closed. Images uploaded to an old service give a 404. Every broken link is a bad signal. Nobody checks these one by one after launch, and they accumulate silently." },
        { h: 'Content loses relevance' },
        { p: "Your prices from two years ago are no longer your prices. The team page shows someone who left. A buyer who notices one wrong detail stops trusting the rest. Even an abandoned site needs its facts kept current, or it damages you more than it helps you." },
        { h: 'A website is a living thing' },
        { p: 'The fix is not another redesign. A monthly check — one article, one update, one page revised — is enough to keep Google watching. A quiet site goes to page three without you noticing. An active one, even if plain, stays on page one.' },
      ],
    },
    es: {
      title: 'Qué Le Pasa a Una Web Que Lleva Dos Años Sin Mantenimiento (y Por Qué Google La Olvida)',
      summary:
        'Una web es algo vivo, no un cartel en la pared. Si no se mueve, Google asume que no hay nadie en casa.',
      body: [
        { p: 'Tu web se publicó hace dos años. Se veía bien. No la volviste a tocar. Hoy escribes tu nombre en Google y te caíste de la primera página sin darte cuenta. Nada se rompió. Nadie te hackeó. Google simplemente decidió que tu web probablemente ya no se actualiza y dejó de promoverla.' },
        { h: 'Google mide actividad, no edad' },
        { p: 'Un dominio puede tener diez años y seguir posicionando bien, siempre que algo cambie en él. Artículos nuevos, páginas actualizadas, reseñas respondidas. Un sitio que lleva dos años sin moverse parece muerto para el rastreador — y el rastreador empieza a volver menos, hasta casi no volver.' },
        { h: 'Tus plugins y librerías ya caducaron' },
        { p: 'Cada framework, cada plugin de WordPress, cada librería tiene actualizaciones de seguridad cada pocos meses. Dos años sin tocarlos significa que tu web tiene una docena de vulnerabilidades conocidas. Google ahora penaliza los sitios que considera inseguros, y algunos visitantes ven una página de advertencia.' },
        { h: 'Los enlaces rotos se acumulan' },
        { p: 'Páginas que enlazabas ya no existen. Servicios que mencionabas cerraron. Imágenes subidas a un servicio viejo dan 404. Cada enlace roto es una mala señal. Nadie revisa esto uno por uno después del lanzamiento, y se acumulan en silencio.' },
        { h: 'El contenido pierde relevancia' },
        { p: 'Tus precios de hace dos años ya no son tus precios. La página del equipo muestra a alguien que se fue. Un comprador que detecta un dato mal deja de confiar en el resto. Incluso una web abandonada necesita sus datos al día, o te hace más daño del que te ayuda.' },
        { h: 'Una web es algo vivo' },
        { p: 'La solución no es otro rediseño. Un chequeo mensual — un artículo, una actualización, una página revisada — basta para que Google siga mirando. Un sitio quieto se va a la tercera página sin que te enteres. Uno activo, aunque simple, se queda en la primera.' },
      ],
    },
  },
  {
    slug: 'salon-web-wix-ai-sin-clientes',
    relatedDemo: 'salonBelleza',
    relatedService: null,
    related: ['salon-online-booking-empty-chair', 'web-con-ia-30-segundos-no-aparece-google', 'invisible-on-google-where-to-start'],
    tag: { en: 'Salon', es: 'Salón de belleza' },
    date: '2026-10-16',
    image: 'https://cdn.pixabay.com/photo/2016/03/27/21/52/woman-1284411_640.jpg',
    imageAlt: { en: 'Woman getting a hair treatment in a salon', es: 'Mujer recibiendo un tratamiento capilar en un salon' },
    en: {
      title: 'Your Salon Website Built With Wix AI Is Not Bringing in Clients: Why',
      summary:
        'A salon sells trust and availability. Wix AI gives you a pretty page that offers neither.',
      body: [
        { p: 'Wix AI gave you a salon website in minutes. Soft colours, elegant fonts, a landing page that looks like every other salon. The chairs are still empty on Wednesday afternoons. The problem is not the design. A salon sells two things the AI did not include: trust and availability.' },
        { h: 'No online booking' },
        { p: 'A client in 2026 who cannot book from a phone at 11 PM books somewhere else. Wix AI did not integrate a real booking system, just a contact form that someone has to answer tomorrow. Install a real booking widget (Fresha, Vagaro, Treatwell) above the fold.' },
        { h: 'You are not on Google as a salon in your area' },
        { p: "The AI did not know your city. Your headlines say 'beauty services' instead of 'hair salon in [neighbourhood, city]'. A client searching 'hair colour near me' finds every competitor and does not find you. Rewrite the headlines with the exact phrases people search for." },
        { h: 'No real photos of your work' },
        { p: 'The AI used stock photos of models. A client wants to see what you have actually done on a real head of hair, with the real lighting of your salon. Six real before-and-after photos convert ten times better than the perfect AI image.' },
        { h: 'No reviews visible' },
        { p: "Nothing on the page shows what past clients say about you. For a salon, that is the first thing a new client checks. A block with your Google reviews pulled in automatically turns a doubt into a booking. 'Four stars across 180 reviews' sells itself." },
        { h: 'What a salon site actually has to do' },
        { p: 'Let someone book in two taps. Show the work of your stylists. Make it obvious which neighbourhood you are in and which services you specialise in. Everything else — including the pretty design from Wix AI — is secondary.' },
      ],
    },
    es: {
      title: 'Tu Web de Salón Hecha Con Wix AI No Te Trae Clientes: Por Qué',
      summary:
        'Un salón vende confianza y disponibilidad. Wix AI te da una página bonita que no ofrece ninguna de las dos.',
      body: [
        { p: 'Wix AI te armó una web de salón en minutos. Colores suaves, tipografías elegantes, una página de inicio que parece la de cualquier otro salón. Las sillas siguen vacías el miércoles por la tarde. El problema no es el diseño. Un salón vende dos cosas que la IA no incluyó: confianza y disponibilidad.' },
        { h: 'No tiene reservas online' },
        { p: 'Un cliente en 2026 que no puede reservar desde el celular a las 11 de la noche reserva en otro lado. Wix AI no integró un sistema de reservas real, solo un formulario de contacto que alguien tiene que responder mañana. Instala un widget de reservas real (Fresha, Vagaro, Treatwell) arriba del todo.' },
        { h: 'No apareces en Google como salón de tu zona' },
        { p: 'La IA no sabía tu ciudad. Tus titulares dicen "servicios de belleza" en vez de "peluquería en [barrio, ciudad]". Un cliente que busca "coloración cerca de mí" encuentra a toda la competencia y no te encuentra a ti. Reescribe los titulares con las frases exactas que la gente busca.' },
        { h: 'No hay fotos reales de tu trabajo' },
        { p: 'La IA usó fotos de banco de modelos. Un cliente quiere ver lo que de verdad hiciste sobre un pelo real, con la luz real de tu salón. Seis fotos reales de antes y después convierten diez veces mejor que la imagen perfecta de la IA.' },
        { h: 'No hay opiniones visibles' },
        { p: 'Nada en la página muestra lo que dicen los clientes pasados. Para un salón, es lo primero que un nuevo cliente mira. Un bloque con tus reseñas de Google traídas automáticamente convierte una duda en una reserva. "Cuatro estrellas sobre 180 reseñas" se vende solo.' },
        { h: 'Lo que una web de salón sí tiene que hacer' },
        { p: 'Dejar reservar en dos toques. Mostrar el trabajo de tus estilistas. Dejar claro en qué barrio estás y en qué servicios te especializas. Todo lo demás — incluyendo el diseño bonito de Wix AI — es secundario.' },
      ],
    },
  },
  {
    slug: 'inmobiliaria-competencia-aparece-primero-google',
    relatedDemo: 'realestate',
    relatedService: 'real-estate-website-design',
    related: ['real-estate-website-no-leads', 'inmobiliaria-web-ia-sin-leads', 'web-competencia-peor-rankea-mas-alto'],
    tag: { en: 'Real estate', es: 'Inmobiliaria' },
    date: '2026-10-16',
    image: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_640.jpg',
    imageAlt: { en: 'Modern house with garage viewed from the street', es: 'Casa moderna con garaje vista desde la calle' },
    en: {
      title: 'Why Your Competing Real Estate Agency Appears Before You in Google',
      summary:
        'Search your neighbourhood by name. The agency on the corner shows up first. You do not even make page one. The reason is almost never the design.',
      body: [
        { p: 'You type the name of your neighbourhood plus "apartments for sale" into Google. The agency on the corner is first. The next three results are also them, on different pages. You are on page three, under the name of your own agency. This happens for one reason and it is not the quality of your website.' },
        { h: 'They have been on the same domain for years' },
        { p: 'A domain accumulates authority. Eight years with the same URL and consistent content weighs more than any launch. If you just migrated or changed names, you reset part of that history. Patience plus continuity closes the gap, not a redesign.' },
        { h: 'Each listing has its own page with real text' },
        { p: 'Their listings are not iframes from a portal. Each one has a URL, a paragraph of description written for that property, local photos, and context about the neighbourhood. 400 listings = 400 pages that rank for 400 specific searches. Yours is one page that links to a portal.' },
        { h: 'They have a verified Google Business profile' },
        { p: 'With their address, hours, 120 reviews, photos of closed deals and real estate news posted every two weeks. For local real estate search, that profile matters as much as the website. Yours is empty or has no reviews.' },
        { h: 'Other sites cite them' },
        { p: 'The local newspaper quoted them twice last year, two architecture blogs link to their listings, the chamber of commerce mentions them. Every link is a vote. You have no votes because nobody has mentioned you yet. That is earned, not bought.' },
        { h: 'What you can start today' },
        { p: 'Claim and complete your Google Business profile this week. Publish each new listing as its own page on your own domain with its own description. Ask every closed client for a Google review. In three to six months you move up — your more modern website on top of all of this will convert even better than theirs.' },
      ],
    },
    es: {
      title: 'Por Qué la Web de Tu Competencia Inmobiliaria Aparece Antes Que la Tuya en Google',
      summary:
        'Buscas tu barrio por nombre. La agencia de la esquina aparece primero. Tú ni siquiera estás en la primera página. La razón casi nunca es el diseño.',
      body: [
        { p: 'Escribes el nombre de tu barrio más "apartamentos en venta" en Google. La agencia de la esquina está primera. Los siguientes tres resultados también son de ellos, en diferentes páginas. Tú estás en la tercera página, debajo del nombre de tu propia agencia. Esto pasa por una razón y no es la calidad de tu web.' },
        { h: 'Llevan años en el mismo dominio' },
        { p: 'Un dominio acumula autoridad. Ocho años con la misma URL y contenido constante pesan más que cualquier lanzamiento. Si acabas de migrar o cambiaste de nombre, reseteaste parte de esa historia. La paciencia y la continuidad cierran la brecha, no un rediseño.' },
        { h: 'Cada ficha de propiedad es una página propia con texto real' },
        { p: 'Sus propiedades no son iframes de un portal. Cada una tiene URL, un párrafo de descripción escrito para esa propiedad, fotos propias y contexto del barrio. 400 propiedades = 400 páginas que posicionan para 400 búsquedas específicas. La tuya es una página que enlaza a un portal.' },
        { h: 'Tienen ficha de Google Business verificada' },
        { p: 'Con dirección, horarios, 120 reseñas, fotos de cierres y novedades inmobiliarias publicadas cada dos semanas. Para la búsqueda inmobiliaria local, esa ficha importa tanto como la web. La tuya está vacía o sin reseñas.' },
        { h: 'Otros sitios los citan' },
        { p: 'El periódico local los nombró dos veces el año pasado, dos blogs de arquitectura enlazan sus fichas, la cámara de comercio los menciona. Cada enlace es un voto. Tú no tienes votos porque nadie te ha mencionado todavía. Eso se gana, no se compra.' },
        { h: 'Lo que puedes empezar hoy' },
        { p: 'Reclama y completa tu ficha de Google Business esta semana. Publica cada nueva propiedad como una página propia en tu dominio con descripción propia. Pide reseña de Google a cada cliente cerrado. En tres a seis meses subes — tu web más moderna encima de todo eso va a convertir aún mejor que la de ellos.' },
      ],
    },
  },
]

/**
 * Elige artículos relacionados a `article`. Prioridad:
 *   1. Mismo `tag` (mismo nicho) — es lo que más conecta semánticamente.
 *   2. Slugs listados en `related` (manual) — para enlaces cruzados específicos.
 *   3. Cualquier otro, de forma determinista por slug.
 *
 * Se usa en la página de un artículo. Nunca incluye al propio artículo.
 */
export function pickRelated(article, count = 3) {
  if (!article) return []
  const seen = new Set([article.slug])
  const out = []

  // 1. Mismo tag (tag.en como clave canónica).
  const tag = article.tag.en
  for (const a of articles) {
    if (seen.has(a.slug)) continue
    if (a.tag.en === tag) {
      out.push(a)
      seen.add(a.slug)
      if (out.length >= count) return out
    }
  }

  // 2. `related` explícito.
  for (const slug of article.related || []) {
    if (seen.has(slug)) continue
    const a = articles.find((x) => x.slug === slug)
    if (!a) continue
    out.push(a)
    seen.add(a.slug)
    if (out.length >= count) return out
  }

  // 3. Resto, determinista a partir del slug del artículo actual.
  const rest = pickArticles(`related:${article.slug}`, articles.length)
  for (const a of rest) {
    if (seen.has(a.slug)) continue
    out.push(a)
    seen.add(a.slug)
    if (out.length >= count) return out
  }

  return out
}

/**
 * Elige `count` artículos de forma DETERMINISTA a partir de la ruta: la misma
 * página siempre muestra el mismo trío (así queda estable en el HTML
 * prerenderizado y Google indexa lo mismo que ve el visitante), pero páginas
 * distintas muestran tríos distintos.
 */
export function pickArticles(pathname, count = 3) {
  if (!articles.length) return []
  // Mezcla determinista sembrada con la ruta: la misma página siempre muestra
  // el mismo trío (el HTML prerenderizado y lo que ve el visitante coinciden,
  // que es lo que Google necesita), y páginas distintas muestran tríos
  // distintos. Con 12 artículos hay 220 combinaciones posibles de 3.
  const pool = articles.slice()
  const rand = mulberry32(hashPath(pathname))
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1))
    const tmp = pool[i]
    pool[i] = pool[j]
    pool[j] = tmp
  }
  return pool.slice(0, Math.min(count, pool.length))
}

// FNV-1a de 32 bits con mezcla final: cambios mínimos en la ruta dan
// resultados muy distintos.
function hashPath(pathname) {
  let h = 0x811c9dc5
  for (let i = 0; i < pathname.length; i += 1) {
    h ^= pathname.charCodeAt(i)
    h = Math.imul(h, 0x01000193)
  }
  h ^= h >>> 15
  h = Math.imul(h, 0x2545f491)
  h ^= h >>> 13
  return h >>> 0
}

// PRNG de 32 bits sin estado global: misma semilla, misma secuencia, en el
// navegador y en el prerender.
function mulberry32(seed) {
  let a = seed >>> 0
  return function next() {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
