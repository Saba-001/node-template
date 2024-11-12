import { ERROR_CODES } from "src/enums";
import {
  comparePassword,
  generateAccessToken,
  generateRefreshToken,
  hashPassword,
  verifyRefreshToken,
} from "src/utils";
import { AppError } from "src/utils";
import { userService } from "./users.service";
import { User } from "src/models";

export const authService = {
  create: async (username: string, password: string) => {
    const user = await userService.getByName(username);
    if (user) {
      throw new AppError(ERROR_CODES.USER_ALREADY_EXISTS);
    }
    const id = await userService.generateNextId();
    const hashedPassword = await hashPassword(password);

    const userPayload = {
      id: String(id),
      username,
      password: hashedPassword,
    };

    const refreshToken = await userService.create(userPayload);
    const accessToken = generateAccessToken(Number(userPayload.id));

    return { accessToken, refreshToken };
  },
  login: async (username: string, password: string) => {
    const user = await userService.getByName(username);
    if (!user) {
      throw new AppError(ERROR_CODES.INVALID_CREDENTIALS);
    }
    const isMatchedPassword = await comparePassword(password, user.password);
    if (!isMatchedPassword) {
      throw new AppError(ERROR_CODES.INVALID_CREDENTIALS);
    }

    const accessToken = generateAccessToken(Number(user.id));
    const refreshToken = await userService.updateRefreshToken(user.id);

    return { accessToken, refreshToken };
  },
  refreshAccessToken: async (currentRefreshToken: string) => {
    const decoded = verifyRefreshToken(currentRefreshToken) as User;
    const user = await userService.getById(decoded.id);

    if (user?.refreshToken !== currentRefreshToken) {
      throw new AppError(ERROR_CODES.TOKEN_INVALID);
    }

    const accessToken = generateAccessToken(Number(user.id));
    const refreshToken = await userService.updateRefreshToken(user.id);
    return { accessToken, refreshToken };
  },
};
