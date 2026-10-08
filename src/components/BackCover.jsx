export default function BackCover() {
  return (
    <div className="page-content relative flex flex-col items-center justify-center h-full text-white">
      {/* Decorative borders */}
      <div style={{
        position: 'absolute',
        inset: '12px',
        border: '2px solid var(--book-gold)',
        pointerEvents: 'none',
      }}></div>
      <div style={{
        position: 'absolute',
        inset: '20px',
        border: '1px solid rgba(201, 169, 110, 0.4)',
        pointerEvents: 'none',
      }}></div>

      {/* Corner ornaments */}
      <div className="cover-corner-ornament top-left"></div>
      <div className="cover-corner-ornament top-right"></div>
      <div className="cover-corner-ornament bottom-left"></div>
      <div className="cover-corner-ornament bottom-right"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-10">
        {/* Thank You */}
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '28px',
          fontWeight: '700',
          background: 'linear-gradient(180deg, #ffffff, #e8d5a8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '8px',
        }}>
          Thank You
        </h2>

        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '14px',
          color: 'rgba(255,255,255,0.7)',
          marginBottom: '24px',
          letterSpacing: '2px',
        }}>
          for reading my portfolio
        </p>

        {/* Decorative divider */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '24px',
        }}>
          <div style={{ width: '40px', height: '1px', background: 'var(--book-gold)' }}></div>
          <div style={{ 
            width: '6px', height: '6px', 
            border: '1px solid var(--book-gold)', 
            transform: 'rotate(45deg)',
          }}></div>
          <div style={{ width: '40px', height: '1px', background: 'var(--book-gold)' }}></div>
        </div>

        {/* Contact Section */}
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '3px',
          color: 'var(--book-gold-light)',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}>
          Let's Connect
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          fontSize: '12px',
          fontFamily: 'var(--font-body)',
          color: 'rgba(255,255,255,0.7)',
        }}>
          <a href="mailto:sudhanshray10@gmail.com" style={{ 
            color: 'rgba(255,255,255,0.8)', 
            textDecoration: 'none',
            transition: 'color 0.3s ease',
          }}>
            ✉ sudhanshray10@gmail.com
          </a>
          <span>📱 +91 9508524116</span>
          <a href="https://linkedin.com/in/sudhanshu-ray" target="_blank" rel="noopener noreferrer" style={{ 
            color: 'rgba(255,255,255,0.8)', 
            textDecoration: 'none' 
          }}>
            🔗 linkedin.com/in/sudhanshu-ray
          </a>
          <a href="https://github.com/m4nish-dev" target="_blank" rel="noopener noreferrer" style={{ 
            color: 'rgba(255,255,255,0.8)', 
            textDecoration: 'none' 
          }}>
            💻 github.com/m4nish-dev
          </a>
        </div>

        {/* Bottom ornament */}
        <div style={{
          marginTop: '30px',
          fontFamily: 'var(--font-serif)',
          fontSize: '11px',
          color: 'rgba(201, 169, 110, 0.5)',
          letterSpacing: '2px',
        }}>
          © 2025 Sudhanshu Ray
        </div>
      </div>
    </div>
  )
}
