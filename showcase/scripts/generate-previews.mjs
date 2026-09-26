// Genera previews de cada demo del showcase (30s wait + 3 shots por página).
// Usa el build en dist/ servido con vite preview + Playwright.
// Salida: public/previews/<slug>-1.webp, <slug>-2.webp, <slug>-3.webp
import { spawn } from 'node:child_process'
import { mkdir } from 'node:fs/promises'
import { chromium } from 'playwright'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const OUT_DIR = resolve(ROOT, 'public', 'previews')

// Slugs a capturar: 16 demos base + 3 prospectos custom.
const TARGETS = [
  'salon-belleza',
  'car-wash',
  'cleaners',
  'carpenters',
  'gardeners',
  'plumbers',
  'realestate',
  'masons',
  'construction',
  'automechanics',
  'electricians',
  'private-chef',
  'adult-creator',
  'youtuber',
  'church',
  'foundation',
  'chope-gobeline',
  'copie-bgr',
  'ping-pong-club',
]

const PORT = 4180
const BASE = `http://127.0.0.1:${PORT}`
const WAIT_MS = 30_000 // requisito explícito: esperar 30s antes de capturar

async function main() {
  await mkdir(OUT_DIR, { recursive: true })

  // 1) Arranca vite preview servido desde dist/
  console.log('Arrancando vite preview…')
  const preview = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--host', '127.0.0.1', '--strictPort'], {
    cwd: ROOT,
    stdio: ['ignore', 'pipe', 'pipe'],
  })
  preview.stdout.on('data', (d) => process.stdout.write('[preview] ' + d))
  preview.stderr.on('data', (d) => process.stderr.write('[preview:err] ' + d))
  // Espera a que arranque
  await new Promise((r) => setTimeout(r, 2500))

  const browser = await chromium.launch({
    executablePath: process.env.PLAYWRIGHT_CHROMIUM || undefined,
    args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox'],
  })
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
    reducedMotion: 'no-preference',
  })

  for (const slug of TARGETS) {
    const url = `${BASE}/${slug}`
    console.log(`\n→ ${slug}`)
    const page = await context.newPage()
    page.on('pageerror', (e) => console.log(`  [error] ${e.message}`))
    try {
      await page.goto(url, { waitUntil: 'load', timeout: 60_000 })
      // Espera bruta 30s para que corran GSAP, WebGL, ScrollExpand, etc.
      await page.waitForTimeout(WAIT_MS)
      // Shot 1: top
      await page.screenshot({
        path: resolve(OUT_DIR, `${slug}-1.webp`),
        type: 'webp',
        quality: 82,
        fullPage: false,
      })
      // Shot 2: mid — desplazar 1 viewport y esperar animación scroll-triggered
      await page.evaluate(() => window.scrollTo({ top: window.innerHeight, behavior: 'instant' }))
      await page.waitForTimeout(1200)
      await page.screenshot({
        path: resolve(OUT_DIR, `${slug}-2.webp`),
        type: 'webp',
        quality: 82,
        fullPage: false,
      })
      // Shot 3: bottom — 60% del scroll disponible
      await page.evaluate(() => {
        const h = document.documentElement.scrollHeight
        window.scrollTo({ top: h * 0.55, behavior: 'instant' })
      })
      await page.waitForTimeout(1200)
      await page.screenshot({
        path: resolve(OUT_DIR, `${slug}-3.webp`),
        type: 'webp',
        quality: 82,
        fullPage: false,
      })
      console.log(`  ✓ 3 shots`)
    } catch (err) {
      console.log(`  ✗ ${err.message}`)
    } finally {
      await page.close()
    }
  }

  await browser.close()
  preview.kill('SIGTERM')
  console.log('\nListo.')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
