export default function Footer({ brand }) {
  return (
    <footer className="demo-footer">
      <p>
        © {new Date().getFullYear()} {brand} — sample site created by{' '}
        <a href="https://easyprodigital.com" target="_blank" rel="noopener noreferrer">Easy Pro Digital</a>.
      </p>
    </footer>
  )
}
