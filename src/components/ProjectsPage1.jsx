export default function ProjectsPage1() {
  return (
    <div className="page-content" style={{ padding: '36px 32px' }}>
      {/* Section Header */}
      <h2 className="section-header" style={{ fontSize: '22px' }}>
        Projects
      </h2>

      {/* Project 1: RETRIEVIA */}
      <div className="project-card" style={{ marginBottom: '16px' }}>
        <div style={{
          background: 'linear-gradient(135deg, var(--book-navy), #0d47a1)',
          padding: '16px 18px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            top: '-20px',
            right: '-20px',
            width: '80px',
            height: '80px',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '50%',
          }}></div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '16px',
                fontWeight: '700',
                color: 'white',
                marginBottom: '2px',
              }}>
                RETRIEVIA
              </h3>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '11px',
                color: 'rgba(255,255,255,0.7)',
              }}>
                Smart Lost and Found System
              </p>
            </div>
            <div style={{ display: 'flex', gap: '6px' }}>
              <a 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px',
                  color: 'var(--book-royal)',
                  background: 'rgba(21,101,192,0.1)',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  border: '1px solid rgba(21,101,192,0.3)',
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
                  color: 'var(--book-gold-light)',
                  background: 'rgba(255,255,255,0.1)',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  border: '1px solid rgba(201,169,110,0.3)',
                }}
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>

        <div className="project-card-body" style={{ padding: '14px 18px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--book-navy)', fontSize: '8px', marginTop: '4px' }}>▸</span>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                lineHeight: '1.5',
                color: 'var(--book-text)',
              }}>
                Full-stack platform using <strong>Node.js, Express.js, MongoDB</strong>, supporting 
                <strong> 100+ item records</strong> with reporting, verification, and recovery workflows.
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
                Implemented <strong>bcrypt authentication</strong>, backend APIs, and <strong>Hugging Face Transformers</strong> for 
                AI-assisted item matching.
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {['Node.js', 'Express.js', 'MongoDB', 'AI/ML'].map((tech, i) => (
              <span key={i} className="skill-tag skill-tag-blue" style={{ fontSize: '9px', padding: '2px 7px' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Project 2: NearBuy */}
      <div className="project-card">
        <img 
          src="/images/project-nearbuy.png" 
          alt="NearBuy Marketplace"
          className="project-card-image"
          style={{ height: '120px' }}
        />
        <div className="project-card-body" style={{ padding: '14px 18px' }}>
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
              NearBuy
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
            marginBottom: '6px',
          }}>
            Full Stack Marketplace Platform
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            lineHeight: '1.5',
            color: 'var(--book-text)',
            marginBottom: '8px',
          }}>
            Hyper-local marketplace using <strong>React.js and Firebase</strong>, enabling product discovery 
            within <strong>50 km radius</strong> across <strong>500+ listings</strong>.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {['React.js', 'Firebase', 'Auth', 'Geolocation'].map((tech, i) => (
              <span key={i} className="skill-tag skill-tag-gold" style={{ fontSize: '9px', padding: '2px 7px' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Page Number */}
      <span className="page-number left">05</span>
    </div>
  )
}
