import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

/**
 * WorkJourney — full-screen animated career timeline.
 *
 * A car drives along a curved SVG road. As it passes each milestone,
 * that milestone's glass card fades + scales into view and the road
 * behind the car lights up as "completed".
 *
 * Self-contained: only depends on React state + requestAnimationFrame,
 * no animation library required.
 */

const MILESTONES = [
  {
    id: 'volunteer',
    role: 'Volunteer',
    org: 'Heighers eSports · IIT Madras',
    period: 'Feb 2025 – Sep 2025',
    detail: 'Joined the Valorant division, supporting matchmaking, bracket operations and live-event logistics for community tournaments.',
    tag: '01',
  },
  {
    id: 'cohead',
    role: 'Co-Head',
    org: 'Valorant Division',
    period: 'Sep 2025 – Dec 2025',
    detail: 'Co-led "Astra 4.0" and "Aarambh 4.0" — owning data, matchmaking and live hosting. Grew registrations and YouTube viewership by 100% through targeted promotion.',
    tag: '02',
  },
  {
    id: 'head',
    role: 'Head',
    org: 'Valorant Division',
    period: 'Dec 2025 – Present',
    detail: 'Leading the division end-to-end: community engagement, PR and event strategy for Heighers eSports\' flagship competitive events.',
    tag: '03',
  },
]

// Path anchor points (in a 1000x600 viewBox) the road/car travels through.
// A gentle branching "grows" as the car passes each node.
const NODES = [
  { x: 90, y: 480 },
  { x: 330, y: 480 },
  { x: 560, y: 260 },
  { x: 860, y: 130 },
]

