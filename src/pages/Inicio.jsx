import ProductList from "../components/ProductList";

const Inicio = ()=>{
    const productos = ['Pizza', 'Arroz con huevo', 'Matambre']
    return(
        <div>
            <h2>Comidas deliciosas</h2>
            <ProductList items={productos} />
        </div>

    )
}

export default Inicio