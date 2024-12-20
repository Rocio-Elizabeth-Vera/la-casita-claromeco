import React from 'react';
import './styles.css';

const PropertyDescription: React.FC = () => {
  return (
    <div className="property-description">
      <h2>Descripción de la propiedad</h2>
      <p>En Claromeco, sobre Avenida 42 y calle 21.</p>
      <p>Te presentamos esta casa con capacidad para 4 personas, ubicada en la esquina. Con excelente vista al mar.</p>
      <p>Se encuentra a apenas 50 metros de la costanera. A pasos del agua.</p>
      
      <div className="highlight">
        <p>La misma cuenta con:</p>
        <ul>
          <li>Living-comedor con sillón y área de estar con un Hogar</li>
          <li>Cocina integrada completa con anafe, horno y microondas</li>
          <li>Amplia mesada y lugar de guardado</li>
          <li>Mesa redonda</li>
          <li>Dos habitaciones:
            <ul>
              <li>Una con cama matrimonial</li>
              <li>Otra habitación con cucheta</li>
            </ul>
          </li>
          <li>Ambas habitaciones con ventilador y amplio placard</li>
          <li>Baño completo</li>
        </ul>
      </div>

      <p>Posee garage con entrada vehicular. Parrilla con barra para apoyo, otra mesa y sillas.</p>
      <p>Matafuego para su tranquilidad.</p>
      <p>Lavadero y otro baño con ducha.</p>
      <p>Patio cerrado con juego de jardín.</p>

      <div className="highlight">
        <p>Además, cuenta con:</p>
        <ul>
          <li>TV LED de 43"</li>
          <li>Internet Wifi</li>
          <li>Heladera con freezer</li>
          <li>Cocina con cafetera eléctrica, tostadora, pava eléctrica</li>
          <li>Vajilla completa</li>
        </ul>
      </div>

      <p>El gas es de tubo.</p>

      <div className="contact-info">
        <h2>Contacto</h2>
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          Gabriel: <a href="tel:+5492983504432">+54 9 2983-504432</a>
        </p>
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          Monica: <a href="tel:+5491131741969">+54 9 11 3174-1969</a>
        </p>
      </div>
    </div>
  );
};

export default PropertyDescription;

