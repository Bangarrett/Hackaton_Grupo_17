import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';

const CartItem = styled('div')(({ theme }) => ({
  width: '240px', 
  height: '30px', 
  display: 'flex',  
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const DeleteButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.error.main,
}));

function Cart({ cartItems, removeFromCart }) {
  return (
    <div>
      <h2>Carrito de Compra</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <CartItem key={item.product.id}>
            <span>{item.product.title}</span>
            <span>Cantidad: {item.quantity}</span>
            <DeleteButton
              aria-label="delete"
              size="small"
              onClick={() => removeFromCart(item.product.id)}
            >
              <DeleteIcon fontSize="small" />
            </DeleteButton>
          </CartItem>
        ))
      ) : (
        <p>El carrito está vacío.</p>
      )}
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.object.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;

