import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function HeroSection() {
    return (
        <Box
            sx={{
                backgroundImage: 'url(/images/fisioterapia-hero.jpg)', // Reemplaza con tu imagen
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                padding: '80px 0',
                textAlign: 'center',
            }}
        >
            <Container maxWidth="md">
                <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                   StartBien
                </Typography>
                <Typography variant="subtitle1" paragraph sx={{ fontSize: '1.2rem' }}>
                    Salud , Belleza y Bienestar
                </Typography>
                <Box sx={{ mt: 3 }}>
                    <Button variant="contained" color="primary" size="large" component={RouterLink} to="/agendar-cita">
                        Agendar una Cita
                    </Button>
                    <Button variant="outlined" color="white" size="large" sx={{ ml: 2 }}>
                        Conocer Nuestros Servicios
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

export default HeroSection;