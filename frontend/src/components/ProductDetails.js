import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const product = {
    id,
    name: 'Eco-Friendly Bag',
    description: 'This eco-friendly bag is perfect for shopping sustainably.',
    price: '$15',
    image: 'https://via.placeholder.com/150',
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img src={product.image} alt={product.name} style={{ width: '200px' }} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductDetails;
