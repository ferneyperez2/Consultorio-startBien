import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

// Importa tus imágenes de los servicios (asegúrate de que las rutas sean correctas)
import TerapiaManualIcon from './img/terapia-manual.jpg';
import ElectroterapiaIcon from './img/electroterapia.jpg';
import RehabilitacionDeportivaIcon from './img/rehabilitacion-deportiva.jpg';
import TerapiaAcuaticaIcon from './img/terapia-acuatica.jpg';
import MasoterapiaIcon from './img/masoterapia.jpg';
import PunciónSecaIcon from './img/puncion-seca.jpg';
import EjercicioTerapeuticoIcon from './img/ejercicio-terapeutico.jpg';
import ReeducacionPosturalIcon from './img/reeducacion-postural.jpg';

const serviciosData = [
    { id: "terapia-manual", name: "Terapia Manual", icon: TerapiaManualIcon },
    { id: "electroterapia", name: "Electroterapia", icon: ElectroterapiaIcon },
    { id: "rehabilitacion-deportiva", name: "Rehabilitación Deportiva", icon: RehabilitacionDeportivaIcon },
    { id: "terapia-acuatica", name: "Terapia Acuática", icon: TerapiaAcuaticaIcon },
    { id: "masoterapia", name: "Masoterapia", icon: MasoterapiaIcon },
    { id: "puncion-seca", name: "Punción Seca", icon: PunciónSecaIcon },
    { id: "ejercicio-terapeutico", name: "Ejercicio Terapéutico", icon: EjercicioTerapeuticoIcon },
    { id: "reeducacion-postural", name: "Reeducación Postural", icon: ReeducacionPosturalIcon },
];

function SabesMas() {
    return (
        <Box sx={{ py: 4, bgcolor: '#f9f9f9', textAlign: 'center' }}>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                ¿Quieres Saber Más?
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
                Explora en detalle cada uno de nuestros servicios de fisioterapia.
            </Typography>
            <List sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}>
                {serviciosData.map((servicio) => (
                    <ListItem key={servicio.id} disableGutters sx={{ py: 1 }}>
                        <Button
                            component={RouterLink}
                            to={`/servicios/${servicio.id}`}
                            variant="outlined"
                            fullWidth
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                py: 2,
                                px: 2,
                                borderRadius: '8px',
                                borderColor: '#ccc',
                                '&:hover': {
                                    borderColor: '#1976d2',
                                    backgroundColor: '#e3f2fd',
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src={servicio.icon}
                                alt={servicio.name}
                                sx={{ width: 40, height: 40, mr: 2, borderRadius: '4px' }}
                            />
                            <ListItemText primary={servicio.name} />
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default SabesMas;