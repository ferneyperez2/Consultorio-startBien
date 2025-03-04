import React, { useState } from "react";
import './Servicio.css';
import Fonoaudiologia from "./img/Fonoaudiología.png";
import Psicologia from "./img/Psicología.png";
import TerapiaFisica from "./img/Terapia Física.png";
import TerapiaRepiratoria from "./img/Terapia Respiratoria.png";
import MedicinaGeneral from "./img/Medicina General.png";
import TerapiaOcupacional from "./img/Terapia Ocupacional.png";
import Ortopedia from "./img/ortopedia.png";

function Services() {
  // const Descripciom = [
  
  // ]
  const services = [
    { name: "Fonoaudiología", img: Fonoaudiologia, desc: "Mejora la comunicación y el lenguaje." },
    { name: "Psicología", img: Psicologia, desc: "Atención en salud mental y bienestar emocional." },
    { name: "Terapia Física", img: TerapiaFisica, desc: "Recuperación de lesiones y movilidad." },
    { name: "Terapia Respiratoria", img: TerapiaRepiratoria, desc: "Tratamientos para mejorar la función pulmonar." },
    { name: "Medicina General", img: MedicinaGeneral, desc: "Consulta médica para todas las edades." },
    { name: "Terapia Ocupacional", img: TerapiaOcupacional, desc: "Ayuda en habilidades motoras y cognitivas." },
    { name: "Ortopedia", img: Ortopedia, desc: "Diagnóstico y tratamiento de problemas musculoesqueléticos." }
  ];

  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="services">
      <h2>Servicios</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.img} alt={service.name} />
            <h3>{service.name}</h3>
            <button onClick={() => setSelectedService(service)}>Más información</button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{selectedService.name}</h2>
            <p>{selectedService.desc}</p>
            <button onClick={() => setSelectedService(null)}>Cerrar</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;