import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const UserContext = createContext({});

export function UsercontextProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    axios.get('/profile').then(response => {
        setUser(response.data);
    });
  
  
  }, []);
  

  return (
    <UserContext.Provider value={{ login, logout, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
