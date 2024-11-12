import jwt from "jsonwebtoken";
import {
  ACCESS_TOKEN_EXPIRATION_TIME,
  REFRESH_TOKEN_EXPIRATION_TIME,
} from "src/constants";
import { AppError } from "./error.util";
import { ERROR_CODES } from "src/enums";

const JWT_SECRET = process.env.JWT_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

export const generateAccessToken = (userId: number) => {
  if (!JWT_SECRET) {
    throw new AppError(ERROR_CODES.INVALID_JWT_SECRET);
  }
  return jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRATION_TIME,
  });
};

export const generateRefreshToken = (userId: number) => {
  if (!REFRESH_TOKEN_SECRET) {
    throw new AppError(ERROR_CODES.INVALID_REFRESH_TOKEN_SECRET);
  }
  return jwt.sign({ userId }, REFRESH_TOKEN_SECRET, {
    expiresIn: REFRESH_TOKEN_EXPIRATION_TIME,
  });
};

export const verifyAccessToken = (token: string) => {
  if (!JWT_SECRET) {
    throw new AppError(ERROR_CODES.INVALID_REFRESH_TOKEN_SECRET);
  }
  return jwt.verify(token, JWT_SECRET);
};

export const verifyRefreshToken = (token: string) => {
  if (!REFRESH_TOKEN_SECRET) {
    throw new AppError(ERROR_CODES.INVALID_REFRESH_TOKEN_SECRET);
  }
  return jwt.verify(token, REFRESH_TOKEN_SECRET);
};
