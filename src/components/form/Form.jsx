import React from 'react';

  const ContactForm = ({ isOpen, onClose }) => {
    return (
      <div className={`contact-form ${isOpen ? 'open' : ''}`}>
        <form>
          <h2>Contact</h2>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" />
          <button type="submit">Enviar</button>
          <button type="button" onClick={onClose}>Cerrar</button>
        </form>
      </div>
    );
  };
  
  export default ContactForm;