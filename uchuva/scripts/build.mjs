// Build con prerender: genera HTML estático real para "/" (español) y
// "/en/" (inglés) — Google y los buscadores con IA leen el contenido sin
// ejecutar JavaScript, y el navegador luego "hidrata" la página.
import { build } from 'vite'
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const ssrOut = join(root, '.ssr')

await build({ root, logLevel: 'warn' })
await build({ root, logLevel: 'warn', build: { ssr: 'src/entry-server.jsx', outDir: ssrOut, emptyOutDir: true } })

const { render, head, LANGS, LANG_PATH } = await import(pathToFileURL(join(ssrOut, 'entry-server.js')).href)
const template = readFileSync(join(dist, 'index.html'), 'utf8')

for (const lang of LANGS) {
  const html = template
    .replace('<html lang="es">', `<html lang="${lang}">`)
    .replace('<!--app-head-->', head(lang))
    .replace('<!--app-html-->', render(lang))
  const dir = join(dist, LANG_PATH[lang])
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), html)
  console.log(`[build] ${LANG_PATH[lang]} → ${html.length} bytes`)
}
rmSync(ssrOut, { recursive: true, force: true })
