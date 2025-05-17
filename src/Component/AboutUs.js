import React from 'react';
import { Box, Typography, Container, Grid, Avatar } from '@mui/material';
 import logo from '../Component/img/logo.jpeg'

function AboutUs() {
    return (
        <Box sx={{ py: 8, bgcolor: '#f9f9f9' }}>
            <Container maxWidth="md">
                <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, textAlign: 'center' }}>
                    Nuestro Enfoque en Fisioterapia
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 2 }}>
                    En StartBien, estamos comprometidos con tu recuperación y bienestar. Nuestro equipo de fisioterapeutas altamente calificados utiliza un enfoque integral y personalizado para tratar una amplia gama de condiciones musculoesqueléticas. Creemos en la importancia de una evaluación exhaustiva, un plan de tratamiento individualizado y un seguimiento continuo para lograr los mejores resultados posibles.
                </Typography>
                <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
                    <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                        <Avatar alt="Nuestro Equipo" src={logo} sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }} />
                        <Typography variant="h6" sx={{ fontWeight: 500 }}>Equipo Especializado</Typography>
                        <Typography variant="body2" color="text.secondary">Profesionales con amplia experiencia en fisioterapia.</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                        <Typography variant="h6" sx={{ fontWeight: 500 }}>Enfoque Personalizado</Typography>
                        <Typography variant="body2" color="text.secondary">Planes de tratamiento adaptados a tus necesidades específicas.</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                        <Typography variant="h6" sx={{ fontWeight: 500 }}>Tecnología Avanzada</Typography>
                        <Typography variant="body2" color="text.secondary">Utilizamos equipos modernos para optimizar tu recuperación.</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default AboutUs;