import React from "react";
import './Servicio.css';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServicioCardPropio from "./ServicioCardPropio"; // Importa nuestro nuevo componente

// Importa tus imágenes (asegúrate de que las rutas sean correctas, relativas a 'public/')
import fonoaudiologia from './img/Fonoaudiología.png'
import  psicologia from './img/Psicología.png'
import terapiafisica from './img/Terapia Física.png'
import terapiaRespiratoria from './img/Terapia Respiratoria.png';
import medicinaGeneral from './img/Medicina General.png';
import terapiaOcupacional from './img/Terapia Ocupacional.png';
import ortopedia from './img/ortopedia.png';
const serviciosData = [
    {
        id: "fonoaudiologia",
        name: "Fonoaudiología",
        iconSrc: fonoaudiologia,
        desc: "Disciplina encargada de evaluar, diagnosticar...",
        linkTo: "/servicios/fonoaudiologia",
    },
    {
        id: "psicologia",
        name: "Psicología",
        iconSrc: psicologia,
        desc: "La psicología es la ciencia que estudia la conducta humana...",
        linkTo: "/servicios/psicologia",
    },
    {
        id: "terapia-fisica",
        name: "Terapia Física",
        iconSrc: terapiafisica,
        desc: "La Terapia Física busca prevenir, mejorar...",
        linkTo: "/servicios/terapia-fisica",
    },
    {
        id: "terapia-respiratoria",
        name: "Terapia Respiratoria",
       iconSrc: terapiaRespiratoria,
        desc: "La terapia respiratoria es un conjunto de técnicas...",
        linkTo: "/servicios/terapia-respiratoria",
    },
    {
        id: "medicina-general",
        name: "Medicina General",
        iconSrc: medicinaGeneral,
        desc: "La medicina general es una especialidad médica...",
        linkTo: "/servicios/medicina-general",
    },
    {
        id: "terapia-ocupacional",
        name: "Terapia Ocupacional",
        iconSrc: terapiaOcupacional,
        desc: "La terapia ocupacional es un tratamiento que ayuda...",
        linkTo: "/servicios/terapia-ocupacional",
    },
    {
        id: "ortopedia",
        name: "Ortopedia",
        iconSrc: ortopedia,
        desc: "La ortopedia es la especialidad médica que se enfoca...",
        linkTo: "/servicios/ortopedia",
    },
];

function Services() {
    return (
        <motion.section
            id="services"
            className="services-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <h2>Servicios</h2>
            <div className="services-grid">
                {serviciosData.map((servicio) => (
                    <motion.div key={servicio.id} className="service-card-wrapper">
                        <ServicioCardPropio
                            iconSrc={servicio.iconSrc}
                            title={servicio.name}
                            description={servicio.desc}
                            linkTo={`/servicios/${servicio.id}`}
                        />
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}

export default Services;