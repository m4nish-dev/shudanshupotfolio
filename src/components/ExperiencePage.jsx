export default function ExperiencePage() {
  return (
    <div className="page-content" style={{ padding: '36px 32px' }}>
      {/* Section Header */}
      <h2 className="section-header" style={{ fontSize: '22px' }}>
        Experience
      </h2>

      {/* Experience Card */}
      <div className="experience-card">
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '12px',
        }}>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '16px',
              fontWeight: '700',
              color: 'var(--book-navy)',
              marginBottom: '3px',
            }}>
              Web Development Intern
            </h3>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '14px',
              color: 'var(--book-royal)',
              fontWeight: '600',
            }}>
              3i Infotech Ltd.
            </p>
          </div>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'white',
            whiteSpace: 'nowrap',
            background: 'var(--book-navy)',
            padding: '4px 12px',
            borderRadius: '20px',
          }}>
            Jun–Jul 2025
          </span>
        </div>

        {/* Divider */}
        <div className="decorative-line" style={{ margin: '12px 0' }}></div>

        {/* Responsibilities */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
            <div style={{
              width: '22px',
              height: '22px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--book-navy), var(--book-royal))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
              color: 'white',
              flexShrink: 0,
              marginTop: '2px',
            }}>
              01
            </div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              lineHeight: '1.6',
              color: 'var(--book-text)',
            }}>
              Developed <strong>5+ frontend modules</strong> using Angular and React, implementing responsive 
              UI components, forms, and application functionality.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
            <div style={{
              width: '22px',
              height: '22px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--book-navy), var(--book-royal))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
              color: 'white',
              flexShrink: 0,
              marginTop: '2px',
            }}>
              02
            </div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              lineHeight: '1.6',
              color: 'var(--book-text)',
            }}>
              Contributed to <strong>3+ production modules</strong> for the Bihar Government Student Education Portal, 
              supporting feature development, debugging, and UI enhancements.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
            <div style={{
              width: '22px',
              height: '22px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--book-navy), var(--book-royal))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
              color: 'white',
              flexShrink: 0,
              marginTop: '2px',
            }}>
              03
            </div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              lineHeight: '1.6',
              color: 'var(--book-text)',
            }}>
              Collaborated with developers using <strong>Git workflows</strong> for code integration, debugging, 
              and maintaining application quality.
            </p>
          </div>
        </div>

        {/* Tech Stack Used */}
        <div style={{ marginTop: '16px' }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: 'var(--book-text-light)',
            marginBottom: '6px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}>
            Tech Stack
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {['Angular', 'React', 'TypeScript', 'Git', 'REST APIs'].map((tech, i) => (
              <span key={i} className="skill-tag skill-tag-blue" style={{ fontSize: '10px', padding: '2px 8px' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Quote */}
      <div style={{
        marginTop: '24px',
        padding: '16px 20px',
        borderLeft: '3px solid var(--book-gold)',
        background: 'rgba(201,169,110,0.06)',
        borderRadius: '0 8px 8px 0',
      }}>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '13px',
          fontStyle: 'italic',
          color: 'var(--book-text)',
          lineHeight: '1.6',
        }}>
          "The best way to predict the future is to build it."
        </p>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          color: 'var(--book-text-light)',
          marginTop: '6px',
        }}>
          — Alan Kay
        </p>
      </div>

      {/* Page Number */}
      <span className="page-number right">04</span>
    </div>
  )
}
