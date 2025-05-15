import React from "react";
import HeroSection from "./HeroSection";
import Services from "./Servicio";
import AboutUs from "./AboutUs";
// import Testimonials from "./Testimonials"; // Si creas un componente de testimonios
import ContactSection from "./Contact"; // Asegúrate de que este componente esté adaptado o creado
import Footer from "./Footer";
import { motion } from "framer-motion";

const Home = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <motion.div variants={sectionVariants} initial="hidden" animate="visible">
            <HeroSection />
            <Services />
            <AboutUs />
            {/* <Testimonials /> */}
            <ContactSection />
            <Footer />
        </motion.div>
    );
};

export default Home;