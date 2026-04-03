import { useState } from 'react'
import Modal from '../components/Modal'
import pradeepImg from '../assets/pradeep.jpg'
import nandiniImg from '../assets/nandini.jpg'
import tejuImg    from '../assets/teju.jpg'
import gayuImg    from '../assets/gayu.jpg'
import dineshImg  from '../assets/dinesh.jpg'
import praviImg   from '../assets/pravi.jpg'
import charanImg  from '../assets/charan.jpg'
import manuImg    from '../assets/manu.jpg'
import hemaImg    from '../assets/hema.jpg'

const team = [
  { name: 'Pradeep Sai Kumar', role: 'CEO & Founder',        short: 'Visionary · Full-Stack · Leader',          bio: 'The architect behind DeepRapIT. Pradeep founded the company in 2023 with a mission to bring world-class digital products to Indian businesses. A full-stack developer at heart, he leads with both technical depth and business acumen.', skills: ['Full-Stack Development', 'Product Strategy', 'Team Leadership', 'Business Development', 'System Architecture'], img: pradeepImg, color: '#00ddb8', linkedin: '#', github: '#', twitter: '#', quote: '"Technology is best when it brings people together."', since: '2023' },
  { name: 'Nandini',           role: 'CTO',                   short: 'Architecture · Backend · DevOps',           bio: "The technical genius powering DeepRapIT's engineering. Nandini architects scalable systems and keeps our tech stack at the cutting edge. Her expertise spans backend engineering, cloud infrastructure, and developer experience.", skills: ['System Architecture', 'Node.js', 'DevOps', 'Cloud Infrastructure', 'Database Design', 'API Development'], img: nandiniImg, color: '#a855f7', linkedin: '#', github: '#', twitter: '#', quote: '"Great software is built with empathy for the user."', since: '2023' },
  { name: 'Tejasri',           role: 'Account Manager',       short: 'Client Relations · Strategy · Delivery',   bio: 'Tejasri is the bridge between our clients and our team. She ensures every project is delivered on time, on budget, and beyond expectations. Her attention to detail and client empathy make her the heartbeat of our delivery process.', skills: ['Client Relations', 'Project Management', 'Agile Methodology', 'Requirements Gathering', 'Risk Management'], img: tejuImg, color: '#f97316', linkedin: '#', github: '#', twitter: '#', quote: '"A happy client is the best product we can ship."', since: '2023' },
  { name: 'Gayatri',           role: 'Application Developer', short: 'React · Mobile · Frontend',                bio: "Gayatri brings designs to life with clean, performant code. Specializing in React and React Native, she crafts interfaces that are both beautiful and blazing fast. She's our go-to for cross-platform mobile experiences.", skills: ['React', 'React Native', 'TypeScript', 'Frontend Architecture', 'Mobile Development', 'Performance Optimization'], img: gayuImg, color: '#0ea5e9', linkedin: '#', github: '#', twitter: '#', quote: '"Code is poetry. Make it beautiful."', since: '2023' },
  { name: 'Dinesh',            role: 'Application Tester',    short: 'QA · Automation · Performance',            bio: "Dinesh is our quality guardian. Nothing ships without his seal of approval. He combines manual exploratory testing with automated test suites to ensure every product we release is rock-solid.", skills: ['QA Testing', 'Test Automation', 'Performance Testing', 'Bug Tracking', 'Selenium', 'User Acceptance Testing'], img: dineshImg, color: '#00ddb8', linkedin: '#', github: '#', twitter: '#', quote: '"Quality is not an act, it\'s a habit."', since: '2023' },
  { name: 'Praveen',           role: 'Project Team Leader',   short: 'Agile · Delivery · Coordination',         bio: "Praveen keeps the engine running smoothly. As Project Team Leader, he coordinates across all teams, manages sprints, and ensures complex deliverables get broken down into achievable milestones.", skills: ['Agile / Scrum', 'Team Coordination', 'Sprint Planning', 'Stakeholder Management', 'Technical Documentation'], img: praviImg, color: '#ec4899', linkedin: '#', github: '#', twitter: '#', quote: '"A good plan today is better than a perfect plan tomorrow."', since: '2024' },
  { name: 'Sai Charan',        role: 'UI/UX Designer',        short: 'Figma · Design Systems · Research',       bio: 'A passionate UI/UX designer who crafts intuitive, visually stunning experiences. Specializes in user research, interaction design, and building comprehensive design systems that scale.', skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'Interaction Design', 'Wireframing'], img: charanImg, color: '#00ddb8', linkedin: '#', github: '#', twitter: '#', quote: '"Design is not just what it looks like. Design is how it works."', since: '2024' },
  { name: 'Manasa',            role: 'Backend Developer',     short: 'APIs · Databases · Microservices',        bio: 'Our backend specialist who engineers robust APIs and data architectures. Passionate about writing clean, maintainable code and building systems that scale effortlessly under load.', skills: ['Node.js', 'Python', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL'], img: manuImg, color: '#a855f7', linkedin: '#', github: '#', twitter: '#', quote: '"Good architecture is invisible. Bad architecture is everywhere."', since: '2024' },
  { name: 'Hemalatha',         role: 'Digital Marketing Lead',short: 'SEO · Ads · Content Strategy',            bio: 'The growth engine of DeepRapIT. Drives organic and paid acquisition strategies that deliver measurable results. Expert in SEO, PPC, and building content marketing funnels that convert.', skills: ['SEO Strategy', 'Google Ads', 'Meta Ads', 'Content Marketing', 'Email Campaigns', 'Analytics'], img: hemaImg, color: '#f97316', linkedin: '#', github: '#', twitter: '#', quote: '"Marketing is no longer about the stuff you make, but the stories you tell."', since: '2024' },
  { name: 'Member 10',         role: 'DevOps Engineer',       short: 'CI/CD · Cloud · Infrastructure',          bio: 'Keeps our systems running at 99.9% uptime. Manages cloud infrastructure, CI/CD pipelines, and ensures every deployment is seamless and reliable.', skills: ['AWS / GCP', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'Monitoring', 'Linux'], img: null, color: '#0ea5e9', linkedin: '#', github: '#', twitter: '#', quote: '"Infrastructure is the foundation everything else is built on."', since: '2025' },
]

export default function Team() {
  const [selected, setSelected] = useState(null)

  return (
    <div style={{ background: 'var(--bg)', paddingTop: '68px' }}>

      {/* Hero */}
      <section className="grid-bg relative overflow-hidden" style={{ padding: '5.5rem 1.5rem 5rem' }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 20% 50%, rgba(0,221,184,0.05) 0%, transparent 60%)',
        }} />
        <div className="max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label reveal">// Our Team</span>
          <h1 className="reveal reveal-delay-1" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.4rem, 6vw, 5rem)',
            fontWeight: 800,
            color: 'var(--text)',
            letterSpacing: '-0.025em',
            lineHeight: 1.08,
          }}>
            THE PEOPLE WHO<br /><span className="grad-text">MAKE IT HAPPEN</span>
          </h1>
          <p className="reveal reveal-delay-2" style={{
            marginTop: '1.5rem',
            maxWidth: '520px',
            fontSize: '1.02rem',
            color: 'var(--text-dim)',
            lineHeight: 1.75,
          }}>
            10 driven individuals united by a shared passion for technology and craft.
            Click any member to learn more.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section style={{ padding: '0 1.5rem 5rem' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" style={{ gap: '1rem' }}>
            {team.map((m, i) => (
              <div
                key={m.name}
                className="neon-card"
                style={{
                  cursor: 'pointer',
                  overflow: 'hidden',
                  borderColor: selected?.name === m.name ? m.color : undefined,
                }}
                onClick={() => setSelected(m)}
              >
                {/* Photo */}
                <div style={{ position: 'relative', height: 260, overflow: 'hidden' }}>
                  {m.img ? (
                    <img
                      src={m.img}
                      alt={m.name}
                      style={{
                        width: '100%', height: '100%',
                        objectFit: 'cover', objectPosition: 'center 15%',
                        transition: 'transform 0.4s ease',
                      }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  ) : (
                    <div
                      className="grid-bg-dense"
                      style={{
                        width: '100%', height: '100%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: `${m.color}07`,
                      }}
                    >
                      <div style={{
                        width: 56, height: 56, borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        border: `2px solid ${m.color}40`,
                        color: m.color,
                        fontFamily: 'var(--font-display)',
                        fontSize: '1rem',
                        fontWeight: 800,
                      }}>
                        {(i + 1).toString().padStart(2, '0')}
                      </div>
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: `linear-gradient(to top, ${m.color}cc 0%, transparent 65%)`,
                    opacity: 0, transition: 'opacity 0.3s ease',
                    display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
                    paddingBottom: '0.75rem',
                  }}
                    onMouseEnter={e => e.currentTarget.style.opacity = 1}
                    onMouseLeave={e => e.currentTarget.style.opacity = 0}
                  >
                    <p style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.55rem',
                      color: 'var(--bg)', letterSpacing: '0.1em', fontWeight: 700,
                    }}>
                      VIEW PROFILE
                    </p>
                  </div>
                  {/* Index badge */}
                  <div style={{
                    position: 'absolute', top: 8, left: 8,
                    width: 26, height: 26,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'var(--bg)',
                    border: `1px solid ${m.color}40`,
                  }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: m.color }}>
                      {(i + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: '1rem' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: 'var(--text)',
                    marginBottom: '0.2rem',
                    lineHeight: 1.3,
                  }}>
                    {m.name}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.55rem',
                    color: m.color,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}>
                    {m.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section
        style={{
          padding: '4.5rem 1.5rem',
          background: 'var(--bg2)',
          borderTop: '1px solid var(--border)',
          textAlign: 'center',
        }}
      >
        <div className="max-w-2xl mx-auto">
          <span className="section-label" style={{ display: 'flex', justifyContent: 'center' }}>// Join Us</span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)',
            fontWeight: 800,
            color: 'var(--text)',
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}>
            WANT TO BE PART<br /><span className="grad-text">OF THE TEAM?</span>
          </h2>
          <p style={{ color: 'var(--text-dim)', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: 1.7 }}>
            We're always looking for exceptional talent. If you're passionate about building great products, let's talk.
          </p>
          <a
            href="mailto:careers@deeprapit.com"
            className="btn-neon"
            style={{ padding: '0.85rem 2rem', fontSize: '0.8rem', textDecoration: 'none' }}
          >
            <span>Apply Now →</span>
          </a>
        </div>
      </section>

      {/* Member Modal */}
      <Modal open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div>
            {/* Photo header */}
            <div style={{ position: 'relative', height: 260, overflow: 'hidden' }}>
              {selected.img ? (
                <img src={selected.img} alt={selected.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }} />
              ) : (
                <div className="grid-bg-dense" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${selected.color}07` }}>
                  <div style={{ width: 72, height: 72, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `2px solid ${selected.color}60`, color: selected.color, fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800 }}>
                    {selected.name.charAt(0)}
                  </div>
                </div>
              )}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg2) 0%, transparent 55%)' }} />
              <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.5rem' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: selected.color, letterSpacing: '0.12em', marginBottom: '0.3rem' }}>
                  MEMBER SINCE {selected.since}
                </p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--text)' }}>
                  {selected.name}
                </h2>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: selected.color, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {selected.role}
                </p>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: '1.75rem' }}>
              <div style={{ padding: '1rem 1.25rem', borderLeft: `2px solid ${selected.color}`, background: `${selected.color}06`, marginBottom: '1.5rem' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-dim)', fontStyle: 'italic', lineHeight: 1.7 }}>
                  {selected.quote}
                </p>
              </div>

              <p style={{ color: 'var(--text-dim)', lineHeight: 1.85, fontSize: '0.9rem', marginBottom: '1.75rem' }}>
                {selected.bio}
              </p>

              <div style={{ marginBottom: '1.75rem' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: selected.color, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  Expertise
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {selected.skills.map(s => (
                    <span key={s} className="tag" style={{ background: `${selected.color}07`, borderColor: `${selected.color}30`, color: selected.color }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border)' }}>
                {[['LinkedIn', selected.linkedin], ['GitHub', selected.github], ['Twitter', selected.twitter]].map(([label, href]) => (
                  <a key={label} href={href} className="btn-neon" style={{ fontSize: '0.7rem', padding: '0.5rem 1.1rem', textDecoration: 'none' }}>
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
