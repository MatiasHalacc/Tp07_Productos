import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <>
        <header className="Header">
            <nav className="NavContainer">
                <NavLink to="/Productos" className="NavLink">Productos</NavLink>
                <NavLink to="/QuienesSomos" className="NavLink">Quiénes Somos</NavLink>
                <NavLink to="/Contacto" className="NavLink">Contacto</NavLink>
                <NavLink to="/" className="NavLink">Inicio</NavLink>
            </nav>
      </header>
    </>
  )
}
