// src/components/Login.jsx
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { TextField, Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const Login = () => {
const { login, loading, user } = useContext(AuthContext);
const [email, setEmail]       = useState('');
const [password, setPassword] = useState('');
const [error, setError]       = useState('');

const handleSubmit = async e => {
e.preventDefault();
setError('');
try {
    await login(email, password);
    // al setUser() el App.jsx redirige a Home automáticamente
} catch (err) {
    setError(err.response?.data?.error || 'Error de login');
}
};

if (user) return null; // ya logueado, no mostrar

return (
<Box
    component="form"
    onSubmit={handleSubmit}
    sx={{ width: 300, mx: 'auto', mt: 8, display: 'flex', flexDirection: 'column', gap: 2 }}
>
    <Typography variant="h5" align="center">Iniciar Sesión</Typography>
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
    {error && <Typography color="error">{error}</Typography>}
    <Button type="submit" variant="contained" disabled={loading}>
    {loading ? 'Cargando…' : 'Login'}
    </Button>
    <Typography variant="body2" align="center">
        ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
    </Typography>
</Box>
);
};

export default Login;
