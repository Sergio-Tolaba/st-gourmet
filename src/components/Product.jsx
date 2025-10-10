const Product = ({ name, onDelete }) => {
  return (
    <li>
      {name}
      {/* Agrego el boton Eliminar y llamo a la funcion definida en Inicio */}
      <button onClick={() => onDelete(name)}>Eliminar</button>
    </li>
  );
};
export default Product;
