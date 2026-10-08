export default function AchievementsPage() {
  return (
    <div className="page-content" style={{ padding: '36px 32px' }}>
      {/* Section Header */}
      <h2 className="section-header" style={{ fontSize: '22px' }}>
        Achievements
      </h2>

      {/* Amazon ML Challenge */}
      <div className="achievement-badge" style={{ marginBottom: '20px' }}>
        <div className="achievement-icon">🏆</div>
        <div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '14px',
            fontWeight: '700',
            color: 'var(--book-navy)',
            marginBottom: '4px',
          }}>
            Amazon ML Challenge 2025
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            lineHeight: '1.5',
            color: 'var(--book-text)',
          }}>
            Ranked in the <strong>Top 3%</strong> with a predictive pricing model achieving 
            a best SMAPE of <strong>55.72</strong>.
          </p>
        </div>
      </div>

      {/* Stats Highlight */}
      <div style={{
        background: 'linear-gradient(135deg, var(--book-navy), #0d47a1)',
        borderRadius: '10px',
        padding: '20px',
        marginBottom: '24px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '-30px',
          right: '-30px',
          width: '100px',
          height: '100px',
          background: 'rgba(201,169,110,0.1)',
          borderRadius: '50%',
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-20px',
          left: '-20px',
          width: '60px',
          height: '60px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '50%',
        }}></div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '28px',
              fontWeight: '700',
              color: 'var(--book-gold)',
              lineHeight: '1',
            }}>
              Top 3%
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              color: 'rgba(255,255,255,0.6)',
              marginTop: '6px',
              letterSpacing: '1px',
            }}>
              RANKING
            </div>
          </div>
          <div style={{
            width: '1px',
            height: '40px',
            background: 'rgba(255,255,255,0.15)',
          }}></div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '28px',
              fontWeight: '700',
              color: 'var(--book-gold)',
              lineHeight: '1',
            }}>
              55.72
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              color: 'rgba(255,255,255,0.6)',
              marginTop: '6px',
              letterSpacing: '1px',
            }}>
              BEST SMAPE
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="decorative-line"></div>

      {/* Additional Highlights */}
      <h2 className="section-header" style={{ fontSize: '18px', marginTop: '20px' }}>
        Highlights
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {[
          { icon: '💻', text: 'Built 3+ full-stack production-grade applications' },
          { icon: '🤖', text: 'Integrated AI/ML models in real-world projects' },
          { icon: '🌐', text: 'Contributed to government-scale web portals' },
          { icon: '📚', text: 'Maintained 8.98 CGPA in Computer Science' },
        ].map((item, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 14px',
            background: i % 2 === 0 ? 'rgba(26,35,126,0.04)' : 'rgba(201,169,110,0.06)',
            borderRadius: '6px',
            border: `1px solid ${i % 2 === 0 ? 'rgba(26,35,126,0.08)' : 'rgba(201,169,110,0.12)'}`,
          }}>
            <span style={{ fontSize: '16px' }}>{item.icon}</span>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              color: 'var(--book-text)',
              lineHeight: '1.4',
            }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Page Number */}
      <span className="page-number left">07</span>
    </div>
  )
}
