import React from 'react';
import './QuienesSomos.css';
import Perfil from '../assets/Perfil.jpg'; 

export default function QuienesSomos() {

  return (
    <div className="quienes-somos-container">
      <h1>Hola, soy Matias Halac</h1>
      <img
        src={Perfil}
        alt="Matias Halac"
        className="quienes-somos-foto"
      />
      <p>
        Soy un desarrollador web apasionado con experiencia en React, JavaScript y
        diseño de interfaces modernas. Me encanta crear aplicaciones que sean
        intuitivas, eficientes y visualmente atractivas.
      </p>
      <p>
        Mi misión es brindar soluciones tecnológicas que ayuden a las personas a
        mejorar sus vidas y alcanzar sus objetivos. Trabajo con dedicación y
        creatividad para que cada proyecto sea único y de calidad.
      </p>
      <p>
        Si quieres conocer más sobre mí o mis proyectos, no dudes en contactarme.
        ¡Estoy aquí para ayudarte!
      </p>
    </div>
  );
}
