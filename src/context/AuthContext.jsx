// src/context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

// Create AuthContext
const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap the app and provide context
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User will be null if not logged in

  const login = (userData) => {
    setUser(userData);  // Set user data upon login
    localStorage.setItem('user', JSON.stringify(userData)); // Optionally store in localStorage
  };

  const logout = () => {
    setUser(null);  // Clear user data upon logout
    localStorage.removeItem('user'); // Remove user data from localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
