// src/context/AuthContext.jsx
import React, { createContext, useState } from 'react';
import { loginRequest, fetchUserInfo } from '../api/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
const [user, setUser]     = useState(null);
const [loading, setLoading] = useState(false);

// LOGIN: llama al endpoint, guarda token y carga user
const login = async (email, password) => {
        setLoading(true);
        try {
            const { data } = await loginRequest(email, password);
            const token = data.token;
            localStorage.setItem('token', token);

            const resUser = await fetchUserInfo(token);
            setUser(resUser.data);
        } finally {
            setLoading(false);
        }
    };

    // LOGOUT: quita token y limpia user
    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
