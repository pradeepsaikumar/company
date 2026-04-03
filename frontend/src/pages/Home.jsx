import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'

const WORDS = ['Web Applications', 'Mobile Apps', 'UI/UX Systems', 'Digital Growth']

function Typewriter() {
  const [idx, setIdx] = useState(0)
  const [txt, setTxt] = useState('')
  const [del, setDel] = useState(false)

  useEffect(() => {
    const word = WORDS[idx]
    let timer
    if (!del && txt.length < word.length) {
      timer = setTimeout(() => setTxt(word.slice(0, txt.length + 1)), 75)
    } else if (!del && txt.length === word.length) {
      timer = setTimeout(() => setDel(true), 2200)
    } else if (del && txt.length > 0) {
      timer = setTimeout(() => setTxt(txt.slice(0, -1)), 35)
    } else if (del && txt.length === 0) {
      setDel(false); setIdx((idx + 1) % WORDS.length)
    }
    return () => clearTimeout(timer)
  }, [txt, del, idx])

  return (
    <span className="typewriter grad-text" style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}>
      {txt}
    </span>
  )
}

function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        const n = parseInt(target)
        let c = 0
        const t = setInterval(() => { c++; setCount(c); if (c >= n) clearInterval(t) }, 1200 / n)
      }
    })
    if (ref.current) ob.observe(ref.current)
    return () => ob.disconnect()
  }, [target])
  return <span ref={ref}>{count}{suffix}</span>
}

