import { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'

const services = [
  { id: 1, icon: '⚡', title: 'Web Development',         tagline: 'Fast · Scalable · Modern',                    color: '#00ddb8',  desc: 'We build web applications that perform at scale. From landing pages to full SaaS platforms, every line of code is written with purpose. React, Next.js, Node.js, and everything in between.', features: ['React / Next.js / Vue', 'Node.js / Express backends', 'RESTful & GraphQL APIs', 'Cloud deployment (AWS/GCP)', 'Database design & optimization', 'Performance & SEO optimization'], process: 'We start with architecture planning, then agile development with weekly demos, followed by thorough testing and smooth deployment.' },
  { id: 2, icon: '📱', title: 'Mobile App Development',  tagline: 'iOS · Android · One Codebase',                color: '#0ea5e9', desc: 'Beautiful, high-performance mobile apps built with React Native. Ship to both platforms without compromising on native feel and functionality. App Store and Play Store ready.', features: ['React Native development', 'iOS & Android deployment', 'Push notifications', 'Offline-first architecture', 'App Store / Play Store listing', 'Analytics integration'], process: 'From UI wireframes to production deployment. We handle everything including app store submissions and ongoing updates.' },
  { id: 3, icon: '◈',  title: 'UI/UX Design',            tagline: 'Beautiful · Functional · Conversion-Focused', color: '#a855f7', desc: 'Interfaces that people love to use. User research, wireframes, prototypes, and final high-fidelity designs. We handle the full design journey from discovery to pixel-perfect handoff.', features: ['User research & personas', 'Wireframing & prototyping', 'Figma design systems', 'Interaction design', 'Usability testing', 'Brand identity'], process: 'Research first, design second. We validate every design decision with user data before building anything.' },
  { id: 4, icon: '📈', title: 'Digital Marketing & SEO', tagline: 'Data-Driven · Measurable · Scalable',          color: '#f97316', desc: 'Growth strategies that compound over time. We combine technical SEO, content marketing, and paid advertising to build sustainable digital growth engines for your business.', features: ['SEO audit & strategy', 'Content marketing', 'Google Ads / Meta Ads', 'Social media management', 'Email marketing', 'Analytics & reporting'], process: 'Audit → strategy → execute → measure → optimize. We report on real metrics that matter to your business.' },
]

const packages = [
  { name: 'STARTER',    price: '₹15,000', period: 'per project', desc: 'Perfect for small businesses',  highlight: false, features: ['Landing page (5 pages)', 'Mobile responsive', 'Basic SEO setup', 'Contact form', '1 month support'] },
  { name: 'GROWTH',     price: '₹45,000', period: 'per project', desc: 'For growing businesses',         highlight: true,  features: ['Full website (10+ pages)', 'CMS integration', 'Advanced SEO', 'Analytics dashboard', 'Social media setup', '3 months support'] },
  { name: 'ENTERPRISE', price: 'Custom',  period: "let's talk",  desc: 'Full digital transformation',   highlight: false, features: ['Custom web or mobile app', 'Full stack development', 'Design system', 'DevOps & deployment', 'Ongoing maintenance', 'Dedicated team'] },
]

export default function Services() {
  const [modal, setModal] = useState(null)

  return (
    <div style={{ background: 'var(--bg)', paddingTop: '68px' }}>

      {/* Hero */}
      <section className="grid-bg relative overflow-hidden" style={{ padding: '5.5rem 1.5rem 5rem' }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 70% 40%, rgba(168,85,247,0.05) 0%, transparent 60%)',
        }} />
        <div className="max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label reveal">// Services</span>
          <h1 className="reveal reveal-delay-1" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.4rem, 6vw, 5rem)',
            fontWeight: 800,
            color: 'var(--text)',
            letterSpacing: '-0.025em',
            lineHeight: 1.08,
          }}>
            EVERYTHING YOU NEED<br /><span className="grad-text">TO GO DIGITAL</span>
          </h1>
          <p className="reveal reveal-delay-2" style={{
            marginTop: '1.5rem',
            maxWidth: '480px',
            fontSize: '1.02rem',
            color: 'var(--text-dim)',
            lineHeight: 1.75,
          }}>
            One team. Full ownership. We handle every aspect of your digital product — click any service to explore.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section style={{ padding: '0 1.5rem 5rem' }}>
        <div className="max-w-7xl mx-auto" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {services.map(s => (
            <div
              key={s.id}
              className="neon-card"
              style={{ padding: '2rem 2.5rem', cursor: 'pointer' }}
              onClick={() => setModal(s)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '2.5rem', alignItems: 'start' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <div style={{
                      width: 52, height: 52,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.25rem', flexShrink: 0,
                      border: `1px solid ${s.color}35`, background: `${s.color}07`,
                    }}>
                      {s.icon}
                    </div>
                    <div>
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: s.color, letterSpacing: '0.12em', marginBottom: '0.2rem' }}>{s.tagline}</p>
                      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text)' }}>{s.title}</h2>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', lineHeight: 1.8, marginBottom: '1.25rem' }}>{s.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: s.color, letterSpacing: '0.1em' }}>
                    CLICK FOR DETAILS →
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem' }}>
                  {s.features.map(f => (
                    <div key={f} style={{
                      display: 'flex', alignItems: 'center', gap: '0.75rem',
                      padding: '0.65rem 1rem',
                      background: 'var(--surface2)',
                      border: '1px solid var(--border2)',
                    }}>
                      <div style={{ width: 4, height: 4, borderRadius: '50%', background: s.color, flexShrink: 0 }} />
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-label" style={{ display: 'flex', justifyContent: 'center' }}>// Pricing</span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)',
              fontWeight: 800,
              color: 'var(--text)',
              letterSpacing: '-0.02em',
            }}>
              SIMPLE, TRANSPARENT PRICING
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '1.25rem' }}>
            {packages.map(p => (
              <div
                key={p.name}
                className="neon-card"
                style={{
                  padding: '2rem',
                  position: 'relative',
                  borderColor: p.highlight ? 'rgba(0,221,184,0.4)' : undefined,
                  boxShadow: p.highlight ? '0 0 48px rgba(0,221,184,0.07)' : undefined,
                }}
              >
                {p.highlight && (
                  <div style={{
                    position: 'absolute',
                    top: -14, left: '50%', transform: 'translateX(-50%)',
                    background: 'var(--neon)',
                    padding: '0.3rem 1rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.55rem',
                    fontWeight: 700,
                    color: 'var(--bg)',
                    letterSpacing: '0.12em',
                    whiteSpace: 'nowrap',
                  }}>
                    ★ MOST POPULAR
                  </div>
                )}
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#00ddb8', letterSpacing: '0.18em', marginBottom: '0.75rem' }}>{p.name}</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 800, color: 'var(--text)', lineHeight: 1 }}>{p.price}</p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-faint)', letterSpacing: '0.08em', margin: '0.4rem 0 0.75rem' }}>{p.period}</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', paddingBottom: '1.25rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border)' }}>{p.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                  {p.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--text-dim)' }}>
                      <span style={{ color: '#00ddb8', fontSize: '0.8rem' }}>✓</span> {f}
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className={p.highlight ? 'btn-solid' : 'btn-neon'}
                  style={{ display: 'block', textAlign: 'center', padding: '0.75rem', fontSize: '0.78rem', textDecoration: 'none' }}
                >
                  <span>Get Started →</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <Modal open={!!modal} onClose={() => setModal(null)}>
        {modal && (
          <div style={{ padding: '2.5rem' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '1.25rem',
              marginBottom: '1.75rem', paddingBottom: '1.75rem',
              borderBottom: '1px solid var(--border)',
            }}>
              <div style={{
                width: 52, height: 52, flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.3rem',
                border: `1px solid ${modal.color}35`, background: `${modal.color}07`,
              }}>
                {modal.icon}
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: modal.color, letterSpacing: '0.12em', marginBottom: '0.25rem' }}>{modal.tagline}</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--text)' }}>{modal.title}</h2>
              </div>
            </div>

            <p style={{ color: 'var(--text-dim)', lineHeight: 1.85, marginBottom: '1.5rem', fontSize: '0.9rem' }}>{modal.desc}</p>

            <div style={{ padding: '1rem 1.25rem', borderLeft: `2px solid ${modal.color}`, background: `${modal.color}06`, marginBottom: '1.75rem' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: modal.color, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Our Process</p>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.875rem', lineHeight: 1.75 }}>{modal.process}</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: modal.color, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>What's Included</p>
              <div className="grid grid-cols-2" style={{ gap: '0.5rem' }}>
                {modal.features.map(f => (
                  <div key={f} style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    fontSize: '0.85rem', padding: '0.6rem 0.85rem',
                    background: `${modal.color}07`, border: `1px solid ${modal.color}20`,
                    color: 'var(--text-dim)',
                  }}>
                    <span style={{ color: modal.color }}>✓</span> {f}
                  </div>
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
