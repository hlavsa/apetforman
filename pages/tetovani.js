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
    </Layout>
  );
}