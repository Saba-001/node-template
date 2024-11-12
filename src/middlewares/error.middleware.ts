import { Request, Response, NextFunction } from "express";
import { ERROR_CODES } from "src/enums";
import { AppError } from "src/utils";

const isProduction = process.env.NODE_ENV === "production";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      error: err.errorMessage,
      type: err.errorCode,
      timestamp: new Date().toISOString(),
    });
    next();
    return;
  }

  const statusCode = err.status || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    error: message,
    type: ERROR_CODES.INTERNAL_ERROR,
    timestamp: new Date().toISOString(),
    stack: isProduction ? undefined : err.stack,
  });
  next();
  return;
};

type ControllerFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

export const errorCatcher = (controller: ControllerFunction) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};
