import { useState, useEffect } from "react";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState("");

  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((respuesta) => respuesta.json())
      .then((data) => {
        const nombres = data.map((item) => item.title);
        setProductos(nombres);
      })
      .catch((error) => {
        console.log("Error al obtener productos:", error);
      });
  }, []);

  const agregarProducto = (e) => {
    e.preventDefault();
    if (nuevoProducto.trim() !== "") {
      setProductos([...productos, nuevoProducto]);
      setNuevoProducto("");
    }
  };

  const eliminarProducto = (nombre) => {
    setProductos(productos.filter((item) => item !== nombre));
  };

  return (
    <div>
      <h2>Productos desde la API</h2>

      <form onSubmit={agregarProducto}>
        <input
          type="text"
          placeholder="Escribí un producto"
          value={nuevoProducto}
          onChange={(e) => setNuevoProducto(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>

      <ul>
        {productos.map((producto, index) => (
          <li key={index}>
            {producto}
            <button onClick={() => eliminarProducto(producto)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;
