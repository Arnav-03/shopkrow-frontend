import React, { createContext, useState, useEffect, useContext } from "react";
import axios from 'axios';

export const CheckoutContext = createContext({});

export function CheckoutContextProvider({ children }) {

    const [status, setstatus] = useState(1);

    const loginstatus = () => {
      setstatus(2)
    };
    const addressstatus = () => {
      setstatus(3)
    };
    const orderstatus = () => {
      setstatus(4)
    };
 
  
    return (
      <CheckoutContext.Provider
        value={{
        status,
        setstatus,
        loginstatus,
        addressstatus,
        orderstatus
        }}
      >
        {children}
      </CheckoutContext.Provider>
    );
  }