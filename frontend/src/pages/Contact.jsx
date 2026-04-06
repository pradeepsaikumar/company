import { useState } from 'react'
import axios from 'axios'

const SERVICES = ['Web Development', 'Mobile App', 'UI/UX Design', 'Digital Marketing', 'SEO', 'Other']

const infoCards = [
  { icon: '📍', label: 'Location',      val: 'Vijayawada, Andhra Pradesh' },
  { icon: '📧', label: 'Email',         val: 'hello@deeprapit.com' },
  { icon: '📞', label: 'Phone',         val: '+91 98765 43210' },
  { icon: '🕐', label: 'Response Time', val: 'Within 24 hours' },
]

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' })
  const [status, setStatus]   = useState('')
  const [loading, setLoading] = useState(false)

  const ch = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async e => {
    e.preventDefault(); setLoading(true)
    try {
      await axios.post('https://company-0bf4.onrender.com/api/contact', form)
      setStatus('ok')
      setForm({ name: '', email: '', phone: '', service: '', budget: '', message: '' })
    } catch { setStatus('err') }
    finally { setLoading(false) }
  }

  const fieldStyle = {
    width: '100%', padding: '0.75rem 1rem',
    background: 'var(--surface2)',
    border: '1px solid var(--border2)',
    color: 'var(--text)', fontFamily: 'var(--font-body)',
    fontSize: '0.875rem', outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  }
  const focus = e => { e.target.style.borderColor = 'var(--neon)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,221,184,0.07)' }
  const blur  = e => { e.target.style.borderColor = 'var(--border2)'; e.target.style.boxShadow = 'none' }

  return (
    <div style={{ background: 'var(--bg)', paddingTop: '68px' }}>

      {/* ── Hero — compact strip, not half screen ── */}
      <section
        className="grid-bg relative overflow-hidden"
        style={{ padding: '3.5rem 1.5rem 2.5rem' }}
      >
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 60% 50%, rgba(14,165,233,0.05) 0%, transparent 65%)',
        }} />
        <div className="max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label reveal">// Contact</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between" style={{ gap: '1rem' }}>
            <h1
              className="reveal reveal-delay-1"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                fontWeight: 800,
                color: 'var(--text)',
                letterSpacing: '-0.025em',
                lineHeight: 1.08,
              }}
            >
              LET'S BUILD<br /><span className="grad-text">SOMETHING GREAT</span>
            </h1>
            <p
              className="reveal reveal-delay-2"
              style={{
                color: 'var(--text-dim)',
                maxWidth: 340,
                lineHeight: 1.7,
                fontSize: '0.9rem',
                flexShrink: 0,
              }}
            >
              Tell us about your project. We respond within 24 hours — usually much faster.
            </p>
          </div>
        </div>
      </section>

      {/* ── Form + Info — immediately below hero ── */}
      <section style={{ padding: '2rem 1.5rem 5rem' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3" style={{ gap: '1.5rem', alignItems: 'start' }}>

          {/* Info sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {infoCards.map(info => (
              <div
                key={info.label}
                className="neon-card"
                style={{ padding: '1rem 1.25rem', display: 'flex', gap: '0.875rem', alignItems: 'center' }}
              >
                <span style={{ fontSize: '1.1rem', lineHeight: 1, flexShrink: 0 }}>{info.icon}</span>
                <div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--neon)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                    {info.label}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>{info.val}</p>
                </div>
              </div>
            ))}

            <div
              className="neon-card"
              style={{ padding: '1.25rem', borderColor: 'rgba(0,221,184,0.2)', marginTop: '0.25rem' }}
            >
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 700, color: 'var(--neon)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                ⚡ QUICK RESPONSE
              </p>
              <p style={{ fontSize: '0.83rem', color: 'var(--text-dim)', lineHeight: 1.7 }}>
                Every enquiry is reviewed personally and matched with the right person on our team.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="neon-card" style={{ padding: '2rem' }}>
              {status === 'ok' ? (
                <div style={{ textAlign: 'center', padding: '3.5rem 1rem' }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: '50%',
                    background: 'rgba(0,221,184,0.1)',
                    border: '1px solid var(--neon)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 1.25rem',
                    fontSize: '1.4rem',
                  }}>
                    ✓
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--neon)', marginBottom: '0.6rem' }}>
                    MESSAGE RECEIVED
                  </h3>
                  <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                    We'll be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--text-faint)', letterSpacing: '0.12em', marginBottom: '0.35rem' }}>
                        FULL NAME *
                      </label>
                      <input name="name" value={form.name} onChange={ch} required placeholder="Your name" style={fieldStyle} onFocus={focus} onBlur={blur} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--text-faint)', letterSpacing: '0.12em', marginBottom: '0.35rem' }}>
                        EMAIL *
                      </label>
                      <input type="email" name="email" value={form.email} onChange={ch} required placeholder="your@email.com" style={fieldStyle} onFocus={focus} onBlur={blur} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--text-faint)', letterSpacing: '0.12em', marginBottom: '0.35rem' }}>
                        PHONE
                      </label>
                      <input name="phone" value={form.phone} onChange={ch} placeholder="+91 xxxxx xxxxx" style={fieldStyle} onFocus={focus} onBlur={blur} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--text-faint)', letterSpacing: '0.12em', marginBottom: '0.35rem' }}>
                        SERVICE
                      </label>
                      <select name="service" value={form.service} onChange={ch} style={{ ...fieldStyle, cursor: 'pointer' }} onFocus={focus} onBlur={blur}>
                        <option value="">Select a service</option>
                        {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--text-faint)', letterSpacing: '0.12em', marginBottom: '0.35rem' }}>
                      BUDGET RANGE
                    </label>
                    <select name="budget" value={form.budget} onChange={ch} style={{ ...fieldStyle, cursor: 'pointer' }} onFocus={focus} onBlur={blur}>
                      <option value="">Select budget</option>
                      {['< ₹15,000', '₹15,000 – 45,000', '₹45,000 – 1,00,000', '₹1,00,000+', "Let's discuss"].map(b => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--text-faint)', letterSpacing: '0.12em', marginBottom: '0.35rem' }}>
                      MESSAGE *
                    </label>
                    <textarea
                      name="message" value={form.message} onChange={ch} required
                      rows={5}
                      placeholder="Tell us about your project, goals, and timeline..."
                      style={{ ...fieldStyle, resize: 'vertical', lineHeight: 1.7 }}
                      onFocus={focus} onBlur={blur}
                    />
                  </div>

                  {status === 'err' && (
                    <p style={{ fontSize: '0.8rem', color: '#f87171' }}>
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <button
                    type="submit"
                    className="btn-solid"
                    disabled={loading}
                    style={{ padding: '0.875rem 2rem', fontSize: '0.8rem', opacity: loading ? 0.7 : 1, cursor: loading ? 'wait' : 'pointer', alignSelf: 'flex-start' }}
                  >
                    {loading ? 'Sending...' : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
