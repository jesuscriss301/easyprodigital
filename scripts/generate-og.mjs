// Genera una tarjeta social 1200x630 (Open Graph / Twitter) por página e idioma
// en public/og/<idioma>/<clave>.jpg. La clave es la ruta sin idioma, con "/"
// convertido en "-" (p. ej. blog/mi-articulo -> blog-mi-articulo).
//
//   npm run og
//
// Seo.jsx apunta a estas rutas automáticamente. Las tarjetas se versionan en
// el repo: solo hay que correr este script al agregar un artículo o una página.
// La portada usa public/og-image.jpg (tarjeta con foto), no se genera aquí.
import { chromium } from 'playwright'
import { mkdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { articles } from '../src/data/articles.js'
import { articleSeoTitles } from '../src/data/articleSeo.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = process.env.OG_ROOT || join(__dirname, '..')
const outDir = join(root, 'public', 'og')

const PAGES = [
  { key: 'services', en: ['Services', 'Web, Apps, SaaS, SEO & AI'], es: ['Servicios', 'Web, Apps, SaaS, SEO e IA'] },
  { key: 'pricing', en: ['Pricing', 'Fixed scope. Fixed price.'], es: ['Precios', 'Alcance y precio cerrados.'] },
  {
    key: 'services-real-estate-website-design',
    en: ['Service · Real estate', 'Website Design for Real Estate Agents'],
    es: ['Servicio · Inmobiliarias', 'Páginas Web para Inmobiliarias'],
  },
  {
    key: 'services-google-business-profile-setup',
    en: ['Service · Local SEO', 'Google Business Profile Setup & SEO'],
    es: ['Servicio · SEO local', 'Ficha de Google Business y SEO Local'],
  },
  { key: 'services-get-found-online', en: ['Service · Get Found', 'Websites & Local SEO for Small Businesses'], es: ['Servicio · Aparece', 'Páginas Web y SEO Local para Negocios'] },
  { key: 'services-instant-replies', en: ['Service · Respond Fast', 'Instant Replies by Text & WhatsApp'], es: ['Servicio · Responde', 'Respuestas Automáticas por WhatsApp'] },
  { key: 'services-customer-retention', en: ['Service · Keep Customers', 'Reminders & Customer Follow-Up'], es: ['Servicio · Retiene', 'Recordatorios y Seguimiento de Clientes'] },
  { key: 'services-web-development', en: ['Service · Web', 'Custom Web Development for Businesses'], es: ['Servicio · Web', 'Desarrollo Web a Medida en Colombia'] },
  { key: 'services-mobile-development', en: ['Service · Mobile', 'Mobile App Development, iOS & Android'], es: ['Servicio · Móvil', 'Apps Móviles iOS y Android a Medida'] },
  { key: 'services-saas-development', en: ['Service · SaaS', 'SaaS Development, MVP to Production'], es: ['Servicio · SaaS', 'Desarrollo de SaaS: del MVP a Producción'] },
  { key: 'services-seo-services', en: ['Service · SEO', 'SEO for Local & Online Businesses'], es: ['Servicio · SEO', 'SEO Técnico y Local en Colombia'] },
  { key: 'services-digital-marketing', en: ['Service · Marketing', 'Marketing Automation & Lead Follow-Up'], es: ['Servicio · Marketing', 'Automatización de Marketing y Leads'] },
  { key: 'services-ai-integrations', en: ['Service · AI', 'AI Chatbots & Integrations for Business'], es: ['Servicio · IA', 'Chatbots e IA para Negocios'] },
  { key: 'portfolio', en: ['Portfolio', 'Web, Mobile & SaaS Projects'], es: ['Portafolio', 'Proyectos Web, Móvil y SaaS'] },
  { key: 'blog', en: ['Blog', 'Web, SEO & AI for Local Businesses'], es: ['Blog', 'Web, SEO e IA para Negocios Locales'] },
  { key: 'about', en: ['About', 'Jesús Cristancho, Freelance Developer'], es: ['Sobre mí', 'Jesús Cristancho, Desarrollador Freelance'] },
  { key: 'contact', en: ['Contact', 'Start a Project With Me'], es: ['Contacto', 'Empecemos Tu Proyecto'] },
  { key: 'faq', en: ['FAQ', 'Pricing, Process, Tech Stack & AI'], es: ['Preguntas frecuentes', 'Precios, Proceso, Stack e IA'] },
  { key: 'privacy', en: ['Legal', 'Privacy Policy'], es: ['Legal', 'Política de Privacidad'] },
  { key: 'terms', en: ['Legal', 'Terms of Service'], es: ['Legal', 'Términos de Servicio'] },
  { key: 'cookies', en: ['Legal', 'Cookie Policy'], es: ['Legal', 'Política de Cookies'] },
]

const cards = []
for (const lang of ['en', 'es']) {
  for (const p of PAGES) cards.push({ lang, key: p.key, kicker: p[lang][0], title: p[lang][1] })
  for (const a of articles) {
    cards.push({
      lang,
      key: `blog-${a.slug}`,
      kicker: a.tag[lang],
      title: articleSeoTitles[a.slug]?.[lang] || a[lang].title,
    })
  }
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function html({ kicker, title, lang }) {
  const size = title.length <= 34 ? 84 : title.length <= 48 ? 72 : 62
  const role = lang === 'es' ? 'Desarrollador Full-Stack Freelance' : 'Freelance Full-Stack Developer'
  return `<!doctype html><html><head><meta charset="utf-8"><style>
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;overflow:hidden;font-family:Inter,'Segoe UI',Arial,sans-serif;color:#f4f7fb;
background:radial-gradient(1000px 600px at 100% 0%,#14436c 0%,rgba(20,67,108,0) 60%),linear-gradient(135deg,#071f42 0%,#0a2a52 55%,#0b1f3f 100%);
padding:64px 72px;display:flex;flex-direction:column;position:relative}
.top{display:flex;align-items:center;gap:18px}
.mono{font-family:'DejaVu Sans Mono','JetBrains Mono',monospace;font-size:26px;color:#c9d6e6}
.kicker{margin-top:84px;font-size:26px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#3ab1e8}
h1{margin-top:22px;font-size:${size}px;line-height:1.08;font-weight:800;letter-spacing:-.02em;max-width:1010px}
.bar{position:absolute;left:72px;bottom:64px;right:72px;display:flex;justify-content:space-between;align-items:center;
border-top:1px solid rgba(255,255,255,.16);padding-top:26px;font-size:26px;color:#aebfd6}
.bar b{color:#fff;font-weight:700}
.accent{position:absolute;left:0;top:0;bottom:0;width:10px;background:linear-gradient(#3ab1e8,#0c5f84)}
</style></head><body>
<div class="accent"></div>
<div class="top">
<svg width="52" height="52" viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3ab1e8"/><stop offset="1" stop-color="#0c5f84"/></linearGradient></defs><rect x="1" y="1" width="62" height="62" rx="16" fill="url(#g)"/><path d="M21 20 L34 32 L21 44" fill="none" stroke="#fff" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/><rect x="37" y="39" width="14" height="5.5" rx="2.5" fill="#fff"/></svg>
<span class="mono">easyprodigital.com</span></div>
<div class="kicker">${esc(kicker)}</div>
<h1>${esc(title)}</h1>
<div class="bar"><span><b>Jesús Cristancho</b> · ${esc(role)}</span><span>Easy Pro Digital</span></div>
</body></html>`
}

const browser = await chromium.launch(
  process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {},
)
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } })
let n = 0
for (const c of cards) {
  const dir = join(outDir, c.lang)
  mkdirSync(dir, { recursive: true })
  await page.setContent(html(c), { waitUntil: 'load' })
  await page.screenshot({ path: join(dir, `${c.key}.jpg`), type: 'jpeg', quality: 82 })
  n += 1
}
await browser.close()
console.log(`[og] ${n} tarjetas generadas en ${outDir}`)
