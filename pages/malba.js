import React from 'react';
import Layout from '../components/Layout';

export default function MalbaPage() {
  // Sample gallery items for tetování 
  // In a real implementation, you might fetch these from an API or CMS
  const malbaItems = [
    { id: 1, image: '/images/malba/tetov1.jpg', large: true },
    { id: 2, image: '/images/malba/tetov2.jpg', tall: true },
    { id: 3, image: '/images/malba/tetov3.jpg' },
    { id: 4, image: '/images/malba/tetov4.jpg' },
    { id: 5, image: '/images/malba/tetov3.jpg' },
    { id: 6, image: '/images/malba/tetov4.jpg' },
    { id: 7, image: '/images/malba/tetov3.jpg' },
    { id: 8, image: '/images/malba/tetov4.jpg' },
    { id: 9, image: '/images/malba/tetov3.jpg' },
    { id: 10, image: '/images/malba/tetov4.jpg' },
  ];

  return (
    <Layout activePage="malba">
      <div className="art-page-content">
        {malbaItems.map(item => (
          <div 
            key={item.id} 
            className={`art-item ${item.large ? 'large' : ''} ${item.tall ? 'tall' : ''}`}
          >
            <img src={item.image} alt={`Malba - ${item.id}`} />
          </div>
        ))}
      </div>
    </Layout>
  );
}