// UserContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Create the context
const UserContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLoggedIn: false,
    role: null, // e.g., "investor" or "startup"
    name: "",
    email: "",
    // Add any other fields you need
  });

  const login = (userData) => {
    setUser({ ...userData, isLoggedIn: true });
  };

  const logout = () => {
    setUser({ isLoggedIn: false, role: null, name: "", email: "" });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for easy access to the context
export const useUser = () => {
  return useContext(UserContext);
};
