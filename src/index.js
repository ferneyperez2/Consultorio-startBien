// import React from "react";
// import ReactDOM from "react-dom/client"; // Importa desde "react-dom/client"
// import App from "./App";
// import './index.css';

// const root = ReactDOM.createRoot(document.getElementById("root")); // Usa createRoot
// root.render(<App />);


// import React from "react";
// import ReactDOM from "react-dom/client"; // Importa 'createRoot' desde 'react-dom/client'
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root")); // Crear el root
// root.render(  // Usar `render` con el root
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ThemeProvider } from "../src/Component/ThemeContext";  // Asegúrate de importar correctamente el ThemeProvider

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider>  {/* Envuelve toda tu aplicación con el ThemeProvider */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);



