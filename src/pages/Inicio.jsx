import { Link } from 'react-router-dom';
import './Inicio.css';


const Inicio = () => {
  return (
    <main className="inicio-container">
      <h2>Las Recetas ST Gourmet</h2>
      <p>Explora nuestros productos desde la Fake Store API</p>
      <Link to="/productos" className="btn-inicio">
        Ver Productos
      </Link>
    </main>
  );
};

export default Inicio;
