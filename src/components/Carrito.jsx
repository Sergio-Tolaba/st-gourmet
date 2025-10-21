import { Link } from 'react-router-dom';
//import './CarritoAviso.css'
import { useContext } from 'react';
import './Carrito.css';
import {CarritoContext} from '../context/CarritoContext'
const Carrito = () => {
  //Uso del Contexto
  const {carrito,eliminarProducto}=useContext(CarritoContext)
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
              <button className="btn-eliminar" onClick={() => eliminarProducto(index)}>
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

/* const CarritoAviso = ()=> {
  return (
    <main>
      <h1>Carrito</h1>
      <p>🛒 Página de Carrito: en preparación. Mientras tanto puedes seguir navegando.</p>
      <p>
        <Link to="/" className="btn-link">Volver al inicio</Link>
      </p>
    </main>
  );
}
export default CarritoAviso
 */
