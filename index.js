const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/User");
const passportConfig = require("./services/passport");
const authRoutes = require("./routes/authRoutes");
const billingRoute = require("./routes/billingRoutes");

mongoose.Promise = global.Promise;
const app = express();
//midleware for body parser

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

//cokkie midldeware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || 5000;

//init an dconect mongoose
mongoose
  .connect(
    keys.mongoUri,
    { useNewUrlParser: true }
  )
  .then(db => {
    console.log("mongo connected");
  })
  .catch(err => {
    console.log(err);
  });

authRoutes(app);
billingRoute(app);

if (process.env.NODE_ENV === "production") {
  //makes sure express serves production assets
  //like main.js amd main.css files
  app.use(express.static("client/build"));

  //Express will serve up the index.html file
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`connected on port $port `);
});

//or require(./routes/authRoutes)(app)
