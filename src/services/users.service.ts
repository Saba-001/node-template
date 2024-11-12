import { redisClient } from "src/configs";
import {
  REFRESH_TOKEN_EXPIRATION_TIME,
  USER_ID_GENERATOR_KEY,
  USER_PREFIX,
  USER_REFRESH_TOKEN_FIELD,
  USERNAME_TO_ID_PREFIX,
} from "src/constants";
import { User } from "src/models";
import { generateRefreshToken } from "src/utils";

export const userService = {
  generateNextId: () => {
    return redisClient.incr(USER_ID_GENERATOR_KEY);
  },
  create: async (user: User) => {
    await redisClient.hSet(USER_PREFIX + user.id, user);
    await redisClient.set(USERNAME_TO_ID_PREFIX + user.username, user.id);
    return userService.updateRefreshToken(user.id);
  },
  updateRefreshToken: async (userId: string) => {
    const refreshToken = generateRefreshToken(Number(userId));
    const key = USER_PREFIX + userId;
    const field = USER_REFRESH_TOKEN_FIELD;

    await redisClient.hSet(key, field, refreshToken);
    await redisClient.hExpire(key, field, REFRESH_TOKEN_EXPIRATION_TIME);
    return refreshToken;
  },
  getByName: async (username: string) => {
    const userId = await redisClient.get(USERNAME_TO_ID_PREFIX + username);
    if (!userId) {
      return undefined;
    }
    return userService.getById(userId);
  },
  getById: async (userId: string) => {
    const user = await redisClient.hGetAll(USER_PREFIX + userId);
    if (!user.id) {
      return undefined;
    }
    return user as User;
  },
};
