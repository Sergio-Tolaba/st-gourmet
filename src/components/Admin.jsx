// src/pages/Admin.jsx
import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import FormProducto from './FormProducto';

const Admin = ()=> {
  const { usuario } = useAuthContext();
  if (usuario !== 'admin') return <Navigate to="/" replace />;
  const API = 'https://68dd7da4d7b591b4b78c9f2f.mockapi.io/productos';
  const agregarProducto = async(producto)=>{
    try {
      console.log('Enviando producto:', producto)
      const resp = await fetch(API,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto)
      })
      if(!resp.ok)throw new Error("Error al agregar el producto")
      const dato = await resp.json()
    console.log('Producto creado(respuesta):', dato)
      alert("Producto agregado correctamente") 
      
    } catch (error) {
      console.log(error.message)
      SpeechRecognitionAlternative("Hubo un problema al agregar el producto")
      
    }
  }

  return (
    <main style={{ padding: 16 }}>
      <h2>Panel Admin</h2>
      <p>Bienvenido, {usuario}</p>
      <h3>Gestion de productos</h3>
        <FormProducto onAgregar={agregarProducto} />
      <button>Ver pedidos</button>
      
    </main>
  );
}

export default Admin
