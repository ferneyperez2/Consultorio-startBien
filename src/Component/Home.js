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
import HeroFisio from "./HeroFisio";

const Home = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <motion.div variants={sectionVariants} initial="hidden" animate="visible">
            <FondoDecorativo/>
            <HeroSection />
            <HeroFisio/>
            <Services />
            <AboutUs />
           <BeneficiosFisioterapia/>
            {/* <Testimonials /> */}
            {/* <ContactSection /> */}
            
        </motion.div>
    );
};

export default Home;