// src/components/Header.jsx
import { Link, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import NavBar from './NavBar';
import './Header.css';

const Header = () => {
  const { usuario, logout } = useAuthContext();
  const location = useLocation();
  const mostrarLinkIngresar = !usuario && location.pathname !== '/login';

  return (
    <header className="carrito-header">
      <div
        className="rutaAdmin">
        <NavBar />
        {usuario === 'admin' && <Link to="/admin">Admin</Link>}
      </div>

      <div>
        {usuario ? (
          
          <button onClick={logout}>Cerrar Sesión</button>
        ) : (
          
          mostrarLinkIngresar && (
            <Link to="/login">
              <button>Ingresar</button>
            </Link>
          )
        )}
      </div>
      
    </header>
  );
};

export default Header;
