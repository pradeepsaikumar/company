import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const fallback = {
  title: 'Why Every Business in Vijayawada Needs a Website in 2025',
  category: 'Digital Marketing', author: 'Pradeep Sai Kumar',
  date: '2025-03-01', readTime: '4 min read', color: '#00ddb8',
  content: `
    <h2>THE DIGITAL SHIFT IS REAL</h2>
    <p>In 2025, over 85% of customers search online before making a purchase decision — even for local businesses. If you don't have a website, you're invisible to the majority of your potential customers.</p>
    <p>We've worked with dozens of businesses in Vijayawada and across Andhra Pradesh. The difference between businesses with a strong digital presence and those without is striking.</p>
    <h2>WHAT A WEBSITE ACTUALLY DOES FOR YOU</h2>
    <p>A website isn't just a digital brochure. Done right, it's your best salesperson — working 24/7, never taking a day off. It builds trust, answers questions, and converts visitors into customers.</p>
    <ul>
      <li><strong>Credibility:</strong> People trust businesses with professional websites more.</li>
      <li><strong>Discoverability:</strong> Show up when people search for your services.</li>
      <li><strong>Lead generation:</strong> Capture enquiries even while you sleep.</li>
      <li><strong>Competitive advantage:</strong> Many local businesses still don't have one.</li>
    </ul>
    <h2>WHAT MAKES A GOOD BUSINESS WEBSITE?</h2>
    <p>Not all websites are created equal. A good business website needs to load fast, work on mobile, clearly communicate your value proposition, and make it easy for customers to contact you.</p>
    <p>At DeepRapIT, we've built websites for businesses ranging from local restaurants to e-commerce platforms. The principles remain the same: clarity, speed, and a clear path to action.</p>
    <h2>GETTING STARTED</h2>
    <p>If you've been putting off building a website, now is the time. The investment pays for itself quickly through new customers who would never have found you otherwise.</p>
    <p>We offer free consultations to help you understand what kind of website would work best for your specific business.</p>
  `
}

export default function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`/api/blog/${slug}`).then(r => setPost(r.data)).catch(() => setPost({ ...fallback, slug })).finally(() => setLoading(false))
  }, [slug])

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--bg)' }}>
      <div className="w-8 h-8 rounded-full border border-[var(--neon)] border-t-transparent animate-spin" />
    </div>
  )

  return (
    <div style={{ background: 'var(--bg)', paddingTop: '68px' }}>
      <section className="py-16 px-6 lg:px-10 grid-bg">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 mb-8 transition-all hover:-translate-x-1"
            style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', color: '#00ddb8', letterSpacing: '0.12em' }}>
            ← BACK TO BLOG
          </Link>

          <div className="inline-block px-3 py-1.5 mb-5"
            style={{ border: `1px solid ${post.color || '#00ddb8'}40`, background: `${post.color || '#00ddb8'}10`, fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: post.color || '#00ddb8', letterSpacing: '0.1em' }}>
            {post.category?.toUpperCase()}
          </div>

          <h1 className="mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 900, color: 'var(--text)', letterSpacing: '-0.01em', lineHeight: 1.15 }}>
            {post.title}
          </h1>

          <div className="flex items-center gap-5 pb-8" style={{ borderBottom: '1px solid var(--border)' }}>
            <div className="w-10 h-10 flex items-center justify-center text-sm font-black"
              style={{ border: '1px solid var(--neon)', background: 'rgba(0,255,224,0.08)', fontFamily: 'var(--font-display)', color: 'var(--neon)' }}>
              {post.author?.charAt(0)}
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', color: 'var(--text)', letterSpacing: '0.05em' }}>{post.author}</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--text-faint)', letterSpacing: '0.08em' }}>
                {post.date ? new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }) : ''} · {post.readTime}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <div className="prose mt-10" dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* CTA */}
          <div className="mt-16 p-8 neon-card text-center" style={{ borderColor: 'rgba(0,255,224,0.2)' }}>
            <p className="mb-2" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#00ddb8', letterSpacing: '0.2em' }}>// READY TO BUILD?</p>
            <h3 className="mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, color: 'var(--text)' }}>
              LET'S TALK ABOUT YOUR PROJECT
            </h3>
            <p className="mb-6" style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-body)' }}>Free consultation. No pressure.</p>
            <Link to="/contact" className="btn-solid rounded-none inline-block px-8 py-3 text-sm">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
