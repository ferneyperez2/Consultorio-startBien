import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import './ServiceDetail.css';
import VideoEmbed from '../Common/VideoEmbed';

// Suponiendo que los datos detallados de los servicios vienen de una API o un archivo de configuración
const detailedServicesData = {
    fonoaudiologia: {
        name: "Fonoaudiología",
        description: "Disciplina encargada de evaluar, diagnosticar, promocionar y prevenir...",
        videoUrl: "https://www.youtube.com/embed/your_video_id_1", // Ejemplo de URL de YouTube
        images: ["/images/fono1.jpg", "/images/fono2.jpg"], // Ejemplo de imágenes
    },
    psicologia: {
        name: "Psicología",
        description: "La psicología es la ciencia que estudia la conducta humana y los procesos mentales...",
        videoUrl: null,
        images: ["/images/psico1.jpg"],
    },
    // ... más detalles de servicios
};

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState(null);

    useEffect(() => {
        // En un caso real, aquí harías una llamada a la API para obtener los detalles del servicio por su ID
        const data = detailedServicesData[serviceId];
        setService(data);
    }, [serviceId]);

    if (!service) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="service-detail-container">
            <h2>{service.name}</h2>
            {service.images && service.images.map((img, index) => (
                <img key={index} src={img} alt={`${service.name} ${index + 1}`} className="service-image" />
            ))}
            <p className="service-description">{service.description}</p>
            {service.videoUrl && (
                <div className="video-container">
                    <h3>Video Relacionado</h3>
                    <VideoEmbed url={service.videoUrl} />
                </div>
            )}
            {/* Posibilidad de incluir un formulario de contacto o agendamiento específico del servicio */}
        </div>
    );
};

export default ServiceDetail;