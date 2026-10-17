// Valida que todos los artículos estén correctamente enlazados: cada uno
// debe tener al menos tres artículos relacionados posibles (por `tag` o por
// `related`), referencias que apuntan a slugs reales, y los `relatedDemo`
// y `relatedService` deben existir realmente en el proyecto.
//
// Encadenado al build: si falta un enlace, el deploy no pasa. Así nunca
// publicamos un artículo huérfano por olvido.
import { readFileSync, existsSync, readdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { articles } from '../src/data/articles.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

// --- 1. Slugs de artículos existentes
const slugs = new Set(articles.map((a) => a.slug))

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

// --- 3. Rutas de servicio existentes (leídas de src/App.jsx)
const appSrc = readFileSync(join(root, 'src', 'App.jsx'), 'utf8')
const serviceSlugs = new Set()
for (const m of appSrc.matchAll(/path="services\/([a-z0-9-]+)"/g)) {
  serviceSlugs.add(m[1])
}

// --- 4. Validar cada artículo
const errors = []

for (const a of articles) {
  // Campos obligatorios de enlace.
  if (typeof a.relatedDemo === 'undefined') errors.push(`${a.slug}: falta campo relatedDemo (puede ser null)`)
  if (typeof a.relatedService === 'undefined') errors.push(`${a.slug}: falta campo relatedService (puede ser null)`)
  if (!Array.isArray(a.related)) errors.push(`${a.slug}: falta campo related (debe ser array)`)

  // relatedDemo debe apuntar a una demo real si no es null.
  if (a.relatedDemo && !demoSlugs.has(a.relatedDemo)) {
    errors.push(`${a.slug}: relatedDemo "${a.relatedDemo}" no existe en showcase/src/demos`)
  }

  // relatedService debe apuntar a una ruta real si no es null.
  if (a.relatedService && !serviceSlugs.has(a.relatedService)) {
    errors.push(`${a.slug}: relatedService "${a.relatedService}" no existe como ruta en App.jsx`)
  }

  // Cada slug de related debe existir.
  for (const slug of a.related || []) {
    if (!slugs.has(slug)) {
      errors.push(`${a.slug}: related "${slug}" no es un artículo existente`)
    }
    if (slug === a.slug) {
      errors.push(`${a.slug}: related se enlaza a sí mismo`)
    }
  }

  // Cada artículo debe poder ofrecer al menos 3 relacionados: por tag o por
  // `related`. Si no, lo marcamos (pickRelated completará con cualquiera,
  // pero avisamos para que el autor lo arregle a propósito).
  const sameTag = articles.filter((x) => x.tag.en === a.tag.en && x.slug !== a.slug).length
  const linked = sameTag + (a.related || []).filter((s) => slugs.has(s) && s !== a.slug).length
  if (linked < 3) {
    errors.push(`${a.slug}: solo ${linked} artículos relacionados (mínimo 3 entre mismo tag y "related")`)
  }
}

if (errors.length) {
  console.error('\n[validate-article-links] FALLÓ:')
  for (const e of errors) console.error('  -', e)
  console.error(`\n${errors.length} problema(s). Arregla antes de buildear.\n`)
  process.exit(1)
}

console.log(
  `[validate-article-links] OK: ${articles.length} artículos, ${demoSlugs.size} demos, ${serviceSlugs.size} rutas de servicio.`
)
