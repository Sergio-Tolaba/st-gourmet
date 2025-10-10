
import ProductList from "../components/ProductList";
import {useState} from 'react'
const Inicio = ()=>{
    //const productos = ['Pizza', 'Arroz con huevo', 'Matambre']
    const [productos, setProductos] = useState(['Pizza', 'Arroz con huevo', 'Matambre'])
    const agregarProducto = ()=>{
        setProductos([...productos,"ñoquis"]) //actualiza estado si recargar la SPA
    }
    const eliminarProducto = (nombre)=>{
    setProductos(productos.filter((item)=> item !==nombre))
    }
    return(
        <div>
            <h2>Comidas deliciosas</h2>
            <button onClick={agregarProducto}>Agregar producto</button>
            {/* estado productos pasa como props */}
            {/* funcion eliminarProducto pasa como props| */}
            <ProductList items={productos} onDelete={eliminarProducto} />
        </div>

    )
}

export default Inicio