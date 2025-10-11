import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './DetalleProducto.css';

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProducto(data))
      .catch((error) => console.log('Error al obtener detalle:', error));
  }, [id]);

  if (!producto) return <p className="cargando">Cargando detalle...</p>;

  return (
    <div className="detalle-container">
      <h2>{producto.title}</h2>
      <p>
        <strong>Precio:</strong> ${producto.price}
      </p>
      <p>
        <strong>Descripción:</strong> {producto.description}
      </p>

      <Link to="/">
        <button>Volver</button>
      </Link>
    </div>
  );
};

export default DetalleProducto;
