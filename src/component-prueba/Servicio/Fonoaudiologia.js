import React from "react";
import { motion } from "framer-motion";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import styles from "./Especialidad.module.css";

const Fonoaudiologia = () => (
  <motion.div
    className={styles.container}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <h1 className={styles.title}>
      <FaAssistiveListeningSystems className={styles.icon} /> Fonoaudiología
    </h1>
    <p className={styles.description}>
      La fonoaudiología evalúa, diagnostica y trata trastornos de la comunicación, el lenguaje y la deglución, ayudando a niños y adultos a mejorar su calidad de vida.
    </p>
  </motion.div>
);

export default Fonoaudiologia;