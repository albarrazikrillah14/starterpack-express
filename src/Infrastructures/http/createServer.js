import express from 'express';
import { users } from '../../Interfaces/http/api/users/index.js';
import db from '../../../models/index.js';
import { ErrorMiddleware } from '../middleware/ErrorMiddleware.js';
import { LoggingMiddleware } from '../middleware/LoggingMiddleware.js';

export const createServer = async (container) => {
  const server = new express();
  server.use(express.json());

  await db.sync();

  server.get('/', async (req, res) => {
    res.json({
      message: 'Hello, from medomeckz!'
    });
  });

  server.use(LoggingMiddleware);
  server.use('/users', users(container));
  server.use(ErrorMiddleware);
  return server;
}