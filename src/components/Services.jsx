import { services, testimonials } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm tracking-widest uppercase opacity-60">Index 03</p>
          <h2 className="serif-display text-4xl md:text-6xl mt-2">Services</h2>
          <p className="mt-4 opacity-70 max-w-measure">
            Clear offers, calm process, honest timelines. Every project begins
            with a conversation and a short sample.
          </p>
        </Reveal>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="paper-card rounded-2xl p-7 h-full flex flex-col">
                <p className="text-sm opacity-50">{s.n}</p>
                <h3 className="serif-display text-2xl mt-2">{s.title}</h3>
                <p className="mt-3 opacity-70 leading-relaxed flex-1">{s.text}</p>
                <p className="mt-6 text-sm tracking-wide text-accent">{s.price}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <h3 className="serif-display text-3xl md:text-4xl mt-16">Kind words</h3>
        </Reveal>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="paper-card rounded-2xl p-7 h-full flex flex-col">
                <div className="serif-display text-4xl text-accent">“</div>
                <blockquote className="opacity-80 leading-relaxed flex-1">{t.quote}</blockquote>
                <figcaption className="mt-6">
                  <p>{t.name}</p>
                  <p className="text-sm opacity-60">{t.detail}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
