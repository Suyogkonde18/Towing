const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
  const { name, number, location } = req.body;
  try {
    const request = new Contact({ name, number, location });
    await request.save();
    res.status(201).json({ message: 'Request submitted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
