require('../model/database')
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const User = require('../model/User');

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

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Verify password using Argon2
    const passwordMatch = await argon2.verify(user.password, password);
    if (!passwordMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    // Save token to user
    user.tokens = user.tokens.concat({ token });
    await user.save();

    res.status(200).json({ message: "User signed in successfully", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


exports.getAllUsers = async (req, res) => {
  try {
    // Extract the token from the request headers
    const token = req.headers.authorization;

    // Check if the token is provided
    if (!token) {
      return res.status(401).json({ message: "Authorization token is required" });
    }

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token" });
      }

      // Check if the user has the necessary role/permission to access the users list
      // For example, you could check if the user role is "admin"
      const user = await User.findById(decoded._id);
      if (!user || user.role !== "admin") {
        return res.status(403).json({ message: "Unauthorized access" });
      }

      // If the user is authenticated and authorized, retrieve all users from the database
      const users = await User.find();

      // If no users found, return an empty array
      if (!users || users.length === 0) {
        return res.status(404).json({ message: "No users found" });
      }

      // If users found, return them in the response
      res.status(200).json({ users });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};