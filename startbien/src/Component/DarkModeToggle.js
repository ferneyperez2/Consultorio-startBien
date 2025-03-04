import React, { useState } from "react";

const DarkModeToggle = () => {
  const [modoOscuro, setModoOscuro] = useState(localStorage.getItem("darkMode") === "true");

  const toggleDarkMode = () => {
    localStorage.setItem("darkMode", !modoOscuro);
    setModoOscuro(!modoOscuro);
  };

  return (
    <button className="dark-mode-toggle" onClick={toggleDarkMode}>
      {modoOscuro ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
    </button>
  );
};

export default DarkModeToggle;
