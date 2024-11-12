import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

const redisClient = createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
  },
  password: process.env.REDIS_PASSWORD,
  username: process.env.REDIS_USERNAME,
});

redisClient.on("error", (err) => {
  console.error("Redis connection error:", err);
  process.exit(1);
});

redisClient.on("connect", () => {
  console.log("Connected to Redis");
});

redisClient.connect().catch((error) => {
  console.error("Failed to connect to Redis:", error);
  process.exit(1);
});

export default redisClient;
