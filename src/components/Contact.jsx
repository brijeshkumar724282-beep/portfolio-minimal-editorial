import { useState } from 'react'
import Reveal from './Reveal.jsx'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [details, setDetails] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Project inquiry from ${name || 'a reader'}`
    const body = `${details}\n\nFrom: ${name}\nReply to: ${email}`
    const href = `mailto:hello@mayaellis.example?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
    window.location.href = href
    setSent(true)
  }

  return (
    <section id="contact" className="pt-16 md:pt-24 pb-10">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="rounded-3xl bg-ink text-paper dark:bg-paper dark:text-night p-8 md:p-14 grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-sm tracking-widest uppercase opacity-60">Index 04</p>
              <h2 className="serif-display text-4xl md:text-6xl mt-2">
                Tell me about your project
              </h2>
              <p className="mt-4 opacity-70 leading-relaxed max-w-measure">
                Currently booking essays and photo series for spring and summer.
                Share a few lines and I will reply within three days.
              </p>
              <div className="mt-8 text-sm opacity-80 space-y-2">
                <p>hello@mayaellis.example</p>
                <p>Lisbon · Working worldwide</p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="cname" className="text-sm opacity-70">
                  Your name
                </label>
                <input
                  id="cname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="mt-1 w-full rounded-xl px-4 py-3 bg-transparent border border-current/20 outline-none focus:border-current placeholder:opacity-40"
                  style={{ borderColor: 'currentColor' }}
                />
              </div>
              <div>
                <label htmlFor="cemail" className="text-sm opacity-70">
                  Email
                </label>
                <input
                  id="cemail"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  className="mt-1 w-full rounded-xl px-4 py-3 bg-transparent border outline-none placeholder:opacity-40"
                  style={{ borderColor: 'currentColor' }}
                />
              </div>
              <div>
                <label htmlFor="cdetails" className="text-sm opacity-70">
                  Project details
                </label>
                <textarea
                  id="cdetails"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Tell me about your project"
                  required
                  rows={4}
                  className="mt-1 w-full rounded-xl px-4 py-3 bg-transparent border outline-none placeholder:opacity-40"
                  style={{ borderColor: 'currentColor' }}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-accent text-paper px-6 py-3 text-sm tracking-wide hover:opacity-90 transition"
              >
                Send message
              </button>
              <p className="text-xs opacity-60">
                This form opens your email app. No data is stored.
              </p>
              {sent && (
                <p className="text-sm">
                  Thank you. Your email app should now be open.
                </p>
              )}
            </form>
          </div>
        </Reveal>

        <footer className="mt-10 pt-6 border-t rule flex flex-col md:flex-row gap-3 items-start md:items-center justify-between text-sm opacity-70">
          <p>© 2026 Maya Ellis. All rights reserved.</p>
          <p>Set in Newsreader and Inter. Printed with care.</p>
          <a href="#top" className="hover:text-accent transition">
            Back to top
          </a>
        </footer>
      </div>
    </section>
  )
}
