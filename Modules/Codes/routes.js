// Modules/Codes/routes.js

const express = require('express');
const router = express.Router();
const codesService = require('./services');

// POST route to create a new record
router.post('/', async (req, res) => {
  try {
    console.log({body: req.body})
    const newCode = await codesService.createCode(req.body);
    res.status(201).json(newCode);
  } catch (error) {
    console.error('Error creating code:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
