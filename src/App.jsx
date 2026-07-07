import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Header, Footer, StatusBar, ScrollToTop } from './components/Layout.jsx'
import {
  Home,
  Services,
  Portfolio,
  About,
  Contact,
  Legal,
  NotFound,
} from './pages/pages.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Legal kind="privacy" />} />
          <Route path="/terms" element={<Legal kind="terms" />} />
          <Route path="/cookies" element={<Legal kind="cookies" />} />

          {/* Redirects de URLs del sitio anterior (conservan el link juice) */}
          <Route path="/plan" element={<Navigate to="/services/" replace />} />
          <Route path="/blog" element={<Navigate to="/" replace />} />
          <Route path="/sign_in" element={<Navigate to="/" replace />} />
          <Route path="/log_in" element={<Navigate to="/" replace />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <StatusBar />
    </BrowserRouter>
  )
}
