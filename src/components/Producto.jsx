import { useNavigate } from 'react-router';
import './producto.css';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import PropTypes from "prop-types";
import { productShape } from "../propshape/propshapes";

export default function Producto({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [toastVisible, setToastVisible] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2500);
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2 className="product-item">{product.title}</h2>
      <div className="product-price">{product.price}$</div>

      <button onClick={() => navigate('/ProductoDetalle/' + product.id)}>
        Ver más
      </button>

      <div className="add-cart-container">
        <button className="add-cart" onClick={handleAddToCart}>
          Añadir al carrito
        </button>
        {toastVisible && <div className="toast-message">Producto agregado al carrito</div>}
      </div>
    </div>
  );
}

Producto.propTypes = {
  product: productShape.isRequired,
};