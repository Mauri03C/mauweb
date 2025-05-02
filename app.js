const express = require('express');
const app = express();

// Motor de plantillas EJS, sencillo y potente
app.set('view engine', 'ejs');

// Enrutador principal
// El carácter '/' representa la raíz de tu web, como en https://miweb.com
app.use('/', require('./router'));

// Crear y lanzar el servidor, escuchando atentamente en el puerto 5000
app.listen(5000, () => {
  console.log("🚀 Servidor ejecutándose impecablemente en http://localhost:5000");
});