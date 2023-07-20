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
    // Aquí puedes agregar la lógica para manejar los datos del formulario
    // ...

    // Cierra el modal después de enviar el formulario
    handleCloseModal();
  };

  return (
    <div>
      <h1>¡Hola! Esta es mi aplicación.</h1>
      <button className="open-button" onClick={handleOpenModal}>Abrir Formulario</button>

      {/* Modal */}
      {modalOpen && (
        <div className="form-modal">
          <div className="form-container">
            <h2>Formulario de Contacto</h2>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />

            <button className="open-button" onClick={handleSubmit}>Enviar</button>
            <button className="open-button close-button" onClick={handleCloseModal}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormModal;
