import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useReveal from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <Ticker />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}
