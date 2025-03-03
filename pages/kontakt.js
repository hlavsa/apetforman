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
  
  // Add click outside listener to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    
    // Add event listener when dropdown is open
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    // Clean up event listener
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
    
    const nameInput = e.target.querySelector('.formInput').value;
    const requestType = selectedOption || 'informace';
    
    // Prepare email parameters
    const recipient = 'petraformankova@icloud.com'; // Replace with the actual email
    const subject = `art.petforman: Žádost o ${requestType}`;
    const body = `Ahoj Petro,\n\njmenuji se ${nameInput || '[Vaše jméno]'} a mám zájem o tvoji ${requestType}.`;
    
    // Create mailto link and open it
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  // Main content for the contact page
  const kontaktContent = (
    <div className="contact-form-container">
      <img
        src="/images/contact-hand.png"
        alt="Contact hand"
        className="contact-hand"
      />
      
      {/* Contact form */}
      <div className="contact-form-wrapper">
        <form className="contactForm" onSubmit={handleEmailSubmit}>
          <div className="formTitleWrapper">
            <h2 className="formTitle">Chci...</h2>
            
            {/* Dropdown for options - styled to match torn paper aesthetic */}
            <div className="typeSelection" ref={dropdownRef}>
              <button 
                type="button" 
                className={`typeButton ${selectedOption ? 'selected' : ''}`}
                onClick={toggleDropdown}
              >
                {selectedOption || 'vybrat'}
              </button>
              
              {isDropdownOpen && (
                <div className="dropdownOptions">
                  {options.map(option => (
                    <button
                      key={option}
                      type="button"
                      className="typeButton"
                      onClick={() => selectOption(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <input type="text" className="formInput" placeholder="jméno" />
          <button type="submit" className="submitButton">otevřít e-mail</button>
        </form>
      </div>
    </div>
  );

  return (
    <Layout activePage="kontakt">
      {kontaktContent}
    </Layout>
  );
}