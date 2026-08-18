import { useLanguage } from '../i18n.jsx'

export default function Footer({ brand }) {
  const { t } = useLanguage()
  return (
    <footer className="demo-footer">
      <p>
        © {new Date().getFullYear()} {brand} — {t.footer.createdBy}{' '}
        <a href="https://easyprodigital.com" target="_blank" rel="noopener noreferrer">Easy Pro Digital</a>.
      </p>
    </footer>
  )
}
