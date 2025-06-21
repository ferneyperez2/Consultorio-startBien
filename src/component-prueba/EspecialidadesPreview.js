import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaStethoscope,
  FaBone,
  FaBrain,
  FaRunning,
  FaWind,
  FaHands,
  FaAssistiveListeningSystems,
  FaAppleAlt,        // Nutrición
  FaSmile,           // Estética Facial
  FaSpa              // Estética Corporal
} from "react-icons/fa";
import "./EspecialidadesPreview.css";

const especialidades = [
  { nombre: "Medicina General", id: "medicina-general", icono: <FaStethoscope size={36} /> },
  { nombre: "Fonoaudiología", id: "fonoaudiologia", icono: <FaAssistiveListeningSystems size={36} /> },
  { nombre: "Psicología", id: "psicologia", icono: <FaBrain size={36} /> },
  { nombre: "Terapia Física", id: "terapia-fisica", icono: <FaRunning size={36} /> },
  { nombre: "Terapia Respiratoria", id: "terapia-respiratoria", icono: <FaWind size={36} /> },
  { nombre: "Terapia Ocupacional", id: "terapia-ocupacional", icono: <FaHands size={36} /> },
  { nombre: "Nutrición", id: "nutricion", icono: <FaAppleAlt size={36} /> },
  { nombre: "Estética Facial", id: "estetica-facial", icono: <FaSmile size={36} /> },
  { nombre: "Estética Corporal", id: "estetica-corporal", icono: <FaSpa size={36} /> },
];

const EspecialidadesPreview = () => {
  const navigate = useNavigate();

  const handleRedirect = (id) => {
    navigate(`/servicios/${id}`);
  };

  return (
    <div className="especialidades-preview">
      <div className="intro-text">
        <h2>Nuestras especialidades</h2>
        <p>
          Contamos con profesionales del área de medicina general y terapias especializadas para abordar la totalidad de los problemas que afectan al paciente.
        </p>
        <button onClick={() => navigate("/especialidades?categoria=medica")} className="btn-saber-mas">
          SABER MÁS
        </button>
      </div>

      <div className="iconos-container">
        {especialidades.map((item, index) => (
          <div
            key={index}
            className="icono-especialidad"
            onClick={() => handleRedirect(item.id)}
            style={{ cursor: "pointer" }}
          >
            <div className="icono">{item.icono}</div>
            <div className="nombre">{item.nombre}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EspecialidadesPreview;