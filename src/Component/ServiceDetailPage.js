import React from "react";
import { useParams } from "react-router-dom";
import "./ServiceDetail.css"; // Crea estilos para esta página

const ServiceDetailPage = () => {
    const { serviceId } = useParams();
    // Aquí deberías buscar la información del servicio basado en el serviceId
    const servicio = {
        id: serviceId,
        title: "Título del Servicio",
        description: "Descripción detallada del servicio...",
        images: [require("./img/Fonoaudiología.png"), require("./img/ortopedia.png")],
        videos: ["https://www.youtube.com/watch?v=GUFLeX60dW0"],
        // ... más información ...
    };

    return (
        <div className="service-detail-page">
            <h1>{servicio.title}</h1>
            <p>{servicio.description}</p>
            <div className="image-gallery">
                {servicio.images.map((image, index) => (
                    <img key={index} src={image} alt={`${servicio.title} ${index + 1}`} />
                ))}
            </div>
            <div className="video-gallery">
                {servicio.videos.map((videoUrl, index) => (
                    <iframe key={index} src={videoUrl} title={`Video ${index + 1}`} frameborder="0" allowfullscreen></iframe>
                ))}
            </div>
            {/* ... más contenido como precios, testimonios, etc. ... */}
        </div>
    );
};

export default ServiceDetailPage;