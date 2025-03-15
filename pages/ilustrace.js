import React, { useState } from 'react';
import Layout from '../components/Layout';

export default function IlustracePage() {
  const [expandedItem, setExpandedItem] = useState(null);
  
  // Sample gallery items for ilustrace
  const ilustraceItems = [
    { id: 1, image: '/images/ilustrace/1-ilustrace.png', large: true },
    { id: 2, image: '/images/ilustrace/parte-ilustrace.png', tall: true },
    { id: 3, image: '/images/ilustrace/2-ilustrace.jpeg' },
    /*
    { id: 4, image: '/images/ilustrace/tetov4.jpg' },
    { id: 5, image: '/images/ilustrace/tetov3.jpg' },
    { id: 6, image: '/images/ilustrace/tetov4.jpg' },
    { id: 7, image: '/images/ilustrace/tetov3.jpg' },
    { id: 8, image: '/images/ilustrace/tetov4.jpg' },
    */
  ];

  // Handle click on an artwork
  const handleItemClick = (item) => {
    setExpandedItem(item);
  };

  // Handle closing the expanded view
  const handleClose = () => {
    setExpandedItem(null);
  };

  return (
    <Layout activePage="ilustrace">
      <div className="ilustrace-page">
        <div className="custom-art-gallery">
          {ilustraceItems.length > 0 ? (
            ilustraceItems.map((item) => (
              <div
                key={item.id}
                className={`gallery-item ${
                  item.large ? 'large' : ''
                } ${item.tall ? 'tall' : ''}`}
                onClick={() => handleItemClick(item)}
              >
                <img
                  src={item.image}
                  alt={`Ilustrace - ${item.id}`}
                />
              </div>
            ))
          ) : (
            <div className="no-images-message">
              <div className="empty-message">
                <p>zatím bez obrázků</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Port hand with more extreme positioning and styling */}
        <div className="port-hand-container">
          <img
            src="/images/port-hand.webp"
            alt="Port hand"
            className="port-hand-image"
          />
        </div>
      </div>

      {/* Expanded view overlay */}
      {expandedItem && (
        <div className="expanded-overlay" onClick={handleClose}>
          <div
            className="expanded-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-button"
              onClick={handleClose}
            >
              zavřít
            </button>
            <img
              src={expandedItem.image}
              alt={`Ilustrace - ${expandedItem.id}`}
              className="expanded-image"
            />
          </div>
        </div>
      )}

      <style jsx>{`
        /* 
          Main page wrapper that holds all content.
          We make it scrollable on iOS by setting
          overflow-y: auto; and -webkit-overflow-scrolling: touch.
        */
        .ilustrace-page {
          width: 100%;
          /* Let it expand as needed instead of forcing 100vh */
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 100px;

          overflow-y: auto;             /* Allow vertical scrolling */
          -webkit-overflow-scrolling: touch;  /* iOS smooth scroll */
        }

        .custom-art-gallery {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          width: 100%;
          max-width: 90%;
          margin: 0 auto;
          padding: 10px;
        }

        .gallery-item {
          background-color: transparent;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          aspect-ratio: 1/1;
          max-height: 400px;
        }

        .gallery-item.large {
          grid-column: span 2;
          max-height: 300px;
        }

        .gallery-item.tall {
          max-height: 600px;
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* 
          The "port-hand" is fixed at the bottom (like a watermark).
          This won't block scrolling as long as .ilustrace-page is scrollable.
        */
        .port-hand-container {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          pointer-events: none;
          z-index: 50;
        }

        .port-hand-image {
          width: 35%;
          max-width: 150px;
          height: auto;
          object-fit: contain;
          mix-blend-mode: multiply;
        }

        .expanded-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(249, 236, 229, 0.95);
          z-index: 100;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .expanded-content {
          position: relative;
          max-width: 90vw;
          max-height: 80vh;
          background-color: #f9ece5;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: url("/images/torn-paper.webp") center/cover no-repeat;
          border: none;
          padding: 8px 15px;
          font-size: 1.5rem;
          font-family: var(--reenie-beanie), sans-serif;
          font-weight: 400;
          font-style: normal;
          cursor: pointer;
          z-index: 10;
        }

        .expanded-image {
          display: block;
          max-width: 90vw;
          max-height: 80vh;
          object-fit: contain;
        }

        .no-images-message {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          grid-column: span 2;
          padding: 2rem;
        }

        .empty-message {
          padding: 1.5rem 2rem;
          background: url("/images/torn-paper.webp") center/cover no-repeat;
          display: inline-block;
          position: relative;
        }

        .empty-message p {
          font-family: var(--reenie-beanie), sans-serif;
          font-size: 2.5rem;
          font-weight: 400;
          color: #16161D;
          margin: 0;
          position: relative;
          z-index: 2;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .custom-art-gallery {
            grid-template-columns: 1fr;
            max-width: 85%;
          }

          .gallery-item {
            max-height: 250px;
          }

          .gallery-item.large {
            grid-column: span 1;
            max-height: 200px;
          }

          .gallery-item.tall {
            max-height: 300px;
          }

          .port-hand-image {
            width: 30%;
            max-width: 120px;
          }
        }

        @media (max-width: 480px) {
          .custom-art-gallery {
            max-width: 80%;
            gap: 10px;
          }

          .gallery-item {
            max-height: 200px;
          }

          .gallery-item.large {
            max-height: 150px;
          }

          .gallery-item.tall {
            max-height: 250px;
          }

          .port-hand-image {
            width: 25%;
            max-width: 100px;
          }
          .port-hand-container {
            bottom: 30%;
          }
        }
      `}</style>
    </Layout>
  );
}
