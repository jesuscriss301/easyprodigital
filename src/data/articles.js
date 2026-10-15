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
    tag: { en: 'Real estate', es: 'Inmobiliaria' },
    date: '2026-10-16',
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
    tag: { en: 'Real estate', es: 'Inmobiliaria' },
    date: '2026-10-16',
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
    tag: { en: 'Plumbing', es: 'Plomería' },
    date: '2026-10-16',
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
    tag: { en: 'Home services', es: 'Servicios a domicilio' },
    date: '2026-10-16',
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
    tag: { en: 'Pricing', es: 'Precios' },
    date: '2026-10-16',
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
    tag: { en: 'SEO', es: 'SEO' },
    date: '2026-10-16',
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
    tag: { en: 'Electricians', es: 'Electricistas' },
    date: '2026-10-16',
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
    tag: { en: 'Auto repair', es: 'Mecánica' },
    date: '2026-10-16',
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
    tag: { en: 'Cleaning', es: 'Limpieza' },
    date: '2026-10-16',
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
    tag: { en: 'Salons', es: 'Belleza' },
    date: '2026-10-16',
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
    tag: { en: 'Local SEO', es: 'SEO local' },
    date: '2026-10-16',
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
    tag: { en: 'Online store', es: 'Tienda online' },
    date: '2026-10-16',
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
]

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
