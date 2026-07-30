import { useState } from 'react'
import SectionHeader from './SectionHeader'
import WorkJourney from './WorkJourney'
import { experience } from '../data/portfolioData'
import '../styles/workJourney.css'

export default function Experience() {
  const [journeyOpen, setJourneyOpen] = useState(false)

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

              {e.org.includes('Heighers') && (
                <button
                  type="button"
                  className="wj-trigger"
                  onClick={() => setJourneyOpen(true)}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 13l2-6a2 2 0 0 1 2-1.4h10a2 2 0 0 1 2 1.4l2 6" />
                    <path d="M3 13h18v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4z" />
                    <circle cx="7.5" cy="18" r="1.5" />
                    <circle cx="16.5" cy="18" r="1.5" />
                  </svg>
                  View Work History
                </button>
              )}
            </div>
            <div className="exp-date">
              {e.date}
              <br />
              {e.place}
            </div>
          </div>
        ))}
      </div>

      <WorkJourney open={journeyOpen} onClose={() => setJourneyOpen(false)} />
    </section>
  )
}
