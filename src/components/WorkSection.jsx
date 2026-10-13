import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { works } from '../data.js'
import Reveal from './Reveal.jsx'

export default function WorkSection({ onSelect }) {
  const [preview, setPreview] = useState(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMove = (e) => {
    setPos({ x: e.clientX, y: e.clientY })
  }

  return (
    <section id="work" className="py-16 md:py-24" onMouseMove={handleMove}>
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-end justify-between border-b rule pb-6">
            <div>
              <p className="text-sm tracking-widest uppercase opacity-60">Index 01</p>
              <h2 className="serif-display text-4xl md:text-6xl mt-2">Selected work</h2>
            </div>
            <p className="hidden md:block text-sm opacity-60 max-w-measure">
              Six recent pieces. Hover to preview, select to read more.
            </p>
          </div>
        </Reveal>

        <div className="mt-2">
          {works.map((w, i) => (
            <Reveal key={w.id} delay={Math.min(i * 0.05, 0.2)}>
              <button
                onClick={() => onSelect(w)}
                onMouseEnter={() => setPreview(w)}
                onMouseLeave={() => setPreview(null)}
                className="work-row group w-full text-left border-b rule py-6 md:py-8 grid grid-cols-12 gap-3 items-center hover:bg-white dark:hover:bg-white/5 px-2 md:px-4 rounded-sm"
              >
                <span className="col-span-2 md:col-span-1 text-sm opacity-50">{w.index}</span>
                <span className="col-span-10 md:col-span-6">
                  <span className="serif-display text-2xl md:text-4xl block group-hover:text-accent transition">
                    {w.title}
                  </span>
                  <span className="md:hidden block mt-2 text-sm opacity-60">
                    {w.category} · {w.year}
                  </span>
                  <img
                    src={w.image}
                    alt={`Preview of ${w.title}`}
                    loading="lazy"
                    className="md:hidden mt-4 rounded-lg w-full h-48 object-cover"
                  />
                </span>
                <span className="hidden md:block md:col-span-3 text-sm opacity-60">
                  {w.category}
                </span>
                <span className="hidden md:block md:col-span-1 text-sm opacity-60">{w.year}</span>
                <span className="hidden md:flex md:col-span-1 justify-end">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border rule group-hover:bg-accent group-hover:text-paper group-hover:border-accent transition text-lg">
                    →
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {preview && (
          <motion.div
            key="preview"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-none hidden md:block fixed z-30 w-72 h-48 rounded-xl overflow-hidden shadow-2xl"
            style={{
              left: pos.x + 24,
              top: pos.y - 96,
              backgroundColor: preview.tint
            }}
          >
            <img
              src={preview.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export function WorkModal({ work, onClose }) {
  return (
    <AnimatePresence>
      {work && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6"
          style={{ backgroundColor: 'rgba(20,20,18,0.55)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="bg-paper dark:bg-night w-full max-w-3xl max-h-[90vh] overflow-auto rounded-t-2xl md:rounded-2xl"
          >
            <div className="relative">
              <img src={work.image} alt={`Preview of ${work.title}`} className="w-full h-64 md:h-80 object-cover" />
              <button
                onClick={onClose}
                aria-label="Close detail view"
                className="absolute top-4 right-4 rounded-full bg-paper dark:bg-night px-5 py-2 text-sm shadow"
              >
                Close
              </button>
            </div>
            <div className="p-6 md:p-10">
              <p className="text-sm tracking-widest uppercase opacity-60">
                {work.category} · {work.year}
              </p>
              <h3 className="serif-display text-3xl md:text-5xl mt-2">{work.title}</h3>
              <div className="grid md:grid-cols-3 gap-4 mt-6 text-sm">
                <div className="paper-card rounded-xl p-4">
                  <p className="opacity-60">Role</p>
                  <p className="mt-1">{work.role}</p>
                </div>
                <div className="paper-card rounded-xl p-4">
                  <p className="opacity-60">Client</p>
                  <p className="mt-1">{work.client}</p>
                </div>
                <div className="paper-card rounded-xl p-4">
                  <p className="opacity-60">Year</p>
                  <p className="mt-1">{work.year}</p>
                </div>
              </div>
              <p className="mt-6 text-lg leading-relaxed opacity-90">{work.summary}</p>
              <div className="mt-6 rounded-xl p-5 bg-accentsoft dark:bg-white/5 border-l-4 border-accent">
                <p className="text-sm tracking-wide uppercase opacity-60">Outcome</p>
                <p className="mt-1">{work.outcome}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
