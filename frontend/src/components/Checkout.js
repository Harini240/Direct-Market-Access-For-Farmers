import React, { useState } from 'react';
import axios from 'axios';

function Checkout({ cartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem('authToken');
      await axios.post(
        'http://localhost:5000/api/orders',
        { items: cartItems, total },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Order placed successfully!');
    } catch (error) {
      alert('Checkout failed.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item._id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
      <button onClick={handleCheckout} disabled={isLoading}>
        {isLoading ? 'Processing...' : 'Place Order'}
      </button>
    </div>
  );
}

export default Checkout;
