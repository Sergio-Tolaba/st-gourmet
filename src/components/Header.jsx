import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import NavBar from "./NavBar";

const Header = () => {
  const {usuario, logout} = useAuthContext()
  const estaLogueado = !!usuario
  return (
    <header className="header">
      <div>
        <h1>St Gourmet</h1>
      </div>
      <div>
        <NavBar/>
      </div>
      <div>
        { estaLogueado ?
        <button onClick={logout} >Cerrar Sesion</button>:
        <Link to='/login'>
          <button> Acceder</button>
        </Link>
      }
      </div>
        
    </header>
  )
}
export default Header;