import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../Component/Mapa.css"; // Importamos los estilos

const Mapa = () => {
  const position = [7.9804, -75.4202]; // Coordenadas de la dirección

  // Función para abrir Google Maps con la dirección
  const abrirGoogleMaps = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=7.9804,-75.4202",
      "_blank"
    );
  };

  return (
    <div className="mapa-container">
      <MapContainer center={position} zoom={15} style={{ width: "100%", height: "100%" }}>
        {/* Capa del mapa con OpenStreetMap */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />

        {/* Marcador con evento de clic para abrir Google Maps */}
        <Marker position={position} eventHandlers={{ click: abrirGoogleMaps }}>
          <Popup>
            📍 <strong>Consultorio</strong> <br />
            Cl. 13 #3-39, Montelíbano, Córdoba <br />
            <button className="popup-button" onClick={abrirGoogleMaps}>
              Ir en Google Maps
            </button>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Mapa;
