// Modules/Users/services.js

const User = require('../../Models/Users');

// Function to create a new code record
const saveUser = async (email) => {
  try {
    const newUser = new User({email});
    let response = await newUser.save();
    if (response) {
      return { success: true, message: response }
    } else {
      return { success: false, message: 'Internal Server Error' }
    }
  } catch (error) {
    return { success: false, message: error }
  }
};

const getAllUsers = async () => {
  try {
    const codes = await User.find();
    return { success: true, message: codes };
  } catch (error) {
    return { success: false, message: error };
  }
};

module.exports = {
  saveUser,
  getAllUsers,
};
