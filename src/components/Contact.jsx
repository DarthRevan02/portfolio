import SectionHeader from './SectionHeader'
import { contactLinks } from '../data/portfolioData'

export default function Contact() {
  return (
    <section id="contact" style={{ paddingTop: 80, paddingBottom: 64 }}>
      <SectionHeader num="06" title="Get In" emphasis="Touch" />

      <div className="contact-wrap reveal">
        <div className="contact-left">
          <div className="contact-tagline">
            Let's build something <strong>fast, data-driven,</strong> and slightly obsessed with F1.
          </div>
          <div className="contact-links">
            {contactLinks.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="contact-link"
              >
                <div className="contact-link-label">
                  <span className="ico">{c.icon}</span> {c.label}
                </div>
                <div className="contact-link-val">{c.value}</div>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-right">
          <div className="contact-big">
            AADI
            <br />
            JAIN
          </div>
          <a href="mailto:aadiankitjain05@gmail.com" className="contact-cta">
            Send a Message <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
