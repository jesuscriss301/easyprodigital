import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import { Header, Footer, StatusBar, ScrollToTop, WhatsAppFloat } from './components/Layout.jsx'
import {
  Home,
  Services,
  Portfolio,
  About,
  Contact,
  Legal,
  NotFound,
} from './pages/pages.jsx'
import RagForm from './pages/RagForm.jsx'
import Blog from './pages/Blog.jsx'

/**
 * Envoltorio de una rama de idioma completa (inglés en "/", español en "/es/*").
 * Todo lo que cuelga de aquí (Header, páginas, Footer) lee el idioma vía
 * useLanguage() en vez de importar contenido en español directamente.
 */
function LangLayout({ lang }) {
  return (
    <LanguageProvider lang={lang}>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <WhatsAppFloat />
      <Footer />
      <StatusBar />
    </LanguageProvider>
  )
}

/** Mismas rutas hijas para ambos idiomas — solo cambia el LangLayout padre. */
function RouteChildren() {
  return (
    <>
      <Route index element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="blog" element={<Blog />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="rag-form" element={<RagForm />} />
      <Route path="privacy" element={<Legal kind="privacy" />} />
      <Route path="terms" element={<Legal kind="terms" />} />
      <Route path="cookies" element={<Legal kind="cookies" />} />

      {/* Redirects de URLs del sitio anterior (conservan el link juice) */}
      <Route path="plan" element={<Navigate to="../services/" replace />} />
      <Route path="sign_in" element={<Navigate to=".." replace />} />
      <Route path="log_in" element={<Navigate to=".." replace />} />

      <Route path="*" element={<NotFound />} />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Más específica primero: si no, "/*" en inglés atraparía también /es/... */}
        <Route path="/es/*" element={<LangLayout lang="es" />}>
          {RouteChildren()}
        </Route>
        <Route path="/*" element={<LangLayout lang="en" />}>
          {RouteChildren()}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
