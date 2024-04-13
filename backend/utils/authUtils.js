require('dotenv').config();
const jwt = require('jsonwebtoken');

const generateAccessToken = (user) => {
  const payload = {
    userId: user._id,
    name: user.name,
  };

  const options = {
    expiresIn: '50m', // Access token expiration time (adjust as needed)
  };

  return jwt.sign(payload, process.env.JWT_SECRET, options);
};


const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    throw new Error('Invalid token');
  }
};

module.exports = { verifyToken, generateAccessToken};



