import React from "react";
import { motion } from "framer-motion";
import { FaAppleAlt } from "react-icons/fa";
import styles from "./Especialidad.module.css";

const Nutricion = () => (
  <motion.div
    className={styles.container}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <h1 className={styles.title}>
      <FaAppleAlt className={styles.icon} /> Nutrición
    </h1>
    <p className={styles.description}>
      Nuestro servicio de nutrición te ayuda a alcanzar un estilo de vida saludable mediante asesoría personalizada, planes alimenticios y educación nutricional adaptada a tus necesidades.
    </p>
  </motion.div>
);

export default Nutricion;