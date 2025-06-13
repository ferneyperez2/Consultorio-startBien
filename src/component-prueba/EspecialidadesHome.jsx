import React from 'react';
import { useLocation } from 'react-router-dom';

const EspecialidadesHome = () => {
  const query = new URLSearchParams(useLocation().search);
  const categoria = query.get("categoria");

  const especialidadesMedicas = [
    "Medicina General",
    "Ortopedia",
    "Fonoaudiología",
    "Psicología",
    "Terapia Física",
    "Terapia Respiratoria",
    "Terapia Ocupacional",
  ];

  return (
    <div>
      <h2>Especialidades</h2>
      <div className="lista-especialidades">
        {(categoria === "medica" ? especialidadesMedicas : []).map((nombre, idx) => (
          <div key={idx} className="especialidad-item">
            {nombre}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EspecialidadesHome;
