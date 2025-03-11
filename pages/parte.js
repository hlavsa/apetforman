import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';

export default function PartePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const slides = [
    { id: 1, image: '/images/parte/parte1.jpg' },
    { id: 2, image: '/images/parte/parte2.jpg' }
  ];

  // Handle showing a specific slide
  const showSlide = (slideIndex) => {
    if (slideIndex < 0 || slideIndex >= slides.length) {
      return;
    }
    setCurrentSlide(slideIndex);
  };

  // Handle previous slide button
  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      showSlide(currentSlide - 1);
    }
  };

  // Handle next slide button
  const handleNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      showSlide(currentSlide + 1);
    }
  };

  // Toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    // Disable/enable body scrolling when modal is open/closed
    document.body.style.overflow = isModalOpen ? 'auto' : 'hidden';
  };

  // Cleanup function for body overflow when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Layout activePage="parte">
      <div className="flex flex-col h-full">
        {/* First section - Carousel and Info */}
        <div className="flex flex-col lg:flex-row justify-center items-center" style={{ minHeight: '100vh' }}>
          {/* Carousel side */}
          <div className="w-full lg:w-3/5 h-1/3 lg:h-full bg-[#fcd6c3] flex justify-center items-center" 
               style={{ backgroundColor: '#fcd6c3' }}>
            <div className="relative w-4/5">
              {/* Carousel wrapper */}
              <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {slides.map((slide, index) => (
                  <div 
                    key={slide.id}
                    className={`duration-700 ease-in-out absolute w-full h-full ${index === currentSlide ? 'block' : 'hidden'}`}
                  >
                    <img
                      src={slide.image}
                      className="absolute block w-full h-full object-contain"
                      alt={`Parte ${slide.id}`}
                      style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                    />
                  </div>
                ))}
              </div>
              
              {/* Slider indicators */}
              <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                    aria-current={index === currentSlide ? 'true' : 'false'}
                    aria-label={`Slide ${index + 1}`}
                    onClick={() => showSlide(index)}
                  ></button>
                ))}
              </div>
              
              {/* Slider controls */}
              <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={handlePrevSlide}
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-[#6f72af]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span className="sr-only">Předchozí</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={handleNextSlide}
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-[#6f72af]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="sr-only">Další</span>
                </span>
              </button>
            </div>
          </div>
          
          {/* Info side */}
          <div className="w-full lg:w-2/5 h-2/3 lg:h-full bg-[#6f72af] flex flex-col justify-between" 
               style={{ backgroundColor: '#6f72af' }}>
            <div className="flex flex-col justify-center h-full pl-8 lg:pl-12 w-full">
              <div>
                <h1 className="mb-12 text-3xl md:text-5xl font-bold text-[#fcd6c3]" 
                    style={{ 
                      fontFamily: "var(--reenie-beanie), sans-serif", 
                      color: '#fcd6c3' 
                    }}>
                  Dobře prožitý život
                </h1>
                <p className="w-[25ch] ml-1 py-4 mb-8 text-l md:text-xl border-l-[12px] border-[#fcd6c3] text-white pl-4"
                   style={{ 
                      fontFamily: "var(--reenie-beanie), sans-serif",
                      borderLeftColor: '#fcd6c3',
                      color: 'white'
                   }}>
                  Jedinečný způsob, jak si připomenout život, který za to opravdu stál.
                </p>
                <div className="flex pt-4 pb-6 items-center space-x-3 ml-1">
                  <div className="flex-1 min-w-0">
                    <span className="inline-flex items-center bg-[#45503B] text-[#60D394] text-xs font-medium px-3 py-2 rounded-full"
                          style={{ 
                            fontFamily: "var(--reenie-beanie), sans-serif",
                            backgroundColor: '#45503B',
                            color: '#60D394' 
                          }}>
                      <span className="animate-pulse w-2 h-2 me-1 bg-[#60D394] rounded-full"
                            style={{ backgroundColor: '#60D394' }}></span>
                      Jsem k dispozici
                    </span>
                  </div>
                </div>
                <p className="pt-8 ml-1">
                  <a
                    href="mailto:petraformankova@icloud.com?subject=Parte%20na%20m%C3%ADru"
                    className="py-4 px-8 focus:outline-orange focus:z-10 focus:ring-4 focus:ring-gray-200 text-l md:text-xl font-bold text-[#fcd6c3] border-4 rounded-lg border-[#fcd6c3] transition-colors duration-300 ease-in-out hover:text-[#6f72af] hover:bg-[#fcd6c3]"
                    style={{ 
                      fontFamily: "var(--reenie-beanie), sans-serif",
                      color: '#fcd6c3',
                      borderColor: '#fcd6c3'
                    }}
                  >
                    Kontaktujte mě
                  </a>
                </p>
              </div>
            </div>
            <div className="mt-auto pb-4 pl-8 lg:pl-12 w-4/5 ml-2">
              <p className="text-sm md:text-m text-[#fcd6c3]"
                 style={{ 
                    fontFamily: "var(--reenie-beanie), sans-serif",
                    color: '#fcd6c3' 
                 }}>
                Petra Formánková / 2022
              </p>
            </div>
          </div>
        </div>
        
        {/* Second section - Modal trigger */}
        <div className="flex justify-center items-center relative" style={{ minHeight: '100vh' }}>
          {/* Background Image */}
          <img
            src="https://uploads-ssl.webflow.com/623c406ad1fda124b590fcd7/62459c307153b9839ed67bfe_Sn%C3%ADmek%20obrazovky%202022-03-31%20v%C2%A014.18.49.png"
            loading="lazy"
            alt=""
            className="w-full h-full object-cover"
          />

          {/* Button Container */}
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <button
              onClick={toggleModal}
              className="block py-4 px-8 focus:outline-orange focus:z-10 focus:ring-4 focus:ring-gray-200 text-xl font-bold text-[#6f72af] bg-[#fcd6c3] border-4 rounded-lg border-[#fcd6c3] transition-colors duration-300 ease-in-out hover:text-[#fcd6c3] hover:bg-[#6f72af]"
              type="button"
              style={{ 
                fontFamily: "var(--reenie-beanie), sans-serif",
                color: '#6f72af',
                backgroundColor: '#fcd6c3',
                borderColor: '#fcd6c3'
              }}
            >
              Jaký je postup?
            </button>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div
              className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto flex items-center justify-center h-full max-h-full"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              onClick={toggleModal}
            >
              <div className="relative w-full max-w-2xl max-h-full md:h-auto" onClick={e => e.stopPropagation()}>
                {/* Modal content */}
                <div className="relative bg-[#6f72af] rounded-lg shadow" style={{ backgroundColor: '#6f72af' }}>
                  {/* Modal header */}
                  <div className="flex items-start justify-center p-4 border-b rounded-t">
                    <h2
                      className="text-center text-l md:text-xl font-semibold text-white"
                      style={{ fontFamily: "var(--reenie-beanie), sans-serif", color: 'white' }}
                    >
                      Jaký je postup?
                    </h2>
                  </div>
                  
                  {/* Modal body */}
                  <div className="p-6 space-y-6 flex justify-center">
                    <ol
                      className="max-w-md space-y-4 text-base leading-relaxed text-white list-decimal list-inside"
                      style={{ 
                        fontFamily: "var(--reenie-beanie), sans-serif",
                        color: 'white',
                        markerColor: '#FCD6C3'
                      }}
                    >
                      <li>Bez vašeho souhlasu nikdy nic nezveřejním.</li>
                      <li>
                        Cena bude symbolická, nepřekročí 200 korun, nechci se na vašem
                        bolu obohacovat.
                      </li>
                      <li>
                        V&nbsp;e-mailu zašlete oblíbený text, fotografie, barvu,
                        vzpomínku, cokoliv, co vám vašeho zesnulého může připomínat,
                        nebo co měl rád.
                      </li>
                      <li>
                        Během jednoho dne vám zpět, na váš&nbsp;e-mail, zašlu návrh
                        v&nbsp;nízké kvalitě rozlišení.
                      </li>
                      <li>Ten můžeme dál zdokonalovat. Bude to na vás.</li>
                      <li>
                        Kdykoliv můžete kontakt přerušit, celou situaci si rozmyslet,
                        neuchovávám žádná data.
                      </li>
                      <li>
                        Po přijetí platby, vám obratem, na váš&nbsp;e-mail, zašlu PDF,
                        které si můžete vytisknout
                      </li>
                    </ol>
                  </div>
                  
                  {/* Modal footer */}
                  <div className="flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                    <button
                      onClick={toggleModal}
                      type="button"
                      className="py-2.5 px-4 focus:outline-orange focus:z-10 focus:ring-4 focus:ring-gray-200 text-m font-bold text-[#6f72af] bg-[#fcd6c3] border-4 rounded-lg border-[#fcd6c3] transition-colors duration-300 ease-in-out hover:text-[#fcd6c3] hover:bg-[#6f72af]"
                      style={{ 
                        fontFamily: "var(--reenie-beanie), sans-serif",
                        color: '#6f72af',
                        backgroundColor: '#fcd6c3',
                        borderColor: '#fcd6c3'
                      }}
                    >
                      Zavřít
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}