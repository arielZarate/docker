const express = require("express");

//MYSQL
const mysql = require("mysql2");

//POSTGRES
const { Pool } = require("pg");

const app = express();

const router = express.Router();
const PORT = 3001;
app.name = "server Node con docker";

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
  host: "localhost", // El nombre del servicio del contenedor de MySQL
  user: "root",
  password: "admin",
  database: "prueba-test",
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

//================otra prueba ========================

//conexion a postgres (otra conexion)

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "pet",
  password: "admin",
  port: 5432,
});

const checkConnection = async () => {
  try {
    const client = await pool.connect();
    console.log("Database connectin in POSTGRESQL");
    client.release(); // Important: release the client back to the pool
  } catch (err) {
    console.error("Database connection failed", err.stack);
  }
};

checkConnection();

//como yo ya cargue algunos datos en la bd solo hago un select para probar //esto es mejor hacerlo con un ORM

// Listar datos
app.get("/pet", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM animals");
    console.log("animales:", result.rows);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error listing animals:", err);
    res.status(500).json({ error: "Error listing animals" });
  }
});

//iniciando el server
app.listen(PORT, () => {
  console.log(`listening in on port ${PORT} `);
});
