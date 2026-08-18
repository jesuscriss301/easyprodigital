import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Home from './pages/Home.jsx'
import DemoPage from './pages/DemoPage.jsx'
import NotFound from './pages/NotFound.jsx'
import { getDemoBySlug } from './demos/index.js'
import { LanguageProvider, useLanguage } from './i18n.jsx'
import { getLocalizedDemo } from './demos/i18n/es/index.js'

function DemoRoute() {
  const { slug } = useParams()
  const { lang } = useLanguage()
  const demo = getDemoBySlug(slug)
  const localizedDemo = getLocalizedDemo(demo, lang)
  // `key={lang}` forces a full remount of DemoPage (and everything inside
  // it) on language toggle. Several section headings animate in with GSAP's
  // SplitText, which hijacks the DOM node it's given (splitting it into
  // per-char/word spans) — once that's happened, a plain React re-render
  // with new text can't update it back (React's diff writes to a text node
  // that GSAP already replaced with its own span tree, so the change is
  // silently lost). Remounting tears down and rebuilds SplitText cleanly
  // against the new-language text instead of fighting its DOM mutations.
  return localizedDemo ? <DemoPage demo={localizedDemo} key={lang} /> : <NotFound />
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path=":slug" element={<DemoRoute />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
