import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
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
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rag-form" element={<RagForm />} />
          <Route path="/privacy" element={<Legal kind="privacy" />} />
          <Route path="/terms" element={<Legal kind="terms" />} />
          <Route path="/cookies" element={<Legal kind="cookies" />} />

          {/* Redirects de URLs del sitio anterior (conservan el link juice) */}
          <Route path="/plan" element={<Navigate to="/services/" replace />} />
          <Route path="/sign_in" element={<Navigate to="/" replace />} />
          <Route path="/log_in" element={<Navigate to="/" replace />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <WhatsAppFloat />
      <Footer />
      <StatusBar />
    </BrowserRouter>
  )
}
