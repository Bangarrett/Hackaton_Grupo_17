import React, { useState } from 'react';
import './App.css';
import TrendingTracks from './components/Carrousel';
import Merchandising from './components/card-item/Merchandising';
import Cart from './components/card-item/Cart';


function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="app-container">
      <div className="cart-container">
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
      <div className="main-content">
        <TrendingTracks />
      </div> <br /><br />
      <div className='merchandising-container'>
      <Merchandising addToCart={addToCart} />
      </div>
    </div>
  );
}

export default App;