function buildPath(nodes) {
  let d = `M ${nodes[0].x} ${nodes[0].y}`
  for (let i = 1; i < nodes.length; i++) {
    const p0 = nodes[i - 1]
    const p1 = nodes[i]
    const c1x = p0.x + (p1.x - p0.x) * 0.5
    const c1y = p0.y
    const c2x = p0.x + (p1.x - p0.x) * 0.5
    const c2y = p1.y
    d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p1.x} ${p1.y}`
  }
  return d
}

const FULL_PATH_D = buildPath(NODES)
// Milestone markers sit at the 3 node arrival points (skipping the start node)
const MARKER_NODES = NODES.slice(1)

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

export default function WorkJourney({ open, onClose }) {
  const pathRef = useRef(null)
  const svgRef = useRef(null)
  const stageRef = useRef(null)
  const trailRef = useRef(null)
  const carRef = useRef(null)
  const rafRef = useRef(null)
  const startRef = useRef(null)

  const [pathLength, setPathLength] = useState(0)
  const [progress, setProgress] = useState(0) // 0..1
  const [visibleCount, setVisibleCount] = useState(0)
  const [glowIndex, setGlowIndex] = useState(-1)
  const [cardPositions, setCardPositions] = useState(null) // [{left, top}] in px, relative to .wj-stage
  const [particles] = useState(() =>
    Array.from({ length: 22 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 10 + Math.random() * 10,
      size: 3 + Math.random() * 5,
      drift: (Math.random() - 0.5) * 60,
    }))
  )

  const DURATION_MS = 5200

  // Measure path length + compute real on-screen card positions from the SVG nodes
  useEffect(() => {
    if (!open) return

    function measure() {
      if (!pathRef.current || !svgRef.current || !stageRef.current) return
      setPathLength(pathRef.current.getTotalLength())

      const svg = svgRef.current
      const stageBox = stageRef.current.getBoundingClientRect()
      const pt = svg.createSVGPoint()
      const ctm = svg.getScreenCTM()
      if (!ctm) return

      const positions = MARKER_NODES.map((n) => {
        pt.x = n.x
        pt.y = n.y
        const screenPt = pt.matrixTransform(ctm)
        return {
          left: screenPt.x - stageBox.left,
          top: screenPt.y - stageBox.top,
        }
      })
      setCardPositions(positions)
    }

    // measure after layout settles
    const raf = requestAnimationFrame(measure)
    window.addEventListener('resize', measure)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', measure)
    }
  }, [open])

  // Drive the animation
  useEffect(() => {
    if (!open || !pathLength) return

    setProgress(0)
    setVisibleCount(0)
    setGlowIndex(-1)
    startRef.current = null

    // Progress (0..1) at which each milestone marker is reached,
    // based on approximate arc-length position of each node.
    const markerProgress = MARKER_NODES.map((_, i) => (i + 1) / NODES.length)

    function step(ts) {
      if (startRef.current === null) startRef.current = ts
      const elapsed = ts - startRef.current
      const t = Math.min(elapsed / DURATION_MS, 1)
      const eased = easeInOutCubic(t)
      setProgress(eased)

      markerProgress.forEach((mp, i) => {
        if (eased >= mp) {
          setVisibleCount((v) => (v <= i ? i + 1 : v))
        }
      })

      if (t < 1) {
        rafRef.current = requestAnimationFrame(step)
      }
    }

    rafRef.current = requestAnimationFrame(step)
    return () => rafRef.current && cancelAnimationFrame(rafRef.current)
  }, [open, pathLength])

  // Brief glow pulse whenever a new milestone becomes visible
  useEffect(() => {
    if (visibleCount === 0) return
    const idx = visibleCount - 1
    setGlowIndex(idx)
    const t = setTimeout(() => setGlowIndex(-1), 900)
    return () => clearTimeout(t)
  }, [visibleCount])

  // Lock body scroll while open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = prev }
    }
  }, [open])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    function onKey(e) { if (e.key === 'Escape') onClose?.() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const carPoint = useMemo(() => {
    if (!pathRef.current || !pathLength) return { x: NODES[0].x, y: NODES[0].y, angle: 0 }
    const len = progress * pathLength
    const p = pathRef.current.getPointAtLength(len)
    const p2 = pathRef.current.getPointAtLength(Math.min(len + 1, pathLength))
    const angle = Math.atan2(p2.y - p.y, p2.x - p.x) * (180 / Math.PI)
    return { x: p.x, y: p.y, angle }
  }, [progress, pathLength])

  const trailDashoffset = pathLength ? pathLength * (1 - progress) : 0

  if (!open) return null

  return createPortal(
    <div className="wj-overlay" role="dialog" aria-modal="true" aria-label="Work journey timeline">
      <div className="wj-bg-parallax" aria-hidden="true">
        <div className="wj-glow wj-glow-a" />
        <div className="wj-glow wj-glow-b" />
        <div className="wj-grid" />
        {particles.map((p) => (
          <span
            key={p.id}
            className="wj-particle"
            style={{
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              '--drift': `${p.drift}px`,
            }}
          />
        ))}
      </div>

      <button className="wj-close" onClick={onClose} aria-label="Close work journey">
        <span />
        <span />
      </button>

      <div className="wj-header">
        <span className="wj-eyebrow">§ Career Trajectory</span>
        <h2 className="wj-title">Work <em>Journey</em></h2>
      </div>

      <div className="wj-stage" ref={stageRef}>
        <svg
          ref={svgRef}
          className="wj-road-svg"
          viewBox="0 0 1000 600"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="wj-trail-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#005AFF" />
              <stop offset="55%" stopColor="#00D2BE" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <filter id="wj-blur-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* base unlit road */}
          <path
            ref={pathRef}
            d={FULL_PATH_D}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* growing lit trail behind the car */}
          {pathLength > 0 && (
            <path
              d={FULL_PATH_D}
              fill="none"
              stroke="url(#wj-trail-grad)"
              strokeWidth="6"
              strokeLinecap="round"
              filter="url(#wj-blur-glow)"
              strokeDasharray={pathLength}
              strokeDashoffset={trailDashoffset}
              style={{ transition: 'stroke-dashoffset 0.05s linear' }}
            />
          )}

          {/* milestone marker nodes */}
          {MARKER_NODES.map((n, i) => {
            const revealed = visibleCount > i
            const glowing = glowIndex === i
            return (
              <g key={i} className={`wj-node ${revealed ? 'is-on' : ''} ${glowing ? 'is-glow' : ''}`}>
                <circle cx={n.x} cy={n.y} r={glowing ? 22 : 14} className="wj-node-halo" />
                <circle cx={n.x} cy={n.y} r="7" className="wj-node-dot" />
              </g>
            )
          })}

          {/* start marker */}
          <circle cx={NODES[0].x} cy={NODES[0].y} r="6" fill="#FFD100" />

          {/* car */}
          {pathLength > 0 && (
            <g transform={`translate(${carPoint.x}, ${carPoint.y}) rotate(${carPoint.angle})`}>
              <g filter="url(#wj-blur-glow)">
                <ellipse cx="0" cy="10" rx="16" ry="4" fill="rgba(0,0,0,0.35)" />
                <g transform="translate(-16,-8)">
                  <rect x="0" y="6" width="32" height="10" rx="5" fill="#DC0000" />
                  <rect x="8" y="0" width="16" height="9" rx="4" fill="#1A1A1A" />
                  <circle cx="7" cy="16" r="4" fill="#1A1A1A" />
                  <circle cx="25" cy="16" r="4" fill="#1A1A1A" />
                  <rect x="10" y="2" width="12" height="4" rx="2" fill="#00D2BE" opacity="0.85" />
                </g>
              </g>
            </g>
          )}
        </svg>

        <div className="wj-cards">
          {MILESTONES.map((m, i) => {
            const pos = cardPositions?.[i]
            return (
              <div
                key={m.id}
                className={`wj-card wj-card-${i} ${visibleCount > i ? 'is-visible' : ''} ${glowIndex === i ? 'is-glow' : ''}`}
                style={{
                  transitionDelay: `${i * 40}ms`,
                  ...(pos ? { left: pos.left, top: pos.top } : {}),
                }}
              >
                <span className="wj-card-tag">{m.tag}</span>
                <h3 className="wj-card-role">{m.role}</h3>
                <p className="wj-card-org">{m.org}</p>
                <p className="wj-card-period">{m.period}</p>
                <p className="wj-card-detail">{m.detail}</p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="wj-progress-bar">
        <div className="wj-progress-fill" style={{ width: `${progress * 100}%` }} />
      </div>
    </div>,
    document.body
  )
}
