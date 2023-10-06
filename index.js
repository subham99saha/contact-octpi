// index.js

const express = require('express');
const cors = require('cors');
const config = require('./config.json'); // Import config from config.json

const app = express();

// Middleware to enable CORS
app.use(cors());

// Test GET route
app.get('/', (req, res) => {
  res.json({ message: 'API is up and running!' });
});

// Start the server using the PORT from config.json
app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
