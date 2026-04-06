import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const sample = [
  { _id:'1', title:'Why Every Business in Vijayawada Needs a Website in 2025', excerpt:'The digital landscape has shifted. Customers Google before they visit. Here\'s why your local business needs an online presence yesterday.', category:'Digital Marketing', author:'Pradeep Sai Kumar', date:'2025-03-01', readTime:'4 min read', slug:'why-every-business-needs-website-2025', color:'#00ddb8' },
  { _id:'2', title:'React vs Next.js: Which Should You Choose for Your Startup?', excerpt:'Both are excellent choices, but the right one depends on your product. We break down the tradeoffs after building 20+ projects with both.', category:'Web Development', author:'Nandini', date:'2025-02-20', readTime:'6 min read', slug:'react-vs-nextjs-startup-choice', color:'#0ea5e9' },
  { _id:'3', title:'UI/UX Mistakes That Kill Conversions (And How to Fix Them)', excerpt:'Small design decisions can make or break your conversion rate. We analyzed 50 websites to find the most common UX errors.', category:'UI/UX Design', author:'Tejasri', date:'2025-02-10', readTime:'5 min read', slug:'ux-mistakes-that-kill-conversions', color:'#a855f7' },
  { _id:'4', title:'How We Built a Mobile App in 6 Weeks for a Local Startup', excerpt:'A behind-the-scenes look at our development process, the tools we used, and what we learned from shipping fast.', category:'Mobile Apps', author:'Gayatri', date:'2025-01-28', readTime:'7 min read', slug:'how-we-built-mobile-app-6-weeks', color:'#f97316' },
  { _id:'5', title:'SEO in 2025: What Actually Works for Indian Businesses', excerpt:'Google\'s algorithm has changed drastically. Here\'s what\'s working now for businesses targeting Indian audiences.', category:'Digital Marketing', author:'Pradeep Sai Kumar', date:'2025-01-15', readTime:'5 min read', slug:'seo-2025-indian-businesses', color:'#00ddb8' },
  { _id:'6', title:'Building Offline-First Apps with React Native', excerpt:'Poor network connectivity shouldn\'t break your app. How we architect mobile apps that work even in 2G conditions.', category:'Mobile Apps', author:'Gayatri', date:'2025-01-05', readTime:'8 min read', slug:'offline-first-react-native', color:'#0ea5e9' },
]

const CATS = ['All', 'Web Development', 'Mobile Apps', 'UI/UX Design', 'Digital Marketing']

const fmt = dateStr => new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })

export default function Blog() {
  const [posts, setPosts] = useState(sample)
  const [cat,   setCat]   = useState('All')

  useEffect(() => {
    axios.get('https://company-0bf4.onrender.com/api/blog')
      .then(r => { if (r.data?.length) setPosts(r.data) })
      .catch(() => {})
  }, [])

  const filtered = cat === 'All' ? posts : posts.filter(p => p.category === cat)

  return (
    <div style={{ background: 'var(--bg)', paddingTop: '68px' }}>

      {/* ── Hero — compact, not half-screen ── */}
      <section
        className="grid-bg relative overflow-hidden"
        style={{ padding: '4rem 1.5rem 3rem' }}
      >
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 50% 70%, rgba(0,221,184,0.05) 0%, transparent 65%)',
        }} />
        <div className="max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label reveal">// Blog</span>
          <h1
            className="reveal reveal-delay-1"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 800,
              color: 'var(--text)',
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              marginBottom: '0.75rem',
            }}
          >
            INSIGHTS &amp; <span className="grad-text">IDEAS</span>
          </h1>
          <p
            className="reveal reveal-delay-2"
            style={{ color: 'var(--text-dim)', maxWidth: 480, lineHeight: 1.7, fontSize: '1rem', marginBottom: '1.75rem' }}
          >
            Thoughts on web development, design, and growing your digital presence.
          </p>

          {/* Category filter */}
          <div className="reveal reveal-delay-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {CATS.map(c => (
              <button
                key={c}
                onClick={() => setCat(c)}
                style={{
                  padding: '0.45rem 1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  border: `1px solid ${cat === c ? 'var(--neon)' : 'var(--border)'}`,
                  color: cat === c ? 'var(--neon)' : 'var(--text-faint)',
                  background: cat === c ? 'rgba(0,221,184,0.07)' : 'transparent',
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

      {/* ── Blog grid ── */}
      <section style={{ padding: '2rem 1.5rem 5rem' }}>
        <div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '1.25rem' }}
        >
          {filtered.map(post => (
            <Link
              key={post._id}
              to={`/blog/${post.slug}`}
              className="neon-card group"
              style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}
            >
              {/* Cover — proper 16:9-ish ratio, not squished */}
              <div
                className="grid-bg-dense"
                style={{
                  position: 'relative',
                  paddingBottom: '52%',   /* ~16:9 ratio */
                  background: `${post.color || '#00ddb8'}08`,
                  borderBottom: '1px solid var(--border)',
                  overflow: 'hidden',
                  flexShrink: 0,
                }}
              >
                {/* Big letter background */}
                <div style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(5rem, 12vw, 8rem)',
                    fontWeight: 900,
                    color: post.color || '#00ddb8',
                    opacity: 0.06,
                    userSelect: 'none',
                    lineHeight: 1,
                  }}>
                    {post.category?.charAt(0)}
                  </span>
                </div>

                {/* Category badge */}
                <div style={{
                  position: 'absolute', top: '0.75rem', left: '0.75rem',
                  padding: '0.3rem 0.65rem',
                  border: `1px solid ${post.color || '#00ddb8'}40`,
                  background: `${post.color || '#00ddb8'}10`,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.55rem',
                  color: post.color || '#00ddb8',
                  letterSpacing: '0.1em',
                }}>
                  {post.category?.toUpperCase()}
                </div>

                {/* Read hover overlay */}
                <div
                  className="group-hover:opacity-100"
                  style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: `${post.color || '#00ddb8'}12`,
                    opacity: 0,
                    transition: 'opacity 0.25s ease',
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    color: post.color || '#00ddb8',
                    letterSpacing: '0.12em',
                    border: `1px solid ${post.color || '#00ddb8'}`,
                    padding: '0.4rem 0.9rem',
                  }}>
                    READ →
                  </span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '1.25rem 1.25rem 1rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: 'var(--text)',
                    lineHeight: 1.45,
                    marginBottom: '0.6rem',
                    transition: 'color 0.2s ease',
                  }}
                  className="group-hover:text-[var(--neon)]"
                >
                  {post.title}
                </h2>
                <p style={{
                  fontSize: '0.83rem',
                  color: 'var(--text-dim)',
                  lineHeight: 1.7,
                  marginBottom: '1rem',
                  flex: 1,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}>
                  {post.excerpt}
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid var(--border)',
                  paddingTop: '0.75rem',
                  gap: '0.5rem',
                }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--text-faint)', letterSpacing: '0.06em' }}>
                    {post.author}
                  </span>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.56rem', color: 'var(--text-faint)' }}>
                      {post.readTime}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.56rem', color: 'var(--text-faint)' }}>
                      {fmt(post.date)}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
