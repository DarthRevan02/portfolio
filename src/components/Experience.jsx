import SectionHeader from './SectionHeader'
import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" style={{ paddingTop: 80 }}>
      <SectionHeader num="03" title="Experi" emphasis="ence" noSpace />

      <div className="exp-list">
        {experience.map((e, i) => (
          <div className="exp-item reveal" key={i}>
            <div className="exp-icon">{e.icon}</div>
            <div>
              <div className="exp-org">{e.org}</div>
              <div className="exp-role">{e.role}</div>
              <ul className="exp-bullets">
                {e.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="exp-date">
              {e.date}
              <br />
              {e.place}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
