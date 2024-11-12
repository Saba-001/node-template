import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ERROR_CODES } from "src/enums";

import { authService, userService } from "src/services";
import { AppError } from "src/utils";

export const authController = {
  register: async (req: Request, res: Response) => {
    const { username, password } = req.body;
    if (!username && !password) {
      throw new AppError(ERROR_CODES.INVALID_CREDENTIALS);
    }

    const tokens = await authService.create(username, password);
    res.status(StatusCodes.CREATED).json(tokens);
  },
  login: async (req: Request, res: Response) => {
    const { username, password } = req.body;
    if (!username && !password) {
      throw new AppError(ERROR_CODES.INVALID_CREDENTIALS);
    }

    const tokens = await authService.login(username, password);

    res.status(StatusCodes.OK).json(tokens);
  },
  refreshAccessToken: async (req: Request, res: Response) => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      throw new AppError(ERROR_CODES.TOKEN_INVALID);
    }

    const tokens = await authService.refreshAccessToken(refreshToken);
    res.status(StatusCodes.OK).json(tokens);
  },
};
