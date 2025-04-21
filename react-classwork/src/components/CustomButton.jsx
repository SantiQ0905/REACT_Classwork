import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ children, onClick }) => (
    <Button variant="outlined" onClick={onClick}>
        {children}
    </Button>
);

export default CustomButton;
