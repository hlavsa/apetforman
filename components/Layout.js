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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
                <path fill="#16161D" d="M18.372,44.754c-2.771,0-4.96,0.045-6.738-0.774c-1.223-0.562-2.196-1.213-3.2-1.967 c-0.792-0.597-2.226-1.775-3.026-3.078c-0.483-0.788-0.635-1.621-0.852-2.35c-1.499-5.045-0.857-10.441-1.282-15.409 c-0.19-2.217,0.164-4.468,0.388-6.666c0.045-0.454,0.099-0.918,0.177-1.377c0.244-1.415,0.709-2.695,1.382-3.806 C5.67,8.588,6.233,7.889,6.894,7.25c0.987-0.951,2.133-1.719,3.408-2.285c2.156-0.957,4.303-1.194,6.495-1.37l3.833-0.3 c2.368-0.191,4.851-0.392,7.363-0.301c2.157,0.077,4.257,0.23,6.204,0.384c0.857,0.067,1.926,0.151,3.069,0.537 c1.796,0.608,3.425,1.875,4.586,3.569c0.85,1.24,1.745,2.464,2.16,4.211c0.512,2.152,0.305,4.449,0.368,6.275 c0.018,0.548,0.038,1.093,0.064,1.635c0.064,1.274,0.121,2.546,0.159,3.818c0.091,3.035,0.057,5.564-0.106,7.959 c-0.196,2.912-0.09,6.667-2.503,9.237c-3.32,3.529-8.725,4.391-12.054,4.434l-0.348,0.002c-0.001,0-0.665-0.005-0.992-0.011 l-0.859-0.01c-1.342,0.004-2.689-0.381-4.081-0.255c-1.191,0.109-2.249-0.126-3.319-0.077 C19.716,44.732,19.052,44.754,18.372,44.754z M26.688,6.507c-1.946,0-3.909,0.159-5.808,0.313l-3.836,0.3 c-1.895,0.152-3.566,0.409-5.249,1.156c-0.923,0.409-1.659,0.879-2.366,1.56c-0.457,0.441-0.829,0.931-1.132,1.429 c-0.459,0.757-0.792,1.34-0.964,2.345c-0.065,0.38-0.108,0.766-0.147,1.149c-0.214,2.108-0.34,4.255-0.371,6.384 c-0.068,4.719,0.059,9.724,1.431,14.343c0.149,0.498,0.385,0.868,0.683,1.356c0.475,0.773,1.197,1.317,1.834,1.797 c0.891,0.669,1.702,1.256,2.633,1.682c1.332,0.614,2.799,0.685,5.077,0.685c0.627,0,1.24-0.02,1.816-0.047 c1.048-0.048,2.093-0.143,3.139-0.238c1.495-0.134,2.88-0.259,4.369-0.264c0.259,0,0.513,0.004,0.767,0.008l0.146,0.002 c0.316,0.005,0.625,0.011,0.933,0.011l0.327-0.002c2.719-0.034,6.296-0.214,8.756-2.829c1.703-1.813,1.917-4.136,2.074-6.467 c0.155-2.287,0.188-4.714,0.101-7.64c-0.038-1.25-0.094-2.499-0.156-3.75c-0.029-0.562-0.048-1.125-0.066-1.691 c-0.058-1.669-0.052-3.473-0.488-5.304c-0.321-1.347-0.885-2.239-1.504-3.14c-0.761-1.11-1.395-1.92-2.52-2.301 c-0.754-0.255-1.516-0.33-2.263-0.389c-1.911-0.151-3.944-0.365-6.042-0.44C27.469,6.513,27.078,6.507,26.688,6.507z"/>
                <path fill="#010101" d="M18.365,41.414c-1.881,0-3.727-0.187-5.263-0.894c-0.934-0.43-1.74-1.014-2.623-1.678 c-0.635-0.479-1.354-1.021-1.823-1.784c-0.299-0.488-0.474-1.033-0.614-1.506c-1.37-4.611-1.496-9.611-1.428-14.327 c0.031-2.127,0.156-4.271,0.37-6.376c0.039-0.386,0.081-0.771,0.146-1.153c0.173-0.999,0.491-1.886,0.946-2.636 c0.299-0.494,0.682-0.967,1.139-1.407c0.701-0.677,1.522-1.227,2.441-1.635c1.671-0.742,3.511-0.94,5.406-1.093l3.831-0.3 c2.28-0.185,4.641-0.377,6.979-0.293c2.087,0.075,4.146,0.225,6.062,0.376c0.743,0.058,1.512,0.118,2.262,0.372 c1.114,0.377,2.145,1.19,2.899,2.292c0.614,0.896,1.068,1.983,1.388,3.324c0.437,1.836,0.501,3.723,0.558,5.388l0.005,0.158 c0.018,0.511,0.035,1.022,0.061,1.532c0.064,1.249,0.12,2.498,0.157,3.748c0.086,2.941,0.055,5.366-0.1,7.633 c-0.157,2.323-0.546,4.941-2.24,6.744c-2.445,2.602-6.346,2.948-9.066,2.983c-0.405,0.004-0.813-0.002-1.219-0.009 c-0.337-0.005-0.663-0.011-1.014-0.01c-1.438,0.005-2.902,0.137-4.319,0.266c-1.02,0.092-2.073,0.188-3.118,0.235 C19.583,41.395,18.973,41.414,18.365,41.414z M26.709,7.313c-1.917,0-3.852,0.157-5.733,0.31l-3.832,0.299 c-1.875,0.151-3.552,0.331-5.08,1.011c-0.812,0.36-1.536,0.845-2.153,1.44c-0.395,0.381-0.724,0.786-0.978,1.205 c-0.391,0.644-0.665,1.413-0.815,2.287c-0.062,0.359-0.102,0.722-0.139,1.086c-0.211,2.075-0.333,4.19-0.364,6.289 c-0.067,4.637,0.054,9.545,1.387,14.027c0.128,0.431,0.272,0.884,0.508,1.269c0.369,0.602,0.98,1.063,1.572,1.508 c0.836,0.628,1.596,1.181,2.439,1.568c1.838,0.846,4.269,0.86,6.622,0.756c1.022-0.048,2.065-0.143,3.074-0.233 c1.438-0.13,2.925-0.265,4.405-0.27c0.348-0.001,0.689,0.005,1.034,0.01c0.397,0.007,0.794,0.014,1.189,0.009 c2.753-0.035,6.19-0.37,8.351-2.669c1.479-1.572,1.826-3.979,1.971-6.127c0.152-2.232,0.184-4.627,0.098-7.535 c-0.037-1.242-0.093-2.485-0.155-3.727c-0.026-0.516-0.044-1.033-0.062-1.549l-0.006-0.158c0,0,0,0,0-0.001 c-0.055-1.617-0.117-3.451-0.53-5.189c-0.291-1.22-0.696-2.197-1.239-2.989c-0.634-0.925-1.484-1.604-2.396-1.911 c-0.633-0.214-1.338-0.27-2.02-0.323c-1.904-0.149-3.951-0.298-6.019-0.372C27.463,7.319,27.086,7.313,26.709,7.313z"/>
                <path fill="#010101" d="M26.162,45.545c-0.997,0-1.993-0.023-2.986-0.072c-0.902-0.043-1.812-0.14-2.69-0.234 c-0.887-0.095-1.805-0.193-2.699-0.232l-0.995-0.04c-1.48-0.055-3.011-0.111-4.519-0.359c-0.954-0.156-1.96-0.373-2.843-0.904 c-0.639-0.385-1.152-0.894-1.649-1.386L5.896,40.45c-0.463-0.458-0.94-0.932-1.299-1.524c-0.421-0.699-0.621-1.479-0.761-2.149 c-0.496-2.367-0.524-4.786-0.48-7.048c0.027-1.396-0.094-2.814-0.211-4.187c-0.069-0.812-0.139-1.625-0.181-2.443 C2.861,21.058,2.8,18.985,2.782,16.94c-0.021-2.471,0.053-5.07,1.184-7.313c1.052-2.09,3.042-3.836,5.604-4.918 c2.405-1.016,4.999-1.358,7.22-1.559c0.761-0.068,1.521-0.143,2.28-0.217c1.581-0.154,3.217-0.314,4.833-0.42 c1.642-0.106,3.343,0.027,4.988,0.157c0.687,0.054,1.369,0.108,2.042,0.145c2.801,0.15,5.975,0.321,8.673,1.786 c2.711,1.471,4.665,4.16,5.227,7.193c0.271,1.465,0.307,2.947,0.308,4.075l0,0c0.001,0.584-0.009,1.168-0.019,1.749 c-0.01,0.569-0.019,1.136-0.019,1.695c0,1.286,0.034,2.588,0.068,3.895c0.074,2.809,0.15,5.712-0.12,8.515 c-0.241,2.491-0.761,4.948-1.544,7.303c-0.187,0.56-0.4,1.148-0.778,1.66c-0.403,0.548-0.955,0.949-1.441,1.304 c-1.245,0.903-2.531,1.838-4.034,2.377c-1.038,0.374-2.145,0.538-3.1,0.662C31.51,45.373,28.833,45.545,26.162,45.545z M25.167,3.476c-0.404,0-0.805,0.011-1.199,0.037c-1.601,0.104-3.228,0.264-4.802,0.417c-0.762,0.074-1.524,0.148-2.287,0.218 c-2.144,0.193-4.642,0.521-6.921,1.484c-2.343,0.989-4.153,2.567-5.1,4.445c-1.03,2.045-1.097,4.409-1.076,6.855 c0.018,2.03,0.078,4.088,0.181,6.115c0.042,0.807,0.11,1.608,0.179,2.409c0.119,1.397,0.242,2.843,0.215,4.291 c-0.043,2.202-0.017,4.554,0.459,6.823c0.123,0.589,0.295,1.268,0.639,1.838c0.294,0.485,0.727,0.915,1.146,1.33l1.884,1.866 c0.456,0.451,0.927,0.917,1.462,1.239c0.738,0.444,1.633,0.635,2.489,0.775c1.445,0.237,2.944,0.293,4.394,0.347l1.002,0.039 c0.926,0.041,1.859,0.142,2.763,0.238c0.864,0.093,1.758,0.188,2.631,0.23c3.599,0.173,7.23,0.027,10.801-0.437 c0.903-0.117,1.946-0.271,2.89-0.611c1.369-0.49,2.598-1.382,3.785-2.244c0.448-0.326,0.912-0.664,1.225-1.088 c0.291-0.396,0.473-0.9,0.634-1.384c0.76-2.283,1.264-4.666,1.497-7.082c0.265-2.742,0.189-5.614,0.117-8.393 c-0.035-1.315-0.069-2.626-0.069-3.921c0-0.564,0.009-1.137,0.019-1.712s0.019-1.153,0.019-1.732l0,0 c-0.001-1.085-0.034-2.509-0.29-3.894c-0.5-2.698-2.31-5.188-4.721-6.496c-2.501-1.356-5.555-1.521-8.25-1.667 c-0.681-0.036-1.372-0.091-2.066-0.146C27.606,3.573,26.37,3.476,25.167,3.476z"/>
                <path fill="#16161D" d="M35.845,11.366c-0.759-0.633-1.939-0.739-2.854-0.162c-0.691,0.436-0.851,1.456-0.471,2.18 c0.642,1.221,2.879,2.04,3.776,0.677c0.299-0.455,0.372-1.039,0.246-1.568C36.43,12.024,36.178,11.644,35.845,11.366z"/>
                <path fill="#010101" d="M34.913,15.268c-0.045,0-0.09-0.001-0.135-0.004c-1.091-0.053-2.227-0.746-2.7-1.648 c-0.529-1.004-0.239-2.275,0.646-2.835c1.071-0.677,2.486-0.594,3.44,0.201l0,0c0.433,0.361,0.731,0.844,0.863,1.395 c0.164,0.69,0.05,1.404-0.314,1.959C36.316,14.939,35.681,15.268,34.913,15.268z M34.313,11.327c-0.367,0-0.737,0.099-1.055,0.299 c-0.438,0.277-0.577,0.989-0.295,1.523c0.31,0.59,1.129,1.08,1.864,1.116c0.457,0.013,0.826-0.139,1.051-0.479 c0.211-0.32,0.277-0.761,0.178-1.178c-0.081-0.34-0.266-0.637-0.531-0.859C35.189,11.47,34.753,11.327,34.313,11.327z"/>
                <path fill="#16161D" d="M24.404,33.831c-1.706,0-3.505,0.211-4.956-0.575c-0.847-0.46-1.482-0.896-1.932-1.302 c-0.178-0.159-0.753-0.67-0.886-0.754c-2.412-1.513-3.038-5.14-2.949-7.428c0.051-1.402,0.513-2.536,0.851-3.363 c0.458-1.133,1.087-2.69,2.382-4.012c1.43-1.456,3.38-2.334,5.643-2.538c0.885-0.08,1.806-0.053,2.714,0.078 c1.996,0.288,3.827,1.02,5.293,2.115c1.831,1.367,3.093,3.281,3.552,5.388c0.82,3.776-0.674,8.033-3.634,10.352 C28.805,33.108,26.647,33.831,24.404,33.831z M23.818,17.517c-0.239,0-0.68,0.146-0.917,0.167 c-1.476,0.133-2.209,0.142-3.083,1.033c-0.838,0.855-1.26,1.974-1.655,2.953c-0.273,0.67-0.818,1.504-0.848,2.328 c-0.053,1.363,0.682,2.781,1.938,3.57c0.316,0.197,0.404,0.689,0.703,0.957c0.376,0.339,0.951,0.454,1.452,0.727 c2.234,1.21,4.762,1.042,6.707-0.481c1.939-1.52,2.793-4.004,2.249-6.51c-0.29-1.332-0.81-2.512-2.006-3.405 c-1.028-0.768-2.183-0.905-3.637-1.116C24.309,17.68,24.223,17.517,23.818,17.517z"/>
                <path fill="#010101" d="M24.4,30.493c-1.115,0-2.238-0.264-3.231-0.802c-0.495-0.269-0.89-0.624-1.271-0.967 c-0.303-0.273-0.589-0.531-0.911-0.733c-1.241-0.778-2.02-2.743-1.969-4.09c0.031-0.813,0.337-1.567,0.606-2.232 c0.396-0.978,0.845-2.086,1.674-2.933c0.865-0.882,2.096-1.418,3.559-1.55l0,0c0.627-0.056,1.278-0.037,1.936,0.058 c1.445,0.208,2.75,0.722,3.772,1.486c1.187,0.884,1.999,2.1,2.287,3.423c0.541,2.488-0.503,5.502-2.429,7.011 C27.301,30.043,25.857,30.493,24.4,30.493z M22.946,18.183c-0.853,0.077-2.054,0.357-2.934,1.255 c-0.691,0.704-1.083,1.671-1.461,2.606c-0.251,0.619-0.51,1.258-0.534,1.896c-0.039,1.022,0.607,2.646,1.501,3.205 c0.395,0.249,0.727,0.548,1.048,0.837c0.354,0.318,0.688,0.619,1.079,0.831c1.921,1.04,4.511,0.855,6.16-0.436 c1.645-1.288,2.534-3.873,2.069-6.011c-0.234-1.071-0.93-2.104-1.908-2.835c-0.89-0.664-2.037-1.113-3.317-1.297 C24.069,18.151,23.496,18.134,22.946,18.183L22.946,18.183z"/>
                <path fill="#010101" d="M23.862,34.616c-1.705,0-3.354-0.335-4.846-1c-2.815-1.256-4.884-3.556-5.532-6.152 c-0.496-1.989-0.159-4.007,0.189-5.543c0.282-1.249,0.752-3.066,1.56-4.428c0.696-1.178,1.639-2.216,2.727-3.002 c0.706-0.509,1.433-0.889,2.157-1.128c0.003-0.001,0.093-0.03,0.101-0.033l0,0c2.08-0.65,4.372-0.246,6.212,0.08 c2.434,0.431,4.971,2.322,6.407,4.006c0.39,0.458,0.665,0.857,0.865,1.259c0.43,0.858,0.556,1.806,0.627,2.701 c0.203,2.553-0.016,4.735-0.67,6.672c-1.029,3.051-2.991,5.102-5.674,5.931C26.61,34.404,25.219,34.615,23.862,34.616z M20.367,13.808l0.069,0.503c-0.634,0.21-1.269,0.543-1.892,0.991c-0.977,0.706-1.824,1.64-2.451,2.701 c-0.735,1.24-1.177,2.956-1.445,4.139c-0.324,1.428-0.639,3.296-0.193,5.08c0.574,2.301,2.432,4.35,4.969,5.48 c2.456,1.097,5.393,1.209,8.267,0.321c2.985-0.923,4.378-3.39,5.021-5.296c0.609-1.806,0.813-3.857,0.621-6.271 c-0.064-0.795-0.172-1.628-0.525-2.334c-0.163-0.327-0.396-0.663-0.732-1.058c-1.276-1.497-3.643-3.284-5.819-3.67 c-1.825-0.322-3.894-0.688-5.739-0.109l0,0L20.367,13.808z M20.367,13.808h0.01H20.367z"/>
              </svg>
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
                  style={{ display: 'flex', alignItems: 'center', gap: '6px' }}

                >
                  <img width="32" height="32" src="https://img.icons8.com/puffy/32/left--v1.png" alt="left--v1"/> domů.
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
            {/* Instead of conditionally hiding, always show links with wave scribble when active */}
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
            {activePage === 'tetovani' && (
                <img 
                src="/images/wave-scribble.png" 
                alt="" 
                className=" tetovaniWave" 
                />
            )}
            </div>

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
            {activePage === 'malba' && (
                <img 
                src="/images/wave-scribble.png" 
                alt="" 
                className=" malbaWave" 
                />
            )}
            </div>

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
            {activePage === 'ilustrace' && (
                <img 
                src="/images/wave-scribble.png" 
                alt="" 
                className=" ilustraceWave" 
                />
            )}
            </div>

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
            {activePage === 'parte' && (
                <img 
                src="/images/wave-scribble.png" 
                alt="" 
                className=" parteWave" 
                />
            )}
            </div>
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