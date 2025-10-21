import { createContext, useState } from 'react';

export const CarritoContext = createContext();

export function CarritoProvider({children}) {
  
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto) => {
    // permite duplicados
    setCarrito((prev) => [...prev, producto]);
  };

  const eliminarProducto = (index) => {
    setCarrito((prev) => prev.filter((_, i) => i !== index));
  };

  const vaciarCarrito = ()=>{
    setCarrito([])
  }
  return(
    <CarritoContext.Provider value={{
      carrito, 
      agregarProducto, 
      eliminarProducto, 
      vaciarCarrito}}>
        {children}
    </CarritoContext.Provider>
  )
}
