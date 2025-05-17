import React from 'react';
import './BeneficioFisioCard.css'; // Importa el archivo de estilos CSS
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'; // Importa un icono de check

function BeneficioFisioCard({ title, description }) {
    return (
        <div className="beneficio-fisio-card">
            <div className="beneficio-fisio-card__icon-container">
                <CheckCircleOutlineIcon className="beneficio-fisio-card__icon" />
            </div>
            <h3 className="beneficio-fisio-card__title">{title}</h3>
            <p className="beneficio-fisio-card__description">{description}</p>
        </div>
    );
}

export default BeneficioFisioCard;