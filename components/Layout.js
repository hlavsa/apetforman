import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Shared layout component for consistent positioning
export default function Layout({ children, activePage = 'home' }) {
  const [hoverStates, setHoverStates] = useState({
    tetování: false,
    malba: false,
    ilustrace: false,
    parte: false,
    kontakt: false,
    ig: false
  });
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add listener for resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Images for scribble overlays
  const scribbles = {
    tetování: '/images/scribble.png',
    malba: '/images/scribble.png',
    ilustrace: '/images/scribble.png',
    parte: '/images/scribble.png',
    ig: '/images/scribble.png',
    kontakt: '/images/scribble.png'
  };

  // For video previews on homepage
  const videos = {
    tetování: '/videos/tetovani.mp4',
    malba: '/videos/malba.mp4',
    ilustrace: '/videos/ilustrace.mp4',
    parte: '/videos/parte.mp4'
  };

  // Handle hover states for elements with hover effects
  const handleSimpleHover = (key, isHovering) => {
    setHoverStates(prev => ({
      ...prev,
      [key]: isHovering
    }));
  };

  return (
    <div className="bodyContainer">
      {/* Jamie in the corner - consistent across all pages */}
      <div className="jamie-corner">
        <img src="/images/jamie.png" alt="Jamie the dog" className="jamieImage" />
        <div className="jamieHover">
          <span className="jamieText">eurasier<br />jamie.</span>
          <img src="/images/wave-scribble.png" alt="" className="waveScribble" />
        </div>
      </div>
      
      {/* Main grid that ensures consistent positioning */}
      <div className="page-grid">
        {/* Main title - always in the same position */}
        <div className="main-title-area">
          <h1 className="mainTitle">
            petra<br />formánková.
          </h1>
        </div>
        
        {/* Main content area - changes based on page */}
        <div className="main-content-area">
          {children}
        </div>
        
        {/* Navigation links - always in the same positions */}
        {/* Show differently on mobile vs desktop */}
        {!isMobile ? (
          // Desktop Navigation Structure
          <>
            {/* Top link - changes based on page */}
            <div className="top-link">
              {activePage === 'home' ? (
                <a 
                  href="https://instagram.com/art.petforman" 
                  className="instagramHandle tornNavLink" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onMouseEnter={() => handleSimpleHover('ig', true)}
                  onMouseLeave={() => handleSimpleHover('ig', false)}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  art.petforman
                  <img 
                    src={scribbles['ig']}
                    alt=""
                    className={`scribbleOverlay ${hoverStates['ig'] ? 'visible' : ''}`}
                  />
                </a>
              ) : (
                <Link 
                  href="/" 
                  className="tornNavLink instagramHandle" 
                  onMouseEnter={() => handleSimpleHover('ig', true)}
                  onMouseLeave={() => handleSimpleHover('ig', false)}
                >
                  ← domů.
                  <img 
                    src={scribbles['ig']}
                    alt=""
                    className={`scribbleOverlay ${hoverStates['ig'] ? 'visible' : ''}`}
                  />
                </Link>
              )}
            </div>
            
            {/* Contact link - desktop position */}
            <div className="contact-link-area">
              <Link 
                href="/kontakt" 
                className="navLinkWrapper"
                onMouseEnter={() => handleSimpleHover('kontakt', true)}
                onMouseLeave={() => handleSimpleHover('kontakt', false)}
              >
                <span className="tornNavLink">kontakt.</span>
                <img 
                  src={scribbles['kontakt']}
                  alt=""
                  className={`scribbleOverlay ${hoverStates['kontakt'] ? 'visible' : ''}`}
                />
              </Link>
              {activePage === 'kontakt' && (
                <img 
                  src="/images/wave-scribble.png" 
                  alt="" 
                  className="waveScribble kontaktWave" 
                />
              )}
            </div>
            
            {/* Only show navigation links if we're not on that specific page - Desktop */}
            {activePage !== 'tetovani' && (
              <div className="nav-tetovani navLinkWrapper">
                <Link 
                  href="/tetovani" 
                  className="navLinkWrapper"
                  onMouseEnter={() => handleSimpleHover('tetování', true)}
                  onMouseLeave={() => handleSimpleHover('tetování', false)}
                >
                  <span className="tornNavLink">
                    tetování.
                  </span>
                  <img 
                    src={scribbles['tetování']}
                    alt=""
                    className={`scribbleOverlay ${hoverStates['tetování'] ? 'visible' : ''}`}
                  />
                </Link>
              </div>
            )}
            
            {activePage !== 'malba' && (
              <div className="nav-malba navLinkWrapper">
                <Link 
                  href="/malba" 
                  className="navLinkWrapper"
                  onMouseEnter={() => handleSimpleHover('malba', true)}
                  onMouseLeave={() => handleSimpleHover('malba', false)}
                >
                  <span className="tornNavLink">
                    malba.
                  </span>
                  <img 
                    src={scribbles['malba']}
                    alt=""
                    className={`scribbleOverlay ${hoverStates['malba'] ? 'visible' : ''}`}
                  />
                </Link>
              </div>
            )}
            
            {activePage !== 'ilustrace' && (
              <div className="nav-ilustrace navLinkWrapper">
                <Link 
                  href="/ilustrace" 
                  className="navLinkWrapper"
                  onMouseEnter={() => handleSimpleHover('ilustrace', true)}
                  onMouseLeave={() => handleSimpleHover('ilustrace', false)}
                >
                  <span className="tornNavLink">
                    ilustrace.
                  </span>
                  <img 
                    src={scribbles['ilustrace']}
                    alt=""
                    className={`scribbleOverlay ${hoverStates['ilustrace'] ? 'visible' : ''}`}
                  />
                </Link>
              </div>
            )}
            
            {activePage !== 'parte' && (
              <div className="nav-parte navLinkWrapper">
                <Link 
                  href="/parte" 
                  className="navLinkWrapper"
                  onMouseEnter={() => handleSimpleHover('parte', true)}
                  onMouseLeave={() => handleSimpleHover('parte', false)}
                >
                  <span className="tornNavLink">
                    parte.
                  </span>
                  <img 
                    src={scribbles['parte']}
                    alt=""
                    className={`scribbleOverlay ${hoverStates['parte'] ? 'visible' : ''}`}
                  />
                </Link>
              </div>
            )}
          </>
        ) : (
          // Mobile Navigation Structure - two columns
          <>
            {/* Left column with navigation links */}
            <div className="mobile-nav-left">
              <Link href="/tetovani" className="navLinkWrapper">
                <span className="tornNavLink">tetování.</span>
              </Link>
              
              <Link href="/tetovani" className="navLinkWrapper">
                <span className="tornNavLink">tetování.</span>
              </Link>
              
              <Link href="/malba" className="navLinkWrapper">
                <span className="tornNavLink">malba.</span>
              </Link>
              
              <Link href="/ilustrace" className="navLinkWrapper">
                <span className="tornNavLink">ilustrace.</span>
              </Link>
              
              <Link href="/parte" className="navLinkWrapper">
                <span className="tornNavLink">parte.</span>
              </Link>
            </div>
            
            {/* Right column with kontakt */}
            <div className="mobile-nav-right">
              <Link href="/kontakt" className="navLinkWrapper">
                <span className="tornNavLink">kontakt.</span>
              </Link>
              
              {/* Green icon with text */}
              <div className="client-status">
                <span className="client-text">
                  <img src="/images/green-icon.png" alt="" className="client-icon" />
                  přijímám klienty.
                </span>
              </div>
            </div>
            
            {/* Bottom banner for mobile with static "přijímám klienty" text */}
            <div className="bottom-banner-area">
              <div className="client-banner">
                {[...Array(6)].map((_, index) => (
                  <div key={`client-${index}`} className="client-item">
                    <img src="/images/green-icon.png" alt="" className="client-icon" />
                    přijímám klienty.
                  </div>
                ))}
              </div>
            </div>
            
            {/* Instagram handle at bottom */}
            <div className="instagram-bottom">
              <a 
                href="https://instagram.com/art.petforman" 
                className="instagramHandle tornNavLink" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                @art.petforman
              </a>
            </div>
          </>
        )}
        
        {/* Bottom banner */}
        {activePage === 'home' && (
          <div className="bottom-banner-area bottomBanner">
            <div className="scrollingContent">
              {/* For mobile we show just a single instance */}
              {isMobile ? (
                <div className="scrollItem">
                  <img src="/images/go.png" alt="" className="goIcon" /> 
                  přijímám klienty.
                </div>
              ) : (
                <>
                  {/* For desktop show scrolling content */}
                  {[...Array(12)].map((_, index) => (
                    <div key={`first-${index}`} className="scrollItem">
                      <img src="/images/go.png" alt="" className="goIcon" /> 
                      mám volné termíny.
                    </div>
                  ))}
                  {/* Duplicate set of scrolling items to ensure seamless looping */}
                  {[...Array(12)].map((_, index) => (
                    <div key={`second-${index}`} className="scrollItem">
                      <img src="/images/go.png" alt="" className="goIcon" /> 
                      mám volné termíny.
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}