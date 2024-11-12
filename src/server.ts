import dotenv from "dotenv";
import { createServer } from "http";
import { expressApp, redisClient } from "./configs";

dotenv.config();

const expressServer = createServer(expressApp);

const PORT = 8001;

redisClient.on("connect", () => {
  if (!expressServer.listening) {
    expressServer.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }
});
