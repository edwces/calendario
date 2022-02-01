import { ApolloServer } from "apollo-server-express";
import "reflect-metadata";
import express from "express";
import { buildSchema } from "type-graphql";
import { resolvers } from "./generated/type-graphql/index";
import prismaClient from "./prisma";
import logger from "./utils/logger";
import passport from "passport";
import "./config/environment";
import "./config/passport";

const PORT = +process.env.PORT!;
const HOST = process.env.HOST!;

(async () => {
  // Create express app
  const app = express();

  // MIDDLEWARE ----
  app.use(passport.initialize());

  // ROUTES ----
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile"] })
  );
  app.get("/auth/redirect", passport.authenticate("google"), (req, res) => {
    res.redirect("/");
  });
  app.get("/", (req, res) => {
    res.send(`hello ${req.user?.id}`);
  });

  // Create graphql schema
  const schema = await buildSchema({
    resolvers: resolvers,
  });
  logger.info("GraphQL schema built");
  // Create apollo server with schema
  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res, prisma: prismaClient }),
  });
  await apolloServer.start();
  logger.info("Apollo Server started");
  // Mount apollo middleware
  apolloServer.applyMiddleware({
    app,
  });

  app.listen(PORT, HOST, () => {
    logger.info(`Running at http://${HOST}:${PORT}`);
  });
})();