const services = [
  { id: 1, icon: '⚡', title: 'Web Development',    short: 'React · Node · Full Stack',       color: '#00ddb8',  desc: 'We build blazing-fast, scalable web applications using cutting-edge technologies. From MVPs to enterprise-grade platforms, every line of code is purposeful.', tech: ['React', 'Next.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'AWS'] },
  { id: 2, icon: '📱', title: 'Mobile Apps',         short: 'iOS · Android · React Native',    color: '#0ea5e9', desc: 'Cross-platform mobile applications that feel native. We ship to both iOS and Android from a single codebase without compromising performance.', tech: ['React Native', 'Expo', 'Firebase', 'Push Notifications', 'App Store', 'Play Store'] },
  { id: 3, icon: '◈',  title: 'UI/UX Design',        short: 'Figma · Design Systems',          color: '#a855f7', desc: 'Interfaces that convert and delight. From user research to pixel-perfect prototypes, we design systems that scale with your product.', tech: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'Usability Testing', 'Brand Identity'] },
  { id: 4, icon: '📈', title: 'Digital Marketing',   short: 'SEO · Ads · Growth',              color: '#f97316', desc: 'Data-driven marketing strategies that deliver measurable ROI. We grow your digital presence through SEO, paid campaigns, and content strategy.', tech: ['SEO Audit', 'Google Ads', 'Meta Ads', 'Content Strategy', 'Analytics', 'Email Marketing'] },
]

const stats = [
  { value: '50', suffix: '+', label: 'Projects Delivered' },
  { value: '30', suffix: '+', label: 'Happy Clients' },
  { value: '10', suffix: '',  label: 'Team Members' },
  { value: '2',  suffix: '+', label: 'Years of Excellence' },
]

const process = [
  { n: '01', title: 'DISCOVER', desc: 'Deep dive into your goals, audience and requirements. We ask the right questions to build the right thing.' },
  { n: '02', title: 'DESIGN',   desc: 'Wireframes, prototypes and pixel-perfect UI that aligns with your brand and converts users.' },
  { n: '03', title: 'BUILD',    desc: 'Agile development with weekly demos. Clean code, tested thoroughly before every release.' },
  { n: '04', title: 'LAUNCH',   desc: 'Smooth deployment, performance monitoring and ongoing support. Your success is our metric.' },
]

export default function Home() {
  const [modal, setModal] = useState(null)

  return (
    <div style={{ background: 'var(--bg)' }}>

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
        style={{ paddingTop: '68px' }}
      >
        {/* Ambient orbs */}
        <div className="absolute inset-0 pointer-events-none" style={{ overflow: 'hidden' }}>
          <div className="float" style={{
            position: 'absolute', top: '12%', left: '5%',
            width: 360, height: 360, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,221,184,0.06) 0%, transparent 70%)',
            animationDelay: '0s',
          }} />
          <div className="float" style={{
            position: 'absolute', top: '45%', right: '4%',
            width: 440, height: 440, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(14,165,233,0.05) 0%, transparent 70%)',
            animationDelay: '2.5s',
          }} />
          <div className="float" style={{
            position: 'absolute', bottom: '8%', left: '30%',
            width: 280, height: 280, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168,85,247,0.04) 0%, transparent 70%)',
            animationDelay: '5s',
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center" style={{ paddingBottom: '5rem' }}>
          {/* Badge */}
          <div
            className="reveal inline-flex items-center gap-2.5"
            style={{
              border: '1px solid var(--border)',
              background: 'rgba(0,221,184,0.03)',
              padding: '0.45rem 1rem',
              marginBottom: '2.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              color: '#00ddb8',
              letterSpacing: '0.14em',
            }}
          >
            <span className="pulse-ring" style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: 'var(--neon)', flexShrink: 0 }} />
            VIJAYAWADA'S DIGITAL INNOVATION STUDIO — EST. 2023
          </div>

          <h1
            className="reveal reveal-delay-1 glitch"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.6rem, 7.5vw, 6.5rem)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              color: 'var(--text)',
              marginBottom: '1.5rem',
            }}
          >
            WE BUILD<br />
            <Typewriter /><br />
            <span style={{ fontSize: '55%', color: 'var(--text-faint)', fontWeight: 500 }}>FOR THE FUTURE</span>
          </h1>

          <p
            className="reveal reveal-delay-2 mx-auto"
            style={{
              maxWidth: '560px',
              fontSize: '1.05rem',
              color: 'var(--text-dim)',
              fontFamily: 'var(--font-body)',
              lineHeight: 1.75,
              marginBottom: '2.75rem',
            }}
          >
            From idea to launch — we design, develop, and grow digital products
            that transform businesses across India and beyond.
          </p>

          <div className="reveal reveal-delay-3 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn-solid" style={{ padding: '0.85rem 2rem', fontSize: '0.8rem', textDecoration: 'none' }}>
              Start a Project →
            </Link>
            <Link to="/projects" className="btn-neon" style={{ padding: '0.85rem 2rem', textDecoration: 'none' }}>
              <span style={{ fontSize: '0.8rem' }}>View Our Work</span>
            </Link>
          </div>

          {/* Scroll hint */}
          <div className="reveal reveal-delay-5 flex flex-col items-center gap-2" style={{ marginTop: '5rem', opacity: 0.3 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.22em', color: 'var(--text-faint)' }}>SCROLL</span>
            <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, var(--neon), transparent)' }} />
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div
        className="py-3.5 overflow-hidden"
        style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="marquee-wrap">
          <div className="marquee-inner">
            {Array(4).fill(['WEB DEVELOPMENT', '·', 'MOBILE APPS', '·', 'UI/UX DESIGN', '·', 'DIGITAL MARKETING', '·', 'SEO', '·', 'DEEPRAPIT', '·']).flat().map((t, i) => (
              <span
                key={i}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.16em',
                  color: t === '·' ? 'var(--neon)' : 'var(--text-faint)',
                  flexShrink: 0,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section style={{ padding: '6rem 1.5rem', background: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ marginBottom: '3.5rem' }}>
            <span className="section-label">// What We Do</span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 800,
              color: 'var(--text)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}>
              SERVICES THAT<br /><span className="grad-text">DRIVE GROWTH</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1rem' }}>
            {services.map(s => (
              <div
                key={s.id}
                className="neon-card"
                style={{ padding: '2rem', cursor: 'pointer' }}
                onClick={() => setModal(s)}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: 48, height: 48,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '1.2rem',
                    border: `1px solid ${s.color}35`,
                    background: `${s.color}07`,
                  }}>
                    {s.icon}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.2rem' }}>{s.title}</h3>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: s.color, letterSpacing: '0.1em' }}>{s.short}</p>
                  </div>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                  {s.desc.slice(0, 120)}...
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: s.color, letterSpacing: '0.1em' }}>
                  EXPLORE <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section
        className="grid-bg-dense"
        style={{
          padding: '5rem 1.5rem',
          background: 'var(--bg2)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4" style={{ gap: '2rem' }}>
          {stats.map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <p className="counter-num" style={{ marginBottom: '0.5rem' }}>
                <Counter target={s.value} suffix={s.suffix} />
              </p>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.58rem',
                color: 'var(--text-faint)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ padding: '6rem 1.5rem', background: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto">
          <span className="section-label">// How We Work</span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)',
            fontWeight: 800,
            color: 'var(--text)',
            letterSpacing: '-0.02em',
            marginBottom: '3.5rem',
          }}>
            OUR PROCESS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4" style={{ gap: '1rem' }}>
            {process.map((p, i) => (
              <div key={p.n} className="neon-card" style={{ padding: '1.75rem', position: 'relative' }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '3.5rem',
                  fontWeight: 900,
                  color: 'rgba(0,221,184,0.05)',
                  lineHeight: 1,
                  marginBottom: '1rem',
                  userSelect: 'none',
                }}>
                  {p.n}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#00ddb8',
                  letterSpacing: '0.1em',
                  marginBottom: '0.75rem',
                }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', lineHeight: 1.7 }}>{p.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block" style={{
                    position: 'absolute',
                    top: '2.5rem',
                    right: '-0.75rem',
                    color: '#00ddb8',
                    opacity: 0.3,
                    zIndex: 10,
                    fontSize: '0.9rem',
                  }}>
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          padding: '5rem 1.5rem',
          background: 'var(--bg2)',
          borderTop: '1px solid var(--border)',
        }}
      >
        <div className="max-w-4xl mx-auto" style={{ textAlign: 'center' }}>
          <div className="neon-card" style={{ padding: '3.5rem 2rem', position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'radial-gradient(ellipse at center, rgba(0,221,184,0.04) 0%, transparent 70%)',
            }} />
            <span className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>// Ready to Build?</span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 4.5vw, 3.5rem)',
              fontWeight: 800,
              color: 'var(--text)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '1.25rem',
            }}>
              LET'S CREATE SOMETHING<br /><span className="grad-text">EXTRAORDINARY</span>
            </h2>
            <p style={{
              color: 'var(--text-dim)',
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              lineHeight: 1.75,
              maxWidth: 480,
              margin: '0 auto 2.5rem',
            }}>
              Free consultation. No pressure. Just a conversation about how we can
              transform your idea into reality.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="btn-solid" style={{ padding: '0.9rem 2.25rem', fontSize: '0.8rem', textDecoration: 'none' }}>
                Start Your Project →
              </Link>
              <Link to="/projects" className="btn-neon" style={{ padding: '0.9rem 2.25rem', textDecoration: 'none' }}>
                <span style={{ fontSize: '0.8rem' }}>See Our Work</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE MODAL ── */}
      <Modal open={!!modal} onClose={() => setModal(null)}>
        {modal && (
          <div style={{ padding: '2.5rem' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '1.25rem',
              marginBottom: '1.75rem', paddingBottom: '1.75rem',
              borderBottom: '1px solid var(--border)',
            }}>
              <div style={{
                width: 52, height: 52,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', flexShrink: 0,
                border: `1px solid ${modal.color}35`,
                background: `${modal.color}07`,
              }}>
                {modal.icon}
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: modal.color, letterSpacing: '0.12em', marginBottom: '0.3rem' }}>{modal.short}</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--text)' }}>{modal.title}</h2>
              </div>
            </div>
            <p style={{ color: 'var(--text-dim)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.95rem' }}>{modal.desc}</p>
            <div style={{ marginBottom: '2rem' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: '#00ddb8', letterSpacing: '0.15em', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                Technologies &amp; Expertise
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {modal.tech.map(t => (
                  <span key={t} className="tag" style={{ background: `${modal.color}07`, borderColor: `${modal.color}30`, color: modal.color }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <Link
              to="/contact"
              onClick={() => setModal(null)}
              className="btn-solid"
              style={{ padding: '0.8rem 1.75rem', fontSize: '0.8rem', textDecoration: 'none' }}
            >
              Enquire About This Service →
            </Link>
          </div>
        )}
      </Modal>
    </div>
  )
}
