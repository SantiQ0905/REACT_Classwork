// src/views/Register.jsx
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { registerRequest } from '../api/auth';

const Register = () => {
const [username, setUsername] = useState('');
const [email,    setEmail]    = useState('');
const [password, setPassword] = useState('');
const [error,    setError]    = useState('');
const [success,  setSuccess]  = useState('');
const navigate = useNavigate();

const handleSubmit = async e => {
e.preventDefault();
setError('');
try {
    await registerRequest({ username, email, password });
    setSuccess('¡Registro exitoso! Redirigiendo a login…');
    setTimeout(() => navigate('/login'), 1500);
} catch (err) {
    setError(err.response?.data?.error || 'Error en el registro');
}
};

return (
<Box
    component="form"
    onSubmit={handleSubmit}
    sx={{
    width: 320,
    mx: 'auto',
    mt: 8,
    display: 'flex',
    flexDirection: 'column',
    gap: 2
    }}
>
    <Typography variant="h5" align="center">
    Registro
    </Typography>

    <TextField
    label="Username"
    value={username}
    onChange={e => setUsername(e.target.value)}
    required
    />
    <TextField
    label="Email"
    type="email"
    value={email}
    onChange={e => setEmail(e.target.value)}
    required
    />
    <TextField
    label="Password"
    type="password"
    value={password}
    onChange={e => setPassword(e.target.value)}
    required
    />

    {error && (
    <Typography color="error" variant="body2">
        {error}
    </Typography>
    )}
    {success && (
    <Typography color="primary" variant="body2">
        {success}
    </Typography>
    )}

    <Button type="submit" variant="contained">
    Registrarse
    </Button>

    <Typography variant="body2" align="center">
    ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
    </Typography>
</Box>
);
};

export default Register;
