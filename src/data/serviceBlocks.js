// ============================================================
//  Textos de los bloques nuevos de las landings (EN/ES):
//   - StoreCompare: comparativa de plataformas de tienda.
//   - SupportBlock: soporte y control de errores después de entregar.
//
//  Los precios NO se escriben aquí: SupportBlock lee los planes de
//  mantenimiento directamente de pricing.js / pricing.en.js.
// ============================================================

import { pricing as pricingEs } from './pricing.js'
import { pricing as pricingEn } from './pricing.en.js'

export const serviceBlocks = {
  en: {
    storeCompare: {
      title: 'Which kind of online store fits you?',
      caption:
        'Online store comparison between a custom store built with Bagisto, WooCommerce and Shopify.',
      criteriaLabel: 'Criteria',
      platforms: ['Custom store (Bagisto)', 'WooCommerce', 'Shopify'],
      rows: [
        {
          label: 'Platform cost',
          values: [
            'No platform subscription: it’s open source; you pay for development and hosting.',
            'The plugin is free; you pay for hosting, theme and extensions.',
            'Monthly fee: Basic plan 39 USD/month (29 USD/month if you pay for a year).',
          ],
        },
        {
          label: 'Sales commission',
          values: [
            'None from the platform, only your payment gateway’s fee.',
            'None from the platform, only your payment gateway’s fee.',
            'If you don’t use Shopify Payments, add 2% per sale on Basic on top of your gateway (in Colombia, an external gateway is the norm).',
          ],
        },
        {
          label: 'Colombian payments (PSE, Wompi, ePayco, PayU, Nequi)',
          values: [
            'Integrated to fit your setup.',
            'Through plugins.',
            'Through third-party apps.',
          ],
        },
        {
          label: 'Control and ownership',
          values: [
            'The code and the data are yours, on your server.',
            'Yours, on your hosting.',
            'The store lives on Shopify; if you stop paying, it goes offline.',
          ],
        },
        {
          label: 'Point of sale (selling in-store)',
          values: [
            'Built-in POS with the same inventory.',
            'Through extensions.',
            'Shopify POS (extra cost depending on your plan).',
          ],
        },
        {
          label: 'When it makes sense',
          values: [
            'Large catalogs, several vendors, a store plus a physical shop, or zero monthly fees.',
            'You already run WordPress or want something simple and cheap to maintain.',
            'You want to start today with no server and you accept the monthly fee.',
          ],
        },
      ],
      note: 'Shopify prices checked in November 2026; they may change.',
      honest: 'I work with all three and I’ll tell you honestly which one fits you.',
      whatsappLabel: 'Message me on WhatsApp',
      whatsappText: 'Hi Jesús, I want an online store and I’m not sure which one fits me.',
    },
    support: {
      title: 'Support and error handling after launch',
      intro:
        'I don’t leave you alone after launch; if something breaks, you talk directly to the person who built it.',
      points: [
        {
          title: 'Automatic backups',
          text: 'If something breaks, the last good version is restored.',
        },
        {
          title: 'Security updates',
          text: 'Plugins, libraries and the server kept up to date.',
        },
        {
          title: 'Reply in minutes, fixed in under 24 hours',
          text: 'You report it on WhatsApp with a screenshot. I reply within minutes, find the cause, fix it in under 24 hours and tell you what happened.',
        },
        {
          title: 'Improvement hours every month',
          text: 'Text changes, new sections, adjustments.',
        },
      ],
      plansLink: 'See all pricing',
      infra: {
        title: 'Support after installation',
        intro:
          'I don’t leave you alone after installation; if something fails, you talk directly to the person who set it up.',
        points: [
          {
            title: 'Backups configured',
            text: 'Your documents and systems are backed up automatically.',
          },
          {
            title: 'Server and assistant updates',
            text: 'Operating system, services and model kept up to date.',
          },
          {
            title: 'Reply in minutes, fixed in under 24 hours',
            text: 'You message me on WhatsApp and I reply within minutes. Anything that can be fixed remotely is solved in under 24 hours; if it needs a visit, we schedule it.',
          },
          {
            title: 'Training and adjustments',
            text: 'I train your team and adjust as your operation changes.',
          },
        ],
        quote: 'Monthly support is quoted based on your equipment.',
      },
    },
  },
  es: {
    storeCompare: {
      title: '¿Qué tipo de tienda te conviene?',
      caption:
        'Comparación de tiendas en línea: tienda a medida con Bagisto, WooCommerce y Shopify.',
      criteriaLabel: 'Criterio',
      platforms: ['Tienda a medida (Bagisto)', 'WooCommerce', 'Shopify'],
      rows: [
        {
          label: 'Costo de la plataforma',
          values: [
            'Sin mensualidad de plataforma: es código abierto; pagas el desarrollo y el hosting.',
            'El plugin es gratis; pagas hosting, tema y extensiones.',
            'Mensualidad: plan Basic 39 USD/mes (29 USD/mes pagando el año).',
          ],
        },
        {
          label: 'Comisión por venta',
          values: [
            'Ninguna de la plataforma, solo la de tu pasarela.',
            'Ninguna de la plataforma, solo la de tu pasarela.',
            'Si no usas Shopify Payments, suma 2 % por venta en Basic además de tu pasarela (en Colombia lo normal es usar una pasarela externa).',
          ],
        },
        {
          label: 'Pagos colombianos (PSE, Wompi, ePayco, PayU, Nequi)',
          values: [
            'Se integran a la medida.',
            'Con plugins.',
            'Con apps de terceros.',
          ],
        },
        {
          label: 'Control y propiedad',
          values: [
            'El código y los datos son tuyos, en tu servidor.',
            'Tuyos, en tu hosting.',
            'La tienda vive en Shopify; si dejas de pagar, se apaga.',
          ],
        },
        {
          label: 'Punto de venta (vender en el local)',
          values: [
            'POS integrado con el mismo inventario.',
            'Con extensiones.',
            'Shopify POS (con costo adicional según plan).',
          ],
        },
        {
          label: 'Cuándo conviene',
          values: [
            'Catálogos grandes, varios vendedores, tienda + local, o quieres cero mensualidades.',
            'Ya tienes WordPress o quieres algo sencillo y barato de mantener.',
            'Quieres empezar hoy mismo sin servidor y aceptas la mensualidad.',
          ],
        },
      ],
      note: 'Precios de Shopify consultados en noviembre de 2026; pueden cambiar.',
      honest: 'Trabajo con las tres y te digo con honestidad cuál te conviene.',
      whatsappLabel: 'Escríbeme por WhatsApp',
      whatsappText: 'Hola Jesús, quiero una tienda en línea y no sé cuál me conviene.',
    },
    support: {
      title: 'Soporte y control de errores después de entregar',
      intro:
        'No te dejo solo después de publicar; si algo falla, hablas directo con quien lo construyó.',
      points: [
        {
          title: 'Copias de seguridad automáticas',
          text: 'Si algo se daña, se recupera la última versión buena.',
        },
        {
          title: 'Actualizaciones de seguridad',
          text: 'Plugins, librerías y servidor al día.',
        },
        {
          title: 'Respuesta en minutos, solución en menos de 24 horas',
          text: 'Me reportas por WhatsApp con una captura. Te respondo en minutos, reviso la causa, lo corrijo en menos de 24 horas y te cuento qué pasó.',
        },
        {
          title: 'Horas de mejoras cada mes',
          text: 'Cambios de textos, secciones nuevas, ajustes.',
        },
      ],
      plansLink: 'Ver todos los precios',
      infra: {
        title: 'Soporte después de la instalación',
        intro:
          'No te dejo solo después de la instalación; si algo falla, hablas directo con quien lo montó.',
        points: [
          {
            title: 'Copias de seguridad configuradas',
            text: 'Tus documentos y sistemas quedan con respaldo automático.',
          },
          {
            title: 'Actualizaciones del servidor y del asistente',
            text: 'Sistema operativo, servicios y modelo al día.',
          },
          {
            title: 'Respuesta en minutos, solución en menos de 24 horas',
            text: 'Me escribes por WhatsApp y te respondo en minutos. Lo que se arregla a distancia queda resuelto en menos de 24 horas; si hace falta ir en persona, coordinamos la visita.',
          },
          {
            title: 'Capacitación y ajustes',
            text: 'Entreno a tu equipo y ajusto lo que cambie en la operación.',
          },
        ],
        quote: 'El soporte mensual se cotiza según tus equipos.',
      },
    },
  },
}

export function getServiceBlocks(lang) {
  return serviceBlocks[lang === 'es' ? 'es' : 'en']
}

/** Planes de mantenimiento web, leídos de pricing*.js (nunca copiados a mano). */
export function getMaintenancePlans(lang) {
  const source = lang === 'es' ? pricingEs : pricingEn
  const category = source.categories.find(
    (c) => c.recurring?.titleKey === 'maintenanceTitle'
  )
  if (!category) return null
  return {
    title: source.labels[category.recurring.titleKey],
    monthly: source.labels.monthly,
    plans: category.recurring.plans,
  }
}
