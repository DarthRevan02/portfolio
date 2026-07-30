import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // Skip the custom cursor on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    document.body.style.cursor = 'none'
    const dot = dotRef.current
    const ring = ringRef.current
    let mx = 0, my = 0, rx = 0, ry = 0
    let raf

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top = my + 'px'
    }

    const animRing = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      raf = requestAnimationFrame(animRing)
    }
    animRing()

    document.addEventListener('mousemove', onMove)

    const onEnter = () => dot.classList.add('on-link')
    const onLeave = () => dot.classList.remove('on-link')
    const interactive = document.querySelectorAll('a,button')
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.body.style.cursor = 'auto'
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      interactive.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={dotRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
    </>
  )
}
