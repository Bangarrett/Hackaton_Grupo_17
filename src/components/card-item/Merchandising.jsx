import React from 'react';
import PropTypes from 'prop-types';
import CardItem from './CardItem';

function Merchandising({ addToCart }) {
  const toggleFavorite = () => {
    // Aquí puedes agregar la lógica para marcar o desmarcar un producto como favorito
  };

  return (
    <div>
      <CardItem
        title="Rock T-shirt"
        image="./src/assets/pinkflo.jpg"
        description=""
        addToCart={() => addToCart({ id: 1, title: 'Rock T-shirt' })}
        toggleFavorite={toggleFavorite}
      />
      <CardItem
        title="Pop Mug"
        image="./src/assets/taza1.jpeg"
        description=""
        addToCart={() => addToCart({ id: 2, title: 'Pop Mug' })}
        toggleFavorite={toggleFavorite}
      />
      {/* Agrega más CardItems */}
    </div>
  );
}

Merchandising.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Merchandising;

