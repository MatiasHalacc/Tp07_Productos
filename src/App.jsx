import { useEffect, useState } from 'react'
import MainLayout from './layout/MainLayout';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import QuienesSomos from './pages/QuienesSomos';
import './App.css';
import axios from 'axios';
import ProductoDetalle from './pages/ProductoDetalle';

function App() {
  const navigate = useNavigate();
  const [listado,setListado] = useState([]);
  const [error,setError] = useState(null);


  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(function (response) {
      setListado(response.data);
    })
    .catch(function (error) {
      setError(error);
    }); 
  }, [])

  
  const verDetalle = () => {navigate('/ProductoDetalle')};
  return (


    <>
     
      <Routes>
        
        <Route path='/' element={<MainLayout/>} >
            <Route index element={<Home />} />
            <Route
            path="/Productos"
            element={<Productos listado={listado} verDetalle={verDetalle}/>}
            />
            <Route
            path="/QuienesSomos"
            element={<QuienesSomos/>}
            />
            <Route
            path="/Contacto"
            element={<Contacto/>}
            />
            </Route>
            <Route
            path="/ProductoDetalle"
            element={<ProductoDetalle/>}
            />
      </Routes>       
        {error && <h1>{error.message}</h1>}
    </>
     
  )
}

export default App
