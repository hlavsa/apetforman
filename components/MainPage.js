import React, { useState, useRef, useEffect } from 'react';
import Layout from './Layout';

export default function MainPage() {
  const [activeVideo, setActiveVideo] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
  const playPromiseRef = useRef(null);
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
  
  const videos = {
    tetování: '/videos/tetovani.mp4',
    malba: '/videos/malba.mp4',
    ilustrace: '/videos/ilustrace.mp4',
    parte: '/videos/parte.mp4',
    jamie: '/videos/jamie.mp4'  // Add Jamie's video
  };

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      // Basic canvas setup
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#16161D';
      ctx.lineWidth = 2;

      // Initial circular clip + clear
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2);
      ctx.clip();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, []);

  // Calculate mouse/touch coordinates in a way Safari prefers
  const getXY = (evt) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    
    const rect = canvas.getBoundingClientRect();
    // Determine how much the canvas is scaled
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    let clientX, clientY;
    if (evt.type.includes('mouse')) {
      clientX = evt.clientX;
      clientY = evt.clientY;
    } else if (evt.type.includes('touch') && evt.touches?.length > 0) {
      clientX = evt.touches[0].clientX;
      clientY = evt.touches[0].clientY;
      evt.preventDefault(); // help Safari not to scroll or zoom
    } else {
      return { x: 0, y: 0 };
    }

    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY
    };
  };

  const startDrawing = (evt) => {
    if (evt.type.includes('touch')) {
      evt.preventDefault();
    }
    setIsDrawing(true);
    const { x, y } = getXY(evt);
    setLastPos({ x, y });
  };

  const draw = (evt) => {
    if (!isDrawing) return;
    evt.preventDefault(); // prevent scrolling in Safari

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Reapply circular clip each time (key Safari workaround)
    ctx.save();
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2);
    ctx.clip();

    const { x, y } = getXY(evt);
    ctx.beginPath();
    ctx.moveTo(lastPos.x, lastPos.y);
    ctx.lineTo(x, y);
    ctx.stroke();

    // Restore to remove the clip for next stroke
    ctx.restore();
    setLastPos({ x, y });
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  // Handler to receive hover events from Layout
  const handleNavHover = (videoKey) => {
    if (videoKey) {
      setActiveVideo(videos[videoKey]);
      if (videoRef.current) {
        try {
          // If a play promise already exists, wait for it
          if (playPromiseRef.current) {
            playPromiseRef.current.then(() => {
              playPromiseRef.current = videoRef.current.play();
            }).catch(err => console.log('Video play promise rejected:', err));
          } else {
            playPromiseRef.current = videoRef.current.play();
          }
        } catch (err) {
          console.log('Video play interrupted');
        }
      }
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      setActiveVideo(null);
    }
  };

  // Main content for the homepage
  const homePageContent = (
    <div className="homepage-image">
      {/* Hearts only on desktop */}
      {!isMobile && (
        <>
          <div className="heart-top">
            <img src="/images/heart.png" alt="" />
          </div>
          <div className="heart-bottom">
            <img src="/images/heart.png" alt="" />
          </div>
        </>
      )}
      
      {/* Background text (only on desktop) */}
      {!isMobile && (
        <div className="backgroundText">
          <p>
            Říkají mi, že jsem pomalá. A je to pravda. Na jeden návrh potřebuju víc času než ostatní. Na jedno tetování taky. <br />
            Vlastně i čaj si zalévám pomaleji.<br />
          
            Mohla bych to zrychlit. Dělat rychlé konzultace. Střílet návrhy jeden za druhým. Tetovat tři klienty denně. Vlastně by to nebylo tak těžké.<br />
        
            Jenže pak by to nebylo ono. Ta extra hodina nad návrhem často znamená rozdíl mezi „dobrým" a „výborným". Ten dodatečný den skicování může změnit „zajímavé" na „výjimečné". A čas, který věnuju každému detailu při tetování? <br />
            Ten je prostě nenahraditelný.<br />
          
            Takže ano, jsem pomalá. A víte co? Jsem na to docela hrdá. Protože některé věci prostě potřebují svůj čas.<br />
          
            PS: Ten čaj ale možná fakt moc řeším.
          </p>
        </div>
      )}
      
      
      <img
        className="personImage"
        src="/images/petra.png"
        alt="Petra in a winter coat"
      />
      
      <div className="circleOverlay">
        <div className="videoContainer">
          {activeVideo && (
            <video
              key={activeVideo}
              ref={videoRef}
              className="overlayVideo"
              loop
              muted
              playsInline
              autoPlay
            >
              <source src={activeVideo} type="video/mp4" />
            </video>
          )}
        </div>

        <canvas
          ref={canvasRef}
          width={250}
          height={250}
          className="drawingCanvas"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          style={{
            touchAction: 'none',
            // This hints Safari to keep repaints real-time
            willChange: 'transform',
          }}
        />

        <div className="paperOverlay" />
      </div>
    </div>
  );

  return (
    <Layout activePage="home" onNavHover={handleNavHover}>
      {homePageContent}
    </Layout>
  );
}