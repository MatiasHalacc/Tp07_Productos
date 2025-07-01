import { useEffect, useState } from 'react'
import MainLayout from './layout/MainLayout';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import QuienesSomos from './pages/QuienesSomos';
import './App.css';
import axios from 'axios';
import ProductoDetalle from './pages/ProductoDetalle';

function App() {
  const [listado,setListado] = useState([]);
  const [error,setError] = useState(null);
  const [producto, setproducto] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(function (response) {
      setListado(response.data);
    })
    .catch(function (error) {
      setError(error);
    }); 
  }, [])

  return (
    <>  
      <Routes>
        <Route path='/' element={<MainLayout/>} >
            <Route index element={<Home />} />
            <Route
            path="/Productos/:categoria"
            element={<Productos listado={listado} loading={loading} setproducto={setproducto} setLoading={setLoading}/>}
            />
            <Route
            path="/Productos"
            element={<Productos listado={listado} loading={loading} setproducto={setproducto} setLoading={setLoading}/>}
            />
            <Route
            path="/QuienesSomos"
            element={<QuienesSomos/>}
            />
            <Route
            path="/Contacto"
            element={<Contacto/>}
            />
            <Route
            path="/ProductoDetalle/:id" 
            element={<ProductoDetalle producto={producto} loading={loading} setproducto={setproducto} setLoading={setLoading}/>} 
            />
        </Route>
            
      </Routes>       
        {error && <h1>{error.message}</h1>}
    </>
     
  )
}

export default App
