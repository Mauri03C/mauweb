const mysql = require('mysql');

// Cadena de conexion = STRING
// objetos de conexión = OBJECT = {KEY:VALUE}
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'movietime'
});

// Ejemplo de cadena de conexión como string
// "server=localhost;user=root;password=;database=mibd"

// Activar la conexión
conexion.connect((error) => {
    if(error) {
        console.error("Error en la conexion");
        return; // FIN
    }
    console.log("Conexión Exitosa");
});

// Exportar el objeto de conexion para utilizar su existencia
module.exports = conexion;
