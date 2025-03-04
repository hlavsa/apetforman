import React from 'react';
import Layout from '../components/Layout';

// A reusable component for any art category page (tetovani, malba, ilustrace, parte)
export default function ArtCategoryPage({ category, items = [] }) {
  // If no items are passed, we can use some placeholder items
  const displayItems = items.length > 0 ? items : [
    { id: 1, image: '/images/placeholder1.jpg', large: true },
    { id: 2, image: '/images/placeholder2.jpg', tall: true },
    { id: 3, image: '/images/placeholder3.jpg' },
  ];

  return (
    <Layout activePage={category}>
      <div className="art-page-content">
        {displayItems.map(item => (
          <div 
            key={item.id} 
            className={`art-item ${item.large ? 'large' : ''} ${item.tall ? 'tall' : ''}`}
          >
            <img src={item.image} alt={`${category} - ${item.id}`} />
          </div>
        ))}
      </div>
    </Layout>
  );
}

// Example usage in pages:

// pages/tetovani.js
// import ArtCategoryPage from '../components/ArtCategoryPage';
// export default function TetovaniPage() {
//   return <ArtCategoryPage category="tetovani" />;
// }

// pages/malba.js
// import ArtCategoryPage from '../components/ArtCategoryPage';
// export default function MalbaPage() {
//   return <ArtCategoryPage category="malba" />;
// }

// And so on for ilustrace.js and parte.js