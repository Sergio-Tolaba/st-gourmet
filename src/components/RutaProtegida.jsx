import { Navigate } from "react-router-dom"

const RutaProtegida = ({logueado, children}) => {
  if(!logueado){
    return <Navigate to='/login'replace/>
  }
  return children
}

export default RutaProtegida
