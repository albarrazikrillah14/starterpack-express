import express from 'express';
import { users } from '../../Interfaces/http/api/users/index.js';

export const createServer = async (container) => {
  const server = new express();
  server.use(express.json());

  server.get('/', async (req, res) => {
    res.json({
      message: 'Hello, from medomeckz!'
    });
  });

  server.use('/users', users(container));

  return server;
}