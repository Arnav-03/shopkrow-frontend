import React, { createContext, useState, useEffect } from "react";
export const OrderContext = createContext({});

export function OrdercontextProvider({ children }) {
  const [Order, setOrder] = useState(null);
  const [amount, setamount] = useState(0)

  const finalorder=(order)=>{
        setOrder(order)
        setTimeout(() => {
            console.log(Order)
        }, 1000);
  }

  return (
    <OrderContext.Provider value={{setamount,Order, finalorder}}>
      {children}
    </OrderContext.Provider>
  );
}
