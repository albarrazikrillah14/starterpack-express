/* istanbul ignore file */
import { Sequelize } from "sequelize";
import { config } from "../../../Commons/config.js";

const db = new Sequelize({
  dialect: 'postgres',
  host: config.database.host,
  port: config.database.port,
  username: config.database.user,
  password: config.database.password,
  database: config.database.name,
});

export default db;