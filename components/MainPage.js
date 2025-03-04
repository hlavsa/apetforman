import React, { useState, useRef, useEffect } from 'react';
import Layout from './Layout';

export default function MainPage() {
  const [activeVideo, setActiveVideo] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
  const playPromiseRef = useRef(null);
  
  const videos = {
    tetování: '/videos/tetovani.mp4',
    malba: '/videos/malba.mp4',
    ilustrace: '/videos/ilustrace.mp4',
    parte: '/videos/parte.mp4'
  };

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#16161D';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2);
      ctx.clip();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, []);

  const getXY = (evt) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    
    // Calculate scaling factors between canvas internal size and displayed size
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    if (evt.type.includes('mouse')) {
      return {
        x: (evt.clientX - rect.left) * scaleX,
        y: (evt.clientY - rect.top) * scaleY,
      };
    }
    
    if (evt.type.includes('touch') && evt.touches.length > 0) {
      return {
        x: (evt.touches[0].clientX - rect.left) * scaleX,
        y: (evt.touches[0].clientY - rect.top) * scaleY,
      };
    }
    
    return { x: 0, y: 0 };
  };

  const startDrawing = (evt) => {
    setIsDrawing(true);
    const { x, y } = getXY(evt);
    setLastPos({ x, y });
  };

  const draw = (evt) => {
    if (!isDrawing) return;
    evt.preventDefault();

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { x, y } = getXY(evt);

    ctx.beginPath();
    ctx.moveTo(lastPos.x, lastPos.y);
    ctx.lineTo(x, y);
    ctx.stroke();

    setLastPos({ x, y });
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const handleMouseEnter = async (videoKey) => {
    setActiveVideo(videos[videoKey]);
    
    if (videoRef.current) {
      try {
        if (playPromiseRef.current) {
          await playPromiseRef.current;
        }
        playPromiseRef.current = videoRef.current.play();
      } catch (err) {
        console.log('Video play interrupted');
      }
    }
  };
  
  const handleMouseLeave = async (videoKey) => {
    if (playPromiseRef.current && videos[videoKey]) {
      try {
        await playPromiseRef.current;
        if (videoRef.current) {
          videoRef.current.pause();
        }
      } catch (err) {
        console.log('Video pause interrupted');
      }
    }
    
    if (videoKey && videos[videoKey]) {
      setActiveVideo(null);
    }
  };

  // Main content for the homepage
  const homePageContent = (
    <div className="homepage-image">
      <div className="heart-top">
        <img src="/images/heart.png" alt="" />
      </div>
      <div className="heart-bottom">
        <img src="/images/heart.png" alt="" />
      </div>
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
        />
        <div className="paperOverlay" />
      </div>
    </div>
  );

  return (
    <Layout activePage="home">
      {homePageContent}
    </Layout>
  );
}