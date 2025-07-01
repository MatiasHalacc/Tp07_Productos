import axios from 'axios';
import React, { useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductoDetalle.css';

export default function ProductoDetalle({producto, loading, setproducto, setLoading}) {
  
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let minLoadTimer;
    let maxLoadTimer;

    setLoading(true);
    setproducto(null);


    const fetchProduct = axios.get('https://fakestoreapi.com/products/' + id);

 
    const minDelay = new Promise(resolve => {
      minLoadTimer = setTimeout(resolve, 1500);
    });

  
    maxLoadTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    Promise.all([fetchProduct, minDelay])
      .then(([response]) => {
        setproducto(response.data);
        setLoading(false);
        clearTimeout(maxLoadTimer);
      })
      .catch(() => {
        console.log("error");
        setLoading(false);
        clearTimeout(maxLoadTimer);
      });

    return () => {
      clearTimeout(minLoadTimer);
      clearTimeout(maxLoadTimer);
    };
  }, [id]);

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
      <img
        src={producto.image}
        alt={producto.title}
        className="detalle-producto-imagen"
      />

      <div className="detalle-producto-info">
        <h2 className="detalle-producto-nombre">{producto.title}</h2>

        <p className="detalle-producto-descripcion">
          {producto.description}
        </p>

        <div className="detalle-producto-precio">
          ${producto.price}
        </div>

        <button
          className="detalle-producto-btn detalle-producto-btn-volver"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>

        <button className="detalle-producto-btn">
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}


  

    