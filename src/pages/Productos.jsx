import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Productos.css';

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState('');
  const [detalleProducto, setDetalleProducto] = useState(null);


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((respuesta) => respuesta.json())
      .then((data) => {
        const nombres = data.map((item) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          description: item.description,
        }));
        setProductos(nombres);
      })
      .catch((error) => {
        console.log('Error al obtener productos:', error);
      });
  }, []);

  const agregarProducto = (e) => {
    e.preventDefault();
    if (nuevoProducto.trim() !== '') {
      // Crear un objeto similar a los de la API
      const productoNuevo = {
        id: Date.now(), // ID único
        title: nuevoProducto,
        price: 'N/A',
        description: 'Producto agregado manualmente',
      };
      setProductos([...productos, productoNuevo]);
      setNuevoProducto('');
    }
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter((item) => item.id !== id));
    if (detalleProducto?.id === id) {
      setDetalleProducto(null);
    }
  };

  return (
    <div>
      <h2>Productos desde la API</h2>

      <form onSubmit={agregarProducto}>
        <input
          id="nombreProducto"
          name="nombreProducto"
          type="text"
          placeholder="Escribí un producto"
          value={nuevoProducto}
          onChange={(e) => setNuevoProducto(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>

      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.title}
            <button onClick={() => setDetalleProducto(producto)}>
              Ver detalle
            </button>
            <button onClick={() => eliminarProducto(producto.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      {detalleProducto ?(
        <section style={{ marginTop: '20px' }}>
          <hr/> <hr/>
          <h3>Detalle del producto</h3>
          <p>Nombre: {detalleProducto.title}</p>
          <p>Precio: {detalleProducto.price}</p>
          <p>Descripción: {detalleProducto.description}</p>
        </section>
      ):null}
    </div>
  );
};

export default Productos;
