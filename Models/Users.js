// Models/Users.js

const mongoose = require('mongoose');

// Define the schema for the 'Users' model
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  }
});

// Create and export the 'Users' model
module.exports = mongoose.model('Users', userSchema);
