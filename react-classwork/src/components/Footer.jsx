// src/components/Footer.jsx
import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => (
<Box
component="footer"
sx={{
    mt: 'auto',                
    py: 2,                      
    backgroundColor: 'primary.dark',
    color: 'common.white',
    boxShadow: '0 -2px 8px rgba(0,0,0,0.2)',
}}
>
<Container
    maxWidth="md"
    sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    }}
>
    <Typography variant="body2">
    © {new Date().getFullYear()} MyReactPage. Todos los derechos reservados.
    </Typography>

    <Typography variant="body2">
    Santiago Quintana Moreno A01571222
    </Typography>
</Container>
</Box>
);

export default Footer;
