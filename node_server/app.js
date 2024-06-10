const express = require("express");
const mysql = require("mysql2");
const app = express();

const router = express.Router();
const PORT = 3001;
app.name = "server Node con docker";

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
  host: "localhost", // El nombre del servicio del contenedor de MySQL
  user: "root",
  password: "admin",
  database: "test-docker",
  port: "3307",
});

// Conectar a MySQL
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// Ruta de prueba

app.get("/", (req, res) => {
  db.query("SELECT 1 + 1 AS solution", (err, results) => {
    if (err) throw err;
    console.log(results[0]);
    res.send(`La solución es: ${results[0].solution}`);
  });
});

//iniciando el server
app.listen(PORT, () => {
  console.log(`listening in on port ${PORT} `);
});
