// backend/routes/orderRoutes.js
const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const Order = require('../models/Order');
const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
  const { items, total } = req.body;

  const order = new Order({
    user: req.user.userId,
    items,
    total,
  });

  try {
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/', authMiddleware, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.userId });
    res.json(orders);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
