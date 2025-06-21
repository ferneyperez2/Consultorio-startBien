import React from "react";
import { motion } from "framer-motion";
import { FaSmile } from "react-icons/fa";
import styles from "./Especialidad.module.css";

const EsteticaFacial = () => (
  <motion.div
    className={styles.container}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <h1 className={styles.title}>
      <FaSmile className={styles.icon} /> Estética Facial
    </h1>
    <p className={styles.description}>
      Ofrecemos tratamientos de estética facial para el cuidado y rejuvenecimiento de tu piel, mejorando tu apariencia y confianza con procedimientos seguros y efectivos.
    </p>
  </motion.div>
);

export default EsteticaFacial;