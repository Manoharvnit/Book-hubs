import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <h1>Welcome to Book Hubs</h1>
                <p>Your one-stop destination for exploring a world of books!</p>
                <button className="cta-button">Get Started</button>
            </section>

            {/* Featured Books Section */}
            <section className="featured-books">
                <h2>Featured Books</h2>
                <div className="book-list">
                    {/* Sample Book Items */}
                    <div className="book-item">Book 1</div>
                    <div className="book-item">Book 2</div>
                    <div className="book-item">Book 3</div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="statistics">
                <h2>Our Statistics</h2>
                <div className="stat-item">1000+ Happy Readers</div>
                <div className="stat-item">500+ Books Available</div>
                <div className="stat-item">10+ Authors</div>
            </section>

            {/* Features Showcase Section */}
            <section className="features-showcase">
                <h2>Features</h2>
                <ul>
                    <li>Explore Books Easily</li>
                    <li>Create Your Own Bookshelf</li>
                    <li>Join Book Clubs</li>
                </ul>
            </section>

            {/* Call to Action Section */}
            <section className="call-to-action">
                <h2>Join Us Today</h2>
                <p>Sign up to start your reading journey!</p>
                <button className="cta-button">Sign Up</button>
            </section>
        </div>
    );
};

export default Home;