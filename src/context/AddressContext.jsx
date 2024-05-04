import React, { createContext, useState, useEffect } from "react";
export const AddressContext = createContext({});

export function AddresscontextProvider({ children }) {
  const [addresscontext, setAddress] = useState(null);

  const putaddressintocontext=(address)=>{
        setAddress(address)
  }

  return (
    <AddressContext.Provider value={{ addresscontext, putaddressintocontext}}>
      {children}
    </AddressContext.Provider>
  );
}
