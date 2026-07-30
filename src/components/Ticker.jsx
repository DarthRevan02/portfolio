import { tickerItems } from '../data/portfolioData'

export default function Ticker() {
  // Duplicate the list so the CSS "ticker" keyframe (translateX -50%) loops seamlessly
  const doubled = [...tickerItems, ...tickerItems]

  return (
    <div className="ticker-strip">
      <div className="ticker-track">
        {doubled.map((it, i) => (
          <span className="t-tick" key={i}>
            <span className="hi">{it.hi}</span>
            <span className="sep">◆</span>
            {it.txt}
          </span>
        ))}
      </div>
    </div>
  )
}
