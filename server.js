// server.js

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Ruta para la página de bienvenida
app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

// Configura una ruta para manejar las solicitudes de los enlaces dinámicos
app.get('/redirect', (req, res) => {
  const restauranteId = req.query.restauranteId;
  const numeroMesa = req.query.numeroMesa;

  // Aquí, utiliza los valores de restauranteId y numeroMesa para generar el enlace dinámico adecuado
  const dynamicLink = `tuapp://restaurante/${restauranteId}/mesa/${numeroMesa}`;
  
  const isAppInstalled = false; // Implementa aquí la lógica para verificar si la app está instalada en el dispositivo del usuario

  if (isAppInstalled) {
    // Si la app está instalada, redirecciona a la pantalla de la app correspondiente
    res.redirect(dynamicLink);
  } else {
    // Si la app no está instalada, redirecciona al navegador web con el fallback URL
    const fallbackURL = `https://caferio.com/web/restaurante/${restauranteId}/mesa/${numeroMesa}`;
    res.redirect(fallbackURL);
  }
});

// Inicia el servidor en el puerto que proporciona Vercel
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
