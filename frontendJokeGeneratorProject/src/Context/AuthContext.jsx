// import React, { createContext, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   const login = () => {
//     setIsAuthenticated(true);
//     navigate("/home"); // Redirect către pagina Home după login
//     // navigate("/jokes_list"); 
//     // navigate("/joke"); 
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//     navigate("/login"); // Redirect către pagina Login după logout
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Creăm contextul de autentificare
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // La încărcarea aplicației, verificăm dacă utilizatorul este deja logat (din localStorage)
  useEffect(() => {
    const storedAuthStatus = localStorage.getItem('isAuthenticated');
    if (storedAuthStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/home'); // După logare, navighează către Home
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    navigate('/login'); // După logout, navighează către Login
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook pentru a folosi contextul în aplicație
export const useAuth = () => useContext(AuthContext);
