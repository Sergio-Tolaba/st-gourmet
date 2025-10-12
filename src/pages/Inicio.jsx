import { Link } from 'react-router-dom';
import './Inicio.css';

const Inicio = () => {
  return (
    <main className="inicio-container">
      <h2>Los platos delciosos son St Gourmet</h2>
      <p>Explora nuestras recetas de estrella Michelin y los mejores ingredientes</p>
      <Link to="/productos" className="btn-inicio">
        Ver Productos
      </Link>
    </main>
  );
};

export default Inicio;
