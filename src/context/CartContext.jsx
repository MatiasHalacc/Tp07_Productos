import { createContext, useContext, useEffect, useState } from "react";

const CarritoContext = createContext();

export const useCarrito = () => useContext(CarritoContext);

export function CartProvider({ children }) {
  const [productosCarrito, setProductosCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem("carrito");
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(productosCarrito));
  }, [productosCarrito]);

  const agregarAlCarrito = (producto) => {
    setProductosCarrito((prev) => {
      const existente = prev.find((item) => item.id === producto.id);
      if (existente) {
        return prev.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
  };

  const eliminarDelCarrito = (idProducto) => {
    setProductosCarrito((prev) => prev.filter((item) => item.id !== idProducto));
  };

  const vaciarCarrito = () => setProductosCarrito([]);

  const obtenerTotal = () =>
    productosCarrito.reduce((total, item) => total + item.precio * item.cantidad, 0);

  return (
    <CarritoContext.Provider
      value={{
        productosCarrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito,
        obtenerTotal,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}
