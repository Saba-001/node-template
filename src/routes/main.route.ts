import express from "express";
import userRoutes from "./user.route";
import authRoutes from "./auth.route";

const mainRouter = express.Router();

mainRouter.use("/users/", userRoutes);
mainRouter.use("/auth/", authRoutes);

export { mainRouter };
