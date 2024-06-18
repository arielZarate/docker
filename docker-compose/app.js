const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const morgan = require("morgan");
const sequelize = require("./lib/config");

const app = express();
app.use(express.json());
app.use(morgan("dev"));

//ruta test

app.get("/", (req, res) => {
  res.json("Hello World!");
});

async function Start() {
  try {
    await sequelize.authenticate();
    console.log("Conectado a la base de datos");

    //  .then((seq) => seq.sync({ force: true }));
    app.listen(3000, async () => {
      console.log("listening on port 3000...");
    });
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error);
  }
}

Start();
