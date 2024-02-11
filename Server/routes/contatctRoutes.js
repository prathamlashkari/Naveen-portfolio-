const express = require('express');
const Contact = require('../models/Contact');

const router = express.Router();

router.post('/api/contact', async (req, res) => {
  const { name, email, mobile, msg } = req.body;

  if (!name || !email || !mobile || !msg) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newContact = new Contact({
    name,
    email,
    mobile,
    msg,
  });

  try {
    await newContact.save();
    res.status(201).json({ message: 'Contact form submitted successfully!' });
  } catch (error) {
    console.error('Error saving to MongoDB:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
