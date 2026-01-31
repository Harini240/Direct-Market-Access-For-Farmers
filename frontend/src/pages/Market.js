import React, { useEffect, useState } from "react";

export default function Market() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts([
        {
          id: 1,
          name: "Fresh Tomatoes",
          price: 30,
          farmer: "Ramesh",
          stock: 40,
          image: "https://via.placeholder.com/300x200?text=Tomatoes",
        },
        {
          id: 2,
          name: "Organic Potatoes",
          price: 25,
          farmer: "Suresh",
          stock: 25,
          image: "https://via.placeholder.com/300x200?text=Potatoes",
        },
        {
          id: 3,
          name: "Green Chillies",
          price: 45,
          farmer: "Mahesh",
          stock: 15,
          image: "https://via.placeholder.com/300x200?text=Chillies",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart`);
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "30px", background: "#ecfdf5", minHeight: "100vh" }}>
      <h1 style={{ color: "#065f46", fontSize: "32px" }}>🛒 Farmers Market</h1>
      <p style={{ color: "#374151", marginBottom: "20px" }}>
        Buy fresh vegetables directly from farmers
      </p>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={searchBox}
      />

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div style={grid}>
          {filteredProducts.map((p) => (
            <div key={p.id} style={card}>
              <img src={p.image} alt={p.name} style={image} />

              <h3>{p.name}</h3>
              <p>👨‍🌾 Farmer: {p.farmer}</p>
              <p>📦 Stock: {p.stock} kg</p>
              <p style={{ fontWeight: "bold" }}>₹{p.price} / kg</p>

              <button style={btn} onClick={() => addToCart(p)}>
                Add to Cart
              </button>
            </div>
          ))}

          {filteredProducts.length === 0 && (
            <p>No products found</p>
          )}
        </div>
      )}
    </div>
  );
}

/* styles */
const searchBox = {
  padding: "10px",
  width: "300px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  marginBottom: "20px",
};

const grid = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
};

const card = {
  background: "white",
  padding: "15px",
  width: "250px",
  borderRadius: "12px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
};

const image = {
  width: "100%",
  height: "150px",
  objectFit: "cover",
  borderRadius: "8px",
};

const btn = {
  marginTop: "10px",
  width: "100%",
  padding: "8px",
  background: "#16a34a",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};
