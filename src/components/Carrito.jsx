import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import './Carrito.css';
import {CarritoContext} from '../context/CarritoContext'
const Carrito = () => {
  //Uso del Contexto
  const { usuario } = useAuthContext();
  const {carrito,eliminarProducto,vaciarCarrito }=useContext(CarritoContext)
  const total = carrito.reduce((acc, item) => acc + item.precio * (item.cantidad || 1), 0);
  return (
    <div className="carrito-container">
      <h2>🛒 Tu Carrito</h2>
          <p>Usuario: {usuario}</p>
      
          <button onClick={vaciarCarrito} className='btn-vaciar' >Vaciar carrito</button>
          <button className='btn-pagar' >Ir a pagar</button>

      {(!carrito || carrito.length === 0) ? (
        <p className="carrito-vacio">El carrito está vacío.</p>
      ) : (
        <ul className="carrito-lista">
          {carrito.map((item, index) => (
            <li key={index} className="carrito-item">
              <img src={item.imagen} alt={item.nombre} />
              <div className="info">
                <h4>{item.nombre}</h4>
                <p>Precio: ${item.precio}</p>
                <p>Cantidad: {item.cantidad || 1}</p>

                
                <p>Subtotal: ${item.precio * (item.cantidad || 1)}</p>

              </div>
              <button className="btn-eliminar" onClick={() => eliminarProducto(index)}>
                Eliminar
              </button>

            </li>
          ))}
        </ul>
      )}
      {carrito.length > 0 && (
        <h3>Total: ${total}</h3>
      )}
    </div>
  );
};

export default Carrito;

