// ItemDetailContainer.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const ItemDetailContainer = ({ addToCart }) => {
  const location = useLocation();
  const product = location.state ? location.state.product : null;

  if (!product) {
    return <div>No se encontró el producto</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-detail-info">
        <h1>{product.name}</h1>
        <p>Color: {product.color}</p>
        <p>
          <span className="original-price">{product.originalPrice}</span>
          <span className="discounted-price">{product.discountedPrice}</span>
        </p>
        <p>{product.description}</p>
        <button onClick={() => addToCart(product)}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetailContainer;