
import ProductList from "../components/ProductList";
import {useState} from 'react'
const Inicio = ()=>{
    //const productos = ['Pizza', 'Arroz con huevo', 'Matambre']
    const [productos, setProductos] = useState(['Pizza', 'Arroz con huevo', 'Matambre'])
    const agregarProducto = ()=>{
        setProductos([...productos,"ñoquis"]) //actualiza estado si recargar la SPA
    }
    return(
        <div>
            <h2>Comidas deliciosas</h2>
            <button onClick={agregarProducto}>Agregar producto</button>
            {/* estado productos pasa como props */}
            <ProductList items={productos} />
        </div>

    )
}

export default Inicio