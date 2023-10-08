// Models/Codes.js

const mongoose = require('mongoose');

// Define the schema for the 'Codes' model
const codeSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  lastHit: {
    type: Date,
    default: null,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

// Create and export the 'Codes' model
module.exports = mongoose.model('Codes', codeSchema);
