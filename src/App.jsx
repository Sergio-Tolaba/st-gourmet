import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Inicio from './pages/Inicio'
import InicioList from './pages/InicioList';

function App() {
//   const comidas = [
// { id: 1, name: "Pizza", price: 12.5 },
// { id: 2, name: "Hamburguesa", price: 10.0 },
// { id: 3, name: "Empanadas", price: 8.75 },
// { id: 4, name: "Milanesa", price: 11.25 },
// ];
  return (
    <>
      <h1>St Gourmet</h1>
      {/* <ul>
        {comidas.map((c)=>(
          <li key={c.id}>
            <h2>{c.name}</h2>
            <p>${c.price} </p>
          </li>
        ))}
      </ul> */}
      <InicioList/>
      <Inicio/>

    </>
  );
}

export default App;
