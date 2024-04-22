import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const CartContext = createContext({});

export function CartcontextProvider({ children }) {
  const [Cart, setCart] = useState(null);


  useEffect(() => {
    axios.get('/getcart').then(response => {
        setCart(response.data);
    }); 
  }, []);
  return (
    <CartContext.Provider value={{ login, logout, Cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
