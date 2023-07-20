import React from 'react';
import PropTypes from 'prop-types';
import CardItem from './CardItem';
import Grid from '@mui/material/Grid';

function Merchandising({ addToCart }) {
  const toggleFavorite = () => {
  };

  return (
    
    <Grid container spacing={2}>
      {}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardItem
          title="Camiseta Rolling Stones"
          image="./src/assets/rolling-stones.jpg"
          description=""
          addToCart={() => addToCart({ id: 1, title: 'Camiseta Rolling Stones' })}
          toggleFavorite={toggleFavorite}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardItem
          title="Rock T-shirt"
          image="./src/assets/pinkflo.jpg"
          description=""
          addToCart={() => addToCart({ id: 2, title: 'Rock T-shirt' })}
          toggleFavorite={toggleFavorite}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardItem
          title="Taza Pink Floyd"
          image="./src/assets/taza1.jpeg"
          description=""
          addToCart={() => addToCart({ id: 3, title: 'Taza Pink Floyd' })}
          toggleFavorite={toggleFavorite}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardItem
          title="Kygo Sudadera"
          image="./src/assets/kygo-camisa.webp"
          description=""
          addToCart={() => addToCart({ id: 4, title: 'Sudadera Kygo' })}
          toggleFavorite={toggleFavorite}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardItem
          title="Taza Música"
          image="./src/assets/taza-musica.jpg"
          description=""
          addToCart={() => addToCart({ id: 5, title: 'Taza Música' })}
          toggleFavorite={toggleFavorite}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardItem
          title="DVD Deep Purple"
          image="./src/assets/deep-purple.jpg"
          description=""
          addToCart={() => addToCart({ id: 6, title: 'DVD Deep Purple' })}
          toggleFavorite={toggleFavorite}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardItem
          title="Camiseta Led Zeppelin"
          image="./src/assets/led-zeppelin.jpg"
          description=""
          addToCart={() => addToCart({ id: 7, title: 'Camiseta Led Zeppelin' })}
          toggleFavorite={toggleFavorite}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardItem
          title="CD Queen"
          image="./src/assets/cd-queen.jpg"
          description=""
          addToCart={() => addToCart({ id: 8, title: 'CD Queen' })}
          toggleFavorite={toggleFavorite}
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
