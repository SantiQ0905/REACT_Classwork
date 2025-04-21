# Worldsmiths Studios App

**Aplicación web de una sola página** construida con Vite, React y Material UI, que incluye registro, login, páginas protegidas (Home y About), un carrusel de imágenes y gestión de autenticación con JWT.

---

## 📋 Contenido

1. [Características](#-características)
2. [Requisitos](#-requisitos)
3. [Instalación](#-instalación)
4. [Configuración](#-configuración)
5. [Estructura del proyecto](#-estructura-del-proyecto)
6. [Uso](#-uso)
7. [Rutas principales](#-rutas-principales)
8. [Tecnologías](#-tecnologías)
9. [Licencia](#-licencia)

---

## 🚀 Características

- Autenticación de usuarios (registro y login) con JWT.
- Páginas protegidas: **Home** y **About**.
- **Home**: imagen de bienvenida, párrafo con variable reactiva, botones de acción.
- **About**: carrusel de imágenes (`react-slick`) con descripciones.
- Gestión de estado de sesión con React Context.
- Estilos responsivos y componentes de Material UI.
- Footer sticky y menú de navegación.

---

## 📦 Requisitos

- Node.js v14+
- npm o yarn
- Backend API con endpoints:
  - `POST /worldsmiths/api/register` — registro de usuarios
  - `POST /worldsmiths/api/login` — autenticación
  - `GET  /worldsmiths/api/user`  — obtención de datos del usuario autenticado

---

## 🔧 Instalación

1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd react-classwork
   ```

2. Instala dependencias:
   ```bash
   npm install
   # o yarn install
   ```

3. Crea un archivo `.env` en la raíz y añade:
   ```env
   VITE_API_BASE_URL=https://worldsmithsstudiosapidb-production.up.railway.app
   ```

4. Inicia la aplicación en modo desarrollo:
   ```bash
   npm run dev
   # o yarn dev
   ```

5. Abre `http://localhost:5173` en tu navegador.

---

## ⚙️ Configuración

- **Proxy** (opcional): en `vite.config.js` puedes configurar el proxy para desarrollo:
  ```js
  server: {
    proxy: {
      '/worldsmiths/api': {
        target: process.env.VITE_API_BASE_URL,
        changeOrigin: true,
        secure: false
      }
    }
  }
  ```

- **Variables de entorno**:
  - `VITE_API_BASE_URL`: URL base de tu API.

---

## 🗂️ Estructura del proyecto

```bash
react-classwork/
├─ public/              # Archivos estáticos (favicon, imágenes carrusel)
│  ├─ image_02.jpg
│  ├─ image_03.jpg
│  └─ ...
│
├─ src/
│  ├─ api/              # Cliente Axios y peticiones (login, register, fetchUser)
│  │  └─ auth.js
│  │
│  ├─ context/          # Contexto de autenticación (AuthContext)
│  │  └─ AuthContext.jsx
│  │
│  ├─ components/       # Componentes reutilizables
│  │  ├─ NavigationBar.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Login.jsx
│  │  ├─ InfoParagraph.jsx
│  │  ├─ UpdateButton.jsx
│  │  └─ CustomButton.jsx
│  │
│  ├─ views/            # Vistas de páginas
│  │  ├─ Home.jsx
│  │  ├─ About.jsx
│  │  └─ Register.jsx
│  │
│  ├─ App.jsx           # Rutas y layout principal
│  ├─ main.jsx          # Entry point, BrowserRouter + AuthProvider
│  └─ index.css         # Estilos globales
│
├─ vite.config.js       # Configuración de Vite
├─ package.json
└─ README.md            # Documentación del proyecto
```

---

## 💻 Uso

- **Registro**: accede a `/register`, rellena el formulario y envía.
- **Login**: accede a `/login` con tus credenciales.
- **Home**: una vez autenticado, verás una bienvenida personalizada, variable reactiva y botones.
- **About**: carrusel interactivo de imágenes con descripciones.
- **Logout**: en la barra de navegación, pulsa “Logout” para cerrar sesión.

---

## 🌐 Rutas principales

| Ruta       | Descripción                         |
| ---------- | ----------------------------------- |
| `/login`   | Pantalla de inicio de sesión        |
| `/register`| Pantalla de registro de usuarios    |
| `/`        | Página Home (protegida)             |
| `/about`   | Página About con carrusel (protegida)|

---

## 🛠️ Tecnologías

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Material UI](https://mui.com/)
- [React Router v6](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [React Slick](https://react-slick.neostack.com/)

---

## 📄 Licencia

Este proyecto está bajo la [MIT License](LICENSE).

