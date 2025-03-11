import React, { useState } from 'react';
import Layout from '../components/Layout';

// A reusable component for any art category page (tetovani, malba, ilustrace, parte)
export default function ArtCategoryPage({ category, items = [] }) {
  const [expandedItem, setExpandedItem] = useState(null);
  
  // If no items are passed, we can use some placeholder items
  const displayItems = items.length > 0 ? items : [
    { id: 1, image: '/images/placeholder1.jpg', large: true },
    { id: 2, image: '/images/placeholder2.jpg', tall: true },
    { id: 3, image: '/images/placeholder3.jpg' },
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
    <Layout activePage={category}>
      <>
        <div className="main-content-area" style={{ position: 'relative' }}>
          {displayItems.length > 0 ? (
            <div className="art-page-content" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: 'auto auto',
              gap: '20px',
              width: '100%',
              height: '100%'
            }}>
              {displayItems.map(item => (
                <div 
                  key={item.id} 
                  className={`art-item ${item.large ? 'large' : ''} ${item.tall ? 'tall' : ''}`}
                  onClick={() => handleItemClick(item)}
                  style={{ 
                    cursor: 'pointer',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    backgroundColor: '#180000',
                    ...(item.large ? { gridColumn: 'span 2' } : {}),
                    ...(item.tall ? { gridRow: 'span 2' } : {})
                  }}
                >
                  <img 
                    src={item.image} 
                    alt={`${category} - ${item.id}`} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div style={{
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
          
          {/* Port hand with fixed positioning */}
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
        </div>

        {/* Expanded view overlay */}
        {expandedItem && (
          <div 
            className="expanded-overlay"
            onClick={handleClose}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(249, 236, 229, 0.9)',
              zIndex: 100,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2rem'
            }}
          >
            <div 
              className="expanded-content"
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                maxWidth: '90%',
                maxHeight: '90vh',
                backgroundColor: '#f9ece5',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                overflow: 'hidden'
              }}
            >
              <button 
                className="close-button"
                onClick={handleClose}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'url("/images/torn-paper.webp") center/cover no-repeat',
                  border: 'none',
                  padding: '8px 15px',
                  fontSize: '1.5rem',
                  fontFamily: 'var(--reenie-beanie), sans-serif',
                  cursor: 'pointer',
                  zIndex: 10,
                  color: '#16161D'
                }}
              >
                zavřít
              </button>
              <img 
                src={expandedItem.image} 
                alt={`${category} - ${expandedItem.id}`}
                className="expanded-image"
                style={{
                  display: 'block',
                  maxWidth: '100%',
                  maxHeight: 'calc(90vh - 60px)', 
                  objectFit: 'contain'
                }}
              />
              {expandedItem.title && (
                <div 
                  style={{
                    padding: '1rem',
                    fontFamily: 'var(--reenie-beanie), sans-serif',
                    fontSize: '1.5rem',
                    textAlign: 'center',
                    color: '#16161D'
                  }}
                >
                  {expandedItem.title}
                </div>
              )}
            </div>
          </div>
        )}
      </>
    </Layout>
  );
}