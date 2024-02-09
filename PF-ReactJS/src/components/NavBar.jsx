// NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './CartWidget';

const Nav = ({ itemCount, cart, removeFromCart }) => {
  const animals = ['Perros', 'Gatos', 'Reptiles'];

  return (
    <nav className="nav">
      <div className="nav-left">
        <h1><Link to="/">Tienda de Mascotas</Link></h1>
      </div>
      <div className="nav-center">
        <ul>
          {animals.map((animal, index) => (
            <li key={index}>
              <Link to={`/categoria-producto/${animal.toLowerCase()}`}>{animal}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav-right">
        <Cart itemCount={itemCount} cart={cart} removeFromCart={removeFromCart} />
      </div>
    </nav>
  );
};

export default Nav;