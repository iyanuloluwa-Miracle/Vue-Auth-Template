require('../model/database')
const argon2 = require('argon2');
const User = require('../model/User');
const { generateAccessToken ,verifyToken } = require('../utils/authUtils');


// Load environment variables
require('dotenv').config();

exports.register = async (req, res) => {
  try {
    const { first_name, last_name, email, password,password_confirm } = req.body;

    // Check if passwords match
    if (password !== password_confirm) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password using Argon2
    const hashedPassword = await argon2.hash(password);

    // Create new user
    const newUser = new User({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      password_confirm // Make sure to store confirmPassword securely in production
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by name
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email!' });
    }

    // Compare the password using Argon2
    const isPasswordValid = await argon2.verify(user.password, password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password, Provide the correct Password!' });
    }

    // Generate the access token and refresh token
    const accessToken = generateAccessToken(user);

    // Send both tokens in the response
    res.status(200).json({ success: true, accessToken, message:"Login Successful" });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
exports.getAllUsers = async (req, res) => {
  try {
    // Check if the authorization header is provided
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "Unauthorized: Missing authorization header" });
    }

    // Split the authorization header to extract the token
    const tokenParts = authHeader.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
      return res.status(401).json({ message: "Unauthorized: Invalid authorization header format" });
    }
    const token = tokenParts[1];

    // Verify the access token
    verifyToken(token); // Verify token without storing the decoded payload

    // If verification is successful, continue to fetch all users
    const users = await User.find({}, 'first_name last_name email'); // Projection to include only name and email
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};


exports.getUserById = async (req, res) => {
  try {
    // Check if the authorization header is provided
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "Unauthorized: Missing authorization header" });
    }

    // Split the authorization header to extract the token
    const tokenParts = authHeader.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
      return res.status(401).json({ message: "Unauthorized: Invalid authorization header format" });
    }
    const token = tokenParts[1];

    // Verify the access token
    verifyToken(token); // Verify token without storing the decoded payload

    // If verification is successful, continue to fetch the user
    const userId = req.params.userId; // Assuming userId is passed as a route parameter
    const user = await User.findById(userId, 'first_name last_name email'); // Only fetch the specified fields
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ name: `${user.first_name} ${user.last_name}`, email: user.email });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};
