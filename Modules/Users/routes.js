// Modules/Users/routes.js

const express = require('express');
const router = express.Router();
const usersService = require('./services');

router.get('/', async (req, res) => {
  const response = await usersService.getAllUsers();
  res.status(200).json(response);
});

// APIs
router.get('/save/:email', async (req, res) => {
  const { email } = req.params;
  const response = await usersService.saveUser(email);
  res.status(200).json(response);
});

module.exports = router;
