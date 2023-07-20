import React from 'react';
import './App.css';
import TrendingTracks from './components/Carrousel/Carrousel';
import Merchandising from './components/card-item/Merchandising';
import Cart from './components/card-item/Cart';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FormModal from './components/FormModal.jsx';

function App({ cartItems, addToCart, removeFromCart }) {
  return (
    
   
    <div className="app-container">
      <div className="main-content">
        <Navbar />
        <TrendingTracks /><br /><br /><br />
        <Merchandising addToCart={addToCart} />
      </div>
      <div className="cart-container">  
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <FormModal/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
