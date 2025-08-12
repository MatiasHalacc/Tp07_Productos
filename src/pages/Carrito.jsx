import React from "react";
import { useCart } from "../context/CartContext";
import CartList from "../components/CartList";
import "./Carrito.css";

export default function Carrito() {
  const {
    cartProducts,
    removeFromCart,
    clearCart,
    getTotal,
    incrementQuantity,
    decrementQuantity,
  } = useCart();

  return (
    <div className="carrito-container">
      <h2>Mi Carrito</h2>
      {cartProducts.length === 0 ? (
        <p>No tienes productos en el carrito.</p>
      ) : (
        <>
          <CartList
            cartProducts={cartProducts}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            removeFromCart={removeFromCart}
          />
          <div className="carrito-total">
            <h3>Total: ${getTotal().toFixed(2)}</h3>
            <button className="clear-btn" onClick={clearCart}>
              Vaciar Carrito
            </button>
          </div>
        </>
      )}
    </div>
  );
}
