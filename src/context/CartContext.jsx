import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const [Cart, setCart] = useState([]);

  const sendCartToServer = async () => {
    try {
      await axios.post("/cartcookie", { Cart }); // Send Cart data in the request body
    } catch (error) {
      console.log("Could not send cart data:", error);
    }
  };
  useEffect(() => {
    axios.get('/profile')
      .then(response => {
        if (response.data.Cart) {
          setCart(response.data.Cart);
        }
      })
      .catch(error => {
        console.log("Error fetching cart data:", error);
      });
  }, []);

  useEffect(() => {
    sendCartToServer();
  }, [Cart]);

  const addcart = (id, productinfo) => {
    const existingProduct = Cart.find((item) => item.id === id);
    if (existingProduct) {
      console.log("already exists");
    } else {
      setCart([...Cart, { ...productinfo, quantity: 1 }]);
    }
  };

  const removecart = (id) => {
    const productIndex = Cart.findIndex((item) => item.id === id);
    if (productIndex !== -1) {
      const updatedCart = [...Cart];
      updatedCart.splice(productIndex, 1);
      setCart(updatedCart);
      console.log("removing");
    }
  };

  const incrementquantity = (id) => {
    const productIndex = Cart.findIndex((item) => item.id === id);
    if (productIndex !== -1) {
      const updatedCart = [...Cart];
      updatedCart[productIndex].quantity += 1;
      setCart(updatedCart);
    }
  };

  const decrementquantity = (id) => {
    const productIndex = Cart.findIndex((item) => item.id === id);
    if (productIndex !== -1) {
      const updatedCart = [...Cart];
      if (updatedCart[productIndex].quantity > 1) {
        updatedCart[productIndex].quantity -= 1;
        setCart(updatedCart);
      } else {
        removecart(id);
      }
    }
  };
  const sendcookie=async()=>{
    try {
        await axios.post(`/cart`, Cart);
    } catch (error) {
        console.log("Could not register", error);
    }
  };
  

  return (
    <CartContext.Provider
      value={{
        setCart,
        Cart,
        addcart,
        removecart,
        incrementquantity,
        decrementquantity,
        sendcookie
      }}
    >
      {children}
    </CartContext.Provider>
  );
}