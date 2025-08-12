import React from 'react'
import { useCart } from '../context/CartContext'
import './Carrito.css'

export default function Carrito() {
  const { cartProducts, removeFromCart, clearCart, getTotal } = useCart();

  return (
    <div className="carrito-container">
      <h2>Mi Carrito</h2>
      {cartProducts.length === 0 ? (
        <p>No tienes productos en el carrito.</p>
      ) : (
        <>
          <ul>
            {cartProducts.map((item) => (
              <li key={item.id} className="carrito-item">
                <img src={item.image} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio: ${(item.price * item.quantity).toFixed(2)}</p>
                  <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="carrito-total">
            <h3>Total: ${getTotal().toFixed(2)}</h3>
            <button className="clear-btn" onClick={clearCart}>Vaciar Carrito</button>
          </div>
        </>
      )}
    </div>
  )
}
