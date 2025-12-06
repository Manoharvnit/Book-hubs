import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function Books() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    rating: "",
    note: "",
  });
  const [message, setMessage] = useState("");

  // Fetch all books when page loads
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/books", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBooks(res.data);
    } catch (err) {
      console.error(err);
      setMessage("❌ Error fetching books (please log in)");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post("http://localhost:5000/api/books", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage("✅ Book added successfully!");
      setBooks([...books, res.data]);
      setForm({ title: "", author: "", category: "", rating: "", note: "" });
    } catch (err) {
      setMessage("❌ Failed to add book. Please log in.");
    }
  };

  const deleteBook = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/books/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBooks(books.filter((b) => b._id !== id));
      setMessage("🗑️ Book deleted!");
    } catch (err) {
      setMessage("❌ Failed to delete book.");
    }
  };

  return (
    <div className="container">
      <h2>📘 Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          placeholder="Author"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
        />
        <input
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
        <input
          placeholder="Rating"
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: e.target.value })}
        />
        <textarea
          placeholder="Note"
          value={form.note}
          onChange={(e) => setForm({ ...form, note: e.target.value })}
          style={{
            width: "90%",
            padding: "10px",
            borderRadius: "8px",
            border: "2px solid #ddd",
            marginTop: "10px",
          }}
        />
        <button type="submit">Add Book</button>
      </form>

      <p className="message">{message}</p>

      <hr style={{ margin: "20px 0" }} />

      <h2>📚 Your Books</h2>
      {books.length === 0 ? (
        <p>No books added yet.</p>
      ) : (
        books.map((book) => (
          <div key={book._id} className="book-card">
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Category:</strong> {book.category}</p>
            <p><strong>Rating:</strong> ⭐ {book.rating}</p>
            <p>{book.note}</p>
            <button onClick={() => deleteBook(book._id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Books;
