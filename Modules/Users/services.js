// Modules/Users/services.js

const User = require('../../Models/Users');

// Function to create a new user record
const saveUser = async (email,name) => {
  try {
    const existingUser = await User.findOne({email});
    if (existingUser) {
      return { success: false, message: 'Email already exists' };
    }

    const newUser = new User({email,name});
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
    const users = await User.find();
    return { success: true, message: users };
  } catch (error) {
    return { success: false, message: error };
  }
};

module.exports = {
  saveUser,
  getAllUsers,
};
