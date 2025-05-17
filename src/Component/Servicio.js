import React from "react";
import './Servicio.css';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServicioCardPropio from "./ServicioCardPropio"; // Importa nuestro nuevo componente

// Importa tus imágenes (asegúrate de que las rutas sean correctas, relativas a 'public/')
import fonoaudiologia from '../Component/img/Fonoaudiología.png';
import psicologia from '../Component/img/Psicología.png';
import terepeafisica from '../Component/img/Terapia Física.png';
import medicinalGeneral from '../Component/img/Medicina General.png';
import  ortopedia from '../Component/img/ortopedia.png';
// import terapiaocupacional from '../Component/img/Terapia Ocupacional.png;'
import terapiarespiratoria from '../Component/img/Terapia Respiratoria.png'
import LogicaRedMore from "./LogicaRedMore";


//     <LogicaRedMore
//    [   { 
//     id:"Fonoaudiologia",
//     name:"Fonoaudiologia",
//     des:"la fonodiologia se encargar de ciertas partes del",
    
// } ],
    
//     /> 

    
     
    
    
const serviciosData = [
    


  

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
        iconSrc: terepeafisica,
        desc: "La Terapia Física busca prevenir, mejorar...",
        linkTo: "/servicios/terapia-fisica",
    },
    {
        id: "terapia-respiratoria",
        name: "Terapia Respiratoria",
        iconSrc: terapiarespiratoria,
        desc: "La terapia respiratoria es un conjunto de técnicas...",
        linkTo: "/servicios/terapia-respiratoria",
    },
    {
        id: "medicina-general",
        name: "Medicina General",
        iconSrc: medicinalGeneral,
        desc: "La medicina general es una especialidad médica...",
        linkTo: "/servicios/medicina-general",
    },
    // {
    //     id: "terapia-ocupacional",
    //     name: "Terapia Ocupacional",
    //     iconSrc: terapiaocupacional,
    //     desc: "La terapia ocupacional es un tratamiento que ayuda...",
    //     linkTo: "/servicios/terapia-ocupacional",
    // },
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