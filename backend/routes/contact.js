const express = require('express');
const router = express.Router();

router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  try {
    // Here you can save the query to a database, send an email, etc.
    console.log(`Received query from ${name} (${email}): ${message}`);
    
    // Simulate success response
    res.json({ success: true, message: 'Query received' });
  } catch (error) {
    console.error('Error processing query:', error);
    res.json({ success: false, message: 'Error submitting query' });
  }
});

module.exports = router;
