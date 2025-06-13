        // src/component/EquipoPreview.js
        import React from "react";
        import { useNavigate } from "react-router-dom";
        import Doctor1 from "../Component/img/Doctor2.jpg";
import Doctor2 from "../Component/img/Doctor.jpg";
import Doctor3 from "../Component/img/Doctora.jpg";


        import "./EquipoPreview.css";

        const EquipoPreview = () => {
        const navigate = useNavigate();

        const handleVerEquipo = () => {
            navigate("/nuestro-equipo");
        };

  const equipo = [
  {
    nombre: "Dra. Fredy Anaya",
    especialidad: "Rehabilitación oral, Odontología general",
    imagen: Doctor1,
  },
  {
    nombre: "Dr. Juan Cabezas",
    especialidad: "Cirugía, Odontología general",
    imagen: Doctor2,
  },
  {
    nombre: "Dra. Sofía Köstner",
    especialidad: "Ortodoncia, Odontología general",
    imagen: Doctor3,
  },
];


        return (
            <div className="equipo-preview">
            <h2 className="titulo-equipo">Nuestro equipo</h2>

            <div className="cards-equipo">
                {equipo.map((persona, index) => (
                <div key={index} className="card-doctor">
                    <img src={persona.imagen} alt={persona.nombre} />
                    <div className="info-doctor">
                    <h4>{persona.nombre}</h4>
                    <p>{persona.especialidad}</p>
                    <span className="saber-mas" onClick={handleVerEquipo}>
                        Saber más
                    </span>
                    </div>
                </div>
                ))}
            </div>

            <button className="btn-equipo" onClick={handleVerEquipo}>
                CONOCER TODO EL EQUIPO
            </button>
            </div>
        );
        };

        export default EquipoPreview;
