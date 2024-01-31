// NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './CartWidget';

const Nav = () => {
  const categories = ['Perros', 'Gatos', 'Aves']; // Reemplaza esto con tus categorías

  return (
    <nav className="nav">
      <h1><Link to="/">Tienda de Mascotas</Link></h1>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
      <Cart />
    </nav>
  );
};

export default Nav;