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

  const checkLogin = async () => {
    try {
      const response = await axios.get('/profile');
      return response.data !== null ? 1 : 2;
    } catch (error) {
      console.error('Error checking login:', error);
      return 2;
    }
  };

  return (
    <UserContext.Provider value={{ login, logout, user, setUser, checkLogin }}>
      {children}
    </UserContext.Provider>
  );
}
