import ProductList from '../components/ProductList';
import { useState } from 'react';
const InicioList = () => {
  //const productos = ['Pizza', 'Arroz con huevo', 'Matambre']
  const [productos, setProductos] = useState([
    'Pizza',
    'Arroz con huevo',
    'Matambre',
  ]);
  const [nuevoProducto, setNuevoProducto] = useState('');
  // const agregarProducto = ()=>{
  //     setProductos([...productos,"ñoquis"]) //actualiza estado si recargar la SPA
  // }
  const agregarProducto = (e) => {
    e.preventDefault();
    if (nuevoProducto.trim() !== '') {
      setProductos([...productos, nuevoProducto]);
      setNuevoProducto('');
    }
  };
  const eliminarProducto = (nombre) => {
    setProductos(productos.filter((item) => item !== nombre));
  };
  return (
    <div>
      <h2>Comidas deliciosas</h2>
      <form onSubmit={agregarProducto}>
        <input
          type="text"
          placeholder="Escribí un producto"
          value={nuevoProducto}
          onChange={(e) => setNuevoProducto(e.target.value)}
        />
        <button onClick={agregarProducto}>Agregar producto</button>
      </form>
      {/* estado productos pasa como props */}
      {/* funcion eliminarProducto pasa como props| */}
      <ProductList items={productos} onDelete={eliminarProducto} />
    </div>
  );
};

export default InicioList;
