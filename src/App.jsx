import React, { useState } from 'react';
import './App.css';
import TrendingTracks from './components/Carrousel';
import Merchandising from './components/card-item/Merchandising';
import Cart from './components/card-item/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Comprobar si el producto ya está en el carrito
    const existingItem = cartItems.find((item) => item.product.id === product.id);

    if (existingItem) {
      // Si el producto ya está en el carrito, aumentar la cantidad en 1
      setCartItems(
        cartItems.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // Si el producto no está en el carrito, añadirlo con cantidad 1
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    // Encontrar el producto a eliminar
    const itemToRemove = cartItems.find((item) => item.product.id === productId);

    if (itemToRemove.quantity > 1) {
      // Si la cantidad es mayor que 1, reducir la cantidad en 1
      setCartItems(
        cartItems.map((item) =>
          item.product.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } else {
      // Si la cantidad es 1, eliminar el producto del carrito
      setCartItems(cartItems.filter((item) => item.product.id !== productId));
    }
  };

  return (
    <div className="app-container">
      <div className="cart-container">
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
      <div className="main-content">
        <TrendingTracks /><br /><br /><br />
        <Merchandising addToCart={addToCart} />
      </div>
    </div>
  );
}

export default App;

