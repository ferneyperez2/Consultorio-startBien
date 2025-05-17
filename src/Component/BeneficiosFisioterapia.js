import React from 'react';
import './BeneficiosFisioterapia.css';
import BeneficioFisioCard from './BeneficioFisioCard';
import FondoDecorativo from './FondoDecorativo'; // Importa el fondo decorativo

function BeneficiosFisioterapia() {
    const beneficios = [
        {
            title: 'Evaluación Personalizada',
            description: 'Diagnóstico exhaustivo para un plan de tratamiento a tu medida.',
        },
        {
            title: 'Técnicas Avanzadas',
            description: 'Utilizamos las últimas técnicas de terapia manual y ejercicio terapéutico.',
        },
        {
            title: 'Recuperación Integral',
            description: 'Enfoque holístico para abordar la causa del problema, no solo los síntomas.',
        },
        {
            title: 'Seguimiento Continuo',
            description: 'Monitorización constante de tu progreso y ajustes en el plan según sea necesario.',
        },
        {
            title: 'Asesoramiento Profesional',
            description: 'Guía experta para prevenir futuras lesiones y mejorar tu bienestar general.',
        },
        {
            title: 'Comodidad y Flexibilidad',
            description: 'Adaptamos las citas a tu horario y necesidades.',
        },
        // Puedes añadir más beneficios aquí
    ];

    return (
        <section className="beneficios-fisioterapia-section">
            <h2>Beneficios de Nuestra Fisioterapia</h2>
            <div className="beneficios-grid">
                {beneficios.map((beneficio, index) => (
                    <BeneficioFisioCard
                        key={index}
                        title={beneficio.title}
                        description={beneficio.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default BeneficiosFisioterapia;