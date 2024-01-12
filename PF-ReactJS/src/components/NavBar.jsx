import React from 'react';
import Cart from './CartWidget';

const Nav = () => {
  const categories = ['Perros', 'Gatos', 'Aves']; // Reemplaza esto con tus categorías

  return (
    <nav>
      <h1>Tienda de Mascotas</h1>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <a href="#">{category}</a>
          </li>
        ))}
      </ul>
      <Cart />
    </nav>
  );
};

export default Nav;
