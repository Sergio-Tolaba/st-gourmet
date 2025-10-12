import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
    <Link to="/" className="nav-link">Inicio</Link>
    <Link to="/ofertas" className="nav-link">Ofertas</Link>
    <Link to="/carrito" className="nav-link">Carrito</Link>
    </nav>
  );
};

export default Navbar;