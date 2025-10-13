import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './DetalleProducto.css'; // opcional: estilos para esta página

const DetalleProducto = () => {
  const { id } = useParams();               // lee :id de la URL
  const [receta, setReceta] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    setReceta(null);   // para mostrar "cargando" al cambiar id
    setError(null);

    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Error en la respuesta de la API');
        return res.json();
      })
      .then((data) => {
        if (data.meals && data.meals.length > 0) {
          const m = data.meals[0];
          setReceta({
            id: m.idMeal,
            nombre: m.strMeal,
            imagen: m.strMealThumb,
            instrucciones: m.strInstructions,
            categoria: m.strCategory,
            area: m.strArea,
            ingredientes: Array.from({ length: 20 }) // construimos lista limpia abajo
              .map((_, i) => ({
                ingrediente: m[`strIngredient${i + 1}`],
                medida: m[`strMeasure${i + 1}`],
              }))
              .filter((it) => it.ingrediente && it.ingrediente.trim() !== ''),
          });
        } else {
          setError('Receta no encontrada');
        }
      })
      .catch((err) => {
        console.error(err);
        setError('Error al obtener la receta');
      });
  }, [id]);

  if (error) {
    return (
      <div className="detalle-container">
        <p>{error}</p>
        <Link to="/"><button>Volver al inicio</button></Link>
      </div>
    );
  }

  if (!receta) {
    return (
      <div className="detalle-container">
        <p>Cargando receta...</p>
      </div>
    );
  }

  return (
    <div className="detalle-container">
      <h2>{receta.nombre}</h2>
      <div className="detalle-top">
        <img src={receta.imagen} alt={receta.nombre} className="detalle-img" />
        <div className="detalle-meta">
          <p><strong>Categoría:</strong> {receta.categoria || '—'}</p>
          <p><strong>Origen:</strong> {receta.area || '—'}</p>
        </div>
      </div>

      <h3>Ingredientes</h3>
      <ul className="ingredientes-list">
        {receta.ingredientes.map((it, i) => (
          <li key={i}>{it.ingrediente} — {it.medida}</li>
        ))}
      </ul>

      <h3>Preparación</h3>
      <p className="instrucciones">{receta.instrucciones}</p>

      <div className='volver'>
        <Link to="/"><button>← Volver</button></Link>
      </div>
    </div>
  );
};

export default DetalleProducto;