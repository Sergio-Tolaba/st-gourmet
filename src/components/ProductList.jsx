import Product from './Product'


const ProductList = ({items = [], onDelete})=>{
    return(
        <ul>
            {items.map((item, index)=>(
                // Paso la función eliminarProducto como props=onDelete a cada Product
                <Product key={index} name={item} onDelete={onDelete} /> 
               
            ))}
        </ul>
    )
}

export default ProductList