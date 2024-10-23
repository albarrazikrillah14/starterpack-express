/* istanbul ignore file */
import db from "../src/Infrastructures/database/postgres/db.js";
import { User } from "./user.js";

db.define('User', User, { tableName: 'users', underscored: true });

export default db;