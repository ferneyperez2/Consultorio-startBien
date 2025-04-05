import React, { useState } from "react";
import './Servicio.css';
import Fonoaudiologia from "./img/Fonoaudiología.png";
import Psicologia from "./img/Psicología.png";
import TerapiaFisica from "./img/Terapia Física.png";
import TerapiaRepiratoria from "./img/Terapia Respiratoria.png";
import MedicinaGeneral from "./img/Medicina General.png";
import TerapiaOcupacional from "./img/Terapia Ocupacional.png";
import Ortopedia from "./img/ortopedia.png";

const services = [
  { name: "Fonoaudiología", img: Fonoaudiologia, desc: "Disciplina encargada de evaluar, diagnosticar, promocionar y prevenir los trastornos del lenguaje, el habla, la deglución, la voz y la audición en personas de todas edades. Todo, mediante la combinación interdisciplinar de las ciencias de la salud, la psicología y la lingüística." },
  { name: "Psicología", img: Psicologia, desc: "La psicología es la ciencia que estudia la conducta humana y los procesos mentales. Al ser bastante amplia, para su estudio y aplicación se divide en dos vertientes: la psicología básica y la psicología aplicada." },
  { name: "Terapia Física", img: TerapiaFisica, desc: "La Terapia Física busca prevenir, mejorar o restaurar las capacidades físicas de los pacientes que padezcan de alguna enfermedad o lesiones por accidente o a causa de un daño neuromusculoesquelético adquirido o congénito, esto por medio de la correcta valoración funcional con el fin de determinar las deficiencias" },
  { name: "Terapia Respiratoria", img: TerapiaRepiratoria, desc: "La terapia respiratoria es un conjunto de técnicas que se usan para tratar problemas respiratorios. Su objetivo es mejorar la capacidad pulmonar, fortalecer los músculos respiratorios y aliviar los síntomas de las enfermedades respiratorias." },
  { name: "Medicina General", img: MedicinaGeneral, desc: "La medicina general es una especialidad médica que se encarga de la atención integral de las personas, desde la infancia hasta la vejez. Es la primera línea de atención médica, y es conocida como la puerta de entrada al sistema de salud." },
  { name: "Terapia Ocupacional", img: TerapiaOcupacional, desc: "La terapia ocupacional es un tratamiento que ayuda a las personas a realizar actividades cotidianas de manera más autónoma. Se basa en el uso de actividades como el trabajo, el cuidado y el juego." },
  { name: "Ortopedia", img: Ortopedia, desc: "La ortopedia es la especialidad médica que se enfoca en el diagnóstico, tratamiento y rehabilitación de lesiones y enfermedades del sistema musculoesquelético, que incluye huesos, articulaciones, ligamentos, tendones y músculos." },
];

function Services() {
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

      {selectedService && (
  <div className="modal-overlay">
    <div className="modal">
      <h2 style={{ color: "orange" }}>{selectedService.name}</h2>
      {/* ✅ Asegurar que la descripción se muestre */}
      {selectedService.desc ? (
        <p>{selectedService.desc}</p>
      ) : (
        <p style={{ color: "red" }}>Descripción no disponible</p>
      )}
      <button onClick={() => setSelectedService(null)}>Cerrar</button>
    </div>
  </div>
)}
    </section>
  );
}

export default Services;
