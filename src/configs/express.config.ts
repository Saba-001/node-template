import express from "express";
import cors from "cors";
import compression from "compression";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { mainRouter } from "src/routes/main.route";
import { errorHandler } from "src/middlewares";

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

const expressApp = express();

expressApp.use(cors({ credentials: true }));
expressApp.use(compression());
expressApp.use(cookieParser());
expressApp.use(bodyParser.json());
expressApp.use("/api/", mainRouter);

expressApp.use(errorHandler);

export default expressApp;
