import React from 'react';
import './Carrito.css';

const Carrito = ({ carrito, onEliminar }) => {
  return (
    <div className="carrito-container">
      <h2>🛒 Tu Carrito</h2>

      {(!carrito || carrito.length === 0) ? (
        <p className="carrito-vacio">El carrito está vacío.</p>
      ) : (
        <ul className="carrito-lista">
          {carrito.map((item, index) => (
            <li key={index} className="carrito-item">
              <img src={item.imagen} alt={item.nombre} />
              <div className="info">
                <h4>{item.nombre}</h4>
                <p>${item.precio}</p>
              </div>
              <button className="btn-eliminar" onClick={() => onEliminar(index)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Carrito;
