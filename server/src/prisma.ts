import { PrismaClient } from "@prisma/client";
import logger from "./utils/logger";

const prismaClient = new PrismaClient();

prismaClient.$use(async (params, next) => {
  const before = Date.now();
  const result = await next(params);
  const after = Date.now();

  logger.debug(
    `Query ${params.model}.${params.action} took ${after - before}ms`
  );

  return result;
});

logger.info("Connected to Prisma Client");

export default prismaClient;
