import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Cart = ({ itemCount, cart, removeFromCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const totalPrice = Object.values(cart).reduce((total, product) => total + product.quantity * product.price, 0);

  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} onClick={() => setIsOpen(!isOpen)} />
      <span className="item-count">{itemCount}</span>
      {isOpen && (
        <div className={`cart-dropdown ${isOpen ? 'open' : ''}`}>
          {Object.values(cart).map((product, index) => (
            <div key={index} className="cart-item">
              <img src={product.imagen} alt={product.nombre} />
              <div className="cart-item-info">
                <h3>{product.nombre}</h3>
                <p>{product.discountedPrice}</p>
                <p>Cantidad: {product.quantity}</p>
              </div>
              <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
            </div>
          ))}
          <div className="cart-total">
            <h4>Total: {totalPrice}</h4>
          </div>
          <div className="cart-buttons">
            <button onClick={() => navigate('/checkout')}>Ver carrito</button> {/*Enlace para Checkout...*/}
            <button>Continuar comprando</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;