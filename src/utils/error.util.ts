import { ERROR_TYPE } from "src/constants";
import { ERROR_CODES } from "src/enums";

type ErrorOptions = {
  message?: string;
  statusCode?: number;
};

export class AppError extends Error {
  public statusCode: number;
  public errorCode: ERROR_CODES;
  public errorMessage: string;

  constructor(errorCode: ERROR_CODES, custom?: ErrorOptions) {
    const errorType = ERROR_TYPE[errorCode];

    super(custom?.message || errorType.message);
    Object.setPrototypeOf(this, AppError.prototype);
    this.statusCode = custom?.statusCode || errorType.code;
    this.errorMessage = custom?.message || errorType.message;
    this.errorCode = errorCode;

    this.name = this.constructor.name;
  }
}
