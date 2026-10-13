import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  return (
    <section id="top" className="pt-32 md:pt-40 pb-16 md:pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex items-center gap-3 paper-card rounded-full pl-3 pr-5 py-1.5 text-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="dot-pulse absolute inline-flex h-full w-full rounded-full bg-accent" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
          </span>
          <span className="tracking-wide">Available for new projects</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="serif-display text-5xl md:text-8xl mt-8 max-w-5xl"
        >
          Stories with
          <br />
          space to breathe.
        </motion.h1>

        <div className="mt-8 md:mt-10 grid md:grid-cols-12 gap-8 items-end">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            className="md:col-span-6 text-lg md:text-xl leading-relaxed opacity-80 max-w-measure"
          >
            I am Maya Ellis, a writer and photographer shaping essays, books and
            visual narratives for curious readers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="md:col-span-6 flex flex-wrap gap-3 md:justify-end"
          >
            <a
              href="#work"
              className="rounded-full bg-ink text-paper dark:bg-paper dark:text-night px-6 py-3 text-sm tracking-wide hover:bg-accent dark:hover:bg-accent dark:hover:text-paper transition"
            >
              View selected work
            </a>
            <a
              href="#contact"
              className="rounded-full paper-card px-6 py-3 text-sm tracking-wide hover:border-accent hover:text-accent transition"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-14 md:mt-20 pt-6 border-t rule grid grid-cols-2 md:grid-cols-4 gap-4 text-sm opacity-70"
        >
          <div>Based in Lisbon</div>
          <div>Booking for 2026</div>
          <div>Previously with Field Notes</div>
          <div className="text-left md:text-right">Scroll to explore</div>
        </motion.div>
      </div>
    </section>
  )
}
