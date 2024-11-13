// backend/routes/itemRoutes.js
const express = require('express');
const Item = require('../models/Item');
const router = express.Router();

// GET all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new item
router.post('/', async (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  });

  try {
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
