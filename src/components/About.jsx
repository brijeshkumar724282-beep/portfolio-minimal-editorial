import { timeline } from '../data.js'
import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Reveal>
            <p className="text-sm tracking-widest uppercase opacity-60">Index 02</p>
            <h2 className="serif-display text-4xl md:text-6xl mt-2">About</h2>
            <div className="mt-6 paper-card rounded-2xl overflow-hidden">
              <img
                src="https://picsum.photos/seed/editorialportrait/800/900"
                alt="Portrait of the author in soft light"
                loading="lazy"
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <p className="serif-display text-2xl">Slow work, clear prose</p>
                <p className="mt-2 opacity-70 leading-relaxed">
                  I write and photograph books, essays and rooms where people can
                  stay a while. My method is simple: listen long, edit with care,
                  print what lasts.
                </p>
                <div className="mt-4 flex gap-6 text-sm">
                  <div>
                    <p className="serif-display text-3xl">12</p>
                    <p className="opacity-60">Years of practice</p>
                  </div>
                  <div>
                    <p className="serif-display text-3xl">40</p>
                    <p className="opacity-60">Pieces published</p>
                  </div>
                  <div>
                    <p className="serif-display text-3xl">9</p>
                    <p className="opacity-60">Print awards</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-7">
          <Reveal delay={0.1}>
            <p className="text-sm opacity-70 leading-relaxed max-w-measure">
              After a decade in journals and libraries, I now work independently
              with editors, curators and small presses. I take on a few projects
              per year so each one gets full attention.
            </p>
          </Reveal>
          <div className="mt-8 border-t rule">
            {timeline.map((t, i) => (
              <Reveal key={t.role} delay={Math.min(i * 0.06, 0.2)}>
                <div className="py-6 border-b rule grid md:grid-cols-12 gap-2">
                  <p className="md:col-span-4 text-sm opacity-60">{t.period}</p>
                  <div className="md:col-span-8">
                    <p className="text-lg">{t.role}</p>
                    <p className="text-sm text-accent">{t.place}</p>
                    <p className="mt-2 opacity-70 leading-relaxed">{t.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
