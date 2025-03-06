import React from 'react';
import Layout from '../components/Layout';

export default function IlustracePage() {
  // Sample gallery items for tetování 
  // In a real implementation, you might fetch these from an API or CMS
  const ilustraceItems = [
    { id: 1, image: '/images/ilustrace/tetov1.jpg', large: true },
    { id: 2, image: '/images/ilustrace/tetov2.jpg', tall: true },
    { id: 3, image: '/images/ilustrace/tetov3.jpg' },
    { id: 4, image: '/images/ilustrace/tetov4.jpg' },
    { id: 5, image: '/images/ilustrace/tetov3.jpg' },
    { id: 6, image: '/images/ilustrace/tetov4.jpg' },
    { id: 7, image: '/images/ilustrace/tetov3.jpg' },
    { id: 8, image: '/images/ilustrace/tetov4.jpg' },
    { id: 9, image: '/images/ilustrace/tetov3.jpg' },
    { id: 10, image: '/images/ilustrace/tetov4.jpg' },
  ];

  return (
    <Layout activePage="ilustrace">
      <div className="art-page-content">
        {ilustraceItems.map(item => (
          <div 
            key={item.id} 
            className={`art-item ${item.large ? 'large' : ''} ${item.tall ? 'tall' : ''}`}
          >
            <img src={item.image} alt={`Ilustrace - ${item.id}`} />
          </div>
        ))}
      </div>
    </Layout>
  );
}