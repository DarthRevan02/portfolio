import SectionHeader from './SectionHeader'
import { skills } from '../data/portfolioData'

function SkillGroup({ group }) {
  return (
    <div className="skill-group">
      <div className="skill-group-name">{group.name}</div>
      <div className="skill-chips">
        {group.chips.map((c, i) => (
          <span className={`chip${c.hot ? ' hot' : ''}`} key={i}>
            {c.label}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ paddingTop: 80 }}>
      <SectionHeader num="05" title="Tech" emphasis="Stack" />

      <div className="skills-layout reveal">
        <div className="skills-col">
          {skills.col1.map((g, i) => (
            <SkillGroup group={g} key={i} />
          ))}
        </div>
        <div className="skills-col">
          {skills.col2.map((g, i) => (
            <SkillGroup group={g} key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
