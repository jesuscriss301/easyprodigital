import { PRODUCT } from './content.js'

// Textos propios de cada una de las 4 páginas (título SEO, introducción,
// respuesta corta, miga de pan). El resto del contenido vive en content.js.
export const PAGE_COPY = {
  es: {
    nav: { home: 'Inicio', how: 'Cómo funciona', panel: 'Panel', pricing: 'Precio' },
    home: {
      seo: {
        title: 'Uchuva: asistente de WhatsApp que responde y toma pedidos',
        description: 'Asistente de WhatsApp para tu negocio: responde 24/7, toma pedidos que tú apruebas y te avisa cuando un cliente necesita a una persona. Beta abierta.',
      },
      answer: {
        q: '¿Qué es Uchuva?',
        a: 'Uchuva es un asistente de WhatsApp para negocios que venden productos con precio fijo, como restaurantes, panaderías y tiendas. Responde a tus clientes las 24 horas con la información que tú le enseñas, arma los pedidos para que tú los apruebes desde el celular y te pasa el chat cuando un cliente necesita una persona. Lo desarrolla EasyPro Digital en Medellín, Colombia.',
      },
      explore: {
        eyebrow: 'Conoce Uchuva',
        title: 'Todo lo que necesitas saber, en tres páginas',
        items: [
          { page: 'how', t: 'Cómo funciona', d: 'Qué hace el asistente en cada conversación, cómo lo instalamos contigo y cómo cuida tu negocio.' },
          { page: 'panel', t: 'El panel', d: 'Pedidos, chats, catálogo, tiquetes impresos y alertas, desde el celular o el computador.' },
          { page: 'pricing', t: 'Precio y fundadores', d: 'El precio de lanzamiento, cuántos cupos quedan, lo que viene y las preguntas frecuentes.' },
        ],
        more: 'Ver más',
      },
      strip: { cta: 'Ver precio y condiciones' },
    },
    how: {
      seo: {
        title: 'Cómo funciona Uchuva: asistente de WhatsApp para tu negocio',
        description: 'Qué hace el asistente en cada chat, cómo lo instalamos contigo en 7 pasos y cómo cuida tu negocio. No responde a un solo cliente hasta que tú lo actives.',
      },
      crumb: 'Cómo funciona',
      eyebrow: 'Cómo funciona',
      h1: 'Un asistente que atiende tu WhatsApp y te llama solo cuando hace falta',
      lead: 'Uchuva se conecta a tu mismo número por la vía oficial de Meta. Responde con lo que tú le enseñaste, arma los pedidos para que tú los apruebes y, si no sabe algo o el cliente pide una persona, te pasa la conversación.',
    },
    panel: {
      seo: {
        title: 'Panel de Uchuva: pedidos, chats y tiquetes desde el celular',
        description: 'Panel de Uchuva: aprueba pedidos, atiende chats, maneja tu catálogo e imprime tiquetes de 58 u 80 mm, desde el celular o el computador.',
      },
      crumb: 'Panel',
      eyebrow: 'El panel',
      h1: 'Todo tu WhatsApp en un panel que cabe en el bolsillo',
      lead: 'El panel es una web que funciona en el celular o el computador, sin instalar nada. Desde ahí apruebas pedidos, tomas cualquier chat, cambias el catálogo y ves cuánto vendiste.',
    },
    pricing: {
      seo: {
        title: 'Precio de Uchuva: cupos de fundador y preguntas frecuentes',
        description: (total, left) => `Precio de lanzamiento de Uchuva para los primeros ${total} negocios: instalación más mensualidad en pesos colombianos. Quedan ${left} cupos de fundador.`,
      },
      crumb: 'Precio',
      eyebrow: 'Precio y fundadores',
      h1: 'Precio de Uchuva y programa de fundadores',
      lead: (total) => `Pagas una instalación con la puesta en marcha completa y luego una mensualidad. Los primeros ${total} negocios entran con el precio de lanzamiento, tienen soporte directo y votan las próximas funciones.`,
    },
    ui: { learn: 'Quiero mi cupo', whatsapp: 'Escríbenos por WhatsApp', answerLabel: 'Respuesta corta', stripTitle: 'Cupos de fundador' },
  },
  en: {
    nav: { home: 'Home', how: 'How it works', panel: 'Panel', pricing: 'Pricing' },
    home: {
      seo: {
        title: 'Uchuva: WhatsApp assistant that replies and takes orders',
        description: 'WhatsApp assistant for your business: replies 24/7, takes orders you approve, and alerts you when a customer needs a person. Open beta.',
      },
      answer: {
        q: 'What is Uchuva?',
        a: "Uchuva is a WhatsApp assistant for businesses that sell fixed-price products, such as restaurants, bakeries, and shops. It answers your customers 24 hours a day using the information you teach it, builds orders for you to approve from your phone, and hands the chat over to you when a customer needs a person. It is developed by EasyPro Digital in Medellín, Colombia.",
      },
      explore: {
        eyebrow: 'Get to know Uchuva',
        title: 'Everything you need to know, in three pages',
        items: [
          { page: 'how', t: 'How it works', d: 'What the assistant does in each conversation, how we set it up with you, and how it looks after your business.' },
          { page: 'panel', t: 'The panel', d: 'Orders, chats, catalog, printed tickets, and alerts, from your phone or computer.' },
          { page: 'pricing', t: 'Pricing and founders', d: 'The launch price, how many spots are left, what is coming next, and frequently asked questions.' },
        ],
        more: 'Learn more',
      },
      strip: { cta: 'See pricing and terms' },
    },
    how: {
      seo: {
        title: 'How Uchuva works: the WhatsApp assistant for your business',
        description: 'What the assistant does in each chat, how we set it up with you in 7 steps, and how it looks after your business. It answers no customer until you turn it on.',
      },
      crumb: 'How it works',
      eyebrow: 'How it works',
      h1: 'An assistant that handles your WhatsApp and calls you only when needed',
      lead: 'Uchuva connects to your own number through the official Meta route. It answers with what you taught it, builds orders for you to approve, and if it does not know something or the customer asks for a person, it hands the conversation to you.',
    },
    panel: {
      seo: {
        title: 'The Uchuva panel: orders, chats and tickets from your phone',
        description: 'Meet the Uchuva panel: approve orders, handle chats, manage your catalog, print 58 or 80 mm tickets, and get alerts, from your phone or computer.',
      },
      crumb: 'Panel',
      eyebrow: 'The panel',
      h1: 'All your WhatsApp in a panel that fits in your pocket',
      lead: 'The panel is a web app that works on your phone or computer, with nothing to install. From there you approve orders, take over any chat, update your catalog, and see how much you sold.',
    },
    pricing: {
      seo: {
        title: 'Uchuva pricing: founder spots and frequently asked questions',
        description: (total, left) => `Uchuva launch price for the first ${total} businesses: setup plus a monthly fee, in Colombian pesos. ${left} founder spots left.`,
      },
      crumb: 'Pricing',
      eyebrow: 'Pricing and founders',
      h1: 'Uchuva pricing and the founders program',
      lead: (total) => `You pay a setup fee that covers the full onboarding, then a monthly fee. The first ${total} businesses get the launch price, direct support, and a vote on the next features.`,
    },
    ui: { learn: 'Get my spot', whatsapp: 'Message us on WhatsApp', answerLabel: 'Short answer', stripTitle: 'Founder spots' },
  },
}
