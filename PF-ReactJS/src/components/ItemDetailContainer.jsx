// ItemDetailContainer.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams(); // Esto obtiene el ID del producto de la URL

  // Aquí puedes usar el ID para obtener los detalles del producto de tus datos

  return (
    <div>
      <h1>Detalles del producto {id}</h1>
      {/* Aquí puedes renderizar los detalles del producto */}
    </div>
  );
};

export default ItemDetailContainer;