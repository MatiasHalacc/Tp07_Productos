import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductoDetalle.css';

export default function ProductoDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [toastMsg, setToastMsg] = useState('');

  useEffect(() => {
    let minLoadTimer;
    let maxLoadTimer;

    setLoading(true);
    setProducto(null);

    const fetchProduct = axios.get('https://fakestoreapi.com/products/' + id);

    const minDelay = new Promise((resolve) => {
      minLoadTimer = setTimeout(resolve, 1500);
    });

    maxLoadTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    Promise.all([fetchProduct, minDelay])
      .then(([response]) => {
        setProducto(response.data);
        setLoading(false);
        clearTimeout(maxLoadTimer);
      })
      .catch(() => {
        console.log('error');
        setLoading(false);
        clearTimeout(maxLoadTimer);
      });

    return () => {
      clearTimeout(minLoadTimer);
      clearTimeout(maxLoadTimer);
    };
  }, [id]);

  const handleAddToCart = () => {
    if (quantity < 1) return;
    addToCart(producto, quantity);
    setToastMsg(`Se agregaron ${quantity} unidad(es) al carrito`);
    setTimeout(() => setToastMsg(''), 2500);
  };

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
        <p>Cargando producto...</p>
      </div>
    );
  }

  if (!producto) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div className="detalle-producto-container">
      {toastMsg && <div className="toast">{toastMsg}</div>}

      <img
        src={producto.image}
        alt={producto.title}
        className="detalle-producto-imagen"
      />

      <div className="detalle-producto-info">
        <h2 className="detalle-producto-nombre">{producto.title}</h2>

        <p className="detalle-producto-descripcion">{producto.description}</p>

        <div className="detalle-producto-precio">${producto.price}</div>

        <label className="cantidad-label" htmlFor="cantidadInput">
          Cantidad:
        </label>
        <input
          id="cantidadInput"
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
          className="cantidad-input"
        />

        <button className="detalle-producto-btn" onClick={handleAddToCart}>
          Añadir al carrito
        </button>

        <button
          className="detalle-producto-btn detalle-producto-btn-volver"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>
    </div>
  );
}
