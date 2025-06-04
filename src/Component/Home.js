import React from "react";
import HeroSection from "./HeroSection";
import Services from "./Servicio";
import AboutUs from "./AboutUs";
// import Testimonials from "./Testimonials"; // Si creas un componente de testimonios
import ContactSection from "./Contact"; // Asegúrate de que este componente esté adaptado o creado
import { motion } from "framer-motion";
import FondoDecorativo from "./FondoDecorativo";
import BeneficioFisioCard from "./BeneficioFisioCard";
import BeneficiosFisioterapia from "./BeneficiosFisioterapia";
import  PhysicalResource from '../ServiceConcepto/PsychologySection'
// import PhysicalResources from "../ServiceConcepto/PsychologySection";
// import FisioterapiaRecursos from "../FisioterapiaRecursos";
import Fonoaudiologia from "../ServiceConcepto/Fonoaudiologia";
const Home = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <motion.div variants={sectionVariants} initial="hidden" animate="visible">
            <FondoDecorativo/>
            <HeroSection />
            {/* <HeroFisio/> */}
            <Services />
            <Fonoaudiologia/>
            {/* <PsychologySection /> */}
            <AboutUs />
           <BeneficiosFisioterapia/>
           <PhysicalResource/>

            {/* <Testimonials /> */}
            {/* <ContactSection /> */}
            
        </motion.div>
    );
};

export default Home;