// ItemListContainer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import producto1 from '../images/producto1.jpg';
import producto2 from '../images/producto2.jpg';
import producto3 from '../images/producto3.jpg';
//import producto4 from '../images/producto4.jpg';

const ItemListContainer = ({ greeting }) => {
  const products = [
    { id: '1', name: 'Arnes', color: 'Rojo', originalPrice: '49.990', discountedPrice: '39.990', image: producto1 },
    { id: '2', name: 'Collar', color: 'Rosa', originalPrice: '24.990', discountedPrice: '19.990', image: producto2 },
    { id: '3', name: 'Correa', color: 'Azul', originalPrice: '12.990', discountedPrice: '9.990', image: producto3 },
  //{ id: '4', name: 'Alimento para Tortuga', color: 'Verde', originalPrice: '16.990', discountedPrice: '12.990', image: producto4 },
  ];

  return (
    <div className="products-container">
      <h2>{greeting}</h2>
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3><Link to={`/item/${product.id}`}>{product.name}</Link></h3>
          <p>Color: {product.color}</p>
          <p>
            <span className="original-price">{product.originalPrice}</span>
            <span className="discounted-price">{product.discountedPrice}</span>
          </p>
          <button>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;