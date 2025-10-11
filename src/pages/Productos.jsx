import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Productos.css';

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState('');
  const [detalleProducto, setDetalleProducto] = useState(null);


  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((respuesta) => respuesta.json())
      .then((data) => {
        if (data.meals) {
          const recetasFormateadas = data.meals.map((item) => ({
            id: item.idMeal,
            nombre: item.strMeal,
            imagen: item.strMealThumb,
            instrucciones: item.strInstructions,
          }));
          setProductos(recetasFormateadas);
        } else {
          setProductos([]);
        }
      })
      .catch((error) => {
        console.log('Error al obtener productos:', error);
      });
  }, []);

  const agregarProducto = (e) => {
    e.preventDefault();
    if (nuevoProducto.trim() !== '') {
      
      const productoNuevo = {
        id: productos.length + 1,
        nombre: nuevoProducto,
        imagen: '', // sin imagen
        instrucciones: 'Receta agregada manualmente',
      };
      setProductos([...productos, productoNuevo]);
      setNuevoProducto('');
    }
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter((item) => item.id !== id));

    }
  

  return (
    <div className="productos-container">
      <h2>Recetas desde la API</h2>

      <form onSubmit={agregarProducto}>
        <input
          id="nombreProducto"
          name="nombreProducto"
          type="text"
          placeholder="Escribir un producto"
          value={nuevoProducto}
          onChange={(e) => setNuevoProducto(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>

     <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <div className="acciones">
              {producto.imagen && (
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="img-receta"
                />
              )}
              <span>{producto.nombre}</span>
              <button onClick={() => setDetalleProducto(producto)}>
                Ver detalle
              </button>
              <button onClick={() => eliminarProducto(producto.id)}>
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>

      {detalleProducto ? (
        <section>
          <hr />
          <h3>Detalle de la receta</h3>
          <p>Nombre: {detalleProducto.nombre}</p>
          {detalleProducto.imagen && (
            <img
              src={detalleProducto.imagen}
              alt={detalleProducto.nombre}
              className="img-receta"
            />
          )}
          <p>Instrucciones: {detalleProducto.instrucciones}</p>
        </section>
      ) : null}
    </div>
  );
};

export default Productos;