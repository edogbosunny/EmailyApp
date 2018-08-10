const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
require("../models/User");
const User = mongoose.model("users");

//serialize user
passport.serializeUser((user, done) => {
//   console.log(user.id);
  done(null, user.id);
});
// deserialize user
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

//init passport
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("googleID", profile.id);
      const existingUser = await User.findOne({
        googleId: profile.id
      });
      if (existingUser) {
        done(null, existingUser);
      } else {
        const user = await new User({
          googleId: profile.id
        }).save();
        done(null, user);
      }
    }
  )
);
