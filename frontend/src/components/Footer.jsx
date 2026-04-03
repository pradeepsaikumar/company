import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const navLinks = ['/', '/about', '/services', '/projects', '/team', '/blog', '/contact']
const navLabels = ['Home', 'About', 'Services', 'Projects', 'Team', 'Blog', 'Contact']
const servicesList = ['Web Development', 'Mobile Apps', 'UI/UX Design', 'Digital Marketing', 'SEO Optimization', 'Brand Identity']
const socials = [
  { key: 'TW', href: '#', label: 'Twitter' },
  { key: 'LI', href: '#', label: 'LinkedIn' },
  { key: 'IN', href: '#', label: 'Instagram' },
  { key: 'GH', href: '#', label: 'GitHub' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const subscribe = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/newsletter/subscribe', { email })
      setStatus('ok'); setEmail('')
    } catch { setStatus('err') }
  }

  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      {/* Marquee bar */}
      <div className="overflow-hidden" style={{ borderBottom: '1px solid rgba(0,221,184,0.05)', padding: '0.6rem 0' }}>
        <div className="marquee-wrap">
          <div className="marquee-inner" style={{ gap: '2.5rem' }}>
            {Array(8).fill(['WEB DEVELOPMENT', '///', 'MOBILE APPS', '///', 'UI/UX DESIGN', '///', 'DIGITAL MARKETING', '///', 'SEO', '///', 'DEEPRAPIT', '///']).flat().map((t, i) => (
              <span key={i} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                letterSpacing: '0.12em',
                color: t === '///' ? 'var(--neon)' : 'var(--text-faint)',
                flexShrink: 0,
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        style={{ padding: '4rem 1.5rem 3rem', gap: '2.5rem' }}
      >
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div style={{
              width: 32, height: 32,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '1px solid var(--neon)',
              background: 'rgba(0,221,184,0.05)',
            }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem', color: 'var(--neon)', fontWeight: 700 }}>DR</span>
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 800, color: 'var(--text)' }}>
              Deep<span style={{ color: 'var(--neon)' }}>Rap</span><span style={{ color: 'var(--neon2)' }}>IT</span>
            </span>
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', lineHeight: 1.75, marginBottom: '1.5rem', fontFamily: 'var(--font-body)' }}>
            Building tomorrow's digital products today. Vijayawada's premier innovation studio.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {socials.map(s => (
              <a
                key={s.key}
                href={s.href}
                aria-label={s.label}
                style={{
                  width: 32, height: 32,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '1px solid var(--border)',
                  color: 'var(--text-faint)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.58rem',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--neon)'; e.currentTarget.style.color = 'var(--neon)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-faint)' }}
              >
                {s.key}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--neon)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            Navigation
          </p>
          {navLinks.map((href, i) => (
            <Link
              key={href} to={href}
              style={{
                display: 'block',
                padding: '0.4rem 0',
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                color: 'var(--text-dim)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--neon)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}
            >
              {navLabels[i]}
            </Link>
          ))}
        </div>

        {/* Services */}
        <div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--neon)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            Services
          </p>
          {servicesList.map(s => (
            <p key={s} style={{ padding: '0.4rem 0', fontSize: '0.875rem', color: 'var(--text-dim)', fontFamily: 'var(--font-body)' }}>{s}</p>
          ))}
        </div>

        {/* Newsletter */}
        <div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--neon)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            Newsletter
          </p>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', marginBottom: '1rem', lineHeight: 1.6 }}>
            Stay updated with our latest work and insights.
          </p>
          <form onSubmit={subscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="field"
              style={{ fontSize: '0.875rem' }}
              onFocus={e => e.target.style.borderColor = 'var(--neon)'}
              onBlur={e => e.target.style.borderColor = 'var(--border2)'}
            />
            <button type="submit" className="btn-solid" style={{ width: '100%', padding: '0.65rem', fontSize: '0.75rem' }}>
              Subscribe
            </button>
            {status === 'ok'  && <p style={{ fontSize: '0.75rem', color: 'var(--neon)' }}>✓ Subscribed!</p>}
            {status === 'err' && <p style={{ fontSize: '0.75rem', color: '#f87171' }}>Error. Please try again.</p>}
          </form>
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center"
        style={{
          padding: '1.5rem',
          borderTop: '1px solid var(--border)',
          gap: '0.5rem',
        }}
      >
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-faint)' }}>
          © 2025 DeepRapIT. All rights reserved.
        </p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-faint)' }}>
          Built with passion in Vijayawada, India
        </p>
      </div>
    </footer>
  )
}
