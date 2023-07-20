import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="info-contact">
        <h3>Contact Info</h3>
        <p>Address: 1 Old King Avenue</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@beathub.com</p>
      </div>
      <div className="social-media">
        <h3>Social Media</h3>
        <ul>
          <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
