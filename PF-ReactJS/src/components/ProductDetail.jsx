// ProductDetail.jsx
import { useLocation } from 'react-router-dom';
import ItemQuantitySelector from './ItemQuantitySelector';
import '../App.css';

function ProductDetail({ addToCart }) {
  const location = useLocation();
  const product = location.state ? location.state.product : null;

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="product-detail-container">
      <img className="product-detail-image" src={product.imagen} alt={product.nombre} />
      <div className="product-detail-info">
        <h1>{product.nombre}</h1>
        <p>{product.tipoProducto}</p>
        <p>
          <span className="original-price">{product.originalPrice}</span>
          <span className="discounted-price">{product.discountedPrice}</span>
        </p>
        <p>{product.descripcion}</p>
        <ItemQuantitySelector onQuantityChange={(quantity) => addToCart(product, quantity)} />
      </div>
    </div>
  );
}

export default ProductDetail;