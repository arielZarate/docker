const { Sequelize } = require("sequelize");

const DATABASE = process.env.POSTGRES_DB;
const USER = process.env.POSTGRES_USER;
const PASSWORD = process.env.POSTGRES_PASSWORD;

//ESTOS SON LOS DATOS CONFIGURADOS EN EL DOCKER-COMPOSE
const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});

module.exports = sequelize;
