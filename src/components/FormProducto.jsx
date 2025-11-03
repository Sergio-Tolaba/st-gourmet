import { useState } from 'react';

const FormProducto = ({onAgregar}) => {
  const [errores, setErrores] = useState({});
  const [producto, setProducto] = useState({
    nombre: '',
    imagen: '',
    precio: '',
    descripcion: '',
  });
  const manejarChange = (e) => {
    const {name, value} = e.target;
    setProducto({ ...producto, [name]: value });
  };
  const validarForm = () => {
    const nuevosErrores = {};

    if(!producto.nombre.trim())
      nuevosErrores.nombre = 'El nombre es obligatorio'
    if(!producto.imagen.trim() || producto.imagen.length <8)
      nuevosErrores.imagen = 'Subir para la imagen una URL válida'
    if(!producto.precio.trim() || producto.precio < 0) 
      nuevosErrores.precio = 'El precio debe ser mayor a cero'
    if(!producto.descripcion.trim() || producto.descripcion.length <10)
      nuevosErrores.descripcion = 'La descripcion tiene que tener 10 o más caracteres'
    setErrores(nuevosErrores)
    return Object.keys(nuevosErrores).length === 0
  };
  const manejarSubmit = (e)=>{
    e.preventDefault()
    if(!validarForm())
      return
    const productoAEnviar ={
      ...producto,
      precio: parseFloat(producto.precio)
    }
  onAgregar(productoAEnviar)
  setProducto({nombre:'', imagen:'',precio:'', descripcion:''})
  setErrores({})
  }
  return (
    <>
      <form onSubmit={manejarSubmit}>
        <h2>Agregar Producto</h2>
        <div>
          <label htmlFor=''>Nombre:</label>
          <br />
          <input
            type="text"
            name="nombre"
            value={producto.nombre}
            onChange={manejarChange}
          />
          {errores.nombre && <p style={{ color: 'red' }}>{errores.nombre} </p>}
        </div>
        <div>
          <label htmlFor=''>Precio:</label>
          <br />
          <input
            type="number"
            name="precio"
            value={producto.precio}
            onChange={manejarChange}
            min={0}
            
          />
          {errores.precio && <p style={{ color: 'red' }}>{errores.precio} </p>}
        </div>
        <div>
          <label htmlFor=''>URL de Imagen:</label>
          <br />
          <input
            type="text"
            name="imagen"
            value={producto.imagen}
            onChange={manejarChange}
          />
          {errores.imagen && <p style={{ color: 'red' }}>{errores.imagen} </p>}
        </div>
        <div>
          <label htmlFor=''>Descripcion:</label>
          <br />
          <textarea
            type="text"
            name="descripcion"
            value={producto.descripcion}
            onChange={manejarChange}
          />
          {errores.descripcion && <p style={{ color: 'red' }}>{errores.descripcion} </p>}
        </div>
        <button type="submit">Agregar Producto</button>
      </form>
    </>
  );
};

export default FormProducto;
