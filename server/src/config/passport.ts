import passport from "passport";
import Google from "passport-google-oauth20";
import logger from "../utils/logger";
import prisma from "../prisma";

// save user into session as req.session.passport.user = {id: user.id}
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// save user into request object each time - req.user = userData
passport.deserializeUser(async (id, done) => {
  const userData = await prisma.user.findFirst({ where: { id: id as number } });
  done(null, userData);
});

// Configure strategy
passport.use(
  new Google.Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
      callbackURL: process.env.GOOGLE_REDIRECT!,
    },
    async (_, __, profile, done) => {
      // 1. Check if user exist in database
      let currentUser = await prisma.user.findFirst({
        where: { googleId: profile.id },
      });

      // 2. Create user using googleid
      if (!currentUser) {
        currentUser = await prisma.user.create({
          data: {
            googleId: profile.id,
            name: profile.displayName || "User", // add default
            avatar: profile._json.picture!,
          },
        });
      }
      done(null, { id: currentUser.id });
    }
  )
);
