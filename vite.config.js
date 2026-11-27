import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, pathToFileURL } from 'node:url'

// Módulo virtual con la lista liviana de artículos (sin cuerpos `body`): así
// el JS principal de todas las páginas no arrastra los textos completos.
function articlesIndex() {
  const virtualId = '\0virtual:articles-index'
  const abs = fileURLToPath(new URL('./src/data/articles.js', import.meta.url))

  const stripBody = ({ body, ...rest }) => rest

  return {
    name: 'articles-index',
    resolveId(id) {
      if (id === 'virtual:articles-index') return virtualId
      return null
    },
    async load(id) {
      if (id !== virtualId) return null
      const mod = await import(pathToFileURL(abs).href + '?t=' + Date.now())
      this.addWatchFile(abs)
      const list = mod.articles.map((a) => ({
        ...a,
        en: stripBody(a.en),
        es: stripBody(a.es),
      }))
      return `export const articles = ${JSON.stringify(list)}`
    },
  }
}

// Las dos fuentes de la primera pantalla (titulares y texto normal) se piden
// junto con el HTML (<link rel="preload">), sin esperar a que el navegador lea
// el CSS. El resto de fuentes se piden como siempre, al usarse.
const CRITICAL_FONTS = [/archivo-latin-900-normal-[^/]+\.woff2$/, /instrument-sans-latin-400-normal-[^/]+\.woff2$/]

function preloadCriticalFonts() {
  return {
    name: 'preload-critical-fonts',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        if (!ctx.bundle) return html
        const files = Object.keys(ctx.bundle).filter((f) => CRITICAL_FONTS.some((re) => re.test(f)))
        return {
          html,
          tags: files.map((f) => ({
            tag: 'link',
            attrs: { rel: 'preload', href: `/${f}`, as: 'font', type: 'font/woff2', crossorigin: '' },
            injectTo: 'head',
          })),
        }
      },
    },
  }
}

// Dominio propio (easyprodigital.com) => base '/'
export default defineConfig({
  plugins: [articlesIndex(), react(), preloadCriticalFonts()],
  base: '/',
})
