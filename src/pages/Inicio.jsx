import Productos from '../components/Productos';
import Carrito from '../components/Carrito';
import './Inicio.css';

const Inicio = () => {


  return (
    <div className="inicio-page">
      {/* Texto que no se estaba viendo porque Inicio no estaba montado */}
      <header className="inicio-header">
        <h2>Los platos deliciosos son St Gourmet</h2>
        <p>Explora nuestras recetas de estrella Michelin y reserva tu pedido</p>
      </header>

      <section className="productos-section">
        {/* Aquí pasamos la función onAgregar para que Productos pueda usarla */}
        <Productos />
        
      </section>

    
    </div>
  );
};

export default Inicio;
