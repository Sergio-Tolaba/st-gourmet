import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import NavBar from './components/NavBar';
import DetalleProducto from './pages/DetalleProducto';
import Ofertas from './pages/Ofertas';
import CarritoAviso from './pages/CarritoAviso';
import Inicio from './pages/Inicio'


function App() {
  return (
    <>
      <Header />
      <NavBar />
        <Routes>
          {/* Inicio ahora es la página principal */}
          <Route path="/" element={<Inicio />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/carrito" element={<CarritoAviso />} />
         
          <Route path="/productos/:id" element={<DetalleProducto />} />


      
        </Routes>
      
      <Footer />
    </>
  );
}

export default App;
