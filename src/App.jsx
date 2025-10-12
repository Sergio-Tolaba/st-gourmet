import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import DetalleProducto from './pages/DetalleProducto';


function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Routes>
          {/* Inicio ahora es la página principal */}
          <Route path="/" element={<Inicio />} />

          {/* Ruta dinámica para detalle - debe coincidir con los Link en Productos */}
          <Route path="/productos/:id" element={<DetalleProducto />} />

          {/* (opcional) ruta alternativa */}
          {/* <Route path="/productos" element={<SomePage />} /> */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
