import React, { useState } from 'react';
import Layout from '../components/Layout';

export default function TetovaniPage() {
  const [expandedItem, setExpandedItem] = useState(null);
  
  // Sample gallery items for tetování
  const tetovaniItems = [
    /* { id: 1, image: '/images/tetovani/tetov1.jpg', large: true },
    { id: 2, image: '/images/tetovani/tetov2.jpg', tall: true },
    { id: 3, image: '/images/tetovani/tetov3.jpg' },
    { id: 4, image: '/images/tetovani/tetov4.jpg' },
    { id: 5, image: '/images/tetovani/tetov3.jpg' },
    { id: 6, image: '/images/tetovani/tetov4.jpg' },
    { id: 7, image: '/images/tetovani/tetov3.jpg' },
    { id: 8, image: '/images/tetovani/tetov4.jpg' }, */
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
    <Layout activePage="tetovani">
      <>
        <div className="art-page-content">
          {tetovaniItems.length > 0 ? (
            tetovaniItems.map(item => (
              <div 
                key={item.id} 
                className={`art-item ${item.large ? 'large' : ''} ${item.tall ? 'tall' : ''}`}
                onClick={() => handleItemClick(item)}
              >
                <img src={item.image} alt={`Tetování - ${item.id}`} />
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
      </>

      {/* Expanded view overlay */}
      {expandedItem && (
        <div className="expanded-overlay" onClick={handleClose}>
          <div className="expanded-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleClose}>
              zavřít
            </button>
            <img 
              src={expandedItem.image} 
              alt={`Tetování - ${expandedItem.id}`}
              className="expanded-image"
            />
          </div>
        </div>
      )}
      
      <style jsx>{`
        .art-page-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 20px;
          width: 100%;
          height: 100%;
        }
        
        .art-item {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
          aspect-ratio: 1 / 1;
        }
        
        .art-item:hover {
          transform: scale(1.02);
        }
        
        .art-item.large {
          grid-column: span 2;
        }
        
        .art-item.tall {
          grid-row: span 2;
        }
        
        .art-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        
        .no-images-message {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
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
        
        .port-hand-container {
          position: fixed;
          bottom: 0;
          left: 30%;
          z-index: 5;
          pointer-events: none;
          width: 100%;
          height: 300px;
          display: flex;
          justify-content: flex-start;
          align-items: flex-end;
        }
        
        .port-hand-image {
          width: 40%;
          height: auto;
          object-fit: contain;
          mix-blend-mode: multiply;
        }
        
        @media (max-width: 768px) {
          .art-page-content {
            grid-template-columns: 1fr;
            gap: 15px;
            padding: 10px;
            max-width: 80%;
            margin: 0 auto;
          }
          
          .art-item {
            max-width: 100%;
            margin: 0 auto;
          }
          
          .art-item.large {
            grid-column: span 1;
            max-height: 250px;
          }
          
          .art-item.tall {
            aspect-ratio: 1 / 1.5;
            grid-row: span 1;
            max-height: 300px;
          }
          
          .port-hand-container {
            left: 0;
            height: 150px;
            justify-content: center;
            bottom: 0;
          }
          
          .port-hand-image {
            width: 35%;
            max-width: 120px;
          }
          
          .empty-message p {
            font-size: 1.8rem;
          }
        }
        
        @media (max-width: 480px) {
          .art-page-content {
            gap: 10px;
            padding: 5px;
            max-width: 70%;
          }
          
          .art-item.large {
            max-height: 180px;
          }
          
          .art-item.tall {
            max-height: 220px;
          }
          
          .port-hand-image {
            width: 30%;
            max-width: 100px;
          }
        }
      `}</style>
    </Layout>
  );
}