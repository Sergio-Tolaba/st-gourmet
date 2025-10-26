import { Navigate } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"
//sin uso de AuthContext
//const RutaProtegida = ({logueado, children}) => {
const RutaProtegida = ({children}) => {
   //if(!logueado){
  const{usuario} = useAuthContext()
  if(!usuario){
    return <Navigate to='/login' replace/>
  }
  return children
}

export default RutaProtegida
