import React, { useState } from "react";

export default function FarmerDashboard() {
  const [products, setProducts] = useState([
    { id: 1, name: "Tomato", price: 30, stock: 50 },
    { id: 2, name: "Potato", price: 25, stock: 40 },
  ]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const addProduct = (e) => {
    e.preventDefault();

    if (!name || !price || !stock) {
      alert("Please fill all fields");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name,
      price,
      stock,
    };

    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
    setStock("");
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div style={container}>
      {/* Header */}
      <div style={header}>
        <h2>Farmer Dashboard</h2>
        <button onClick={() => alert("Logged out")} style={logoutBtn}>
          🔓 Logout
        </button>
      </div>

      {/* Stats */}
      <div style={stats}>
        <div style={statCard}>
          <p style={statTitle}>📦 Total Products</p>
          <p>{products.length}</p>
        </div>

        <div style={statCard}>
          <p style={statTitle}>🛒 Total Stock</p>
          <p>{products.reduce((sum, p) => sum + Number(p.stock), 0)}</p>
        </div>

        <div style={statCard}>
          <p style={statTitle}>➕ Add Products</p>
          <p>Manage Inventory</p>
        </div>
      </div>

      {/* Add Product Form */}
      <div style={card}>
        <h3>Add New Product</h3>
        <form onSubmit={addProduct} style={form}>
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={input}
          />
          <input
            type="number"
            placeholder="Price (₹)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={input}
          />
          <input
            type="number"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            style={input}
          />
          <button type="submit" style={btn}>
            Add Product
          </button>
        </form>
      </div>

      {/* Product Table */}
      <div style={card}>
        <h3>My Products</h3>
        <table style={table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price (₹)</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.stock}</td>
                <td>
                  <button
                    onClick={() => deleteProduct(p.id)}
                    style={deleteBtn}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  No products added yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* Styles */
const container = {
  padding: "20px",
  minHeight: "100vh",
  background: "#ecfdf5",
  fontFamily: "Arial, sans-serif",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
  padding: "15px",
  background: "white",
  borderRadius: "10px",
  boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
};

const logoutBtn = {
  padding: "5px 10px",
  cursor: "pointer",
  background: "#ef4444",
  color: "white",
  border: "none",
  borderRadius: "5px",
};

const stats = {
  display: "flex",
  gap: "15px",
  marginBottom: "20px",
  flexWrap: "wrap",
};

const statCard = {
  flex: "1",
  padding: "15px",
  background: "white",
  borderRadius: "10px",
  boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
};

const statTitle = {
  fontWeight: "bold",
  marginBottom: "5px",
};

const card = {
  background: "white",
  padding: "15px",
  borderRadius: "10px",
  boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
  marginBottom: "20px",
};

const form = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  marginTop: "10px",
};

const input = {
  padding: "8px",
  flex: "1",
  minWidth: "100px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const btn = {
  padding: "8px 12px",
  background: "#16a34a",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  flexBasis: "100%",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
};

const deleteBtn = {
  padding: "5px 8px",
  background: "#ef4444",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};
