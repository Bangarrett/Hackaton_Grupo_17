import React, { useState } from 'react';
import App from './App';

function CartContainer() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.product.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const itemToRemove = cartItems.find((item) => item.product.id === productId);

    if (itemToRemove.quantity > 1) {
      setCartItems(
        cartItems.map((item) =>
          item.product.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } else {
      setCartItems(cartItems.filter((item) => item.product.id !== productId));
    }
  };

  return <App cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />;
}

export default CartContainer;
