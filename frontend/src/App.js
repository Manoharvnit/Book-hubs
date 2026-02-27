import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Books from "./pages/Books";

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <h1>Book Hub</h1>

        {/* 🔗 Navigation Links */}
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/register" style={{ marginRight: "10px" }}>Register</Link>
          <Link to="/login" style={{ marginRight: "10px" }}>Login</Link>
          <Link to="/books">Books</Link>
        </nav>

        {/* 🛣️ Define Routes */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
