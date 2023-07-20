import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const CartContainer = styled('div')({
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  width: '500px',
  padding: '16px',
  borderRadius: '10px',
  background: 'linear-gradient(to right, #ffff, #ffff)',
});

const CartHeader = styled('h2')({
  textAlign: 'center',
  marginBottom: '16px',
  fontSize: '24px',
  padding: '8px',
  borderRadius: '8px',
  background: 'linear-gradient(to right, #D3D3D3, #7f7f7f)',
  color: 'Grey',
});

const CartItem = styled(ListItem)(({ theme }) => ({
  width: '360px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${theme.palette.divider}`,
  background: 'linear-gradient(to right, #7f7f7f, #7f7f7f)',
}));

const DeleteButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.error.main,
}));

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <CartContainer>
      <CartHeader>Cart</CartHeader>
      <List>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem key={item.product.id}>
              <ListItemText primary={item.product.title} />
              <ListItemText primary={`Quanty: ${item.quantity}`} />
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
          <ListItem>
            <ListItemText primary="The cart is empty." />
          </ListItem>
        )}
      </List>
    </CartContainer>
  );
};

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
