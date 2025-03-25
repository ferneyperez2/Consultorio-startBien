import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, } from '@react-google-maps/api';

const MapaConsultorio = () => {
    const [mapaCargado, setMapaCargado] = useState(false);

    // Coordenadas del consultorio
    const centro = {
      lat: 10.3454,  // Latitud de la dirección
      lng: -75.3498  // Longitud de la dirección
    };
  
    // Configuración del estilo del mapa
    const estiloContenedorMapa = {
      width: '100%',
      height: '450px'
    };
  
    const agregarMarcadorAvanzado = (map) => {
        if (window.google && window.google.maps && window.google.maps.marker && window.google.maps.marker.AdvancedMarkerElement) {
          try {
            const marcadorAvanzado = new window.google.maps.marker.AdvancedMarkerElement({
              position: centro,
              map: map,
              title: 'StartBien Consultorio',
              icon: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            });
            marcadorAvanzado.setMap(map);
          } catch (error) {
            console.error('Error al crear el marcador avanzado:', error);
          }
        } else {
          console.error('AdvancedMarkerElement no está disponible en la API de Google Maps');
        }
      };
      
  
    useEffect(() => {
      setMapaCargado(true);
    }, []);
  
    return (
      <LoadScript googleMapsApiKey="AIzaSyAUZi5yBdxBAY11RWzA1PZTMXvdeDS1jsI">
        {mapaCargado && (
          <GoogleMap
            mapContainerStyle={estiloContenedorMapa}
            center={centro}
            zoom={16}
            onLoad={(map) => agregarMarcadorAvanzado(map)}
          />
        )}
      </LoadScript>
    );
};

export default MapaConsultorio;
