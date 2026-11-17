import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'

const lang = window.location.pathname.startsWith('/en') ? 'en' : 'es'
const root = document.getElementById('root')
const app = (
  <StrictMode>
    <App lang={lang} />
  </StrictMode>
)

// En producción el HTML ya viene prerenderizado (scripts/build.mjs): se hidrata.
// En desarrollo (npm run dev) el contenedor llega vacío y se monta normal.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
