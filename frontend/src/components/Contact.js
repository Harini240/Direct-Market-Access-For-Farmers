import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      if (response.data.success) {
        setStatus('Thank you for your query. We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });  
      } else {
        setStatus('Error submitting your query. Please try again later.');
      }
    } catch (error) {
      setStatus('There was an issue submitting your query. Please try again.');
    }
  };

  return (
    <div className="contact-container">
      <div className="left-side">
        <h2>Contact Admin</h2>
        <p>Email: <a href="mailto:admin@example.com">earthlygoods@gmail.com</a></p>
        <p>Phone: +91 9999 45 6788</p>
        <p>Address: 123 Example St, City, Country</p>
      </div>

      <div className="right-side">
        <h2>We'd love to hear from you! Please fill out the form below to reach out.</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Message:
            <textarea name="message" value={formData.message} onChange={handleChange} required />
          </label>
          <button type="submit">Submit</button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
    </div>
  );
}

export default Contact;
