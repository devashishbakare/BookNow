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
      return res.redirect("http://localhost:5173/signIn");
    }
    // Generate token and redirect
    const token = user.token;
    res.redirect(`http://localhost:5173/?token=${token}`);
  })(req, res, next);
});

module.exports = router;
