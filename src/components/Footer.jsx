export default function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <span>Aadi Jain</span> · Delhi, India · <span>{new Date().getFullYear()}</span>
        <span style={{ marginLeft: 12, color: 'var(--white-3)' }}>
          Built with precision — no templates.
        </span>
      </div>
      <div className="footer-right">
        THE <em>PIT</em> WALL
      </div>
    </footer>
  )
}
