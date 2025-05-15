import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; // Icono de flecha
import { Link as RouterLink } from 'react-router-dom';

function ServicioCard({ icon, title, description, linkTo }) {
    return (
        <Box
            sx={{
                backgroundColor: '#f9f9f9', // Un fondo gris claro
                borderRadius: 2,
                padding: 3,
                textAlign: 'left',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                height: '100%', // Para que todas las tarjetas tengan la misma altura si están en un grid
            }}
        >
            <Box
                sx={{
                    backgroundColor: '#e0f7fa', // Un color de fondo claro para el icono (ejemplo: azul claro)
                    color: '#00bcd4', // Color del icono (ejemplo: azul más oscuro)
                    borderRadius: 1,
                    padding: 2,
                    width: 'fit-content',
                }}
            >
                {/* Aquí iría el icono del servicio */}
                {icon}
            </Box>

            <Typography variant="h6" component="h3" sx={{ fontWeight: 600, color: '#333' }}>
                {title}
            </Typography>

            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>

            <Button
                component={RouterLink}
                to={linkTo}
                size="small"
                sx={{
                    color: '#1976d2',
                    fontWeight: 600,
                    '&:hover': {
                        backgroundColor: 'transparent',
                        textDecoration: 'underline',
                    },
                    padding: 0,
                    justifyContent: 'flex-start',
                }}
                endIcon={<ArrowForwardIosIcon sx={{ fontSize: 'small' }} />}
            >
                Leer más
            </Button>
        </Box>
    );
}

export default ServicioCard;