import React, { useState } from 'react';
import Productos from '../components/Productos';
import Carrito from '../components/Carrito';
import './Inicio.css';

const Inicio = () => {
  // estado global del carrito aquí
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto) => {
    // permite duplicados
    setCarrito((prev) => [...prev, producto]);
  };

  const eliminarProducto = (index) => {
    setCarrito((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="inicio-page">
      {/* Texto que no se estaba viendo porque Inicio no estaba montado */}
      <header className="inicio-header">
        <h2>Los platos deliciosos son St Gourmet</h2>
        <p>Explora nuestras recetas de estrella Michelin y reserva tu pedido</p>
      </header>

      <section className="productos-section">
        {/* Aquí pasamos la función onAgregar para que Productos pueda usarla */}
        <Productos onAgregar={agregarProducto} />
      </section>

      <hr />

      <section className="carrito-section">
        {/* Carrito se muestra solo aquí */}
        <Carrito carrito={carrito} onEliminar={eliminarProducto} />
      </section>
    </div>
  );
};

export default Inicio;
