import { useCallback, useEffect, useState } from 'react'
import { Icon } from '../components/icons.jsx'
import Reveal from '../components/Reveal.jsx'
import { GoblinPeek } from './TavernDecor.jsx'

// Los menús siguen siendo los PDF del restaurante: no hay ninguna copia del
// contenido aquí y nadie tiene que volver a maquetar nada. Cuando cambian la
// carta, reemplazan el .pdf en su servidor y esta página se actualiza sola.
//
// Lo que cambia es CÓMO se muestran. Un <embed src="....pdf"> monta el visor
// del navegador: barra de herramientas gris, panel de miniaturas, barras de
// desplazamiento — justo lo que rompe la estética y delata que es un PDF.
// Aquí la página del PDF se rasteriza a imagen (ver assets.js) y se muestra
// sobre una hoja de pergamino, sin marco de visor. El botón de descarga
// entrega el PDF original intacto.

function ParchmentSheet({ menu, lang, onClose }) {
  const [page, setPage] = useState(0)
  const copy = menu[lang]
  const many = menu.images.length > 1

  const close = useCallback(() => onClose(), [onClose])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (many && e.key === 'ArrowRight') setPage((p) => Math.min(p + 1, menu.images.length - 1))
      if (many && e.key === 'ArrowLeft') setPage((p) => Math.max(p - 1, 0))
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [close, many, menu.images.length])

  return (
    <div className="chope-sheet-backdrop" onMouseDown={(e) => e.target === e.currentTarget && close()}>
      <div className="chope-sheet" role="dialog" aria-modal="true" aria-label={copy.name}>
        <button type="button" className="chope-sheet-close" onClick={close} aria-label={lang === 'fr' ? 'Fermer' : 'Close'}>
          <span aria-hidden="true">×</span>
        </button>

        <div className="chope-sheet-head">
          <h3>{copy.name}</h3>
          <span>{copy.when}</span>
        </div>

        <div className="chope-sheet-paper">
          <img
            src={menu.images[page]}
            alt={
              lang === 'fr'
                ? `${copy.name} — page ${page + 1} de la carte de La Chope Gobeline`
                : `${copy.name} — page ${page + 1} of La Chope Gobeline's menu`
            }
            loading="lazy"
          />
        </div>

        <div className="chope-sheet-foot">
          {many && (
            <div className="chope-sheet-pager">
              <button type="button" onClick={() => setPage((p) => Math.max(p - 1, 0))} disabled={page === 0} aria-label={lang === 'fr' ? 'Page précédente' : 'Previous page'}>‹</button>
              <span>{page + 1} / {menu.images.length}</span>
              <button type="button" onClick={() => setPage((p) => Math.min(p + 1, menu.images.length - 1))} disabled={page === menu.images.length - 1} aria-label={lang === 'fr' ? 'Page suivante' : 'Next page'}>›</button>
            </div>
          )}
          <a className="demo-btn demo-btn-primary" href={menu.pdf} target="_blank" rel="noopener noreferrer">
            {lang === 'fr' ? 'Télécharger le PDF' : 'Download the PDF'}
          </a>
        </div>
      </div>
    </div>
  )
}

export default function MenuSection({ id = 'menus', lang, menus, heading }) {
  const [open, setOpen] = useState(null)

  return (
    <section id={id} className="demo-section chope-menus">
      <div className="demo-container">
        {heading}
        <Reveal as="div" className="chope-menu-grid">
          {menus.map((m, i) => {
            const copy = m[lang]
            return (
              <article className="chope-menu-card" key={m.id}>
                <GoblinPeek index={i} side={i % 2 ? 'left' : 'right'} />
                <button type="button" className="chope-menu-thumb" onClick={() => setOpen(m)}>
                  <img src={m.thumb} alt="" loading="lazy" aria-hidden="true" />
                  <span className="chope-menu-thumb-hint">
                    <Icon name="book" /> {lang === 'fr' ? 'Voir la carte' : 'View the menu'}
                  </span>
                </button>

                <div className="chope-menu-body">
                  <h3>{copy.name}</h3>
                  <span className="chope-menu-when"><Icon name="clock" /> {copy.when}</span>
                  <p>{copy.text}</p>

                  {m.taste.length > 0 && (
                    <ul className="chope-menu-taste">
                      {m.taste.map((t) => (
                        <li key={t.fr}>
                          <span>{t[lang]}</span>
                          <em>{t.price} <Icon name="sparkle" /></em>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="chope-menu-actions">
                    <button type="button" className="demo-btn demo-btn-primary" onClick={() => setOpen(m)}>
                      {lang === 'fr' ? 'Ouvrir' : 'Open'}
                    </button>
                    <a className="chope-link" href={m.pdf} target="_blank" rel="noopener noreferrer">PDF</a>
                  </div>
                </div>
              </article>
            )
          })}
        </Reveal>
      </div>

      {open && <ParchmentSheet menu={open} lang={lang} onClose={() => setOpen(null)} />}
    </section>
  )
}
