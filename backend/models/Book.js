const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  category: String,
  rating: Number,
  note: String,
  addedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  comments: [{ user: String, text: String }]
});

module.exports = mongoose.model("Book", bookSchema);
