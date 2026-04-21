import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Eval App</h3>
          <p>Crafting quality modern essentials for your daily lifestyle. Join our community of minimalist enthusiasts.</p>
        </div>
        <div className="footer-links">
          <h4>Navigate</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Connect</h4>
          <p>Email: hello@evalapp.com</p>
          <div className="social-links">
            <span>Twitter</span>
            <span>Instagram</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Made By Ibrahim Mohamed Ezzat</p>
      </div>
    </footer>
  );
};