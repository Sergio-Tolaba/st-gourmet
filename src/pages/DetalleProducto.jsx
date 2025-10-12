import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './DetalleProducto.css';

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.meals && data.meals.length > 0) {
          const p = data.meals[0];
          setProducto({
            id: p.idMeal,
            nombre: p.strMeal,
            imagen: p.strMealThumb,
            instrucciones: p.strInstructions
          });
        }
      });
  }, [id]);

  if (!producto) return <p>Cargando...</p>;

  return (
    <div className="detalle-container">
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} />
      <p>{producto.instrucciones}</p>
    </div>
  );
};

export default DetalleProducto;
