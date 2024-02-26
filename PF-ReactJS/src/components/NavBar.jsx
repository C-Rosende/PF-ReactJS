// NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './CartWidget';

const Nav = ({ itemCount, cart, removeFromCart, categories }) => {
  return (
    <nav className="nav">
      <div className="nav-left">
        <h1><Link to="/">Tienda de Mascotas</Link></h1>
      </div>
      <div className="nav-center">
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <Link to={`/categoria-producto/${category.id}`}>{category.name}</Link>
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