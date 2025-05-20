import React, { useState } from 'react';
import './ServicioCardConLeerMas.css'; // Importa el archivo de estilos
import { Link } from 'react-router-dom'; // Importa el componente Link

function ServicioCardConLeerMas({ iconSrc, title, description, linkTo }) {
    const [expanded, setExpanded] = useState(false);
    const shortDescription = description.substring(0, 80) + (description.length > 80 ? '...' : '');

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="servicio-card-con-leer-mas">
            <div className="servicio-card-con-leer-mas__icon-container">
                {iconSrc && <img src={iconSrc} alt={title} className="servicio-card-con-leer-mas__icon" />}
                {!iconSrc && <div className="servicio-card-con-leer-mas__icon-placeholder"></div>}
            </div>
            <h3 className="servicio-card-con-leer-mas__title">{title}</h3>
            <p className="servicio-card-con-leer-mas__description">
                {expanded ? description : shortDescription}
            </p>
            {description.length > 80 && (
                <button onClick={toggleExpand} className="servicio-card-con-leer-mas__button">
                    {expanded ? 'Leer menos' : 'Leer más'}
                </button>
            )}
            <Link to={linkTo} className="servicio-card-con-leer-mas__link">
                Ver detalle <span className="servicio-card-con-leer-mas__arrow">&rarr;</span>
            </Link>
        </div>
    );
}

export default ServicioCardConLeerMas;