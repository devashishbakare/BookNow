const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github").Strategy;
const User = require("../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.BACKEND_URL}/auth/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ email: profile.emails[0].value });

        if (!user) {
          const saltRounds = 10;
          const salt = bcrypt.genSaltSync(saltRounds);
          const hash = bcrypt.hashSync(profile.id, salt);
          user = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            password: hash,
          });
          await user.save();
          console.log("creating user");
        }

        const payload = {
          userId: user._id,
          email: user.email,
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
          expiresIn: "3d",
        });
        console.log("returning user");
        return done(null, { token });
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: `${process.env.BACKEND_URL}/auth/github/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ email: profile.emails[0].value });

        if (!user) {
          const saltRounds = 10;
          const salt = bcrypt.genSaltSync(saltRounds);
          const hash = bcrypt.hashSync(profile.id, salt);
          user = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            password: hash,
          });
          await user.save();
        }

        const payload = {
          userId: user._id,
          email: user.email,
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
          expiresIn: "3d",
        });
        return done(null, { token });
      } catch (error) {
        return done(error, null);
      }
    }
  )
);
