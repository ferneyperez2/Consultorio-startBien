// src/component/EspecialidadesPreview.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./EspecialidadesPreview.css"; // Asegúrate de tener estilos opcionales

const EspecialidadesPreview = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    // Redirige a la página de especialidades médicas
    navigate("/especialidades?categoria=medica");
  };

  const especialidades = [
    { nombre: "Medicina General", icono: "🩺" },
    { nombre: "Ortopedia", icono: "🦴" },
    { nombre: "Fonoaudiología", icono: "🗣️" },
    { nombre: "Psicología", icono: "🧠" },
    { nombre: "Terapia Física", icono: "🏃" },
    { nombre: "Terapia Respiratoria", icono: "🌬️" },
    { nombre: "Terapia Ocupacional", icono: "👐" },
  ];

  return (
    <div className="especialidades-preview">
      <div className="intro-text">
        <h2>Otras especialidades</h2>
        <p>
          Contamos con profesionales del área de medicina general y terapias especializadas para abordar la totalidad de los problemas que afectan al paciente.
        </p>
        <button onClick={handleRedirect} className="btn-saber-mas">
          SABER MÁS
        </button>
      </div>

      <div className="iconos-container">
        {especialidades.map((item, index) => (
          <div
            key={index}
            className="icono-especialidad"
            onClick={handleRedirect}
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
