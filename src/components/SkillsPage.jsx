export default function SkillsPage() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: '⟨/⟩',
      skills: ['C', 'C++', 'Java'],
      variant: 'blue',
    },
    {
      title: 'Frontend',
      icon: '🎨',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
      variant: 'gold',
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: ['Node.js', 'Express.js', 'Firebase', 'REST APIs', 'API Integration'],
      variant: 'blue',
    },
    {
      title: 'Database',
      icon: '🗄️',
      skills: ['MongoDB', 'SQL', 'PL/SQL'],
      variant: 'dark',
    },
    {
      title: 'Tools',
      icon: '🔧',
      skills: ['Git', 'GitHub', 'Netlify', 'Cloudflare'],
      variant: 'gold',
    },
    {
      title: 'Core Concepts',
      icon: '🧠',
      skills: ['DSA', 'OOP', 'DBMS', 'OS', 'AI/ML'],
      variant: 'blue',
    },
  ]

  return (
    <div className="page-content" style={{ padding: '36px 32px' }}>
      {/* Section Header */}
      <h2 className="section-header" style={{ fontSize: '22px' }}>
        Technical Skills
      </h2>

      {/* Skills Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '14px',
      }}>
        {skillCategories.map((category, index) => (
          <div key={index} style={{
            background: index % 2 === 0 
              ? 'linear-gradient(135deg, rgba(26,35,126,0.06), rgba(21,101,192,0.03))' 
              : 'linear-gradient(135deg, rgba(201,169,110,0.08), rgba(201,169,110,0.02))',
            borderRadius: '8px',
            padding: '14px',
            border: `1px solid ${index % 2 === 0 ? 'rgba(26,35,126,0.1)' : 'rgba(201,169,110,0.15)'}`,
          }}>
            {/* Category Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '10px',
            }}>
              <span style={{ fontSize: '14px' }}>{category.icon}</span>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '13px',
                fontWeight: '600',
                color: 'var(--book-navy)',
              }}>
                {category.title}
              </h3>
            </div>

            {/* Skills */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '5px',
            }}>
              {category.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className={`skill-tag skill-tag-${category.variant}`}
                  style={{ fontSize: '10px', padding: '3px 8px' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Decorative element */}
      <div style={{
        marginTop: '18px',
        padding: '12px 16px',
        background: 'linear-gradient(135deg, var(--book-navy), var(--book-royal))',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          flexShrink: 0,
        }}>
          💡
        </div>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '11px',
          color: 'rgba(255,255,255,0.85)',
          lineHeight: '1.5',
        }}>
          Eager to contribute technical expertise, software engineering principles, 
          and continuous learning to a growth-oriented development team.
        </p>
      </div>

      {/* Page Number */}
      <span className="page-number left">03</span>
    </div>
  )
}
