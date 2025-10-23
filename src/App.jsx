import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import NavBar from './components/NavBar';
import DetalleProducto from './pages/DetalleProducto';
import Ofertas from './pages/Ofertas';
import Carrito from './components/Carrito';
import Inicio from './pages/Inicio'
import Footer from './components/Footer';
import { useState } from 'react';
import RutaProtegida from './components/RutaProtegida';
import Login from './pages/Login';



function App() {
  const [logueado, setLogueado]=useState(false)
  return (
    <>
      <Header />
      <NavBar />
        <Routes>
          
          <Route path="/" element={<Inicio />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/carrito" element={
                <RutaProtegida logueado={logueado}>
                  <Carrito/>
                </RutaProtegida>
                
            } />
          <Route path="/login" element={<Login />} />
         
          <Route path="/productos/:id" element={<DetalleProducto />} />


      
        </Routes>
      
      <Footer />
    </>
  );
}

export default App;
