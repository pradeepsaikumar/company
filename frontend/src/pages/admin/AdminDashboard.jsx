import { useState, useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const TABS = ['Overview', 'Blog Posts', 'Messages', 'Newsletter']
const CATS = ['Web Development', 'Mobile Apps', 'UI/UX Design', 'Digital Marketing']

export default function AdminDashboard() {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const [tab, setTab] = useState('Overview')
  const [contacts, setContacts] = useState([])
  const [subs, setSubs] = useState([])
  const [posts, setPosts] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editPost, setEditPost] = useState(null)
  const [pf, setPf] = useState({ title: '', excerpt: '', category: 'Web Development', content: '', author: 'Pradeep Sai Kumar' })
  const [saving, setSaving] = useState(false)

  useEffect(() => { fetchAll() }, [])

  const fetchAll = async () => {
    try {
      const [c, s, p] = await Promise.all([
        axios.get('https://company-0bf4.onrender.com/api/contact'),
        axios.get('https://company-0bf4.onrender.com/api/newsletter'),
        axios.get('https://company-0bf4.onrender.com/api/blog'),
      ])
      setContacts(c.data || [])
      setSubs(s.data || [])
      setPosts(p.data || [])
    } catch {}
  }

  const savePost = async () => {
    if (!pf.title || !pf.content) return
    setSaving(true)
    try {
      const slug = pf.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
      const readTime = Math.ceil(pf.content.split(' ').length / 200) + ' min read'
      if (editPost) {
        await axios.put(`/api/blog/${editPost._id}`, { ...pf, slug, readTime })
      } else {
        await axios.post('/api/blog', { ...pf, slug, readTime, date: new Date() })
      }
      setShowForm(false)
      setEditPost(null)
      setPf({ title: '', excerpt: '', category: 'Web Development', content: '', author: 'Pradeep Sai Kumar' })
      fetchAll()
    } catch { alert('Error saving post') }
    finally { setSaving(false) }
  }

  const deletePost = async (id) => {
    if (!confirm('Delete this post?')) return
    await axios.delete(`/api/blog/${id}`)
    fetchAll()
  }

  const startEdit = (p) => {
    setEditPost(p)
    setPf({ title: p.title, excerpt: p.excerpt || '', category: p.category, content: p.content, author: p.author })
    setShowForm(true)
  }

  const markRead = async (id) => {
    try { await axios.patch(`/api/contact/${id}/read`); fetchAll() } catch {}
  }

  const inp = {
    width: '100%', padding: '0.65rem 0.875rem',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    color: 'var(--text)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.875rem',
    outline: 'none',
  }

  return (
    <div className="min-h-screen flex" style={{ background: '#020408', fontFamily: 'var(--font-body)' }}>

      {/* ── SIDEBAR ── */}
      <div className="w-60 flex-shrink-0 flex flex-col py-8 px-4"
        style={{ background: 'rgba(255,255,255,0.02)', borderRight: '1px solid rgba(0,255,224,0.06)' }}>

        {/* Logo */}
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-8 h-8 flex items-center justify-center"
            style={{ border: '1px solid var(--neon)', background: 'rgba(0,255,224,0.06)' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem', color: 'var(--neon)', fontWeight: 800 }}>DR</span>
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '0.05em' }}>
              Deep<span style={{ color: 'var(--neon)' }}>Rap</span><span style={{ color: 'var(--neon2)' }}>IT</span>
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: 'rgba(0,255,224,0.4)', letterSpacing: '0.1em' }}>ADMIN</p>
          </div>
        </div>

        {/* Nav tabs */}
        <nav className="flex flex-col gap-1 flex-1">
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)}
              className="text-left px-4 py-3 transition-all"
              style={{
                fontFamily: 'var(--font-display)', fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase',
                background: tab === t ? 'rgba(0,255,224,0.08)' : 'transparent',
                color: tab === t ? 'var(--neon)' : 'rgba(255,255,255,0.3)',
                borderLeft: tab === t ? '2px solid var(--neon)' : '2px solid transparent',
              }}>
              {t === 'Overview' && '◈ '}
              {t === 'Blog Posts' && '✍ '}
              {t === 'Messages' && '✉ '}
              {t === 'Newsletter' && '◆ '}
              {t}
            </button>
          ))}
        </nav>

        {/* Footer actions */}
        <div className="flex flex-col gap-2 px-2">
          <a href="/" target="_blank"
            className="py-2.5 text-center transition-all"
            style={{ border: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-display)', fontSize: '0.55rem', letterSpacing: '0.1em', textDecoration: 'none' }}>
            VIEW SITE ↗
          </a>
          <button onClick={() => { logout(); navigate('/admin/login') }}
            className="py-2.5 transition-all"
            style={{ border: '1px solid rgba(239,68,68,0.15)', color: '#f87171', fontFamily: 'var(--font-display)', fontSize: '0.55rem', letterSpacing: '0.1em', background: 'rgba(239,68,68,0.05)' }}>
            SIGN OUT
          </button>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="flex-1 overflow-y-auto p-8">

        {/* OVERVIEW */}
        {tab === 'Overview' && (
          <div>
            <h1 className="mb-1" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, color: 'var(--text)', letterSpacing: '0.05em' }}>
              DASHBOARD
            </h1>
            <p className="mb-8" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'rgba(0,255,224,0.4)', letterSpacing: '0.1em' }}>
              WELCOME BACK, ADMIN
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {[
                { l: 'Total Messages', v: contacts.length, c: 'var(--neon)' },
                { l: 'Subscribers', v: subs.length, c: 'var(--neon3)' },
                { l: 'Blog Posts', v: posts.length, c: 'var(--neon2)' },
              ].map(s => (
                <div key={s.l} className="neon-card p-6">
                  <p className="text-4xl font-black mb-2" style={{ fontFamily: 'var(--font-display)', color: s.c }}>{s.v}</p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>
                    {s.l.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>

            {/* Recent messages */}
            <p className="mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', color: 'var(--text)', letterSpacing: '0.1em' }}>
              RECENT MESSAGES
            </p>
            <div className="flex flex-col gap-2">
              {contacts.slice(0, 5).map((c, i) => (
                <div key={i} className="neon-card p-4 flex items-center justify-between">
                  <div>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', color: 'var(--text)', letterSpacing: '0.04em' }}>{c.name}</p>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em' }}>
                      {c.email} · {c.service}
                    </p>
                  </div>
                  <span className="px-2.5 py-1"
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em', background: c.read ? 'rgba(0,255,224,0.06)' : 'rgba(0,255,224,0.15)', color: 'var(--neon)', border: '1px solid rgba(0,255,224,0.15)' }}>
                    {c.read ? 'READ' : 'NEW'}
                  </span>
                </div>
              ))}
              {!contacts.length && (
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)' }}>No messages yet.</p>
              )}
            </div>
          </div>
        )}

        {/* BLOG POSTS */}
        {tab === 'Blog Posts' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, color: 'var(--text)', letterSpacing: '0.05em' }}>BLOG POSTS</h1>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'rgba(0,255,224,0.4)', letterSpacing: '0.1em', marginTop: '0.2rem' }}>
                  {posts.length} POSTS TOTAL
                </p>
              </div>
              <button
                onClick={() => { setEditPost(null); setPf({ title: '', excerpt: '', category: 'Web Development', content: '', author: 'Pradeep Sai Kumar' }); setShowForm(true) }}
                className="btn-solid rounded-none px-5 py-2.5 text-xs">
                + NEW POST
              </button>
            </div>

            {/* Post form */}
            {showForm && (
              <div className="neon-card p-6 mb-8">
                <p className="mb-5" style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', color: 'var(--neon)', letterSpacing: '0.1em' }}>
                  {editPost ? 'EDIT POST' : 'NEW BLOG POST'}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input value={pf.title} onChange={e => setPf({ ...pf, title: e.target.value })}
                    placeholder="Post title" style={inp} />
                  <select value={pf.category} onChange={e => setPf({ ...pf, category: e.target.value })} style={inp}>
                    {CATS.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <input value={pf.excerpt} onChange={e => setPf({ ...pf, excerpt: e.target.value })}
                  placeholder="Short excerpt / summary"
                  style={{ ...inp, marginBottom: '1rem', display: 'block' }} />
                <input value={pf.author} onChange={e => setPf({ ...pf, author: e.target.value })}
                  placeholder="Author name"
                  style={{ ...inp, marginBottom: '1rem', display: 'block' }} />
                <textarea value={pf.content} onChange={e => setPf({ ...pf, content: e.target.value })}
                  placeholder="Write your post content here (HTML supported)..."
                  rows={12}
                  style={{ ...inp, resize: 'none', marginBottom: '1rem', display: 'block' }} />
                <div className="flex gap-3">
                  <button onClick={savePost} disabled={saving}
                    className="btn-solid rounded-none px-5 py-2.5 text-xs disabled:opacity-60">
                    {saving ? 'SAVING...' : editPost ? 'UPDATE POST' : 'PUBLISH POST'}
                  </button>
                  <button onClick={() => { setShowForm(false); setEditPost(null) }}
                    className="px-5 py-2.5 text-xs transition-all"
                    style={{ border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-display)', fontSize: '0.6rem', letterSpacing: '0.08em' }}>
                    CANCEL
                  </button>
                </div>
              </div>
            )}

            {/* Posts list */}
            <div className="flex flex-col gap-3">
              {posts.map(p => (
                <div key={p._id} className="neon-card p-5 flex items-center justify-between">
                  <div>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', color: 'var(--text)', letterSpacing: '0.03em', marginBottom: '0.2rem' }}>
                      {p.title}
                    </p>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em' }}>
                      {p.category} · {p.author} · {p.readTime}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => startEdit(p)}
                      className="px-3 py-1.5"
                      style={{ border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-display)', fontSize: '0.55rem', letterSpacing: '0.08em' }}>
                      EDIT
                    </button>
                    <button onClick={() => deletePost(p._id)}
                      className="px-3 py-1.5"
                      style={{ border: '1px solid rgba(239,68,68,0.2)', color: '#f87171', fontFamily: 'var(--font-display)', fontSize: '0.55rem', letterSpacing: '0.08em', background: 'rgba(239,68,68,0.06)' }}>
                      DELETE
                    </button>
                  </div>
                </div>
              ))}
              {!posts.length && (
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)', textAlign: 'center', padding: '3rem 0' }}>
                  NO POSTS YET. CREATE YOUR FIRST POST!
                </p>
              )}
            </div>
          </div>
        )}

        {/* MESSAGES */}
        {tab === 'Messages' && (
          <div>
            <h1 className="mb-1" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, color: 'var(--text)', letterSpacing: '0.05em' }}>
              MESSAGES
            </h1>
            <p className="mb-8" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'rgba(0,255,224,0.4)', letterSpacing: '0.1em' }}>
              {contacts.length} TOTAL · {contacts.filter(c => !c.read).length} UNREAD
            </p>
            <div className="flex flex-col gap-4">
              {contacts.map((c, i) => (
                <div key={i} className="neon-card p-6"
                  style={{ borderColor: !c.read ? 'rgba(0,255,224,0.25)' : undefined }}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text)', letterSpacing: '0.04em' }}>{c.name}</p>
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em', marginTop: '0.2rem' }}>
                        {c.email}{c.phone ? ` · ${c.phone}` : ''}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {c.service && (
                        <span className="px-2.5 py-1"
                          style={{ border: '1px solid rgba(0,255,224,0.2)', background: 'rgba(0,255,224,0.06)', fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--neon)', letterSpacing: '0.08em' }}>
                          {c.service.toUpperCase()}
                        </span>
                      )}
                      {!c.read && (
                        <button onClick={() => markRead(c._id)}
                          className="px-2.5 py-1"
                          style={{ border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-display)', fontSize: '0.5rem', letterSpacing: '0.08em' }}>
                          MARK READ
                        </button>
                      )}
                    </div>
                  </div>
                  {c.budget && (
                    <p className="mb-2" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em' }}>
                      BUDGET: {c.budget.toUpperCase()}
                    </p>
                  )}
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-body)' }}>{c.message}</p>
                  {c.createdAt && (
                    <p className="mt-3" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: 'rgba(255,255,255,0.15)', letterSpacing: '0.06em' }}>
                      {new Date(c.createdAt).toLocaleString('en-IN')}
                    </p>
                  )}
                </div>
              ))}
              {!contacts.length && (
                <div className="text-center py-16">
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)' }}>NO MESSAGES YET.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* NEWSLETTER */}
        {tab === 'Newsletter' && (
          <div>
            <h1 className="mb-1" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, color: 'var(--text)', letterSpacing: '0.05em' }}>
              NEWSLETTER
            </h1>
            <p className="mb-8" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'rgba(0,255,224,0.4)', letterSpacing: '0.1em' }}>
              {subs.length} SUBSCRIBERS
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {subs.map((s, i) => (
                <div key={i} className="neon-card px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center text-xs font-black flex-shrink-0"
                    style={{ border: '1px solid rgba(0,255,224,0.2)', background: 'rgba(0,255,224,0.06)', fontFamily: 'var(--font-display)', color: 'var(--neon)' }}>
                    {s.email?.charAt(0).toUpperCase()}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-sm truncate" style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-body)' }}>{s.email}</p>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.06em' }}>
                      {s.createdAt ? new Date(s.createdAt).toLocaleDateString('en-IN') : 'SUBSCRIBED'}
                    </p>
                  </div>
                </div>
              ))}
              {!subs.length && (
                <div className="col-span-3 text-center py-16">
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)' }}>NO SUBSCRIBERS YET.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
