import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext<any>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);

export default function CartProvider({ children }:any) {
  const [cartProducts, setCartProducts] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }, [cartProducts]);

  const addToCart = (product:any, quantity = 1) => {
    setCartProducts((prev:any) => {
      const existing = prev.find((item:any) => item.id === product.id);
      if (existing) {
        return prev.map((item:any) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId:any) => {
    setCartProducts((prev:any) => prev.filter((item:any) => item.id !== productId));
  };

  const clearCart = () => setCartProducts([]);

  const getTotal = () =>
    cartProducts.reduce((total:any, item:any) => total + item.price * item.quantity, 0);

  const incrementQuantity = (productId:any) => {
    setCartProducts((prev:any) =>
      prev.map((item:any) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId:any) => {
    setCartProducts((prev:any) =>
      prev.map((item:any) =>
        item.id === productId
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addToCart,
        removeFromCart,
        clearCart,
        getTotal,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
