"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !selectedType) return;

    const subject = encodeURIComponent(`Nová zpráva - ${selectedType}`);
    const body = encodeURIComponent(`Jméno: ${name}\nTyp: ${selectedType}`);
    window.location.href = `mailto:your@email.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bodyContainer">
      {/* Jamie in the corner */}
      <div className="jamieCorner">
        <img src="/images/jamie.png" alt="Jamie the dog" className="jamieImage" />
        <div className="jamieHover">
          <span className="jamieText">eurasier<br />jamie.</span>
          <img src="/images/wave-scribble.png" alt="" className="waveScribble" />
        </div>
      </div>

      {/* Back to home */}
      <Link href="/" className="homeLink">
        <span className="tornNavLink">← domů.</span>
      </Link>

      <div className="pageContainer">
        {/* Instagram handle */}
        <div className='grid-c-1'>
          <a href="https://instagram.com/art.petforman" className="instagramHandle" target="_blank" rel="noopener noreferrer">
            @art.petforman
          </a>
        </div>

        {/* Left column */}
        <div className="contactSection grid-c-2">
          <h1 className="mainTitle">
            petra<br />formánková.
          </h1>
          <div className="navLinkWrapper">
            <span className="tornNavLink">kontakt.</span>
          </div>
        </div>

        {/* Center/Right columns - Contact Form and Hand Image */}
        <div className="contactFormWrapper grid-c-3">
          <form onSubmit={handleSubmit} className="contactForm">
            <h2 className="formTitle">Chci</h2>
            <div className="typeSelection">
              {['tetování', 'malba', 'ilustrace', 'parte'].map((type) => (
                <button
                  key={type}
                  type="button"
                  className={`typeButton ${selectedType === type ? 'selected' : ''}`}
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
            <input 
              type="text" 
              placeholder="jméno" 
              className="formInput"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <button type="submit" className="submitButton tornNavLink">
              otevřít e-mail.
            </button>
          </form>
          <img src="/images/contact-hand.png" alt="" className="contactHandImage" />
         
        </div>
      </div>
    </div>
  );
}