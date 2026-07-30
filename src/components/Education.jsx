import SectionHeader from './SectionHeader'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" style={{ paddingTop: 80 }}>
      <SectionHeader num="02" title="Edu" emphasis="cation" noSpace />

      <div className="edu-grid reveal">
        {education.map((e, i) => {
          const isIit = e.variant === 'iit'
          const isMuted = e.variant === 'muted'
          return (
            <div
              className={`edu-card${isIit ? ' iit' : ''}${isMuted ? ' muted' : ''}`}
              key={i}
            >
              <div
                className="edu-tag"
                style={isMuted ? { color: 'var(--white-3)', background: 'rgba(0,0,0,0.045)' } : undefined}
              >
                {e.tag}
              </div>
              <div className="edu-school">{e.school}</div>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-period">{e.period}</div>
              {e.cgpa && (
                <div className="edu-cgpa">
                  {e.cgpa} <span>CGPA</span>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
