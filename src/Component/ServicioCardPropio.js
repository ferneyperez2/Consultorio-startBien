import React from 'react';
import { Link } from 'react-router-dom';
import './ServicioCardPropio.css'; // Importa el archivo de estilos CSS

function ServicioCardPropio({ iconSrc, title, description, linkTo }) {
    return (
        <div className="servicio-card-propio">
            <div className="servicio-card-propio__icon-container">
                {iconSrc && <img src={iconSrc} alt={title} className="servicio-card-propio__icon" />}
                {!iconSrc && <div className="servicio-card-propio__icon-placeholder"></div>} {/* Placeholder si no hay icono */}
            </div>
            <h3 className="servicio-card-propio__title">{title}</h3>
            <p className="servicio-card-propio__description">{description}</p>
            <Link to={linkTo} className="servicio-card-propio__link">
                Leer más <span className="servicio-card-propio__arrow">&rarr;</span>
            </Link>
        </div>
    );
}

export default ServicioCardPropio;