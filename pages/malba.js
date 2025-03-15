import React, { useState } from 'react';
import Layout from '../components/Layout';

export default function MalbaPage() {
  const [expandedItem, setExpandedItem] = useState(null);
  
  // Sample gallery items for malba
  const malbaItems = [
    { id: 1, image: '/images/malba/malb1.jpeg', large: true },
    { id: 2, image: '/images/malba/malba2.JPG', tall: true },
    /* { id: 3, image: '/images/malba/tetov3.jpg' },
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
        <div className="art-page-content">
          {malbaItems.length > 0 ? (
            malbaItems.map(item => (
              <div
                key={item.id}
                className={`art-item ${item.large ? 'large' : ''} ${item.tall ? 'tall' : ''}`}
                onClick={() => handleItemClick(item)}
              >
                <img src={item.image} alt={`Malba - ${item.id}`} />
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
              alt={`Malba - ${expandedItem.id}`}
              className="expanded-image"
            />
          </div>
        </div>
      )}
    </Layout>
  );
}