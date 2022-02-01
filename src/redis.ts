import RedisClient from "ioredis";
import logger from "./utils/logger";

const redisClient = new RedisClient();
logger.info("Connected to Redis Database");

export default redisClient;
