import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import producto1 from '../images/producto1.jpg'
import producto2 from '../images/producto2.jpg'
import producto3 from '../images/producto3.jpg'
import producto4 from '../images/producto4.jpg'
import producto5 from '../images/producto5.jpg'
import producto6 from '../images/producto6.jpg'
import producto7 from '../images/producto7.jpg'
import producto8 from '../images/producto8.jpg'

const ItemListContainer = ({ addToCart }) => {
  const { categoryId, tipoProducto } = useParams();
  const navigate = useNavigate();
  const [addedToCart, setAddedToCart] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const productsData = [
    { "id": "1", "nombre": "Arnés Ruffwear – Twilight Gray", "animal": "perros", "tipoProducto": "Accesorio", "originalPrice": "$59.990", "discountedPrice": "$47.990", "imagen": producto1 },
    { "id": "2", "nombre": "Collar de perro de cuero rústico 50 cm – Coastal", "animal": "perros", "tipoProducto": "Accesorios", "originalPrice": "$16.240", "discountedPrice": "$12.990", "imagen": producto2 },
    { "id": "3", "nombre": "Correa Retractil Flippy One 5M Negra", "animal": "perros", "tipoProducto": "Accesorios", "originalPrice": "$28.740", "discountedPrice": "$22.990", "imagen": producto3 },
    { "id": "4", "nombre": "Exo Terra Tortuga de tierra Juvenil 260g", "animal": "reptiles", "tipoProducto": "Alimentos", "originalPrice": "$15.990", "discountedPrice": "$11.990", "imagen": producto4 },
    { "id": "5", "nombre": "Churu Atún y Pollo – 4 UND", "animal": "gatos", "tipoProducto": "Alimentos", "originalPrice": "$3.110", "discountedPrice": "$1.560", "imagen": producto5 },
    { "id": "6", "nombre": "Spot Cat Toy Catnip con sonido de aves Amarillo", "animal": "gatos", "tipoProducto": "Juguetes", "originalPrice": "$11.240", "discountedPrice": "$8.990", "imagen": producto6 },
    { "id": "7", "nombre": "Exo Terra Calavera de Cocodrilo", "animal": "reptiles", "tipoProducto": "Decoración", "originalPrice": "$25.990", "discountedPrice": "$13.490", "imagen": producto7 },
    { "id": "8", "nombre": "Exo Terra Kit Terrario Tropical", "animal": "reptiles", "tipoProducto": "Habitat", "originalPrice": "$219.990", "discountedPrice": "$199.990", "imagen": producto8 }
  ];  

  const filteredProducts = productsData.filter(product => {
    return (!categoryId || product.animal === categoryId) &&
           (!tipoProducto || product.tipoProducto.toLowerCase() === tipoProducto);
  });

  const handleAddToCart = (product) => {
    setAddedToCart(prevCart => {
      const newCart = [...prevCart, product];
      return newCart;
    });
  };

  const handleProductClick = (product) => {
    navigate(`/item/${product.id}`, { state: { product } });
  };

  return (
    <>
      <div className="products-container">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
            <div className="product-image">
              <img src={product.imagen} alt={product.nombre} />
            </div>
            <h3><Link to={{ pathname: `/item/${product.id}`, state: { product } }}>{product.nombre}</Link></h3>
            <p>{product.tipoProducto}</p>
            <p>
              <span className="original-price">{product.originalPrice}</span>
              <span className="discountedPrice">{product.discountedPrice}</span>
            </p>
            <button onClick={() => handleAddToCart(product)}>Agregar al carrito</button>
            {addedToCart[product.id] && <p>Producto agregado al carrito</p>}
          </div>
        ))}
      </div>
      {selectedProduct && <ProductDetail product={selectedProduct} />}
    </>
  );
};

export default ItemListContainer;