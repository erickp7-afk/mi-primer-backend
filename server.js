const express = require("express");
const app = express();

// Render te asigna el puerto por una variable de entorno.
// NUNCA lo pongas fijo (ej: 3000) en producción.
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("¡Hola! Mi backend vive en Render 🚀");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});