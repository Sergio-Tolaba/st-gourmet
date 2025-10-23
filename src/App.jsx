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

function App() {
  const [logueado, setLogueado] = useState(false);
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/login" element={<Login setLogueado={setLogueado} />} />
        <Route
          path="/carrito"
          element={
            <RutaProtegida logueado={logueado}>
              <Carrito />
            </RutaProtegida>
          }
        />
        
        


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

      <Footer />
    </>
  );
}

export default App;
