// CartWidget.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ itemCount, cart, removeFromCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} onClick={() => setIsOpen(!isOpen)} />
      <span className="item-count">{itemCount}</span>
      {isOpen && (
        <div className="cart-dropdown">
          {cart.map((product, index) => (
            <div key={index} className="cart-item">
              <img src={product.image} alt={product.name} />
              <div className="cart-item-info">
                <h3>{product.name}</h3>
                <p>{product.discountedPrice}</p>
              </div>
              <button onClick={() => removeFromCart(product)}>Eliminar</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;