/* istanbul ignore file */
import { Router } from "express";

export const routes = (handler) => {
  const router = new Router();
  router.post('/', handler.postUserHandler);
  return router;
}