import React, { useState } from 'react';

const categories = [
  { 
    id: 1, 
    name: 'Cereals and Grains', 
    products: [
      { 
        id: 1, 
        name: 'Rice (Paddy) - Basmati', 
        price: '$20', 
        description: 'Premium quality Basmati rice, known for its long grains and aromatic fragrance.', 
        origin: 'India', 
        weight: '25kg', 
        quality: 'Premium',
        image: 'path_to_basmatirice.jpg'
      },
      { 
        id: 2, 
        name: 'Rice (Paddy) - Non-Basmati', 
        price: '$15', 
        description: 'Economical, non-Basmati rice, great for everyday cooking.', 
        origin: 'Tamil Nadu, India', 
        weight: '25kg', 
        quality: 'Standard',
        image: 'path_to_nonbasmatirice.jpg'
      },
      { 
        id: 3, 
        name: 'Millets (Ragi)', 
        price: '$15', 
        description: 'Nutritious and gluten-free, ideal for health-conscious individuals.', 
        origin: 'Tamil Nadu, India', 
        weight: '1kg', 
        quality: 'Organic',
        image: 'path_to_ragi.jpg'
      },
      { 
        id: 4, 
        name: 'Wheat - Soft Wheat', 
        price: '$18', 
        description: 'Soft wheat for making flour, ideal for bread, pastries, and cakes.', 
        origin: 'Punjab, India', 
        weight: '10kg', 
        quality: 'Premium',
        image: 'path_to_softwheat.jpg'
      },
      { 
        id: 5, 
        name: 'Wheat - Hard Wheat', 
        price: '$16', 
        description: 'Hard wheat, perfect for making pasta and other durum-based products.', 
        origin: 'Uttar Pradesh, India', 
        weight: '10kg', 
        quality: 'Standard',
        image: 'path_to_hardwheat.jpg'
      },
      { 
        id: 6, 
        name: 'Maize (Corn) - Yellow', 
        price: '$12', 
        description: 'Fresh yellow maize, used for a variety of dishes like tortillas and cornbread.',
        origin: 'Uttarakhand, India', 
        weight: '5kg', 
        quality: 'Standard',
        image: 'path_to_yellowmaize.jpg'
      },
      { 
        id: 7, 
        name: 'Maize (Corn) - White', 
        price: '$14', 
        description: 'White maize, often used for making cornmeal and various snacks.',
        origin: 'Himachal Pradesh, India', 
        weight: '5kg', 
        quality: 'Premium',
        image: 'path_to_whitemaize.jpg'
      },
      { 
        id: 8, 
        name: 'Sorghum', 
        price: '$10', 
        description: 'A healthy, gluten-free grain, ideal for soups and cereals.',
        origin: 'Rajasthan, India', 
        weight: '3kg', 
        quality: 'Organic',
        image: 'path_to_sorghum.jpg'
      },
      { 
        id: 9, 
        name: 'Barley', 
        price: '$13', 
        description: 'Barley grains, known for their high fiber content, great for soups and salads.',
        origin: 'Madhya Pradesh, India', 
        weight: '2kg', 
        quality: 'Organic',
        image: 'path_to_barley.jpg'
      },
      { 
        id: 10, 
        name: 'Organic Quinoa', 
        price: '$22', 
        description: 'Gluten-free, nutrient-rich quinoa perfect for healthy meals.',
        origin: 'Himachal Pradesh, India', 
        weight: '1kg', 
        quality: 'Organic',
        image: 'path_to_quinoa.jpg'
      },
      { 
        id: 11, 
        name: 'Amaranth', 
        price: '$18', 
        description: 'A rich source of protein and vitamins, ideal for health-conscious individuals.',
        origin: 'Rajasthan, India', 
        weight: '1kg', 
        quality: 'Organic',
        image: 'path_to_amaranth.jpg'
      },
      { 
        id: 12, 
        name: 'Pearl Millet', 
        price: '$12', 
        description: 'Rich in fiber and iron, perfect for weight management and overall health.',
        origin: 'Madhya Pradesh, India', 
        weight: '2kg', 
        quality: 'Organic',
        image: 'path_to_pearlmillet.jpg'
      }
    ]
  },
  { 
    id: 2, 
    name: 'Fruits', 
    products: [
      { 
        id: 13, 
        name: 'Mangoes (Alphonso)', 
        price: '$25', 
        description: 'Sweet, juicy, and fragrant Alphonso mangoes, a summer delight.', 
        origin: 'Maharashtra, India', 
        weight: '1kg', 
        quality: 'Premium',
        image: 'path_to_mango.jpg'
      },
      { 
        id: 14, 
        name: 'Mangoes (Kesar)', 
        price: '$22', 
        description: 'Rich, fragrant, and delicious Kesar mangoes, known for their sweetness.',
        origin: 'Gujarat, India', 
        weight: '1kg', 
        quality: 'Premium',
        image: 'path_to_kesarmango.jpg'
      },
      { 
        id: 15, 
        name: 'Bananas (Nendran)', 
        price: '$8', 
        description: 'Firm and sweet Nendran bananas, commonly used in South Indian cooking.',
        origin: 'Kerala, India', 
        weight: '1kg', 
        quality: 'Fresh',
        image: 'path_to_nendranbananas.jpg'
      },
      { 
        id: 16, 
        name: 'Bananas (Raja)', 
        price: '$9', 
        description: 'Raja bananas, smaller in size but incredibly sweet and tasty.',
        origin: 'Tamil Nadu, India', 
        weight: '1kg', 
        quality: 'Fresh',
        image: 'path_to_rajabananas.jpg'
      },
      { 
        id: 17, 
        name: 'Papayas', 
        price: '$10', 
        description: 'Tropical, ripe papayas, perfect for juices and fruit salads.',
        origin: 'Tamil Nadu, India', 
        weight: '1.5kg', 
        quality: 'Fresh',
        image: 'path_to_papaya.jpg'
      },
      { 
        id: 18, 
        name: 'Guavas (Pink)', 
        price: '$15', 
        description: 'Sweet and tangy pink guavas, rich in Vitamin C.',
        origin: 'Uttarakhand, India', 
        weight: '1kg', 
        quality: 'Organic',
        image: 'path_to_pinkguava.jpg'
      },
      { 
        id: 19, 
        name: 'Guavas (White)', 
        price: '$12', 
        description: 'Mildly sweet white guavas, great for jams and juices.',
        origin: 'Uttarakhand, India', 
        weight: '1kg', 
        quality: 'Fresh',
        image: 'path_to_whiteguava.jpg'
      },
      { 
        id: 20, 
        name: 'Oranges (Nagpur)', 
        price: '$12', 
        description: 'Fresh, juicy oranges, perfect for fresh juice and snacks.',
        origin: 'Nagpur, India', 
        weight: '1kg', 
        quality: 'Fresh',
        image: 'path_to_nagpurorange.jpg'
      },
      { 
        id: 21, 
        name: 'Oranges (Blood)', 
        price: '$14', 
        description: 'Blood oranges with a unique flavor and color, perfect for juices.',
        origin: 'Nagpur, India', 
        weight: '1kg', 
        quality: 'Premium',
        image: 'path_to_bloodorange.jpg'
      }
    ]
  },
  { 
    id: 3, 
    name: 'Vegetables', 
    products: [
      { 
        id: 22, 
        name: 'Tomatoes (Hybrid)', 
        price: '$5', 
        description: 'Fresh, red hybrid tomatoes, great for salads, sauces, and curries.', 
        origin: 'Himachal Pradesh, India', 
        weight: '500g', 
        quality: 'Fresh',
        image: 'path_to_hybridtomatoes.jpg'
      },
      { 
        id: 23, 
        name: 'Tomatoes (Local)', 
        price: '$4', 
        description: 'Locally grown tomatoes, rich in flavor and perfect for cooking.',
        origin: 'Karnataka, India', 
        weight: '500g', 
        quality: 'Fresh',
        image: 'path_to_localtomatoes.jpg'
      },
      { 
        id: 24, 
        name: 'Spinach (Local)', 
        price: '$3', 
        description: 'Fresh local spinach, ideal for healthy salads and cooked dishes.',
        origin: 'Karnataka, India', 
        weight: '250g', 
        quality: 'Fresh',
        image: 'path_to_spinach.jpg'
      },
      { 
        id: 25, 
        name: 'Spinach (Baby)', 
        price: '$5', 
        description: 'Tender baby spinach, perfect for salads and quick stir-fries.',
        origin: 'Karnataka, India', 
        weight: '250g', 
        quality: 'Organic',
        image: 'path_to_babyspinach.jpg'
      }
    ]
  }
];

const ProductList = ({ category }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity }]);
  };

  return (
    <div className="product-list">
      <h2>{category.name}</h2>
      <div className="products">
        {category.products.map((product) => (
          <div key={product.id} className="product">
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Origin: {product.origin}</p>
              <p>Weight: {product.weight}</p>
              <p>Price: {product.price}</p>
              <p>Quality: {product.quality}</p>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              />
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const ShoppingCart = ({ cart }) => {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - {item.quantity} x {item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [cart, setCart] = useState([]);

  return (
    <div className="app">
      <h1>Grocery Store</h1>
      <div className="category-selector">
        <h3>Select Category:</h3>
        <select onChange={(e) => setSelectedCategory(categories[e.target.selectedIndex])}>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <ProductList category={selectedCategory} />
      <div className="cart-container">
        <ShoppingCart cart={cart} />
      </div>
    </div>
  );
};

export default App;
