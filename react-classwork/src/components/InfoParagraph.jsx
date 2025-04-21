import React from 'react';
import { Typography } from '@mui/material';

const InfoParagraph = ({ text }) => {
return (
<Typography
    variant="body1"
    sx={{
    fontSize: '1.2rem',
    color: 'text.secondary',
    }}
>
    {text}
</Typography>
);
};

export default InfoParagraph;