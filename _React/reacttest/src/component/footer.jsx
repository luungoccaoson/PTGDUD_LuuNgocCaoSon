import React from 'react';
import './Footer.css';
import logo from '../img/Lab02/Group 16.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section about">
        <h3>About Us</h3>
        <p>
          Welcome to our website, a wonderful place to explore and learn how to
          cook like a pro.
        </p>
        <div className="email-subscribe">
          <input type="email" placeholder="Enter your email" />
          <button>Send</button>
        </div>
      </div>

      <div className="footer-section learn-more">
        <h3>Learn More</h3>
        <ul>
          <li><a href="#our-cooks">Our Cooks</a></li>
          <li><a href="#see-features">See Our Features</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </div>

      <div className="footer-section recipes">
        <h3>Recipes</h3>
        <ul>
          <li><a href="#what-to-cook">What to Cook This Week</a></li>
          <li><a href="#pasta">Pasta</a></li>
          <li><a href="#dinner">Dinner</a></li>
          <li><a href="#healthy">Healthy</a></li>
          <li><a href="#vegetarian">Vegetarian</a></li>
          <li><a href="#vegan">Vegan</a></li>
          <li><a href="#christmas">Christmas</a></li>
        </ul>
      </div>

      <div className="footer-section shop">
        <h3>Shop</h3>
        <ul>
          <li><a href="#gift-subscription">Gift Subscription</a></li>
          <li><a href="#send-feedback">Send Us Feedback</a></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <img src={logo} alt="Chefify Logo" className="footer-logo" />
        <p>
          Chefify © 2023 Chefify Company | <a href="#terms">Terms of Service</a> | <a href="#privacy">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

