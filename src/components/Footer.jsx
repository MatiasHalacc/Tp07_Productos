import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-container">
        <div className="Footer-section">
          <h4>Acerca de Nosotros</h4>
          <p>
            Somos una tienda de ropa comprometida con la calidad y el estilo.  
            Brindamos las últimas tendencias para que te veas increíble cada día.
          </p>
        </div>
        <div className="Footer-section">
          <h4>Contacto</h4>
          <p>Email: contacto@modastore.com</p>
          <p>Teléfono: +54 11 1234 5678</p>
          <p>Dirección: Av. Falsa 123, Buenos Aires, Argentina</p>
        </div>
        <div className="Footer-section">
          <h4>Síguenos</h4>
          <p>
            <a href="#" aria-label="Facebook" className="Footer-link">Facebook</a><br/>
            <a href="#" aria-label="Instagram" className="Footer-link">Instagram</a><br/>
            <a href="#" aria-label="Twitter" className="Footer-link">Twitter</a>
          </p>
        </div>
      </div>
      <div className="Footer-bottom">
        &copy; 2025 ModaStore. Todos los derechos reservados.
      </div>
    </footer>
  );
}
