import { Link } from 'react-router-dom';
import './CarritoAviso.css'

const CarritoAviso = ()=> {
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