// src/views/About.jsx
import React from 'react';
import Slider from 'react-slick';
import { Container, Box, Typography } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
{ src: "/image_02.jpg", desc: "Una imagen de Aloy montando un Charger caminando por la playa en San Francisco, el Golden Gate se observa en el fondo destrozado y consumido por la malesa." },
{ src: "/image_03.jpg", desc: "Aloy descansado en una playa descalza, su vestimenta incluye un penacho con un color rojo profundo predomiinante y la figura de el craneo de algun animal." },
{ src: "/image_04.jpg", desc: "Aloy caminando por la malesa con la vista fija en algo fuera de la imagen, se le ve asombrada e intrigada." },
{ src: "/image_05.jpg", desc: "Aloy asomando su cara en el reflejo de un lago, el agua es clara y nitida ella se nota enfocada, porta un pañuelo en su frente que evita que su cabello largo rizado y rojizo caiga en su cara." },
{ src: "/image_06.jpeg", desc: "Aloy en modo cazadora, caminando lentamente con su arco armado y una mirada atenta, su cara pintada de rojo, y su cabello predomina." }
];

const About = () => {
const settings = {
dots: true,
arrows: true,
infinite: true,
autoplay: true,
autoplaySpeed: 1800,
speed: 600,
slidesToShow: 1,
slidesToScroll: 1
};

return (
<Container maxWidth="md" sx={{ py: 4, textAlign: 'center' }}>
    <Typography variant="h4" gutterBottom>
    Acerca de esta pagina.
    </Typography>
    
    {/* Additional text outside the carousel */}
    <Typography
        variant="body1"
        sx={{ mb: 4, color: 'text.secondary' }}
    >
        Esta página está dedicada a mostrar imágenes y descripciones relacionadas con Aloy y su mundo. 
        Aquí podrás explorar diferentes aspectos visuales y narrativos que hacen de esta experiencia algo único.
    </Typography>


    {/* Box padre con overflow:hidden para asegurar el recorte */}
    <Box sx={{ overflow: 'hidden', borderRadius: 2 }}>
    <Slider {...settings}>
        {slides.map((slide, i) => (
        <Box key={i} sx={{ position: 'relative' }}>
            {/* imagen a pantalla completa y centrada */}
            <Box
            component="img"
            src={slide.src}
            alt={`Slide ${i + 1}`}
            sx={{
                display: 'block',
                width: '100%',
                height: { xs: 300, sm: 400, md: 500 },
                objectFit: 'cover',
            }}
            />
            <Typography
            variant="subtitle1"
            sx={{ mt: 2, color: 'text.secondary' }}
            >
            {slide.desc}
            </Typography>
        </Box>
        ))}
    </Slider>
    </Box>
</Container>
);
};

export default About;
