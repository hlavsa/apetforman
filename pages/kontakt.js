import React, { useState, useRef, useEffect } from 'react';
import Layout from '../components/Layout';

export default function KontaktPage() {
  const [selectedOption, setSelectedOption] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Add a ref for the dropdown
  const dropdownRef = useRef(null);
  
  const options = [
    'tetování',
    'ilustraci',
    'malbu',
    'parte',
    'konzultaci'
  ];
  
  // Add click-outside listener to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);
  
  // Toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  // Select option
  const selectOption = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  // Handle email submission
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    
    const nameInput = e.target.querySelector('.name-input').value;
    const requestType = selectedOption || 'informace';
    
    // Prepare mail parameters
    const recipient = 'petraformankova@icloud.com'; // Replace with the actual email
    const subject = `art.petforman: Žádost o ${requestType}`;
    const body = `Ahoj Petro,\n\njmenuji se ${nameInput || '[Vaše jméno]'} a mám zájem o tvoji ${requestType}.`;
    
    // Create mailto link and open it
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Layout activePage="kontakt">
      <div className="scrollable-kontakt-page">
        <div className="hand-container">
          <img
            src="/images/contact-hand.webp"
            alt="Kontakt hand"
            className="hand-image"
          />
        </div>
        
        <div className="form-container">
          <form className="form-content" onSubmit={handleEmailSubmit}>
            <div className="title-row">
              <h2 className="title-text">Chci...</h2>
              
              <div className="dropdown-wrapper" ref={dropdownRef}>
                <button 
                  type="button" 
                  className={`select-btn ${selectedOption ? 'selected' : ''}`}
                  onClick={toggleDropdown}
                >
                  {selectedOption || 'vybrat'}
                </button>
                
                {isDropdownOpen && (
                  <div className="dropdown-list">
                    {options.map(option => (
                      <button
                        key={option}
                        type="button"
                        className="option-btn"
                        onClick={() => selectOption(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <input type="text" className="name-input" placeholder="jméno" />
            <button type="submit" className="submit-btn">otevřít e-mail</button>
          </form>
        </div>
      </div>

      {/* Page-specific styles */}
      <style jsx>{`
        /* -------------------------------------------------------
           Container that holds the entire Kontakt page content
           ------------------------------------------------------- */
        .scrollable-kontakt-page {
          /* Let it auto-size in height rather than fixed 100vh */
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 100px;

          /* Allow the page to scroll on iOS Safari */
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
        
        .hand-container {
          width: 100%;
          max-width: 400px;
          display: flex;
          justify-content: center;
          margin-bottom: 0;
          position: relative;
          z-index: 1;
        }
        
        .hand-image {
          width: 100%;
          max-width: 380px;
          height: auto;
          object-fit: contain;
        }
        
        .form-container {
          margin-top: -80px; /* Overlap with the hand image */
          width: 90%;
          max-width: 300px;
          z-index: 2;
          position: relative;
          background: url("/images/torn-paper.webp") center/cover repeat;
          padding: 20px 15px;
          border-radius: 10px;
        }
        
        .form-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .title-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .title-text {
          font-family: var(--reenie-beanie), sans-serif;
          font-size: 2rem;
          margin: 0;
          color: #16161D;
        }
        
        .dropdown-wrapper {
          position: relative;
          display: inline-block;
          z-index: 100;
        }
        
        .select-btn {
          background: none;
          border: none;
          font-size: 1.75rem;
          font-family: var(--reenie-beanie), sans-serif;
          padding: 0.5rem 1rem;
          cursor: pointer;
          color: #16161D;
          opacity: 0.6;
          transition: all 0.3s ease;
        }
        
        .select-btn.selected {
          opacity: 1;
          background: url("/images/torn-paper.webp") center/cover no-repeat;
        }
        
        .dropdown-list {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 140px;
          background: url("/images/torn-paper.webp");
          background-repeat: round;
          padding: 2rem 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          z-index: 200;
        }
        
        .option-btn {
          text-align: center;
          padding: 0.5rem;
          font-size: 1.5rem;
          font-family: var(--reenie-beanie), sans-serif;
          background: transparent;
          border: none;
          cursor: pointer;
          color: #16161D;
          opacity: 0.9;
          transition: all 0.3s ease;
        }
        
        .option-btn:hover {
          opacity: 1;
        }
        
        .name-input {
          width: 100%;
          padding: 0.5rem;
          font-size: 1.75rem;
          font-family: var(--reenie-beanie), sans-serif;
          border: none;
          background: transparent;
          border-bottom: 2px solid #16161D;
          outline: none;
          color: #16161D;
        }
        
        .name-input::placeholder {
          color: #16161D;
          opacity: 0.7;
        }
        
        .submit-btn {
          align-self: flex-start;
          background: url("/images/torn-paper.webp") center/cover no-repeat;
          border: none;
          cursor: pointer;
          font-size: 1.5rem;
          font-family: var(--reenie-beanie), sans-serif;
          padding: 0.5rem 2rem;
          color: #16161D;
          margin-top: 10px;
        }
        
        /* ------------------
           Mobile adjustments
           ------------------ */
        @media (max-width: 768px) {
          .hand-container {
            max-width: 320px;
          }
          
          .hand-image {
            max-width: 300px;
          }
          
          .form-container {
            max-width: 260px;
            margin-top: -60px;
          }
          
          .title-text,
          .select-btn {
            font-size: 1.5rem;
          }
          
          .dropdown-list {
            width: 130px;
            padding: 1.5rem 0.5rem;
          }
          
          .option-btn {
            font-size: 1.25rem;
          }
          
          .name-input {
            font-size: 1.5rem;
          }
          
          .submit-btn {
            font-size: 1.25rem;
            padding: 0.4rem 1.5rem;
          }
        }
        
        @media (max-width: 480px) {
          .hand-container {
            max-width: 280px;
          }
          
          .hand-image {
            max-width: 260px;
          }
          
          .form-container {
            max-width: 240px;
            margin-top: -50px;
          }
          
          .title-text,
          .select-btn {
            font-size: 1.3rem;
          }
          
          .name-input {
            font-size: 1.3rem;
          }
          
          .submit-btn {
            font-size: 1.2rem;
            padding: 0.3rem 1.2rem;
          }
          
          .dropdown-list {
            width: 120px;
            padding: 1.2rem 0.4rem;
          }
          
          .option-btn {
            font-size: 1.1rem;
            padding: 0.3rem;
          }
        }
      `}</style>
    </Layout>
  );
}
