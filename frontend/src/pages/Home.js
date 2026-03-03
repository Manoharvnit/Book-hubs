import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <header className="hero">
                <h1>Welcome to Book Hubs!</h1>
                <p>Your gateway to a world of books and knowledge.</p>
            </header>
            <section className="featured">
                <h2>Featured Books</h2>
                <div className="book-list">
                    <div className="book-item">Book 1</div>
                    <div className="book-item">Book 2</div>
                    <div className="book-item">Book 3</div>
                </div>
            </section>
            <section className="info">
                <h2>About This App</h2>
                <p>Book Hubs is your app for discovering and sharing books.</p>
                <p>Join us in our journey to build an amazing community of book lovers!</p>
            </section>
        </div>
    );
};

export default Home;