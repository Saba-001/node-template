import express from "express";
import { userController } from "src/controllers";

const userRoutes = express.Router();
userRoutes.post("/", userController.create);
userRoutes.get("/:id", userController.get);

export default userRoutes;
