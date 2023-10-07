// Modules/Codes/services.js

const Code = require('../../Models/Codes');

// Function to create a new code record
const saveCode = async (data) => {
  try {
    const newCode = new Code(data);
    let response = await newCode.save();
    if (response) {
      return { success: true, message: response }
    } else {
      return { success: false, message: 'Internal Server Error' }
    }
  } catch (error) {
    return { success: false, message: error }
  }
};

const saveCodeViaGet = async (code) => {
  try {
    const newCode = new Code({code});
    let response = await newCode.save();
    if (response) {
      return { success: true, message: response }
    } else {
      return { success: false, message: 'Internal Server Error' }
    }
  } catch (error) {
    return { success: false, message: error }
  }
};

const updateCode = async (codeToUpdate, newData) => {
  try {
    const updatedCode = await Code.findOneAndUpdate(
      { code: codeToUpdate },
      { $set: newData },
      { new: true }
    );

    if (updatedCode) {
      return { success: true, message: updatedCode };
    } else {
      return { success: false, message: 'Code not found' };
    }
  } catch (error) {
    return { success: false, message: error };
  }
};

const getAllCodes = async () => {
  try {
    const codes = await Code.find();
    return { success: true, message: codes };
  } catch (error) {
    return { success: false, message: error };
  }
};

const searchCodesByCode = async (code) => {
  try {
    const codes = await Code.find({ code });
    if (codes.length) {
      return { success: true, message: codes };
    } else {
      return { success: false, message: 'Code not found' };
    }    
  } catch (error) {
    return { success: false, message: error };
  }
};

const deleteCode = async (id) => {
  try {
    const deletedCode = await Code.findByIdAndRemove(id);
    if (deletedCode) {
      return { success: true, message: 'Code deleted successfully' };
    } else {
      return { success: false, message: 'Code not found' };
    }
  } catch (error) {
    return { success: false, message: error };
  }
};


const checkCodeAndRemove = async (code) => {
  try {
    const codes = await Code.find({ code });
    if (codes.length) {
      const deletedCode = await Code.findByIdAndRemove(codes[0]._id);
      if (deletedCode) {
        return { success: true, message: 'Code found and removed successfully' };
      } else {
        return { success: false, message: 'Something went wrong' };
      }
    } else {
      return { success: false, message: 'Code not found' };
    }    
  } catch (error) {
    return { success: false, message: error };
  }
};

module.exports = {
  saveCode,
  saveCodeViaGet,
  updateCode,
  getAllCodes,
  searchCodesByCode,
  deleteCode,
  checkCodeAndRemove
};
