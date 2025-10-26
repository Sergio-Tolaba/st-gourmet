
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import { useAuthContext } from '../context/AuthContext';

const NavBar = ({ cartCount = 0 }) => {
  const { usuario} = useAuthContext()
  const esAdmin = usuario == 'admin'
  return (
    <header className="site-header">
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/" className="brand">St Gourmet</Link>
        </div>

        <nav className="nav-center" role="navigation" aria-label="Main">
          <NavLink to="/" className="nav-link" end>Inicio</NavLink>
          <NavLink to="/ofertas" className="nav-link">Ofertas</NavLink>
          <NavLink to="/carrito" className="nav-link">Carrito</NavLink>
        </nav>

        <div className="nav-right">
          <Link to="/carrito" className="cart-link" aria-label="Ver carrito">
            <span className="cart-icon">🛒</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
          {esAdmin &&
          <Link to='/admin'>Admin</Link>
          }
        </div>
      </div>
    </header>
  );
};

export default NavBar
