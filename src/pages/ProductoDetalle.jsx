import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './ProductoDetalle.css'
export default function ProductoDetalle() {
  const [producto,setproducto] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/' +id)
    .then(function (response) {
      setproducto(response.data);
    })
    .catch(function () {
      console.log("error")
    }); 
  }, [id])

  if (!producto) {
    return <p>Cargando producto...</p>;
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

        <button className="detalle-producto-btn">
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}





  

    