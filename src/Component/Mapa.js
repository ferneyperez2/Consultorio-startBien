import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../Component/Mapa.css";

const position = [7.9804, -75.4202];

const abrirGoogleMaps = () => {
  window.open(
    "https://www.google.com/maps/search/?api=1&query=7.9804,-75.4202",
    "_blank"
  );
};

const Mapa = () => (
  <div className="mapa-container">
    <MapContainer
      center={position}
      zoom={15}
      style={{ width: "100%", height: "320px", borderRadius: "16px", boxShadow: "0 2px 8px rgba(25,118,210,0.10)" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />
      <Marker
        position={position}
        eventHandlers={{
          click: abrirGoogleMaps,
        }}
      >
        <Popup>
          <div style={{ textAlign: "center" }}>
            <span role="img" aria-label="pin">📍</span> <strong>Consultorio</strong>
            <br />
            Cl. 13 #3-39, Montelíbano, Córdoba
            <br />
            <button className="popup-button" onClick={abrirGoogleMaps}>
              Ir en Google Maps
            </button>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  </div>
);

export default Mapa;