import React, { useState } from 'react';
import Layout from '../components/Layout';

export default function MalbaPage() {
  const [expandedItem, setExpandedItem] = useState(null);
  
  // Sample gallery items for tetování
  const malbaItems = [
    /* { id: 1, image: '/images/malba/tetov1.jpg', large: true },
    { id: 2, image: '/images/malba/tetov2.jpg', tall: true },
    { id: 3, image: '/images/malba/tetov3.jpg' },
    { id: 4, image: '/images/malba/tetov4.jpg' },
    { id: 5, image: '/images/malba/tetov3.jpg' },
    { id: 6, image: '/images/malba/tetov4.jpg' },
    { id: 7, image: '/images/malba/tetov3.jpg' },
    { id: 8, image: '/images/malba/tetov4.jpg' }, */
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
    <Layout activePage="malba">
      <>
        <div className="art-page-content" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: 'auto auto',
          gap: '20px',
          width: '100%',
          height: '100%'
        }}>
          {malbaItems.length > 0 ? (
            malbaItems.map(item => (
              <div 
                key={item.id} 
                className={`art-item ${item.large ? 'large' : ''} ${item.tall ? 'tall' : ''}`}
                onClick={() => handleItemClick(item)}
              >
                <img src={item.image} alt={`Tetování - ${item.id}`} />
              </div>
            ))
          ) : (
            <div className="no-images-message" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              gridColumn: 'span 2',
              padding: '2rem'
            }}>
              <div style={{
                padding: '1.5rem 2rem',
                background: 'url("/images/torn-paper.webp") center/cover no-repeat',
                display: 'inline-block',
                position: 'relative'
              }}>
                <p style={{
                  fontFamily: 'var(--reenie-beanie), sans-serif',
                  fontSize: '2.5rem',
                  fontWeight: '400',
                  color: '#16161D',
                  margin: 0,
                  position: 'relative',
                  zIndex: 2
                }}>
                  zatím bez obrázků
                </p>
              </div>
            </div>
          )}
        </div>
        
        {/* Port hand with more extreme positioning and styling */}
        <div style={{
          position: 'fixed', 
          bottom: '0', 
          left: '30%', 
          zIndex: '999',
          pointerEvents: 'none',
          width: '100%',
          height: '300px',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-end'
        }}>
          <img
            src="/images/port-hand.webp"
            alt="Port hand"
            style={{
              width: '40%',
              height: 'auto',
              objectFit: 'contain',
              mixBlendMode: 'multiply'
            }}
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
    </Layout>
  );
}