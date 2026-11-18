import { Hero, Outcomes, Fit, Answer, Explore, FoundersStrip, Final } from '../sections.jsx'
import { PAGE_COPY } from '../pagecopy.js'

export default function Home({ c, lang, wa }) {
  const p = PAGE_COPY[lang]
  return (
    <div className="wa-page">
      <Hero c={c} lang={lang} wa={wa} />
      <Answer copy={p.home.answer} ui={p.ui} />
      <Outcomes c={c} lang={lang} wa={wa} />
      <Explore copy={p.home.explore} lang={lang} />
      <Fit c={c} lang={lang} wa={wa} />
      <FoundersStrip c={c} copy={p.home.strip} ui={p.ui} lang={lang} wa={wa} />
      <Final c={c} lang={lang} wa={wa} />
    </div>
  )
}
