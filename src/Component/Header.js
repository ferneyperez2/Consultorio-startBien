import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices'; // Un icono de servicio médico
import { Link as RouterLink } from 'react-router-dom'; // Para navegación interna

function Header() {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#ffffff', color: '#333', boxShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px' }}>
                {/* Logo */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="primary" // Usamos el color primario para el icono
                        aria-label="logo"
                        component={RouterLink}
                        to="/"
                        sx={{ mr: 1 }}
                    >
                        <MedicalServicesIcon sx={{ fontSize: 30 }} /> {/* Icono de bolsa médica */}
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 600, color: '#2e7d32' }}>
                        StartBien
                    </Typography>
                </Box>

                {/* Menú de navegación */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
                    <Button color="inherit" component={RouterLink} to="/especialidades">
                        ESPECIALIDADES
                    </Button>
                    <Button color="inherit" component={RouterLink} to="/para-pacientes">
                        PARA PACIENTES
                    </Button>
                    <Button color="inherit" component={RouterLink} to="/para-profesionales">
                        PARA PROFESIONALES
                    </Button>
                    <Button variant="contained" color="primary" sx={{ fontWeight: 600 }}>
                        ACCEDER
                    </Button>
                </Box>

                {/* Posible icono de menú para móvil (opcional) */}
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    {/* Aquí podrías añadir un IconButton con MenuIcon para navegación móvil */}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;