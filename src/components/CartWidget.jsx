// src/components/CartWidget.jsx
import React, { useState, useRef, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./CartWidget.css";

export default function CartWidget() {
  const {
    cartProducts,
    removeFromCart,
    clearCart,
    getTotal,
    incrementQuantity,
    decrementQuantity,
  } = useCart();

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="cart-widget" ref={ref}>
      <button
        className="cart-button"
        onClick={() => setOpen(!open)}
        aria-label="Abrir carrito"
      >
        🛒 {cartProducts.length}
      </button>

      {open && (
        <div className="cart-dropdown">
          {cartProducts.length === 0 ? (
            <p className="empty-msg">Tu carrito está vacío</p>
          ) : (
            <>
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
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Eliminar ${item.title}`}
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>

              <div className="cart-footer">
                <p className="total">Total: ${getTotal().toFixed(2)}</p>
                <div className="buttons">
                  <button className="clear-btn" onClick={clearCart}>
                    Vaciar carrito
                  </button>
                  <button
                    className="checkout-btn"
                    onClick={() => {
                      setOpen(false);
                      navigate("/carrito");
                    }}
                  >
                    Ir a pagar
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
