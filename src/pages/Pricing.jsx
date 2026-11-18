import { PageIntro, Founders, Roadmap, Faq, Final } from '../sections.jsx'
import { track } from '../parts.jsx'
import { PRODUCT } from '../content.js'
import { PAGE_COPY } from '../pagecopy.js'

export default function Pricing({ c, lang, wa }) {
  const p = PAGE_COPY[lang]
  const { total, taken } = PRODUCT.founders
  const copy = { ...p.pricing, lead: p.pricing.lead(total) }
  return (
    <div className="wa-page">
      <PageIntro copy={copy} ui={p.ui} lang={lang} wa={wa} page="pricing" home={p.nav.home} track={track} />
      <Founders c={c} lang={lang} wa={wa} />
      <Roadmap c={c} lang={lang} wa={wa} />
      <Faq c={c} lang={lang} wa={wa} />
      <Final c={c} lang={lang} wa={wa} />
    </div>
  )
}
