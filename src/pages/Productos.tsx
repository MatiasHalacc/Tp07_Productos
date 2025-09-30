import React, { useEffect, useState } from 'react'
import Producto from '../components/Producto'
import './Productos.css'
import axios from 'axios'

export default function Productos() {
  const categorias = [
    { label: "Todas", value: null },
    { label: "Electronica", value: "electronics" },
    { label: "Joyeria", value: "jewelery" },
    { label: "Ropa de hombre", value: "men's clothing" },
    { label: "Ropa de mujer", value: "women's clothing" }
  ];

  const [listado, setListado] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = (categoriaValue) => {
    setLoading(true);
    let url = "https://fakestoreapi.com/products";

    if (categoriaValue) {
      url = `https://fakestoreapi.com/products/category/${encodeURIComponent(categoriaValue)}`;
    }

    axios
      .get(url)
      .then((res) => {
        setListado(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts(null);
  }, []);

  const handleCategoriaClick = (categoriaValue) => {
    fetchProducts(categoriaValue);
  };

  return (
    <>
      <div className="categorias-bar">
        {categorias.map((aux, i) => (
          <button
            key={i}
            className="categoria-btn"
            onClick={() => handleCategoriaClick(aux.value)}
          >
            {aux.label}
          </button>
        ))}
      </div>
      <div className="product-grid">
        {loading && <p>Cargando productos...</p>}
        {!loading && listado.length === 0 && <p>No hay productos para mostrar.</p>}
        {!loading && listado.map((prod, index) => (
          <Producto key={index} product={prod} />
        ))}
      </div>
    </>
  )
}
