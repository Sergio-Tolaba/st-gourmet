import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Productos.css';

const Productos = ({ onAgregar }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) {
          const formateados = data.meals.slice(0, 25).map((item) => ({
            id: item.idMeal,
            nombre: item.strMeal,
            imagen: item.strMealThumb,
            precio: (Math.random() * (30 - 10) + 7).toFixed(0),
            instrucciones: item.strInstructions,
          }));
          setProductos(formateados);
        } else {
          setProductos([]);
        }
      })
      .catch((err) => {
        console.error('Error cargando recetas:', err);
        setProductos([]);
      });
  }, []);

  return (
    <div className="productos-container">
      <div className="grid-productos">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img src={producto.imagen} alt={producto.nombre} />
            <h3 className="nombre">{producto.nombre}</h3>
            <p className="precio">${producto.precio}</p>

            <div className="botones">
              {/* Link apunta a la ruta dinámica que declaramos en App.jsx */}
              <Link to={`/productos/${producto.id}`}>
                <button className="btn-detalle">Ver detalle</button>
              </Link>

              
              <button
                className="btn-agregar"
                onClick={() => {
                  if (typeof onAgregar === 'function') {
                    onAgregar(producto);
                  } else {
                    console.warn(
                      'onAgregar no es una función (no fue pasada desde el padre)'
                    );
                  }
                }}
              >
                🛒Agregar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
