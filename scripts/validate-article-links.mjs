// Valida que todos los artículos estén correctamente enlazados: cada uno
// debe tener al menos tres artículos relacionados posibles (por `tag` o por
// `related`) EN SU MISMO IDIOMA, referencias que apuntan a slugs reales, y los
// `relatedDemo` y `relatedService` deben existir realmente en el proyecto.
// Un artículo con `onlyLang` no puede enlazar uno que solo exista en el otro
// idioma; sus relacionados se cuentan sin los artículos ajenos.
//
// Encadenado al build: si falta un enlace, el deploy no pasa. Así nunca
// publicamos un artículo huérfano por olvido.
import { readFileSync, existsSync, readdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { articles } from '../src/data/articles.js'
import { CITY_SLUGS } from '../src/data/cityPages.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

// --- 2. Slugs de demos publicadas en demos.easyprodigital.com.
//
// Fuente autoritativa: las rutas que efectivamente responden en el
// subdominio. Las mantenemos aquí porque el showcase local (showcase/)
// solo tiene una muestra; el conjunto completo vive en el worktree
// desplegado y no siempre está presente en el checkout.
// Al agregar una demo nueva: añádela aquí y en el showcase.
const demoSlugs = new Set([
  'realestate',
  'plumbers',
  'electricians',
  'automechanics',
  'cleaners',
  'salonBelleza',
  'gardeners',
  'carpenters',
  'carWash',
  'chef',
  'church',
  'construction',
  'foundation',
  'masons',
  'youtuber',
  'adultCreator',
  'dentists',
  'lawyers',
  'carRental',
  'selfStorage',
  'veterinary',
  'languageSchool',
  'aesthetics',
])

// Si existe el worktree desplegado, también se honra como fuente para
// pescar demos nuevas sin tener que recordar actualizar la lista.
const demoDirs = [join(root, 'showcase', 'src', 'demos'), join(root, '.wt-showcase', 'showcase', 'src', 'demos')]
const bases = new Set()
for (const dir of demoDirs) {
  if (!existsSync(dir)) continue
  for (const f of readdirSync(dir)) {
    if (!f.endsWith('.js') || f === 'index.js') continue
    bases.add(f.replace(/\.js$/, ''))
  }
}
const sortedBases = [...bases].sort((a, b) => a.length - b.length)
for (const b of sortedBases) {
  const isVariant = sortedBases.some(
    (other) => other !== b && other.length < b.length && b.startsWith(other)
  )
  if (!isVariant) demoSlugs.add(b)
}

// --- 3. Rutas de servicio existentes (leídas de src/App.jsx) y páginas de
// ciudad (rutas de primer nivel, solo en español, declaradas con CITY_SLUGS).
const appSrc = readFileSync(join(root, 'src', 'App.jsx'), 'utf8')
const serviceSlugs = new Set()
for (const m of appSrc.matchAll(/path="services\/([a-z0-9-]+)"/g)) {
  serviceSlugs.add(m[1])
}
for (const slug of CITY_SLUGS) serviceSlugs.add(slug)

// --- 4. Validar cada artículo
const errors = []
const bySlug = new Map(articles.map((a) => [a.slug, a]))

// Idiomas en los que existe un artículo: uno solo si tiene `onlyLang`, los dos
// si es bilingüe. Dos artículos son compatibles si comparten al menos uno.
const langsOf = (a) => (a.onlyLang ? [a.onlyLang] : ['en', 'es'])
const shareLang = (a, b) => langsOf(a).some((lang) => langsOf(b).includes(lang))

for (const a of articles) {
  // `onlyLang` solo puede ser 'es' o 'en', y el bloque de ese idioma debe
  // existir mientras el otro no debe estar.
  if (a.onlyLang && a.onlyLang !== 'es' && a.onlyLang !== 'en') {
    errors.push(`${a.slug}: onlyLang "${a.onlyLang}" no es válido (usa 'es' o 'en')`)
  }
  for (const lang of ['en', 'es']) {
    const shouldExist = !a.onlyLang || a.onlyLang === lang
    if (shouldExist && !a[lang]) errors.push(`${a.slug}: falta el bloque "${lang}"`)
    if (!shouldExist && a[lang]) {
      errors.push(`${a.slug}: onlyLang "${a.onlyLang}" no debe tener bloque "${lang}"`)
    }
  }

  // Campos obligatorios de enlace.
  if (typeof a.relatedDemo === 'undefined') errors.push(`${a.slug}: falta campo relatedDemo (puede ser null)`)
  if (typeof a.relatedService === 'undefined') errors.push(`${a.slug}: falta campo relatedService (puede ser null)`)
  if (!Array.isArray(a.related)) errors.push(`${a.slug}: falta campo related (debe ser array)`)

  // relatedDemo debe apuntar a una demo real si no es null.
  if (a.relatedDemo && !demoSlugs.has(a.relatedDemo)) {
    errors.push(`${a.slug}: relatedDemo "${a.relatedDemo}" no existe en showcase/src/demos`)
  }

  // relatedService debe apuntar a una ruta real si no es null: servicios
  // (/services/<slug>/) o páginas de ciudad (/<slug>/).
  if (a.relatedService && !serviceSlugs.has(a.relatedService)) {
    errors.push(`${a.slug}: relatedService "${a.relatedService}" no existe como ruta en App.jsx`)
  }

  // Cada slug de related debe existir y estar disponible en el mismo idioma.
  // Un artículo solo-ES no puede enlazar uno solo-EN, ni al revés.
  for (const slug of a.related || []) {
    const target = bySlug.get(slug)
    if (!target) {
      errors.push(`${a.slug}: related "${slug}" no es un artículo existente`)
      continue
    }
    if (slug === a.slug) {
      errors.push(`${a.slug}: related se enlaza a sí mismo`)
      continue
    }
    if (!shareLang(a, target)) {
      errors.push(
        `${a.slug}: related "${slug}" no está disponible en ${langsOf(a).join('/')} (idiomas del artículo)`,
      )
    }
  }

  // Cada artículo debe poder ofrecer al menos 3 relacionados del MISMO idioma:
  // mismo tag o `related`, sin contar los artículos que no existen en su idioma.
  const pool = articles.filter((x) => x.slug !== a.slug && shareLang(a, x))
  const sameTag = pool.filter((x) => x.tag.en === a.tag.en).length
  const linkedInLang = (a.related || []).filter((slug) => {
    const target = bySlug.get(slug)
    return target && target.slug !== a.slug && shareLang(a, target)
  }).length
  const linked = sameTag + linkedInLang
  if (linked < 3) {
    errors.push(
      `${a.slug}: solo ${linked} artículos relacionados en su idioma (mínimo 3 entre mismo tag y "related")`,
    )
  }
}

if (errors.length) {
  console.error('\n[validate-article-links] FALLÓ:')
  for (const e of errors) console.error('  -', e)
  console.error(`\n${errors.length} problema(s). Arregla antes de buildear.\n`)
  process.exit(1)
}

console.log(
  `[validate-article-links] OK: ${articles.length} artículos, ${demoSlugs.size} demos, ${serviceSlugs.size} rutas de servicio/ciudad.`
)
