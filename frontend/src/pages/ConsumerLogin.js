import React, { useState } from "react";

export default function ConsumerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    alert("Login Successful! (Demo)");
  };

  return (
    <div style={container}>
      <div style={card}>
        <h2 style={title}>Consumer Login</h2>

        <form onSubmit={handleSubmit} style={form}>
          <div>
            <label style={label}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={input}
            />
          </div>

          <div>
            <label style={label}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={input}
            />
          </div>

          <button type="submit" style={btn}>
            Login
          </button>
        </form>

        <div style={extra}>
          <p style={link} onClick={() => alert("Forgot Password Clicked")}>
            Forgot Password?
          </p>
          <p>
            Don't have an account?{" "}
            <span
              style={signupLink}
              onClick={() => alert("Sign Up Clicked")}
            >
              Sign Up
            </span>
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
  background: "linear-gradient(to right, #bfdbfe, #e0bbff)",
  fontFamily: "Arial, sans-serif",
};

const card = {
  background: "white",
  padding: "30px",
  borderRadius: "15px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  width: "100%",
  maxWidth: "400px",
};

const title = {
  textAlign: "center",
  fontSize: "28px",
  marginBottom: "20px",
  color: "#4b5563",
  fontWeight: "bold",
};

const form = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const label = {
  display: "block",
  marginBottom: "5px",
  color: "#374151",
  fontWeight: "500",
};

const input = {
  width: "100%",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
  outline: "none",
};

const btn = {
  padding: "10px",
  backgroundColor: "#7c3aed",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  cursor: "pointer",
  marginTop: "10px",
};

const extra = {
  marginTop: "15px",
  textAlign: "center",
  fontSize: "14px",
  color: "#6b7280",
};

const link = {
  cursor: "pointer",
  color: "#7c3aed",
  marginBottom: "5px",
};

const signupLink = {
  cursor: "pointer",
  color: "#7c3aed",
  fontWeight: "bold",
};
