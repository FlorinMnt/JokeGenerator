// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../Context/AuthContext";

// const ProtectedRoute = ({ children }) => {
//   const { isAuthenticated } = useAuth();

//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

// export default ProtectedRoute;
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  // Dacă utilizatorul nu este autentificat, redirecționează la login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Permite accesul la copii dacă este autentificat
  return children;
};

export default ProtectedRoute;
