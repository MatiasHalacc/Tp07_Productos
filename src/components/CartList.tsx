import React from 'react';
import './CartList.css';
import { cartItemShape, productShape } from "../propshape/propShapes"; 



type CartList = {
  cartProducts: cartItemShape[];
  incrementQuantity: (productId: string | number) => void;
  decrementQuantity: (productId: string | number) => void;
  removeFromCart: (productId: string | number) => void;
  showRemoveBtn?: boolean;
};


export default function CartList({
  cartProducts,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  showRemoveBtn = true,
}: CartList) {
  return (
    <ul className="cart-list">
      {cartProducts.map((item) => (
        <li key={item.product.id} className="cart-item">
          <img src={item.product.image} alt={item.product.title} />
          <div className="item-info">
            <p className="item-title">{item.product.title}</p>
            <div className="quantity-controls">
              <button onClick={() => decrementQuantity(item.product.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => incrementQuantity(item.product.id)}>+</button>
            </div>
            <p>Precio: ${(item.product.price * item.quantity).toFixed(2)}</p>
          </div>
          {showRemoveBtn && (
            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.product.id)}
              aria-label={`Eliminar ${item.product.title}`}
            >
              ×
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}



