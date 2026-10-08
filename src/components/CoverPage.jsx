export default function CoverPage() {
  return (
    <div className="page-content flex flex-col h-full" style={{ backgroundColor: '#080b12', color: '#ffffff', overflow: 'hidden' }}>
      
      {/* Background Noise / Film Grain for Top Section */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '55%',
        opacity: 0.15,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        pointerEvents: 'none',
        zIndex: 2,
        mixBlendMode: 'overlay',
      }}></div>

      {/* Top Section - Typography (55% Height) */}
      <div style={{
        height: '55%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 40px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10,
      }}>
        <h2 style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '9px',
          letterSpacing: '6px',
          color: 'var(--book-gold)',
          textTransform: 'uppercase',
          marginBottom: '20px',
        }}>
          A True Story
        </h2>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '52px',
          fontWeight: '700',
          lineHeight: '1.05',
          letterSpacing: '-1px',
          textTransform: 'uppercase',
          color: '#ffffff',
          marginBottom: '20px',
        }}>
          SUDHANSHU<br/>RAY
        </h1>

        <div style={{ width: '30px', height: '2px', background: 'var(--book-gold)', marginBottom: '20px' }}></div>

        <p style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: '15px',
          color: 'rgba(255,255,255,0.85)',
          letterSpacing: '1px',
        }}>
          The Journey of a Developer
        </p>
      </div>

      {/* Bottom Section - Image (45% Height) */}
      <div style={{
        height: '45%',
        width: '100%',
        position: 'relative',
        borderTop: '2px solid var(--book-gold)',
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
            filter: 'grayscale(100%) contrast(1.1) brightness(0.9)',
          }}
        />
        
        {/* Bestseller Badge Overlaid on Image */}
        <div style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#080b12',
          padding: '10px 18px',
          border: '1px solid var(--book-gold)',
          borderRadius: '4px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '8px',
            letterSpacing: '3px',
            color: 'var(--book-gold)',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}>
            #1 Portfolio Bestseller
          </p>
        </div>
      </div>

    </div>
  )
}
