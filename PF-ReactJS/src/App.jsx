// App.jsx
import './app.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ProductDetail from './components/ProductDetail';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(prevCart => prevCart.filter(product => product.id !== productToRemove.id));
  };

  return (
    <Router>
      <div className="App">
        <NavBar itemCount={cart.length} cart={cart} removeFromCart={removeFromCart} />
        <Routes>
          <Route path="/" element={<ItemListContainer addToCart={addToCart} />} />
          <Route path="/categoria-producto/:animal/:tipoProducto?" element={<ItemListContainer addToCart={addToCart} />} />
          <Route path="/item/:id" element={<ProductDetail addToCart={addToCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;