import React from 'react';

const CodeIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
const LayoutIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>;
const ServerIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>;
const DatabaseIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>;
const ToolIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>;
const CoreIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>;

export default function SkillsPage() {
  const skillCategories = [
    { title: 'Frontend', icon: <LayoutIcon />, skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'] },
    { title: 'Backend', icon: <ServerIcon />, skills: ['Node.js', 'Express.js', 'Firebase', 'REST APIs', 'API Integration'] },
    { title: 'Languages', icon: <CodeIcon />, skills: ['C', 'C++', 'Java'] },
    { title: 'Database', icon: <DatabaseIcon />, skills: ['MongoDB', 'SQL', 'PL/SQL'] },
    { title: 'Tools', icon: <ToolIcon />, skills: ['Git', 'GitHub', 'Netlify', 'Cloudflare'] },
    { title: 'Core Concepts', icon: <CoreIcon />, skills: ['DSA', 'OOP', 'DBMS', 'OS', 'AI/ML'] },
  ];

  return (
    <div className="page-content flex flex-col h-full" style={{ padding: '24px 32px' }}>
      
      {/* Premium Header - Compacted */}
      <div style={{ marginBottom: '16px' }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '28px',
          fontWeight: '700',
          color: 'var(--book-navy)',
          letterSpacing: '-0.5px',
          lineHeight: '1.2',
          textShadow: '1px 1px 0px rgba(201,169,110,0.15)'
        }}>
          Technical Arsenal
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '6px' }}>
          <div style={{ width: '50px', height: '2px', background: 'var(--book-gold)' }}></div>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '13px',
            color: 'var(--book-text-light)',
            letterSpacing: '0.5px',
          }}>
            Mastery & Technologies
          </p>
        </div>
      </div>

      {/* Luxury Dossier Grid - Compacted */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        columnGap: '16px',
        rowGap: '12px',
        flexGrow: 1,
      }}>
        {skillCategories.map((category, index) => (
          <div key={index} style={{
            background: 'linear-gradient(145deg, var(--book-navy) 0%, #0a111f 100%)',
            borderRadius: '10px',
            padding: '14px 16px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 8px 16px rgba(0,0,0,0.15), inset 0 1px 1px rgba(255,255,255,0.05)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            {/* Abstract geometric gold accents in the background */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '80px',
              height: '80px',
              border: '1.5px solid rgba(201,169,110,0.1)',
              borderRadius: '50%',
              pointerEvents: 'none'
            }}></div>
            <div style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              width: '80px',
              height: '80px',
              border: '1px solid rgba(201,169,110,0.05)',
              borderRadius: '50%',
              pointerEvents: 'none'
            }}></div>

            {/* Category Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', position: 'relative', zIndex: 1 }}>
              <div style={{ 
                width: '32px', height: '32px', 
                background: 'rgba(201,169,110,0.15)', 
                border: '1px solid rgba(201,169,110,0.3)',
                borderRadius: '6px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--book-gold)'
              }}>
                {category.icon}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '13px',
                fontWeight: '700',
                color: 'var(--book-cream)',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>
                {category.title}
              </h3>
            </div>

            {/* Luxury Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', position: 'relative', zIndex: 1 }}>
              {category.skills.map((skill, i) => (
                <span key={i} style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'rgba(255,255,255,0.9)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '8.5px',
                  fontWeight: '500',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  letterSpacing: '0.5px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Page Number */}
      <span className="page-number left" style={{ bottom: '20px' }}>03</span>
    </div>
  )
}
