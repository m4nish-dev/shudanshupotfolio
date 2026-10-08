export default function CertificationsPage() {
  return (
    <div className="page-content" style={{ padding: '36px 32px' }}>
      {/* Section Header */}
      <h2 className="section-header section-header-right" style={{ fontSize: '22px', textAlign: 'right' }}>
        Certifications
      </h2>

      {/* Certificate 1: Generative AI */}
      <div className="certificate-card" style={{ marginBottom: '16px' }}>
        <img 
          src="/images/certificate-genai.png" 
          alt="Generative AI Fundamentals Certificate"
          className="certificate-img"
          style={{ height: '160px', objectFit: 'contain', background: '#f5f5f5', padding: '4px' }}
        />
        <div style={{ padding: '12px 16px' }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '14px',
            fontWeight: '600',
            color: 'var(--book-navy)',
            marginBottom: '2px',
          }}>
            Generative AI Fundamentals
          </h3>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '11px',
            color: 'var(--book-text-light)',
          }}>
            IBM • Coursera Specialization
          </p>
        </div>
      </div>

      {/* Certificate 2: DSA */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(26,35,126,0.06), rgba(21,101,192,0.03))',
        borderRadius: '8px',
        padding: '16px',
        border: '1px solid rgba(26,35,126,0.1)',
        marginBottom: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
      }}>
        <div style={{
          width: '44px',
          height: '44px',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, var(--book-navy), var(--book-royal))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          flexShrink: 0,
        }}>
          📐
        </div>
        <div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '14px',
            fontWeight: '600',
            color: 'var(--book-navy)',
            marginBottom: '2px',
          }}>
            Data Structures and Algorithms
          </h3>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '11px',
            color: 'var(--book-text-light)',
          }}>
            Professional Certification
          </p>
        </div>
      </div>

      {/* Certificate 3: Java */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(201,169,110,0.08), rgba(201,169,110,0.02))',
        borderRadius: '8px',
        padding: '16px',
        border: '1px solid rgba(201,169,110,0.15)',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
      }}>
        <div style={{
          width: '44px',
          height: '44px',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, #c9a96e, #e8d5a8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          flexShrink: 0,
        }}>
          ☕
        </div>
        <div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '14px',
            fontWeight: '600',
            color: 'var(--book-navy)',
            marginBottom: '2px',
          }}>
            Java Programming
          </h3>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '11px',
            color: 'var(--book-text-light)',
          }}>
            Professional Certification
          </p>
        </div>
      </div>

      {/* Certificate Image Placeholder Note */}
      <div style={{
        padding: '12px 16px',
        background: 'rgba(201,169,110,0.06)',
        borderRadius: '6px',
        borderLeft: '3px solid var(--book-gold)',
      }}>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '11px',
          color: 'var(--book-text-light)',
          fontStyle: 'italic',
          lineHeight: '1.5',
        }}>
          Additional certifications and credential images can be added to this section as they are earned.
        </p>
      </div>

      {/* Page Number */}
      <span className="page-number right">08</span>
    </div>
  )
}
