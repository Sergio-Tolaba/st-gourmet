import GestionProducto from './GestionProducto'
import FormProducto from './FormProducto';
import { useEffect, useState } from "react";

function Admin() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // suponiendo que ProductList y ProductForm son componentes
  return (
    <div className="admin-container">
      {/* Si mobile: listar productos primero */}
      {isMobile ? (
        <>
          <div className="product-list"><GestionProducto /></div>
          <div className="product-form"><FormProducto /></div>
        </>
      ) : (
        <>
          <div className="product-list"><GestionProducto /></div>
          <div className="product-form"><FormProducto /></div>
        </>
      )}
    </div>
  );
}
export default Admin