import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import ProductList from './components/ProductList';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';

import './styles.css';

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          {/* Welcome Message */}
          <h1 className="welcome-text">Welcome to Earthly Goods</h1>

          {/* Top Navigation Links in Separate Line */}
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <span>|</span>
            <Link to="/about">About Us</Link>
            <span>|</span>
            <Link to="/contact">Contact</Link>
            <span>|</span>
            <Link to="/products">Products</Link>
          </nav>

          {/* Login/Sign Up Button on the top-right corner */}
          <div className="login-signup">
            <Link to="/login" className="login-btn">Login/Sign Up</Link>
          </div>
        </header>

        {/* Main Content Section */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer>
          <p>&copy; 2024 Earthly Goods. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
