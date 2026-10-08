export default function CoverPage() {
  return (
    <div className="page-content relative flex flex-col items-center justify-center h-full text-white" style={{ background: 'linear-gradient(135deg, var(--book-navy) 0%, #0a2046 50%, #06122c 100%)' }}>
      
      {/* Intricate Outer Border */}
      <div style={{
        position: 'absolute',
        inset: '16px',
        border: '1px solid rgba(201, 169, 110, 0.6)',
        pointerEvents: 'none',
      }}></div>
      <div style={{
        position: 'absolute',
        inset: '22px',
        border: '2px solid var(--book-gold)',
        pointerEvents: 'none',
      }}></div>

      {/* Decorative SVG Pattern overlay for texture */}
      <div style={{
        position: 'absolute',
        inset: '0',
        opacity: 0.05,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        pointerEvents: 'none',
      }}></div>
      
      {/* Elegant Corner Flourishes */}
      <svg style={{ position: 'absolute', top: '22px', left: '22px', width: '40px', height: '40px', opacity: 0.8 }} viewBox="0 0 100 100">
        <path d="M 0 0 L 100 0 L 100 4 L 4 4 L 4 100 L 0 100 Z" fill="var(--book-gold)" />
        <path d="M 12 12 L 50 12 L 50 16 L 16 16 L 16 50 L 12 50 Z" fill="var(--book-gold)" />
        <circle cx="30" cy="30" r="4" fill="var(--book-gold)" />
      </svg>
      <svg style={{ position: 'absolute', top: '22px', right: '22px', width: '40px', height: '40px', opacity: 0.8 }} viewBox="0 0 100 100">
        <path d="M 100 0 L 0 0 L 0 4 L 96 4 L 96 100 L 100 100 Z" fill="var(--book-gold)" />
        <path d="M 88 12 L 50 12 L 50 16 L 84 16 L 84 50 L 88 50 Z" fill="var(--book-gold)" />
        <circle cx="70" cy="30" r="4" fill="var(--book-gold)" />
      </svg>
      <svg style={{ position: 'absolute', bottom: '22px', left: '22px', width: '40px', height: '40px', opacity: 0.8 }} viewBox="0 0 100 100">
        <path d="M 0 100 L 100 100 L 100 96 L 4 96 L 4 0 L 0 0 Z" fill="var(--book-gold)" />
        <path d="M 12 88 L 50 88 L 50 84 L 16 84 L 16 50 L 12 50 Z" fill="var(--book-gold)" />
        <circle cx="30" cy="70" r="4" fill="var(--book-gold)" />
      </svg>
      <svg style={{ position: 'absolute', bottom: '22px', right: '22px', width: '40px', height: '40px', opacity: 0.8 }} viewBox="0 0 100 100">
        <path d="M 100 100 L 0 100 L 0 96 L 96 96 L 96 0 L 100 0 Z" fill="var(--book-gold)" />
        <path d="M 88 88 L 50 88 L 50 84 L 84 84 L 84 50 L 88 50 Z" fill="var(--book-gold)" />
        <circle cx="70" cy="70" r="4" fill="var(--book-gold)" />
      </svg>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-12 text-center" style={{ marginTop: '-10px' }}>
        
        {/* Edition / Date */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '9px',
          letterSpacing: '6px',
          color: 'var(--book-gold)',
          textTransform: 'uppercase',
          marginBottom: '36px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}>
          <span style={{ width: '30px', height: '1px', background: 'var(--book-gold)', opacity: 0.5 }}></span>
          <span>MMXXV Edition</span>
          <span style={{ width: '30px', height: '1px', background: 'var(--book-gold)', opacity: 0.5 }}></span>
        </div>

        {/* Arched Profile Image - Very Classy */}
        <div style={{
          position: 'relative',
          padding: '4px',
          background: 'linear-gradient(135deg, var(--book-gold), #8b6914, var(--book-gold))',
          borderRadius: '80px 80px 0 0', /* Arched shape */
          marginBottom: '36px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
        }}>
          <div style={{
            width: '120px',
            height: '150px',
            borderRadius: '76px 76px 0 0',
            overflow: 'hidden',
            background: 'var(--book-navy)',
          }}>
            <img 
              src="/images/profile.png" 
              alt="Sudhanshu Ray"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                filter: 'contrast(1.05) saturate(1.1)',
              }}
            />
          </div>
        </div>

        {/* Name - Engraved foil effect */}
        <div style={{ position: 'relative', marginBottom: '8px' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '42px',
            fontWeight: '400',
            letterSpacing: '3px',
            lineHeight: '1.1',
            background: 'linear-gradient(to bottom, #ffffff 0%, #f0e2b6 40%, #c9a96e 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.5))',
            position: 'relative',
            zIndex: 2,
          }}>
            Sudhanshu<br/>Ray
          </h1>
        </div>

        {/* Title */}
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '11px',
          color: 'var(--book-gold-light)',
          letterSpacing: '8px',
          textTransform: 'uppercase',
          marginBottom: '28px',
          fontWeight: '300',
          position: 'relative',
        }}>
          Full Stack Developer
        </p>

        {/* Elegant Diamond Divider */}
        <svg width="100" height="12" viewBox="0 0 100 12" style={{ marginBottom: '36px' }}>
          <path d="M 0 6 L 40 6" stroke="var(--book-gold)" strokeWidth="0.5" />
          <path d="M 60 6 L 100 6" stroke="var(--book-gold)" strokeWidth="0.5" />
          <polygon points="50,0 56,6 50,12 44,6" fill="var(--book-gold)" />
        </svg>

        {/* Contact Info - Clean and minimal */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          fontFamily: 'var(--font-mono)',
          fontSize: '9px',
          letterSpacing: '2px',
          color: 'rgba(201, 169, 110, 0.8)',
          textTransform: 'uppercase',
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <span>Patna, Bihar</span>
            <span>•</span>
            <span>sudhanshray10@gmail.com</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <span>9508524116</span>
            <span>•</span>
            <span>sudhanshu-ray</span>
            <span>•</span>
            <span>m4nish-dev</span>
          </div>
        </div>
      </div>

      {/* Very subtle 'Turn Page' indication */}
      <div style={{
        position: 'absolute',
        bottom: '36px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: 'var(--font-serif)',
        fontSize: '9px',
        letterSpacing: '4px',
        color: 'rgba(201, 169, 110, 0.4)',
        textTransform: 'uppercase',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
      }}>
        <div style={{ width: '1px', height: '16px', background: 'rgba(201,169,110,0.4)' }}></div>
        Turn page
      </div>
    </div>
  )
}
