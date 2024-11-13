import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setStatus('Passwords do not match.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/signup', formData);
      if (response.data.success) {
        setStatus('Sign-Up successful! Please log in.');
        navigate('/login'); // Redirect to login page after successful sign-up
      } else {
        setStatus('Sign-Up failed. Please try again.');
      }
    } catch (error) {
      setStatus('There was an error signing up.');
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        
        <label>Contact Number:</label>
        <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />
        
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        
        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        
        <button type="submit">Sign Up</button>
        <p className="status-message">{status}</p>
      </form>
    </div>
  );
}

export default Signup;
