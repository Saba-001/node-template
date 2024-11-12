import express from "express";
import { authController } from "src/controllers";
import { authenticate, errorCatcher } from "src/middlewares";

const authRoutes = express.Router();

authRoutes.post("/register", errorCatcher(authController.register));
authRoutes.post("/login", errorCatcher(authController.login));
authRoutes.post("/refresh", errorCatcher(authController.refreshAccessToken));

export default authRoutes;
