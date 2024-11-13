import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); 
    setStatus(''); 
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setStatus('Invalid email format');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      if (response.data.success) {
        setStatus('Login successful!');
        setTimeout(() => navigate('/'), 1500); 
      } else {
        setStatus('Invalid email or password.');
      }
    } catch (error) {
      if (error.response) {
        setStatus(`Error: ${error.response.data.message || 'There was an error logging in.'}`);
      } else if (error.request) {
        setStatus('No response from the server.');
      } else {
        setStatus('There was an error logging in.');
      }
    }
    setLoading(false);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <p className="status-message">{status}</p>
      </form>
      <p>
        New user?{' '}
        <span className="link" onClick={() => navigate('/signup')}>
          Sign up here
        </span>
      </p>
    </div>
  );
}

export default Login;
