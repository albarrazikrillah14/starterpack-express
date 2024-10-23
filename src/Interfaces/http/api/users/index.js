/* istanbul ignore file */
import { UsersHandler } from "./handler.js";
import { routes } from "./routes.js";
import express from 'express';

export const users = (container) => {
  const usersHandler = new UsersHandler(container);
  return routes(usersHandler);
}