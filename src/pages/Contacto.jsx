import React from 'react';
import './Contacto.css';

export default function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault(); 
  };

  return (
    <div className="contacto-container">
      <h1>Contacto</h1>
      <p>¿Quieres ponerte en contacto conmigo? Completa el formulario abajo.</p>
      <form className="contacto-form" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Tu nombre"
        />

        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="tu@email.com"
        />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          placeholder="Escribe tu mensaje aquí..."
          rows="5"
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
