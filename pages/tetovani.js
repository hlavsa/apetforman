import React from 'react';
import Layout from '../components/Layout';

export default function TetovaniPage() {
  // Sample gallery items for tetování 
  // In a real implementation, you might fetch these from an API or CMS
  const tetovaniItems = [
    { id: 1, image: '/images/tetovani/tetov1.jpg', large: true },
    { id: 2, image: '/images/tetovani/tetov2.jpg', tall: true },
    { id: 3, image: '/images/tetovani/tetov3.jpg' },
    { id: 4, image: '/images/tetovani/tetov4.jpg' },
  ];

  return (
    <Layout activePage="tetovani">
      <div className="art-page-content">
        {tetovaniItems.map(item => (
          <div 
            key={item.id} 
            className={`art-item ${item.large ? 'large' : ''} ${item.tall ? 'tall' : ''}`}
          >
            <img src={item.image} alt={`Tetování - ${item.id}`} />
          </div>
        ))}
      </div>
    </Layout>
  );
}