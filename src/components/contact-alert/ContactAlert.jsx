import React, { useState } from 'react';
import Button from './src/components/Button';
import ContactForm from './src/components/ContactForm';
import './App.css';

function ContactAlert() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleButtonClick = () => {
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={handleButtonClick} />
        <ContactForm isOpen={isFormOpen} onClose={handleFormClose} />
      </header>
    </div>
  );
}

export default ContactAlert;
