import { PageIntro, Features, Steps, Security, Final } from '../sections.jsx'
import { track } from '../parts.jsx'
import { PAGE_COPY } from '../pagecopy.js'

export default function How({ c, lang, wa }) {
  const p = PAGE_COPY[lang]
  return (
    <div className="wa-page">
      <PageIntro copy={p.how} ui={p.ui} lang={lang} wa={wa} page="how" home={p.nav.home} track={track} />
      <Features c={c} lang={lang} wa={wa} />
      <Steps c={c} lang={lang} wa={wa} />
      <Security c={c} lang={lang} wa={wa} />
      <Final c={c} lang={lang} wa={wa} />
    </div>
  )
}
