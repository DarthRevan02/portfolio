import { useEffect } from 'react'

// Observes all elements with class "reveal" and adds "visible" when in view.
// Re-runs observation whenever `deps` change (e.g. after content mounts).
export default function useReveal(deps = []) {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.12 }
    )
    const els = document.querySelectorAll('.reveal')
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
