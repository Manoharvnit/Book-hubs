const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

// register
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ msg: "User already exists" });

  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashed });
  await user.save();

  const token = jwt.sign({ id: user._id }, JWT_SECRET);
  res.json({ token, user });
});

// login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: "User not found" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ msg: "Wrong password" });

  const token = jwt.sign({ id: user._id }, JWT_SECRET);
  res.json({ token, user });
});

module.exports = router;
