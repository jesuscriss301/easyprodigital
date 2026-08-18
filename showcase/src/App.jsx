import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Home from './pages/Home.jsx'
import DemoPage from './pages/DemoPage.jsx'
import NotFound from './pages/NotFound.jsx'
import { getDemoBySlug } from './demos/index.js'
import { LanguageProvider } from './i18n.jsx'

function DemoRoute() {
  const { slug } = useParams()
  const demo = getDemoBySlug(slug)
  return demo ? <DemoPage demo={demo} /> : <NotFound />
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
