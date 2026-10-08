export default function CoverPage() {
  return (
    <div className="page-content flex flex-col h-full" style={{ backgroundColor: '#080b12', color: '#ffffff', overflow: 'hidden' }}>
      
      {/* Background Noise / Film Grain for Top and Bottom Sections */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.15,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        pointerEvents: 'none',
        zIndex: 2,
        mixBlendMode: 'overlay',
      }}></div>

      {/* Top Section - Typography (40% Height) */}
      <div style={{
        height: '40%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 32px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10,
      }}>
        
        {/* Edition Label */}
        <h2 style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '9px',
          letterSpacing: '5px',
          color: 'var(--book-gold-light)',
          textTransform: 'uppercase',
          marginBottom: '20px',
          opacity: 0.8,
        }}>
          Portfolio • 2025
        </h2>

        {/* Main Name */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '48px',
          fontWeight: '700',
          lineHeight: '1.05',
          letterSpacing: '-1px',
          textTransform: 'uppercase',
          color: '#ffffff',
          marginBottom: '16px',
        }}>
          SUDHANSHU<br/>RAY
        </h1>

        {/* Title */}
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '14px',
          color: 'var(--book-gold)',
          letterSpacing: '4px',
          textTransform: 'uppercase',
        }}>
          Full Stack Developer
        </p>
      </div>

      {/* Middle Section - Image (45% Height) */}
      <div style={{
        height: '45%',
        width: '100%',
        position: 'relative',
        borderTop: '2px solid var(--book-gold)',
        borderBottom: '2px solid var(--book-gold)',
      }}>
        {/* Full-width framed image */}
        <img 
          src="/images/profile.png" 
          alt="Sudhanshu Ray"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 20%', /* Focuses on the face for portraits */
            filter: 'grayscale(100%) contrast(1.15) brightness(0.9)',
          }}
        />
        
        {/* Inner Border for Photo */}
        <div style={{
          position: 'absolute',
          inset: '8px',
          border: '1px solid rgba(201, 169, 110, 0.4)',
          pointerEvents: 'none',
        }}></div>
      </div>

      {/* Bottom Section - Contact Information (15% Height) */}
      <div style={{
        height: '15%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 32px',
        position: 'relative',
        zIndex: 10,
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          fontFamily: 'var(--font-mono)',
          fontSize: '9px',
          color: 'rgba(255,255,255,0.75)',
          letterSpacing: '1px',
        }}>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span>📍 Patna, Bihar</span>
            <span style={{ color: 'var(--book-gold)', opacity: 0.5 }}>•</span>
            <span>✉ sudhanshray10@gmail.com</span>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span>📱 9508524116</span>
            <span style={{ color: 'var(--book-gold)', opacity: 0.5 }}>•</span>
            <span>🔗 sudhanshu-ray</span>
            <span style={{ color: 'var(--book-gold)', opacity: 0.5 }}>•</span>
            <span>💻 m4nish-dev</span>
          </div>
        </div>
      </div>

    </div>
  )
}
