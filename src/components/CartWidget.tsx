import React, { useState, useRef, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import CartList from "./CartList";
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
  const [message, setMessage] = useState("");
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

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  const handleIncrement = (id) => {
    incrementQuantity(id);
    showMessage("Producto agregado correctamente");
  };

  const handleDecrement = (id) => {
    decrementQuantity(id);
    showMessage("Producto removido correctamente");
  };

  const handleRemove = (id, title) => {
    removeFromCart(id);
    showMessage(`Producto "${title}" eliminado correctamente`);
  };

  return (
    <div className="cart-widget" ref={ref}>
      <button
        className="cart-button"
        onClick={() => setOpen(!open)}
        aria-label="Abrir carrito"
      >
        🛒 {cartProducts.length}
      </button>

      {message && <div className="cart-message">{message}</div>}

      {open && (
        <div className="cart-dropdown">
          {cartProducts.length === 0 ? (
            <p className="empty-msg">Tu carrito está vacío</p>
          ) : (
            <>
              <CartList
                cartProducts={cartProducts}
                incrementQuantity={handleIncrement}
                decrementQuantity={handleDecrement}
                removeFromCart={handleRemove}
              />
              <div className="cart-footer">
                <p className="total">Total: ${getTotal().toFixed(2)}</p>
                <div className="buttons">
                  <button
                    className="clear-btn"
                    onClick={() => {
                      clearCart();
                      showMessage("Carrito vaciado correctamente");
                    }}
                  >
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
