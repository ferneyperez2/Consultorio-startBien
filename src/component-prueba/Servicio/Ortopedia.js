import React from "react";
import { motion } from "framer-motion";
import { FaBone } from "react-icons/fa";
import styles from "./Especialidad.module.css";

const Ortopedia = () => (
  <motion.div
    className={styles.container}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <h1 className={styles.title}>
      <FaBone className={styles.icon} /> Ortopedia
    </h1>
    <p className={styles.description}>
      La ortopedia se encarga del diagnóstico y tratamiento de lesiones y enfermedades del sistema musculoesquelético. Nuestro equipo ofrece soluciones para fracturas, lesiones deportivas y problemas articulares.
    </p>
  </motion.div>
);

export default Ortopedia;