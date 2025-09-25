import React from 'react';
import './CartList.css';
import PropTypes from "prop-types";
import { cartItemShape } from "../propshape/propshapes"; 

export default function CartList({
  cartProducts,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  showRemoveBtn = true,
}) {
  return (
    <ul className="cart-list">
      {cartProducts.map((item) => (
        <li key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div className="item-info">
            <p className="item-title">{item.title}</p>
            <div className="quantity-controls">
              <button onClick={() => decrementQuantity(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => incrementQuantity(item.id)}>+</button>
            </div>
            <p>Precio: ${(item.price * item.quantity).toFixed(2)}</p>
          </div>
          {showRemoveBtn && (
            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
              aria-label={`Eliminar ${item.title}`}
            >
              ×
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

CartList.propTypes = {
  cartProducts: PropTypes.arrayOf(cartItemShape).isRequired,
  incrementQuantity: PropTypes.func.isRequired,
  decrementQuantity: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

