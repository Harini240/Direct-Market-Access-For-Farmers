import React, { useState } from "react";

export default function FarmerLogin() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!phone || !password) {
      alert("Please fill all fields");
      return;
    }

    if (phone.length !== 10) {
      alert("Enter valid 10-digit phone number");
      return;
    }

    alert("Farmer Login Successful! (Demo)");
  };

  return (
    <div style={container}>
      <div style={card}>
        <h2 style={title}>Farmer Login</h2>

        <form onSubmit={handleSubmit} style={form}>
          {/* Phone */}
          <div style={inputGroup}>
            <label>Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
              maxLength="10"
              style={input}
            />
          </div>

          {/* Password */}
          <div style={inputGroup}>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              style={input}
            />
          </div>

          {/* Button */}
          <button type="submit" style={btn}>
            Login
          </button>
        </form>

        {/* Extra Links */}
        <div style={links}>
          <p style={link}>Forgot Password?</p>
          <p>
            New Farmer?{" "}
            <span style={register}>Register Here</span>
          </p>
        </div>
      </div>
    </div>
  );
}

/* Styles */
const container = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(to right, #d1fae5, #a7f3d0)",
  padding: "20px",
};

const card = {
  background: "white",
  padding: "30px",
  borderRadius: "15px",
  maxWidth: "400px",
  width: "100%",
  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
};

const title = {
  fontSize: "28px",
  color: "#065f46",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "20px",
};

const form = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const inputGroup = {
  display: "flex",
  flexDirection: "column",
  gap: "5px",
};

const input = {
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const btn = {
  padding: "10px",
  backgroundColor: "#16a34a",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer",
  marginTop: "10px",
};

const links = {
  marginTop: "20px",
  textAlign: "center",
  fontSize: "14px",
  color: "#4b5563",
};

const link = {
  cursor: "pointer",
  marginBottom: "5px",
};

const register = {
  color: "#16a34a",
  fontWeight: "bold",
  cursor: "pointer",
};
