export default function EducationPage() {
  return (
    <div className="page-content" style={{ padding: '36px 32px' }}>
      {/* Section Header */}
      <h2 className="section-header" style={{ fontSize: '22px' }}>
        Education
      </h2>

      {/* College Image */}
      <img 
        src="/images/college-mit-adt.jpg" 
        alt="MIT Art, Design & Technology University"
        className="edu-image"
        style={{ height: '110px' }}
      />

      {/* Timeline */}
      <div className="timeline">
        {/* MIT ADT */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-start',
              marginBottom: '4px',
            }}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '14px',
                fontWeight: '600',
                color: 'var(--book-navy)',
              }}>
                MIT Art, Design & Technology University
              </h3>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: 'var(--book-text-light)',
                whiteSpace: 'nowrap',
                marginLeft: '8px',
                background: 'rgba(26,35,126,0.06)',
                padding: '2px 8px',
                borderRadius: '4px',
              }}>
                2023–2027
              </span>
            </div>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '13px',
              color: 'var(--book-text)',
              marginBottom: '4px',
            }}>
              B.Tech in Computer Science and Engineering
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'linear-gradient(135deg, rgba(26,35,126,0.1), rgba(21,101,192,0.06))',
              padding: '4px 12px',
              borderRadius: '20px',
              border: '1px solid rgba(26,35,126,0.15)',
            }}>
              <span style={{ fontSize: '12px' }}>🎓</span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                fontWeight: '600',
                color: 'var(--book-navy)',
              }}>
                CGPA: 8.98/10
              </span>
            </div>
          </div>
        </div>

        {/* Class XII */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-start',
              marginBottom: '4px',
            }}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '14px',
                fontWeight: '600',
                color: 'var(--book-navy)',
              }}>
                The Earth Public School
              </h3>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: 'var(--book-text-light)',
                whiteSpace: 'nowrap',
                marginLeft: '8px',
                background: 'rgba(26,35,126,0.06)',
                padding: '2px 8px',
                borderRadius: '4px',
              }}>
                2022
              </span>
            </div>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '13px',
              color: 'var(--book-text)',
              marginBottom: '4px',
            }}>
              Class XII – CBSE
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'linear-gradient(135deg, rgba(201,169,110,0.12), rgba(201,169,110,0.04))',
              padding: '4px 12px',
              borderRadius: '20px',
              border: '1px solid rgba(201,169,110,0.25)',
            }}>
              <span style={{ fontSize: '12px' }}>📊</span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                fontWeight: '600',
                color: '#8b6914',
              }}>
                85%
              </span>
            </div>
          </div>
        </div>

        {/* Class X */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-start',
              marginBottom: '4px',
            }}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '14px',
                fontWeight: '600',
                color: 'var(--book-navy)',
              }}>
                D.A.V Public School
              </h3>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: 'var(--book-text-light)',
                whiteSpace: 'nowrap',
                marginLeft: '8px',
                background: 'rgba(26,35,126,0.06)',
                padding: '2px 8px',
                borderRadius: '4px',
              }}>
                2020
              </span>
            </div>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '13px',
              color: 'var(--book-text)',
            }}>
              Class X – CBSE
            </p>
          </div>
        </div>
      </div>

      {/* Page Number */}
      <span className="page-number right">02</span>
    </div>
  )
}
