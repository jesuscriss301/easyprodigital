import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import { PAGES, PAGE_KEYS } from './content.js'

// La ruta decide idioma y página (cada una es un HTML prerenderizado distinto).
const path = window.location.pathname.replace(/\/?$/, '/')
const lang = path.startsWith('/en/') ? 'en' : 'es'
const page = PAGE_KEYS.find((k) => PAGES[k][lang] === path) || 'home'
const root = document.getElementById('root')
const app = (
  <StrictMode>
    <App lang={lang} page={page} />
  </StrictMode>
)

// En producción el HTML ya viene prerenderizado (scripts/build.mjs): se hidrata.
// En desarrollo (npm run dev) el contenedor llega vacío y se monta normal.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
