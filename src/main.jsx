
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext.jsx';


createRoot(document.getElementById('root')).render(
 <StrictMode>
  <BrowserRouter>
      <CarritoProvider>
        <App />
      </CarritoProvider>
    </BrowserRouter>
  </StrictMode>
)
