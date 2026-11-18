import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import { PAGES, PAGE_KEYS } from './content.js'
import { head } from './seo.js'

export function render(page, lang) {
  return renderToString(
    <StrictMode>
      <App lang={lang} page={page} />
    </StrictMode>
  )
}

export const LANGS = ['es', 'en']
export { head, PAGES, PAGE_KEYS }
export { LASTMOD } from './seo.js'
