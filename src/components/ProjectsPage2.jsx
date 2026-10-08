export default function ProjectsPage2() {
  return (
    <div className="page-content" style={{ padding: '36px 32px' }}>
      {/* Continued header */}
      <h2 className="section-header section-header-right" style={{ fontSize: '22px', textAlign: 'right' }}>
        Projects <span style={{ 
          fontFamily: 'var(--font-serif)', 
          fontSize: '14px', 
          fontWeight: '400',
          color: 'var(--book-text-light)' 
        }}>continued</span>
      </h2>

      {/* Project 3: Fraud Shield AI */}
      <div className="project-card" style={{ marginBottom: '20px' }}>
        <img 
          src="/images/project-fraud-shield.png" 
          alt="Fraud Shield AI Dashboard"
          className="project-card-image"
          style={{ height: '130px' }}
        />
        <div className="project-card-body" style={{ padding: '16px 18px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '8px',
          }}>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '15px',
              fontWeight: '700',
              color: 'var(--book-navy)',
            }}>
              Fraud Shield AI
            </h3>
            <div style={{ display: 'flex', gap: '6px' }}>
              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px',
                  color: 'var(--book-royal)',
                  background: 'rgba(21,101,192,0.08)',
                  padding: '3px 8px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  border: '1px solid rgba(21,101,192,0.15)',
                }}
              >
                Live ↗
              </a>
              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px',
                  color: 'var(--book-text-light)',
                  background: 'rgba(0,0,0,0.04)',
                  padding: '3px 8px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  border: '1px solid rgba(0,0,0,0.08)',
                }}
              >
                GitHub ↗
              </a>
            </div>
          </div>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '11px',
            color: 'var(--book-text-light)',
            marginBottom: '8px',
          }}>
            Real-Time Transaction Monitoring Dashboard
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '12px' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--book-navy)', fontSize: '8px', marginTop: '4px' }}>▸</span>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                lineHeight: '1.5',
                color: 'var(--book-text)',
              }}>
                AI-powered fraud monitoring dashboard using <strong>Node.js, MongoDB, Python</strong>, and 
                <strong> Machine Learning</strong>, analyzing <strong>10,000+ simulated transactions</strong>.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--book-navy)', fontSize: '8px', marginTop: '4px' }}>▸</span>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                lineHeight: '1.5',
                color: 'var(--book-text)',
              }}>
                Built real-time <strong>fraud alerts</strong>, transaction monitoring, and fraud visualization features, 
                integrating <strong>ML-based risk analysis</strong> with web dashboard.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {['Node.js', 'MongoDB', 'Python', 'ML', 'Dashboard'].map((tech, i) => (
              <span key={i} className="skill-tag skill-tag-dark" style={{ fontSize: '9px', padding: '2px 7px' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Stats Summary */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '10px',
        marginTop: '8px',
      }}>
        {[
          { number: '3+', label: 'Projects Built', icon: '🚀' },
          { number: '10K+', label: 'Data Processed', icon: '📊' },
          { number: '5+', label: 'Tech Stacks', icon: '⚡' },
        ].map((stat, i) => (
          <div key={i} style={{
            textAlign: 'center',
            padding: '14px 8px',
            background: 'linear-gradient(135deg, rgba(26,35,126,0.06), rgba(21,101,192,0.03))',
            borderRadius: '8px',
            border: '1px solid rgba(26,35,126,0.1)',
          }}>
            <div style={{ fontSize: '18px', marginBottom: '4px' }}>{stat.icon}</div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '20px',
              fontWeight: '700',
              color: 'var(--book-navy)',
              lineHeight: '1',
            }}>
              {stat.number}
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              color: 'var(--book-text-light)',
              marginTop: '4px',
              letterSpacing: '0.5px',
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Page Number */}
      <span className="page-number right">06</span>
    </div>
  )
}
