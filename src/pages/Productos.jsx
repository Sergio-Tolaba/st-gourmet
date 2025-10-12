import { useState, useEffect } from 'react';
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
            precio: (Math.random() * (1000 - 200) + 200).toFixed(0), // Precio aleatorio entre 200 y 1000
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

  const eliminarProducto = (id) => {
    setProductos(productos.filter((item) => item.id !== id));
  };

  return (
    <div className="productos-container">
      <h2>Los platos más deliciosos a sólo un clic</h2>

      <div className="grid-productos">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p className="precio">${producto.precio}</p>
            <div className="botones">
              <button onClick={() => setDetalleProducto(producto)}>Ver detalle</button>
              <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>

      {detalleProducto ? (
        <section className="detalle-producto">
          <hr />
          <h3>Detalle de la receta exclusiva St Gourmet de</h3>
          <p><strong>Nombre:</strong> {detalleProducto.nombre}</p>
          <p><strong>Precio:</strong> ${detalleProducto.precio}</p>
          <p>{detalleProducto.instrucciones}</p>
        </section>
      ):[null]}
    </div>
  );
};

export default Productos;
