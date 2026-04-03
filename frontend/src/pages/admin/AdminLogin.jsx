import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function AdminLogin() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const submit = async e => {
    e.preventDefault(); setLoading(true); setError('')
    try { await login(form.email, form.password); navigate('/admin/dashboard') }
    catch (err) { setError(err.response?.data?.message || 'Invalid credentials') }
    finally { setLoading(false) }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 grid-bg" style={{ background: 'var(--bg)' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(0,255,224,0.06) 0%, transparent 60%)' }} />

      <div className="relative w-full max-w-md">
        <div className="text-center mb-10">
          <div className="w-14 h-14 flex items-center justify-center mx-auto mb-5"
            style={{ border: '1px solid var(--neon)', background: 'rgba(0,255,224,0.06)' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', color: 'var(--neon)', fontWeight: 800, letterSpacing: '0.05em' }}>DR</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 900, color: 'var(--text)', letterSpacing: '0.1em' }}>
            ADMIN PORTAL
          </h1>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-faint)', letterSpacing: '0.1em', marginTop: '0.4rem' }}>
            DEEPRAPIT DASHBOARD
          </p>
        </div>

        <div className="neon-card p-8">
          <form onSubmit={submit} className="flex flex-col gap-5">
            {[['email','Email','admin@deeprapit.com','email'],['password','Password','••••••••','password']].map(([n,l,p,t]) => (
              <div key={n}>
                <label className="block mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem', color: 'var(--text-faint)', letterSpacing: '0.18em' }}>
                  {l.toUpperCase()}
                </label>
                <input type={t} required placeholder={p} value={form[n]} onChange={e => setForm({ ...form, [n]: e.target.value })}
                  className="w-full px-4 py-3 text-sm outline-none transition-all"
                  style={{ background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--text)', fontFamily: 'var(--font-body)' }}
                  onFocus={e => e.target.style.borderColor = 'var(--neon)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'} />
              </div>
            ))}

            {error && (
              <p className="px-4 py-3 text-sm text-red-400"
                style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
                {error}
              </p>
            )}

            <button type="submit" disabled={loading} className="btn-solid rounded-none py-3.5 w-full text-sm disabled:opacity-60 mt-2">
              {loading ? 'AUTHENTICATING...' : 'SIGN IN →'}
            </button>
          </form>
        </div>

        <p className="text-center mt-6" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--text-faint)', letterSpacing: '0.08em' }}>
          © 2025 DEEPRAPIT · AUTHORIZED PERSONNEL ONLY
        </p>
      </div>
    </div>
  )
}
