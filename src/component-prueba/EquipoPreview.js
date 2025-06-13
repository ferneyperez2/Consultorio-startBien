        // src/component/EquipoPreview.js
        import React from "react";
        import { useNavigate } from "react-router-dom";

        import "./EquipoPreview.css";

        const EquipoPreview = () => {
        const navigate = useNavigate();

        const handleVerEquipo = () => {
            navigate("/nuestro-equipo");
        };

        const equipo = [
            {
            nombre: "Dra. Fredy anaya",
            especialidad: "Rehabilitación oral, Odontología general",
            imagen: '../Component/img/Doctor2.jpg', 
            },
            {
            nombre: "Dr. Juan Cabezas",
            especialidad: "Cirugía, Odontología general",
            imagen: '../Component/img/Doctor.jpg',
            },
            {
            nombre: "Dra. Sofía Köstner",
            especialidad: "Ortodoncia, Odontología general",
            imagen: '../Component/img/Doctora.jpg',
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
