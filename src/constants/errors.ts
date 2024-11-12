import { StatusCodes } from "http-status-codes";
import { ERROR_CODES } from "src/enums";

export const ERROR_TYPE = {
  [ERROR_CODES.USER_NOT_FOUND]: {
    code: StatusCodes.NOT_FOUND,
    message: "User not found",
  },
  [ERROR_CODES.USER_ALREADY_EXISTS]: {
    code: StatusCodes.CONFLICT,
    message: "User already exists",
  },
  [ERROR_CODES.USER_UNAUTHORIZED]: {
    code: StatusCodes.UNAUTHORIZED,
    message: "User is not authorized",
  },
  [ERROR_CODES.USER_FORBIDDEN]: {
    code: StatusCodes.FORBIDDEN,
    message: "User does not have permission",
  },

  [ERROR_CODES.INVALID_CREDENTIALS]: {
    code: StatusCodes.UNAUTHORIZED,
    message: "Invalid credentials provided",
  },
  [ERROR_CODES.INVALID_REFRESH_TOKEN_SECRET]: {
    code: StatusCodes.UNAUTHORIZED,
    message: "Invalid refresh token secret",
  },
  [ERROR_CODES.INVALID_JWT_SECRET]: {
    code: StatusCodes.UNAUTHORIZED,
    message: "Invalid JWT secret",
  },
  [ERROR_CODES.TOKEN_EXPIRED]: {
    code: StatusCodes.UNAUTHORIZED,
    message: "Authentication token has expired",
  },
  [ERROR_CODES.TOKEN_INVALID]: {
    code: StatusCodes.UNAUTHORIZED,
    message: "Invalid authentication token",
  },
  [ERROR_CODES.ACCESS_DENIED]: {
    code: StatusCodes.FORBIDDEN,
    message: "Access denied",
  },

  [ERROR_CODES.VALIDATION_ERROR]: {
    code: StatusCodes.BAD_REQUEST,
    message: "Validation error",
  },
  [ERROR_CODES.MISSING_FIELDS]: {
    code: StatusCodes.BAD_REQUEST,
    message: "Required fields are missing",
  },
  [ERROR_CODES.INVALID_FORMAT]: {
    code: StatusCodes.BAD_REQUEST,
    message: "Invalid data format",
  },
  [ERROR_CODES.OUT_OF_RANGE]: {
    code: StatusCodes.BAD_REQUEST,
    message: "Value is out of range",
  },

  [ERROR_CODES.DB_CONNECTION_ERROR]: {
    code: StatusCodes.INTERNAL_SERVER_ERROR,
    message: "Database connection error",
  },
  [ERROR_CODES.DB_QUERY_FAILED]: {
    code: StatusCodes.INTERNAL_SERVER_ERROR,
    message: "Database query failed",
  },
  [ERROR_CODES.DB_DUPLICATE_ENTRY]: {
    code: StatusCodes.CONFLICT,
    message: "Duplicate database entry",
  },

  [ERROR_CODES.FILE_TOO_LARGE]: {
    code: StatusCodes.REQUEST_TOO_LONG,
    message: "File size is too large",
  },
  [ERROR_CODES.UNSUPPORTED_FILE_TYPE]: {
    code: StatusCodes.UNSUPPORTED_MEDIA_TYPE,
    message: "Unsupported file type",
  },
  [ERROR_CODES.FILE_UPLOAD_FAILED]: {
    code: StatusCodes.INTERNAL_SERVER_ERROR,
    message: "File upload failed",
  },

  // API & Request errors
  [ERROR_CODES.BAD_REQUEST]: {
    code: StatusCodes.BAD_REQUEST,
    message: "Bad request",
  },
  [ERROR_CODES.NOT_FOUND]: {
    code: StatusCodes.NOT_FOUND,
    message: "Resource not found",
  },
  [ERROR_CODES.METHOD_NOT_ALLOWED]: {
    code: StatusCodes.METHOD_NOT_ALLOWED,
    message: "HTTP method not allowed",
  },
  [ERROR_CODES.RATE_LIMIT_EXCEEDED]: {
    code: StatusCodes.TOO_MANY_REQUESTS,
    message: "Rate limit exceeded",
  },

  // Server errors
  [ERROR_CODES.INTERNAL_ERROR]: {
    code: StatusCodes.INTERNAL_SERVER_ERROR,
    message: "Internal server error",
  },
  [ERROR_CODES.SERVICE_UNAVAILABLE]: {
    code: StatusCodes.SERVICE_UNAVAILABLE,
    message: "Service temporarily unavailable",
  },
  [ERROR_CODES.GATEWAY_TIMEOUT]: {
    code: StatusCodes.GATEWAY_TIMEOUT,
    message: "Gateway timeout",
  },

  // External service errors
  [ERROR_CODES.EXTERNAL_SERVICE_ERROR]: {
    code: StatusCodes.BAD_GATEWAY,
    message: "External service error",
  },
  [ERROR_CODES.THIRD_PARTY_API_ERROR]: {
    code: StatusCodes.BAD_GATEWAY,
    message: "Third-party API error",
  },
  [ERROR_CODES.PAYMENT_FAILED]: {
    code: StatusCodes.PAYMENT_REQUIRED,
    message: "Payment process failed",
  },
};
