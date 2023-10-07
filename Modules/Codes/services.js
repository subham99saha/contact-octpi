// Modules/Codes/services.js

const Code = require('../../Models/Codes');

// Function to create a new code record
const createCode = async (data) => {
  try {
    const newCode = new Code(data);
    await newCode.save();
    return newCode;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createCode,
};
