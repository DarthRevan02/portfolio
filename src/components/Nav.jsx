import { useEffect, useState } from 'react'
import { nav } from '../data/portfolioData'

export default function Nav() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const secs = document.querySelectorAll('section[id]')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { threshold: 0.4 }
    )
    secs.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <div className="accent-bar"></div>
      <nav>
        <a href="#" className="nav-logo">
          <span className="rb-dot"></span>
          AADI JAIN
        </a>
        <div className="nav-links">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{ color: active === item.href.slice(1) ? 'var(--white)' : undefined }}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta">Get In Touch</a>
        </div>
      </nav>
    </>
  )
}
