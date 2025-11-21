// src/contexts/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  // Estado: usuario es null o { username, role, token }
  const [usuario, setUsuario] = useState(() => {
    try {
      const raw = localStorage.getItem('app_user');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  // Lista simple de usuarios persistida (en prod, usar backend)
  // formato: [{ username, password, role }]
  const loadUsers = () => {
    try {
      const raw = localStorage.getItem('app_users');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  };

  const saveUsers = (users) => {
    localStorage.setItem('app_users', JSON.stringify(users));
  };

  useEffect(() => {
    if (usuario) localStorage.setItem('app_user', JSON.stringify(usuario));
    else localStorage.removeItem('app_user');
  }, [usuario]);

  // Registro local (rol por defecto: "user")
  const registerUser = ({ username, password, role = 'user' }) => {
    const users = loadUsers();
    if (users.find((u) => u.username === username)) {
      return { ok: false, error: 'Usuario ya existe' };
    }
    const newUser = { username, password, role };
    users.push(newUser);
    saveUsers(users);
    return { ok: true, user: newUser };
  };

  // Login local: busca en la lista guardada en localStorage
  const login = ({ username, password }) => {
    const users = loadUsers();

    // Si no hay usuarios creados, dejamos credenciales de prueba
    if (users.length === 0) {
      // usuario admin de ejemplo
      const seed = [
        { username: 'admin', password: 'password123', role: 'admin' },
        { username: 'usuario', password: 'usuario123', role: 'user' },
      ];
      saveUsers(seed);
      // recargar la lista
      // eslint-disable-next-line no-shadow
      const usersReloaded = loadUsers();
      const found = usersReloaded.find((u) => u.username === username && u.password === password);
      if (!found) return { ok: false, error: 'Credenciales inválidas' };
      const token = `fake-token-${found.username}`;
      const u = { username: found.username, role: found.role, token };
      setUsuario(u);
      return { ok: true, user: u };
    }

    const found = users.find((u) => u.username === username && u.password === password);
    if (!found) return { ok: false, error: 'Credenciales inválidas' };

    const token = `fake-token-${found.username}`;
    const u = { username: found.username, role: found.role, token };
    setUsuario(u);
    return { ok: true, user: u };
  };

  const logout = () => {
    setUsuario(null);
    navigate('/login', { replace: true });
  };

  const isAdmin = () => usuario?.role === 'admin';

  return (
    <AuthContext.Provider value={{ usuario, registerUser, login, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
export default AuthContext;
