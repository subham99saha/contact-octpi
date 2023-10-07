// Modules/Codes/routes.js

const express = require('express');
const router = express.Router();
const codesService = require('./services');

// POST route to create a new record
router.post('/', async (req, res) => {
  const response = await codesService.saveCode(req.body);
  res.status((response.success === true) ? 201 : 500).json(response);
});

router.put('/:code', async (req, res) => {
  const { code } = req.params;
  const response = await codesService.updateCode(code, req.body);
  res.status((response.success === true) ? 200 : 500).json(response);
});

router.get('/', async (req, res) => {
  const response = await codesService.getAllCodes();
  res.status(200).json(response);
});

router.post('/search', async (req, res) => {
  const { code } = req.body;
  const response = await codesService.searchCodesByCode(code);
  res.status(200).json(response);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const response = await codesService.deleteCode(id);
  res.status((response.success === true) ? 204 : 500).json(response);
});

// APIs
router.get('/save/:code', async (req, res) => {
  const { code } = req.params;
  const response = await codesService.saveCodeViaGet(code);
  res.status(200).json(response);
});

router.get('/check/:code', async (req, res) => {
  const { code } = req.params;
  const response = await codesService.checkCodeAndRemove(code);
  res.status(200).json(response);
});

module.exports = router;
