import React, {  } from 'react'
import Producto  from './Producto'
import './Productos.css'
export default function Productos({listado}) {
  return (
   <>
    <div className="product-grid">
      {listado.map((prod, index) => (
        <Producto key={index} product={prod} />
      ))}
    </div>
   </>
  )
}
