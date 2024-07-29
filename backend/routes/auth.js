const express = require("express");
const passport = require("passport");

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/google/callback", (req, res, next) => {
  passport.authenticate("google", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect("https://booknow1.netlify.app/signIn");
    }
    // Generate token and redirect
    const token = user.token;
    res.redirect("https://booknow1.netlify.app/?token=${token}");
  })(req, res, next);
});

router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get("/github/callback", (req, res, next) => {
  passport.authenticate("github", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect(`${process.env.FRONTEND_URL}/signIn`);
    }
    // Generate token and redirect
    const token = user.token;
    res.redirect(`${process.env.FRONTEND_URL}/?token=${token}`);
  })(req, res, next);
});

module.exports = router;
