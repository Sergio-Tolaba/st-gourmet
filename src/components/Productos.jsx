import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Productos.css';
import {CarritoContext} from '../context/CarritoContext'
const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //Uso del Contexto
  const {agregarProducto}=useContext(CarritoContext)

  const cargar = () => {
    setLoading(true);
    setError(null);
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((res) => {
        if (!res.ok) throw new Error('Error de red');
        return res.json();
      })
      .then((data) => {
        if (data.meals) {
          const formateados = data.meals.slice(0, 24).map((item) => ({
            id: item.idMeal,
            nombre: item.strMeal,
            imagen: item.strMealThumb,
            precio: Math.floor(Math.random() * 12) + 5, 
          }));
          setProductos(formateados);
        } else {
          setProductos([]);
        }
      })
      .catch((err) => {
        console.error(err);
        setError(err.message || 'Error al cargar productos');
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    cargar();
  }, []);

  if (loading) return <div className="loader">Cargando productos...</div>;
  if (error)
    return (
      <div className="error">
        Error: {error} <button onClick={cargar}>Reintentar</button>
      </div>
    );

  return (
    <div className="productos-container">
      <div className="grid-productos">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img src={producto.imagen} alt={producto.nombre} />
            <h3 className="nombre">{producto.nombre}</h3>
            <p className="precio">${producto.precio}</p>

            <div className="botones">
              <Link to={`/productos/${producto.id}`}>
                <button className="btn-detalle">Ver detalle</button>
              </Link>

              <button
                className="btn-agregar"
                onClick={() => {
                  if (typeof agregarProducto === 'function') {
                    agregarProducto(producto);
                  } else {
                    console.warn(
                      'agregarProducto no es una función (no fue pasada desde el padre)'
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
