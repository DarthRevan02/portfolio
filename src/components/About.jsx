import SectionHeader from './SectionHeader'
import { aboutStats } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about">
      <SectionHeader num="01" title="About" emphasis="Me" />

      <div className="about-grid reveal">
        <div className="about-text">
          <p>
            I'm an engineering student at <strong>USICT, GGSIPU</strong> pursuing B.Tech in
            Information Technology, simultaneously enrolled in <strong>IIT Madras's B.S. Data
            Science</strong> programme — because one degree clearly wasn't enough.
          </p>
          <p>
            I build things that blend <em>analytical rigour with interactive design</em> —
            scalable backend APIs, probabilistic championship simulators, physics-based game
            systems, and neural evolution demos. If it involves data, racing, or algorithms,
            I'm already interested.
          </p>
          <p>
            When I'm not pushing commits, I'm co-heading Valorant esports at IIT Madras,
            organizing game dev workshops, or running <strong>F1 Monte Carlo simulations</strong>{' '}
            predicting championship outcomes before the engineers do.
          </p>
          <div className="location-badge">
            <span className="dot"></span>Delhi, India · Available for Internships
          </div>
        </div>

        <div>
          <div className="about-stats">
            {aboutStats.map((s, i) => (
              <div className="about-stat" key={i}>
                <div className="about-stat-num">
                  {s.num}
                  {s.em && <em>{s.em}</em>}
                </div>
                <div className="about-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="terminal" style={{ marginTop: 2 }}>
            <div className="term-bar">
              <div className="term-dot"></div>
              <div className="term-dot"></div>
              <div className="term-dot"></div>
              <span className="term-title">profile.json — zsh</span>
            </div>
            <div className="term-body">
              <span className="term-line">
                <span className="t-prompt">$ </span>
                <span className="t-cmd">cat profile.json</span>
              </span>
              <span className="term-line">
                <span className="t-bracket">{'{'}</span>
              </span>
              <span className="term-line t-indent">
                <span className="t-key">"name"</span>: <span className="t-str">"Aadi Jain"</span>,
              </span>
              <span className="term-line t-indent">
                <span className="t-key">"role"</span>:{' '}
                <span className="t-str">"Game Dev, DS &amp; AI/ML"</span>,
              </span>
              <span className="term-line t-indent">
                <span className="t-key">"passion"</span>:{' '}
                <span className="t-str">"F1 + Algorithms"</span>,
              </span>
              <span className="term-line t-indent">
                <span className="t-key">"openToWork"</span>: <span className="t-bool">true</span>,
              </span>
              <span className="term-line t-indent">
                <span className="t-key">"coffee"</span>: <span className="t-str">"∞"</span>
              </span>
              <span className="term-line">
                <span className="t-bracket">{'}'}</span>
              </span>
              <span className="term-line" style={{ marginTop: 8 }}>
                <span className="t-prompt">$ </span>
                <span className="t-comment">// currently executing...</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
