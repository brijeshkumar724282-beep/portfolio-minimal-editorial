import { useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import WorkSection, { WorkModal } from './components/WorkSection.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  const [theme, setTheme] = useState('light')
  const [activeWork, setActiveWork] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem('folio-theme')
    if (saved === 'dark' || saved === 'light') {
      setTheme(saved)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('folio-theme', theme)
  }, [theme])

  useEffect(() => {
    document.body.style.overflow = activeWork ? 'hidden' : ''
  }, [activeWork])

  return (
    <div className="min-h-screen bg-paper text-ink dark:bg-night dark:text-paper transition-colors duration-300">
      <Nav theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main>
        <Hero />
        <WorkSection onSelect={setActiveWork} />
        <About />
        <Services />
        <Contact />
      </main>
      <WorkModal work={activeWork} onClose={() => setActiveWork(null)} />
    </div>
  )
}
