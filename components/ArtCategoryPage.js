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
      <div className="art-page-content">
        {displayItems.map(item => (
          <div 
            key={item.id} 
            className={`art-item ${item.large ? 'large' : ''} ${item.tall ? 'tall' : ''}`}
            onClick={() => handleItemClick(item)}
            style={{ cursor: 'pointer' }}
          >
            <img 
              src={item.image} 
              alt={`${category} - ${item.id}`} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        ))}
        
        {/* Add port-hand image at the bottom */}
        <img
          src="/images/port-hand.png"
          alt="Port hand"
          style={{
            position: 'absolute',
            bottom: '-20px',
            left: '0',
            width: '40%',
            height: 'auto',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        />
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
              maxHeight: '90%',
              backgroundColor: '#f9ece5',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              overflow: 'hidden'
            }}
          >
            <button 
              onClick={handleClose}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'url("/images/torn-paper.png") center/cover no-repeat',
                border: 'none',
                padding: '8px 15px',
                fontSize: '1.5rem',
                fontFamily: 'var(--reenie-beanie), cursive',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              zavřít
            </button>
            <img 
              src={expandedItem.image} 
              alt={`${category} - ${expandedItem.id}`}
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
                  fontFamily: 'var(--reenie-beanie), cursive',
                  fontSize: '1.5rem'
                }}
              >
                {expandedItem.title}
              </div>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
}