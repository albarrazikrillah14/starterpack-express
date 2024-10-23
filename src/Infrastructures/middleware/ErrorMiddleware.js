/* istanbul ignore file */
import { ClientError } from "../../Commons/exceptions/ClientError.js";
import { logger } from "../logger/logger.js";

export const ErrorMiddleware = (err, req, res, next) => {
  if (!err) {
    next();
  } 

  logger.error({
    method: req.method,
    headers: req.headers,
    url: `${req.originalUrl}`,
    request: req.body,
    errors: err.message,
    statusCode: err.statusCode,
  });

  if (err instanceof ClientError) {
    res.status(err.statusCode).json({
      error: err.message,
    });
    return;
  }

  res.status(500).json({
    errors: 'terjadi kesalahan pada server kami'
  });
}