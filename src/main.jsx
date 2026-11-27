import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initAnalytics } from './analytics.js'
import './fonts.css'
import './styles.css'

initAnalytics()

// Si la página viene prerenderizada (scripts/prerender.mjs), React "hidrata"
// el HTML que ya está pintado en vez de borrarlo y volver a dibujarlo. Así el
// contenido se ve desde el primer momento y no espera a que cargue el JS.
const rootEl = document.getElementById('root')
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
if (rootEl.hasChildNodes()) {
  window.__EPD_PRERENDERED__ = true // ver SplitText.jsx
  ReactDOM.hydrateRoot(rootEl, app)
} else {
  ReactDOM.createRoot(rootEl).render(app)
}
