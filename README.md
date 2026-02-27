# Book Hub

Book Hub is a full-stack Book Management Web Application built using the MERN stack (MongoDB, Express, React, Node.js).  
It allows users to securely register, log in, and manage their personal book collection with JWT-based authentication.

---

## Features

- User Registration
- User Login
- Secure Password Hashing (bcrypt)
- JWT Authentication
- Protected Routes (Middleware)
- Add New Book
- View Personal Books
- Delete Book
- MongoDB Integration
- Environment Variable Configuration

---

##  Tech Stack

**Frontend**
- React.js
- Axios
- CSS

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- dotenv
- cors

---

##  Authentication Flow

1. User registers or logs in.
2. Backend hashes password using bcrypt.
3. JWT token is generated:
   ```js
   jwt.sign({ id: user._id }, JWT_SECRET);
   ```
4. Token is sent to frontend.
5. Frontend stores token in localStorage.
6. Token is sent in headers for protected routes:
   ```
   Authorization: Bearer <token>
   ```
7. Middleware verifies token before allowing access.

---

##  Database Design

### User Schema
- name (String)
- email (String, unique)
- password (String, hashed)

### Book Schema
- title (String)
- author (String)
- category (String)
- rating (Number)
- note (String)
- user (ObjectId reference to User)

Each book is linked to the logged-in user.

---

##  Project Structure

```
Book-Hub/
│
├── frontend/
│   └── src/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
└── README.md
```

---

##  Installation & Setup

###  Clone Repository

```bash
git clone https://github.com/your-username/book-hub.git
cd book-hub
```

---

###  Backend Setup

```bash
cd backend
npm install
```

Created a `.env` file inside backend folder:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/bookhub
JWT_SECRET=your_secret_key
```

Start backend server:

```bash
npm start
```

---

###  Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on:  
```
http://localhost:3000
```

Backend runs on:  
```
http://localhost:5000
```

---

##  Security Practices

- Password hashing using bcrypt
- JWT-based authentication
- Protected routes via middleware
- Environment variables for sensitive data
- User ID added server-side (not trusted from frontend)

---

##  What I Learned

- REST API development
- Middleware in Express
- JWT authentication & verification
- MongoDB relationships using ObjectId
- Full-stack data flow
- Secure backend architecture
- State management in React

---

** Author**

Manohar

---
