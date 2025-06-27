import React from 'react';
import './Home.css';
import Perfil from '../assets/Perfil.jpg'; 

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Bienvenido a mi sitio web</h1>
        <p>
          Soy Matias Halac, desarrollador web apasionado por crear aplicaciones
          modernas, rápidas y atractivas.
        </p>
        <a className="home-btn">Conóceme</a>
      </div>
      <div className="home-image">
        <img
          src={Perfil}
          alt="Matias Halac"
          loading="lazy"
        />
      </div>
    </div>
  );
}
