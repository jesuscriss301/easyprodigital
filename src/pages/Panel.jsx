import { PageIntro, PanelSection, Tickets, Final } from '../sections.jsx'
import { track } from '../parts.jsx'
import { PAGE_COPY } from '../pagecopy.js'

export default function Panel({ c, lang, wa }) {
  const p = PAGE_COPY[lang]
  return (
    <div className="wa-page">
      <PageIntro copy={p.panel} ui={p.ui} lang={lang} wa={wa} page="panel" home={p.nav.home} track={track} />
      <PanelSection c={c} lang={lang} wa={wa} />
      <Tickets c={c} lang={lang} wa={wa} />
      <Final c={c} lang={lang} wa={wa} />
    </div>
  )
}
