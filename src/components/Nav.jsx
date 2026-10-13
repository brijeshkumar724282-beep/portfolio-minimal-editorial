import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Nav({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled
          ? 'bg-paper/90 dark:bg-night/90 backdrop-blur border-b rule'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="serif-display text-xl">
          M. Ellis
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="opacity-70 hover:opacity-100 hover:text-accent transition"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="paper-card rounded-full px-4 py-1.5 text-sm"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </nav>
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="paper-card rounded-full px-4 py-1.5 text-sm"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="paper-card rounded-full px-4 py-1.5 text-sm"
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-paper dark:bg-night border-b rule"
          >
            <div className="px-6 py-4 flex flex-col gap-4 text-lg">
              {links.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
