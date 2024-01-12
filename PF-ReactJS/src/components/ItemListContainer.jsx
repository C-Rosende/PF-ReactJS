import React from 'react';

const ItemListContainer = ({ greeting }) => {
  const products = [
    { name: 'Arnes', color: 'Rojo', price: '39.990' },
    { name: 'Collar', color: 'Rosa', price: '19.990' },
    { name: 'Correa', color: 'Azul', price: '9.990' },
  ];

  return (
    <div>
      <h2>{greeting}</h2>
      {products.map((product, index) => (
        <div key={index}>
          <img src={`imagen${index + 1}.jpg`} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Color: {product.color}</p>
          <p>Precio: {product.price}</p>
          <button>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
