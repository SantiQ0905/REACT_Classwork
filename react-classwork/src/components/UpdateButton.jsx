import React from 'react';
import Button from '@mui/material/Button';

const UpdateButton = ({ onUpdate }) => (
    <Button variant="contained" onClick={onUpdate}>
        Actualizar valor
    </Button>
);

export default UpdateButton;
1