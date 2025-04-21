// src/api/auth.js
import axios from 'axios';

const API = 'https://worldsmithsstudiosapidb-production.up.railway.app/worldsmiths/api';

export const client = axios.create({
    baseURL: API,
    withCredentials: false,
    headers: { 'Content-Type': 'application/json' }
});

export const loginRequest = (email, password) =>
    axios.post(`https://worldsmithsstudiosapidb-production.up.railway.app/worldsmiths/api/login`, { email, password });

export const fetchUserInfo = (token) =>
    axios.get(`https://worldsmithsstudiosapidb-production.up.railway.app/worldsmiths/api/user`, {
        headers: { Authorization: `Bearer ${token}` }
});

export const registerRequest = ({ username, email, password }) =>
    client.post('https://worldsmithsstudiosapidb-production.up.railway.app/worldsmiths/api/register', 
    {
        username,
        email,
        password
    }
);