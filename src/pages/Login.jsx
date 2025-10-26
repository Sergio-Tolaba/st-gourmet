import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
//Login x params
//const Login = ({setLogueado}) => {
const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [error, setError] = useState('');

  const { login } = useAuthContext();
  const navigate = useNavigate();

  const verCarrito = (e) => {
    e.preventDefault();

    if (usuario == 'admin' && clave == '3456') {
      //setLogueado(true)
      login(usuario);
      navigate('/carrito');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <>
      
      <h4>
        Para <span>Ver su Carrito</span> por favor loguearse{' '}
      </h4>
      <form onSubmit={verCarrito}>
        <label htmlFor="">Usuario: </label>
        <input
          type="text"
          placeholder="Ingrese su usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />{' '}
        <br />
        <br />
        <label htmlFor="">Contraseña: </label>
        <input
          type="password"
          placeholder="Ingrese su clave"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Ver Carrito</button>
      </form>
      {error ? <p>{error}</p> : null}
    </>
  );
};

export default Login;
