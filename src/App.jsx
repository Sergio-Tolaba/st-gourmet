 import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import DetalleProducto from './pages/DetalleProducto';
import Ofertas from './pages/Ofertas';
import Carrito from './components/Carrito';
import Inicio from './pages/Inicio';
import Footer from './components/Footer';
import { useState } from 'react';
import RutaProtegida from './components/RutaProtegida';
import Login from './pages/Login';
import Admin from './components/Admin';
import { AuthProvider } from './context/AuthContext'

function App() {
  
  return (
    <>
      <Header />
    
      
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/ofertas" element={<Ofertas />} />
        {/* <Route path="/login" element={<Login setLogueado={setLogueado} />} /> */}
        <Route path="/login" element={<Login />} />
        <Route
          path="/carrito"
          element={
            // <RutaProtegida logueado={logueado}>
            <RutaProtegida>
              <Carrito />
            </RutaProtegida>
          }
          />
        <Route path='/admin' element={<Admin/>} >
        </Route>
              
        
        


        <Route path="/productos/:id" element={<DetalleProducto />} />
        <Route
          path="*"
          element={
            <div>
              Ruta no definida, error: 404 <br />
              Por favor ingrese URL válido
            </div>
          }
        />
      </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
