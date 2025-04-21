import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavigationBar = ({ onLogout }) => (
<AppBar position="static">
<Toolbar>
    <Typography variant="h6" sx={{ flexGrow: 1 }}>
    MyReactPage
    </Typography>
    <Button color="inherit" component={Link} to="/">
    Home
    </Button>
    <Button color="inherit" component={Link} to="/about">
    About
    </Button>
    <Button color="inherit" onClick={onLogout}>
    Logout
    </Button>
</Toolbar>
</AppBar>
);

export default NavigationBar;
