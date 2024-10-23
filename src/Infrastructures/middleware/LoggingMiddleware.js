import { logger } from "../logger/logger.js";

export const LoggingMiddleware = (err, req, res, next) => {
  res.on('finish', () => {
    logger.info({
      method: req.method,
      headers: req.headers,
      url: `${req.originalUrl}`,
      request: req.body,
      response: responseBody,
      statusCode: res.statusCode,
    });
  });
  next();
};
