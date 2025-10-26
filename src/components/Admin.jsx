// src/pages/Admin.jsx
import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const Admin = ()=> {
  const { usuario } = useAuthContext();
  if (usuario !== 'admin') return <Navigate to="/" replace />;

  return (
    <main style={{ padding: 16 }}>
      <h2>Panel Admin</h2>
      <p>Bienvenido, {usuario}</p>
      
      <button>Ver pedidos</button>
      <button>Gestionar productos</button>
    </main>
  );
}

export default Admin
