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
          title="Rock T-shirt"
          image="./src/assets/pinkflo.jpg"
          description=""
          addToCart={() => addToCart({ id: 1, title: 'Rock T-shirt' })}
          toggleFavorite={toggleFavorite}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardItem
          title="Taza de grupo"
          image="./src/assets/taza1.jpeg"
          description=""
          addToCart={() => addToCart({ id: 2, title: 'Taza de grupo' })}
          toggleFavorite={toggleFavorite}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardItem
          title="Kygo Sudadera"
          image="./src/assets/kygo-camisa.webp"
          description=""
          addToCart={() => addToCart({ id: 3, title: 'Sudadera Kygo' })}
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
