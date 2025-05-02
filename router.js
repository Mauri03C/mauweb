const express = require('express'); // Framework
// Objeto para rutas
const conexion = require('./database/db'); // Conexión
const router = express.Router(); // Corregido: "router . express. Router()" a "express.Router()"

// Peticiones
// Respuestas

router.get('/', (req, res) => {
  res.send("SENATI Ingeniería de Software con IA Chiclayo");
});

router.get('/desarrollador', (req, res) => {
  res.send("Carlos Rojas");
});

router.get('/carrera', (req, res) => {
  res.render("index"); // Plantilla
});

module.exports = router;
