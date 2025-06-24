import React from 'react'
import { NavLink, Outlet } from "react-router";
import './MainLayout.css'

export default function MainLayout() {
  return (
    <>
    
        <nav className="Header">
        <li className="listaNav">
          <ul>
            <NavLink to="/Productos" className="Links">
              Productos
            </NavLink>
          </ul>
          <ul>
            <NavLink to="/QuienesSomos" className="Links">
              QuienesSomos
            </NavLink>
          </ul>
          <ul>
            <NavLink to="/Contacto" className="Links">
              Contacto
            </NavLink>
          </ul>
          <ul>
            <NavLink to="/" className="Links">
              Home
            </NavLink>
          </ul>
        </li>
      </nav>
      <Outlet/>
    </>
  )
}
