/* istanbul ignore file */
import dotenv from 'dotenv';

if (process.env.NODE_ENV === 'test') {
  dotenv.config({
    path: '.test.env'
  });
} else {
  dotenv.config();
}

export const config = {
  app: {
    host: process.env.APP_HOST,
    port: process.env.APP_PORT
  },
  database: {
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    name: process.env.PGDATABASE,
  }
}