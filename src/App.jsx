import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import DetalleProducto from './pages/DetalleProducto';
import Ofertas from './pages/Ofertas';
import CarritoAviso from './pages/CarritoAviso';


function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Routes>
          {/* Inicio ahora es la página principal */}
          <Route path="/" element={<Inicio />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/carrito" element={<CarritoAviso />} />
         
          <Route path="/productos/:id" element={<DetalleProducto />} />


      
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
