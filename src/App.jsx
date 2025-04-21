// src/App.jsx
import { Box } from '@mui/material';
import React, { useContext } from 'react';
import {
  Routes,
  Route,
  Navigate,
  Outlet
} from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Login from './components/Login';
import Home from './views/Home';
import About from './views/About';
import Register     from './views/Register';    

const ProtectedLayout = () => {
  const { logout } = useContext(AuthContext);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      <NavigationBar onLogout={logout} />

      {/* El Outlet (Home, About, etc) crece y empuja el Footer hacia abajo */}
      <Box sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
};

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route
        path="/login"
        element={ user ? <Navigate to="/" replace /> : <Login /> }
      />

      <Route
        path="/register"
        element={ user ? <Navigate to="/" replace /> : <Register /> }
      />

      <Route
        element={ user ? <ProtectedLayout /> : <Navigate to="/login" replace /> }
      >
        <Route path="/"      element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>

      <Route
        path="*"
        element={ user ? <Navigate to="/" /> : <Navigate to="/login" /> }
      />
    </Routes>
  );
}

export default App;

