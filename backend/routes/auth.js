const express = require('express');
const router = express.Router();

// Mock user database (for example purposes only)
const users = [];

router.post('/signup', (req, res) => {
  const { name, contact, email, password } = req.body;
  const userExists = users.some((user) => user.email === email);
  if (userExists) {
    return res.json({ success: false, message: 'User already exists' });
  }
  users.push({ name, contact, email, password });
  res.json({ success: true, message: 'Sign-Up successful' });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email && user.password === password);
  if (user) {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.json({ success: false, message: 'Invalid email or password' });
  }
});

module.exports = router;
