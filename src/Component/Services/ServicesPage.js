import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import './ServicesPage.css';

// Suponiendo que los datos de los servicios vienen de una API o un archivo de configuración
const servicesData = [
    { id: 'fonoaudiologia', name: "Fonoaudiología", img: "/images/Fonoaudiología.png", shortDesc: "Evaluación y tratamiento de trastornos del lenguaje..." },
    { id: 'psicologia', name: "Psicología", img: "/images/Psicología.png", shortDesc: "Estudio de la conducta humana y procesos mentales..." },
    // ... más servicios
];

const ServicesPage = () => {
    const [services, setServices] = useState(servicesData); // En un caso real, esto vendría de una API

    // Si los datos vienen de una API, usarías useEffect para fetch los datos al montar el componente

    return (
        <section className="services-page">
            <h2>Nuestros Servicios</h2>
            <div className="services-grid">
                {services.map(service => (
                    <div key={service.id} className="service-card">
                        <img src={service.img} alt={service.name} />
                        <h3>{service.name}</h3>
                        <p>{service.shortDesc}</p>
                        <Link to={`/services/${service.id}`}>Más información</Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesPage;