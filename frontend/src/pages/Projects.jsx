import { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'

const projects = [
  {
    id: 1,
    title: 'AgriConnect Platform',
    category: 'Web Development',
    tagline: 'Connecting farmers to markets directly',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Razorpay'],
    color: '#00ddb8',
    desc: 'A full-stack marketplace platform connecting farmers in Andhra Pradesh directly to consumers and wholesalers. Features real-time inventory management, order tracking, and integrated payment gateway.',
    challenge: 'The client needed a platform that could work on 2G networks in rural areas, handle 1000+ concurrent users, and support multiple languages including Telugu.',
    solution: 'We built a progressive web app with aggressive caching, lazy loading, and a lightweight API layer. Telugu language support was added via i18n. Achieved sub-2s load times even on 2G.',
    outcome: '500+ farmers onboarded, ₹50L+ in transactions processed in first 3 months, 92% user retention rate.',
    liveUrl: 'https://example.com', githubUrl: '#', duration: '3 months', year: '2024',
  },
  {
    id: 2,
    title: 'MediTrack Mobile App',
    category: 'Mobile App',
    tagline: 'Smart medication & appointment management',
    tech: ['React Native', 'Firebase', 'Node.js', 'Push Notifications', 'Redux'],
    color: '#a855f7',
    desc: 'A comprehensive healthcare management app for patients to track medications, schedule appointments, and share health reports with doctors. Available on iOS and Android.',
    challenge: 'HIPAA-compliant data handling, complex medication reminder logic with timezone support, and smooth real-time sync between doctor and patient portals.',
    solution: 'End-to-end encrypted data storage, background task scheduling for reminders, and a Firebase Realtime Database architecture for live updates across devices.',
    outcome: '10,000+ downloads in first month, 4.7★ rating on Play Store, partnered with 3 major hospitals in Vijayawada.',
    liveUrl: '#', githubUrl: '#', duration: '4 months', year: '2024',
  },
  {
    id: 3,
    title: 'SkillForge LMS',
    category: 'Web Development',
    tagline: 'E-learning platform for professional upskilling',
    tech: ['Next.js', 'PostgreSQL', 'Stripe', 'AWS S3', 'WebRTC'],
    color: '#0ea5e9',
    desc: 'A full-featured Learning Management System with live classes, recorded courses, quizzes, certificates, and an instructor dashboard. Supports 50+ concurrent live sessions.',
    challenge: 'Building a scalable video infrastructure that supports 50+ concurrent live sessions while keeping costs low. Course content delivery needed to be fast globally.',
    solution: 'We integrated WebRTC for live sessions, AWS CloudFront for global CDN, and built an adaptive bitrate streaming system. Stripe Connect handles instructor payouts.',
    outcome: '200+ courses listed, 5,000+ learners, instructors earning average ₹30K/month through the platform.',
    liveUrl: 'https://example.com', githubUrl: '#', duration: '5 months', year: '2024',
  },
  {
    id: 4,
    title: 'RetailPulse Dashboard',
    category: 'UI/UX Design',
    tagline: 'Real-time retail analytics & insights',
    tech: ['Figma', 'React', 'D3.js', 'Chart.js', 'WebSocket'],
    color: '#f97316',
    desc: 'An analytics dashboard for retail chain owners to monitor sales, inventory, staff performance, and customer trends across multiple store locations in real-time.',
    challenge: 'Visualizing complex multi-dimensional data in a way that non-technical store managers could understand and act on within seconds of opening the app.',
    solution: 'Extensive user research with 20+ store managers informed a progressive disclosure approach — simple at first glance, powerful when explored. Custom D3.js visualizations.',
    outcome: 'Reduced manual reporting time by 80%, deployed across 15 store locations, client revenue tracking improved by 35% YoY.',
    liveUrl: '#', githubUrl: '#', duration: '2 months', year: '2023',
  },
  {
    id: 5,
    title: 'GrowthOS Marketing Suite',
    category: 'Digital Marketing',
    tagline: 'Automated digital marketing for SMBs',
    tech: ['Google Ads API', 'Meta API', 'Python', 'Next.js', 'PostgreSQL'],
    color: '#00ddb8',
    desc: 'A marketing automation platform that helps small businesses manage Google and Meta ad campaigns, generate reports, and optimize spend — all from one dashboard.',
    challenge: 'Small businesses struggle with managing paid ads across multiple platforms. They needed automation that didn\'t require deep technical knowledge to operate.',
    solution: 'Built a simplified campaign builder with AI-suggested targeting, automated budget optimization, and plain-language performance reports. Integrated with both Google and Meta APIs.',
    outcome: 'Clients saw average 3.2x ROAS improvement, reduced campaign management time by 70%, 40+ SMBs onboarded.',
    liveUrl: 'https://example.com', githubUrl: '#', duration: '4 months', year: '2024',
  },
  {
    id: 6,
    title: 'CommuneSpace App',
    category: 'Mobile App',
    tagline: 'Hyperlocal community networking app',
    tech: ['React Native', 'Node.js', 'Socket.io', 'MongoDB', 'Google Maps API'],
    color: '#ec4899',
    desc: 'A hyperlocal social networking app for apartment complexes and gated communities. Features community announcements, emergency alerts, vendor booking, and resident chat.',
    challenge: 'Real-time messaging for hundreds of simultaneous users per community, location-based feature gating, and a seamless onboarding flow for less tech-savvy residents.',
    solution: 'Socket.io for real-time features, geofencing for community verification, and an extremely simplified onboarding using phone number + OTP — no passwords required.',
    outcome: 'Deployed in 20+ residential complexes across Hyderabad and Vijayawada, 3,000+ active users, 4.8★ app rating.',
    liveUrl: '#', githubUrl: '#', duration: '3 months', year: '2025',
  },
]

const CATS = ['All', 'Web Development', 'Mobile App', 'UI/UX Design', 'Digital Marketing']

export default function Projects() {
  const [selected, setSelected] = useState(null)
  const [filter,   setFilter]   = useState('All')
  const [hovered,  setHovered]  = useState(null)

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <div style={{ background: 'var(--bg)', paddingTop: '68px' }}>

      {/* ── Hero — compact ── */}
      <section
        className="grid-bg relative overflow-hidden"
        style={{ padding: '4rem 1.5rem 3rem' }}
      >
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 80% 50%, rgba(14,165,233,0.05) 0%, transparent 60%)',
        }} />
        <div className="max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label reveal">// Our Work</span>
          <h1
            className="reveal reveal-delay-1"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)',
              fontWeight: 800,
              color: 'var(--text)',
              letterSpacing: '-0.025em',
              lineHeight: 1.08,
              marginBottom: '0.75rem',
            }}
          >
            PROJECTS THAT<br /><span className="grad-text">MADE AN IMPACT</span>
          </h1>
          <p
            className="reveal reveal-delay-2"
            style={{ color: 'var(--text-dim)', maxWidth: 500, lineHeight: 1.7, fontSize: '1rem', marginBottom: '1.75rem' }}
          >
            50+ projects delivered. Here are some we're most proud of — click any card for the full story.
          </p>

          {/* Filter */}
          <div className="reveal reveal-delay-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {CATS.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                style={{
                  padding: '0.45rem 1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  border: `1px solid ${filter === c ? 'var(--neon)' : 'var(--border)'}`,
                  color: filter === c ? 'var(--neon)' : 'var(--text-faint)',
                  background: filter === c ? 'rgba(0,221,184,0.07)' : 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects grid ── */}
      <section style={{ padding: '2rem 1.5rem 5rem' }}>
        <div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '1.25rem' }}
        >
          {filtered.map(p => (
            <div
              key={p.id}
              className="neon-card"
              style={{
                cursor: 'pointer',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
              onClick={() => setSelected(p)}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Card visual — proper aspect ratio, no clipping bugs */}
              <div
                className="grid-bg-dense"
                style={{
                  position: 'relative',
                  paddingBottom: '52%',
                  background: `${p.color}08`,
                  borderBottom: '1px solid var(--border)',
                  overflow: 'hidden',
                  flexShrink: 0,
                }}
              >
                {/* Big number watermark */}
                <div style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(5rem, 10vw, 7rem)',
                    fontWeight: 900,
                    color: p.color,
                    opacity: 0.07,
                    lineHeight: 1,
                    userSelect: 'none',
                  }}>
                    {p.id.toString().padStart(2, '0')}
                  </span>
                </div>

                {/* Category badge — top left */}
                <div style={{
                  position: 'absolute', top: '0.75rem', left: '0.75rem',
                  padding: '0.28rem 0.65rem',
                  border: `1px solid ${p.color}40`,
                  background: `${p.color}12`,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.55rem',
                  color: p.color,
                  letterSpacing: '0.1em',
                  zIndex: 2,
                }}>
                  {p.category.toUpperCase()}
                </div>

                {/* Year + duration — bottom right */}
                <div style={{
                  position: 'absolute', bottom: '0.75rem', right: '0.75rem',
                  display: 'flex', gap: '0.4rem', zIndex: 2,
                }}>
                  {[p.year, p.duration].map(badge => (
                    <span key={badge} style={{
                      padding: '0.2rem 0.5rem',
                      background: 'rgba(3,5,10,0.8)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.5rem',
                      color: 'var(--text-faint)',
                      border: '1px solid var(--border)',
                    }}>
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Hover overlay — controlled via state, no CSS group bug */}
                <div style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: `${p.color}14`,
                  opacity: hovered === p.id ? 1 : 0,
                  transition: 'opacity 0.25s ease',
                  zIndex: 1,
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    color: p.color,
                    letterSpacing: '0.12em',
                    border: `1px solid ${p.color}`,
                    padding: '0.45rem 1rem',
                    background: 'rgba(3,5,10,0.5)',
                  }}>
                    VIEW CASE STUDY →
                  </span>
                </div>
              </div>

              {/* Card info */}
              <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: '0.3rem',
                  lineHeight: 1.3,
                }}>
                  {p.title}
                </h3>
                <p style={{
                  fontSize: '0.83rem',
                  color: 'var(--text-dim)',
                  marginBottom: '1rem',
                  lineHeight: 1.5,
                  flex: 1,
                }}>
                  {p.tagline}
                </p>
                {/* Tech chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {p.tech.slice(0, 3).map(t => (
                    <span key={t} className="tag" style={{
                      fontSize: '0.6rem',
                      padding: '0.2rem 0.55rem',
                      borderColor: `${p.color}30`,
                      color: p.color,
                    }}>
                      {t}
                    </span>
                  ))}
                  {p.tech.length > 3 && (
                    <span className="tag" style={{ fontSize: '0.6rem', padding: '0.2rem 0.55rem' }}>
                      +{p.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          padding: '4.5rem 1.5rem',
          background: 'var(--bg2)',
          borderTop: '1px solid var(--border)',
          textAlign: 'center',
        }}
      >
        <div className="max-w-2xl mx-auto">
          <span className="section-label" style={{ display: 'flex', justifyContent: 'center' }}>// Start Your Project</span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 800,
            color: 'var(--text)',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: '1rem',
          }}>
            YOUR PROJECT<br /><span className="grad-text">COULD BE NEXT</span>
          </h2>
          <p style={{ color: 'var(--text-dim)', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Let's talk about your idea. Free consultation, no commitment.
          </p>
          <Link to="/contact" className="btn-solid" style={{ padding: '0.9rem 2.25rem', fontSize: '0.8rem', textDecoration: 'none' }}>
            Get a Free Quote →
          </Link>
        </div>
      </section>

      {/* ── Project Detail Modal ── */}
      <Modal open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div>
            {/* Modal header */}
            <div style={{
              padding: '1.75rem 1.75rem 1.5rem',
              borderBottom: '1px solid var(--border)',
              background: `${selected.color}05`,
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.58rem',
                color: selected.color,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
              }}>
                {selected.category} · {selected.year} · {selected.duration}
              </p>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                fontWeight: 800,
                color: 'var(--text)',
                marginBottom: '0.3rem',
              }}>
                {selected.title}
              </h2>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>{selected.tagline}</p>
            </div>

            <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p style={{ color: 'var(--text-dim)', lineHeight: 1.85, fontSize: '0.9rem' }}>
                {selected.desc}
              </p>

              {[
                { label: 'THE CHALLENGE', text: selected.challenge, color: selected.color, bg: `${selected.color}06` },
                { label: 'OUR SOLUTION',  text: selected.solution,  color: 'var(--neon2)',  bg: 'rgba(14,165,233,0.05)' },
              ].map(block => (
                <div
                  key={block.label}
                  style={{ padding: '1rem 1.25rem', borderLeft: `2px solid ${block.color}`, background: block.bg }}
                >
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: block.color, letterSpacing: '0.14em', marginBottom: '0.4rem' }}>
                    {block.label}
                  </p>
                  <p style={{ color: 'var(--text-dim)', fontSize: '0.875rem', lineHeight: 1.75 }}>{block.text}</p>
                </div>
              ))}

              <div style={{
                padding: '1rem 1.25rem',
                border: '1px solid rgba(0,221,184,0.15)',
                background: 'rgba(0,221,184,0.04)',
              }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--neon)', letterSpacing: '0.14em', marginBottom: '0.4rem' }}>
                  📊 OUTCOME
                </p>
                <p style={{ color: 'var(--text)', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 500 }}>
                  {selected.outcome}
                </p>
              </div>

              <div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--text-faint)', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
                  TECH STACK
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {selected.tech.map(t => (
                    <span key={t} className="tag" style={{
                      borderColor: `${selected.color}30`,
                      color: selected.color,
                      background: `${selected.color}07`,
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border)' }}>
                {selected.liveUrl && selected.liveUrl !== '#' && (
                  <a
                    href={selected.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-solid"
                    style={{ padding: '0.65rem 1.4rem', fontSize: '0.78rem', textDecoration: 'none' }}
                  >
                    Live Demo ↗
                  </a>
                )}
                {selected.githubUrl && selected.githubUrl !== '#' && (
                  <a
                    href={selected.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-neon"
                    style={{ padding: '0.65rem 1.4rem', fontSize: '0.78rem', textDecoration: 'none' }}
                  >
                    <span>GitHub ↗</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
