import React from "react";
import { motion } from "framer-motion";
import { FaSpa } from "react-icons/fa";
import styles from "./Especialidad.module.css";

const EsteticaCorporal = () => (
  <motion.div
    className={styles.container}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <h1 className={styles.title}>
      <FaSpa className={styles.icon} /> Estética Corporal
    </h1>
    <p className={styles.description}>
      Descubre nuestros tratamientos de estética corporal para moldear, tonificar y cuidar tu cuerpo, utilizando técnicas modernas y personalizadas para cada paciente.
    </p>
  </motion.div>
);

export default EsteticaCorporal;