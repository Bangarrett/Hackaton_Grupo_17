import React from 'react';
import './App.css';
import TrendingTracks from './components/Carrousel/Carrousel';
import Merchandising from './components/card-item/Merchandising';
import Cart from './components/card-item/Cart';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Notification from './components/notification/Notification';
import FormModal from './components/form-modal/FormModal'

function App({ cartItems, addToCart, removeFromCart }) {
  return (
    
   
    <div className="app-container">
      <div className="main-content">
        <Navbar />
        <Notification/>
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
