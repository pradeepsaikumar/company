import { Link } from 'react-router-dom'

const values = [
  { icon: '⚡', title: 'IMPACT FIRST',      desc: 'Every decision measured by real-world business impact.',              color: 'var(--neon)'  },
  { icon: '◈',  title: 'CRAFT & QUALITY',   desc: 'We obsess over details. Good enough is never enough.',               color: 'var(--neon2)' },
  { icon: '◆',  title: 'TRUE PARTNERSHIP',  desc: 'We embed in your team, not just deliver and disappear.',             color: 'var(--neon3)' },
  { icon: '▲',  title: 'MOVE FAST',         desc: 'Rapid iteration, transparent progress, zero delays.',                 color: 'var(--neon4)' },
  { icon: '●',  title: 'ALWAYS INNOVATING', desc: 'We stay ahead so your product stays competitive.',                   color: 'var(--neon)'  },
  { icon: '■',  title: 'LONG-TERM THINKING',desc: 'We build for tomorrow, not just this sprint.',                       color: 'var(--neon2)' },
]

const milestones = [
  { y: '2023', e: 'DeepRapIT founded in Vijayawada by Pradeep Sai Kumar' },
  { y: '2023', e: 'First 10 clients onboarded, focused on local digital transformation' },
  { y: '2024', e: 'Expanded to mobile app development. Team grew to 6 members.' },
  { y: '2024', e: 'Launched 30+ projects. Digital marketing division established.' },
  { y: '2025', e: 'Full-service studio — 10 members, 50+ projects delivered' },
]

export default function About() {
  return (
    <div style={{ background: 'var(--bg)', paddingTop: '68px' }}>

      {/* Hero */}
      <section className="grid-bg relative overflow-hidden" style={{ padding: '5.5rem 1.5rem 5rem' }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 30% 60%, rgba(0,221,184,0.05) 0%, transparent 60%)',
        }} />
        <div className="max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label reveal">// About Us</span>
          <h1
            className="reveal reveal-delay-1"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 6vw, 5rem)',
              fontWeight: 800,
              color: 'var(--text)',
              letterSpacing: '-0.025em',
              lineHeight: 1.08,
            }}
          >
            BUILDERS.<br /><span className="grad-text">DREAMERS.</span><br />PROBLEM SOLVERS.
          </h1>
          <p
            className="reveal reveal-delay-2"
            style={{
              marginTop: '1.5rem',
              maxWidth: '560px',
              fontSize: '1.05rem',
              color: 'var(--text-dim)',
              fontFamily: 'var(--font-body)',
              lineHeight: 1.75,
            }}
          >
            DeepRapIT is a digital innovation studio based in Vijayawada, Andhra Pradesh. We partner
            with startups and growing businesses to build digital products that create real impact.
          </p>
        </div>
      </section>

      {/* Story + Timeline */}
      <section
        style={{
          padding: '5rem 1.5rem',
          background: 'var(--bg2)',
          borderTop: '1px solid var(--border)',
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2" style={{ gap: '4rem', alignItems: 'start' }}>
          <div>
            <span className="section-label">// Our Story</span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              fontWeight: 800,
              color: 'var(--text)',
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
            }}>
              BORN FROM PASSION
            </h2>
            <p style={{ color: 'var(--text-dim)', lineHeight: 1.85, marginBottom: '1rem', fontSize: '0.95rem' }}>
              DeepRapIT started with a simple belief: every business, no matter how small, deserves
              world-class digital tools. Founded in 2023 by Pradeep Sai Kumar, we began by helping
              local Vijayawada businesses establish their digital presence.
            </p>
            <p style={{ color: 'var(--text-dim)', lineHeight: 1.85, fontSize: '0.95rem' }}>
              Today, we're a full-service digital studio working with clients across India — delivering
              end-to-end solutions from strategy to deployment. 10-member team, 50+ projects, and counting.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {milestones.map((m, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 32, height: 32,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    border: '1px solid var(--border)',
                    background: 'rgba(0,221,184,0.05)',
                    fontFamily: 'var(--font-display)',
                    color: 'var(--neon)',
                    fontSize: '0.55rem',
                    fontWeight: 700,
                  }}>
                    {m.y.slice(2)}
                  </div>
                  {i < milestones.length - 1 && (
                    <div style={{ width: 1, flex: 1, marginTop: 4, background: 'var(--border)' }} />
                  )}
                </div>
                <div style={{ paddingBottom: i < milestones.length - 1 ? '1.25rem' : 0 }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--neon)', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>{m.y}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)' }}>{m.e}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto">
          <span className="section-label">// What Drives Us</span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            fontWeight: 800,
            color: 'var(--text)',
            letterSpacing: '-0.02em',
            marginBottom: '3rem',
          }}>
            CORE VALUES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '1rem' }}>
            {values.map(v => (
              <div key={v.title} className="neon-card" style={{ padding: '1.75rem' }}>
                <span style={{ fontSize: '1.3rem', color: v.color }}>{v.icon}</span>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: v.color,
                  letterSpacing: '0.1em',
                  margin: '0.75rem 0 0.5rem',
                }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section
        style={{
          padding: '4.5rem 1.5rem',
          background: 'var(--bg2)',
          borderTop: '1px solid var(--border)',
          textAlign: 'center',
        }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)',
            fontWeight: 800,
            color: 'var(--text)',
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}>
            MEET THE PEOPLE<br /><span className="grad-text">BEHIND THE MAGIC</span>
          </h2>
          <p style={{ color: 'var(--text-dim)', marginBottom: '2rem', fontSize: '0.95rem' }}>
            10 experts, 1 goal — build things that matter.
          </p>
          <Link to="/team" className="btn-solid" style={{ padding: '0.85rem 2rem', fontSize: '0.8rem', textDecoration: 'none' }}>
            Meet Our Team →
          </Link>
        </div>
      </section>
    </div>
  )
}
