export default function CoverPage() {
  return (
    <div className="page-content relative flex flex-col justify-start h-full" style={{ backgroundColor: '#080b12', color: '#ffffff', overflow: 'hidden' }}>
      
      {/* Background Noise / Film Grain for Print Texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.25,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        pointerEvents: 'none',
        zIndex: 2,
        mixBlendMode: 'overlay',
      }}></div>

      {/* Cinematic Profile Image with fade-to-dark at the top */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '75%',
        backgroundImage: 'url(/images/profile.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 10%',
        filter: 'grayscale(100%) contrast(1.15) brightness(0.85)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 30%, black 100%)',
        maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 30%, black 100%)',
        zIndex: 1,
      }}></div>

      {/* Dramatic Vignette */}
      <div style={{
        position: 'absolute',
        inset: 0,
        boxShadow: 'inset 0 0 120px rgba(0,0,0,0.9)',
        pointerEvents: 'none',
        zIndex: 3,
      }}></div>

      {/* Typography Content Layer */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between px-10 pt-16 pb-12 text-center">
        
        {/* Top Typography (Autobiography Style) */}
        <div>
          <h2 style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            letterSpacing: '8px',
            color: 'var(--book-gold)',
            textTransform: 'uppercase',
            marginBottom: '24px',
            opacity: 0.9,
          }}>
            A True Story
          </h2>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '64px',
            fontWeight: '700',
            lineHeight: '0.85',
            letterSpacing: '-2px',
            textTransform: 'uppercase',
            color: '#ffffff',
            marginBottom: '18px',
            textShadow: '0 10px 40px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.5)',
          }}>
            SUDHANSHU<br/>RAY
          </h1>

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '16px',
            color: 'rgba(255,255,255,0.85)',
            letterSpacing: '1.5px',
            textShadow: '0 4px 16px rgba(0,0,0,0.9)',
          }}>
            The Journey of a Developer
          </p>
        </div>

        {/* Bottom Accent */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          marginTop: 'auto',
        }}>
          {/* Gold Divider */}
          <div style={{ width: '40px', height: '1.5px', background: 'var(--book-gold)', marginBottom: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.5)' }}></div>
          
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            letterSpacing: '5px',
            color: 'rgba(255,255,255,0.7)',
            textTransform: 'uppercase',
            lineHeight: '1.8',
            textShadow: '0 2px 4px rgba(0,0,0,0.8)',
          }}>
            #1 Portfolio Bestseller<br/>
            Full Stack Engineering
          </p>
        </div>

      </div>

    </div>
  )
}
