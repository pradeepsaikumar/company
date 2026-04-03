import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Home',     href: '/' },
  { label: 'About',    href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Team',     href: '/team' },
  { label: 'Blog',     href: '/blog' },
  { label: 'Contact',  href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const loc = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  useEffect(() => setOpen(false), [loc])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? 'rgba(3,5,10,0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,221,184,0.08)' : '1px solid transparent',
        transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
      }}
    >
      <div
        className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between"
        style={{ height: '68px' }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group" style={{ textDecoration: 'none' }}>
          <div
            className="relative flex items-center justify-center"
            style={{
              width: 36, height: 36,
              border: '1px solid var(--neon)',
              background: 'rgba(0,221,184,0.05)',
              transition: 'background 0.25s ease, box-shadow 0.25s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,221,184,0.1)'; e.currentTarget.style.boxShadow = '0 0 16px rgba(0,221,184,0.2)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,221,184,0.05)'; e.currentTarget.style.boxShadow = 'none' }}
          >
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', color: 'var(--neon)', fontWeight: 800, letterSpacing: '0.04em' }}>DR</span>
          </div>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '0.03em' }}>
            Deep<span style={{ color: 'var(--neon)' }}>Rap</span><span style={{ color: 'var(--neon2)' }}>IT</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center" style={{ gap: '0.25rem' }}>
          {links.map(l => {
            const active = loc.pathname === l.href
            return (
              <Link
                key={l.href} to={l.href}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  color: active ? 'var(--neon)' : 'var(--text-dim)',
                  textDecoration: 'none',
                  padding: '0.5rem 0.9rem',
                  position: 'relative',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.color = 'var(--text)' }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.color = 'var(--text-dim)' }}
              >
                {l.label}
                {active && (
                  <span
                    style={{
                      position: 'absolute', bottom: 0, left: '0.9rem', right: '0.9rem', height: 1,
                      background: 'var(--neon)', boxShadow: '0 0 6px var(--neon)',
                    }}
                  />
                )}
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex">
          <Link
            to="/contact"
            className="btn-neon"
            style={{ fontSize: '0.75rem', padding: '0.55rem 1.4rem' }}
          >
            <span>Get Started</span>
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden flex flex-col justify-center gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display: 'block',
                height: 1.5,
                width: 22,
                background: 'var(--neon)',
                transition: 'all 0.25s ease',
                transform: open
                  ? i === 0 ? 'rotate(45deg) translate(3px,4px)'
                  : i === 2 ? 'rotate(-45deg) translate(3px,-4px)'
                  : 'none'
                  : 'none',
                opacity: open && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: 'rgba(3,5,10,0.98)',
            borderBottom: '1px solid var(--border)',
            padding: '0 1.5rem 1.5rem',
          }}
        >
          {links.map(l => (
            <Link
              key={l.href} to={l.href}
              style={{
                display: 'block',
                padding: '0.85rem 0',
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                fontWeight: 500,
                color: loc.pathname === l.href ? 'var(--neon)' : 'var(--text-dim)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(0,221,184,0.05)',
                transition: 'color 0.2s ease',
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-solid"
            style={{ marginTop: '1rem', display: 'block', textAlign: 'center', textDecoration: 'none' }}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}
