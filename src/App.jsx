import { useState, useEffect, useRef, useCallback } from 'react'
import { PageFlip } from 'page-flip'
import CoverPage from './components/CoverPage'
import EducationPage from './components/EducationPage'
import SkillsPage from './components/SkillsPage'
import ExperiencePage from './components/ExperiencePage'
import ProjectsPage1 from './components/ProjectsPage1'
import ProjectsPage2 from './components/ProjectsPage2'
import AchievementsPage from './components/AchievementsPage'
import CertificationsPage from './components/CertificationsPage'
import BackCover from './components/BackCover'

function App() {
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const bookRef = useRef(null)
  const pageFlipRef = useRef(null)
  const scalerRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (scalerRef.current) {
        const currentIsMobile = window.innerWidth <= 768
        setIsMobile(currentIsMobile)
        const targetWidth = currentIsMobile ? 360 : 900
        const targetHeight = currentIsMobile ? 540 : 600
        const paddingWidth = isMobile ? 40 : 100
        const paddingHeight = isMobile ? 140 : 200

        const scaleX = (window.innerWidth - paddingWidth) / targetWidth
        const scaleY = (window.innerHeight - paddingHeight) / targetHeight
        // Allow scaling up on large screens to fill the space
        const scale = Math.min(scaleX, scaleY)

        scalerRef.current.style.transform = `scale(${scale})`
      }
    }

    if (!loading) {
      handleResize()
      window.addEventListener('resize', handleResize)
    }

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [loading])

  useEffect(() => {
    if (!loading && bookRef.current && !pageFlipRef.current) {
      const pageFlip = new PageFlip(bookRef.current, {
        width: isMobile ? 360 : 450,
        height: isMobile ? 540 : 600,
        size: 'fixed',
        minWidth: 300,
        maxWidth: 500,
        minHeight: 400,
        maxHeight: 700,
        showCover: true,
        maxShadowOpacity: 0.6,
        mobileScrollSupport: true,
        clickEventForward: true,
        useMouseEvents: true,
        swipeDistance: 30,
        showPageCorners: true,
        disableFlipByClick: false,
        flippingTime: 1000,
        usePortrait: isMobile,
        autoSize: true,
        drawShadow: true,
        startZIndex: 0,
        startPage: 0,
      })

      const pages = bookRef.current.querySelectorAll('.page')
      if (pages.length > 0) {
        pageFlip.loadFromHTML(pages)
        pageFlipRef.current = pageFlip
        setTotalPages(pageFlip.getPageCount())

        pageFlip.on('flip', (e) => {
          setCurrentPage(e.data)
        })
      }
    }

    return () => {
      if (pageFlipRef.current) {
        pageFlipRef.current.destroy()
        pageFlipRef.current = null
      }
    }
  }, [loading])

  const flipPrev = useCallback(() => {
    if (pageFlipRef.current) {
      pageFlipRef.current.flipPrev()
    }
  }, [])

  const flipNext = useCallback(() => {
    if (pageFlipRef.current) {
      pageFlipRef.current.flipNext()
    }
  }, [])

  const flipToPage = useCallback((pageNum) => {
    if (pageFlipRef.current) {
      pageFlipRef.current.flip(pageNum)
    }
  }, [])

  // Generate ambient particles
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 8}s`,
    duration: `${8 + Math.random() * 12}s`,
    size: `${2 + Math.random() * 3}px`,
  }))

  const pageLabels = ['Cover', 'Education', 'Skills', 'Experience', 'Projects', 'Projects', 'Achievements', 'Certifications', 'Back']

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-book">
          <div className="loading-book-back"></div>
          <div className="loading-book-spine"></div>
          <div className="loading-book-cover"></div>
        </div>
        <div className="loading-text">OPENING PORTFOLIO</div>
        <div style={{ 
          marginTop: '20px', 
          fontFamily: 'var(--font-serif)', 
          color: 'rgba(201,169,110,0.5)',
          fontSize: '13px',
          letterSpacing: '2px'
        }}>
          Sudhanshu Ray
        </div>
      </div>
    )
  }

  return (
    <div className="book-scene">
      {/* Ambient Particles */}
      <div className="ambient-particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              width: p.size,
              height: p.size,
            }}
          />
        ))}
      </div>

      {/* Book Scaler Wrapper */}
      <div ref={scalerRef} style={{ transition: 'transform 0.1s ease-out', transformOrigin: 'center center' }}>
        {/* Book */}
        <div ref={bookRef} className="book-container">
        {/* Page 1: Front Cover */}
        <div className="page cover-front">
          <CoverPage />
        </div>

        {/* Page 2: Education */}
        <div className="page inner-page">
          <EducationPage />
        </div>

        {/* Page 3: Technical Skills */}
        <div className="page inner-page">
          <SkillsPage />
        </div>

        {/* Page 4: Experience */}
        <div className="page inner-page">
          <ExperiencePage />
        </div>

        {/* Page 5: Projects 1 */}
        <div className="page inner-page">
          <ProjectsPage1 />
        </div>

        {/* Page 6: Projects 2 */}
        <div className="page inner-page">
          <ProjectsPage2 />
        </div>

        {/* Page 7: Achievements */}
        <div className="page inner-page">
          <AchievementsPage />
        </div>

        {/* Page 8: Certifications */}
        <div className="page inner-page">
          <CertificationsPage />
        </div>

        {/* Page 9: Back Cover */}
        <div className="page cover-back">
          <BackCover />
        </div>
      </div>
    </div>
    </div>
  )
}

export default App
