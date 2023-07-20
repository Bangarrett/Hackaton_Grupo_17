import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="info-contact">
        <h3>Información de Contacto</h3>
        <p>Dirección: 123 Calle Principal</p>
        <p>Teléfono: (123) 456-7890</p>
        <p>Email: info@example.com</p>
      </div>
      <div className="social-media">
        <h3>Redes Sociales</h3>
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
