// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './FormModal.css';

const FormModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = () => {
    
    handleCloseModal();
  };

  return (
    <div>
      <div className="button-container">
      <button className="open-button contact-button" onClick={handleOpenModal}>CONTACT US</button>;
    </div>
      {/* Modal */}
      {modalOpen && (
        <div className="form-modal">
          <div className="form-container">
            <h2>What do you need?</h2>
            <div className="form-content">
            <label className="name" htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label className="email" htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            </div>
            <div className="buttons">
            <button className="open-button send-button" onClick={handleSubmit}>Submit</button>
            <button className="open-button close-button" onClick={handleCloseModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormModal;
