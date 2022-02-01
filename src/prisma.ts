import { PrismaClient } from "@prisma/client";
import logger from "./utils/logger";

const prismaClient = new PrismaClient();
logger.info("Connected to Prisma Client");

export default prismaClient;
