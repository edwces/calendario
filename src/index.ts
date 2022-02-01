import { ApolloServer } from "apollo-server-express";
import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import { buildSchema } from "type-graphql";
import { resolvers } from "./generated/type-graphql/index";
import prismaClient from "./prisma";
import logger from "./utils/logger";

dotenv.config();

const PORT = +process.env.PORT!;
const HOST = process.env.HOST!;

(async () => {
  // Create express app
  const app = express();

  // Create graphql schema
  const schema = await buildSchema({
    resolvers: resolvers,
  });

  // Create apollo server with schema
  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res, prisma: prismaClient }),
  });

  await apolloServer.start();

  // Mount apollo middleware
  apolloServer.applyMiddleware({
    app,
  });

  app.listen(PORT, HOST, () => {
    logger.info(`Running at http://${HOST}:${PORT}`);
  });
})();
