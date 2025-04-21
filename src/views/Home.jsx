// src/views/Home.jsx
import React, { useState, useContext } from 'react';
import {
Box,
Container,
Card,
CardMedia,
CardContent,
Typography
} from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import InfoParagraph from '../components/InfoParagraph';
import UpdateButton from '../components/UpdateButton';
import CustomButton from '../components/CustomButton';

const Home = () => {
const { user } = useContext(AuthContext);
const [variable, setVariable] = useState('Estado inicial');

const handleUpdate = () => {
setVariable('¡Estado actualizado!');
};

return (
<Container
    maxWidth="md"
    sx={{
    py: 4,
    display: 'flex',
    justifyContent: 'center'
    }}
>
    <Card
    raised
    sx={{
        width: '100%',
        borderRadius: 3,
        boxShadow: 4
    }}
    >
    {/* Imagen de bienvenida */}
    <CardMedia
        component="img"
        image="/image_01.jpg"
        alt="Foto de bienvenida"
        sx={{
        maxHeight: 400,
        objectFit: 'cover'
        }}
    />

    <CardContent sx={{ textAlign: 'center' }}>
        {/* Título */}
        <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ fontWeight: 'bold' }}
        >
        ¡Bienvenido, {user?.username || 'invitado'}!
        </Typography>

        {/* Descripción */}
        <Typography
        variant="body1"
        sx={{
            fontSize: '1.2rem',
            color: 'text.secondary',
            mb: 3
        }}
        >
        Esta pagina es un ejemplo de cómo usar Material-UI con React. Aquí puedes
        ver un ejemplo de un componente de tarjeta con una imagen, un título y un párrafo. Además,
        notese que el componente de tarjeta tiene un efecto de sombra y un borde redondeado. Existe 
        una barra de navegación y un pie de página que se muestran en todas las páginas.
        </Typography>

        {/* --- NUEVO BLOQUE: variable y botones --- */}
        <Box sx={{ mt: 2 }}>
        {/* Párrafo que muestra la variable */}
        <InfoParagraph text={`La variable vale: ${variable}`} />

        {/* Botón que la actualiza */}
        <UpdateButton onUpdate={handleUpdate} />

        {/* Botón personalizado de ejemplo */}
        <CustomButton onClick={() => alert('¡Has pulsado el botón personalizado!')}>
            Botón Personalizado
        </CustomButton>
        </Box>
    </CardContent>
    </Card>
</Container>
);
};

export default Home;
