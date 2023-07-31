// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

// Configura una ruta para manejar las solicitudes de los enlaces dinámicos
app.get('/redirect', (req, res) => {
  const restauranteId = req.query.restauranteId;
  const numeroMesa = req.query.numeroMesa;
  const isAppInstalled = false; // Implementa aquí la lógica para verificar si la app está instalada en el dispositivo del usuario

  if (isAppInstalled) {
    // Si la app está instalada, redirecciona a la pantalla de la app correspondiente
    const appURL = `miapp://restaurante/${restauranteId}/mesa/${numeroMesa}`;
    res.redirect(appURL);
  } else {
    // Si la app no está instalada, redirecciona al navegador web con el fallback URL
    const fallbackURL = `https://caferio.com/web/restaurante/${restauranteId}/mesa/${numeroMesa}`;
    res.redirect(fallbackURL);
  }
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
