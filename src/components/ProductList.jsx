import Product from './Product'

const ProductList = ({items = []})=>{
    return(
        <ul>
            {items.map((item, index)=>(
                <Product key={index} name={item} />
            ))}
        </ul>
    )
}

export default ProductList