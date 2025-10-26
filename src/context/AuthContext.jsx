import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();
export const AuthProvider = ({ children })=> {
  const [usuario, setUsuario] = useState(null);
//En produccion usaremos back-end con JWT o Auth 2.0 o OpenID Connect (OIDC).
  const login = (usuarioNombre) => {
    const token = `fake-token-${usuarioNombre}`;
    localStorage.setItem('authToken', token);
    setUsuario(usuarioNombre );
  };
  const logout = () => {
    localStorage.removeItem('authToken');
    setUsuario(null);
  };
  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider> );
}
export const useAuthContext = () => useContext(AuthContext);
