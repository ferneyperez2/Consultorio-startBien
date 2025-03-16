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
      if (window.google) {  
        const marcadorAvanzado = new window.google.maps.marker.AdvancedMarkerElement({
          position: centro,
          map: map,
          title: 'Consultorio'
        });
  
        // Añadir el marcador al mapa
        marcadorAvanzado.setMap(map);
      } else {
        console.error('Google Maps no ha cargado correctamente');
      }
    };
  
    useEffect(() => {
      setMapaCargado(true);
    }, []);
  
    return (
      <LoadScript googleMapsApiKey="TU_API_KEY">
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
