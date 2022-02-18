import { ApolloServer, AuthenticationError } from "apollo-server-express";
import "reflect-metadata";
import express from "express";
import { buildSchema } from "type-graphql";
import { resolvers } from "./generated/type-graphql/index";
import prismaClient from "./prisma";
import logger from "./utils/logger";
import passport from "passport";
import session from "express-session";
import redisConnection from "connect-redis";
import "./config/environment";
import "./config/passport";
import redisClient from "./redis";
import cors from "cors";
import { MeResolver } from "./resolvers/meResolver";

const PORT = +process.env.PORT!;
const HOST = process.env.HOST!;

(async () => {
  // Create express app
  const app = express();
  const RStore = redisConnection(session);
  // MIDDLEWARE ----
  app.use(
    cors({
      credentials: true,
      origin: ["http://localhost:3000"],
    })
  );

  app.use(
    session({
      store: new RStore({ client: redisClient }),
      name: "sid",
      secret: process.env.SESSION_SECRET!,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
      },
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  // ROUTES ----
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile"] })
  );
  app.get("/auth/redirect", passport.authenticate("google"), (req, res) => {
    res.redirect("http://localhost:3001/");
  });
  app.get("/", (req, res) => {
    res.send(`hello ${req.user?.id}`);
  });

  // Create graphql schema
  const schema = await buildSchema({
    resolvers: [...resolvers, MeResolver],
  });
  logger.info("GraphQL schema built");
  // Create apollo server with schema
  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }) => {
      if (!req.user) throw new AuthenticationError("You must be logged in");

      return { req, res, prisma: prismaClient };
    },
  });
  await apolloServer.start();
  logger.info("Apollo Server started");
  // Mount apollo middleware
  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(PORT, HOST, () => {
    logger.info(`Running at http://${HOST}:${PORT}`);
  });
})();
