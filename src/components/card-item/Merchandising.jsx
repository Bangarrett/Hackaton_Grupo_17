import React from 'react';
import PropTypes from 'prop-types';
import CardItem from './CardItem';
import Grid from '@mui/material/Grid';

function Merchandising({ addToCart }) {
  const toggleFavorite = (item) => {
    // Obtener la lista de favoritos del localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    // Agregar o eliminar el elemento de la lista de favoritos
    const index = favorites.findIndex(favorite => favorite.id === item.id);
    if (index === -1) {
      favorites.push(item);
    } else {
      favorites.splice(index, 1);
    }
    // Guardar la lista de favoritos en el localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  return (
    
    <Grid container spacing={2}>
      {}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardItem
          title="Rolling Stones T-shirt"
          image="./src/assets/rolling-stones.jpg"
          description=""
          addToCart={() => addToCart({ id: 1, title: 'Rolling Stones T-shirt' })}
          toggleFavorite={() => toggleFavorite({ id: 1, title: 'Rolling Stones T-shirt' })}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardItem
          title="Rock T-shirt"
          image="./src/assets/pinkflo.jpg"
          description=""
          addToCart={() => addToCart({ id: 2, title: 'Rock T-shirt' })}
          toggleFavorite={() => toggleFavorite({ id: 2, title: 'Rock T-shirt' })}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardItem
          title="Pink Floyd Cup"
          image="./src/assets/taza1.jpeg"
          description=""
          addToCart={() => addToCart({ id: 3, title: 'Pink Floyd Cup' })}
          toggleFavorite={() => toggleFavorite({ id: 3, title: 'Pink Floyd Cup' })}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardItem
          title="Kygo Sweatshirt"
          image="./src/assets/kygo-camisa.webp"
          description=""
          addToCart={() => addToCart({ id: 4, title: 'Kygo Sweatshirt' })}
          toggleFavorite={() => toggleFavorite({ id: 4, title: 'Kygo Sweatshirt' })}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardItem
          title="Music Cup"
          image="./src/assets/taza-musica.jpg"
          description=""
          addToCart={() => addToCart({ id: 5, title: 'Music Cup' })}
          toggleFavorite={() => toggleFavorite({ id: 5, title: 'Music Cup' })}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardItem
          title="Deep Purple DVD"
          image="./src/assets/deep-purple.jpg"
          description=""
          addToCart={() => addToCart({ id: 6, title: 'Deep Purple DVD' })}
          toggleFavorite={() => toggleFavorite({ id: 6, title: 'Deep Purple DVD' })}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardItem
          title="Led Zeppelin T-shirt"
          image="./src/assets/led-zeppelin.jpg"
          description=""
          addToCart={() => addToCart({ id: 7, title: 'Led Zeppelin T-shirt' })}
          toggleFavorite={() => toggleFavorite({ id: 7, title: 'Led Zeppelin T-shirt' })}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardItem
          title="Queen CD"
          image="./src/assets/cd-queen.jpg"
          description=""
          addToCart={() => addToCart({ id: 8, title: 'Queen CD' })}
          toggleFavorite={() => toggleFavorite({ id: 8, title: 'Queen CD' })}
        />
      </Grid>
      {}
    </Grid>
  );
}

Merchandising.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Merchandising;
