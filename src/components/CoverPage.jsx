export default function CoverPage() {
  return (
    <div className="page-content relative flex flex-col items-center justify-center h-full text-white">
      {/* Decorative borders */}
      <div className="cover-border"></div>
      <div className="cover-border-inner"></div>
      
      {/* Corner ornaments */}
      <div className="cover-corner-ornament top-left"></div>
      <div className="cover-corner-ornament top-right"></div>
      <div className="cover-corner-ornament bottom-left"></div>
      <div className="cover-corner-ornament bottom-right"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-8" style={{ marginTop: '-10px' }}>
        
        {/* Small label */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '4px',
          color: 'var(--book-gold-light)',
          textTransform: 'uppercase',
          marginBottom: '16px',
          opacity: 0.8,
        }}>
          Portfolio • 2025
        </div>

        {/* Profile Image */}
        <div style={{
          width: '130px',
          height: '130px',
          borderRadius: '50%',
          border: '3px solid var(--book-gold)',
          overflow: 'hidden',
          marginBottom: '20px',
          boxShadow: '0 0 40px rgba(201, 169, 110, 0.3), inset 0 0 20px rgba(0,0,0,0.2)',
        }}>
          <img 
            src="/images/profile.png" 
            alt="Sudhanshu Ray"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
            }}
          />
        </div>

        {/* Decorative line */}
        <div style={{
          width: '60px',
          height: '1px',
          background: 'linear-gradient(to right, transparent, var(--book-gold), transparent)',
          marginBottom: '16px',
        }}></div>

        {/* Name */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '32px',
          fontWeight: '700',
          letterSpacing: '2px',
          lineHeight: '1.2',
          marginBottom: '4px',
          background: 'linear-gradient(180deg, #ffffff, #e8d5a8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Sudhanshu Ray
        </h1>

        {/* Title */}
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '14px',
          color: 'var(--book-gold-light)',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          marginBottom: '18px',
          fontWeight: '400',
        }}>
          Full Stack Developer
        </p>

        {/* Decorative divider */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '16px',
        }}>
          <div style={{ width: '40px', height: '1px', background: 'var(--book-gold)' }}></div>
          <div style={{ 
            width: '6px', height: '6px', 
            border: '1px solid var(--book-gold)', 
            transform: 'rotate(45deg)',
          }}></div>
          <div style={{ width: '40px', height: '1px', background: 'var(--book-gold)' }}></div>
        </div>

        {/* Summary */}
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '12px',
          lineHeight: '1.7',
          color: 'rgba(255,255,255,0.75)',
          maxWidth: '340px',
          textAlign: 'center',
          marginBottom: '20px',
        }}>
          Aspiring Full Stack Developer skilled in JavaScript, React.js, Node.js, and modern web technologies, 
          with experience in developing responsive applications, RESTful APIs, and database-driven systems.
        </p>

        {/* Contact Info */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px',
          fontSize: '10px',
          color: 'rgba(255,255,255,0.6)',
          fontFamily: 'var(--font-mono)',
        }}>
          <span>📍 Patna, Bihar</span>
          <span>•</span>
          <span>✉ sudhanshray10@gmail.com</span>
        </div>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px',
          fontSize: '10px',
          color: 'rgba(255,255,255,0.6)',
          fontFamily: 'var(--font-mono)',
          marginTop: '6px',
        }}>
          <span>📱 9508524116</span>
          <span>•</span>
          <span>🔗 sudhanshu-ray</span>
          <span>•</span>
          <span>💻 m4nish-dev</span>
        </div>
      </div>

      {/* Bottom ornament */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: 'var(--font-serif)',
        fontSize: '10px',
        letterSpacing: '3px',
        color: 'rgba(201, 169, 110, 0.5)',
        textTransform: 'uppercase',
      }}>
        Turn page →
      </div>
    </div>
  )
}
