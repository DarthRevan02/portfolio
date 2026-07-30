import SectionHeader from './SectionHeader'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" style={{ paddingTop: 80 }}>
      <SectionHeader num="04" title="Pro" emphasis="jects" noSpace />

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className={`proj-card${p.featured ? ' featured' : ''} reveal`} key={i}>
            <div className="proj-header">
              <span className={`proj-type ${p.type}`}>{p.typeLabel}</span>
              <div className="proj-links">
                {p.links.map((l, j) => (
                  <a
                    key={j}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-link"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="proj-body">
              <div className="proj-name">{p.name}</div>

              {p.stats && (
                <div className="proj-stat-row">
                  {p.stats.map((s, j) => (
                    <div className="proj-stat" key={j}>
                      <div className="proj-stat-val">{s.val}</div>
                      <div className="proj-stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="proj-desc">{p.desc}</div>

              {p.highlights && (
                <ul className="proj-highlights">
                  {p.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              )}

              <div className="proj-tags">
                {p.tags.map((t, j) => (
                  <span className="proj-tag" key={j}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
