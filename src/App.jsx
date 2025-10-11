import './App.css';

import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio'
import Productos from './pages/Productos';
import DetalleProducto from './pages/DetalleProducto';

function App() {

  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:id" element={<DetalleProducto />} />
        </Routes>
      </main>
      <Footer />
      

    </>
  );
}

export default App;
