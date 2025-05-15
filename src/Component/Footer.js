import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';

function Footer() {
    return (
        <Box sx={{ bgcolor: '#f2f2f2', py: 4, textAlign: 'center', mt: 6 }}>
            <Container maxWidth="md">
                <Typography variant="body2" color="text.secondary" align="center" gutterBottom>
                    © {new Date().getFullYear()} <b>StartBien</b> Todos los derechos reservados.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                    <Link href="/politica-de-privacidad" color="inherit" underline="hover">
                        Política de Privacidad
                    </Link>
                    <Link href="/terminos-y-condiciones" color="inherit" underline="hover">
                        Términos y Condiciones
                    </Link>
                    <Link href="/contacto" color="inherit" underline="hover">
                        Contacto
                    </Link>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;