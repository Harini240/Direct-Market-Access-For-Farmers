import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", background: "#dff5e1" }}>
      
      {/* Hero Section */}
      <section style={{ textAlign: "center", padding: "80px 20px" }}>
        <h1 style={{ fontSize: "40px", color: "#14532d" }}>
          Direct Market Access for Farmers
        </h1>

        <p style={{ fontSize: "18px", color: "#374151", maxWidth: "700px", margin: "20px auto" }}>
          No middlemen. Fair price. Fresh products delivered directly from farmers
          to consumers.
        </p>

        <div style={{ marginTop: "30px" }}>
          <button
            style={btnPrimary}
            onClick={() => navigate("/market")} // Navigate to Market page
          >
            🛒 Buy Products
          </button>

          <button
            style={btnSecondary}
            onClick={() => navigate("/farmer-login")} // Navigate to Farmer Login
          >
            👨‍🌾 Join as Farmer
          </button>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "28px", color: "#14532d", marginBottom: "30px" }}>
          Why Choose Us?
        </h2>

        <div style={featureContainer}>
          <div style={card}>
            <h3>🌱 Fresh Produce</h3>
            <p>Directly sourced from farms for maximum freshness.</p>
          </div>

          <div style={card}>
            <h3>💰 Fair Pricing</h3>
            <p>Farmers earn more and customers pay less.</p>
          </div>

          <div style={card}>
            <h3>🤝 Trusted Network</h3>
            <p>Verified farmers and satisfied consumers.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#166534", color: "white", textAlign: "center", padding: "15px" }}>
        © {new Date().getFullYear()} Direct Market Access | All Rights Reserved
      </footer>
    </div>
  );
}

/* styles */
const btnPrimary = {
  background: "#16a34a",
  color: "white",
  padding: "12px 24px",
  borderRadius: "10px",
  border: "none",
  marginRight: "10px",
  fontSize: "16px",
  cursor: "pointer",
};

const btnSecondary = {
  background: "white",
  color: "#166534",
  padding: "12px 24px",
  borderRadius: "10px",
  border: "2px solid #166534",
  fontSize: "16px",
  cursor: "pointer",
};

const featureContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap",
};

const card = {
  background: "white",
  padding: "20px",
  width: "250px",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};
