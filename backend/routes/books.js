const express = require("express");
const jwt = require("jsonwebtoken");
const Book = require("../models/Book");
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

// middleware for token authentication
function auth(req, res, next) {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ msg: "No token" });
  const token = header.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch {
    res.status(401).json({ msg: "Invalid token" });
  }
}

// get all books
router.get("/", async (req, res) => {
  const books = await Book.find().populate("addedBy", "name email");
  res.json(books);
});

// add book
router.post("/", auth, async (req, res) => {
  const book = new Book({ ...req.body, addedBy: req.userId });
  await book.save();
  res.json(book);
});

// like/unlike
router.put("/:id/like", auth, async (req, res) => {
  const book = await Book.findById(req.params.id);
  const idx = book.likes.indexOf(req.userId);
  if (idx === -1) book.likes.push(req.userId);
  else book.likes.splice(idx, 1);
  await book.save();
  res.json(book);
});

// delete (only owner)
router.delete("/:id", auth, async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (book.addedBy.toString() !== req.userId)
    return res.status(403).json({ msg: "Not allowed" });
  await book.deleteOne();
  res.json({ msg: "Deleted" });
});

module.exports = router;
